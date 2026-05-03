export interface Project {
  id: string
  title: string
  location: string
  serviceSlug: string
  serviceLabel: string
  client: string
  year: number
  description: string
  image: string
  tags: string[]
}

export const projects: Project[] = [
  // Courants forts
  {
    id: 'cf-1',
    title: 'Distribution HTA/BT — Centre Hospitalier Régional',
    location: 'Marseille, PACA',
    serviceSlug: 'courants-forts',
    serviceLabel: 'Courants Forts',
    client: 'CHU Marseille',
    year: 2023,
    description: 'Refonte complète de l\'installation électrique HTA/BT d\'un établissement de santé de 400 lits : TGBT redondants, onduleurs UPS, câblages et mise en conformité NF C 15-100.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    tags: ['HTA/BT', 'Santé', 'Redondance'],
  },
  {
    id: 'cf-2',
    title: 'Électrification — Entrepôt logistique 25 000 m²',
    location: 'Vitrolles, PACA',
    serviceSlug: 'courants-forts',
    serviceLabel: 'Courants Forts',
    client: 'XPO Logistics',
    year: 2022,
    description: 'Installation électrique complète d\'un entrepôt logistique incluant éclairage LED, alimentation des quais, tableaux divisionnaires et système de gestion d\'énergie.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    tags: ['Industrie', 'LED', 'BT'],
  },
  {
    id: 'cf-3',
    title: 'Mise aux normes électriques — Résidence 200 logements',
    location: 'Aix-en-Provence, PACA',
    serviceSlug: 'courants-forts',
    serviceLabel: 'Courants Forts',
    client: 'Bouygues Immobilier',
    year: 2023,
    description: 'Mise en conformité NF C 15-100 d\'une résidence collective : remplacement des tableaux, mise à la terre, installation de prises et éclairages communs.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    tags: ['Résidentiel', 'Conformité', 'BT'],
  },

  // Courants faibles
  {
    id: 'cfa-1',
    title: 'Vidéosurveillance & Contrôle d\'accès — Campus tertiaire',
    location: 'Lyon, Auvergne-Rhône-Alpes',
    serviceSlug: 'courants-faibles',
    serviceLabel: 'Courants Faibles',
    client: 'Nexity',
    year: 2023,
    description: 'Déploiement d\'un système intégré de vidéosurveillance IP HD (120 caméras), contrôle d\'accès biométrique et interphonie sur un campus de 15 000 m².',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
    tags: ['Sécurité', 'IP', 'Tertiaire'],
  },
  {
    id: 'cfa-2',
    title: 'Infrastructure réseau VDI — Siège social bancaire',
    location: 'Paris, Île-de-France',
    serviceSlug: 'courants-faibles',
    serviceLabel: 'Courants Faibles',
    client: 'Groupe BNP',
    year: 2022,
    description: 'Câblage structuré cat6A, baies de brassage, déploiement fibre optique et installation des systèmes domotiques KNX sur 8 étages.',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80',
    tags: ['VDI', 'Fibre', 'KNX'],
  },

  // Énergies renouvelables
  {
    id: 'er-1',
    title: 'Parc photovoltaïque 2 MWc — Ombrières de parking',
    location: 'Avignon, PACA',
    serviceSlug: 'energies-renouvelables',
    serviceLabel: 'Énergies Renouvelables',
    client: 'Centre Commercial Grand Avignon',
    year: 2023,
    description: 'Installation de 4 500 panneaux solaires en ombrières sur le parking d\'un centre commercial, avec raccordement réseau et système de monitoring de production en temps réel.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    tags: ['Photovoltaïque', 'Ombrières', '2 MWc'],
  },
  {
    id: 'er-2',
    title: 'Autoconsommation collective — ZAC résidentielle',
    location: 'Montpellier, Occitanie',
    serviceSlug: 'energies-renouvelables',
    serviceLabel: 'Énergies Renouvelables',
    client: 'Vinci Immobilier',
    year: 2022,
    description: 'Conception et installation d\'un projet d\'autoconsommation collective pour 80 logements : toitures PV, batteries de stockage et gestion dynamique de la distribution.',
    image: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=800&q=80',
    tags: ['Autoconsommation', 'Stockage', 'Résidentiel'],
  },
  {
    id: 'er-3',
    title: 'Centrale solaire au sol 5 MWc',
    location: 'Var, PACA',
    serviceSlug: 'energies-renouvelables',
    serviceLabel: 'Énergies Renouvelables',
    client: 'EDF Renouvelables',
    year: 2021,
    description: 'Construction clé en main d\'une centrale photovoltaïque au sol sur terrain industriel de 8 hectares, avec poste de livraison HTA et suivi de production.',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80',
    tags: ['Solaire au sol', '5 MWc', 'HTA'],
  },

  // Mobilité électrique
  {
    id: 'me-1',
    title: 'Infrastructure IRVE — Parking collectif 120 bornes',
    location: 'Sophia Antipolis, PACA',
    serviceSlug: 'mobilite-electrique',
    serviceLabel: 'Mobilité Électrique',
    client: 'Spie',
    year: 2023,
    description: 'Déploiement de 120 bornes de recharge pour une ZAC tertiaire : bornes 7 kW et 22 kW, supervision intelligente OCPP et gestion dynamique de puissance.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
    tags: ['IRVE', '120 bornes', 'Smart charging'],
  },
  {
    id: 'me-2',
    title: 'Recharge rapide DC — Aire autoroutière',
    location: 'Toulon, Var',
    serviceSlug: 'mobilite-electrique',
    serviceLabel: 'Mobilité Électrique',
    client: 'SANEF',
    year: 2022,
    description: 'Installation de 8 bornes de recharge rapide DC 150 kW sur une aire autoroutière, avec raccordement HTA et système de supervision à distance.',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80',
    tags: ['DC rapide', '150 kW', 'Autoroute'],
  },

  // Rénovation énergétique
  {
    id: 're-1',
    title: 'Rénovation globale — Lycée 1 200 élèves',
    location: 'Nice, PACA',
    serviceSlug: 'renovation-energetique',
    serviceLabel: 'Rénovation Énergétique',
    client: 'Région PACA',
    year: 2023,
    description: 'Rénovation énergétique complète d\'un lycée : isolation thermique par l\'extérieur, remplacement de la chaufferie, installation de PAC et VMC double flux — gain DPE de D à B.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
    tags: ['ITE', 'DPE', 'Education'],
  },
  {
    id: 're-2',
    title: 'Audit & rénovation — Bâtiment de bureaux 4 000 m²',
    location: 'Aix-en-Provence, PACA',
    serviceSlug: 'renovation-energetique',
    serviceLabel: 'Rénovation Énergétique',
    client: 'Sodexo Immobilier',
    year: 2022,
    description: 'Audit énergétique, remplacement des équipements HVAC, isolation des combles et déploiement d\'un GTB pour un bâtiment tertiaire — économies estimées à 45 %.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    tags: ['Audit', 'GTB', 'Tertiaire'],
  },

  // Chauffage & Climatisation
  {
    id: 'cvc-1',
    title: 'Climatisation VRV — Tour de bureaux 12 étages',
    location: 'Marseille, PACA',
    serviceSlug: 'chauffage-climatisation',
    serviceLabel: 'Chauffage & Climatisation',
    client: 'Groupe Altarea',
    year: 2023,
    description: 'Installation d\'un système VRV (Variable Refrigerant Volume) pour une tour de bureaux de 12 étages : 200 unités intérieures, gestion centralisée BMS.',
    image: 'https://images.unsplash.com/photo-1631545806609-4e1b59b25481?w=800&q=80',
    tags: ['VRV', 'Tertiaire', 'BMS'],
  },
  {
    id: 'cvc-2',
    title: 'Pompes à chaleur — Résidence senior 80 appartements',
    location: 'Toulon, PACA',
    serviceSlug: 'chauffage-climatisation',
    serviceLabel: 'Chauffage & Climatisation',
    client: 'Korian',
    year: 2022,
    description: 'Remplacement des chaudières gaz par des PAC air/eau en cascade, plancher chauffant et VMC double flux pour une résidence sénior — gain énergétique de 60 %.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    tags: ['PAC', 'VMC DF', 'Senior'],
  },

  // VRD
  {
    id: 'vrd-1',
    title: 'Aménagement VRD — ZAC 400 logements',
    location: 'Istres, PACA',
    serviceSlug: 'vrd',
    serviceLabel: 'VRD',
    client: 'Eiffage Immobilier',
    year: 2023,
    description: 'Travaux de voirie, réseaux d\'assainissement, alimentation eau potable, enfouissement des réseaux secs et éclairage public LED pour une ZAC de 400 logements.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    tags: ['Voirie', 'Assainissement', 'LED'],
  },
  {
    id: 'vrd-2',
    title: 'Éclairage public intelligent — Centre-ville',
    location: 'Martigues, PACA',
    serviceSlug: 'vrd',
    serviceLabel: 'VRD',
    client: 'Mairie de Martigues',
    year: 2022,
    description: 'Remplacement de 800 luminaires par des LED intelligents avec variation automatique selon la présence et l\'heure, pilotage centralisé et télégestion.',
    image: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=800&q=80',
    tags: ['LED', 'Smart city', 'Collectivité'],
  },

  // Bureau d'études
  {
    id: 'be-1',
    title: 'Maîtrise d\'œuvre — Complexe sportif 8 000 m²',
    location: 'Aubagne, PACA',
    serviceSlug: 'bureau-etudes',
    serviceLabel: "Bureau d'Études",
    client: 'Mairie d\'Aubagne',
    year: 2023,
    description: 'Mission complète de MOE : études de conception, CCTP, suivi de chantier et réception des lots électricité, CVC et VRD d\'un complexe sportif municipal.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    tags: ['MOE', 'Sport', 'Collectivité'],
  },
  {
    id: 'be-2',
    title: 'Étude BIM — Campus universitaire extension',
    location: 'Marseille, PACA',
    serviceSlug: 'bureau-etudes',
    serviceLabel: "Bureau d'Études",
    client: 'Université Aix-Marseille',
    year: 2022,
    description: 'Modélisation BIM (Revit) de l\'extension d\'un campus universitaire : coordination des lots techniques, clash detection et fourniture du DOE numérique.',
    image: 'https://images.unsplash.com/photo-1545670723-196ed0954986?w=800&q=80',
    tags: ['BIM', 'Revit', 'Université'],
  },
]

export function getProjectsByService(serviceSlug: string): Project[] {
  return projects.filter(p => p.serviceSlug === serviceSlug)
}

export const serviceLabels: Record<string, string> = {
  'courants-forts': 'Courants Forts',
  'courants-faibles': 'Courants Faibles',
  'energies-renouvelables': 'Énergies Renouvelables',
  'mobilite-electrique': 'Mobilité Électrique',
  'renovation-energetique': 'Rénovation Énergétique',
  'chauffage-climatisation': 'Chauffage & Climatisation',
  'vrd': 'VRD',
  'bureau-etudes': "Bureau d'Études",
}
