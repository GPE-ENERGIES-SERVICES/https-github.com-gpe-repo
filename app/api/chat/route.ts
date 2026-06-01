import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

// ─── Rate limiter (in-memory, adapté au faible trafic Vercel free) ───
const rateMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 10   // requêtes max par fenêtre
const RATE_WINDOW = 60_000 // par minute

// Instance OpenAI réutilisée entre les invocations (warm instances Vercel)
let _openai: OpenAI | null = null
function getOpenAI(): OpenAI {
  if (!_openai) _openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  return _openai
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW })
    return true
  }
  if (entry.count >= RATE_LIMIT) return false
  entry.count++
  return true
}

// ─── Prompt système GPE Énergies ──────────────────────────────────────
const SYSTEM_PROMPT = `Tu es l'assistant commercial virtuel de GPE Énergies & Services.

GPE est spécialisé en : installations électriques (courants forts & faibles), énergies renouvelables (photovoltaïque, solaire), mobilité électrique (bornes IRVE), rénovation énergétique, chauffage & climatisation (CVC), et bureau d'études.

RÈGLES STRICTES :
- Réponds UNIQUEMENT aux sujets liés à GPE Énergies & Services
- 2 à 3 phrases maximum par réponse, jamais de longs paragraphes
- Ton professionnel, chaleureux, rassurant
- Pour toute demande de devis ou intervention : orienter vers +213 549 48 00 97 ou contact@gpealgerie.com
- Ne jamais donner de prix fixes — toujours proposer un devis personnalisé gratuit
- Question hors sujet → répondre : "Je suis spécialisé dans les services de GPE Énergies. Pour toute autre question, contactez-nous directement."

INFOS ENTREPRISE :
- Tél : +213 549 48 00 97 | Email : contact@gpealgerie.com
- Adresse : Chemin Sidi Yahia, Résidence Coloris, Bir Mourad Raïs 16005, Alger
- Certifications : RGE, Qualifelec, IRVE, AFNOR, OPQIBI
- Interventions en France et à l'international (Afrique du Nord)

Réponds dans la langue de l'utilisateur. Français par défaut.`

// ─── Handler ─────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // Vérifie Content-Type
  const contentType = req.headers.get('content-type') ?? ''
  if (!contentType.includes('application/json')) {
    return NextResponse.json({ error: 'Content-Type invalide.' }, { status: 415 })
  }

  // Rate limit
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Trop de messages envoyés. Veuillez patienter une minute.' },
      { status: 429 }
    )
  }

  // Parse body
  let messages: { role: string; content: string }[]
  try {
    const body = await req.json()
    messages = body.messages
  } catch {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 })
  }

  // Validation
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: 'Messages invalides.' }, { status: 400 })
  }

  // Nettoyer + limiter l'historique pour réduire les coûts
  const history = messages
    .slice(-8) // 4 échanges max (8 messages)
    .filter(
      (m) =>
        (m.role === 'user' || m.role === 'assistant') &&
        typeof m.content === 'string' &&
        m.content.trim().length > 0
    )
    .map((m) => ({
      role: m.role as 'user' | 'assistant',
      content: m.content.slice(0, 500), // 500 chars max par message
    }))

  if (history.length === 0) {
    return NextResponse.json({ error: 'Messages invalides.' }, { status: 400 })
  }

  // Vérifier clé API
  if (!process.env.OPENAI_API_KEY) {
    console.error('[Chat] OPENAI_API_KEY manquante')
    return NextResponse.json(
      { error: 'Service non configuré. Contactez-nous au +213 549 48 00 97.' },
      { status: 503 }
    )
  }

  // Appel OpenAI (instance réutilisée)
  try {
    const openai = getOpenAI()

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',     // modèle le plus économique et performant
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...history,
      ],
      max_tokens: 220,           // réponses courtes → coût minimal
      temperature: 0.65,         // naturel mais cohérent
    })

    const reply =
      completion.choices[0]?.message?.content?.trim() ||
      "Je n'ai pas pu générer une réponse. Contactez-nous au +213 549 48 00 97."

    return NextResponse.json({ reply })
  } catch (err: unknown) {
    console.error('[Chat API Error]', err)

    // Distinguer les erreurs OpenAI courantes
    if (err instanceof Error && err.message.includes('API key')) {
      return NextResponse.json(
        { error: 'Clé API invalide. Contactez l\'administrateur.' },
        { status: 503 }
      )
    }

    return NextResponse.json(
      { error: 'Service temporairement indisponible. Réessayez dans un instant.' },
      { status: 503 }
    )
  }
}
