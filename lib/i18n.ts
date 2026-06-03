const frTranslations: Record<string, string> = {
  'service.courants-forts-faibles.title': 'Courants forts & faibles',
  'service.courants-forts-faibles.shortDesc': "Conception et réalisation de vos installations électriques haute et basse tension, du tableau général jusqu'aux équipements terminaux.",
  'service.energies-renouvelables.title': 'Énergies renouvelables',
  'service.energies-renouvelables.shortDesc': "Installation de systèmes photovoltaïques et de solutions de stockage énergétique pour accélérer votre transition vers l'énergie verte.",
  'service.mobilite-electrique.title': 'Mobilité électrique',
  'service.mobilite-electrique.shortDesc': "Déploiement d'infrastructures de recharge pour véhicules électriques, de la borne résidentielle aux solutions de supervision intelligente.",
  'service.renovation-energetique.title': 'Rénovation énergétique',
  'service.renovation-energetique.shortDesc': "Audit, conseil et travaux d'amélioration pour réduire vos consommations et valoriser vos bâtiments.",
  'service.chauffage-climatisation.title': 'Chauffage & climatisation',
  'service.chauffage-climatisation.shortDesc': "Solutions CVC sur mesure pour un confort thermique optimal, de l'installation à la maintenance.",
  'service.bureau-etudes.title': "Bureau d'études",
  'service.bureau-etudes.shortDesc': "Ingénierie, conception et maîtrise d'œuvre pour vos projets électriques, énergétiques et CVC.",
  'service.smart-building.title': 'Smart building',
  'service.smart-building.shortDesc': "Conception et déploiement de systèmes de gestion technique du bâtiment basés sur le protocole KNX pour l'automatisation intelligente de vos espaces.",
  'service.vrd.title': 'VRD',
  'service.vrd.shortDesc': "Voiries, réseaux et divers : conception et réalisation de tous les réseaux extérieurs, assainissement, terrassement et aménagements de site.",
}

export function tFR(key: string): string {
  return frTranslations[key] ?? key
}
