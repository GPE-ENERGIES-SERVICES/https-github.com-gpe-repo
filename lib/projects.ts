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
     gallery: [
      '/images/logo.png',
      '/images/logo.png'

     ],
     tags: ['xx', 'yyy','zzz'],
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
    description: 'Installation de 4 500 panneaux solaires en ombrières sur le parking d\'un centre commercial.',
    longDescription: 'Ce projet d\'envergure a transformé le parking de 3,2 hectares du Centre Commercial Grand Avignon en centrale de production solaire avec 4 500 panneaux photovoltaïques haute performance installés sur des structures ombrières bi-peau. La puissance installée atteint 2 MWc avec une production annuelle estimée à 2,4 GWh, couvrant l\'intégralité des besoins électriques du centre commercial. Le projet inclut également un raccordement réseau HTA avec poste de livraison, un système de monitoring de production en temps réel accessible en ligne, et l\'intégration de 40 bornes de recharge pour véhicules électriques sous les ombrières. Ce projet a valu à GPE un prix régional de l\'innovation énergétique.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80',
      'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=800&q=80',
    ],
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
    description: 'Conception et installation d\'un projet d\'autoconsommation collective pour 80 logements.',
    longDescription: 'Premier projet d\'autoconsommation collective de grande envergure en région Occitanie, cette ZAC résidentielle réunit 80 logements bénéficiant d\'une production solaire mutualisée. Les 320 kWc installés en toiture des immeubles sont complétés par un système de stockage batterie de 200 kWh qui lisse la courbe de production et maximise l\'utilisation locale de l\'énergie. Un algorithme de gestion dynamique répartit l\'énergie entre les logements selon leur consommation en temps réel. Les résidents bénéficient d\'une réduction moyenne de 35 % sur leur facture d\'électricité. GPE a assuré la conception, l\'installation, le raccordement Enedis et la mise en place de la solution de comptage individualisé conforme au décret.',
    image: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=800&q=80',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    ],
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
    description: 'Construction clé en main d\'une centrale photovoltaïque au sol sur terrain industriel de 8 hectares.',
    longDescription: 'Cette centrale solaire au sol de 5 MWc a été réalisée en mode clé en main sur un ancien site industriel dépollué de 8 hectares dans le Var. GPE Énergies & Services a pris en charge l\'intégralité du projet : études de conception et d\'intégration paysagère, fourniture et installation des 12 500 modules bifaciaux sur trackers solaires mono-axe, câblage DC/AC, construction du poste de livraison HTA 20 kV, raccordement réseau, et mise en place du système de monitoring et de supervision à distance. La centrale produit l\'équivalent de la consommation électrique de 1 800 foyers. Le délai de réalisation de 8 mois a été tenu malgré les contraintes géologiques du terrain.',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
      'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=800&q=80',
    ],
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
    description: 'Déploiement de 120 bornes de recharge pour une ZAC tertiaire avec supervision intelligente OCPP.',
    longDescription: 'Ce déploiement massif de 120 bornes de recharge pour une ZAC tertiaire à Sophia Antipolis constitue l\'une des plus grandes installations IRVE de la région PACA. Le projet comprend 90 bornes 7 kW pour la recharge lente diurne, 30 bornes 22 kW pour la recharge rapide, un système de supervision intelligente conforme au protocole OCPP 2.0 permettant la gestion des sessions, la facturation et la maintenance à distance, ainsi qu\'un système de gestion dynamique de puissance évitant le dépassement de la puissance souscrite. L\'infrastructure comprend également une connexion aux 2 kWc de panneaux solaires du parking pour maximiser l\'autoconsommation verte. Un tableau de bord en temps réel permet aux gestionnaires de suivre l\'utilisation et les revenus.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80',
      'https://images.unsplash.com/photo-1609592806596-4d1ad9b6be36?w=800&q=80',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    ],
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
    description: 'Installation de 8 bornes de recharge rapide DC 150 kW sur une aire autoroutière avec supervision à distance.',
    longDescription: 'Ce projet de déploiement de recharge rapide sur l\'axe A50 représente une réalisation technique complexe nécessitant un raccordement HTA dédié. Les 8 bornes DC 150 kW CHAdeMO/CCS permettent de charger un véhicule électrique de 20 à 80 % en moins de 25 minutes. Le projet a inclus la construction d\'un poste de transformation HTA/BT 630 kVA, la réalisation du génie civil (massifs, fourreaux, tranchées), l\'installation et le raccordement des bornes, la mise en place d\'un système de supervision à distance avec alertes en temps réel, et l\'intégration au réseau national de recharge SANEF. Une signalétique lumineuse indique en temps réel la disponibilité des bornes depuis l\'autoroute.',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80',
      'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
      'https://images.unsplash.com/photo-1609592806596-4d1ad9b6be36?w=800&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    ],
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
    description: 'Rénovation énergétique complète d\'un lycée avec gain de DPE de D à B.',
    longDescription: 'Ce chantier de rénovation énergétique d\'envergure a concerné un lycée de 1 200 élèves réparti sur 9 bâtiments. Les travaux ont inclus l\'isolation thermique par l\'extérieur (ITE) de l\'ensemble des façades avec un ITE de 140 mm, le remplacement de l\'intégralité des menuiseries par des double-vitrages à haute isolation thermique, le remplacement de la chaufferie gaz centrale par une cascade de 3 pompes à chaleur air/eau de 120 kW chacune, l\'installation d\'une VMC double flux dans tous les bâtiments d\'enseignement, et le déploiement d\'un système GTB pour le pilotage centralisé des équipements CVC. Le gain énergétique atteint 62 % et le DPE est passé de D (180 kWh/m²/an) à B (80 kWh/m²/an). Les économies annuelles pour la Région PACA s\'élèvent à 145 000 €.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
      'https://images.unsplash.com/photo-1631545806609-4e1b59b25481?w=800&q=80',
    ],
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
    description: 'Audit énergétique et rénovation HVAC d\'un bâtiment tertiaire — économies de 45 %.',
    longDescription: 'La démarche a débuté par un audit énergétique réglementaire complet du bâtiment, aboutissant à un plan d\'actions priorisé par retour sur investissement. Les travaux retenus ont porté sur le remplacement de la centrale de traitement d\'air par une CTA double flux à haute efficacité, l\'installation d\'une PAC eau/eau pour la production de chaud et de froid, l\'isolation des combles perdus (250 mm laine de roche), et le déploiement d\'un système GTB avec 350 points de mesure pour la supervision en temps réel des consommations par zone. Un tableau de bord accessible en ligne permet au facility manager de Sodexo de piloter les performances énergétiques du bâtiment. Les économies réalisées atteignent 45 % de la consommation initiale, avec un retour sur investissement de 4,5 ans.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
      'https://images.unsplash.com/photo-1631545806609-4e1b59b25481?w=800&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    ],
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
    description: 'Installation d\'un système VRV pour une tour de bureaux de 12 étages avec gestion centralisée BMS.',
    longDescription: 'La climatisation de cette tour de bureaux de 12 étages représente un projet d\'ingénierie CVC de premier plan. Le système VRV (Variable Refrigerant Volume) déployé comprend 12 unités extérieures Daikin haute performance installées en toiture, 200 unités intérieures de différents types adaptées à chaque espace (cassettes 4 voies, gainables, consoles), et un réseau de tuyauteries frigorifiques de 4,2 km au total. La gestion centralisée via BMS permet le pilotage par zone horaire, la remontée d\'alarmes, et l\'optimisation des consommations par intelligence artificielle. Les certifications BREEAM Very Good du bâtiment ont été maintenues grâce aux performances énergétiques du système. Le SCOP global de l\'installation atteint 4,2.',
    image: 'https://images.unsplash.com/photo-1631545806609-4e1b59b25481?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1631545806609-4e1b59b25481?w=800&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    ],
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
    description: 'Remplacement des chaudières gaz par des PAC air/eau en cascade — gain énergétique de 60 %.',
    longDescription: 'Ce projet de décarbonation d\'une résidence sénior a nécessité une approche rigoureuse pour limiter les impacts sur les résidents pendant les travaux. Les 3 chaudières gaz existantes ont été remplacées par une cascade de 4 PAC air/eau de 80 kW chacune, assurant la production de chaleur pour le plancher chauffant basse température de l\'ensemble des logements et espaces communs. La VMC simple flux a été remplacée par une VMC double flux avec récupération de chaleur (rendement 85 %), réduisant significativement les pertes thermiques. L\'ensemble du réseau de distribution hydraulique a été recalibré pour s\'adapter aux températures de départ basses des PAC (45°C). Le gain énergétique global atteint 60 % et les émissions de CO₂ ont été réduites de 85 % par rapport à l\'installation gaz.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      'https://images.unsplash.com/photo-1631545806609-4e1b59b25481?w=800&q=80',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    ],
    tags: ['PAC', 'VMC DF', 'Senior'],
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
    description: 'Mission complète de MOE pour les lots électricité, CVC et VRD d\'un complexe sportif municipal.',
    longDescription: 'GPE Énergies & Services a assuré la mission complète de maîtrise d\'œuvre pour la construction de ce complexe sportif de 8 000 m² comprenant une salle omnisports, une piscine couverte et des équipements extérieurs. Notre bureau d\'études a réalisé les études de conception des lots électricité courants forts/faibles, CVC et VRD, la rédaction des CCTP, le dépouillement des appels d\'offres et la recommandation des entreprises, le suivi de chantier hebdomadaire avec compte-rendu, la gestion des interfaces entre les différents corps d\'état, et la réception des travaux avec levée des réserves. La livraison a eu lieu dans le budget prévisionnel initial de 12 M€ et avec un seul mois de décalage par rapport au planning prévisionnel initial de 24 mois.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      'https://images.unsplash.com/photo-1545670723-196ed0954986?w=800&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    ],
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
    description: 'Modélisation BIM (Revit) de l\'extension d\'un campus universitaire avec coordination des lots techniques.',
    longDescription: 'L\'extension du campus universitaire d\'Aix-Marseille a nécessité une coordination technique complexe entre les lots architecturaux et les lots techniques (électricité, CVC, plomberie, structure). Notre bureau d\'études BIM a réalisé la modélisation complète sous Revit des lots électricité courants forts/faibles et CVC, la coordination 3D avec les autres corps d\'état via la plateforme BIM360, la détection et résolution de 340 conflits (clash detection) avant le démarrage des travaux, la fourniture du maquette numérique de synthèse (IFC), et la constitution du Dossier des Ouvrages Exécutés (DOE) numérique conforme au protocole BIM de l\'AMU. Cette approche a permis d\'éviter les reprises en cours de chantier et d\'économiser 8 % sur le coût global des lots techniques.',
    image: 'https://images.unsplash.com/photo-1545670723-196ed0954986?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545670723-196ed0954986?w=800&q=80',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80',
    ],
    tags: ['BIM', 'Revit', 'Université'],
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
