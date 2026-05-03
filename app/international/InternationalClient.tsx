'use client'

import { motion } from 'framer-motion'
import InteractiveMap, { type MapLocation } from '@/components/InteractiveMap'
import CertificationsMarquee from '@/components/CertificationsMarquee'
import { useLanguage } from '@/context/LanguageContext'

const locations: MapLocation[] = [
  {
    id: 'france',
    city: 'Vitrolles',
    country: 'France',
    flag: '🇫🇷',
    address: '92 Bd de l\'Europe ZA, 13127 Vitrolles',
    phone: '+33 4 42 07 22 62',
    role: 'Siège social',
    osmEmbed: 'https://www.openstreetmap.org/export/embed.html?bbox=5.22%2C43.40%2C5.30%2C43.44&layer=mapnik&marker=43.4212125%2C5.2639742',
  },
  {
    id: 'maroc',
    city: 'Casablanca',
    country: 'Maroc',
    flag: '🇲🇦',
    address: 'Twin Center, Tour Ouest, Casablanca 20100',
    phone: '+212 5 22 00 00 00',
    role: 'Bureau Maghreb',
    osmEmbed: 'https://www.openstreetmap.org/export/embed.html?bbox=-7.68%2C33.55%2C-7.51%2C33.60&layer=mapnik&marker=33.5731%2C-7.5898',
  },
  {
    id: 'senegal',
    city: 'Dakar',
    country: 'Sénégal',
    flag: '🇸🇳',
    address: 'Almadies Business Center, Dakar',
    phone: '+221 33 00 00 00',
    role: 'Bureau Afrique subsaharienne',
    osmEmbed: 'https://www.openstreetmap.org/export/embed.html?bbox=-17.52%2C14.65%2C-17.39%2C14.73&layer=mapnik&marker=14.6928%2C-17.4467',
  },
]

const partners = [
  { name: 'Engie', region: 'Europe' },
  { name: 'EDF Renouvelables', region: 'International' },
  { name: 'Vinci Energies', region: 'Europe & Afrique' },
  { name: 'Eiffage Énergie', region: 'Afrique' },
  { name: 'Schneider Electric', region: 'Mondial' },
  { name: 'Legrand', region: 'Mondial' },
  { name: 'ABB', region: 'Europe' },
  { name: 'Siemens Energy', region: 'Europe' },
  { name: 'TotalEnergies', region: 'Afrique' },
  { name: 'Meridiam', region: 'International' },
]

const stats = [
  { value: '3', label: 'Continents' },
  { value: '8+', label: 'Pays couverts' },
  { value: '50+', label: 'Projets internationaux' },
  { value: '15', label: 'Partenaires mondiaux' },
]

export default function InternationalClient() {
  const { t } = useLanguage()

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
              <div key={s.label} className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-bold text-white">{s.value}</div>
                <div className="mt-1 text-xs text-neutral-500 uppercase tracking-wider font-semibold">{s.label}</div>
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
              Une présence sur <br className="hidden sm:block" />3 continents.
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
              Des alliances stratégiques.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3"
          >
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="group flex flex-col items-center justify-center h-24 rounded-2xl bg-white border border-neutral-200 hover:border-brand-200 hover:shadow-md transition-all duration-300 cursor-default px-4"
              >
                <div className="text-sm font-bold text-neutral-700 group-hover:text-brand-500 transition-colors text-center leading-tight">
                  {partner.name}
                </div>
                <div className="text-[10px] text-neutral-400 mt-1 font-medium">{partner.region}</div>
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
              Certifiés. Reconnus. Fiables.
            </h2>
          </motion.div>
        </div>
        <CertificationsMarquee />
      </section>
    </>
  )
}
