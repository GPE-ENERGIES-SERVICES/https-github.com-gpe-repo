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
    title: 'Courants forts & faibles',
    shortDesc: 'Installations électriques haute et basse tension pour tous vos bâtiments.',
    description: [
      "Nos équipes réalisent l’ensemble de vos installations électriques, du tableau de distribution jusqu’aux équipements terminaux.",
      "Nous vous accompagnons de la conception à la mise en service avec des solutions adaptées à vos besoins.",
    ],
    benefits: [
      'Conformité normes NF C 15-100',
      'Expertise HTA/BT',
      'Tableaux électriques sur mesure',
      'Maintenance et diagnostic',
    ],
    icon: 'zap',
    color: '#1faf5a',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },

  {
    slug: 'energies-renouvelables',
    title: 'Énergies renouvelables',
    shortDesc: "Installation de solutions solaires et systèmes énergétiques durables.",
    description: [
      "Accélérez votre transition énergétique avec nos solutions sur mesure.",
      "Nous maximisons votre autonomie et vos économies d’énergie.",
    ],
    benefits: [
      'Panneaux photovoltaïques',
      'Autoconsommation',
      'Stockage batterie',
      'Certification RGE',
    ],
    icon: 'sun',
    color: '#1faf5a',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
  },

  {
    slug: 'mobilite-electrique',
    title: 'Mobilité électrique',
    shortDesc: 'Installation de bornes de recharge pour véhicules électriques.',
    description: [
      "Nous installons des infrastructures de recharge adaptées à tous les usages.",
      "Solutions évolutives et connectées pour particuliers et entreprises.",
    ],
    benefits: [
      'Bornes résidentielles',
      'IRVE collectif',
      'Recharge rapide',
      'Supervision intelligente',
    ],
    icon: 'car',
    color: '#1faf5a',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
  },

  {
    slug: 'renovation-energetique',
    title: 'Rénovation énergétique',
    shortDesc: 'Optimisation des performances énergétiques de vos bâtiments.',
    description: [
      "Audit énergétique complet et plan d’amélioration.",
      "Réduction des consommations et amélioration du confort.",
    ],
    benefits: [
      'Audit énergétique',
      'Isolation thermique',
      'Aides financières',
      'Optimisation DPE',
    ],
    icon: 'home',
    color: '#1faf5a',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
  },

  {
    slug: 'chauffage-climatisation',
    title: 'Chauffage & climatisation',
    shortDesc: 'Solutions complètes CVC pour un confort thermique optimal.',
    description: [
      "Installation de systèmes de chauffage et climatisation performants.",
      "Maintenance et optimisation sur le long terme.",
    ],
    benefits: [
      'Pompes à chaleur',
      'Climatisation réversible',
      'Plancher chauffant',
      'Ventilation',
    ],
    icon: 'thermometer',
    color: '#1faf5a',
    image: 'https://images.unsplash.com/photo-1631545806609-4e1b59b25481?w=800&q=80',
  },

  {
    slug: 'bureau-etudes',
    title: "Bureau d'études",
    shortDesc: 'Conception et ingénierie de vos projets techniques.',
    description: [
      "Notre bureau d’études conçoit des solutions adaptées à vos projets.",
      "Nous assurons un suivi complet jusqu’à la réalisation.",
    ],
    benefits: [
      'Études techniques',
      'Modélisation BIM',
      'Suivi de chantier',
      'Maîtrise d’œuvre',
    ],
    icon: 'drafting-compass',
    color: '#1faf5a',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug)
}