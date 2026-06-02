import type { Metadata } from 'next'
import AProposClient from './AProposClient'

export const metadata: Metadata = {
  title: 'À propos de nous',
  description:
    "Découvrez GPE Énergies & Services, votre partenaire de confiance dans les énergies renouvelables et les infrastructures électriques. Plus de 50 MWc installés, 500+ projets réalisés.",
}

export default function AProposPage() {
  return <AProposClient />
}
