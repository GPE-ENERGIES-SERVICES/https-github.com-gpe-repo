import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendContactEmail, sendConfirmationEmail } from '@/lib/mailer'

export const runtime = 'nodejs'

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Le nom doit comporter au moins 2 caractères').max(120),
  email: z.string().trim().email('Adresse email invalide').max(200),
  phone: z.string().trim().max(40).optional().or(z.literal('')),
  company: z.string().trim().max(160).optional().or(z.literal('')),
  service: z.string().trim().max(80).optional().or(z.literal('')),
  message: z
    .string()
    .trim()
    .min(20, 'Le message doit comporter au moins 20 caractères')
    .max(5000, 'Message trop long'),
  // honeypot — must remain empty
  website: z.string().max(0).optional(),
})

// Lightweight in-memory rate-limit per IP (resets on server restart).
const rateBucket = new Map<string, { count: number; reset: number }>()
const RATE_LIMIT = 5
const RATE_WINDOW_MS = 60 * 60 * 1000 // 1h

function getClientIp(req: NextRequest): string {
  const fwd = req.headers.get('x-forwarded-for')
  if (fwd) return fwd.split(',')[0].trim()
  return req.headers.get('x-real-ip') || 'unknown'
}

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateBucket.get(ip)
  if (!entry || entry.reset < now) {
    rateBucket.set(ip, { count: 1, reset: now + RATE_WINDOW_MS })
    return false
  }
  entry.count += 1
  if (entry.count > RATE_LIMIT) return true
  return false
}

export async function POST(req: NextRequest) {
  try {
    // Vérifie que la requête est bien JSON
    const contentType = req.headers.get('content-type') ?? ''
    if (!contentType.includes('application/json')) {
      return NextResponse.json({ error: 'Content-Type invalide' }, { status: 415 })
    }

    const ip = getClientIp(req)
    if (rateLimited(ip)) {
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
      return NextResponse.json(
        { error: 'Données invalides', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const data = parsed.data

    // Honeypot triggered → silently accept without sending.
    if (data.website && data.website.length > 0) {
      return NextResponse.json({ success: true }, { status: 201 })
    }

    const payload = {
      name: data.name,
      email: data.email,
      phone: data.phone || undefined,
      company: data.company || undefined,
      service: data.service || undefined,
      message: data.message,
    }

    try {
      const result = await sendContactEmail(payload)
      if (!result.sent) {
        console.log('[contact] SMTP not configured, message logged:', {
          ...payload,
          ip,
          at: new Date().toISOString(),
        })
      } else {
        await sendConfirmationEmail(payload)
      }
    } catch (mailErr) {
      console.error('[contact] mail send error:', mailErr)
      return NextResponse.json(
        { error: "Le message n'a pas pu être envoyé. Veuillez réessayer." },
        { status: 502 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Message reçu. Nous vous répondrons sous 24h ouvrées.' },
      { status: 201 }
    )
  } catch (err) {
    console.error('[contact] unexpected error:', err)
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 })
  }
}
