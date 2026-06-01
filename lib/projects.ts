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
    image: '/images/oreca/Oreca.jpg',
    gallery: [
      '/images/oreca/initial-oreca-signes-automobile.jpg',
      '/images/oreca/oreca-signes-automobile-2.jpg',
      '/images/oreca/Oreca.jpg',
    ],
    tags: ['CFO/CFA', 'HTA/BT', 'SSI', 'Industrie'],
  },
  {
    id: 'cff-2',
    title: 'Cité Scolaire Internationale',
    location: 'Marseille',
    serviceSlug: 'courants-forts-faibles',
    serviceLabel: 'Courants Forts & Faibles',
    year: 2023,
    description: "Installations électriques CFO/CFA de la Cité Scolaire Internationale de Marseille : distribution BT, éclairage des bâtiments, SSI et réseaux courants faibles.",
    longDescription: "Réalisation des travaux d'électricité courants forts et courants faibles pour la Cité Scolaire Internationale (CSI) de Marseille. Ce chantier d'établissement scolaire comprend la distribution basse tension, l'éclairage intérieur et extérieur des bâtiments, le déploiement d'un système de sécurité incendie (SSI), ainsi que les réseaux courants faibles : câblage structuré, contrôle d'accès et interphonie.\n\nLes travaux ont été conduits en coordination étroite avec la maîtrise d'ouvrage afin d'assurer la continuité des activités pédagogiques pendant toute la durée du chantier.",
    image: '/images/csi%20marseille/pano-cite-scolaire-internationale%20(1).jpg',
    gallery: [
      '/images/csi%20marseille/cite-scolaire-vignette.png',
      '/images/csi%20marseille/capture-decran-2024-02-02-a-07.00.03-1140x570.png',
      '/images/csi%20marseille/t%C3%A9l%C3%A9chargement.jpg',
    ],
    tags: ['CFO/CFA', 'SSI', 'Éclairage', 'Éducation'],
  },
  {
    id: 'cff-3',
    title: 'Groupe Scolaire Marceau',
    location: 'Marseille',
    serviceSlug: 'courants-forts-faibles',
    serviceLabel: 'Courants Forts & Faibles',
    year: 2023,
    description: "Réhabilitation et mise aux normes électriques du Groupe Scolaire Marceau à Marseille : distribution BT, éclairage LED haute efficacité, SSI catégorie A et réseaux numériques pédagogiques.",
    longDescription: "Réhabilitation complète des installations électriques CFO/CFA du Groupe Scolaire Marceau à Marseille. Les travaux comprennent la mise aux normes de la distribution basse tension, le remplacement de l'éclairage par des équipements LED haute efficacité, le déploiement d'un système de sécurité incendie (SSI) de catégorie A, ainsi que la mise en place des infrastructures réseaux informatiques pédagogiques.\n\nCe chantier, conduit en site occupé par phases successives, a requis une coordination rigoureuse avec la maîtrise d'ouvrage afin de préserver la continuité des activités scolaires tout au long des travaux.",
    image: '/images/gs%20marceau/Groupe-scolaire-Marceau-Marseille-en-tete-1920x948.webp',
    gallery: [
      '/images/gs%20marceau/marceau_apres_2.jpg',
      '/images/gs%20marceau/DCE-Urba-GS-Marceau-1280x1280.webp',
      '/images/gs%20marceau/visite_de_reconnaissance_groupe_scolaire_marceau_-_anthony_carayol_-_vdm_367381_-_450.jpg',
      '/images/gs%20marceau/t%C3%A9l%C3%A9chargement.jpg',
    ],
    tags: ['CFO/CFA', 'SSI Cat. A', 'LED', 'Éducation'],
  },
  {
    id: 'cff-4',
    title: 'Edge Park',
    location: 'Aubagne',
    serviceSlug: 'courants-forts-faibles',
    serviceLabel: 'Courants Forts & Faibles',
    year: 2024,
    description: "Installations électriques CFO/CFA du parc tertiaire Edge à Aubagne : distribution HTA/BT, TGBT intelligent, GTB et intégralité des courants faibles.",
    longDescription: "Réalisation de l'ensemble des prestations électriques CFO/CFA pour le parc tertiaire Edge à Aubagne. Ce programme de bâtiments de bureaux comprend une distribution HTA/BT performante, un tableau général basse tension (TGBT) intelligent, une gestion technique du bâtiment (GTB) et l'intégralité des courants faibles : câblage structuré, SSI, contrôle d'accès et vidéosurveillance.\n\nLe projet intègre des équipements d'efficacité énergétique permettant une exploitation optimale et maîtrisée des installations sur l'ensemble du parc.",
    image: '/images/edge%20aubagne/5234-edge-park-03.jpg',
    gallery: [
      '/images/edge%20aubagne/Visu-Napollon.png',
      '/images/edge%20aubagne/6621-img-20230222-wa0006.jpg',
      '/images/edge%20aubagne/siege-social-alinea.jpg',
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
    description: "Installations électriques CFO/CFA de la résidence Cor Natura à Antibes : distribution BT des logements et parties communes, éclairage architectural, prééquipement IRVE et contrôle d'accès.",
    longDescription: "Réalisation des installations électriques CFO/CFA de la résidence Cor Natura à Antibes. Ce programme résidentiel comprend la distribution basse tension des logements et des parties communes, l'éclairage architectural des espaces partagés, le prééquipement pour bornes de recharge IRVE et les systèmes de contrôle d'accès et de visiophonie.\n\nCe projet allie exigences de confort, performance énergétique et anticipation des usages futurs, dans le respect des normes NF C 15-100 et des référentiels environnementaux du programme de construction.",
    image: '/images/cor%20natura/Oxygen-courtin-promotion-2-052023.jpg',
    gallery: [
      '/images/cor%20natura/cor-natura-exterieur_7.jpg',
      '/images/cor%20natura/cor-natura-sophia-antipolis.jpg',
      '/images/cor%20natura/images.jpg',
    ],
    tags: ['CFO/CFA', 'Résidentiel', 'IRVE', 'Visiophonie'],
  },
  {
    id: 'me-2',
    title: 'Auchan Aubagne',
    location: 'Aubagne',
    serviceSlug: 'mobilite-electrique',
    serviceLabel: 'Mobilité Électrique',
    year: 2025,
    description: "Déploiement d'une infrastructure de recharge pour véhicules électriques sur le parking de l'hypermarché Auchan d'Aubagne : installation des bornes IRVE, raccordement BT et mise en service.",
    longDescription: "Réalisation du déploiement IRVE sur le parking de l'hypermarché Auchan d'Aubagne. Les prestations comprennent la fourniture et la pose des bornes de recharge, le raccordement au réseau basse tension, le tirage de câbles et la mise en service des équipements.\n\nCe projet s'inscrit dans le cadre des obligations réglementaires imposées aux grandes surfaces en matière d'électromobilité. La coordination avec les équipes du site a permis de mener les travaux sans interruption de l'activité commerciale.",
    image: '/images/auchan/WhatsApp%20Image%202026-05-30%20at%2019.19.18.jpeg',
    gallery: [
      '/images/auchan/WhatsApp%20Image%202026-05-30%20at%2019.19.18111.jpeg',
      '/images/auchan/WhatsApp%20Image%202026-05-30%20at%2019.19.50.jpeg',
      '/images/auchan/WhatsApp%20Image%202026-05-30%20at%2019.19.50%20111.jpeg',
    ],
    tags: ['IRVE', 'Borne de recharge', 'Grande Distribution', 'Parking'],
  },
  {
    id: 'me-3',
    title: 'Circet',
    location: 'Marseille',
    serviceSlug: 'mobilite-electrique',
    serviceLabel: 'Mobilité Électrique',
    year: 2025,
    description: "Installation d'infrastructures de recharge pour véhicules électriques réalisée pour le compte de Circet : pose des bornes IRVE, raccordement et mise en service.",
    longDescription: "Réalisation des travaux d'infrastructure de recharge pour véhicules électriques (IRVE) dans le cadre d'un chantier mené pour Circet. Les prestations couvrent la pose et le raccordement des bornes de recharge, le tirage de câbles, ainsi que la mise en service et le paramétrage des équipements.\n\nCette collaboration avec Circet, acteur reconnu dans le déploiement d'infrastructures réseau, confirme notre positionnement sur les marchés du déploiement IRVE à grande échelle, avec une capacité d'intervention rapide et conforme aux exigences normatives en vigueur.",
    image: '/images/circet/WhatsApp%20Image%202026-05-30%20at%2019.29.31.jpeg',
    gallery: [
      '/images/circet/WhatsApp%20Image%202026-05-30%20at%2019.29.312222.jpeg',
      '/images/circet/WhatsApp%20Image%202026-05-30%20at%2019.29.31x.jpeg',
      '/images/circet/WhatsApp%20Image%202026-05-30%20at%2019.29.321111.jpeg',
    ],
    tags: ['IRVE', 'Borne de recharge', 'Déploiement', 'Infrastructure'],
  },
  {
    id: 'me-4',
    title: 'RTE Marseille 13009',
    location: 'Marseille',
    serviceSlug: 'mobilite-electrique',
    serviceLabel: 'Mobilité Électrique',
    year: 2025,
    description: "Équipement IRVE d'un site RTE à Marseille (13009) : installation de bornes de recharge pour flotte de véhicules électriques, raccordement BT et mise en service.",
    longDescription: "Réalisation de l'infrastructure de recharge pour véhicules électriques (IRVE) sur un site du Réseau de Transport d'Électricité (RTE) à Marseille dans le 13e arrondissement. Les travaux comprennent la fourniture et la pose des bornes de recharge dédiées à la flotte de véhicules du site, le raccordement basse tension et la mise en service des équipements.\n\nCe projet, mené dans le respect des exigences techniques et de sécurité propres aux sites RTE, illustre notre capacité à intervenir sur des infrastructures exploitées par des gestionnaires de réseau d'énergie.",
    image: '/images/rte%2013009/WhatsApp%20Image%202026-05-29%20at%2016.31.51.jpeg',
    gallery: [
      '/images/rte%2013009/WhatsApp%20Image%202026-05-29%20at%20111111.jpeg',
      '/images/rte%2013009/WhatsApp%20Image%202026-05-29%20at%2016.31.511.jpeg',
      '/images/rte%2013009/WhatsApp%20Image%202026-05-29%20at%2016.31.5112.jpeg',
    ],
    tags: ['IRVE', 'Borne de recharge', 'Flotte', 'Infrastructure'],
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
  'vrd': 'VRD',
}
