export interface ServiceSection {
  title: string
  items: string[]
}

export interface Service {
  slug: string
  title: string
  shortDesc: string
  intro: string
  sections: ServiceSection[]
  icon: string
  color: string
  image: string
}

export const services: Service[] = [
  {
    slug: 'courants-forts-faibles',
    title: 'service.courants-forts-faibles.title',
    shortDesc: 'service.courants-forts-faibles.shortDesc',
    intro: 'service.courants-forts-faibles.intro',
    sections: [
      {
        title: 'service.section.methodology.title',
        items: [
          'service.section.methodology.item.0',
          'service.section.methodology.item.1',
          'service.section.methodology.item.2',
          'service.section.methodology.item.3',
        ],
      },
      {
        title: 'service.section.solutions.title',
        items: [
          'service.courants-forts-faibles.solution.0',
          'service.courants-forts-faibles.solution.1',
          'service.courants-forts-faibles.solution.2',
          'service.courants-forts-faibles.solution.3',
          'service.courants-forts-faibles.solution.4',
          'service.courants-forts-faibles.solution.5',
          'service.courants-forts-faibles.solution.6',
          'service.courants-forts-faibles.solution.7',
        ],
      },
      {
        title: 'service.section.sectors.title',
        items: [
          'service.section.sector.residential',
          'service.section.sector.tertiary',
          'service.section.sector.industrial',
          'service.section.sector.public',
        ],
      },
    ],
    icon: 'zap',
    color: '#1faf5a',
    image: '/images/services/cff.jpeg',
  },
  {
    slug: 'energies-renouvelables',
    title: 'service.energies-renouvelables.title',
    shortDesc: 'service.energies-renouvelables.shortDesc',
    intro: 'service.energies-renouvelables.intro',
    sections: [
      {
        title: 'service.section.methodology.title',
        items: [
          'service.section.methodology.item.0',
          'service.section.methodology.item.1',
          'service.section.methodology.item.2',
          'service.section.methodology.item.3',
        ],
      },
      {
        title: 'service.section.solutions.title',
        items: [
          'service.energies-renouvelables.solution.0',
          'service.energies-renouvelables.solution.1',
          'service.energies-renouvelables.solution.2',
          'service.energies-renouvelables.solution.3',
          'service.energies-renouvelables.solution.4',
          'service.energies-renouvelables.solution.5',
        ],
      },
      {
        title: 'service.section.sectors.title',
        items: [
          'service.section.sector.residential',
          'service.section.sector.tertiary',
          'service.section.sector.industrial',
          'service.section.sector.public',
          'service.section.sector.agricultural',
          'service.section.sector.photovoltaic',
        ],
      },
    ],
    icon: 'sun',
    color: '#1faf5a',
    image: '/images/services/energier.jpeg',
  },
  {
    slug: 'mobilite-electrique',
    title: 'service.mobilite-electrique.title',
    shortDesc: 'service.mobilite-electrique.shortDesc',
    intro: 'service.mobilite-electrique.intro',
    sections: [
      {
        title: 'service.section.methodology.title',
        items: [
          'service.section.methodology.item.0',
          'service.section.methodology.item.1',
          'service.section.methodology.item.2',
          'service.section.methodology.item.3',
        ],
      },
      {
        title: 'service.section.solutions.title',
        items: [
          'service.mobilite-electrique.solution.0',
          'service.mobilite-electrique.solution.1',
          'service.mobilite-electrique.solution.2',
          'service.mobilite-electrique.solution.3',
          'service.mobilite-electrique.solution.4',
          'service.mobilite-electrique.solution.5',
        ],
      },
      {
        title: 'service.section.sectors.title',
        items: [
          'service.section.sector.residential',
          'service.section.sector.tertiary',
          'service.section.sector.industrial',
          'service.section.sector.public',
        ],
      },
    ],
    icon: 'car',
    color: '#1faf5a',
    image: '/images/services/mobilite.jpeg',
  },
  {
    slug: 'smart-building',
    title: 'service.smart-building.title',
    shortDesc: 'service.smart-building.shortDesc',
    intro: 'service.smart-building.intro',
    sections: [
      {
        title: 'service.section.methodology.title',
        items: [
          'service.section.methodology.item.0',
          'service.section.methodology.item.1',
          'service.section.methodology.item.2',
          'service.section.methodology.item.3',
        ],
      },
      {
        title: 'service.section.solutions.title',
        items: [
          'service.smart-building.solution.0',
          'service.smart-building.solution.1',
          'service.smart-building.solution.2',
          'service.smart-building.solution.3',
          'service.smart-building.solution.4',
          'service.smart-building.solution.5',
          'service.smart-building.solution.6',
        ],
      },
      {
        title: 'service.section.sectors.title',
        items: [
          'service.section.sector.residential',
          'service.section.sector.tertiary',
          'service.section.sector.industrial',
          'service.section.sector.public',
        ],
      },
    ],
    icon: 'cpu',
    color: '#1faf5a',
    image: '/images/services/knx.jpeg',
  },
  {
    slug: 'renovation-energetique',
    title: 'service.renovation-energetique.title',
    shortDesc: 'service.renovation-energetique.shortDesc',
    intro: 'service.renovation-energetique.intro',
    sections: [
      {
        title: 'service.section.methodology.title',
        items: [
          'service.section.methodology.item.0',
          'service.section.methodology.item.1',
          'service.section.methodology.item.2',
          'service.section.methodology.item.3',
        ],
      },
      {
        title: 'service.section.solutions.title',
        items: [
          'service.renovation-energetique.solution.0',
          'service.renovation-energetique.solution.1',
          'service.renovation-energetique.solution.2',
          'service.renovation-energetique.solution.3',
          'service.renovation-energetique.solution.4',
          'service.renovation-energetique.solution.5',
        ],
      },
      {
        title: 'service.section.sectors.title',
        items: [
          'service.section.sector.residential',
          'service.section.sector.tertiary',
          'service.section.sector.industrial',
          'service.section.sector.public',
        ],
      },
    ],
    icon: 'home',
    color: '#1faf5a',
    image: '/images/services/renovvv.jpg',
  },
  {
    slug: 'chauffage-climatisation',
    title: 'service.chauffage-climatisation.title',
    shortDesc: 'service.chauffage-climatisation.shortDesc',
    intro: 'service.chauffage-climatisation.intro',
    sections: [
      {
        title: 'service.section.methodology.title',
        items: [
          'service.section.methodology.item.0',
          'service.section.methodology.item.1',
          'service.section.methodology.item.2',
          'service.section.methodology.item.3',
        ],
      },
      {
        title: 'service.section.solutions.title',
        items: [
          'service.chauffage-climatisation.solution.0',
          'service.chauffage-climatisation.solution.1',
          'service.chauffage-climatisation.solution.2',
          'service.chauffage-climatisation.solution.3',
          'service.chauffage-climatisation.solution.4',
          'service.chauffage-climatisation.solution.5',
        ],
      },
      {
        title: 'service.section.sectors.title',
        items: [
          'service.section.sector.residential',
          'service.section.sector.tertiary',
          'service.section.sector.industrial',
          'service.section.sector.public',
        ],
      },
    ],
    icon: 'thermometer',
    color: '#1faf5a',
    image: '/images/services/chauffage.jpeg',
  },
  {
    slug: 'bureau-etudes',
    title: 'service.bureau-etudes.title',
    shortDesc: 'service.bureau-etudes.shortDesc',
    intro: 'service.bureau-etudes.intro',
    sections: [
      {
        title: 'service.section.methodology.title',
        items: [
          'service.section.methodology.item.0',
          'service.section.methodology.item.1',
          'service.section.methodology.item.2',
        ],
      },
      {
        title: 'service.section.solutions.title',
        items: [
          'service.bureau-etudes.solution.0',
          'service.bureau-etudes.solution.1',
          'service.bureau-etudes.solution.2',
          'service.bureau-etudes.solution.3',
          'service.bureau-etudes.solution.4',
          'service.bureau-etudes.solution.5',
          'service.bureau-etudes.solution.6',
          'service.bureau-etudes.solution.7',
        ],
      },
      {
        title: 'service.section.sectors.title',
        items: [
          'service.section.sector.residential',
          'service.section.sector.tertiary',
          'service.section.sector.industrial',
          'service.section.sector.public',
          'service.section.sector.agricultural',
        ],
      },
    ],
    icon: 'drafting-compass',
    color: '#1faf5a',
    image: '/images/services/bureau.jpeg',
  },
  {
    slug: 'vrd',
    title: 'service.vrd.title',
    shortDesc: 'service.vrd.shortDesc',
    intro: 'service.vrd.intro',
    sections: [
      {
        title: 'service.section.methodology.title',
        items: [
          'service.section.methodology.item.0',
          'service.section.methodology.item.1',
          'service.section.methodology.item.2',
        ],
      },
      {
        title: 'service.section.solutions.title',
        items: [
          'service.vrd.solution.0',
          'service.vrd.solution.1',
          'service.vrd.solution.2',
          'service.vrd.solution.3',
        ],
      },
      {
        title: 'service.section.sectors.title',
        items: [
          'service.section.sector.residential',
          'service.section.sector.tertiary',
          'service.section.sector.industrial',
          'service.section.sector.public',
          'service.section.sector.agricultural',
          'service.section.sector.urban',
          'service.section.sector.solar-ground',
        ],
      },
    ],
    icon: 'road',
    color: '#1faf5a',
    image: '/images/services/vrd.jpeg',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug)
}
