import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendContactEmail, sendConfirmationEmail } from '@/lib/mailer'

export const runtime = 'nodejs'

const contactSchema = z.object({
  name:    z.string().trim().min(2).max(120),
  email:   z.string().trim().email().max(200),
  phone:   z.string().trim().max(40).optional().or(z.literal('')),
  company: z.string().trim().max(160).optional().or(z.literal('')),
  service: z.string().trim().max(80).optional().or(z.literal('')),
  message: z.string().trim().min(20).max(5000),
  website: z.string().max(0).optional(), // honeypot
})

const rateBucket = new Map<string, { count: number; reset: number }>()
const RATE_LIMIT    = 5
const RATE_WINDOW_MS = 60 * 60 * 1000

function getClientIp(req: NextRequest): string {
  const fwd = req.headers.get('x-forwarded-for')
  if (fwd) return fwd.split(',')[0].trim()
  return req.headers.get('x-real-ip') || 'unknown'
}

function rateLimited(ip: string): boolean {
  const now   = Date.now()
  const entry = rateBucket.get(ip)
  if (!entry || entry.reset < now) {
    rateBucket.set(ip, { count: 1, reset: now + RATE_WINDOW_MS })
    return false
  }
  entry.count += 1
  return entry.count > RATE_LIMIT
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req)
  console.log('[contact] POST reçu — ip:', ip)

  try {
    const contentType = req.headers.get('content-type') ?? ''
    if (!contentType.includes('application/json')) {
      return NextResponse.json({ error: 'Content-Type invalide' }, { status: 415 })
    }

    if (rateLimited(ip)) {
      console.warn('[contact] Rate limit dépassé — ip:', ip)
      return NextResponse.json(
        { error: 'Trop de requêtes. Veuillez réessayer plus tard.' },
        { status: 429 }
      )
    }

    const body = await req.json().catch(() => null)
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Requête invalide' }, { status: 400 })
    }

    const parsed = contactSchema.safeParse(body)
    if (!parsed.success) {
      console.warn('[contact] Validation échouée:', parsed.error.flatten())
      return NextResponse.json(
        { error: 'Données invalides', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const data = parsed.data

    // Honeypot : robot détecté — accepter silencieusement sans envoyer
    if (data.website && data.website.length > 0) {
      console.warn('[contact] Honeypot déclenché — ip:', ip)
      return NextResponse.json({ success: true }, { status: 201 })
    }

    const payload = {
      name:    data.name,
      email:   data.email,
      phone:   data.phone   || undefined,
      company: data.company || undefined,
      service: data.service || undefined,
      message: data.message,
    }

    console.log('[contact] Envoi email entreprise...')

    // ── Email entreprise ──────────────────────────────────────────────────────
    let contactResult: { sent: boolean; reason?: string }
    try {
      contactResult = await sendContactEmail(payload)
    } catch (err) {
      console.error('[contact] Erreur sendContactEmail:', err)
      return NextResponse.json(
        { error: "Erreur lors de l'envoi. Veuillez réessayer." },
        { status: 502 }
      )
    }

    // Service email non configuré (RESEND_API_KEY manquant)
    if (!contactResult.sent) {
      console.error('[contact] Service email non configuré — RESEND_API_KEY présent ?', !!process.env.RESEND_API_KEY)
      return NextResponse.json(
        { error: 'Service email non disponible. Contactez-nous directement à contact@gpealgerie.com' },
        { status: 503 }
      )
    }

    console.log('[contact] Email entreprise envoyé. Envoi confirmation visiteur...')

    // ── Email de confirmation au visiteur ─────────────────────────────────────
    try {
      await sendConfirmationEmail(payload)
    } catch (err) {
      // L'email entreprise est parti — on accepte quand même le succès
      // mais on log l'erreur pour investigation
      console.error('[contact] Erreur sendConfirmationEmail (non bloquante):', err)
    }

    console.log('[contact] Traitement terminé avec succès')

    return NextResponse.json(
      { success: true, message: 'Message reçu. Nous vous répondrons sous 24h ouvrées.' },
      { status: 201 }
    )
  } catch (err) {
    console.error('[contact] Erreur inattendue:', err)
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 })
  }
}
