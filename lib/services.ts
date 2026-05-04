export interface Service {
  slug: string
  title: string
  shortDesc: string
  description: string[]
  benefits: string[]
  icon: string
  color: string
  image: string
}

export const services: Service[] = [
  {
    slug: 'courants-forts-faibles',
    title: 'service.courants-forts-faibles.title',
    shortDesc: 'service.courants-forts-faibles.shortDesc',
    description: [
      'service.courants-forts-faibles.desc1',
      'service.courants-forts-faibles.desc2',
    ],
    benefits: [
      'service.courants-forts-faibles.benefit1',
      'service.courants-forts-faibles.benefit2',
      'service.courants-forts-faibles.benefit3',
      'service.courants-forts-faibles.benefit4',
    ],
    icon: 'zap',
    color: '#1faf5a',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    slug: 'energies-renouvelables',
    title: 'service.energies-renouvelables.title',
    shortDesc: 'service.energies-renouvelables.shortDesc',
    description: [
      'service.energies-renouvelables.desc1',
      'service.energies-renouvelables.desc2',
    ],
    benefits: [
      'service.energies-renouvelables.benefit1',
      'service.energies-renouvelables.benefit2',
      'service.energies-renouvelables.benefit3',
      'service.energies-renouvelables.benefit4',
    ],
    icon: 'sun',
    color: '#1faf5a',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
  },
  {
    slug: 'mobilite-electrique',
    title: 'service.mobilite-electrique.title',
    shortDesc: 'service.mobilite-electrique.shortDesc',
    description: [
      'service.mobilite-electrique.desc1',
      'service.mobilite-electrique.desc2',
    ],
    benefits: [
      'service.mobilite-electrique.benefit1',
      'service.mobilite-electrique.benefit2',
      'service.mobilite-electrique.benefit3',
      'service.mobilite-electrique.benefit4',
    ],
    icon: 'car',
    color: '#1faf5a',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
  },
  {
    slug: 'renovation-energetique',
    title: 'service.renovation-energetique.title',
    shortDesc: 'service.renovation-energetique.shortDesc',
    description: [
      'service.renovation-energetique.desc1',
      'service.renovation-energetique.desc2',
    ],
    benefits: [
      'service.renovation-energetique.benefit1',
      'service.renovation-energetique.benefit2',
      'service.renovation-energetique.benefit3',
      'service.renovation-energetique.benefit4',
    ],
    icon: 'home',
    color: '#1faf5a',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
  },
  {
    slug: 'chauffage-climatisation',
    title: 'service.chauffage-climatisation.title',
    shortDesc: 'service.chauffage-climatisation.shortDesc',
    description: [
      'service.chauffage-climatisation.desc1',
      'service.chauffage-climatisation.desc2',
    ],
    benefits: [
      'service.chauffage-climatisation.benefit1',
      'service.chauffage-climatisation.benefit2',
      'service.chauffage-climatisation.benefit3',
      'service.chauffage-climatisation.benefit4',
    ],
    icon: 'thermometer',
    color: '#1faf5a',
    image: 'https://images.unsplash.com/photo-1631545806609-4e1b59b25481?w=800&q=80',
  },
  {
    slug: 'bureau-etudes',
    title: 'service.bureau-etudes.title',
    shortDesc: 'service.bureau-etudes.shortDesc',
    description: [
      'service.bureau-etudes.desc1',
      'service.bureau-etudes.desc2',
    ],
    benefits: [
      'service.bureau-etudes.benefit1',
      'service.bureau-etudes.benefit2',
      'service.bureau-etudes.benefit3',
      'service.bureau-etudes.benefit4',
    ],
    icon: 'drafting-compass',
    color: '#1faf5a',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug)
}
