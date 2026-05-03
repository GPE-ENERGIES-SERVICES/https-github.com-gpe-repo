import type { Metadata } from 'next'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact',
  description: "Contactez GPE Énergies & Services pour un devis, une étude de faisabilité ou une question technique. Notre équipe répond sous 24h ouvrées.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
