import nodemailer from 'nodemailer'

export interface ContactPayload {
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  message: string
}

function getTransporter() {
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !port || !user || !pass) {
    console.error('[mailer] Variables SMTP manquantes:', {
      SMTP_HOST:  !!host,
      SMTP_PORT:  !!port,
      SMTP_USER:  !!user,
      SMTP_PASS:  !!pass,
    })
    return null
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    connectionTimeout: 10000,
    greetingTimeout:   10000,
    socketTimeout:     15000,
  })
}

function sanitize(s: string) {
  return s.replace(/[\r\n\t]/g, ' ').trim().slice(0, 80)
}

const FROM = () => `"GPE Energies et Services" <${process.env.SMTP_USER}>`
const TO   = () => process.env.CONTACT_TO || process.env.SMTP_USER!

export async function sendContactEmail(
  p: ContactPayload
): Promise<{ sent: boolean; reason?: string }> {
  const transport = getTransporter()
  if (!transport) return { sent: false, reason: 'smtp-not-configured' }

  const subject = `[GPE] Nouveau contact - ${sanitize(p.service || 'Demande')} (${sanitize(p.name)})`

  const text =
    `Nouvelle demande de contact\n` +
    `---------------------------\n\n` +
    `Nom : ${p.name}\n` +
    `Email : ${p.email}\n` +
    (p.phone   ? `Telephone : ${p.phone}\n`   : '') +
    (p.company ? `Societe : ${p.company}\n`   : '') +
    (p.service ? `Service : ${p.service}\n`   : '') +
    `\nMessage :\n${p.message}\n\n` +
    `--\nEnvoye depuis le site GPE Algerie.`

  console.log('[mailer] sendContactEmail → envoi vers', TO())
  await transport.sendMail({ from: FROM(), to: TO(), replyTo: p.email, subject, text })
  console.log('[mailer] sendContactEmail OK')
  return { sent: true }
}

export async function sendConfirmationEmail(
  p: ContactPayload
): Promise<{ sent: boolean }> {
  const transport = getTransporter()
  if (!transport) return { sent: false }

  const text =
    `Bonjour,\n\n` +
    `Nous vous remercions pour votre prise de contact avec GPE Energies & Services.\n\n` +
    `Votre demande a bien ete recue.\n\n` +
    `Notre equipe reviendra vers vous dans les meilleurs delais.\n\n` +
    `Cordialement,\n` +
    `GPE Energies & Services\n` +
    `contact@gpealgerie.com`

  console.log('[mailer] sendConfirmationEmail → envoi vers', p.email)
  await transport.sendMail({
    from:    FROM(),
    to:      p.email,
    subject: 'Confirmation de votre demande - GPE Energies et Services',
    text,
  })
  console.log('[mailer] sendConfirmationEmail OK')
  return { sent: true }
}
