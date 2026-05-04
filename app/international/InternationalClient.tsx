'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import InteractiveMap, { type MapLocation } from '@/components/InteractiveMap'
import CertificationsMarquee from '@/components/CertificationsMarquee'
import { useLanguage } from '@/context/LanguageContext'

const locations: MapLocation[] = [
  {
    id: 'france',
    city: 'Vitrolles',
    country: 'France',
    flag: '🇫🇷',
    address: "92 Bd de l'Europe ZA, 13127 Vitrolles",
    phone: '+33 4 42 07 22 62',
    role: 'Siège social',
    coords: [43.4212, 5.2640],
  },
  {
    id: 'algerie',
    city: 'Alger',
    country: 'Algérie',
    flag: '🇩🇿',
    address: 'Hydra, Alger',
    phone: '+213 21 22 14 15',
    role: 'Bureau régional',
    coords: [36.7538, 3.0588],
  },
  {
    id: 'saudi',
    city: 'Riyadh',
    country: 'Arabie Saoudite',
    flag: '🇸🇦',
    address: 'King Fahd District, Riyadh',
    phone: '+966 11 000 00 00',
    role: 'Bureau régional',
    coords: [24.7136, 46.6753],
  },
]

const partnerCategories = [
  {
    label: 'PV',
    badgeBg: 'bg-amber-50',
    badgeBorder: 'border-amber-200',
    badgeText: 'text-amber-700',
    dotColor: 'bg-amber-400',
    partners: [
      { name: 'Soltyce',           logo: '/images/logoPartenaires/PV/solstyce.jpg' },
      { name: 'Voltalia',          logo: '/images/logoPartenaires/PV/Voltalia.png' },
      { name: 'Enerlis',           logo: '/images/logoPartenaires/PV/enerlis.png' },
      { name: 'Enoe',              logo: '/images/logoPartenaires/PV/enoe.jpg' },
      { name: 'Apex Énergie',      logo: '/images/logoPartenaires/PV/apex.png' },
      { name: 'EDF Solaire',       logo: '/images/logoPartenaires/PV/edfsolaire.png' },
      { name: 'Engie',             logo: '/images/logoPartenaires/PV/engie.png' },
      { name: 'EDF Renouvelables', logo: '/images/logoPartenaires/PV/edfrenouvelables.png' },
      { name: 'Les Mousquetaires', logo: '/images/logoPartenaires/PV/mousquetaires.png' },
    ],
  },
  {
    label: 'IRVE',
    badgeBg: 'bg-blue-50',
    badgeBorder: 'border-blue-200',
    badgeText: 'text-blue-700',
    dotColor: 'bg-blue-400',
    partners: [
      { name: 'Circet France', logo: '/images/logoPartenaires/IRVE/circet.jpg' },
      { name: 'Carrefour',     logo: '/images/logoPartenaires/IRVE/Logo_Carrefour.svg.png' },
      { name: 'WAAT',          logo: '/images/logoPartenaires/IRVE/Logo-MyWAAT-couleur-2023.png' },
      { name: 'Izivia',        logo: '/images/logoPartenaires/IRVE/izivia.webp' },
      { name: 'Ensio',         logo: '/images/logoPartenaires/IRVE/LOGO-Ensio_RVB.webp' },
      { name: 'ENEDIS',        logo: '/images/logoPartenaires/IRVE/Logo_enedis_header.png' },
      { name: 'Beev',          logo: '/images/logoPartenaires/IRVE/beev.png' },
      { name: 'Driveco',       logo: '/images/logoPartenaires/IRVE/driveco.webp' },
    ],
  },
  {
    label: 'Électricité',
    badgeBg: 'bg-[#1faf5a]/8',
    badgeBorder: 'border-[#1faf5a]/20',
    badgeText: 'text-[#1faf5a]',
    dotColor: 'bg-[#1faf5a]',
    partners: [
      { name: 'Bouygues',         logo: '/images/logoPartenaires/Electricité/Bouygues_Construction_logo.svg.png' },
      { name: 'VINCI',            logo: '/images/logoPartenaires/Electricité/Logo_Vinci.svg.png' },
      { name: 'EQUANS',           logo: '/images/logoPartenaires/Electricité/Equans_Logo.png' },
      { name: 'EIFFAGE',          logo: '/images/logoPartenaires/Electricité/Logo_Eiffage_Construction.svg.png' },
      { name: 'Dalkia',           logo: '/images/logoPartenaires/Electricité/Logo_Dalkia.svg.png' },
      { name: "Cit'éos",          logo: '/images/logoPartenaires/Electricité/citeos.webp' },
      { name: 'Veolia',           logo: '/images/logoPartenaires/Electricité/veolialogo.png' },
      { name: 'Fauché',           logo: '/images/logoPartenaires/Electricité/FAUCHE_logo.png' },
      { name: 'Spie Batignolles', logo: '/images/logoPartenaires/Electricité/Spie_Batignolles_Logo.svg.png' },
    ],
  },
]

export default function InternationalClient() {
  const { t } = useLanguage()

  const stats = [
    { value: '3', labelKey: 'international.stat.0' },
    { value: '8+', labelKey: 'international.stat.1' },
    { value: '50+', labelKey: 'international.stat.2' },
    { value: '15', labelKey: 'international.stat.3' },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 bg-neutral-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(31,175,90,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(198,255,0,0.05),transparent_50%)]" />

        <div className="relative section-padding container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-accent-lime bg-white/5 border border-white/10 px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-lime" />
              {t('international.hero.label')}
            </span>
            <h1 className="heading-display text-5xl md:text-7xl text-white leading-tight">
              {t('international.hero.title')}
            </h1>
            <p className="mt-6 text-neutral-400 text-lg leading-relaxed max-w-2xl">
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
              <div key={s.labelKey} className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-bold text-white">{s.value}</div>
                <div className="mt-1 text-xs text-neutral-500 uppercase tracking-wider font-semibold">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {partnerCategories.map((cat) => (
              <div key={cat.label} className="bg-white rounded-3xl border border-neutral-150 shadow-sm overflow-hidden">
                {/* Category header */}
                <div className="px-6 py-5 border-b border-neutral-100">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border ${cat.badgeBg} ${cat.badgeBorder} ${cat.badgeText}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${cat.dotColor}`} />
                    {cat.label}
                  </span>
                </div>
                {/* Partner list */}
                <div className="divide-y divide-neutral-50">
                  {cat.partners.map((partner) => (
                    <div
                      key={partner.name}
                      className="group flex items-center justify-center px-6 py-4 hover:bg-[#1faf5a]/4 transition-colors cursor-default"
                    >
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={140}
                        height={60}
                        className="object-contain h-8 w-auto max-w-[130px] opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
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
