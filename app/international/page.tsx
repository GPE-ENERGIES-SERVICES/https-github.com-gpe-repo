import type { Metadata } from 'next'
import InternationalClient from './InternationalClient'

export const metadata: Metadata = {
  title: "À l'international",
  description: "GPE Énergies & Services accompagne des projets d'envergure en France et à l'international, avec une présence en Europe, en Afrique du Nord et en Afrique subsaharienne.",
}

export default function InternationalPage() {
  return <InternationalClient />
}
