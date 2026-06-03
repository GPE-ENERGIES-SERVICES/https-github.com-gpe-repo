import nodemailer, { type Transporter } from 'nodemailer'
import { randomBytes } from 'crypto'

export interface ContactPayload {
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  message: string
}

let cachedTransporter: Transporter | null = null

function getTransporter(): Transporter | null {
  const host = process.env.SMTP_HOST
  const port = process.env.SMTP_PORT
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !port || !user || !pass) return null
  if (cachedTransporter) return cachedTransporter

  const portNum = Number(port)
  cachedTransporter = nodemailer.createTransport({
    host,
    port: portNum,
    secure: portNum === 465,
    auth: { user, pass },
    tls: { minVersion: 'TLSv1.2' },
    // Timeouts critiques pour Vercel serverless (limite ~10s sur hobby, 60s sur pro)
    connectionTimeout: 8000,
    greetingTimeout:   8000,
    socketTimeout:     10000,
  })
  return cachedTransporter
}

function generateMessageId(domain: string): string {
  return `<${Date.now()}.${randomBytes(16).toString('hex')}@${domain}>`
}

function senderDomain(): string {
  const user = process.env.SMTP_USER || ''
  return user.split('@')[1] || 'gpealgerie.com'
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function sanitizeSubjectPart(s: string): string {
  return s.replace(/[\r\n\t]/g, ' ').trim().slice(0, 80)
}

const SENDER_NAME  = 'GPE Energies et Services'
const SENDER_EMAIL = () => process.env.SMTP_USER!
const FROM         = () => `"${SENDER_NAME}" <${SENDER_EMAIL()}>`

const BASE_STYLE = [
  'font-family:Arial,Helvetica,sans-serif',
  'font-size:14px',
  'line-height:1.75',
  'color:#1a1a1a',
  'background:#ffffff',
  'padding:32px 40px',
  'max-width:600px',
].join(';')

const P = 'margin:0 0 14px;'

function buildContactHtml(p: ContactPayload): string {
  const field = (label: string, value?: string) =>
    value
      ? `<tr>
           <td style="padding:3px 16px 3px 0;font-weight:bold;vertical-align:top;white-space:nowrap;">${label}&nbsp;:</td>
           <td style="padding:3px 0;">${escapeHtml(value)}</td>
         </tr>`
      : ''

  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#ffffff;">
<div style="${BASE_STYLE}">
  <p style="${P}"><strong>Nouvelle demande de contact</strong></p>
  <table style="border-collapse:collapse;margin-bottom:20px;">
    ${field('Nom', p.name)}
    ${field('Email', p.email)}
    ${field('Telephone', p.phone)}
    ${field('Societe', p.company)}
    ${field('Service', p.service)}
  </table>
  <p style="${P}"><strong>Message :</strong></p>
  <p style="margin:0 0 24px;white-space:pre-wrap;">${escapeHtml(p.message)}</p>
  <p style="margin:0;color:#666666;font-size:12px;">---<br>Message envoye depuis le site GPE Algerie.</p>
</div>
</body>
</html>`
}

function buildContactText(p: ContactPayload): string {
  return (
    `Nouvelle demande de contact\n\n` +
    `Nom : ${p.name}\n` +
    `Email : ${p.email}\n` +
    (p.phone   ? `Telephone : ${p.phone}\n`  : '') +
    (p.company ? `Societe : ${p.company}\n`  : '') +
    (p.service ? `Service : ${p.service}\n`  : '') +
    `\nMessage :\n${p.message}\n\n` +
    `---\nMessage envoye depuis le site GPE Algerie.`
  )
}

function buildConfirmationHtml(): string {
  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#ffffff;">
<div style="${BASE_STYLE}">
  <p style="${P}">Bonjour,</p>
  <p style="${P}">Nous vous remercions pour votre prise de contact avec GPE Energies &amp; Services.</p>
  <p style="${P}">Votre demande a bien ete recue.</p>
  <p style="${P}">Notre equipe reviendra vers vous dans les meilleurs delais.</p>
  <p style="margin:24px 0 4px;">Cordialement,</p>
  <p style="margin:0;font-weight:bold;">GPE Energies &amp; Services</p>
</div>
</body>
</html>`
}

const CONFIRMATION_TEXT =
  `Bonjour,\n\n` +
  `Nous vous remercions pour votre prise de contact avec GPE Energies & Services.\n\n` +
  `Votre demande a bien ete recue.\n\n` +
  `Notre equipe reviendra vers vous dans les meilleurs delais.\n\n` +
  `Cordialement,\n` +
  `GPE Energies & Services`

// ─── Export : email entreprise ────────────────────────────────────────────────

export async function sendContactEmail(
  payload: ContactPayload
): Promise<{ sent: boolean; reason?: string }> {
  const transporter = getTransporter()

  if (!transporter) {
    // Variables d'env manquantes — log clair pour le diagnostic Vercel
    console.error('[mailer] SMTP non configuré. Variables manquantes :', {
      SMTP_HOST: !!process.env.SMTP_HOST,
      SMTP_PORT: !!process.env.SMTP_PORT,
      SMTP_USER: !!process.env.SMTP_USER,
      SMTP_PASS: !!process.env.SMTP_PASS,
    })
    return { sent: false, reason: 'smtp-not-configured' }
  }

  const to          = process.env.CONTACT_TO || SENDER_EMAIL()
  const domain      = senderDomain()
  const safeName    = sanitizeSubjectPart(payload.name)
  const safeService = sanitizeSubjectPart(payload.service || 'Demande generale')

  console.log('[mailer] sendContactEmail → envoi vers', to)

  await transporter.sendMail({
    from:      FROM(),
    to,
    replyTo:   payload.email,
    subject:   `[GPE] Nouveau contact - ${safeService} (${safeName})`,
    messageId: generateMessageId(domain),
    envelope:  { from: SENDER_EMAIL(), to },
    html:      buildContactHtml(payload),
    text:      buildContactText(payload),
  })

  console.log('[mailer] sendContactEmail OK')
  return { sent: true }
}

// ─── Export : email de confirmation visiteur ──────────────────────────────────

export async function sendConfirmationEmail(
  payload: ContactPayload
): Promise<{ sent: boolean }> {
  const transporter = getTransporter()
  if (!transporter) return { sent: false }

  const domain = senderDomain()

  console.log('[mailer] sendConfirmationEmail → envoi vers', payload.email)

  await transporter.sendMail({
    from:      FROM(),
    to:        payload.email,
    subject:   'Confirmation de votre demande - GPE Energies et Services',
    messageId: generateMessageId(domain),
    envelope:  { from: SENDER_EMAIL(), to: payload.email },
    html:      buildConfirmationHtml(),
    text:      CONFIRMATION_TEXT,
  })

  console.log('[mailer] sendConfirmationEmail OK')
  return { sent: true }
}
