'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/lib/projects'
import { useLanguage } from '@/context/LanguageContext'

const clients = [
  { name: 'Soltyce',           logo: '/images/LogoPartenaires/PV/solstyce.jpg' },
  { name: 'Voltalia',          logo: '/images/LogoPartenaires/PV/Voltalia.png' },
  { name: 'Enerlis',           logo: '/images/LogoPartenaires/PV/enerlis.png' },
  { name: 'Enoe',              logo: '/images/LogoPartenaires/PV/enoe.png' },
  { name: 'Apex Énergie',      logo: '/images/LogoPartenaires/PV/apex.png' },
  { name: 'EDF Solaire',       logo: '/images/LogoPartenaires/PV/edfsolaire.png' },
  { name: 'Engie',             logo: '/images/LogoPartenaires/PV/engie.png' },
  { name: 'EDF Renouvelables', logo: '/images/LogoPartenaires/PV/edfrenouvelables.png' },
  { name: 'Les Mousquetaires', logo: '/images/LogoPartenaires/PV/mousquetaires.png' },
  { name: 'Eiffage Énergie',   logo: '/images/LogoPartenaires/PV/eiffageenergie.png' },
  { name: 'Circet France',     logo: '/images/LogoPartenaires/IRVE/circet.jpg' },
  { name: 'Carrefour',         logo: '/images/LogoPartenaires/IRVE/Logo_Carrefour.svg.png' },
  { name: 'WAAT',              logo: '/images/LogoPartenaires/IRVE/Logo-MyWAAT-couleur-2023.png' },
  { name: 'Izivia',            logo: '/images/LogoPartenaires/IRVE/izivia.webp' },
  { name: 'Ensio',             logo: '/images/LogoPartenaires/IRVE/LOGO-Ensio_RVB.webp' },
  { name: 'ENEDIS',            logo: '/images/LogoPartenaires/IRVE/Logo_enedis_header.png' },
  { name: 'Beev',              logo: '/images/LogoPartenaires/IRVE/beev.png' },
  { name: 'Driveco',           logo: '/images/LogoPartenaires/IRVE/driveco.png' },
  { name: 'Stations-E',        logo: '/images/LogoPartenaires/IRVE/logo-stations-e2.png' },
  { name: 'Dalkia Electronics', logo: '/images/LogoPartenaires/IRVE/dalkiaelectronics.png' },
  { name: 'Bouygues',          logo: '/images/LogoPartenaires/Electricité/bouygues_construction.png' },
  { name: 'BYES',              logo: '/images/LogoPartenaires/Electricité/BYES_logo_rvb-1.png' },
  { name: 'VINCI',             logo: '/images/LogoPartenaires/Electricité/Logo_Vinci.svg.png' },
  { name: 'EQUANS',            logo: '/images/LogoPartenaires/Electricité/Equans_Logo.png' },
  { name: 'EIFFAGE',           logo: '/images/LogoPartenaires/Electricité/Logo_Eiffage_Construction.svg.png' },
  { name: 'Dalkia',            logo: '/images/LogoPartenaires/Electricité/Logo_Dalkia.svg.png' },
  { name: "Cit'éos",           logo: '/images/LogoPartenaires/Electricité/citeos.webp' },
  { name: 'Veolia',            logo: '/images/LogoPartenaires/Electricité/veolialogo.png' },
  { name: 'Fauché',            logo: '/images/LogoPartenaires/Electricité/FAUCHE_logo.png' },
  { name: 'Spie Batignolles',  logo: '/images/LogoPartenaires/Electricité/Spie_Batignolles_Logo.svg.png' },
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
        <div className="mt-16 py-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
  <div className="flex animate-marquee">
    {marqueeItems.map((client, i) => (
      <div
        key={i}
        className="group relative flex-shrink-0 flex items-center justify-center h-40 w-60 mx-4 bg-white border border-neutral-200 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[#1faf5a]/50 hover:shadow-[0_10px_40px_rgba(31,175,90,0.18)]"
      >
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-[#1faf5a]/10 blur-2xl" />
        
        <div className="relative w-full h-full flex items-center justify-center p-6">
          {client.logo && (
            <Image
              src={client.logo}
              alt={client.name || 'Logo partenaire'}
              fill
              className="object-contain p-5 transition duration-300 group-hover:scale-105"
            />
          )}
        </div>
      </div>
    ))}
  </div>
</div>

        {/* Featured projects */}


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
