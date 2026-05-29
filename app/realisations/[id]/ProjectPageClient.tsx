'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/lib/projects'
import { projects, serviceLabels } from '@/lib/projects'
import { useLanguage } from '@/context/LanguageContext'

const serviceColors: Record<string, string> = {
  'courants-forts-faibles': '#6366f1',
  'energies-renouvelables': '#f59e0b',
  'mobilite-electrique': '#1FAF5A',
  'renovation-energetique': '#10b981',
  'chauffage-climatisation': '#ef4444',
  'bureau-etudes': '#1FAF5A',
}

interface Props {
  project: Project
}

export default function ProjectPageClient({ project }: Props) {
  const { t } = useLanguage()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const color = serviceColors[project.serviceSlug] ?? '#1FAF5A'

  const related = projects
    .filter(p => p.serviceSlug === project.serviceSlug && p.id !== project.id)
    .slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden pt-24">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-950/20" />
        </div>

        <div className="relative section-padding container-max w-full pb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M11 7H3M6 4L3 7l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {t('realisations.label')}
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full text-white"
                style={{ backgroundColor: color }}
              >
                {project.serviceLabel}
              </span>
              <span className="text-white/50 text-sm">{project.year}</span>
            </div>

            <h1 className="heading-display text-3xl md:text-5xl text-white leading-tight max-w-3xl">
              {project.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-white/60 text-sm">
              <span className="flex items-center gap-1.5">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                {project.location}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="section-padding container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Description + Gallery */}
            <div className="lg:col-span-2 space-y-12">

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="label-tag">Présentation du projet</span>
                <div className="mt-5 prose prose-neutral max-w-none">
                  {project.longDescription.split('\n').map((para, i) => (
                    <p key={i} className="text-neutral-600 leading-relaxed text-base mb-4">
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Photo gallery */}
              {project.gallery.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="font-semibold text-neutral-900 text-xl mb-5">Photos de réalisation</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {project.gallery.map((src, i) => (
                      <button
                        key={i}
                        onClick={() => setLightboxIndex(i)}
                        className={`group relative overflow-hidden rounded-2xl cursor-zoom-in ${
                          i === 0 ? 'col-span-2 h-72' : 'h-44'
                        }`}
                      >
                        <Image
                          src={src}
                          alt={`${project.title} — photo ${i + 1}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-lg p-1.5">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                          </svg>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="sticky top-28 space-y-5"
              >
                {/* Project info card */}
                <div className="bg-neutral-50 rounded-3xl p-6 border border-neutral-150 space-y-4">
                  <h3 className="font-semibold text-neutral-900 text-sm uppercase tracking-wider">
                    Fiche projet
                  </h3>

                  {[
                    { label: 'Localisation', value: project.location },
                    { label: 'Année', value: String(project.year) },
                    { label: 'Domaine', value: serviceLabels[project.serviceSlug] ?? project.serviceLabel },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex flex-col gap-0.5 border-t border-neutral-200 pt-3 first:border-0 first:pt-0">
                      <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">{label}</span>
                      <span className="text-sm font-semibold text-neutral-800">{value}</span>
                    </div>
                  ))}

                  <div className="border-t border-neutral-200 pt-3">
                    <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Tags</span>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium px-2.5 py-0.5 rounded-full text-white"
                          style={{ backgroundColor: color }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-neutral-950 rounded-3xl p-6 text-white">
                  <h3 className="font-semibold text-base leading-snug">
                    Un projet similaire ?
                  </h3>
                  <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                    Obtenez une étude personnalisée sous 24h.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 btn-primary w-full justify-center text-sm"
                  >
                    Nous contacter
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="py-16 bg-white border-t border-neutral-100">
          <div className="section-padding container-max">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-semibold text-neutral-800 text-lg">Projets similaires</h3>
              <Link
                href={`/realisations?service=${project.serviceSlug}`}
                className="text-sm font-semibold text-brand-400 hover:text-brand-500 transition-colors flex items-center gap-1"
              >
                Voir tous
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={`/realisations/${p.id}`}
                    className="group block rounded-2xl overflow-hidden border border-neutral-150 bg-white hover:border-neutral-200 hover:shadow-md transition-all duration-300"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white/80 uppercase tracking-wider">
                        {p.year}
                      </span>
                    </div>
                    <div className="p-4">
                      <div className="font-semibold text-sm text-neutral-900 leading-snug">{p.title}</div>
                      <div className="text-xs text-neutral-400 mt-1">{p.location}</div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setLightboxIndex(null)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>

            {lightboxIndex > 0 && (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(i => (i! - 1 + project.gallery.length) % project.gallery.length) }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
            )}

            {lightboxIndex < project.gallery.length - 1 && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(i => (i! + 1) % project.gallery.length) }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            )}

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl max-h-[85vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={project.gallery[lightboxIndex]}
                alt={`${project.title} — photo ${lightboxIndex + 1}`}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {project.gallery.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(i) }}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    i === lightboxIndex ? 'bg-white w-4' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
