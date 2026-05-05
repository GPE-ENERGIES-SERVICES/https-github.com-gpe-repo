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
        <div className="mt-16 py-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
  <div className="flex animate-marquee">
    {marqueeItems.map((client, i) => (
      <div
        key={i}
        className="group relative flex-shrink-0 flex items-center justify-center h-40 w-60 mx-4 bg-white border border-neutral-200 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[#1faf5a]/50 hover:shadow-[0_10px_40px_rgba(31,175,90,0.18)]"
      >
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-[#1faf5a]/10 blur-2xl" />
        
        <div className="relative w-full h-full flex items-center justify-center p-6">
          <Image
            src={client.logo}
            alt={client.name}
            fill
            className="object-contain p-5 transition duration-300 group-hover:scale-105"
          />
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
