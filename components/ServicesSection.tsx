'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/lib/services'
import ServiceIcon from './ServiceIcon'
import { useLanguage } from '@/context/LanguageContext'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section id="services" className="py-32 bg-white">
      <div className="section-padding container-max">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="label-tag">{t('services.label')}</span>

          <h2 className="heading-display text-4xl md:text-5xl text-neutral-950 mt-5 leading-tight">
            {t('services.title').split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </h2>

          <p className="mt-5 text-neutral-500 text-lg leading-relaxed">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.slug}
              variants={cardVariants}
              className="group relative bg-white rounded-3xl overflow-hidden border border-neutral-150 hover:border-neutral-200 hover:shadow-xl hover:shadow-neutral-100 transition-all duration-500 min-h-[440px]"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Icon badge */}
                <div
                  className="absolute bottom-4 left-4 w-11 h-11 rounded-xl flex items-center justify-center shadow-md"
                  style={{ backgroundColor: service.color }}
                >
                  <ServiceIcon name={service.icon} size={18} color="white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold text-neutral-900 text-lg leading-snug">
                  {t(service.title)}
                </h3>

                <p className="mt-3 text-sm text-neutral-500 leading-relaxed line-clamp-3">
                  {t(service.shortDesc)}
                </p>

                <Link
                  href={`/services/${service.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400 hover:text-brand-500 transition-colors"
                >
                  {t('services.learnMore')}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="group-hover:translate-x-0.5 transition-transform"
                  >
                    <path
                      d="M3 7h8M8 4l3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}