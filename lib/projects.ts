export interface Project {
  id: string
  title: string
  location: string
  serviceSlug: string
  serviceLabel: string
  year: number
  description: { fr: string; en: string; ar: string }
  longDescription: { fr: string; en: string; ar: string }
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
    description: {
      fr: "Installation électrique complète du pôle technique Oreca : réseaux HTA/BT, alimentation des ateliers de fabrication et systèmes de sûreté.",
      en: "Complete electrical installation at the Oreca technical hub: HV/LV networks, power supply for manufacturing workshops and security systems.",
      ar: "تركيب كهربائي كامل للقطب التقني لـ Oreca: شبكات الجهد العالي والمنخفض، وإمداد ورش التصنيع بالكهرباء، وأنظمة الأمن.",
    },
    longDescription: {
      fr: "Réalisation de l'ensemble des installations électriques CFO/CFA du pôle technique Oreca à Signes. Les travaux ont porté sur la distribution haute et basse tension, le câblage des ateliers de fabrication et d'assemblage, ainsi que le déploiement des systèmes de sécurité incendie (SSI), de vidéosurveillance et de contrôle d'accès.\n\nCe chantier exigeant en milieu industriel a nécessité une coordination rigoureuse avec les équipes techniques d'Oreca, afin d'assurer la continuité des activités du site tout au long des travaux.",
      en: "Full delivery of LV/HV and low-current electrical installations at the Oreca technical hub in Signes. The scope covered high and low-voltage distribution, cabling of manufacturing and assembly workshops, and deployment of fire detection (FDS), CCTV and access control systems.\n\nThis demanding industrial project required close coordination with Oreca's technical teams to ensure uninterrupted site operations throughout the construction period.",
      ar: "إنجاز المنظومة الكاملة للتركيبات الكهربائية (تيارات قوية وضعيفة) للقطب التقني لـ Oreca بـ Signes. شملت الأعمال توزيع الطاقة عالية الجهد ومنخفضة الجهد، وتمديد الكابلات في ورش التصنيع والتجميع، فضلاً عن نشر أنظمة كشف الحريق ومراقبة الفيديو والتحكم في الوصول.\n\nاستلزم هذا الموقع الصناعي الصارم تنسيقاً دقيقاً مع الفرق التقنية لـ Oreca، لضمان استمرارية العمليات طوال فترة الإنجاز.",
    },
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
    description: {
      fr: "Installations électriques CFO/CFA de la Cité Scolaire Internationale Jacques Chirac de Marseille : distribution BT, éclairage des bâtiments, SSI et réseaux courants faibles.",
      en: "LV power and low-current electrical installations at the Cité Scolaire Internationale Jacques Chirac in Marseille: LV distribution, building lighting, fire detection and low-current networks.",
      ar: "تركيبات التيارات الكهربائية القوية والضعيفة في مدرسة جاك شيراك الدولية بمرسيليا: توزيع الجهد المنخفض وإضاءة المباني وأنظمة الإنذار ضد الحريق وشبكات التيارات الضعيفة.",
    },
    longDescription: {
      fr: "Réalisation des travaux d'électricité courants forts et courants faibles pour la Cité Scolaire Internationale Jacques Chirac de Marseille. Ce chantier d'établissement scolaire comprend la distribution basse tension, l'éclairage intérieur et extérieur des bâtiments, le déploiement d'un système de sécurité incendie (SSI), ainsi que les réseaux courants faibles : câblage structuré, contrôle d'accès et interphonie.\n\nLes travaux, réalisés sur la période 2024-2025, ont été conduits en coordination étroite avec la maîtrise d'ouvrage afin d'assurer la continuité des activités pédagogiques pendant toute la durée du chantier.",
      en: "Delivery of all LV power and low-current electrical works at the Cité Scolaire Internationale Jacques Chirac in Marseille. The project covered low-voltage distribution, interior and exterior lighting, fire detection system (FDS) deployment, and the full low-current network: structured cabling, access control and intercom systems.\n\nCarried out over 2024–2025, the works were managed in close coordination with the client to maintain uninterrupted educational activities throughout the construction programme.",
      ar: "إنجاز كامل أعمال التيارات الكهربائية القوية والضعيفة في المدرسة الدولية جاك شيراك بمرسيليا. تضمّن المشروع توزيع الجهد المنخفض، والإضاءة الداخلية والخارجية، وتركيب منظومة الإنذار ضد الحريق، إلى جانب شبكات التيارات الضعيفة: التمديدات الهيكلية، والتحكم في الوصول، وأنظمة الاتصال الداخلي.\n\nأُنجزت الأعمال خلال الفترة 2024-2025 بتنسيق وثيق مع صاحب المشروع، لضمان استمرارية الأنشطة التعليمية طوال مدة البناء.",
    },
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
    description: {
      fr: "Réalisation des installations électriques Courants Forts et Courants Faibles (CFO/CFA) du nouveau Groupe Scolaire Marceau à Marseille.",
      en: "Full delivery of LV power and low-current (CFO/CFA) electrical installations at the new Groupe Scolaire Marceau in Marseille.",
      ar: "إنجاز منظومة التيارات الكهربائية القوية والضعيفة للمجمّع المدرسي Marceau الجديد بمرسيليا.",
    },
    longDescription: {
      fr: "Réalisation des installations électriques Courants Forts et Courants Faibles (CFO/CFA) du nouveau Groupe Scolaire Marceau à Marseille. Les prestations comprennent la distribution électrique, l'éclairage, le système de sécurité incendie ainsi que les infrastructures réseaux et de communication de l'établissement.",
      en: "Full delivery of LV power and low-current electrical installations for the new Groupe Scolaire Marceau in Marseille. The scope includes power distribution, interior and exterior lighting, a fire detection and safety system, and the school's complete data and communication network infrastructure.",
      ar: "إنجاز منظومة التيارات الكهربائية القوية والضعيفة لمجمّع مدرسة Marceau الجديد بمرسيليا. تشمل الخدمات المقدَّمة: توزيع الكهرباء، والإضاءة، وأنظمة السلامة من الحريق، فضلاً عن البنية التحتية لشبكات الاتصال والمعلوماتية للمؤسسة.",
    },
    image: '/images/gsmarceau/2.webp',
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
    description: {
      fr: "Installations électriques CFO/CFA du parc tertiaire Edge à Aubagne : distribution HTA/BT, TGBT intelligent, GTB et intégralité des courants faibles.",
      en: "LV/HV and low-current electrical installations at the Edge business park in Aubagne: HV/LV distribution, intelligent MLVS, BMS and complete low-current systems.",
      ar: "تركيبات التيارات الكهربائية القوية والضعيفة لمجمّع Edge التجاري بأوبان: توزيع الجهد العالي والمنخفض، ولوحة توزيع رئيسية ذكية، ونظام إدارة تقنية للمبنى، ومنظومة التيارات الضعيفة الكاملة.",
    },
    longDescription: {
      fr: "Réalisation de l'ensemble des prestations électriques CFO/CFA pour le parc tertiaire Edge à Aubagne. Ce programme de bâtiments de bureaux comprend une distribution HTA/BT performante, un tableau général basse tension (TGBT) intelligent, une gestion technique du bâtiment (GTB) et l'intégralité des courants faibles : câblage structuré, SSI, contrôle d'accès et vidéosurveillance.\n\nLe projet intègre des équipements d'efficacité énergétique permettant une exploitation optimale et maîtrisée des installations sur l'ensemble du parc.",
      en: "Full delivery of LV/HV and low-current electrical works for the Edge business park in Aubagne. This office campus project features a high-performance HV/LV distribution network, an intelligent main LV switchboard (MLVS), a building management system (BMS), and a complete low-current package covering structured cabling, fire detection, access control and CCTV.\n\nThe project incorporates energy-efficiency equipment to ensure optimised and controlled operation of all systems throughout the park.",
      ar: "تنفيذ المنظومة الكاملة للتركيبات الكهربائية (تيارات قوية وضعيفة) لمجمّع Edge التجاري بأوبان. يضمّ هذا المشروع المكتبي شبكة توزيع عالية ومنخفضة الجهد ذات أداء عالٍ، ولوحة توزيع رئيسية ذكية، ونظام إدارة تقنية للمبنى، إلى جانب المنظومة الكاملة للتيارات الضعيفة: التمديدات الهيكلية، وكشف الحريق، والتحكم في الوصول، والمراقبة بالكاميرات.\n\nيتضمّن المشروع معدات لكفاءة الطاقة تكفل تشغيلاً محكوماً وأمثل لجميع الأنظمة داخل المجمّع.",
    },
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
    description: {
      fr: "Réalisation des installations électriques CFO/CFA comprenant la distribution basse tension, l'éclairage intérieur, les infrastructures réseaux informatiques, le contrôle d'accès et le pré-équipement pour bornes de recharge IRVE.",
      en: "LV power and low-current electrical installations covering LV distribution, interior lighting, data network infrastructure, access control and EV charging pre-wiring.",
      ar: "تركيبات التيارات الكهربائية القوية والضعيفة تشمل: توزيع الجهد المنخفض، والإضاءة الداخلية، والبنية التحتية لشبكات المعلوماتية، والتحكم في الوصول، والتمهيد لتركيب محطات شحن المركبات الكهربائية.",
    },
    longDescription: {
      fr: "Réalisation des installations électriques CFO/CFA comprenant la distribution basse tension, l'éclairage intérieur, les infrastructures réseaux informatiques, le contrôle d'accès et le pré-équipement pour bornes de recharge IRVE. Ce projet tertiaire a été conçu pour offrir des espaces de travail performants, confortables et évolutifs, tout en respectant les normes et réglementations en vigueur.\n\nCe projet allie exigences de confort, performance énergétique et anticipation des usages futurs, dans le respect des normes NF C 15-100 et des référentiels environnementaux du programme de construction.",
      en: "Delivery of LV power and low-current electrical installations covering low-voltage distribution, interior lighting, data network infrastructure, access control and EV charging pre-wiring. This commercial office project was designed to deliver high-performance, comfortable and adaptable workspaces, fully compliant with applicable standards.\n\nThe project balances occupant comfort, energy efficiency and readiness for future uses, in line with NF C 15-100 requirements and the environmental benchmarks of the construction programme.",
      ar: "إنجاز تركيبات التيارات الكهربائية القوية والضعيفة، تشمل: توزيع الجهد المنخفض، والإضاءة الداخلية، والبنية التحتية لشبكات المعلوماتية، والتحكم في الوصول، والتمهيد لتركيب محطات شحن المركبات الكهربائية. صُمِّم هذا المشروع التجاري لتوفير فضاءات عمل عالية الأداء، مريحة وقابلة للتطوير.\n\nيجمع المشروع بين متطلبات الراحة وكفاءة الطاقة والاستعداد للاستخدامات المستقبلية، وفق معيار NF C 15-100 والمراجع البيئية للبرنامج الإنشائي.",
    },
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
    description: {
      fr: "Rénovation globale tous corps d'état du B&B Hotel Avignon 1.",
      en: "Full multi-trade renovation of the B&B Hotel Avignon 1.",
      ar: "إعادة تأهيل شاملة لجميع الأعمال في فندق B&B Avignon 1.",
    },
    longDescription: {
      fr: "Rénovation globale tous corps d'état du B&B Hotel Avignon 1. Les travaux ont consisté en la réhabilitation complète de l'établissement, comprenant les aménagements intérieurs et extérieurs, les travaux de menuiserie, les revêtements de sols et murs, la plomberie, le chauffage, la climatisation, l'électricité ainsi que la modernisation des espaces communs et des chambres.\n\nCette opération a permis de remettre l'établissement aux standards actuels de confort, de sécurité et de performance énergétique. Le chantier a été mené en étroite coordination avec l'ensemble des intervenants afin de respecter le planning de réalisation et de garantir un niveau de qualité conforme aux exigences du groupe hôtelier.",
      en: "Full multi-trade renovation of the B&B Hotel Avignon 1. Works encompassed the complete refurbishment of the property, including interior and exterior fitout, joinery, floor and wall finishes, plumbing, heating, air conditioning, electrical installations, and the modernisation of communal areas and guest rooms.\n\nThe project brought the hotel up to current standards for comfort, safety and energy performance. The works were managed in close coordination with all trades to meet the project schedule and deliver results in line with the hotel group's requirements.",
      ar: "إعادة تأهيل شاملة لجميع الأعمال في فندق B&B Avignon 1. شملت الأعمال إعادة تهيئة الفندق بالكامل، بما في ذلك التجهيز الداخلي والخارجي، والنجارة، وتشطيبات الأرضيات والجدران، والسباكة، والتدفئة، والتكييف، والتركيبات الكهربائية، وتحديث المناطق المشتركة وغرف الضيوف.\n\nأتاحت هذه العملية رفع مستوى الفندق إلى المعايير الراهنة من حيث الراحة والسلامة وكفاءة الطاقة، وأُنجزت بتنسيق وثيق بين جميع المتدخلين لضمان الالتزام بالجداول الزمنية ومتطلبات مجموعة الفنادق.",
    },
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
    description: {
      fr: "Rénovation globale tous corps d'état du B&B Hotel Avignon 2.",
      en: "Full multi-trade renovation of the B&B Hotel Avignon 2.",
      ar: "إعادة تأهيل شاملة لجميع الأعمال في فندق B&B Avignon 2.",
    },
    longDescription: {
      fr: "Rénovation globale tous corps d'état du B&B Hotel Avignon 2. Les travaux ont porté sur la réhabilitation complète de l'établissement, incluant les aménagements intérieurs et extérieurs, les menuiseries, les revêtements de sols et murs, la plomberie, la climatisation, l'électricité, ainsi que la modernisation des espaces communs et des chambres.\n\nCette opération a permis d'améliorer le confort des usagers, la performance énergétique du bâtiment et la qualité des prestations offertes par l'établissement. Réalisé dans la continuité du premier hôtel B&B d'Avignon, ce chantier a bénéficié d'une organisation optimisée et d'une coordination renforcée entre les différents corps d'état, garantissant le respect des délais et des exigences de qualité du projet.",
      en: "Full multi-trade renovation of the B&B Hotel Avignon 2. Works covered the complete refurbishment of the property, including interior and exterior fitout, joinery, floor and wall finishes, plumbing, air conditioning, electrical installations, and the modernisation of communal areas and guest rooms.\n\nBuilding on the success of the first Avignon B&B Hotel project, this contract benefited from an optimised workflow and enhanced coordination between trades, ensuring strict adherence to deadlines and quality standards throughout.",
      ar: "إعادة تأهيل شاملة لجميع الأعمال في فندق B&B Avignon 2. تضمّنت الأعمال إعادة تهيئة الفندق بأكمله، شاملةً التجهيز الداخلي والخارجي، والنجارة، وتشطيبات الأرضيات والجدران، والسباكة، والتكييف، والتركيبات الكهربائية، وتحديث المناطق المشتركة وغرف الضيوف.\n\nاستفاد هذا المشروع من التجربة المتراكمة في إنجاز فندق Avignon الأول، ما أتاح تنظيماً محكماً وتنسيقاً أقوى بين الحرف المختلفة، مع الالتزام الصارم بالمواعيد والمتطلبات النوعية للمشروع.",
    },
    image: '/images/b%26b%20avignon%202/WhatsApp%20Image%202026-06-01%20at%2021.06.20.jpeg',
    gallery: [
      '/images/b%26b%20avignon%202/WhatsApp%20Image%202026-06-01%20at%2021.06.20.jpeg',
      '/images/b%26b%20avignon%202/WhatsApp%20Image%202026-06-01%20at%2021.06.20%20(1).jpeg',
      '/images/b%26b%20avignon%202/WhatsApp%20Image%202026-06-01%20at%2021.06.21.jpeg',
      '/images/b%26b%20avignon%202/WhatsApp%20Image%202026-06-01%20at%2021.06.21%20(2).jpeg',
    ],
    tags: ['Hôtellerie'],
  },
  {
    id: 'cff-8',
    title: "Chicken Street",
    location: 'Le Pontet',
    serviceSlug: 'renovation-energetique',
    serviceLabel: 'Rénovation Énergétique',
    year: 2024,
    description: {
      fr: "Rénovation globale tous corps d'état du restaurant Chicken Street situé au Pontet, dans la région d'Avignon.",
      en: "Full multi-trade renovation of the Chicken Street restaurant in Le Pontet, near Avignon.",
      ar: "إعادة تأهيل شاملة لجميع الأعمال في مطعم Chicken Street بـ Le Pontet، في منطقة أفينيون.",
    },
    longDescription: {
      fr: "Rénovation globale tous corps d'état du restaurant Chicken Street situé au Pontet, dans la région d'Avignon. Cette opération comprend la réhabilitation complète des espaces intérieurs et extérieurs, avec des interventions sur les lots de gros œuvre, second œuvre, électricité, plomberie, revêtements, peinture, climatisation et aménagements intérieurs, afin de moderniser l'établissement et d'améliorer les conditions d'accueil.",
      en: "Full multi-trade renovation of the Chicken Street restaurant in Le Pontet, near Avignon. The project covers the complete refurbishment of all interior and exterior spaces, encompassing structural works, secondary trades, electrical systems, plumbing, floor and wall finishes, painting, air conditioning and interior fitout — all aimed at modernising the venue and enhancing the customer experience.",
      ar: "إعادة تأهيل شاملة لجميع الأعمال في مطعم Chicken Street بـ Le Pontet، في منطقة أفينيون. تشمل هذه العملية إعادة تهيئة كامل الفضاءات الداخلية والخارجية، من أعمال هيكلية وثانوية، وكهرباء وسباكة، وتشطيبات الأرضيات والجدران والطلاء، والتكييف والتجهيز الداخلي، بهدف تحديث المنشأة وتحسين جودة الاستقبال.",
    },
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
    tags: ['Rénovation', 'Tertiaire'],
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
    description: {
      fr: "Réalisation du déploiement d'infrastructures de recharge pour véhicules électriques (IRVE) sur le site de Sartorius à Aubagne.",
      en: "Deployment of electric vehicle charging infrastructure (EVCI) at the Sartorius site in Aubagne.",
      ar: "نشر البنية التحتية لشحن المركبات الكهربائية في موقع Sartorius بأوبان.",
    },
    longDescription: {
      fr: "Réalisation du déploiement d'infrastructures de recharge pour véhicules électriques (IRVE) sur le site de Sartorius à Aubagne. Les travaux comprennent la fourniture et l'installation des bornes de recharge, les raccordements électriques, le tirage des câbles et la mise en service des équipements.\n\nCe projet accompagne la transition énergétique du site en favorisant la mobilité électrique des collaborateurs et visiteurs, tout en garantissant une intégration optimale aux infrastructures existantes.",
      en: "Deployment of electric vehicle charging infrastructure (EVCI) at the Sartorius site in Aubagne. The works cover the supply and installation of charging stations, electrical connections, cable routing and equipment commissioning.\n\nThis project supports the site's energy transition by facilitating electric mobility for staff and visitors, while ensuring seamless integration with the existing electrical infrastructure.",
      ar: "نشر البنية التحتية لشحن المركبات الكهربائية في موقع Sartorius بأوبان. شملت الأعمال توريد محطات الشحن وتركيبها، وإجراء التوصيلات الكهربائية، وتمديد الكابلات، وتشغيل المعدات.\n\nيندرج هذا المشروع في إطار التحول الطاقوي للموقع، إذ يُيسّر التنقل الكهربائي للموظفين والزوار مع ضمان التكامل الأمثل مع البنية التحتية الكهربائية القائمة.",
    },
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
    description: {
      fr: "Installation d'infrastructures de recharge pour véhicules électriques réalisée pour le compte de Circet : pose des bornes IRVE, raccordement et mise en service.",
      en: "EV charging infrastructure works for Circet at Le Tholonet: installation of EVCI stations, connection and commissioning.",
      ar: "أعمال البنية التحتية لشحن المركبات الكهربائية لـ Circet بـ Le Tholonet: تركيب محطات الشحن، والتوصيل، والتشغيل.",
    },
    longDescription: {
      fr: "Réalisation des travaux d'infrastructure de recharge pour véhicules électriques (IRVE) dans le cadre d'un chantier mené pour Circet au Tholonet. Les prestations couvrent la pose et le raccordement des bornes de recharge, le tirage de câbles, ainsi que la mise en service et le paramétrage des équipements.\n\nCette collaboration avec Circet, acteur reconnu dans le déploiement d'infrastructures réseau, confirme notre positionnement sur les marchés du déploiement IRVE à grande échelle, avec une capacité d'intervention rapide et conforme aux exigences normatives en vigueur.",
      en: "Delivery of electric vehicle charging infrastructure (EVCI) works for Circet at Le Tholonet. The scope covers the installation and connection of charging stations, cable routing, and full equipment commissioning and configuration.\n\nThis collaboration with Circet — a leading network infrastructure specialist — reinforces our positioning in large-scale EVCI deployment, demonstrating our ability to mobilise rapidly and comply with all applicable regulatory and technical requirements.",
      ar: "إنجاز أعمال البنية التحتية لشحن المركبات الكهربائية في إطار مشروع مُنجَز لصالح Circet بـ Le Tholonet. تشمل الخدمات تركيب محطات الشحن وتوصيلها، وتمديد الكابلات، وتشغيل المعدات وضبطها.\n\nتؤكد هذه الشراكة مع Circet، المتخصص الرائد في نشر البنى التحتية، تموقعنا في سوق نشر البنية التحتية لشحن المركبات الكهربائية على نطاق واسع، مع قدرة استجابة سريعة واستيفاء كامل للمعايير التنظيمية المعمول بها.",
    },
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
    description: {
      fr: "Équipement IRVE d'un site RTE à Marseille (13009) : installation de bornes de recharge pour flotte de véhicules électriques, raccordement BT et mise en service.",
      en: "EVCI installation at an RTE site in Marseille (13009): charging stations for the vehicle fleet, LV connection and commissioning.",
      ar: "تركيب البنية التحتية لشحن المركبات الكهربائية في موقع RTE بمرسيليا (13009): محطات شحن لأسطول المركبات، والتوصيل بالجهد المنخفض والتشغيل.",
    },
    longDescription: {
      fr: "Réalisation de l'infrastructure de recharge pour véhicules électriques (IRVE) sur un site du Réseau de Transport d'Électricité (RTE) à Marseille dans le 9e arrondissement. Les travaux comprennent la fourniture et la pose des bornes de recharge dédiées à la flotte de véhicules du site, le raccordement basse tension et la mise en service des équipements.\n\nCe projet, mené dans le respect des exigences techniques et de sécurité propres aux sites RTE, illustre notre capacité à intervenir sur des infrastructures exploitées par des gestionnaires de réseau d'énergie.",
      en: "Delivery of electric vehicle charging infrastructure (EVCI) at a Réseau de Transport d'Électricité (RTE) site in Marseille's 9th arrondissement. The works cover the supply and installation of charging stations dedicated to the site's vehicle fleet, LV connection and equipment commissioning.\n\nExecuted in strict compliance with RTE's technical and safety requirements, this project demonstrates our ability to work on infrastructure operated by transmission system operators.",
      ar: "إنجاز البنية التحتية لشحن المركبات الكهربائية في أحد مواقع شبكة نقل الكهرباء (RTE) في الدائرة التاسعة بمرسيليا. شملت الأعمال توريد محطات الشحن المخصصة لأسطول المركبات وتركيبها، والتوصيل بالجهد المنخفض، وتشغيل المعدات.\n\nأُنجز هذا المشروع وفق الاشتراطات التقنية والأمنية الصارمة لمواقع RTE، مما يعكس كفاءتنا في التدخل على البنى التحتية التي يديرها مشغلو شبكات الطاقة.",
    },
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
    description: {
      fr: "Installation de bornes de recharge pour véhicules électriques à l'Hôtel de Saint Maximin : infrastructure IRVE pour la clientèle, raccordement BT et mise en service.",
      en: "EV charging station installation at the Hôtel de Saint Maximin: EVCI infrastructure for hotel guests, LV connection and commissioning.",
      ar: "تركيب محطات شحن المركبات الكهربائية في فندق Saint Maximin: بنية تحتية لشحن المركبات لنزلاء الفندق، والتوصيل بالجهد المنخفض والتشغيل.",
    },
    longDescription: {
      fr: "Réalisation de l'infrastructure de recharge pour véhicules électriques (IRVE) à l'Hôtel de Saint Maximin. Les travaux comprennent l'installation des bornes de recharge dédiées à la clientèle de l'établissement, le raccordement au réseau basse tension et la mise en service des équipements.\n\nCe projet s'inscrit dans la démarche de développement durable de l'hôtel, offrant à ses clients un service de recharge pratique et fiable, en conformité avec les normes IRVE en vigueur.",
      en: "Delivery of electric vehicle charging infrastructure (EVCI) at the Hôtel de Saint Maximin. The works include the installation of guest-dedicated charging stations, LV network connection and equipment commissioning.\n\nThis project supports the hotel's sustainability commitments, offering guests a convenient and reliable charging service in full compliance with applicable EVCI standards.",
      ar: "إنجاز البنية التحتية لشحن المركبات الكهربائية في فندق Saint Maximin. شملت الأعمال تركيب محطات شحن مخصصة لنزلاء الفندق، والتوصيل بشبكة الجهد المنخفض، وتشغيل المعدات.\n\nيندرج هذا المشروع في إطار التوجه المستدام للفندق، إذ يوفر لضيوفه خدمة شحن مريحة وموثوقة وفق المعايير المعمول بها.",
    },
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
    description: {
      fr: "Déploiement d'une infrastructure de recharge pour véhicules électriques au domaine Gabriel Meffre à Gigondas : installation de bornes IRVE, raccordement et mise en service.",
      en: "Deployment of EV charging infrastructure at the Gabriel Meffre estate in Gigondas: EVCI station installation, connection and commissioning.",
      ar: "نشر البنية التحتية لشحن المركبات الكهربائية في قصر Gabriel Meffre بـ Gigondas: تركيب محطات الشحن، والتوصيل، والتشغيل.",
    },
    longDescription: {
      fr: "Réalisation de l'infrastructure IRVE au domaine viticole Gabriel Meffre à Gigondas (84190). Les travaux comprennent la fourniture et l'installation des bornes de recharge pour véhicules électriques, le raccordement au réseau basse tension et la mise en service des équipements.\n\nCe projet illustre notre capacité à intervenir dans des environnements variés, en apportant des solutions de recharge adaptées aux besoins spécifiques d'un domaine viticole de renom, accueillant visiteurs et professionnels.",
      en: "Delivery of EV charging infrastructure (EVCI) at the Gabriel Meffre wine estate in Gigondas. The works cover the supply and installation of electric vehicle charging points, LV connection and equipment commissioning.\n\nThis project highlights our versatility in delivering tailored charging solutions for a wide range of environments — here, a prestigious wine estate welcoming both trade visitors and the general public.",
      ar: "إنجاز البنية التحتية لشحن المركبات الكهربائية في قصر Gabriel Meffre للكروم بـ Gigondas. شملت الأعمال توريد محطات الشحن وتركيبها، والتوصيل بشبكة الجهد المنخفض، وتشغيل المعدات.\n\nيُجسّد هذا المشروع قدرتنا على التدخل في بيئات متنوعة، وتقديم حلول شحن ملائمة لاحتياجات ضيعة عريقة تستقبل الزوار والمهنيين على حدٍّ سواء.",
    },
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
    description: {
      fr: "Équipement IRVE du site Colisée à Trets : installation de bornes de recharge pour véhicules électriques, raccordement au réseau basse tension et mise en service.",
      en: "EVCI installation at the Colisée site in Trets: EV charging stations, LV network connection and commissioning.",
      ar: "تجهيز موقع Colisée بـ Trets ببنية تحتية لشحن المركبات الكهربائية: تركيب محطات شحن، والتوصيل بالشبكة منخفضة الجهد والتشغيل.",
    },
    longDescription: {
      fr: "Réalisation des travaux d'infrastructure de recharge pour véhicules électriques (IRVE) sur le site Colisée à Trets. Les prestations couvrent la fourniture et la pose des bornes de recharge, le raccordement électrique et la mise en service des équipements.\n\nCe projet confirme notre savoir-faire dans le déploiement d'infrastructures IRVE pour des sites variés, avec une installation conforme aux exigences réglementaires et normatives en vigueur.",
      en: "Delivery of electric vehicle charging infrastructure (EVCI) at the Colisée site in Trets. The scope includes the supply and installation of charging stations, electrical connections and equipment commissioning.\n\nThis project further demonstrates our expertise in EVCI deployment across a wide range of site types, with installations delivered in full compliance with current regulatory and technical standards.",
      ar: "إنجاز أعمال البنية التحتية لشحن المركبات الكهربائية في موقع Colisée بـ Trets. تشمل الخدمات توريد محطات الشحن وتركيبها، والتوصيلات الكهربائية، وتشغيل المعدات.\n\nيؤكد هذا المشروع خبرتنا في نشر بنى شحن المركبات الكهربائية في أنواع متعددة من المواقع، مع الالتزام التام بالمتطلبات التنظيمية والمعايير المعمول بها.",
    },
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
    description: {
      fr: "Centrale photovoltaïque de 1,2 MW en toiture bac acier près de Cahors : production d'énergie renouvelable locale grâce à une intégration optimisée sur la structure existante.",
      en: "1.2 MW rooftop photovoltaic power plant on a steel-sheet roof near Cahors: local renewable energy production with optimised integration into the existing structure.",
      ar: "محطة طاقة شمسية فوتوفولطية بقدرة 1.2 ميغاواط على سقف معدني قرب Cahors: إنتاج طاقة متجددة محلية مع التكامل الأمثل مع الهيكل الإنشائي القائم.",
    },
    longDescription: {
      fr: "Installation d'une centrale photovoltaïque de 1,2 MW en toiture bac acier à proximité de Cahors. Ce projet permet de produire une énergie renouvelable locale tout en s'intégrant efficacement à la structure existante, participant ainsi à la transition énergétique du site.",
      en: "Installation of a 1.2 MW rooftop photovoltaic power plant on a steel-sheet roof structure near Cahors. The project generates local renewable energy while integrating seamlessly into the existing building structure, contributing directly to the site's energy transition.",
      ar: "تركيب محطة طاقة شمسية فوتوفولطية بقدرة 1.2 ميغاواط على سقف من الصفائح المعدنية قرب Cahors. يُنتج هذا المشروع طاقة متجددة محلية مع التكامل الأمثل مع الهيكل الإنشائي القائم، مساهماً في مسيرة التحول الطاقوي للموقع.",
    },
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
    description: {
      fr: "Ombrière photovoltaïque sur le parking de l'Intermarché Super d'Orgon : production d'énergie renouvelable locale et valorisation des surfaces de stationnement.",
      en: "Photovoltaic canopy over the Intermarché Super car park in Orgon: local renewable energy production and enhanced use of parking surfaces.",
      ar: "مظلة فوتوفولطية فوق موقف سيارات Intermarché Super في Orgon: إنتاج طاقة متجددة محلية وتثمين مساحات الانتظار.",
    },
    longDescription: {
      fr: "Réalisation d'une ombrière photovoltaïque sur le parking de l'Intermarché Super d'Orgon (13660). Ce projet permet de valoriser l'espace de stationnement en le transformant en zone de production d'énergie solaire, tout en offrant aux clients une protection contre les intempéries.\n\nL'installation s'inscrit dans la démarche de transition énergétique de l'enseigne, contribuant à la réduction de l'empreinte carbone du site et à la production d'électricité renouvelable en autoconsommation.",
      en: "Installation of a photovoltaic canopy over the car park of the Intermarché Super supermarket in Orgon. The project transforms existing parking space into a solar energy production area while providing customers with weather protection.\n\nThe installation supports the retailer's energy transition strategy, reducing the site's carbon footprint and generating renewable electricity for on-site self-consumption.",
      ar: "إنجاز مظلة فوتوفولطية فوق موقف سيارات Intermarché Super في Orgon. يستثمر هذا المشروع مساحة المواقف ويحوّلها إلى منطقة لإنتاج الطاقة الشمسية، مع توفير حماية للعملاء من الأحوال الجوية.\n\nيندرج المشروع في إطار استراتيجية التحول الطاقوي للعلامة التجارية، مساهماً في تقليص البصمة الكربونية للموقع وإنتاج الكهرباء المتجددة للاستهلاك الذاتي.",
    },
    image: '/images/projet1/1.jpg',
    gallery: [
      '/images/projet1/1.jpg',
      '/images/projet1/2.jpg',
      '/images/projet1/3.jpg',
      '/images/projet1/4.jpg',
      '/images/projet1/5.jpg',
    ],
    tags: ['Photovoltaïque', 'Ombrières', 'Grande Distribution'],
  },

  {
    id: 'er-6',
    title: "SCI Idenium – Centrale Photovoltaïque 250 kWc",
    location: 'France',
    serviceSlug: 'energies-renouvelables',
    serviceLabel: 'Énergies Renouvelables',
    year: 2025,
    description: {
      fr: "Centrale photovoltaïque de 250 kWc pour la SCI Idenium : production d'énergie renouvelable en autoconsommation et valorisation du patrimoine immobilier.",
      en: "250 kWc photovoltaic power plant for SCI Idenium: renewable energy production for self-consumption and enhanced real estate asset value.",
      ar: "محطة طاقة شمسية فوتوفولطية بقدرة 250 كيلوواط-ذروة لـ SCI Idenium: إنتاج طاقة متجددة للاستهلاك الذاتي وتعزيز قيمة الأصول العقارية.",
    },
    longDescription: {
      fr: "Réalisation d'une centrale photovoltaïque de 250 kWc pour la SCI Idenium. Ce projet de moyenne puissance comprend l'étude de faisabilité, le dimensionnement des équipements, la fourniture et la pose des panneaux photovoltaïques, ainsi que le raccordement au réseau et la mise en service.\n\nL'installation est conçue pour maximiser l'autoconsommation du site et valoriser le patrimoine immobilier, tout en bénéficiant des dispositifs de soutien à la production d'énergie renouvelable.",
      en: "Delivery of a 250 kWc photovoltaic power plant for SCI Idenium. This mid-scale project covers feasibility study, equipment sizing, supply and installation of solar panels, grid connection and commissioning.\n\nThe system is designed to maximise on-site self-consumption and enhance the value of the real estate asset, while benefiting from available renewable energy production support schemes.",
      ar: "إنجاز محطة طاقة شمسية فوتوفولطية بقدرة 250 كيلوواط-ذروة لـ SCI Idenium. يشمل هذا المشروع متوسط الحجم: دراسة الجدوى، وتحديد أحجام المعدات، وتوريد الألواح الشمسية وتركيبها، والربط بالشبكة، والتشغيل.\n\nصُمِّمت المنظومة لتعظيم الاستهلاك الذاتي للموقع وتعزيز قيمة العقار، مع الاستفادة من آليات دعم إنتاج الطاقة المتجددة المتاحة.",
    },
    image: '/images/tony/2.jpeg',
    gallery: [
      '/images/tony/2.jpeg',
      '/images/tony/3.jpeg',
      '/images/tony/10.jpeg',
      '/images/tony/11.jpeg',
    ],
    tags: ['Photovoltaïque', '250 kWc', 'Tertiaire'],
  },

  {
    id: 'er-8',
    title: "Exploitation Agricole – Centrale Photovoltaïque 350 kWc",
    location: 'Clermont-Ferrand',
    serviceSlug: 'energies-renouvelables',
    serviceLabel: 'Énergies Renouvelables',
    year: 2025,
    description: {
      fr: "Centrale photovoltaïque de 350 kWc sur une exploitation agricole à Clermont-Ferrand : production solaire intégrée à l'activité agricole avec supervision et suivi de production.",
      en: "350 kWc photovoltaic power plant on an agricultural holding in Clermont-Ferrand: solar production integrated into farming operations with real-time supervision and monitoring.",
      ar: "محطة طاقة شمسية فوتوفولطية بقدرة 350 كيلوواط-ذروة على استغلال فلاحي في كليرمون-فيران: إنتاج شمسي مُدمج في النشاط الفلاحي مع منظومة إشراف ومتابعة للإنتاج.",
    },
    longDescription: {
      fr: "Réalisation d'une centrale photovoltaïque de 350 kWc sur une exploitation agricole à Clermont-Ferrand. Ce projet comprend l'ensemble des prestations, de l'étude de faisabilité au génie civil, en passant par la fourniture et la pose des modules photovoltaïques et des équipements électriques associés.\n\nL'installation est couplée à un système de supervision permettant un suivi en temps réel de la production, une détection rapide des anomalies et une optimisation continue des performances.",
      en: "Delivery of a 350 kWc photovoltaic power plant on an agricultural holding in Clermont-Ferrand. The full-scope project covers feasibility study, civil engineering works, and the supply and installation of photovoltaic modules and associated electrical equipment.\n\nThe system is coupled with a real-time supervision platform enabling continuous production monitoring, early fault detection and ongoing performance optimisation.",
      ar: "إنجاز محطة طاقة شمسية فوتوفولطية بقدرة 350 كيلوواط-ذروة على استغلال فلاحي في كليرمون-فيران. يغطي المشروع الخدمات الكاملة: من دراسة الجدوى والأعمال الهندسية المدنية، إلى توريد الألواح الشمسية وتركيبها والمعدات الكهربائية المرتبطة بها.\n\nتُوصَل المنظومة بنظام إشراف لمتابعة الإنتاج في الوقت الفعلي، والكشف المبكر عن الأعطال، وتحسين الأداء باستمرار.",
    },
    image: '/images/cler/1.jpeg',
    gallery: [
      '/images/cler/1.jpeg',
      '/images/cler/2.jpeg',
      '/images/cler/6.jpeg',
      '/images/cler/8.jpeg',
      '/images/cler/3.jpeg',
    ],
    tags: ['Photovoltaïque', '350 kWc', 'Agricole'],
  },
  {
    id: 'er-9',
    title: "Université de Nice",
    location: 'Nice',
    serviceSlug: 'energies-renouvelables',
    serviceLabel: 'Énergies Renouvelables',
    year: 2025,
    description: {
      fr: "Centrale photovoltaïque de 250 kWc sur le site Agile Université à Nice : production d'énergie renouvelable pour un campus, réduisant les consommations et les émissions de CO₂.",
      en: "250 kWc photovoltaic power plant at the Agile Université campus in Nice: renewable energy production for the campus, reducing consumption and CO₂ emissions.",
      ar: "محطة طاقة شمسية فوتوفولطية بقدرة 250 كيلوواط-ذروة في حرم Agile Université بنيس: إنتاج طاقة متجددة للحرم الجامعي، مما يُقلّص الاستهلاك وانبعاثات ثاني أكسيد الكربون.",
    },
    longDescription: {
      fr: "Installation d'une centrale photovoltaïque de 250 kWc sur le site Agile Université à Nice. Ce projet académique comprend la conception, la fourniture, la pose et la mise en service d'une installation solaire destinée à couvrir une partie des besoins énergétiques du campus.\n\nL'installation s'inscrit dans une démarche de responsabilité environnementale, permettant de réduire les émissions de CO₂ et la facture énergétique du site, tout en sensibilisant la communauté universitaire aux enjeux de la transition énergétique.",
      en: "Installation of a 250 kWc photovoltaic power plant at the Agile Université campus in Nice. This academic project covers the design, supply, installation and commissioning of a solar energy system intended to meet a significant share of the campus's power needs.\n\nThe installation reflects the university's environmental responsibility commitments, helping to reduce CO₂ emissions and energy costs while raising student and staff awareness of the challenges of the energy transition.",
      ar: "تركيب محطة طاقة شمسية فوتوفولطية بقدرة 250 كيلوواط-ذروة في حرم Agile Université بنيس. يشمل هذا المشروع الأكاديمي التصميم، والتوريد، والتركيب، والتشغيل لنظام طاقة شمسية يُغطي جزءاً من احتياجات الحرم الجامعي من الطاقة.\n\nيعكس المشروع التزام الجامعة بالمسؤولية البيئية، إذ يُسهم في خفض انبعاثات ثاني أكسيد الكربون وتكاليف الطاقة، مع تعزيز وعي أفراد المجتمع الجامعي بتحديات التحول الطاقوي.",
    },
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
