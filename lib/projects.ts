export interface Project {
  id: string
  title: string
  location: string
  serviceSlug: string
  serviceLabel: string
  year: number
  description: string
  longDescription: string
  image: string
  gallery: string[]
  tags: string[]
}

export const projects: Project[] = [
  // Projets Référents — Courants Forts & Faibles
  {
    id: 'cff-1',
    title: 'Oreca – Pôle Technique',
    location: 'Signes',
    serviceSlug: 'courants-forts-faibles',
    serviceLabel: 'Courants Forts & Faibles',
    year: 2024,
    description: "Installation électrique complète du pôle technique Oreca : réseaux HTA/BT, alimentation des ateliers de fabrication et systèmes de sûreté.",
    longDescription: "Réalisation de l'ensemble des installations électriques CFO/CFA du pôle technique Oreca à Signes. Les travaux ont porté sur la distribution haute et basse tension, le câblage des ateliers de fabrication et d'assemblage, ainsi que le déploiement des systèmes de sécurité incendie (SSI), de vidéosurveillance et de contrôle d'accès.\n\nCe chantier exigeant en milieu industriel a nécessité une coordination rigoureuse avec les équipes techniques d'Oreca, afin d'assurer la continuité des activités du site tout au long des travaux.",
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80',
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80',
      'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80',
    ],
    tags: ['CFO/CFA', 'HTA/BT', 'SSI', 'Industrie'],
  },
  {
    id: 'cff-2',
    title: 'CSI Marseille',
    location: 'Marseille',
    serviceSlug: 'courants-forts-faibles',
    serviceLabel: 'Courants Forts & Faibles',
    year: 2023,
    description: "Déploiement des installations électriques CFO/CFA du Centre de Services Informatiques de Marseille : TGBT, câblage structuré et systèmes de sécurité.",
    longDescription: "Réalisation des travaux d'électricité courants forts et courants faibles pour le Centre de Services Informatiques (CSI) de Marseille. Ce projet tertiaire d'envergure comprend la mise en œuvre du tableau général basse tension (TGBT), le câblage structuré et les réseaux IT, ainsi que l'installation des systèmes SSI, contrôle d'accès et vidéosurveillance.\n\nLa complexité du projet résidait dans la nécessité de maintenir la continuité de service des infrastructures existantes tout au long du chantier.",
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
    ],
    tags: ['CFO/CFA', 'TGBT', 'Câblage structuré', 'Tertiaire'],
  },
  {
    id: 'cff-3',
    title: 'Groupe Scolaire',
    location: 'Marseille',
    serviceSlug: 'courants-forts-faibles',
    serviceLabel: 'Courants Forts & Faibles',
    year: 2023,
    description: "Réhabilitation électrique complète d'un groupe scolaire marseillais : distribution BT, éclairage LED, SSI catégorie A et réseaux pédagogiques.",
    longDescription: "Réhabilitation complète des installations électriques d'un groupe scolaire à Marseille : mise aux normes de la distribution basse tension, remplacement de l'éclairage en LED, déploiement d'un SSI de catégorie A et mise en place des réseaux informatiques pédagogiques.\n\nCe projet, réalisé en site occupé, a demandé une planification rigoureuse afin de limiter les interruptions pour les élèves et les équipes pédagogiques. Les travaux ont été conduits en étroite collaboration avec la maîtrise d'ouvrage.",
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
      'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    ],
    tags: ['CFO/CFA', 'SSI Cat. A', 'LED', 'Éducation'],
  },
  {
    id: 'cff-4',
    title: 'Edge Aubagne',
    location: 'Aubagne',
    serviceSlug: 'courants-forts-faibles',
    serviceLabel: 'Courants Forts & Faibles',
    year: 2024,
    description: "Installation électrique d'un immeuble de bureaux tertiaire à Aubagne : distribution HTA/BT, TGBT, GTB et infrastructures courants faibles.",
    longDescription: "Réalisation de l'ensemble des prestations électriques CFO/CFA pour le programme tertiaire Edge à Aubagne. Ce bâtiment de bureaux de nouvelle génération comprend une distribution HTA/BT performante, un TGBT intelligent, une gestion technique du bâtiment (GTB) et l'intégralité des courants faibles (câblage structuré, SSI, contrôle d'accès, vidéosurveillance).\n\nLe projet intègre des solutions d'efficacité énergétique et de supervision permettant une exploitation optimale du bâtiment.",
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    ],
    tags: ['CFO/CFA', 'HTA/BT', 'GTB', 'Tertiaire'],
  },
  {
    id: 'cff-5',
    title: 'Cor Natura',
    location: 'Antibes',
    serviceSlug: 'courants-forts-faibles',
    serviceLabel: 'Courants Forts & Faibles',
    year: 2024,
    description: "Installations électriques de la résidence Cor Natura à Antibes : distribution BT, éclairage parties communes, prééquipement IRVE et contrôle d'accès.",
    longDescription: "Réalisation des installations électriques CFO/CFA de la résidence Cor Natura à Antibes. Ce programme résidentiel haut de gamme comprend la distribution basse tension des logements et des parties communes, l'éclairage architectural des espaces partagés, le prééquipement pour bornes de recharge IRVE et les systèmes de contrôle d'accès et visiophonie.\n\nLa résidence Cor Natura allie confort de vie et exigences environnementales, ce qui a guidé nos choix techniques vers des solutions économes en énergie et facilement évolutives.",
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    ],
    tags: ['CFO/CFA', 'Résidentiel', 'IRVE', 'Visiophonie'],
  },

  // Courants forts & faibles
   {
     id: 'er-1',
     title: 'Ombrières photovoltaïques 300 kW',
     location: 'marseille',
     serviceSlug: 'energies-renouvelables',
     serviceLabel: 'Énergies Renouvelables',
     year: 2026,
     description: 'Nous sommes fiers de vous présenter une nouvelle installation réalisée pour une grande surface alimentaire : une centrale photovoltaïque de 300 kW en ombrières de parking',

     longDescription: 'Installation d’une centrale photovoltaïque de 300 kW en ombrières de parking au sein d’une grande surface alimentaire. Ce projet permet de valoriser les espaces de stationnement en les transformant en zones de production d’énergie renouvelable, tout en assurant une protection des véhicules et un meilleur confort pour les usagers. L’installation contribue à la production d’électricité locale et durable, participant ainsi activement à la transition énergétique du site.',
     image: '/images/projet1/1.jpg',
     gallery: [
      '/images/projet1/2.jpg',
      '/images/projet1/3.jpg',
      '/images/projet1/4.jpg',
      '/images/projet1/5.jpg',
      '/images/projet1/6.jpg',
     ],
     tags: ['Photovoltaïque', 'Ombrières','Energie solaire'],
   },

  
  {
    id: 'er-2',
    title: 'Centrale photovoltaïque 1.2 MW',
    location: 'Cahors ',
    serviceSlug: 'energies-renouvelables',
    serviceLabel: 'Énergies Renouvelables',
    year: 2026 ,
    description: 'Centrale photovoltaïque de 1,2 MW installée en toiture bac acier près de Cahors, contribuant à la production d’énergie renouvelable locale grâce à une intégration optimisée sur le bâtiment.',
    longDescription: 'Installation d’une centrale photovoltaïque de 1,2 MW en toiture bac acier à proximité de Cahors. Ce projet permet de produire une énergie renouvelable locale tout en s’intégrant efficacement à la structure existante, participant ainsi à la transition énergétique du site.',
    image: '/images/projet2/1.jpg',
    gallery: [
      '/images/projet2/2.jpg',
      '/images/projet2/3.jpg',
      '/images/projet2/4.jpg',
      '/images/projet2/5.jpg',
      '/images/projet2/6.jpg',
      
    ],
    tags: ['Photovoltaïque', 'Energie solaire',],
  },
  {
    id: 'me-1',
    title: 'Prééquipement IRVE - Résidence',
    location: 'Saint-Raphaël',
    serviceSlug: 'mobilite-electrique', 
    serviceLabel: 'Mobilité Électrique',
    year: 2025 ,
    description: 'Prééquipement IRVE réalisé sur une résidence à Saint-Raphaël, permettant l’installation future de bornes de recharge pour véhicules électriques.',
    longDescription: 'Réalisation du prééquipement IRVE sur une résidence située à Saint-Raphaël. Cette installation prépare l’infrastructure nécessaire à l’accueil futur de bornes de recharge pour véhicules électriques, en garantissant une solution prête à être déployée selon les besoins des usagers. Ce projet s’inscrit dans la continuité du développement de la mobilité électrique. Nous remercions WAAT pour sa confiance et la qualité du suivi de ce chantier.',
    image: '/images/projet3/6.jpg',
    gallery: [
      '/images/projet3/2.jpg',
      '/images/projet3/3.jpg',
      '/images/projet3/4.jpg',
      '/images/projet3/5.jpg',
      '/images/projet3/1.jpg',
     
    ],
    tags: ['', '', ''],
  },



    {
    id: 'er-3',
    title: 'Installation photovoltaïque 50 kWc',
    location: 'Toulon',
    serviceSlug: 'energies-renouvelables',
    serviceLabel: 'Énergies Renouvelables',
    year: 2025 ,
    description: 'Installation d’une centrale photovoltaïque de 50 kWc en toiture à Toulon, contribuant à la production d’énergie solaire locale et durable.',
    longDescription: 'Réalisation d’une installation photovoltaïque de 50 kWc en toiture sur un bâtiment situé à Toulon. Ce projet illustre l’intégration de l’énergie solaire à différentes échelles, permettant de produire une électricité locale et renouvelable tout en participant à la transition énergétique',
    image: '/images/projet4/1.jpg',
    gallery: [
      '/images/projet4/2.jpg',
      '/images/projet4/3.jpg',
      '/images/projet4/4.jpg',
      '/images/projet4/5.jpg',
      
     
     
    ],
    tags: ['Photovoltaïque', 'Energie solaire', ''],
  },

    {
    id: 'er-3',
    title: '',
    location: '',
    serviceSlug: '',
    serviceLabel: '',
    year:1 ,
    description: '',
    longDescription: '',
    image: '',
    gallery: [
     
    ],
    tags: ['', '', ''],
  },


    {
    id: 'er-3',
    title: '',
    location: '',
    serviceSlug: '',
    serviceLabel: '',
    year:1 ,
    description: '',
    longDescription: '',
    image: '',
    gallery: [
     
    ],
    tags: ['', '', ''],
  },


]

export function getProjectsByService(serviceSlug: string): Project[] {
  return projects.filter(p => p.serviceSlug === serviceSlug)
}

export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id)
}

export const serviceLabels: Record<string, string> = {
  'courants-forts-faibles': 'Courants Forts & Faibles',
  'energies-renouvelables': 'Énergies Renouvelables',
  'mobilite-electrique': 'Mobilité Électrique',
  'renovation-energetique': 'Rénovation Énergétique',
  'chauffage-climatisation': 'Chauffage & Climatisation',
  'bureau-etudes': "Bureau d'Études",
  'gtb-knx': 'GTB / KNX',
}
