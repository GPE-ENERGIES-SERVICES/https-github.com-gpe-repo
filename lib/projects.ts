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
    title: "ORECA – Pôle Technique & Construction",
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
    title: 'Cité Scolaire Internationale Jacques Chirac',
    location: 'Marseille',
    serviceSlug: 'courants-forts-faibles',
    serviceLabel: 'Courants Forts & Faibles',
    year: 2025,
    description: "Installations électriques CFO/CFA de la Cité Scolaire Internationale Jacques Chirac de Marseille : distribution BT, éclairage des bâtiments, SSI et réseaux courants faibles.",
    longDescription: "Réalisation des travaux d'électricité courants forts et courants faibles pour la Cité Scolaire Internationale Jacques Chirac de Marseille. Ce chantier d'établissement scolaire comprend la distribution basse tension, l'éclairage intérieur et extérieur des bâtiments, le déploiement d'un système de sécurité incendie (SSI), ainsi que les réseaux courants faibles : câblage structuré, contrôle d'accès et interphonie.\n\nLes travaux, réalisés sur la période 2024-2025, ont été conduits en coordination étroite avec la maîtrise d'ouvrage afin d'assurer la continuité des activités pédagogiques pendant toute la durée du chantier.",
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
    year: 2024,
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
    year: 2023,
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
    year: 2023,
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
    id: 'cff-6',
    title: "B&B Hotel Avignon 1",
    location: 'Avignon',
    serviceSlug: 'courants-forts-faibles',
    serviceLabel: 'Courants Forts & Faibles',
    year: 2024,
    description: "Installations électriques CFO/CFA du B&B Hotel Avignon 1 : distribution basse tension, éclairage LED des chambres et espaces communs, SSI et réseaux courants faibles.",
    longDescription: "Réalisation des installations électriques courants forts et courants faibles du B&B Hotel Avignon 1. Les travaux comprennent la distribution basse tension des chambres et des espaces communs, l'éclairage LED haute efficacité, le déploiement d'un système de sécurité incendie (SSI) et les réseaux courants faibles : câblage structuré, contrôle d'accès et télévision.\n\nCe chantier hôtelier a été conduit en coordination étroite avec les équipes de construction afin de respecter les délais d'ouverture de l'établissement et de garantir la conformité de l'ensemble des installations.",
    // TODO: ajouter les photos du projet B&B Hotel Avignon 1
    image: '/images/services/cff.jpeg',
    gallery: [],
    tags: ['CFO/CFA', 'Hôtellerie', 'SSI', 'LED'],
  },
  {
    id: 'cff-7',
    title: "B&B Hotel Avignon 2",
    location: 'Avignon',
    serviceSlug: 'courants-forts-faibles',
    serviceLabel: 'Courants Forts & Faibles',
    year: 2024,
    description: "Installations électriques CFO/CFA du B&B Hotel Avignon 2 : distribution BT, éclairage LED, système de sécurité incendie et réseaux courants faibles.",
    longDescription: "Réalisation des installations électriques CFO/CFA du B&B Hotel Avignon 2. Les travaux couvrent la distribution basse tension des chambres et parties communes, l'éclairage LED haute performance, le système de sécurité incendie (SSI) ainsi que l'ensemble des réseaux courants faibles : câblage structuré, contrôle d'accès et systèmes audiovisuels.\n\nCe second établissement B&B à Avignon a été réalisé en continuité du premier chantier, permettant une synergie technique et une optimisation des interventions sur les deux sites.",
    // TODO: ajouter les photos du projet B&B Hotel Avignon 2
    image: '/images/services/cff.jpeg',
    gallery: [],
    tags: ['CFO/CFA', 'Hôtellerie', 'SSI', 'LED'],
  },
  {
    id: 'cff-8',
    title: "Chicken Street – Rénovation Énergétique",
    location: 'Le Pontet',
    serviceSlug: 'courants-forts-faibles',
    serviceLabel: 'Courants Forts & Faibles',
    year: 2024,
    description: "Rénovation électrique et mise aux normes du restaurant Chicken Street au Pontet : remplacement des équipements, éclairage LED haute efficacité et mise en conformité des installations.",
    longDescription: "Rénovation des installations électriques du restaurant Chicken Street situé au Pontet, dans la région d'Avignon. Les travaux comprennent le remplacement complet des équipements électriques, la mise en place d'un éclairage LED haute efficacité adapté à l'exploitation commerciale, ainsi que la remise en conformité de l'ensemble des installations aux normes en vigueur.\n\nCe chantier de rénovation a été réalisé en site occupé, en étroite coordination avec l'exploitant afin de minimiser l'impact sur l'activité commerciale.",
    image: '/images/cheicken%20street%20avignon/2024-06-13.webp',
    gallery: [
      '/images/cheicken%20street%20avignon/558543_1fea1fca00.jpg',
      '/images/cheicken%20street%20avignon/bcfcebjdgjdiejcchgbg.jpg',
    ],
    tags: ['CFO/CFA', 'Rénovation', 'LED', 'Commerce'],
  },

  // ────────────────────────────────────────────────────────────
  // MOBILITÉ ÉLECTRIQUE
  // ────────────────────────────────────────────────────────────
  {
    id: 'me-2',
    title: "Auchan Aubagne",
    location: 'Aubagne',
    serviceSlug: 'mobilite-electrique',
    serviceLabel: 'Mobilité Électrique',
    year: 2023,
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
    location: 'Le Tholonet',
    serviceSlug: 'mobilite-electrique',
    serviceLabel: 'Mobilité Électrique',
    year: 2023,
    description: "Installation d'infrastructures de recharge pour véhicules électriques réalisée pour le compte de Circet : pose des bornes IRVE, raccordement et mise en service.",
    longDescription: "Réalisation des travaux d'infrastructure de recharge pour véhicules électriques (IRVE) dans le cadre d'un chantier mené pour Circet au Tholonet. Les prestations couvrent la pose et le raccordement des bornes de recharge, le tirage de câbles, ainsi que la mise en service et le paramétrage des équipements.\n\nCette collaboration avec Circet, acteur reconnu dans le déploiement d'infrastructures réseau, confirme notre positionnement sur les marchés du déploiement IRVE à grande échelle, avec une capacité d'intervention rapide et conforme aux exigences normatives en vigueur.",
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
  {
    id: 'me-5',
    title: "Hôtel Sainte-Maxime",
    location: 'Sainte-Maxime',
    serviceSlug: 'mobilite-electrique',
    serviceLabel: 'Mobilité Électrique',
    year: 2024,
    description: "Installation de bornes de recharge pour véhicules électriques à l'Hôtel de Sainte-Maxime : infrastructure IRVE pour la clientèle, raccordement BT et mise en service.",
    longDescription: "Réalisation de l'infrastructure de recharge pour véhicules électriques (IRVE) à l'Hôtel de Sainte-Maxime. Les travaux comprennent l'installation des bornes de recharge dédiées à la clientèle de l'établissement, le raccordement au réseau basse tension et la mise en service des équipements.\n\nCe projet s'inscrit dans la démarche de développement durable de l'hôtel, offrant à ses clients un service de recharge pratique et fiable, en conformité avec les normes IRVE en vigueur.",
    // TODO: ajouter les photos du projet Hôtel Sainte-Maxime
    image: '/images/services/mobilite.jpeg',
    gallery: [],
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
    // TODO: ajouter les photos du projet Maison Gabriel Meffre - Gigondas
    image: '/images/services/mobilite.jpeg',
    gallery: [],
    tags: ['IRVE', 'Domaine viticole', 'Borne de recharge'],
  },
  {
    id: 'me-7',
    title: 'Colisée',
    location: 'Trets',
    serviceSlug: 'mobilite-electrique',
    serviceLabel: 'Mobilité Électrique',
    year: 2023,
    description: "Équipement IRVE du site Colisée à Trets : installation de bornes de recharge pour véhicules électriques, raccordement au réseau basse tension et mise en service.",
    longDescription: "Réalisation des travaux d'infrastructure de recharge pour véhicules électriques (IRVE) sur le site Colisée à Trets. Les prestations couvrent la fourniture et la pose des bornes de recharge, le raccordement électrique et la mise en service des équipements.\n\nCe projet confirme notre savoir-faire dans le déploiement d'infrastructures IRVE pour des sites variés, avec une installation conforme aux exigences réglementaires et normatives en vigueur.",
    // TODO: ajouter les photos du projet Colisée - Trets
    image: '/images/services/mobilite.jpeg',
    gallery: [],
    tags: ['IRVE', 'Borne de recharge', 'Infrastructure'],
  },

  // ────────────────────────────────────────────────────────────
  // ÉNERGIES RENOUVELABLES
  // ────────────────────────────────────────────────────────────
  {
    id: 'er-1',
    title: "Ombrières photovoltaïques 300 kW",
    location: 'Marseille',
    serviceSlug: 'energies-renouvelables',
    serviceLabel: 'Énergies Renouvelables',
    year: 2026,
    description: "Centrale photovoltaïque de 300 kW en ombrières de parking pour une grande surface alimentaire : production d'énergie renouvelable locale et valorisation des espaces de stationnement.",
    longDescription: "Installation d'une centrale photovoltaïque de 300 kW en ombrières de parking au sein d'une grande surface alimentaire. Ce projet permet de valoriser les espaces de stationnement en les transformant en zones de production d'énergie renouvelable, tout en assurant une protection des véhicules et un meilleur confort pour les usagers. L'installation contribue à la production d'électricité locale et durable, participant ainsi activement à la transition énergétique du site.",
    image: '/images/projet1/1.jpg',
    gallery: [
      '/images/projet1/2.jpg',
      '/images/projet1/3.jpg',
      '/images/projet1/4.jpg',
      '/images/projet1/5.jpg',
      '/images/projet1/6.jpg',
    ],
    tags: ['Photovoltaïque', 'Ombrières', 'Énergie solaire'],
  },
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
      '/images/projet2/2.jpg',
      '/images/projet2/3.jpg',
      '/images/projet2/4.jpg',
      '/images/projet2/5.jpg',
      '/images/projet2/6.jpg',
    ],
    tags: ['Photovoltaïque', 'Énergie solaire', 'Toiture'],
  },
  {
    id: 'er-3',
    title: "Installation photovoltaïque 50 kWc",
    location: 'Toulon',
    serviceSlug: 'energies-renouvelables',
    serviceLabel: 'Énergies Renouvelables',
    year: 2025,
    description: "Installation d'une centrale photovoltaïque de 50 kWc en toiture à Toulon : production d'énergie solaire locale et durable adaptée aux besoins du site.",
    longDescription: "Réalisation d'une installation photovoltaïque de 50 kWc en toiture sur un bâtiment situé à Toulon. Ce projet illustre l'intégration de l'énergie solaire à différentes échelles, permettant de produire une électricité locale et renouvelable tout en participant à la transition énergétique.",
    image: '/images/projet4/1.jpg',
    gallery: [
      '/images/projet4/2.jpg',
      '/images/projet4/3.jpg',
      '/images/projet4/4.jpg',
      '/images/projet4/5.jpg',
    ],
    tags: ['Photovoltaïque', 'Énergie solaire', 'Toiture'],
  },
  {
    id: 'er-4',
    title: "Intermarché Super Orgon – Ombrière Photovoltaïque",
    location: 'Orgon',
    serviceSlug: 'energies-renouvelables',
    serviceLabel: 'Énergies Renouvelables',
    year: 2026,
    description: "Ombrière photovoltaïque sur le parking de l'Intermarché Super d'Orgon : production d'énergie renouvelable locale et valorisation des surfaces de stationnement.",
    longDescription: "Réalisation d'une ombrière photovoltaïque sur le parking de l'Intermarché Super d'Orgon (13660). Ce projet permet de valoriser l'espace de stationnement en le transformant en zone de production d'énergie solaire, tout en offrant aux clients une protection contre les intempéries.\n\nL'installation s'inscrit dans la démarche de transition énergétique de l'enseigne, contribuant à la réduction de l'empreinte carbone du site et à la production d'électricité renouvelable en autoconsommation.",
    image: '/images/projet3/1.jpg',
    gallery: [
      '/images/projet3/2.jpg',
      '/images/projet3/3.jpg',
      '/images/projet3/4.jpg',
      '/images/projet3/5.jpg',
      '/images/projet3/6.jpg',
    ],
    tags: ['Photovoltaïque', 'Ombrières', 'Grande Distribution', 'RGE'],
  },
  {
    id: 'er-5',
    title: "Exploitation Agricole GAEC de Tartayrou",
    location: 'Le Bastit',
    serviceSlug: 'energies-renouvelables',
    serviceLabel: 'Énergies Renouvelables',
    year: 2025,
    description: "Centrale photovoltaïque en toiture pour le GAEC de Tartayrou au Bastit : production d'énergie solaire adaptée au contexte agricole, avec autoconsommation et revente du surplus.",
    longDescription: "Réalisation d'une centrale photovoltaïque en toiture pour le Groupement Agricole d'Exploitation en Commun (GAEC) de Tartayrou situé au Bastit (46500). Ce projet agricole intègre la production d'énergie solaire à l'activité de l'exploitation, permettant de réduire significativement la facture énergétique et de valoriser les toitures des bâtiments agricoles.\n\nL'installation, réalisée en autoconsommation avec revente du surplus, bénéficie des qualifications RGE de notre équipe, facilitant l'accès aux dispositifs de soutien financier dédiés au secteur agricole.",
    // TODO: ajouter les photos du projet GAEC de Tartayrou - Le Bastit
    image: '/images/services/energier.jpeg',
    gallery: [],
    tags: ['Photovoltaïque', 'Agricole', 'Toiture', 'RGE'],
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
    image: '/images/services/energier.jpeg',
    gallery: [],
    tags: ['Photovoltaïque', '250 kWc', 'Tertiaire', 'RGE'],
  },
  {
    id: 'er-7',
    title: "Gymnase Tony Parker – Centrale Photovoltaïque 300 kWc",
    location: 'Paris',
    serviceSlug: 'energies-renouvelables',
    serviceLabel: 'Énergies Renouvelables',
    year: 2025,
    description: "Centrale photovoltaïque de 300 kWc en toiture du Gymnase Tony Parker à Paris : production d'énergie renouvelable pour réduire l'empreinte carbone de cet équipement sportif de référence.",
    longDescription: "Réalisation d'une centrale photovoltaïque de 300 kWc en toiture du Gymnase Tony Parker à Paris. Ce projet d'envergure pour un équipement sportif de référence comprend la conception, la fourniture, la pose et la mise en service d'une installation photovoltaïque haute performance.\n\nL'intégration de cette centrale solaire contribue à la réduction significative de l'empreinte carbone du gymnase, en produisant une énergie renouvelable locale qui couvre une part importante des besoins électriques de l'établissement.",
    // TODO: ajouter les photos du projet Gymnase Tony Parker - Paris
    image: '/images/services/energier.jpeg',
    gallery: [],
    tags: ['Photovoltaïque', '300 kWc', 'Équipement sportif', 'RGE'],
  },
  {
    id: 'er-8',
    title: "Exploitation Agricole – Centrale Photovoltaïque 350 kWc",
    location: 'Clermont-Ferrand',
    serviceSlug: 'energies-renouvelables',
    serviceLabel: 'Énergies Renouvelables',
    year: 2025,
    description: "Centrale photovoltaïque de 350 kWc sur une exploitation agricole à Clermont-Ferrand : production solaire intégrée à l'activité agricole avec supervision et suivi de production.",
    longDescription: "Réalisation d'une centrale photovoltaïque de 350 kWc sur une exploitation agricole à Clermont-Ferrand. Ce projet comprend l'ensemble des prestations, de l'étude de faisabilité au génie civil, en passant par la fourniture et la pose des modules photovoltaïques et des équipements électriques associés.\n\nL'installation est couplée à un système de supervision permettant un suivi en temps réel de la production, une détection rapide des anomalies et une optimisation continue des performances.",
    // TODO: ajouter les photos du projet Exploitation Agricole 350 kWc - Clermont-Ferrand
    image: '/images/services/energier.jpeg',
    gallery: [],
    tags: ['Photovoltaïque', '350 kWc', 'Agricole', 'RGE'],
  },
  {
    id: 'er-9',
    title: "Agile Université – Centrale Photovoltaïque 250 kWc",
    location: 'Nice',
    serviceSlug: 'energies-renouvelables',
    serviceLabel: 'Énergies Renouvelables',
    year: 2025,
    description: "Centrale photovoltaïque de 250 kWc sur le site Agile Université à Nice : production d'énergie renouvelable pour un campus, réduisant les consommations et les émissions de CO₂.",
    longDescription: "Installation d'une centrale photovoltaïque de 250 kWc sur le site Agile Université à Nice. Ce projet académique comprend la conception, la fourniture, la pose et la mise en service d'une installation solaire destinée à couvrir une partie des besoins énergétiques du campus.\n\nL'installation s'inscrit dans une démarche de responsabilité environnementale, permettant de réduire les émissions de CO₂ et la facture énergétique du site, tout en sensibilisant la communauté universitaire aux enjeux de la transition énergétique.",
    // TODO: ajouter les photos du projet Agile Université 250 kWc - Nice
    image: '/images/services/energier.jpeg',
    gallery: [],
    tags: ['Photovoltaïque', '250 kWc', 'Enseignement supérieur', 'RGE'],
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
