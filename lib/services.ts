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
    slug: 'courants-forts',
    title: 'Courants Forts',
    shortDesc: 'Installations électriques haute et basse tension pour tous vos bâtiments industriels, tertiaires et résidentiels.',
    description: [
      'Nos équipes d\'experts réalisent l\'ensemble de vos installations électriques courants forts, du tableau de distribution jusqu\'aux équipements terminaux. Chaque projet est conçu selon les normes NF C 15-100 et adapté à vos besoins spécifiques.',
      'De la conception à la mise en service, nous vous accompagnons dans toutes les phases de votre projet électrique : études préalables, dimensionnement, installation, contrôle et maintenance.',
    ],
    benefits: [
      'Conformité aux normes NF C 15-100',
      'Expertise en HTA/HTB et BT',
      'Tableaux électriques sur mesure',
      'Maintenance préventive et corrective',
      'Diagnostic et audit électrique',
    ],
    icon: 'zap',
    color: '#0B7FED',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    slug: 'courants-faibles',
    title: 'Courants Faibles',
    shortDesc: 'Systèmes de sécurité, réseaux informatiques, contrôle d\'accès et solutions de communication intelligentes.',
    description: [
      'GPE Énergies & Services conçoit et installe vos systèmes courants faibles : vidéosurveillance, contrôle d\'accès, alarmes intrusion et incendie, réseaux VDI, interphonie et domotique professionnelle.',
      'Nos solutions sont intégrées et interconnectées pour offrir une gestion centralisée de votre bâtiment, améliorant sécurité, confort et efficacité opérationnelle.',
    ],
    benefits: [
      'Vidéosurveillance IP HD',
      'Contrôle d\'accès biométrique',
      'Systèmes d\'alarme certifiés',
      'Réseaux informatiques structurés',
      'Domotique et KNX',
    ],
    icon: 'wifi',
    color: '#6366f1',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
  },
  {
    slug: 'energies-renouvelables',
    title: 'Énergies Renouvelables',
    shortDesc: 'Installation de panneaux photovoltaïques, systèmes solaires thermiques et solutions de stockage d\'énergie.',
    description: [
      'Accélérez votre transition énergétique avec nos solutions renouvelables sur mesure. Du bilan énergétique initial à l\'installation et au suivi de production, nous maximisons vos économies et votre autonomie énergétique.',
      'Certifiés RGE QualiPV, nos installateurs garantissent des installations performantes et durables, éligibles aux aides financières disponibles (MaPrimeRénov\', TVA réduite, autoconsommation).',
    ],
    benefits: [
      'Panneaux photovoltaïques (résidentiel & tertiaire)',
      'Autoconsommation et revente surplus',
      'Systèmes de stockage par batteries',
      'Solaire thermique et chauffe-eau solaire',
      'Certification RGE QualiPV',
    ],
    icon: 'sun',
    color: '#f59e0b',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
  },
  {
    slug: 'mobilite-electrique',
    title: 'Mobilité Électrique',
    shortDesc: 'Installation de bornes de recharge pour véhicules électriques, IRVE résidentiel, tertiaire et collectif.',
    description: [
      'Leader dans l\'installation d\'infrastructures de recharge (IRVE), GPE Énergies & Services équipe vos parkings résidentiels, tertiaires et collectifs avec des solutions de recharge adaptées à chaque usage.',
      'De la borne simple au hub de charge rapide avec gestion dynamique de puissance, nous concevons des installations pérennes, connectées et évolutives.',
    ],
    benefits: [
      'Bornes résidentielles (7 à 22 kW)',
      'Infrastructure collective IRVE',
      'Recharge rapide DC (tertiaire)',
      'Supervision et télégestion',
      'Qualification IRVE obligatoire',
    ],
    icon: 'car',
    color: '#00C896',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
  },
  {
    slug: 'renovation-energetique',
    title: 'Rénovation Énergétique',
    shortDesc: 'Audit et travaux de rénovation pour améliorer le DPE et réduire les consommations de votre patrimoine.',
    description: [
      'La rénovation énergétique est au cœur de notre métier. Nous réalisons l\'audit de votre bâtiment, identifions les postes de déperdition et proposons un plan de travaux priorisé pour optimiser votre investissement.',
      'Isolation, remplacement des équipements énergétiques, ventilation performante : nos équipes pluridisciplinaires pilotent l\'ensemble du chantier en garantissant les performances annoncées.',
    ],
    benefits: [
      'Audit énergétique certifié',
      'Isolation thermique (ITE/ITI)',
      'Remplacement équipements énergivores',
      'Accès aux aides MaPrimeRénov\'',
      'Garantie des performances',
    ],
    icon: 'home',
    color: '#10b981',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
  },
  {
    slug: 'chauffage-climatisation',
    title: 'Chauffage & Climatisation',
    shortDesc: 'Solutions CVC complètes : pompes à chaleur, climatisation réversible, plancher chauffant et ventilation.',
    description: [
      'Confort thermique toute l\'année : GPE Énergies & Services installe et entretient vos systèmes de chauffage et de climatisation. Pompes à chaleur air/air et air/eau, VRV/VRF pour le tertiaire, planchers chauffants, VMC double flux.',
      'Nos techniciens certifiés fluides frigorigènes assurent la mise en service, la maintenance et le suivi de vos équipements pour une performance optimale sur le long terme.',
    ],
    benefits: [
      'Pompes à chaleur (PAC) toutes technologies',
      'Climatisation réversible multi-split',
      'VRV/VRF pour bâtiments tertiaires',
      'Plancher chauffant hydraulique',
      'VMC simple et double flux',
    ],
    icon: 'thermometer',
    color: '#ef4444',
    image: 'https://images.unsplash.com/photo-1631545806609-4e1b59b25481?w=800&q=80',
  },
  {
    slug: 'vrd',
    title: 'VRD',
    shortDesc: 'Voirie, réseaux et distribution : aménagement extérieur, éclairage public, réseaux secs et humides.',
    description: [
      'Notre pôle VRD (Voirie Réseaux Divers) intervient sur l\'ensemble des travaux d\'aménagement extérieur : terrassement, voirie, réseaux d\'assainissement, alimentation eau potable, réseaux d\'éclairage public et enfouissement de réseaux.',
      'De la maîtrise d\'œuvre à l\'exécution des travaux, nous gérons vos projets VRD avec rigueur et respect des délais, en coordination étroite avec les concessionnaires de réseaux.',
    ],
    benefits: [
      'Terrassement et voirie',
      'Réseaux d\'assainissement',
      'Alimentation en eau potable',
      'Éclairage public LED',
      'Enfouissement de réseaux',
    ],
    icon: 'road',
    color: '#8b5cf6',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
  {
    slug: 'bureau-etudes',
    title: 'Bureau d\'Études',
    shortDesc: 'Conception, ingénierie et maîtrise d\'œuvre pour vos projets : études techniques, CCTP, suivi de chantier.',
    description: [
      'Notre bureau d\'études interne est le garant de la qualité et de la performance de chaque projet. De la phase de conception (études de faisabilité, dimensionnement, CCTP) jusqu\'à la réception des travaux, nos ingénieurs pilotent chaque étape.',
      'Nous utilisons les outils BIM dernière génération pour une modélisation précise et une coordination fluide avec les autres corps d\'état, réduisant les risques et les délais.',
    ],
    benefits: [
      'Études de faisabilité et avant-projets',
      'Modélisation BIM (Revit, AutoCAD)',
      'Rédaction CCTP et DCE',
      'Maîtrise d\'œuvre d\'exécution',
      'Suivi et réception de chantier',
    ],
    icon: 'drafting-compass',
    color: '#0B7FED',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug)
}
