import { getServiceBySlug } from '@/lib/services'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import EnergiesRenouvelablesClient from './EnergiesRenouvelablesClient'

export const metadata: Metadata = {
  title: 'Énergies Renouvelables — GPE Énergies & Services',
  description:
    'Installations photovoltaïques sur toiture, ombrières et centrales au sol. GPE Énergies & Services, certifié RGE QualiPV, déploie des solutions solaires pour particuliers, entreprises et collectivités.',
}

export default function EnergiesRenouvelablesPage() {
  const service = getServiceBySlug('energies-renouvelables')
  if (!service) notFound()
  return <EnergiesRenouvelablesClient service={service} />
}
