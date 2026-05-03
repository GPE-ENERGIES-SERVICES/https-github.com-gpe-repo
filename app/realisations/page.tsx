import type { Metadata } from 'next'
import { Suspense } from 'react'
import RealisationsClient from './RealisationsClient'

export const metadata: Metadata = {
  title: 'Réalisations',
  description: "Découvrez les projets réalisés par GPE Énergies & Services : électricité, photovoltaïque, IRVE, CVC, VRD et bureau d'études. Plus de 500 projets en France.",
}

export default function RealisationsPage() {
  return (
    <Suspense>
      <RealisationsClient />
    </Suspense>
  )
}
