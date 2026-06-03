import type { Metadata } from 'next'
import InternationalClient from './InternationalClient'

export const metadata: Metadata = {
  title: "À l'international",
  description: "GPE Énergies & Services accompagne des projets d'envergure en Algérie et à l'international, en apportant son expertise technique sur chaque continent.",
}

export default function InternationalPage() {
  return <InternationalClient />
}
