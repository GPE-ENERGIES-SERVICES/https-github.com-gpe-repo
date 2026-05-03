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

function buildHtml(p: ContactPayload): string {
  const row = (label: string, value?: string) =>
    value
      ? `<tr><td style="padding:6px 12px;color:#525252;font-size:13px;">${label}</td><td style="padding:6px 12px;color:#171717;font-size:14px;font-weight:500;">${escapeHtml(value)}</td></tr>`
      : ''
  return `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#fafafa;padding:32px;">
      <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #e8e8e8;">
        <div style="background:linear-gradient(135deg,#1FAF5A,#C6FF00);padding:24px 28px;color:#fff;">
          <div style="font-size:12px;letter-spacing:.18em;text-transform:uppercase;opacity:.85;">Nouveau contact</div>
          <div style="font-size:20px;font-weight:600;margin-top:4px;">GPE Ã‰nergies &amp; Services</div>
        </div>
        <div style="padding:28px;">
          <table style="width:100%;border-collapse:collapse;">
            ${row('Nom', p.name)}
            ${row('Email', p.email)}
            ${row('TÃ©lÃ©phone', p.phone)}
            ${row('SociÃ©tÃ©', p.company)}
            ${row('Service', p.service)}
          </table>
          <div style="margin-top:24px;padding-top:20px;border-top:1px solid #efefef;">
            <div style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#737373;font-weight:600;margin-bottom:10px;">Message</div>
            <div style="font-size:14px;line-height:1.65;color:#262626;white-space:pre-wrap;">${escapeHtml(p.message)}</div>
          </div>
        </div>
        <div style="padding:14px 28px;background:#fafafa;border-top:1px solid #efefef;color:#a3a3a3;font-size:11px;">
          ReÃ§u le ${new Date().toLocaleString('fr-FR', { dateStyle: 'long', timeStyle: 'short' })}
        </div>
      </div>
    </div>
  `
}

export async function sendContactEmail(payload: ContactPayload): Promise<{ sent: boolean; reason?: string }> {
  const transporter = getTransporter()
  if (!transporter) {
    return { sent: false, reason: 'smtp-not-configured' }
  }

  const to = process.env.CONTACT_TO || process.env.SMTP_USER!
  const fromName = 'GPE Ã‰nergies â€” Site web'
  const subject = `[GPE] Contact â€” ${payload.service || 'Demande gÃ©nÃ©rale'} (${payload.name})`

  await transporter.sendMail({
    from: `"${fromName}" <${process.env.SMTP_USER}>`,
    to,
    replyTo: payload.email,
    subject,
    html: buildHtml(payload),
    text:
      `Nom: ${payload.name}\n` +
      `Email: ${payload.email}\n` +
      (payload.phone ? `TÃ©lÃ©phone: ${payload.phone}\n` : '') +
      (payload.company ? `SociÃ©tÃ©: ${payload.company}\n` : '') +
      (payload.service ? `Service: ${payload.service}\n` : '') +
      `\n${payload.message}\n`,
  })

  return { sent: true }
}
