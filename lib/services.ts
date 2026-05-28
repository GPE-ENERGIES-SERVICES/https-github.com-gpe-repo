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
    intro: "Experts en électricité, nous concevons et déployons des installations fiables et sécurisées.",
    sections: [
      {
        title: "Méthodologie et accompagnement",
        items: [
          "Étude de conception, d'exécution et dimensionnement",
          "Installation, maintenance et dépannage",
          "Accompagnement, assistance et conseils personnalisés",
        ],
      },
      {
        title: "Courant Fort",
        items: [
          "Réseaux Basse tension et Haute tension",
          "Câblage et raccordements",
          "Groupes électrogènes",
          "Éclairage public",
        ],
      },
      {
        title: "Courants Faibles",
        items: [
          "SSI",
          "Vidéosurveillance, alarmes, contrôle d'accès",
          "Réseaux IT et téléphonie",
          "Domotique / GTB / GTC",
          "Automatismes industriels",
        ],
      },
      {
        title: "Secteurs",
        items: [
          "Logements",
          "Tertiaire / bureaux / logistique",
        ],
      },
    ],
    icon: 'zap',
    color: '#1faf5a',
    image: '/images/services/courantff.jpg',
  },
  {
    slug: 'energies-renouvelables',
    title: 'service.energies-renouvelables.title',
    shortDesc: 'service.energies-renouvelables.shortDesc',
    intro: "Solutions solaires performantes adaptées à vos besoins.",
    sections: [
      {
        title: "Méthodologie",
        items: [
          "Études",
          "Installation",
          "Maintenance",
        ],
      },
      {
        title: "Photovoltaïque",
        items: [
          "Particuliers (< 36 kWc)",
          "Haute puissance (jusqu'à 500 kWc)",
          "Autoconsommation",
          "Revente",
          "Systèmes hybrides avec batterie",
        ],
      },
    ],
    icon: 'sun',
    color: '#1faf5a',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
  },
  {
    slug: 'mobilite-electrique',
    title: 'service.mobilite-electrique.title',
    shortDesc: 'service.mobilite-electrique.shortDesc',
    intro: "Déployer des infrastructures de recharge adaptées.",
    sections: [
      {
        title: "Solutions",
        items: [
          "Véhicules légers",
          "Bus",
          "Camions",
          "Copropriétés",
          "Stationnement intelligent",
        ],
      },
    ],
    icon: 'car',
    color: '#1faf5a',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
  },
  {
    slug: 'gtb-knx',
    title: 'service.gtb-knx.title',
    shortDesc: 'service.gtb-knx.shortDesc',
    intro: "Spécialistes de la gestion technique du bâtiment, nous concevons et déployons des solutions KNX sur mesure pour automatiser, superviser et optimiser vos installations techniques.",
    sections: [
      {
        title: "Systèmes GTB / KNX",
        items: [
          "Programmation KNX : éclairage, stores, HVAC",
          "Supervision centralisée (BMS / SCADA)",
          "Interfaces graphiques de contrôle (IHM)",
          "Intégration multi-protocoles (KNX, BACnet, Modbus)",
          "Coupleurs et passerelles IP",
        ],
      },
      {
        title: "Domaines d'application",
        items: [
          "Bâtiments tertiaires et commerciaux",
          "Logements collectifs et résidences haut de gamme",
          "Hôtels et établissements recevant du public",
          "Bâtiments industriels et data centers",
        ],
      },
      {
        title: "Nos prestations",
        items: [
          "Étude et conception du système GTB",
          "Installation et câblage bus KNX",
          "Programmation ETS et mise en service",
          "Maintenance préventive et corrective",
          "Télémaintenance et supervision à distance",
          "Formation des équipes exploitation",
        ],
      },
    ],
    icon: 'cpu',
    color: '#1faf5a',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    slug: 'renovation-energetique',
    title: 'service.renovation-energetique.title',
    shortDesc: 'service.renovation-energetique.shortDesc',
    intro: "Améliorer le confort et réduire la consommation énergétique.",
    sections: [
      {
        title: "Prestations",
        items: [
          "Isolation combles",
          "ITI",
          "ITE",
          "Planchers bas",
        ],
      },
    ],
    icon: 'home',
    color: '#1faf5a',
    image: '/images/services/renov.jpg',
  },
  {
    slug: 'chauffage-climatisation',
    title: 'service.chauffage-climatisation.title',
    shortDesc: 'service.chauffage-climatisation.shortDesc',
    intro: "Assurer un confort thermique optimal.",
    sections: [
      {
        title: "Solutions",
        items: [
          "Pompes à chaleur",
          "Climatisation réversible",
          "Chaudières",
          "Chauffe-eaux",
          "Systèmes solaires combinés",
        ],
      },
    ],
    icon: 'thermometer',
    color: '#1faf5a',
    image: '/images/services/clim.jpg',
  },
  {
    slug: 'bureau-etudes',
    title: 'service.bureau-etudes.title',
    shortDesc: 'service.bureau-etudes.shortDesc',
    intro: "Notre bureau d'études vous accompagne dans la conception, l'analyse et l'optimisation de vos projets à travers une expertise technique globale.",
    sections: [
      {
        title: "Nos domaines d'intervention",
        items: [
          "Maquette numérique (BIM)",
          "Audit énergétique (Maison individuelle et secteur tertiaire)",
          "Optimisation énergétique",
          "Études CFO/CFA (Courants forts et Courants faibles)",
          "Études pour la mobilité électrique",
          "Études pour l'énergie photovoltaïque",
          "Études de chauffage et climatisation",
          "Études d'isolation thermique",
        ],
      },
    ],
    icon: 'drafting-compass',
    color: '#1faf5a',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug)
}
