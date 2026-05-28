'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type { Service } from '@/lib/services'
import ServiceIcon from '@/components/ServiceIcon'
import { services } from '@/lib/services'
import { getProjectsByService } from '@/lib/projects'
import { useLanguage } from '@/context/LanguageContext'

// ─── Certifications par service ──────────────────────────────────────────────

type Certification = {
  title: string
  image: string
  description: string
}

const CERTIFICATIONS_BY_SERVICE: Record<string, Certification[]> = {
  'courants-forts-faibles': [
    {
      title: 'Qualifelec',
      image: '/images/Certifications/qualifelec.png',
      description: "Qualification des entreprises d'électricité",
    },
    {
      title: 'AFNOR',
      image: '/images/Certifications/AFNOR-removebg-preview.png',
      description: 'Certification qualité et conformité normative',
    },
    {
      title: 'OPQIBI',
      image: '/images/Certifications/opqibi-1-1280x560-removebg-preview.png',
      description: "Qualification de l'ingénierie électrique",
    },
  ],
  'bureau-etudes': [
    {
      title: 'AFNOR',
      image: '/images/Certifications/AFNOR-removebg-preview.png',
      description: 'Certification qualité et conformité normative',
    },
    {
      title: 'OPQIBI',
      image: '/images/Certifications/opqibi-1-1280x560-removebg-preview.png',
      description: "Qualification des bureaux d'études et de l'ingénierie",
    },
  ],
  'mobilite-electrique': [
    {
      title: 'Qualifelec',
      image: '/images/Certifications/qualifelec.png',
      description: 'Qualification IRVE pour les bornes de recharge',
    },
    {
      title: 'AFNOR',
      image: '/images/Certifications/AFNOR-removebg-preview.png',
      description: 'Certification qualité et conformité normative',
    },
    {
      title: 'OPQIBI',
      image: '/images/Certifications/opqibi-1-1280x560-removebg-preview.png',
      description: "Qualification de l'ingénierie",
    },
  ],
  'renovation-energetique': [
    {
      title: 'QualiPAC',
      image: '/images/Certifications/logo-qualipac.png',
      description: 'Qualification RGE pour la rénovation énergétique',
    },
    {
      title: 'Qualifelec',
      image: '/images/Certifications/qualifelec.png',
      description: 'Certification entreprise qualifiée RGE',
    },
    {
      title: 'AFNOR',
      image: '/images/Certifications/AFNOR-removebg-preview.png',
      description: 'Certification qualité et conformité normative',
    },
  ],
  'chauffage-climatisation': [
    {
      title: 'QualiPAC',
      image: '/images/Certifications/logo-qualipac.png',
      description: 'Qualification pompes à chaleur et systèmes thermiques',
    },
    {
      title: 'Qualifelec',
      image: '/images/Certifications/qualifelec.png',
      description: 'Certification des installateurs',
    },
    {
      title: 'AFNOR',
      image: '/images/Certifications/AFNOR-removebg-preview.png',
      description: 'Certification qualité et conformité normative',
    },
  ],
  'gtb-knx': [
    {
      title: 'Qualifelec',
      image: '/images/Certifications/qualifelec.png',
      description: "Qualification des entreprises d'électricité et GTB",
    },
    {
      title: 'AFNOR',
      image: '/images/Certifications/AFNOR-removebg-preview.png',
      description: 'Certification qualité et conformité normative',
    },
    {
      title: 'OPQIBI',
      image: '/images/Certifications/opqibi-1-1280x560-removebg-preview.png',
      description: "Qualification de l'ingénierie technique du bâtiment",
    },
  ],
}

const CERTIFICATIONS_SUBTITLE_BY_SERVICE: Record<string, string> = {
  'courants-forts-faibles':
    'Nos qualifications certifient notre expertise en installations électriques courants forts et faibles.',
  'bureau-etudes':
    'Nos certifications garantissent la rigueur méthodologique et la qualité de nos études techniques.',
  'mobilite-electrique':
    'Nos qualifications IRVE certifient la conformité et la sécurité de vos infrastructures de recharge.',
  'renovation-energetique':
    "Nos certifications RGE vous donnent accès aux aides financières et garantissent la qualité des travaux.",
  'chauffage-climatisation':
    'Nos qualifications garantissent des installations thermiques conformes aux normes en vigueur.',
  'gtb-knx':
    'Nos qualifications garantissent la maîtrise technique et la conformité de nos installations GTB/KNX.',
}

interface Props {
  service: Service
}

export default function ServicePageClient({ service }: Props) {
  const { t } = useLanguage()
  const related = services.filter(s => s.slug !== service.slug).slice(0, 3)
  const serviceProjects = getProjectsByService(service.slug)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden pt-24">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={t(service.title)}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-950/20" />
        </div>

        <div className="relative section-padding container-max w-full pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M11 7H3M6 4L3 7l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {t('service.back')}
            </Link>

            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
              style={{ backgroundColor: service.color }}
            >
              <ServiceIcon name={service.icon} size={22} color="white" />
            </div>

            <h1 className="heading-display text-4xl md:text-6xl text-white leading-tight">
              {t(service.title)}
            </h1>
            <p className="mt-4 text-lg text-white/70 max-w-2xl leading-relaxed">
              {t(service.shortDesc)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="section-padding container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-14">

              {/* Intro */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="label-tag">{t('service.expertise.label')}</span>
                <h2 className="heading-display text-3xl md:text-4xl text-neutral-950 mt-4 mb-8 leading-tight">
                  {t('service.expertise.title')}
                </h2>
                <p
                  className="text-lg text-neutral-600 leading-relaxed pl-5 py-1 border-l-4 rounded-sm"
                  style={{ borderColor: service.color }}
                >
                  {service.intro}
                </p>
              </motion.div>

              {/* Sections */}
              {service.sections.map((section, i) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  {/* Section header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${service.color}15` }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={service.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900">{section.title}</h3>
                  </div>

                  {/* Items grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {section.items.map((item) => (
                      <div
                        key={item}
                        className="group flex items-start gap-3 p-4 bg-neutral-50 border border-neutral-200 rounded-xl hover:bg-white hover:border-[#1faf5a]/30 hover:shadow-[0_4px_20px_rgba(31,175,90,0.08)] transition-all duration-200"
                      >
                        <div
                          className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${service.color}20` }}
                        >
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-5" stroke={service.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-neutral-700 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}

            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="sticky top-28 space-y-5"
              >
                {/* CTA Card */}
                <div className="bg-neutral-950 rounded-3xl p-7 text-white">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: service.color }}
                  >
                    <ServiceIcon name={service.icon} size={18} color="white" />
                  </div>
                  <h3 className="font-semibold text-lg leading-snug">
                    {t('service.cta.prefix')} {t(service.title).toLowerCase()} {t('service.cta.suffix')}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                    {t('service.cta.subtitle')}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 btn-primary w-full justify-center text-sm"
                  >
                    {t('service.cta.quote')}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  <a
                    href="tel:+33442072262"
                    className="mt-3 btn-secondary w-full justify-center text-sm"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    {t('service.cta.call')}
                  </a>
                </div>

                
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      {(CERTIFICATIONS_BY_SERVICE[service.slug] ?? []).length > 0 && (() => {
        const certs = CERTIFICATIONS_BY_SERVICE[service.slug]!
        const gridCols =
          certs.length >= 5
            ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'
            : certs.length >= 3
            ? 'grid-cols-1 sm:grid-cols-3'
            : 'grid-cols-1 sm:grid-cols-2'
        return (
          <section className="py-24 bg-white border-t border-neutral-100">
            <div className="section-padding container-max">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl mb-14"
              >
                <span className="label-tag">Qualité & Conformité</span>
                <h2 className="heading-display text-4xl md:text-5xl text-neutral-950 mt-5 leading-tight">
                  Certifications &{' '}
                  <span style={{ color: service.color }}>Qualifications</span>
                </h2>
                <p className="mt-5 text-neutral-500 text-lg leading-relaxed">
                  {CERTIFICATIONS_SUBTITLE_BY_SERVICE[service.slug] ??
                    'Nos certifications garantissent la qualité et la conformité de nos prestations.'}
                </p>
              </motion.div>

              <div className={`grid ${gridCols} gap-6`}>
                {certs.map((cert, i) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="group relative flex flex-col items-center gap-4 p-7 bg-white rounded-2xl border border-neutral-200
                               hover:-translate-y-1.5 hover:border-[#a3e635]/40
                               hover:shadow-xl hover:shadow-[#2e5240]/8
                               transition-all duration-300 ease-in-out cursor-default"
                  >
                    {/* Glow overlay */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 rounded-2xl bg-[#a3e635]/5" />
                    </div>

                    {/* Logo en couleur */}
                    <div className="relative h-16 w-full flex items-center justify-center">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        width={160}
                        height={64}
                        className="object-contain max-h-16 w-auto transition-all duration-300 group-hover:scale-[1.05]"
                      />
                    </div>

                    {/* Texte */}
                    <div className="relative text-center">
                      <div className="text-sm font-semibold text-neutral-800">{cert.title}</div>
                      <div className="text-xs text-neutral-500 mt-1 leading-relaxed">
                        {cert.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )
      })()}

      {/* Related projects */}
      {serviceProjects.length > 0 && (
        <section className="py-16 bg-white border-t border-neutral-100">
          <div className="section-padding container-max">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-semibold text-neutral-800 text-lg">{t('service.projects.title')}</h3>
              <Link
                href={`/realisations?service=${service.slug}`}
                className="text-sm font-semibold text-brand-400 hover:text-brand-500 transition-colors flex items-center gap-1"
              >
                {t('service.projects.viewAll')}
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceProjects.slice(0, 3).map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="group rounded-2xl overflow-hidden border border-neutral-150 bg-neutral-50 hover:border-neutral-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-2 start-2 text-[10px] font-bold text-white/80 uppercase tracking-wider">
                      {project.year}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="font-semibold text-sm text-neutral-900 leading-snug">{project.title}</div>
                    <div className="text-xs text-neutral-400 mt-1">{project.location} · {project.client}</div>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {project.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-neutral-200 text-neutral-500">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related services */}
      <section className="py-16 bg-white border-t border-neutral-100">
        <div className="section-padding container-max">
          <h3 className="font-semibold text-neutral-800 text-lg mb-8">{t('service.related.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex items-center gap-4 p-5 bg-white rounded-2xl border border-neutral-150 hover:border-brand-200 hover:shadow-md transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${s.color}15` }}
                >
                  <ServiceIcon name={s.icon} size={18} color={s.color} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm text-neutral-900">{t(s.title)}</div>
                  <div className="text-xs text-neutral-500 mt-0.5 truncate">{t(s.shortDesc).substring(0, 50)}…</div>
                </div>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-neutral-400 group-hover:text-brand-400 transition-colors flex-shrink-0">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
