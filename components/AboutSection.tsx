'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function AboutSection() {
  const { t } = useLanguage()

  const values = [
    { titleKey: 'about.value0.title', descKey: 'about.value0.desc', icon: '⚡' },
    { titleKey: 'about.value1.title', descKey: 'about.value1.desc', icon: '🌿' },
    { titleKey: 'about.value2.title', descKey: 'about.value2.desc', icon: '🤝' },
  ]

  return (
    <section id="about" className="py-32 bg-white text-[#2e5240] overflow-hidden">

      <div className="section-padding container-max">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            {/* badge */}
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#2e5240] bg-[#2e5240]/5 border border-[#2e5240]/10 px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635]" />
              {t('about.label')}
            </span>

            {/* title */}
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#2e5240]">
              {t('about.title.main')}{' '}
              <span className="text-[#a3e635]">
                {t('about.title.highlight')}
              </span>
            </h2>

            {/* text */}
            <div className="mt-8 space-y-5 text-[#2e5240]/70 text-base leading-relaxed">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
            </div>

            <div className="mt-10">
              <a
                href="/a-propos"
                className="inline-flex items-center gap-2 bg-[#2e5240] text-white text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-[#a3e635] hover:text-[#1a2e22] transition-colors duration-200 shadow-sm"
              >
                En savoir plus
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

          </motion.div>

          {/* RIGHT */}
          <div className="space-y-5">

            {values.map((value, i) => (
              <motion.div
                key={value.titleKey}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex gap-5 p-6 rounded-2xl bg-white border border-[#2e5240]/10 shadow-sm hover:shadow-lg hover:border-[#a3e635]/50 hover:-translate-y-1 transition-all duration-300 ease-in-out"
              >

                <div className="text-2xl flex-shrink-0 mt-0.5">
                  {value.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-[#2e5240] text-base">
                    {t(value.titleKey)}
                  </h3>

                  <p className="mt-1.5 text-sm text-[#2e5240]/60 leading-relaxed">
                    {t(value.descKey)}
                  </p>
                </div>

              </motion.div>
            ))}

            {/* SNAPSHOT */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-3 rounded-2xl border border-[#2e5240]/10 overflow-hidden bg-white"
            >
              {[
                { v: '2023', lKey: 'about.stat.founded' },
                { v: '+50', lKey: 'about.stat.team' },
                { v: t('about.stat.regionVal'), lKey: 'about.stat.region' },
              ].map((item, i) => (
                <div
                  key={item.lKey}
                  className={[
                    'p-4 sm:p-5',
                    i === 0 ? 'border-r border-[#2e5240]/10' : '',
                    i === 1 ? 'sm:border-r border-[#2e5240]/10' : '',
                    i === 2 ? 'col-span-2 sm:col-span-1 border-t sm:border-t-0 border-[#2e5240]/10' : '',
                  ].join(' ')}
                >
                  <div className="text-2xl font-semibold text-[#2e5240] leading-tight">
                    {item.v}
                  </div>
                  <div className="mt-1 text-[11px] tracking-widest uppercase text-[#2e5240]/50 leading-snug">
                    {t(item.lKey)}
                  </div>
                </div>
              ))}
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  )
}