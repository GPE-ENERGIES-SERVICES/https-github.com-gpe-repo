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
     id: 'cff-1',
     title: 'projet x',
     location: 'marseille',
     serviceSlug: 'courants-forts-faibles',
     serviceLabel: 'Courants Forts & Faibles',
     client: 'enedis',
     year: 2024,
     description: 'miaw miaw',
     longDescription: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
     image: '/images/logo.png',
     gallery: [],
     tags: ['xx', 'yyy','zzz'],
   },

  
  {
    id: 'er-2',
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
}
