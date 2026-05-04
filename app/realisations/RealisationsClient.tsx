'use client'

import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { projects, serviceLabels } from '@/lib/projects'
import { useLanguage } from '@/context/LanguageContext'

const ALL = 'all'

const serviceColors: Record<string, string> = {
  'courants-forts': '#1FAF5A',
  'courants-faibles': '#6366f1',
  'energies-renouvelables': '#f59e0b',
  'mobilite-electrique': '#C6FF00',
  'renovation-energetique': '#10b981',
  'chauffage-climatisation': '#ef4444',
  'vrd': '#8b5cf6',
  'bureau-etudes': '#1FAF5A',
}

export default function RealisationsClient() {
  const { t } = useLanguage()
  const searchParams = useSearchParams()
  const [activeFilter, setActiveFilter] = useState(ALL)

  useEffect(() => {
    const service = searchParams.get('service')
    if (service && serviceLabels[service]) setActiveFilter(service)
  }, [searchParams])

  const slugs = useMemo(() => Array.from(new Set(projects.map(p => p.serviceSlug))), [])

  const filtered = useMemo(
    () => activeFilter === ALL ? projects : projects.filter(p => p.serviceSlug === activeFilter),
    [activeFilter]
  )

  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-16 bg-white border-b border-neutral-100">
        <div className="section-padding container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="label-tag">{t('realisations.label')}</span>
            <h1 className="heading-display text-5xl md:text-6xl text-neutral-950 mt-4 leading-tight">
              {t('realisations.title')}
            </h1>
            <p className="mt-5 text-neutral-500 text-lg leading-relaxed max-w-2xl">
              {t('realisations.sub')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-16 z-30 bg-white/90 backdrop-blur-md border-b border-neutral-100 py-4">
        <div className="section-padding container-max">
          <div className="flex flex-wrap gap-2 items-center">
            <button
              onClick={() => setActiveFilter(ALL)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === ALL
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              {t('realisations.all')}
              <span className="ms-1.5 text-xs opacity-60">({projects.length})</span>
            </button>

            {slugs.map((slug) => {
              const count = projects.filter(p => p.serviceSlug === slug).length
              const isActive = activeFilter === slug
              return (
                <button
                  key={slug}
                  onClick={() => setActiveFilter(slug)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white shadow-sm'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                  }`}
                  style={isActive ? { backgroundColor: serviceColors[slug] ?? '#1FAF5A' } : {}}
                >
                  {serviceLabels[slug]}
                  <span className="ms-1.5 text-xs opacity-60">({count})</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-16 bg-neutral-50 min-h-[60vh]">
        <div className="section-padding container-max">
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-neutral-400 text-center py-20"
              >
                {t('realisations.empty')}
              </motion.p>
            ) : (
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filtered.map((project, i) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                  >
                    <Link
                      href={`/realisations/${project.id}`}
                      className="group block bg-white rounded-3xl overflow-hidden border border-neutral-150 hover:border-neutral-200 hover:shadow-xl hover:shadow-neutral-100 transition-all duration-500"
                    >
                      {/* Image */}
                      <div className="relative h-52 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-3 start-3 flex items-center gap-2">
                          <span
                            className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-white"
                            style={{ backgroundColor: serviceColors[project.serviceSlug] ?? '#1FAF5A' }}
                          >
                            {project.serviceLabel}
                          </span>
                          <span className="text-[10px] font-semibold text-white/80">{project.year}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h2 className="font-semibold text-neutral-900 text-base leading-snug group-hover:text-brand-400 transition-colors">
                          {project.title}
                        </h2>
                        <div className="mt-1.5 flex items-center gap-1.5 text-xs text-neutral-400 font-medium">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                          </svg>
                          {project.location}
                          <span className="text-neutral-200 mx-0.5">·</span>
                          {project.client}
                        </div>
                        <p className="mt-3 text-sm text-neutral-500 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {project.tags.map(tag => (
                            <span
                              key={tag}
                              className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-500"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-brand-400 group-hover:gap-2 transition-all">
                          Voir le projet
                          <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutral-950 text-white">
        <div className="section-padding container-max text-center">
          <h2 className="heading-display text-4xl md:text-5xl">{t('realisations.cta.title')}</h2>
          <p className="mt-4 text-neutral-400 text-lg max-w-xl mx-auto">
            {t('realisations.cta.subtitle')}
          </p>
          <Link href="/contact" className="mt-8 btn-primary text-base px-8 py-4 inline-flex">
            {t('realisations.cta.button')}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M10 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
