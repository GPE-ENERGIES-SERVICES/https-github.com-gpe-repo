'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function AProposClient() {
  const { t } = useLanguage()

  const keyFigures = [
    { emoji: '☀️', valueKey: 'apropos.keyfigures.0.value', labelKey: 'apropos.keyfigures.0.label', descKey: 'apropos.keyfigures.0.desc' },
    { emoji: '🏗️', valueKey: 'apropos.keyfigures.1.value', labelKey: 'apropos.keyfigures.1.label', descKey: 'apropos.keyfigures.1.desc' },
    { emoji: '📈', valueKey: 'apropos.keyfigures.2.value', labelKey: 'apropos.keyfigures.2.label', descKey: 'apropos.keyfigures.2.desc' },
  ]

  const expertise = [
    { emoji: '📐', titleKey: 'apropos.expertise.0.title', descKey: 'apropos.expertise.0.desc' },
    { emoji: '👷', titleKey: 'apropos.expertise.1.title', descKey: 'apropos.expertise.1.desc' },
    { emoji: '☀️', titleKey: 'apropos.expertise.2.title', descKey: 'apropos.expertise.2.desc' },
    { emoji: '⚡', titleKey: 'apropos.expertise.3.title', descKey: 'apropos.expertise.3.desc' },
    { emoji: '🔋', titleKey: 'apropos.expertise.4.title', descKey: 'apropos.expertise.4.desc' },
  ]

  const activityKeys = [
    'apropos.activities.0',
    'apropos.activities.1',
    'apropos.activities.2',
  ]

  return (
    <main className="min-h-screen">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/kawkab2.jpeg"
            alt="GPE Énergies & Services"
            fill
            priority
            className="object-cover object-[center_40%]"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-[#1faf5a]/70 via-black/55 to-[#c6ff00]/25" />

          <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#1faf5a]/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#c6ff00]/20 blur-3xl rounded-full" />

          <div className="absolute bottom-0 left-0 w-full h-56 bg-gradient-to-t from-white via-white/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative section-padding container-max w-full">

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-[#a3e635] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              {t('apropos.home')}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#c6ff00] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c6ff00]" />
              GPE Énergies & Services
            </span>

            <h1 className="heading-display text-5xl md:text-7xl text-white leading-tight">
              {t('nav.about').split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-[#a3e635]">{t('nav.about').split(' ').slice(-1)[0]}</span>
            </h1>

            <p className="mt-6 text-neutral-200 text-lg leading-relaxed max-w-2xl">
              {t('apropos.hero.subtitle')}
            </p>
          </motion.div>

        </div>
      </section>

      {/* ── PRÉSENTATION ──────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="section-padding container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Left — texte */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#2e5240] bg-[#2e5240]/5 border border-[#2e5240]/10 px-3 py-1.5 rounded-full mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635]" />
                {t('apropos.company.label')}
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-[#2e5240] leading-tight">
                {t('apropos.company.title')}{' '}
                <span className="text-[#a3e635]">{t('apropos.company.title.highlight')}</span>
              </h2>

              <p className="mt-7 text-[#2e5240]/70 text-base leading-relaxed">
                {t('apropos.company.p1')}
              </p>

              <div className="mt-6 space-y-3.5">
                {activityKeys.map((key) => (
                  <div key={key} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#a3e635]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#a3e635]" />
                    </div>
                    <span className="text-[#2e5240]/75 text-sm leading-relaxed">{t(key)}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-[#2e5240]/70 text-base leading-relaxed">
                {t('apropos.company.p2')}
              </p>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#2e5240] text-white text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-[#a3e635] hover:text-[#1a2e22] transition-colors duration-200 shadow-sm"
                >
                  {t('apropos.company.cta')}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Right — carte décorative */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#2e5240] to-[#1a2e22] rounded-3xl p-10 text-white shadow-2xl">
                <div className="text-5xl mb-6">⚡</div>
                <h3 className="text-2xl font-bold mb-4">{t('apropos.mission.title')}</h3>
                <p className="text-white/75 leading-relaxed text-sm">
                  {t('apropos.mission.p')}
                </p>
                <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-[#a3e635]" dir="ltr">2023</div>
                    <div className="text-[11px] text-white/45 uppercase tracking-widest mt-1">{t('apropos.mission.founded')}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#a3e635]" dir="ltr">+50</div>
                    <div className="text-[11px] text-white/45 uppercase tracking-widest mt-1">{t('apropos.mission.team')}</div>
                  </div>
                </div>
              </div>

              {/* Badge flottant */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 border border-neutral-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#a3e635]/15 flex items-center justify-center text-xl">🌍</div>
                  <div>
                    <div className="text-sm font-semibold text-[#2e5240]">{t('apropos.international.title')}</div>
                    <div className="text-xs text-neutral-500">{t('apropos.international.sub')}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── CHIFFRES CLÉS ─────────────────────────────────────────── */}
      <section className="py-28 bg-neutral-50">
        <div className="section-padding container-max">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#2e5240] bg-[#2e5240]/5 border border-[#2e5240]/10 px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635]" />
              {t('apropos.keyfigures.label')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2e5240]">
              {t('apropos.keyfigures.title')}{' '}
              <span className="text-[#a3e635]">{t('apropos.keyfigures.title.highlight')}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyFigures.map((item, i) => (
              <motion.div
                key={item.labelKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="group bg-white rounded-3xl p-9 border border-neutral-100 shadow-sm hover:shadow-xl hover:border-[#a3e635]/40 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="text-5xl mb-6">{item.emoji}</div>
                <div className="text-4xl font-bold text-[#2e5240] mb-1.5">{t(item.valueKey)}</div>
                <div className="text-sm font-semibold text-[#2e5240]/80 mb-4">{t(item.labelKey)}</div>
                <p className="text-sm text-neutral-500 leading-relaxed">{t(item.descKey)}</p>
                <div className="mt-7 h-1 w-12 bg-[#a3e635] rounded-full group-hover:w-20 transition-all duration-500" />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── NOS MOYENS & EXPERTISES ───────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="section-padding container-max">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#2e5240] bg-[#2e5240]/5 border border-[#2e5240]/10 px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635]" />
              {t('apropos.expertise.label')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2e5240]">
              {t('apropos.expertise.title')}{' '}
              <span className="text-[#a3e635]">{t('apropos.expertise.title.highlight')}</span>
            </h2>
            <p className="mt-5 text-neutral-500 max-w-xl mx-auto text-base">
              {t('apropos.expertise.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, i) => (
              <motion.div
                key={item.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`group bg-white rounded-2xl p-7 border border-neutral-100 shadow-sm hover:shadow-lg hover:border-[#a3e635]/40 hover:-translate-y-1 transition-all duration-300 ${
                  i === 3 ? 'lg:col-start-1' : ''
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-[#2e5240]/5 flex items-center justify-center text-2xl mb-5 group-hover:bg-[#a3e635]/15 transition-colors duration-300">
                  {item.emoji}
                </div>
                <h3 className="text-base font-semibold text-[#2e5240] mb-2.5">{t(item.titleKey)}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{t(item.descKey)}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-[#1a2e22] via-[#2e5240] to-[#1a2e22] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#a3e635]/8 rounded-full blur-3xl" />
        </div>
        <div className="section-padding container-max text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('apropos.cta.title')}
            </h2>
            <p className="text-white/65 max-w-xl mx-auto mb-10 text-base leading-relaxed">
              {t('apropos.cta.p')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#a3e635] text-[#1a2e22] font-semibold px-8 py-4 rounded-full hover:bg-white transition-colors duration-200 shadow-lg"
              >
                {t('apropos.cta.button')}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="tel:+213549480097"
                className="inline-flex items-center justify-center gap-2 text-white/80 font-medium px-8 py-4 rounded-full border border-white/20 hover:border-[#a3e635]/50 hover:text-[#a3e635] transition-colors duration-200"
              >
                <span dir="ltr">+213 549 48 00 97</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
