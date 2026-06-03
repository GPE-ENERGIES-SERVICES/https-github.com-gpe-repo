import { Resend } from 'resend'

export interface ContactPayload {
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  message: string
}

function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY
  if (!key) {
    console.error('[mailer] RESEND_API_KEY manquant')
    return null
  }
  return new Resend(key)
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

const SENDER_FROM = 'GPE Energies et Services <contact@gpealgerie.com>'
const CONTACT_TO  = () => process.env.CONTACT_TO || 'contact@gpealgerie.com'

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
<head><meta charset="UTF-8" /></head>
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
<head><meta charset="UTF-8" /></head>
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

// ─── Email entreprise ─────────────────────────────────────────────────────────

export async function sendContactEmail(
  payload: ContactPayload
): Promise<{ sent: boolean; reason?: string }> {
  const resend = getResend()
  if (!resend) return { sent: false, reason: 'resend-not-configured' }

  const safeName    = sanitizeSubjectPart(payload.name)
  const safeService = sanitizeSubjectPart(payload.service || 'Demande generale')

  console.log('[mailer] sendContactEmail → envoi vers', CONTACT_TO())

  const { error } = await resend.emails.send({
    from:     SENDER_FROM,
    to:       CONTACT_TO(),
    replyTo:  payload.email,
    subject:  `[GPE] Nouveau contact - ${safeService} (${safeName})`,
    html:     buildContactHtml(payload),
    text:     buildContactText(payload),
  })

  if (error) {
    console.error('[mailer] sendContactEmail erreur:', error)
    throw new Error(error.message)
  }

  console.log('[mailer] sendContactEmail OK')
  return { sent: true }
}

// ─── Email de confirmation visiteur ──────────────────────────────────────────

export async function sendConfirmationEmail(
  payload: ContactPayload
): Promise<{ sent: boolean }> {
  const resend = getResend()
  if (!resend) return { sent: false }

  console.log('[mailer] sendConfirmationEmail → envoi vers', payload.email)

  const { error } = await resend.emails.send({
    from:    SENDER_FROM,
    to:      payload.email,
    subject: 'Confirmation de votre demande - GPE Energies et Services',
    html:    buildConfirmationHtml(),
    text:    CONFIRMATION_TEXT,
  })

  if (error) {
    console.error('[mailer] sendConfirmationEmail erreur:', error)
    throw new Error(error.message)
  }

  console.log('[mailer] sendConfirmationEmail OK')
  return { sent: true }
}
