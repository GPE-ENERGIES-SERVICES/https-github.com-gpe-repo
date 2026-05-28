export interface Project {
  id: string
  title: string
  location: string
  serviceSlug: string
  serviceLabel: string
  client: string
  year: number
  description: string
  longDescription: string
  image: string
  gallery: string[]
  tags: string[]
}

export const projects: Project[] = [
  // Courants forts & faibles
   {
     id: 'er-1',
     title: 'Ombrières photovoltaïques 300 kW',
     location: 'marseille',
     serviceSlug: 'energies-renouvelables',
     serviceLabel: 'Énergies Renouvelables',
     client: 'Apex Energies',
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
    client: 'Enoé',
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
    client: 'WAAT',
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
    client: '',
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
    client: '',
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
    client: '',
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
