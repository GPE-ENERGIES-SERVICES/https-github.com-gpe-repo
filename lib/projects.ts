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
  // Courants forts
  {
    id: 'cf-1',
    title: 'Distribution HTA/BT — Centre Hospitalier Régional',
    location: 'Marseille, PACA',
    serviceSlug: 'courants-forts',
    serviceLabel: 'Courants Forts',
    client: 'CHU Marseille',
    year: 2023,
    description: 'Refonte complète de l\'installation électrique HTA/BT d\'un établissement de santé de 400 lits.',
    longDescription: 'Ce projet d\'envergure a consisté en la refonte complète de l\'installation électrique HTA/BT d\'un établissement de santé de 400 lits. Nos équipes ont réalisé la mise en place de TGBT redondants garantissant une continuité d\'alimentation critique, l\'installation d\'onduleurs UPS haute capacité pour les blocs opératoires et unités de soins intensifs, ainsi que la réfection complète du câblage et la mise en conformité totale avec la norme NF C 15-100. Un système de gestion et de monitoring de l\'énergie en temps réel a également été déployé pour optimiser la consommation électrique de l\'établissement.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    ],
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
    description: 'Installation électrique complète d\'un entrepôt logistique incluant éclairage LED et gestion d\'énergie.',
    longDescription: 'Pour ce vaste entrepôt logistique de 25 000 m², GPE Énergies & Services a réalisé l\'installation électrique intégrale depuis les postes de transformation jusqu\'aux équipements de quai. Le projet a inclus la mise en place d\'un éclairage LED haute performance (réduction de 60 % de la consommation d\'éclairage), l\'alimentation des 18 quais de chargement et déchargement, la réalisation de tableaux divisionnaires par zone, et le déploiement d\'un système de gestion d\'énergie BMS permettant un pilotage fin des consommations. Les travaux ont été réalisés en phases pour ne pas perturber l\'activité logistique en cours.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    ],
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
    description: 'Mise en conformité NF C 15-100 d\'une résidence collective avec remplacement des tableaux et installations.',
    longDescription: 'La mise en conformité de cette résidence de 200 logements a représenté un défi organisationnel majeur, l\'ensemble des travaux devant être menés avec les résidents en place. Nos équipes ont procédé au remplacement intégral des 200 tableaux de logement, à la mise à la terre généralisée, à l\'installation de nouvelles prises de courant aux normes, au remplacement de l\'éclairage des parties communes par des LED avec détection de présence, et à la réfection du TGBT principal. Un planning de 6 mois par roulements de bâtiments a permis de minimiser les interruptions pour les occupants. L\'ensemble des travaux a été réceptionné avec zéro réserve par le maître d\'ouvrage.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    ],
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
    description: 'Déploiement d\'un système intégré de vidéosurveillance IP HD et contrôle d\'accès biométrique sur 15 000 m².',
    longDescription: 'Ce campus tertiaire de 15 000 m² a nécessité la conception et le déploiement d\'une solution de sécurité électronique complète et intégrée. Le système comprend 120 caméras IP HD (intérieur et extérieur) reliées à un serveur d\'enregistrement centralisé, un contrôle d\'accès biométrique sur les 38 portes sensibles du site avec gestion des droits par profil, un système d\'interphonie vidéo sur les accès principaux, ainsi qu\'un câblage structuré dédié à la sécurité en chemin de câbles séparés. La supervision centralisée permet une gestion unifiée de l\'ensemble du système depuis le poste de sécurité.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
      'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
    ],
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
    description: 'Câblage structuré cat6A, baies de brassage et déploiement fibre optique sur 8 étages.',
    longDescription: 'Le projet de refonte de l\'infrastructure réseau du siège social a couvert les 8 étages du bâtiment pour un total de 1 200 prises VDI (voix, données, images). Les travaux ont inclus la pose de câblage cuivre cat6A certifié Fluke pour toutes les prises de travail, le déploiement d\'un réseau de fibre optique monomode entre les locaux techniques de chaque étage, l\'installation et le brassage de 24 baies 19\' avec gestion des câbles optimisée, ainsi que le déploiement des systèmes domotiques KNX pour la gestion de l\'éclairage et des stores. L\'ensemble du câblage a été certifié et livré avec ses documents de recette.',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80',
      'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
    ],
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

  // VRD
  {
    id: 'vrd-1',
    title: 'Aménagement VRD — ZAC 400 logements',
    location: 'Istres, PACA',
    serviceSlug: 'vrd',
    serviceLabel: 'VRD',
    client: 'Eiffage Immobilier',
    year: 2023,
    description: 'Travaux de voirie, réseaux d\'assainissement et éclairage public LED pour une ZAC de 400 logements.',
    longDescription: 'Ce chantier VRD d\'envergure a accompagné la création de la ZAC des Jardins d\'Istres destinée à accueillir 400 logements. GPE Énergies & Services a réalisé l\'intégralité des réseaux secs et de voirie : création de 3,2 km de voirie primaire et secondaire avec bordures et trottoirs, réalisation du réseau d\'assainissement eaux usées et eaux pluviales (séparatif), alimentation eau potable, enfouissement des réseaux électriques et télécom, et installation de 180 mâts d\'éclairage public LED à détection adaptative. Le système d\'éclairage intelligent permet une variation automatique selon l\'heure et la présence, réduisant la consommation d\'éclairage de 65 % par rapport à une installation conventionnelle. Les travaux ont été livrés dans les délais contractuels de 18 mois.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
      'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=800&q=80',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    ],
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
    description: 'Remplacement de 800 luminaires par des LED intelligents avec variation automatique et télégestion.',
    longDescription: 'Le programme de modernisation de l\'éclairage public de la commune de Martigues a porté sur le remplacement de 800 luminaires sodium haute pression par des LED intelligents de dernière génération. Chaque luminaire est équipé d\'un nœud de communication LoRaWAN permettant son adressage individuel et la remontée de données (consommation, température, alarmes). Le système de télégestion centralisé permet la variation automatique par scénarios horaires (100 % en soirée, 50 % après minuit, 30 % en fin de nuit) et la détection des pannes en temps réel avec géolocalisation sur carte. La consommation électrique globale de l\'éclairage public a été réduite de 68 %. Le retour sur investissement pour la commune est estimé à 5 ans, avec des économies annuelles de 180 000 €.',
    image: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=800&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    ],
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
  'courants-forts': 'Courants Forts',
  'courants-faibles': 'Courants Faibles',
  'energies-renouvelables': 'Énergies Renouvelables',
  'mobilite-electrique': 'Mobilité Électrique',
  'renovation-energetique': 'Rénovation Énergétique',
  'chauffage-climatisation': 'Chauffage & Climatisation',
  'vrd': 'VRD',
  'bureau-etudes': "Bureau d'Études",
}
