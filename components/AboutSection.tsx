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
    <section id="about" className="py-32 bg-neutral-950 text-white overflow-hidden">
      <div className="section-padding container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-accent-lime bg-white/5 border border-white/10 px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-lime" />
              {t('about.label')}
            </span>

            <h2 className="heading-display text-4xl md:text-5xl text-white leading-tight">
              {t('about.title.main')}{' '}
              <span className="text-brand-300">{t('about.title.highlight')}</span>
            </h2>

            <div className="mt-8 space-y-5 text-neutral-300 text-base leading-relaxed">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
            </div>

            {/* Certifications */}
            <div className="mt-10 flex flex-wrap gap-3">
              {['RGE QualiPV', 'Qualifelec', 'RGE QualiClimat', 'IRVE Qualif.', 'Qualibat'].map((cert) => (
                <span key={cert} className="text-xs font-medium text-neutral-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — values */}
          <div className="space-y-5">
            {values.map((value, i) => (
              <motion.div
                key={value.titleKey}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors"
              >
                <div className="text-2xl flex-shrink-0 mt-0.5">{value.icon}</div>
                <div>
                  <h3 className="font-semibold text-white text-base">{t(value.titleKey)}</h3>
                  <p className="mt-1.5 text-sm text-neutral-400 leading-relaxed">{t(value.descKey)}</p>
                </div>
              </motion.div>
            ))}

            {/* Snapshot */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 rounded-2xl border border-white/10 overflow-hidden"
            >
              {[
                { v: '2008', lKey: 'about.stat.founded' },
                { v: '+40', lKey: 'about.stat.team' },
                { v: t('about.stat.regionVal'), lKey: 'about.stat.region' },
              ].map((item, i) => (
                <div
                  key={item.lKey}
                  className={`p-5 ${i < 2 ? 'border-r border-white/10' : ''}`}
                >
                  <div className="text-2xl font-semibold text-white">{item.v}</div>
                  <div className="mt-1 text-[11px] tracking-widest uppercase text-neutral-500">
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
