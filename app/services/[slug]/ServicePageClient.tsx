'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type { Service } from '@/lib/services'
import ServiceIcon from '@/components/ServiceIcon'
import { services } from '@/lib/services'

interface Props {
  service: Service
}

export default function ServicePageClient({ service }: Props) {
  const related = services.filter(s => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden pt-24">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
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
              Tous nos services
            </Link>

            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
              style={{ backgroundColor: service.color }}
            >
              <ServiceIcon name={service.icon} size={22} color="white" />
            </div>

            <h1 className="heading-display text-4xl md:text-6xl text-white leading-tight">
              {service.title}
            </h1>
            <p className="mt-4 text-lg text-white/70 max-w-2xl leading-relaxed">
              {service.shortDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="section-padding container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="label-tag">Notre expertise</span>
                <h2 className="heading-display text-3xl md:text-4xl text-neutral-950 mt-4 mb-8 leading-tight">
                  Ce que nous réalisons pour vous
                </h2>
                <div className="space-y-5">
                  {service.description.map((para, i) => (
                    <p key={i} className="text-neutral-600 leading-relaxed text-base">
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-12"
              >
                <h3 className="font-semibold text-neutral-900 text-xl mb-6">Nos prestations incluses</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-150"
                    >
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${service.color}20` }}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke={service.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-neutral-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Process */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-12"
              >
                <h3 className="font-semibold text-neutral-900 text-xl mb-6">Notre processus</h3>
                <div className="space-y-4">
                  {[
                    { step: '01', title: 'Analyse & Étude', desc: 'Audit technique de votre site et analyse de vos besoins spécifiques.' },
                    { step: '02', title: 'Conception & Devis', desc: 'Proposition technique détaillée avec chiffrage transparent et délais engagés.' },
                    { step: '03', title: 'Réalisation', desc: 'Exécution par nos équipes certifiées, avec suivi de chantier rigoureux.' },
                    { step: '04', title: 'Réception & SAV', desc: 'Mise en service, formation et contrat de maintenance adapté.' },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 p-4 rounded-xl hover:bg-neutral-50 transition-colors">
                      <div
                        className="text-sm font-bold flex-shrink-0 w-8 mt-0.5"
                        style={{ color: service.color }}
                      >
                        {item.step}
                      </div>
                      <div>
                        <div className="font-semibold text-neutral-900 text-sm">{item.title}</div>
                        <div className="text-sm text-neutral-500 mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
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
                    Un projet {service.title.toLowerCase()} ?
                  </h3>
                  <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                    Obtenez une étude personnalisée et un devis gratuit sous 24h.
                  </p>
                  <Link
                    href="/#contact"
                    className="mt-5 btn-primary w-full justify-center text-sm"
                    style={{ backgroundColor: service.color }}
                  >
                    Demander un devis
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  <a
                    href="tel:+33478000000"
                    className="mt-3 btn-secondary w-full justify-center text-sm"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    Nous appeler
                  </a>
                </div>

                {/* Certifications */}
                <div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-150">
                  <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">Certifications</div>
                  <div className="flex flex-wrap gap-2">
                    {['RGE', 'Qualifelec', 'IRVE', 'Qualibat'].map((cert) => (
                      <span key={cert} className="text-xs font-medium text-neutral-600 bg-white border border-neutral-200 px-2.5 py-1 rounded-lg">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-100">
        <div className="section-padding container-max">
          <h3 className="font-semibold text-neutral-800 text-lg mb-8">Services complémentaires</h3>
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
                  <div className="font-semibold text-sm text-neutral-900">{s.title}</div>
                  <div className="text-xs text-neutral-500 mt-0.5 truncate">{s.shortDesc.substring(0, 50)}…</div>
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
