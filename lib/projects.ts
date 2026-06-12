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

  // ────────────────────────────────────────────────────────────
  // COURANTS FORTS & FAIBLES
  // ────────────────────────────────────────────────────────────
  {
    id: 'cff-1',
    title: "ORECA",
    location: 'Signes',
    serviceSlug: 'courants-forts-faibles',
    serviceLabel: 'Courants Forts & Faibles',
    year: 2024,
    description: "Installation électrique complète du pôle technique Oreca : réseaux HTA/BT, alimentation des ateliers de fabrication et systèmes de sûreté.",
    longDescription: "Réalisation de l'ensemble des installations électriques CFO/CFA du pôle technique Oreca à Signes. Les travaux ont porté sur la distribution haute et basse tension, le câblage des ateliers de fabrication et d'assemblage, ainsi que le déploiement des systèmes de sécurité incendie (SSI), de vidéosurveillance et de contrôle d'accès.\n\nCe chantier exigeant en milieu industriel a nécessité une coordination rigoureuse avec les équipes techniques d'Oreca, afin d'assurer la continuité des activités du site tout au long des travaux.",
    image: '/images/oreca/2.jpg',
    gallery: [
      '/images/oreca/2.jpg',
      '/images/oreca/1.jpeg',
      '/images/oreca/3.jpg',
      '/images/oreca/4.jpeg',
      
    ],
    tags: ['CFO/CFA', 'HTA/BT', 'SSI', 'Industrie'],
  },
  {
    id: 'cff-2',
    title: 'Cité Scolaire Internationale Jacques Chirac',
    location: 'Marseille',
    serviceSlug: 'courants-forts-faibles',
    serviceLabel: 'Courants Forts & Faibles',
    year: 2024,
    description: "Installations électriques CFO/CFA de la Cité Scolaire Internationale Jacques Chirac de Marseille : distribution BT, éclairage des bâtiments, SSI et réseaux courants faibles.",
    longDescription: "Réalisation des travaux d'électricité courants forts et courants faibles pour la Cité Scolaire Internationale Jacques Chirac de Marseille. Ce chantier d'établissement scolaire comprend la distribution basse tension, l'éclairage intérieur et extérieur des bâtiments, le déploiement d'un système de sécurité incendie (SSI), ainsi que les réseaux courants faibles : câblage structuré, contrôle d'accès et interphonie.\n\nLes travaux, réalisés sur la période 2024-2025, ont été conduits en coordination étroite avec la maîtrise d'ouvrage afin d'assurer la continuité des activités pédagogiques pendant toute la durée du chantier.",
    image: '/images/csimarseille/6.jpeg',
    gallery: [
      '/images/csimarseille/5.jpeg',
      '/images/csimarseille/2.jpg',
      '/images/csimarseille/3.png',
      '/images/csimarseille/3.jpg',
      '/images/csimarseille/6.jpeg',
      '/images/csimarseille/7.jpeg',

      
      
    ],
    tags: ['CFO/CFA', 'SSI', 'École'],
  },
  {
    id: 'cff-3',
    title: 'Groupe Scolaire Marceau',
    location: 'Marseille',
    serviceSlug: 'courants-forts-faibles',
    serviceLabel: 'Courants Forts & Faibles',
    year: 2024,
    description: "Réalisation des installations électriques Courants Forts et Courants Faibles (CFO/CFA) du nouveau Groupe Scolaire Marceau à Marseille.",
    longDescription: "Réalisation des installations électriques Courants Forts et Courants Faibles (CFO/CFA) du nouveau Groupe Scolaire Marceau à Marseille. Les prestations comprennent la distribution électrique, l’éclairage, le système de sécurité incendie ainsi que les infrastructures réseaux et de communication de l’établissement.",
    image:   '/images/gsmarceau/2.webp',
    gallery: [
      '/images/gsmarceau/1.webp',
      '/images/gsmarceau/3.jpg',
      '/images/gsmarceau/2.webp',
      '/images/gsmarceau/5.jpg',


     
    ],
    tags: ['CFO/CFA', 'École'],
  },
  {
    id: 'cff-4',
    title: 'Edge Park',
    location: 'Aubagne',
    serviceSlug: 'courants-forts-faibles',
    serviceLabel: 'Courants Forts & Faibles',
    year: 2023,
    description: "Installations électriques CFO/CFA du parc tertiaire Edge à Aubagne : distribution HTA/BT, TGBT intelligent, GTB et intégralité des courants faibles.",
    longDescription: "Réalisation de l'ensemble des prestations électriques CFO/CFA pour le parc tertiaire Edge à Aubagne. Ce programme de bâtiments de bureaux comprend une distribution HTA/BT performante, un tableau général basse tension (TGBT) intelligent, une gestion technique du bâtiment (GTB) et l'intégralité des courants faibles : câblage structuré, SSI, contrôle d'accès et vidéosurveillance.\n\nLe projet intègre des équipements d'efficacité énergétique permettant une exploitation optimale et maîtrisée des installations sur l'ensemble du parc.",
    image: '/images/edge%20aubagne/5234-edge-park-03.jpg',
    gallery: [
      '/images/edge%20aubagne/siege-social-alinea.jpg',
      '/images/edge%20aubagne/5234-edge-park-03.jpg',
      '/images/edge%20aubagne/Visu-Napollon.png',
      '/images/edge%20aubagne/6621-img-20230222-wa0006.jpg',
      
    ],
    tags: ['CFO/CFA', 'HTA/BT', 'GTB', 'Tertiaire'],
  },
  {
    id: 'cff-5',
    title: 'Cor Natura',
    location: 'Antibes',
    serviceSlug: 'courants-forts-faibles',
    serviceLabel: 'Courants Forts & Faibles',
    year: 2023,
    description: "Réalisation des installations électriques CFO/CFA comprenant la distribution basse tension, l’éclairage intérieur, les infrastructures réseaux informatiques, le contrôle d’accès et le pré-équipement pour bornes de recharge IRVE.",
    longDescription: "Réalisation des installations électriques CFO/CFA comprenant la distribution basse tension, l’éclairage intérieur, les infrastructures réseaux informatiques, le contrôle d’accès et le pré-équipement pour bornes de recharge IRVE. Ce projet tertiaire a été conçu pour offrir des espaces de travail performants, confortables et évolutifs, tout en respectant les normes et réglementations en vigueur.Ce projet allie exigences de confort, performance énergétique et anticipation des usages futurs, dans le respect des normes NF C 15-100 et des référentiels environnementaux du programme de construction.",
    image: '/images/cornatura/1.jpg',
    gallery: [
      '/images/cornatura/1.jpg',
      '/images/cornatura/2.jpg',
      '/images/cornatura/3.jpg',
      '/images/cornatura/4.jpg',
      
    ],
    tags: ['CFO/CFA', 'Tertiaire'],
  },
  {
    id: 'cff-6',
    title: "B&B Hotel Avignon 1",
    location: 'Avignon',
    serviceSlug: 'renovation-energetique',
    serviceLabel: 'Rénovation Énergétique',
    year: 2024,
    description: "Rénovation globale tous corps d’état du B&B Hotel Avignon 1.",
    longDescription: "Rénovation globale tous corps d’état du B&B Hotel Avignon 1. Les travaux ont consisté en la réhabilitation complète de l’établissement, comprenant les aménagements intérieurs et extérieurs, les travaux de menuiserie, les revêtements de sols et murs, la plomberie, le chauffage, la climatisation, l’électricité ainsi que la modernisation des espaces communs et des chambres.Cette opération a permis de remettre l’établissement aux standards actuels de confort, de sécurité et de performance énergétique. Le chantier a été mené en étroite coordination avec l’ensemble des intervenants afin de respecter le planning de réalisation et de garantir un niveau de qualité conforme aux exigences du groupe hôtelier.",
    image: '/images/b%26b%20avignon%201/WhatsApp%20Image%202026-06-01%20at%2021.07.27.jpeg',
    gallery: [
      '/images/b%26b%20avignon%201/WhatsApp%20Image%202026-06-01%20at%2021.07.27.jpeg',
      '/images/b%26b%20avignon%201/WhatsApp%20Image%202026-06-01%20at%2021.07.27%20(2).jpeg',
      '/images/b%26b%20avignon%201/WhatsApp%20Image%202026-06-01%20at%2021.07.28.jpeg',
      '/images/b%26b%20avignon%201/WhatsApp%20Image%202026-06-01%20at%2021.07.28%20(1).jpeg',
    ],
    tags: ['Hôtellerie', 'Tertiaire'],
  },
  {
    id: 'cff-7',
    title: "B&B Hotel Avignon 2",
    location: 'Avignon',
    serviceSlug: 'renovation-energetique',
    serviceLabel: 'Rénovation Énergétique',
    year: 2024,
    description: "Rénovation globale tous corps d’état du B&B Hotel Avignon 2.",
    longDescription: "Rénovation globale tous corps d’état du B&B Hotel Avignon 2. Les travaux ont porté sur la réhabilitation complète de l’établissement, incluant les aménagements intérieurs et extérieurs, les menuiseries, les revêtements de sols et murs, la plomberie, la climatisation, l’électricité, ainsi que la modernisation des espaces communs et des chambres. Cette opération a permis d'améliorer le confort des usagers, la performance énergétique du bâtiment et la qualité des prestations offertes par l'établissement. Réalisé dans la continuité du premier hôtel B&B d’Avignon, ce chantier a bénéficié d’une organisation optimisée et d’une coordination renforcée entre les différents corps d’état, garantissant le respect des délais et des exigences de qualité du projet.",
    image: '/images/b%26b%20avignon%202/WhatsApp%20Image%202026-06-01%20at%2021.06.20.jpeg',
    gallery: [
      '/images/b%26b%20avignon%202/WhatsApp%20Image%202026-06-01%20at%2021.06.20.jpeg',
      '/images/b%26b%20avignon%202/WhatsApp%20Image%202026-06-01%20at%2021.06.20%20(1).jpeg',
      '/images/b%26b%20avignon%202/WhatsApp%20Image%202026-06-01%20at%2021.06.21.jpeg',
      '/images/b%26b%20avignon%202/WhatsApp%20Image%202026-06-01%20at%2021.06.21%20(2).jpeg',
    ],
    tags: ['Hôtellerie',],
  },
  {
    id: 'cff-8',
    title: "Chicken Street",
    location: 'Le Pontet',
    serviceSlug: 'renovation-energetique',
    serviceLabel: 'Rénovation Énergétique',
    year: 2024,
    description: "Rénovation globale tous corps d’état du restaurant Chicken Street situé au Pontet, dans la région d’Avignon.",
    longDescription: "Rénovation globale tous corps d’état du restaurant Chicken Street situé au Pontet, dans la région d’Avignon. Cette opération comprend la réhabilitation complète des espaces intérieurs et extérieurs, avec des interventions sur les lots de gros œuvre, second œuvre, électricité, plomberie, revêtements, peinture, climatisation et aménagements intérieurs, afin de moderniser l’établissement et d’améliorer les conditions d’accueil.",
    image: '/images/chicken/1.webp',
    gallery: [
      '/images/chicken/1.webp',
      '/images/chicken/2.jpg',
      '/images/chicken/3.jpg',
      '/images/chicken/4.jpeg',
      '/images/chicken/5.jpeg',
      '/images/chicken/6.jpeg',
      '/images/chicken/7.jpeg',
      

      
    ],
    tags: [ 'Rénovation', 'Tertiaire'],
  },

  // ────────────────────────────────────────────────────────────
  // MOBILITÉ ÉLECTRIQUE
  // ────────────────────────────────────────────────────────────
  {
    id: 'me-2',
    title: "Sartorius Stedim",
    location: 'Aubagne',
    serviceSlug: 'mobilite-electrique',
    serviceLabel: 'Mobilité Électrique',
    year: 2023,
    description: "Réalisation du déploiement d’infrastructures de recharge pour véhicules électriques (IRVE) sur le site de Sartorius à Aubagne.",
    longDescription: "Réalisation du déploiement d’infrastructures de recharge pour véhicules électriques (IRVE) sur le site de Sartorius à Aubagne. Les travaux comprennent la fourniture et l’installation des bornes de recharge, les raccordements électriques, le tirage des câbles et la mise en service des équipements. Ce projet accompagne la transition énergétique du site en favorisant la mobilité électrique des collaborateurs et visiteurs, tout en garantissant une intégration optimale aux infrastructures existantes.",
    image: '/images/santorius/1.jpeg',
    gallery: [
      '/images/santorius/1.jpeg',
      '/images/santorius/2.jpeg',
      '/images/santorius/3.jpeg',
      '/images/santorius/4.jpeg',
      '/images/santorius/5.jpeg',
      '/images/santorius/6.jpeg',
      '/images/santorius/7.jpeg',
      
    ],
    tags: ['IRVE', 'Borne de recharge', 'Grande Distribution', 'Parking'],
  },
  {
    id: 'me-3',
    title: 'Circet Le Tholonet',
    location: 'Le Tholonet',
    serviceSlug: 'mobilite-electrique',
    serviceLabel: 'Mobilité Électrique',
    year: 2023,
    description: "Installation d'infrastructures de recharge pour véhicules électriques réalisée pour le compte de Circet : pose des bornes IRVE, raccordement et mise en service.",
    longDescription: "Réalisation des travaux d'infrastructure de recharge pour véhicules électriques (IRVE) dans le cadre d'un chantier mené pour Circet au Tholonet. Les prestations couvrent la pose et le raccordement des bornes de recharge, le tirage de câbles, ainsi que la mise en service et le paramétrage des équipements.\n\nCette collaboration avec Circet, acteur reconnu dans le déploiement d'infrastructures réseau, confirme notre positionnement sur les marchés du déploiement IRVE à grande échelle, avec une capacité d'intervention rapide et conforme aux exigences normatives en vigueur.",
    image: '/images/circet/WhatsApp%20Image%202026-05-30%20at%2019.29.31.jpeg',
    gallery: [
      '/images/circet/WhatsApp%20Image%202026-05-30%20at%2019.29.31.jpeg',
      '/images/circet/WhatsApp%20Image%202026-05-30%20at%2019.29.312222.jpeg',
      '/images/circet/WhatsApp%20Image%202026-05-30%20at%2019.29.31x.jpeg',
      '/images/circet/WhatsApp%20Image%202026-05-30%20at%2019.29.321111.jpeg',
    ],
    tags: ['IRVE', 'Borne de recharge', 'Déploiement', 'Infrastructure'],
  },
  {
    id: 'me-4',
    title: 'RTE Marseille',
    location: 'Marseille',
    serviceSlug: 'mobilite-electrique',
    serviceLabel: 'Mobilité Électrique',
    year: 2025,
    description: "Équipement IRVE d'un site RTE à Marseille (13009) : installation de bornes de recharge pour flotte de véhicules électriques, raccordement BT et mise en service.",
    longDescription: "Réalisation de l'infrastructure de recharge pour véhicules électriques (IRVE) sur un site du Réseau de Transport d'Électricité (RTE) à Marseille dans le 9e arrondissement. Les travaux comprennent la fourniture et la pose des bornes de recharge dédiées à la flotte de véhicules du site, le raccordement basse tension et la mise en service des équipements.\n\nCe projet, mené dans le respect des exigences techniques et de sécurité propres aux sites RTE, illustre notre capacité à intervenir sur des infrastructures exploitées par des gestionnaires de réseau d'énergie.",
    image: '/images/rte%2013009/WhatsApp%20Image%202026-05-29%20at%2016.31.51.jpeg',
    gallery: [
      '/images/rte%2013009/WhatsApp%20Image%202026-05-29%20at%2016.31.51.jpeg',
      '/images/rte%2013009/WhatsApp%20Image%202026-05-29%20at%20111111.jpeg',
      '/images/rte%2013009/WhatsApp%20Image%202026-05-29%20at%2016.31.511.jpeg',
      '/images/rte%2013009/WhatsApp%20Image%202026-05-29%20at%2016.31.5112.jpeg',
    ],
    tags: ['IRVE', 'Borne de recharge', 'Infrastructure'],
  },
  {
    id: 'me-5',
    title: "Hôtel Saint Maximin",
    location: 'Saint Maximin',
    serviceSlug: 'mobilite-electrique',
    serviceLabel: 'Mobilité Électrique',
    year: 2024,
    description: "Installation de bornes de recharge pour véhicules électriques à l'Hôtel de Saint Maximin : infrastructure IRVE pour la clientèle, raccordement BT et mise en service.",
    longDescription: "Réalisation de l'infrastructure de recharge pour véhicules électriques (IRVE) à l'Hôtel de Saint Maximin. Les travaux comprennent l'installation des bornes de recharge dédiées à la clientèle de l'établissement, le raccordement au réseau basse tension et la mise en service des équipements.\n\nCe projet s'inscrit dans la démarche de développement durable de l'hôtel, offrant à ses clients un service de recharge pratique et fiable, en conformité avec les normes IRVE en vigueur.",
    // TODO: ajouter les photos du projet Hôtel Sainte-Maxime
    image: '/images/saintmaximin/2.jpeg',
    gallery: [
      '/images/saintmaximin/1.jpeg',
      '/images/saintmaximin/2.jpeg',
      '/images/saintmaximin/3.jpeg',
      '/images/saintmaximin/4.jpeg',
    ],
    tags: ['IRVE', 'Hôtellerie', 'Borne de recharge'],
  },
  {
    id: 'me-6',
    title: 'Maison Gabriel Meffre',
    location: 'Gigondas',
    serviceSlug: 'mobilite-electrique',
    serviceLabel: 'Mobilité Électrique',
    year: 2024,
    description: "Déploiement d'une infrastructure de recharge pour véhicules électriques au domaine Gabriel Meffre à Gigondas : installation de bornes IRVE, raccordement et mise en service.",
    longDescription: "Réalisation de l'infrastructure IRVE au domaine viticole Gabriel Meffre à Gigondas (84190). Les travaux comprennent la fourniture et l'installation des bornes de recharge pour véhicules électriques, le raccordement au réseau basse tension et la mise en service des équipements.\n\nCe projet illustre notre capacité à intervenir dans des environnements variés, en apportant des solutions de recharge adaptées aux besoins spécifiques d'un domaine viticole de renom, accueillant visiteurs et professionnels.",
   
    image: '/images/meffre/1.jpeg',
    gallery: [
      '/images/meffre/1.jpeg',
      '/images/meffre/2.jpeg',
      '/images/meffre/4.jpeg',
      '/images/meffre/5.jpeg',
      '/images/meffre/6.jpeg',
    ],
    tags: ['IRVE', 'Domaine viticole', 'Borne de recharge'],
  },
  {
    id: 'me-7',
    title: 'Colisée Trets',
    location: 'Trets',
    serviceSlug: 'mobilite-electrique',
    serviceLabel: 'Mobilité Électrique',
    year: 2023,
    description: "Équipement IRVE du site Colisée à Trets : installation de bornes de recharge pour véhicules électriques, raccordement au réseau basse tension et mise en service.",
    longDescription: "Réalisation des travaux d'infrastructure de recharge pour véhicules électriques (IRVE) sur le site Colisée à Trets. Les prestations couvrent la fourniture et la pose des bornes de recharge, le raccordement électrique et la mise en service des équipements.\n\nCe projet confirme notre savoir-faire dans le déploiement d'infrastructures IRVE pour des sites variés, avec une installation conforme aux exigences réglementaires et normatives en vigueur.",

    image: '/images/coliseetrets/1.jpeg',
    gallery: [
      '/images/coliseetrets/1.jpeg',
      '/images/coliseetrets/2.jpeg',
      '/images/coliseetrets/3.jpeg',
      '/images/coliseetrets/5.jpeg',
    ],
    tags: ['IRVE', 'Borne de recharge', 'Infrastructure'],

    
  },

  // ────────────────────────────────────────────────────────────
  // ÉNERGIES RENOUVELABLES
  // ────────────────────────────────────────────────────────────

  {
    id: 'er-2',
    title: "Centrale photovoltaïque 1,2 MW",
    location: 'Cahors',
    serviceSlug: 'energies-renouvelables',
    serviceLabel: 'Énergies Renouvelables',
    year: 2026,
    description: "Centrale photovoltaïque de 1,2 MW en toiture bac acier près de Cahors : production d'énergie renouvelable locale grâce à une intégration optimisée sur la structure existante.",
    longDescription: "Installation d'une centrale photovoltaïque de 1,2 MW en toiture bac acier à proximité de Cahors. Ce projet permet de produire une énergie renouvelable locale tout en s'intégrant efficacement à la structure existante, participant ainsi à la transition énergétique du site.",
    image: '/images/projet2/1.jpg',
    gallery: [
      '/images/projet2/1.jpg',
      '/images/projet2/2.jpg',
      '/images/projet2/3.jpg',
      '/images/projet2/6.jpg',
      

    ],
    tags: ['Photovoltaïque', 'Énergie solaire', 'Toiture'],
  },
  
  {
    id: 'er-4',
    title: "Intermarché Orgon – Ombrière Photovoltaïque",
    location: 'Orgon',
    serviceSlug: 'energies-renouvelables',
    serviceLabel: 'Énergies Renouvelables',
    year: 2026,
    description: "Ombrière photovoltaïque sur le parking de l'Intermarché Super d'Orgon : production d'énergie renouvelable locale et valorisation des surfaces de stationnement.",
    longDescription: "Réalisation d'une ombrière photovoltaïque sur le parking de l'Intermarché Super d'Orgon (13660). Ce projet permet de valoriser l'espace de stationnement en le transformant en zone de production d'énergie solaire, tout en offrant aux clients une protection contre les intempéries.\n\nL'installation s'inscrit dans la démarche de transition énergétique de l'enseigne, contribuant à la réduction de l'empreinte carbone du site et à la production d'électricité renouvelable en autoconsommation.",
    image: '/images/projet1/1.jpg',
    gallery: [
        '/images/projet1/1.jpg',
        '/images/projet1/2.jpg',
        '/images/projet1/3.jpg',
        '/images/projet1/4.jpg',
        '/images/projet1/5.jpg',
      

    ],
    tags: ['Photovoltaïque', 'Ombrières', 'Grande Distribution',],
  },

  {
    id: 'er-6',
    title: "SCI Idenium – Centrale Photovoltaïque 250 kWc",
    location: 'France',
    serviceSlug: 'energies-renouvelables',
    serviceLabel: 'Énergies Renouvelables',
    year: 2025,
    description: "Centrale photovoltaïque de 250 kWc pour la SCI Idenium : production d'énergie renouvelable en autoconsommation et valorisation du patrimoine immobilier.",
    longDescription: "Réalisation d'une centrale photovoltaïque de 250 kWc pour la SCI Idenium. Ce projet de moyenne puissance comprend l'étude de faisabilité, le dimensionnement des équipements, la fourniture et la pose des panneaux photovoltaïques, ainsi que le raccordement au réseau et la mise en service.\n\nL'installation est conçue pour maximiser l'autoconsommation du site et valoriser le patrimoine immobilier, tout en bénéficiant des dispositifs de soutien à la production d'énergie renouvelable.",
    // TODO: ajouter les photos du projet SCI Idenium 250 kWc
    image: '/images/tony/2.jpeg',
    gallery: [
      '/images/tony/2.jpeg',
      '/images/tony/3.jpeg',
      '/images/tony/10.jpeg',
      '/images/tony/11.jpeg',
      
    ],
    tags: ['Photovoltaïque', '250 kWc', 'Tertiaire', ],
  },

  {
    id: 'er-8',
    title: "Exploitation Agricole – Centrale Photovoltaïque 350 kWc",
    location: 'Clermont-Ferrand',
    serviceSlug: 'energies-renouvelables',
    serviceLabel: 'Énergies Renouvelables',
    year: 2025,
    description: "Centrale photovoltaïque de 350 kWc sur une exploitation agricole à Clermont-Ferrand : production solaire intégrée à l'activité agricole avec supervision et suivi de production.",
    longDescription: "Réalisation d'une centrale photovoltaïque de 350 kWc sur une exploitation agricole à Clermont-Ferrand. Ce projet comprend l'ensemble des prestations, de l'étude de faisabilité au génie civil, en passant par la fourniture et la pose des modules photovoltaïques et des équipements électriques associés.\nL'installation est couplée à un système de supervision permettant un suivi en temps réel de la production, une détection rapide des anomalies et une optimisation continue des performances.",
    image: '/images/cler/1.jpeg',
    gallery: [ 
      '/images/cler/1.jpeg',
      '/images/cler/2.jpeg',
      '/images/cler/6.jpeg',
      '/images/cler/8.jpeg',
      '/images/cler/3.jpeg',
 

    ],
    tags: ['Photovoltaïque', '350 kWc', 'Agricole',],
  },
  {
    id: 'er-9',
    title: "Université de Nice",
    location: 'Nice',
    serviceSlug: 'energies-renouvelables',
    serviceLabel: 'Énergies Renouvelables',
    year: 2025,
    description: "Centrale photovoltaïque de 250 kWc sur le site Agile Université à Nice : production d'énergie renouvelable pour un campus, réduisant les consommations et les émissions de CO₂.",
    longDescription: "Installation d'une centrale photovoltaïque de 250 kWc sur le site Agile Université à Nice. Ce projet académique comprend la conception, la fourniture, la pose et la mise en service d'une installation solaire destinée à couvrir une partie des besoins énergétiques du campus.\n\nL'installation s'inscrit dans une démarche de responsabilité environnementale, permettant de réduire les émissions de CO₂ et la facture énergétique du site, tout en sensibilisant la communauté universitaire aux enjeux de la transition énergétique.",
    image: '/images/agile/5.jpeg',
    gallery: [
      '/images/agile/5.jpeg',
      '/images/agile/2.jpeg',
      '/images/agile/1.jpeg',
      '/images/agile/3.jpeg',
      '/images/agile/4.jpeg',
      '/images/agile/6.jpeg',

    ],
    tags: ['Photovoltaïque', '250 kWc', 'Tertiaire'],
  },

]

export function getProjectsByService(serviceSlug: string): Project[] {
  return projects.filter(p => p.serviceSlug === serviceSlug)
}

export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id)
}

export const serviceLabels: Record<string, string> = {
  'courants-forts-faibles': 'service.courants-forts-faibles.title',
  'energies-renouvelables': 'service.energies-renouvelables.title',
  'mobilite-electrique': 'service.mobilite-electrique.title',
  'renovation-energetique': 'service.renovation-energetique.title',
  'chauffage-climatisation': 'service.chauffage-climatisation.title',
  'bureau-etudes': 'service.bureau-etudes.title',
  'smart-building': 'service.smart-building.title',
  'vrd': 'service.vrd.title',
}
