import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { createConnection } from 'net'

export const runtime = 'nodejs'

// Endpoint temporaire de diagnostic — accès restreint par token
// Appeler en production : GET /api/debug-smtp?token=gpe-debug-2026

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token')
  if (token !== 'gpe-debug-2026') {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  const results: Record<string, unknown> = {}

  // 1. Variables d'environnement
  results.env = {
    SMTP_HOST:   process.env.SMTP_HOST  ?? '❌ MANQUANT',
    SMTP_PORT:   process.env.SMTP_PORT  ?? '❌ MANQUANT',
    SMTP_USER:   process.env.SMTP_USER  ?? '❌ MANQUANT',
    SMTP_PASS:   process.env.SMTP_PASS  ? '✅ défini (' + process.env.SMTP_PASS.length + ' chars)' : '❌ MANQUANT',
    CONTACT_TO:  process.env.CONTACT_TO ?? '❌ MANQUANT',
    NODE_ENV:    process.env.NODE_ENV,
  }

  // 2. Test connectivité TCP
  const host = process.env.SMTP_HOST || 'smtp.ionos.fr'
  const port = Number(process.env.SMTP_PORT || 465)

  const tcpOk = await new Promise<boolean>((resolve) => {
    const s = createConnection({ host, port, timeout: 6000 })
    s.on('connect', () => { s.destroy(); resolve(true) })
    s.on('timeout', () => { s.destroy(); resolve(false) })
    s.on('error',   () => { resolve(false) })
  })
  results.tcp = tcpOk
    ? `✅ Connexion TCP OK vers ${host}:${port}`
    : `❌ Connexion TCP ÉCHOUÉE vers ${host}:${port} — Vercel bloque peut-être ce port`

  // 3. Test authentification SMTP
  if (process.env.SMTP_HOST && process.env.SMTP_PORT && process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const t = nodemailer.createTransport({
        host:              process.env.SMTP_HOST,
        port,
        secure:            port === 465,
        auth:              { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
        tls:               { minVersion: 'TLSv1.2' },
        connectionTimeout: 6000,
        greetingTimeout:   6000,
        socketTimeout:     8000,
      })
      await t.verify()
      results.smtp_auth = '✅ Authentification SMTP OK'
    } catch (e) {
      results.smtp_auth = `❌ Authentification SMTP ÉCHOUÉE : ${(e as Error).message}`
    }
  } else {
    results.smtp_auth = '⚠️ Ignoré — variables manquantes'
  }

  // 4. Test envoi réel (vers CONTACT_TO)
  if (results.smtp_auth === '✅ Authentification SMTP OK') {
    try {
      const t = nodemailer.createTransport({
        host:              process.env.SMTP_HOST!,
        port,
        secure:            port === 465,
        auth:              { user: process.env.SMTP_USER!, pass: process.env.SMTP_PASS! },
        tls:               { minVersion: 'TLSv1.2' },
        connectionTimeout: 6000,
        greetingTimeout:   6000,
        socketTimeout:     8000,
      })
      await t.sendMail({
        from:    `"GPE Debug" <${process.env.SMTP_USER}>`,
        to:      process.env.CONTACT_TO || process.env.SMTP_USER!,
        subject: '[GPE DEBUG] Test envoi email Vercel',
        text:    `Test de délivrabilité depuis Vercel.\nDate: ${new Date().toISOString()}\nNode: ${process.version}`,
      })
      results.send_test = '✅ Email de test envoyé avec succès'
    } catch (e) {
      results.send_test = `❌ Envoi échoué : ${(e as Error).message}`
    }
  } else {
    results.send_test = '⚠️ Ignoré — auth échouée'
  }

  results.node_version = process.version
  results.timestamp    = new Date().toISOString()

  return NextResponse.json(results, { status: 200 })
}
