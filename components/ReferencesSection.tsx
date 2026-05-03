'use client'

import { motion } from 'framer-motion'

const clients = [
  { name: 'Bouygues Immobilier', initials: 'BI' },
  { name: 'Vinci Construction', initials: 'VC' },
  { name: 'Mairie de Lyon', initials: 'ML' },
  { name: 'Engie', initials: 'EN' },
  { name: 'EDF Renouvelables', initials: 'EDF' },
  { name: 'Eiffage', initials: 'EF' },
  { name: 'SNCF Réseau', initials: 'SR' },
  { name: 'Nexity', initials: 'NX' },
  { name: 'Grand Lyon Habitat', initials: 'GLH' },
  { name: 'Sodexo', initials: 'SO' },
]

const projects = [
  { label: 'Parc photovoltaïque 2MW', location: 'Rhône-Alpes', type: 'Énergies renouvelables' },
  { label: 'Centre hospitalier — HTA/BT', location: 'Grand Est', type: 'Courants forts' },
  { label: 'ZAC résidentielle 400 logements', location: 'Île-de-France', type: 'VRD + Électricité' },
  { label: 'Campus tertiaire 15 000 m²', location: 'Auvergne', type: 'Bureau d\'études + CVC' },
  { label: 'Infrastructure IRVE 120 bornes', location: 'PACA', type: 'Mobilité électrique' },
  { label: 'Rénovation énergétique lycée', location: 'Occitanie', type: 'Rénovation énergétique' },
]

export default function ReferencesSection() {
  return (
    <section id="references" className="py-32 bg-white">
      <div className="section-padding container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="label-tag">Nos réalisations</span>
          <h2 className="heading-display text-4xl md:text-5xl text-neutral-950 mt-5">
            Ils nous font confiance.
          </h2>
          <p className="mt-5 text-neutral-500 text-lg">
            Plus de 500 projets réalisés pour des maîtres d&apos;ouvrage publics et privés partout en France.
          </p>
        </motion.div>

        {/* Client logos grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-3"
        >
          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex items-center justify-center h-20 bg-neutral-50 rounded-2xl border border-neutral-150 hover:border-brand-200 hover:bg-brand-50/30 transition-all duration-300 cursor-default"
            >
              <div className="text-center">
                <div className="text-xs font-bold text-neutral-400 group-hover:text-brand-400 transition-colors tracking-wider">
                  {client.initials}
                </div>
                <div className="text-[10px] text-neutral-400 mt-0.5 font-medium leading-tight px-2 text-center">
                  {client.name}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Selected projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-lg font-semibold text-neutral-800 mb-8">Projets de référence</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-150"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-brand-400" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-neutral-900">{project.label}</div>
                  <div className="text-xs text-neutral-400 mt-1">{project.location}</div>
                  <span className="mt-2 inline-block text-[10px] font-semibold text-brand-400 bg-brand-50 px-2 py-0.5 rounded-full border border-brand-100">
                    {project.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
