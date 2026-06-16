'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import InteractiveMap, { type MapLocation } from '@/components/InteractiveMap'
import CertificationsMarquee from '@/components/CertificationsMarquee'
import { useLanguage } from '@/context/LanguageContext'


const partnerCategories = [
  {
    key: 'pv',
    labelKey: 'references.category.pv',
    partners: [
      { name: 'Solstyce',          logo: '/images/LogoPartenaires/PV/solstyce.jpg' },
      { name: 'Voltalia',          logo: '/images/LogoPartenaires/PV/Voltalia.png' },
      { name: 'Enerlis',           logo: '/images/LogoPartenaires/PV/enerlis.png' },
      { name: 'Enoe',              logo: '/images/LogoPartenaires/PV/enoe.png' },
      { name: 'Apex Énergie',      logo: '/images/LogoPartenaires/PV/apex.png' },
      { name: 'EDF Solaire',       logo: '/images/LogoPartenaires/PV/edfsolaire.png' },
      { name: 'Engie',             logo: '/images/LogoPartenaires/PV/engie.png' },
      { name: 'EDF Renouvelables', logo: '/images/LogoPartenaires/PV/edfrenouvelables.png' },
      { name: 'Les Mousquetaires', logo: '/images/LogoPartenaires/PV/mousquetaires.png' },
      { name: 'Eiffage', logo: '/images/LogoPartenaires/PV/eiffageenergie.png' },
    ],
  },
  {
    key: 'irve',
    labelKey: 'references.category.irve',
    partners: [
      { name: 'Circet France', logo: '/images/LogoPartenaires/IRVE/circet.jpg' },
      { name: 'Carrefour',     logo: '/images/LogoPartenaires/IRVE/Logo_Carrefour.svg.png' },
      { name: 'MyWAAT',        logo: '/images/LogoPartenaires/IRVE/Logo-MyWAAT-couleur-2023.png' },
      { name: 'Izivia',        logo: '/images/LogoPartenaires/IRVE/izivia.webp' },
      { name: 'Ensio',         logo: '/images/LogoPartenaires/IRVE/LOGO-Ensio_RVB.webp' },
      { name: 'Enedis',        logo: '/images/LogoPartenaires/IRVE/Logo_enedis_header.png' },
      { name: 'Beev',          logo: '/images/LogoPartenaires/IRVE/beev.png' },
      { name: 'Driveco',       logo: '/images/LogoPartenaires/IRVE/driveco.png' },
      { name: 'Stations-E',    logo: '/images/LogoPartenaires/IRVE/logo-stations-e2.png' },
      { name: 'Dalkia',        logo: '/images/LogoPartenaires/IRVE/dalkiaelectronics.png' },
    ],
  },
  {
    key: 'electricite',
    labelKey: 'references.category.electricite',
    partners: [
      { name: 'Bouygues',         logo: '/images/LogoPartenaires/Electricité/bouygues_construction.png' },
      { name: 'Vinci',            logo: '/images/LogoPartenaires/Electricité/Logo_Vinci.svg.png' },
      { name: 'Equans',           logo: '/images/LogoPartenaires/Electricité/Equans_Logo.png' },
      { name: 'Eiffage',          logo: '/images/LogoPartenaires/Electricité/Logo_Eiffage_Construction.svg.png' },
      { name: 'Dalkia',           logo: '/images/LogoPartenaires/Electricité/Logo_Dalkia.svg.png' },
      { name: "Cit'éos",          logo: '/images/LogoPartenaires/Electricité/citeos.webp' },
      { name: 'Veolia',           logo: '/images/LogoPartenaires/Electricité/veolialogo.png' },
      { name: 'Fauché',           logo: '/images/LogoPartenaires/Electricité/FAUCHE_logo.png' },
      { name: 'Spie Batignolles', logo: '/images/LogoPartenaires/Electricité/Spie_Batignolles_Logo.svg.png' },
      { name: 'BYES',             logo: '/images/LogoPartenaires/Electricité/BYES_logo_rvb-1.png' },
    ],
  },
]

export default function InternationalClient() {
  const { t } = useLanguage()

  const locations: MapLocation[] = [
    {
      id: 'algerie',
      city: 'Bir Mourad Raïs',
      country: 'Algérie',
      flag: '🇩🇿',
      address: 'Chemin Sidi Yahia, Résidence Coloris, Bir Mourad Raïs 16005, Alger',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=P2QX%2B983+Hydra+Algeria',
      phone: '+213 549 48 00 97',
      email: 'contact@gpealgerie.com',
      website: 'https://gpealgerie.com/',
      role: t('map.role.head'),
      coords: [36.7478, 3.0362],
    },
    {
      id: 'vitrolles',
      city: 'Vitrolles',
      country: 'France',
      flag: '🇫🇷',
      address: "92 Boulevard de l'Europe, 13127 Vitrolles",
      phone: '+33 4 42 07 22 62',
      email: 'contact@gpefrance.eu',
      website: 'https://www.gpefrance.eu/',
      role: t('map.role.france'),
      coords: [43.4547, 5.2483],
    },
    {
      id: 'saudi',
      city: 'Riyadh',
      country: 'Arabie Saoudite',
      flag: '🇸🇦',
      address: 'King Fahd District, Riyadh',
      phone: '+966 50 859 6539',
      email: 'contact@gpe-gulf.com',
      website: 'https://gpe-gulf.com/',
      role: t('map.role.regional'),
      coords: [24.7136, 46.6753],
    },
  ]

  const stats = [
    { value: '3', labelKey: 'international.stat.0' },
    { value: '8+', labelKey: 'international.stat.1' },
    { value: '50+', labelKey: 'international.stat.2' },
    { value: '15', labelKey: 'international.stat.3' },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">

  {/* Background image */}
  <div className="absolute inset-0">
    <Image
      src="/images/kawkab.jpeg"
      alt="International"
      fill
      priority
      className="object-cover object-[center_30%]"
    />

    {/* Gradient overlay brand */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#1faf5a]/70 via-black/55 to-[#c6ff00]/25" />

    {/* Glow effects */}
    <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#1faf5a]/20 blur-3xl rounded-full" />
    <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#c6ff00]/20 blur-3xl rounded-full" />

    {/* 🔥 FADE BAS VERS BLANC (IMPORTANT) */}
    <div className="absolute bottom-0 left-0 w-full h-56 bg-gradient-to-t from-white via-white/70 to-transparent" />
  </div>

  {/* Content */}
  <div className="relative section-padding container-max w-full">

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl"
    >
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#c6ff00] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-[#c6ff00]" />
        {t('international.hero.label')}
      </span>

      <h1 className="heading-display text-5xl md:text-7xl text-white leading-tight">
        {t('international.hero.title')}
      </h1>

      <p className="mt-6 text-neutral-200 text-lg leading-relaxed max-w-2xl">
        {t('international.hero.sub')}
      </p>
    </motion.div>

    {/* Stats */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6"
    >
      {stats.map((s) => (
        <div
          key={s.labelKey}
          className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
        >
          <div className="text-3xl font-bold text-white" dir="ltr">{s.value}</div>
          <div className="mt-1 text-xs text-neutral-300 uppercase tracking-wider font-semibold">
            {t(s.labelKey)}
          </div>
        </div>
      ))}
    </motion.div>

  </div>

</section>

      {/* Interactive map */}
      <section className="py-24 bg-white">
        <div className="section-padding container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="label-tag">{t('international.locations.title')}</span>
            <h2 className="heading-display text-4xl md:text-5xl text-neutral-950 mt-4 leading-tight">
              {t('international.map.title')}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <InteractiveMap locations={locations} height={460} />
          </motion.div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 bg-neutral-50 border-t border-neutral-100">
        <div className="section-padding container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="label-tag">{t('international.partners.title')}</span>
            <h2 className="heading-display text-4xl md:text-5xl text-neutral-950 mt-4">
              {t('international.partners.subtitle')}
            </h2>
          </motion.div>

          <div className="space-y-14">
            {partnerCategories.map((cat, catIdx) => (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              >
                {/* Category label */}
                <div className="flex items-center gap-3 mb-7">
                  <span className="w-1 h-5 rounded-full bg-[#1faf5a] flex-shrink-0" />
                  <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-neutral-500">
                    {t(cat.labelKey)}
                  </h3>
                  <span className="flex-1 h-px bg-neutral-200" />
                </div>

                {/* Logo grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {cat.partners.map((partner, i) => (
                    <motion.div
                      key={partner.name}
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.28, delay: i * 0.04 }}
                      className="group relative flex flex-col items-center justify-center gap-3 px-5 py-6 bg-white border border-neutral-200 rounded-2xl hover:-translate-y-1 hover:border-[#1faf5a]/50 hover:shadow-[0_8px_32px_rgba(31,175,90,0.15)] transition-all duration-300 cursor-default"
                    >
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-[#1faf5a]/10 blur-xl" />
                      <div className="relative w-full h-12">
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          fill
                          className="object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                     
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications marquee */}
      <section className="py-16 bg-white border-t border-neutral-100">
        <div className="section-padding container-max mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="label-tag">{t('international.certs.title')}</span>
            <h2 className="heading-display text-4xl md:text-5xl text-neutral-950 mt-4">
              {t('international.certs.subtitle')}
            </h2>
          </motion.div>
        </div>
        <CertificationsMarquee />
      </section>
    </>
  )
}
