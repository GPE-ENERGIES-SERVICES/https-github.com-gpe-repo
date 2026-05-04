'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/lib/projects'
import { useLanguage } from '@/context/LanguageContext'

const clients = [
  { name: 'Soltyce',           logo: '/images/logoPartenaires/PV/solstyce.jpg' },
  { name: 'Voltalia',          logo: '/images/logoPartenaires/PV/Voltalia.png' },
  { name: 'Enerlis',           logo: '/images/logoPartenaires/PV/enerlis.png' },
  { name: 'Enoe',              logo: '/images/logoPartenaires/PV/enoe.jpg' },
  { name: 'Apex Énergie',      logo: '/images/logoPartenaires/PV/apex.png' },
  { name: 'EDF Solaire',       logo: '/images/logoPartenaires/PV/edfsolaire.png' },
  { name: 'Engie',             logo: '/images/logoPartenaires/PV/engie.png' },
  { name: 'EDF Renouvelables', logo: '/images/logoPartenaires/PV/edfrenouvelables.png' },
  { name: 'Les Mousquetaires', logo: '/images/logoPartenaires/PV/mousquetaires.png' },
  { name: 'Circet France',     logo: '/images/logoPartenaires/IRVE/circet.jpg' },
  { name: 'Carrefour',         logo: '/images/logoPartenaires/IRVE/Logo_Carrefour.svg.png' },
  { name: 'WAAT',              logo: '/images/logoPartenaires/IRVE/Logo-MyWAAT-couleur-2023.png' },
  { name: 'Izivia',            logo: '/images/logoPartenaires/IRVE/izivia.webp' },
  { name: 'Ensio',             logo: '/images/logoPartenaires/IRVE/LOGO-Ensio_RVB.webp' },
  { name: 'ENEDIS',            logo: '/images/logoPartenaires/IRVE/Logo_enedis_header.png' },
  { name: 'Beev',              logo: '/images/logoPartenaires/IRVE/beev.png' },
  { name: 'Driveco',           logo: '/images/logoPartenaires/IRVE/driveco.webp' },
  { name: 'Bouygues',          logo: '/images/logoPartenaires/Electricité/Bouygues_Construction_logo.svg.png' },
  { name: 'VINCI',             logo: '/images/logoPartenaires/Electricité/Logo_Vinci.svg.png' },
  { name: 'EQUANS',            logo: '/images/logoPartenaires/Electricité/Equans_Logo.png' },
  { name: 'EIFFAGE',           logo: '/images/logoPartenaires/Electricité/Logo_Eiffage_Construction.svg.png' },
  { name: 'Dalkia',            logo: '/images/logoPartenaires/Electricité/Logo_Dalkia.svg.png' },
  { name: "Cit'éos",           logo: '/images/logoPartenaires/Electricité/citeos.webp' },
  { name: 'Veolia',            logo: '/images/logoPartenaires/Electricité/veolialogo.png' },
  { name: 'Fauché',            logo: '/images/logoPartenaires/Electricité/FAUCHE_logo.png' },
  { name: 'Spie Batignolles',  logo: '/images/logoPartenaires/Electricité/Spie_Batignolles_Logo.svg.png' },
]

const marqueeItems = [...clients, ...clients]

const featured = projects.slice(0, 6)

export default function ReferencesSection() {
  const { t } = useLanguage()

  return (
    <section id="references" className="py-32 bg-white">
      <div className="section-padding container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 max-w-full"
        >
          <div className="max-w-2xl">
            <span className="label-tag">{t('references.label')}</span>
            <h2 className="heading-display text-4xl md:text-5xl text-neutral-950 mt-5">
              {t('references.title')}
            </h2>
            <p className="mt-5 text-neutral-500 text-lg">
              {t('references.subtitle')}
            </p>
          </div>
          <Link
            href="/realisations"
            className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-500 transition-colors"
          >
            {t('references.viewAll')}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>

        {/* Client logos marquee */}
        <div className="mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex animate-marquee">
            {marqueeItems.map((client, i) => (
              <div
                key={i}
                className="group flex-shrink-0 flex items-center justify-center h-20 px-6 mx-2 bg-white border border-neutral-150 rounded-2xl cursor-default transition-all duration-200 hover:border-[#1faf5a]/40 hover:shadow-[0_0_14px_rgba(31,175,90,0.14)]"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={140}
                  height={60}
                  className="object-contain h-10 w-auto max-w-[120px] opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Featured projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-lg font-semibold text-neutral-800 mb-8">{t('references.featured')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-150 hover:border-brand-100 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-brand-400" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-neutral-900">{project.title}</div>
                  <div className="text-xs text-neutral-400 mt-1">{project.location}</div>
                  <span className="mt-2 inline-block text-[10px] font-semibold text-brand-400 bg-brand-50 px-2 py-0.5 rounded-full border border-brand-100">
                    {project.serviceLabel}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA to full page */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link href="/realisations" className="btn-primary px-8 py-3.5">
            {t('references.cta')}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
