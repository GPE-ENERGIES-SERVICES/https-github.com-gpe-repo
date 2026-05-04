import { notFound } from 'next/navigation'
import { services, getServiceBySlug } from '@/lib/services'
import { tFR } from '@/lib/i18n'
import type { Metadata } from 'next'
import ServicePageClient from './ServicePageClient'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)
  if (!service) return { title: 'Service introuvable' }
  return {
    title: `${tFR(service.title)} — GPE Énergies & Services`,
    description: tFR(service.shortDesc),
  }
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()
  return <ServicePageClient service={service} />
}
