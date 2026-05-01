'use client'

import { motion } from 'framer-motion'

const values = [
  {
    title: 'Excellence technique',
    desc: 'Chaque installation est réalisée dans les règles de l\'art, certifiée et contrôlée par nos équipes qualifiées.',
    icon: '⚡',
  },
  {
    title: 'Engagement durable',
    desc: 'Nous plaçons la transition énergétique au cœur de nos projets, pour un impact positif sur l\'environnement.',
    icon: '🌿',
  },
  {
    title: 'Partenariat long terme',
    desc: 'Nos clients sont nos partenaires. Nous construisons des relations de confiance sur la durée, du projet à la maintenance.',
    icon: '🤝',
  },
]

export default function AboutSection() {
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
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-accent-green bg-white/5 border border-white/10 px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-green" />
              Notre histoire
            </span>

            <h2 className="heading-display text-4xl md:text-5xl text-white leading-tight">
              Bâtir un avenir électrique,{' '}
              <span className="text-brand-300">ensemble.</span>
            </h2>

            <div className="mt-8 space-y-5 text-neutral-300 text-base leading-relaxed">
              <p>
                Fondée en 2008 à Lyon, GPE Énergies & Services est née de la conviction que l&apos;excellence technique
                et l&apos;innovation énergétique doivent aller de pair. En quinze ans, nous avons accompagné des
                centaines de maîtres d&apos;ouvrage dans leur transition vers des bâtiments plus performants,
                plus économes et plus durables.
              </p>
              <p>
                Notre approche multidisciplinaire — électricité, renouvelables, CVC, VRD et ingénierie —
                nous permet de traiter un projet dans sa globalité, en garantissant cohérence technique,
                respect des délais et maîtrise des coûts.
              </p>
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
                key={value.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors"
              >
                <div className="text-2xl flex-shrink-0 mt-0.5">{value.icon}</div>
                <div>
                  <h3 className="font-semibold text-white text-base">{value.title}</h3>
                  <p className="mt-1.5 text-sm text-neutral-400 leading-relaxed">{value.desc}</p>
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
                { v: '2008', l: 'Création' },
                { v: '+40', l: 'Collaborateurs' },
                { v: 'Sud', l: "Région d'intervention" },
              ].map((item, i) => (
                <div
                  key={item.l}
                  className={`p-5 ${i < 2 ? 'border-r border-white/10' : ''}`}
                >
                  <div className="text-2xl font-semibold text-white">{item.v}</div>
                  <div className="mt-1 text-[11px] tracking-widest uppercase text-neutral-500">
                    {item.l}
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
