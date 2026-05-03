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
    shortDesc: 'Installations Ã©lectriques haute et basse tension pour tous vos bÃ¢timents industriels, tertiaires et rÃ©sidentiels.',
    description: [
      'Nos Ã©quipes d\'experts rÃ©alisent l\'ensemble de vos installations Ã©lectriques courants forts, du tableau de distribution jusqu\'aux Ã©quipements terminaux. Chaque projet est conÃ§u selon les normes NF C 15-100 et adaptÃ© Ã  vos besoins spÃ©cifiques.',
      'De la conception Ã  la mise en service, nous vous accompagnons dans toutes les phases de votre projet Ã©lectrique : Ã©tudes prÃ©alables, dimensionnement, installation, contrÃ´le et maintenance.',
    ],
    benefits: [
      'ConformitÃ© aux normes NF C 15-100',
      'Expertise en HTA/HTB et BT',
      'Tableaux Ã©lectriques sur mesure',
      'Maintenance prÃ©ventive et corrective',
      'Diagnostic et audit Ã©lectrique',
    ],
    icon: 'zap',
    color: '#1FAF5A',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    slug: 'courants-faibles',
    title: 'Courants Faibles',
    shortDesc: 'SystÃ¨mes de sÃ©curitÃ©, rÃ©seaux informatiques, contrÃ´le d\'accÃ¨s et solutions de communication intelligentes.',
    description: [
      'GPE Ã‰nergies & Services conÃ§oit et installe vos systÃ¨mes courants faibles : vidÃ©osurveillance, contrÃ´le d\'accÃ¨s, alarmes intrusion et incendie, rÃ©seaux VDI, interphonie et domotique professionnelle.',
      'Nos solutions sont intÃ©grÃ©es et interconnectÃ©es pour offrir une gestion centralisÃ©e de votre bÃ¢timent, amÃ©liorant sÃ©curitÃ©, confort et efficacitÃ© opÃ©rationnelle.',
    ],
    benefits: [
      'VidÃ©osurveillance IP HD',
      'ContrÃ´le d\'accÃ¨s biomÃ©trique',
      'SystÃ¨mes d\'alarme certifiÃ©s',
      'RÃ©seaux informatiques structurÃ©s',
      'Domotique et KNX',
    ],
    icon: 'wifi',
    color: '#6366f1',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
  },
  {
    slug: 'energies-renouvelables',
    title: 'Ã‰nergies Renouvelables',
    shortDesc: 'Installation de panneaux photovoltaÃ¯ques, systÃ¨mes solaires thermiques et solutions de stockage d\'Ã©nergie.',
    description: [
      'AccÃ©lÃ©rez votre transition Ã©nergÃ©tique avec nos solutions renouvelables sur mesure. Du bilan Ã©nergÃ©tique initial Ã  l\'installation et au suivi de production, nous maximisons vos Ã©conomies et votre autonomie Ã©nergÃ©tique.',
      'CertifiÃ©s RGE QualiPV, nos installateurs garantissent des installations performantes et durables, Ã©ligibles aux aides financiÃ¨res disponibles (MaPrimeRÃ©nov\', TVA rÃ©duite, autoconsommation).',
    ],
    benefits: [
      'Panneaux photovoltaÃ¯ques (rÃ©sidentiel & tertiaire)',
      'Autoconsommation et revente surplus',
      'SystÃ¨mes de stockage par batteries',
      'Solaire thermique et chauffe-eau solaire',
      'Certification RGE QualiPV',
    ],
    icon: 'sun',
    color: '#f59e0b',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
  },
  {
    slug: 'mobilite-electrique',
    title: 'MobilitÃ© Ã‰lectrique',
    shortDesc: 'Installation de bornes de recharge pour vÃ©hicules Ã©lectriques, IRVE rÃ©sidentiel, tertiaire et collectif.',
    description: [
      'Leader dans l\'installation d\'infrastructures de recharge (IRVE), GPE Ã‰nergies & Services Ã©quipe vos parkings rÃ©sidentiels, tertiaires et collectifs avec des solutions de recharge adaptÃ©es Ã  chaque usage.',
      'De la borne simple au hub de charge rapide avec gestion dynamique de puissance, nous concevons des installations pÃ©rennes, connectÃ©es et Ã©volutives.',
    ],
    benefits: [
      'Bornes rÃ©sidentielles (7 Ã  22 kW)',
      'Infrastructure collective IRVE',
      'Recharge rapide DC (tertiaire)',
      'Supervision et tÃ©lÃ©gestion',
      'Qualification IRVE obligatoire',
    ],
    icon: 'car',
    color: '#C6FF00',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
  },
  {
    slug: 'renovation-energetique',
    title: 'RÃ©novation Ã‰nergÃ©tique',
    shortDesc: 'Audit et travaux de rÃ©novation pour amÃ©liorer le DPE et rÃ©duire les consommations de votre patrimoine.',
    description: [
      'La rÃ©novation Ã©nergÃ©tique est au cÅ“ur de notre mÃ©tier. Nous rÃ©alisons l\'audit de votre bÃ¢timent, identifions les postes de dÃ©perdition et proposons un plan de travaux priorisÃ© pour optimiser votre investissement.',
      'Isolation, remplacement des Ã©quipements Ã©nergÃ©tiques, ventilation performante : nos Ã©quipes pluridisciplinaires pilotent l\'ensemble du chantier en garantissant les performances annoncÃ©es.',
    ],
    benefits: [
      'Audit Ã©nergÃ©tique certifiÃ©',
      'Isolation thermique (ITE/ITI)',
      'Remplacement Ã©quipements Ã©nergivores',
      'AccÃ¨s aux aides MaPrimeRÃ©nov\'',
      'Garantie des performances',
    ],
    icon: 'home',
    color: '#10b981',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
  },
  {
    slug: 'chauffage-climatisation',
    title: 'Chauffage & Climatisation',
    shortDesc: 'Solutions CVC complÃ¨tes : pompes Ã  chaleur, climatisation rÃ©versible, plancher chauffant et ventilation.',
    description: [
      'Confort thermique toute l\'annÃ©e : GPE Ã‰nergies & Services installe et entretient vos systÃ¨mes de chauffage et de climatisation. Pompes Ã  chaleur air/air et air/eau, VRV/VRF pour le tertiaire, planchers chauffants, VMC double flux.',
      'Nos techniciens certifiÃ©s fluides frigorigÃ¨nes assurent la mise en service, la maintenance et le suivi de vos Ã©quipements pour une performance optimale sur le long terme.',
    ],
    benefits: [
      'Pompes Ã  chaleur (PAC) toutes technologies',
      'Climatisation rÃ©versible multi-split',
      'VRV/VRF pour bÃ¢timents tertiaires',
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
    shortDesc: 'Voirie, rÃ©seaux et distribution : amÃ©nagement extÃ©rieur, Ã©clairage public, rÃ©seaux secs et humides.',
    description: [
      'Notre pÃ´le VRD (Voirie RÃ©seaux Divers) intervient sur l\'ensemble des travaux d\'amÃ©nagement extÃ©rieur : terrassement, voirie, rÃ©seaux d\'assainissement, alimentation eau potable, rÃ©seaux d\'Ã©clairage public et enfouissement de rÃ©seaux.',
      'De la maÃ®trise d\'Å“uvre Ã  l\'exÃ©cution des travaux, nous gÃ©rons vos projets VRD avec rigueur et respect des dÃ©lais, en coordination Ã©troite avec les concessionnaires de rÃ©seaux.',
    ],
    benefits: [
      'Terrassement et voirie',
      'RÃ©seaux d\'assainissement',
      'Alimentation en eau potable',
      'Ã‰clairage public LED',
      'Enfouissement de rÃ©seaux',
    ],
    icon: 'road',
    color: '#8b5cf6',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
  {
    slug: 'bureau-etudes',
    title: 'Bureau d\'Ã‰tudes',
    shortDesc: 'Conception, ingÃ©nierie et maÃ®trise d\'Å“uvre pour vos projets : Ã©tudes techniques, CCTP, suivi de chantier.',
    description: [
      'Notre bureau d\'Ã©tudes interne est le garant de la qualitÃ© et de la performance de chaque projet. De la phase de conception (Ã©tudes de faisabilitÃ©, dimensionnement, CCTP) jusqu\'Ã  la rÃ©ception des travaux, nos ingÃ©nieurs pilotent chaque Ã©tape.',
      'Nous utilisons les outils BIM derniÃ¨re gÃ©nÃ©ration pour une modÃ©lisation prÃ©cise et une coordination fluide avec les autres corps d\'Ã©tat, rÃ©duisant les risques et les dÃ©lais.',
    ],
    benefits: [
      'Ã‰tudes de faisabilitÃ© et avant-projets',
      'ModÃ©lisation BIM (Revit, AutoCAD)',
      'RÃ©daction CCTP et DCE',
      'MaÃ®trise d\'Å“uvre d\'exÃ©cution',
      'Suivi et rÃ©ception de chantier',
    ],
    icon: 'drafting-compass',
    color: '#1FAF5A',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug)
}
