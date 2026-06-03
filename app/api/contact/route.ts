import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendContactEmail, sendConfirmationEmail } from '@/lib/mailer'

export const runtime = 'nodejs'

const schema = z.object({
  name:    z.string().trim().min(2).max(120),
  email:   z.string().trim().email().max(200),
  phone:   z.string().trim().max(40).optional().or(z.literal('')),
  company: z.string().trim().max(160).optional().or(z.literal('')),
  service: z.string().trim().max(80).optional().or(z.literal('')),
  message: z.string().trim().min(20).max(5000),
  website: z.string().max(0).optional(),
})

const rateMap = new Map<string, { count: number; reset: number }>()

function getIp(req: NextRequest) {
  const fwd = req.headers.get('x-forwarded-for')
  return fwd ? fwd.split(',')[0].trim() : req.headers.get('x-real-ip') || 'unknown'
}

function isRateLimited(ip: string) {
  const now = Date.now()
  const e   = rateMap.get(ip)
  if (!e || e.reset < now) { rateMap.set(ip, { count: 1, reset: now + 3_600_000 }); return false }
  e.count++
  return e.count > 5
}

export async function POST(req: NextRequest) {
  const ip = getIp(req)
  console.log('[contact] POST ip:', ip)

  try {
    if (!req.headers.get('content-type')?.includes('application/json'))
      return NextResponse.json({ error: 'Content-Type invalide' }, { status: 415 })

    if (isRateLimited(ip))
      return NextResponse.json({ error: 'Trop de requêtes.' }, { status: 429 })

    const body = await req.json().catch(() => null)
    if (!body) return NextResponse.json({ error: 'Requête invalide' }, { status: 400 })

    const parsed = schema.safeParse(body)
    if (!parsed.success)
      return NextResponse.json({ error: 'Données invalides' }, { status: 400 })

    const d = parsed.data

    // Honeypot
    if (d.website) return NextResponse.json({ success: true }, { status: 201 })

    const payload = {
      name:    d.name,
      email:   d.email,
      phone:   d.phone   || undefined,
      company: d.company || undefined,
      service: d.service || undefined,
      message: d.message,
    }

    // Email entreprise
    let result: { sent: boolean; reason?: string }
    try {
      result = await sendContactEmail(payload)
    } catch (err) {
      console.error('[contact] sendContactEmail erreur:', err)
      return NextResponse.json({ error: "Erreur d'envoi. Réessayez." }, { status: 502 })
    }

    if (!result.sent) {
      console.error('[contact] SMTP non configuré. Variables présentes ?', {
        SMTP_HOST:  !!process.env.SMTP_HOST,
        SMTP_PORT:  !!process.env.SMTP_PORT,
        SMTP_USER:  !!process.env.SMTP_USER,
        SMTP_PASS:  !!process.env.SMTP_PASS,
        CONTACT_TO: !!process.env.CONTACT_TO,
      })
      return NextResponse.json(
        { error: 'Service email indisponible. Écrivez-nous à contact@gpealgerie.com' },
        { status: 503 }
      )
    }

    // Email confirmation (non bloquant)
    sendConfirmationEmail(payload).catch((err) =>
      console.error('[contact] sendConfirmationEmail erreur:', err)
    )

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (err) {
    console.error('[contact] erreur inattendue:', err)
    return NextResponse.json({ error: 'Erreur interne' }, { status: 500 })
  }
}
