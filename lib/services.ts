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
    intro:
      "GPE réalise des installations électriques tertiaires et industrielles en courant fort et courant faible. Nous offrons une solution globale comprenant le raccordement au réseau, l'installation d'armoires électriques, la mise en place de l'éclairage et des systèmes d'alimentation de secours. Les systèmes sont réalisés conformément aux normes et réglementations en vigueur avec un suivi rigoureux jusqu'à la mise en service. Nous assurons également la maintenance préventive et corrective pour garantir la pérennité et la fiabilité des installations.",
    sections: [
      {
        title: '🛠️ Méthodologie & accompagnement',
        items: [
          "Études de conception et d'exécution",
          'Modélisation et dimensionnement',
          'Accompagnement, assistance et conseils personnalisés',
          'Installation, maintenance et dépannage',
        ],
      },
      {
        title: '🚀 Nos solutions',
        items: [
          'Réseaux basse tension et haute tension (HTA/BT)',
          "Installation d'armoires et tableaux électriques",
          'Câblage et raccordements électriques',
          'Éclairage intérieur et extérieur',
          "Systèmes d'alimentation de secours (groupes électrogènes, UPS)",
          "Systèmes de sécurité incendie (SSI/SSA)",
          "Vidéosurveillance, contrôle d'accès et alarmes",
          'Réseaux IT, téléphonie et câblage structuré',
        ],
      },
      {
        title: "🏢 Secteurs d'intervention",
        items: [
          'Logements / Habitat',
          'Tertiaire / Logistique',
          'Industriel',
          'Collectivités / Mairies',
          'Écoles',
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
    intro:
      "GPE propose des solutions photovoltaïques clé en main, de l'étude au génie civil. Notre expertise couvre les installations en toiture, sur ombrières et au sol, adaptées aux applications en autoconsommation, raccordées au réseau ou en systèmes hybrides. Nous intervenons dans les secteurs tertiaire, industriel et agricole. De la conception à la maintenance, GPE maîtrise l'ensemble des étapes d'un projet photovoltaïque afin de garantir performance, fiabilité et durabilité.",
    sections: [
      {
        title: '🛠️ Méthodologie & accompagnement',
        items: [
          "Études de conception et d'exécution",
          'Modélisation et dimensionnement',
          'Accompagnement, assistance et conseils personnalisés',
          'Installation, maintenance et dépannage',
        ],
      },
      {
        title: '🚀 Nos solutions',
        items: [
          'Installations photovoltaïques pour particuliers ≤ 36 kWc',
          'Générateurs photovoltaïques moyenne puissance ≤ 500 kWc',
          'Centrales photovoltaïques haute puissance ≥ 500 kWc',
          'Vente totale',
          'Installations hybrides avec batteries',
          'Autoconsommation totale',
          'Autoconsommation partielle',
        ],
      },
      {
        title: "🏢 Secteurs d'intervention",
        items: [
          'Logements / Habitat',
          'Tertiaire / Logistique',
          'Industriel',
          'Collectivités / Mairies',
          'Écoles',
          'Agricole',
          'Ombrières photovoltaïques',
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
    intro:
      "GPE conçoit et déploie des solutions de recharge pour véhicules électriques adaptées aux environnements résidentiels, tertiaires et industriels. Nos prestations couvrent l'ensemble de l'infrastructure électrique, du raccordement réseau à l'installation de bornes AC et DC. Nos solutions, conformes aux normes en vigueur, garantissent sécurité, performance et évolutivité afin d'accompagner durablement la mobilité électrique.",
    sections: [
      {
        title: '🛠️ Méthodologie & accompagnement',
        items: [
          "Études de conception et d'exécution",
          'Modélisation et dimensionnement',
          'Accompagnement, assistance et conseils personnalisés',
          'Installation, maintenance et dépannage',
        ],
      },
      {
        title: '🚀 Nos solutions',
        items: [
          'Bornes de recharge résidentielles (wallbox)',
          'Bornes AC collectives pour copropriétés et parkings',
          'Bornes DC rapide et ultra-rapide',
          "Infrastructure IRVE pour flottes d'entreprise",
          'Prééquipement IRVE pour bâtiments neufs',
          'Supervision et télégestion des points de charge',
          'Étude de renforcement réseau',
        ],
      },
      {
        title: "🏢 Secteurs d'intervention",
        items: [
          'Logements / Habitat',
          'Tertiaire / Logistique',
          'Industriel',
          'Collectivités / Mairies',
          'Écoles',
        ],
      },
    ],
    icon: 'car',
    color: '#1faf5a',
    image: '/images/services/mobilite.jpeg',
  },
  {
    slug: 'gtb-knx',
    title: 'service.gtb-knx.title',
    shortDesc: 'service.gtb-knx.shortDesc',
    intro:
      "GPE conçoit et déploie des systèmes de Gestion Technique du Bâtiment (GTB) basés sur le protocole KNX, standard international pour l'automatisation intelligente des espaces. Nos équipes certifiées assurent l'intégration de l'ensemble des équipements techniques — éclairage, stores, chauffage, climatisation et contrôles d'accès — dans une plateforme de supervision centralisée. Cette approche permet une réduction significative des consommations énergétiques tout en améliorant le confort et la maîtrise des installations.",
    sections: [
      {
        title: '🛠️ Méthodologie & accompagnement',
        items: [
          "Études de conception et d'exécution",
          'Modélisation et dimensionnement',
          'Accompagnement, assistance et conseils personnalisés',
          'Installation, maintenance et dépannage',
        ],
      },
      {
        title: '🚀 Nos solutions',
        items: [
          "Programmation KNX : éclairage, stores et HVAC",
          'Supervision centralisée (BMS / SCADA)',
          'Interfaces graphiques de contrôle (IHM)',
          'Intégration multi-protocoles (KNX, BACnet, Modbus)',
          'Coupleurs et passerelles IP/KNX',
          'Télémaintenance et supervision à distance',
          'Systèmes de comptage et suivi des consommations',
        ],
      },
      {
        title: "🏢 Secteurs d'intervention",
        items: [
          'Logements / Habitat',
          'Tertiaire / Logistique',
          'Industriel',
          'Collectivités / Mairies',
          'Écoles',
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
    image: '/images/services/renovvv.jpg',
  },
  {
    slug: 'chauffage-climatisation',
    title: 'service.chauffage-climatisation.title',
    shortDesc: 'service.chauffage-climatisation.shortDesc',
    intro:
      "GPE conçoit et installe des systèmes de climatisation, de chauffage et de ventilation adaptés à chaque type de bâtiment. Nos équipes qualifiées interviennent en neuf comme en rénovation, dans les secteurs résidentiel, tertiaire et industriel. De la pompe à chaleur au système de climatisation réversible, nous garantissons confort thermique, performance énergétique et conformité aux normes en vigueur.",
    sections: [
      {
        title: '🛠️ Méthodologie & accompagnement',
        items: [
          "Études de conception et d'exécution",
          'Modélisation et dimensionnement',
          'Accompagnement, assistance et conseils personnalisés',
          'Installation, maintenance et dépannage',
        ],
      },
      {
        title: '🚀 Nos solutions',
        items: [
          'Pompes à chaleur air/air et air/eau',
          'Climatisation réversible (split et multi-split)',
          'Ventilation mécanique contrôlée (VMC simple et double flux)',
          'Planchers chauffants et refroidissants',
          'Chaudières gaz à condensation',
          "Systèmes solaires combinés (chauffage + eau chaude sanitaire)",
          'Maintenance préventive et corrective',
        ],
      },
      {
        title: "🏢 Secteurs d'intervention",
        items: [
          'Logements / Habitat',
          'Tertiaire / Logistique',
          'Industriel',
          'Collectivités / Mairies',
          'Écoles',
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
    intro:
      "GPE met à profit un savoir-faire technique reconnu grâce à son bureau d'études spécialisé en électricité et énergies renouvelables. Nos équipes conçoivent et optimisent chaque projet en s'appuyant sur des outils professionnels de référence afin de garantir des solutions performantes, fiables et adaptées aux besoins de chaque client.",
    sections: [
      {
        title: '🛠️ Méthodologie & accompagnement',
        items: [
          "Études de conception et d'exécution",
          'Modélisation et dimensionnement',
          'Accompagnement, assistance et conseils personnalisés',
          'Installation, maintenance et dépannage',
        ],
      },
      {
        title: '🚀 Nos solutions',
        items: [
          'Études CFO/CFA (courants forts et courants faibles)',
          'Études pour les installations photovoltaïques',
          'Études pour la mobilité électrique (IRVE)',
          'Études de chauffage et climatisation (CVC)',
          "Études d'isolation thermique et rénovation énergétique",
          'Maquette numérique (BIM)',
          'Audit énergétique (résidentiel et tertiaire)',
          'Optimisation et simulation énergétique',
        ],
      },
      {
        title: "🏢 Secteurs d'intervention",
        items: [
          'Logements / Habitat',
          'Tertiaire / Logistique',
          'Industriel',
          'Collectivités / Mairies',
          'Écoles',
          'Agricole',
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
    intro:
      "GPE intervient sur l'ensemble des travaux de Voiries et Réseaux Divers (VRD) : terrassement, création et réhabilitation de voiries, réseaux d'assainissement, adduction d'eau potable, réseaux électriques extérieurs et éclairage public. Nos équipes coordonnent les interventions avec l'ensemble des concessionnaires pour assurer la conformité et la sécurité des ouvrages. De l'aménagement de lotissements à la viabilisation de zones industrielles, nous accompagnons maîtres d'ouvrage et collectivités de la phase études à la réception des travaux.",
    sections: [
      {
        title: '🛠️ Méthodologie & accompagnement',
        items: [
          "Études de conception et d'exécution",
          'Modélisation et dimensionnement',
          'Accompagnement, assistance et conseils personnalisés',
          'Installation, maintenance et dépannage',
        ],
      },
      {
        title: '🚀 Nos solutions',
        items: [
          'Terrassement général et travaux de déblai/remblai',
          'Création et réhabilitation de voiries',
          "Réseaux d'assainissement (eaux usées et eaux pluviales)",
          "Réseaux d'adduction d'eau potable",
          "Réseaux électriques extérieurs et éclairage public",
          'Réseaux télécoms et fibres optiques',
          'Pavage, dallage et revêtements extérieurs',
          'Coordination avec les concessionnaires',
        ],
      },
      {
        title: "🏢 Secteurs d'intervention",
        items: [
          'Logements / Habitat',
          'Tertiaire / Logistique',
          'Industriel',
          'Collectivités / Mairies',
          'Écoles',
          'Agricole',
          'Voiries urbaines',
          'Centrales au sol',
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
