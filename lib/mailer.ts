import nodemailer, { type Transporter } from 'nodemailer'

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
  })
  return cachedTransporter
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

// Styles minimalistes — fond blanc, texte noir, lisible sur tous les clients mail
const BASE = [
  'font-family:Arial,Helvetica,sans-serif',
  'font-size:14px',
  'line-height:1.75',
  'color:#1a1a1a',
  'background:#ffffff',
  'padding:32px 40px',
  'max-width:600px',
].join(';')
const P = 'margin:0 0 14px;'

// ─── Email reçu par l'entreprise ─────────────────────────────────────────────

function buildContactHtml(p: ContactPayload): string {
  const field = (label: string, value?: string) =>
    value
      ? `<tr>
           <td style="padding:3px 16px 3px 0;font-weight:bold;vertical-align:top;white-space:nowrap;">${label} :</td>
           <td style="padding:3px 0;">${escapeHtml(value)}</td>
         </tr>`
      : ''

  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background:#ffffff;">
<div style="${BASE}">

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

// ─── Email de confirmation au visiteur ───────────────────────────────────────

function buildConfirmationHtml(p: ContactPayload): string {
  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background:#ffffff;">
<div style="${BASE}">

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

function buildConfirmationText(p: ContactPayload): string {
  return (
    `Bonjour,\n\n` +
    `Nous vous remercions pour votre prise de contact avec GPE Energies & Services.\n\n` +
    `Votre demande a bien ete recue.\n\n` +
    `Notre equipe reviendra vers vous dans les meilleurs delais.\n\n` +
    `Cordialement,\n` +
    `GPE Energies & Services`
  )
}

// ─── Exports ─────────────────────────────────────────────────────────────────

export async function sendContactEmail(
  payload: ContactPayload
): Promise<{ sent: boolean; reason?: string }> {
  const transporter = getTransporter()
  if (!transporter) {
    return { sent: false, reason: 'smtp-not-configured' }
  }

  const to      = process.env.CONTACT_TO || process.env.SMTP_USER!
  const from    = `"GPE Algerie" <${process.env.SMTP_USER}>`
  const safeName    = sanitizeSubjectPart(payload.name)
  const safeService = sanitizeSubjectPart(payload.service || 'Demande generale')

  await transporter.sendMail({
    from,
    to,
    // replyTo permet de répondre directement au visiteur depuis la boîte entreprise
    replyTo: payload.email,
    subject: `[GPE] Nouveau contact - ${safeService} (${safeName})`,
    html: buildContactHtml(payload),
    text: buildContactText(payload),
  })

  return { sent: true }
}

export async function sendConfirmationEmail(
  payload: ContactPayload
): Promise<{ sent: boolean }> {
  const transporter = getTransporter()
  if (!transporter) return { sent: false }

  const from = `"GPE Algerie" <${process.env.SMTP_USER}>`

  await transporter.sendMail({
    from,
    // Aucun replyTo — l'email est envoyé par l'entreprise au visiteur,
    // une éventuelle réponse doit revenir à l'entreprise (from = contact@gpealgerie.com)
    to: payload.email,
    subject: 'Confirmation de votre demande - GPE Energies & Services',
    html: buildConfirmationHtml(payload),
    text: buildConfirmationText(payload),
  })

  return { sent: true }
}
