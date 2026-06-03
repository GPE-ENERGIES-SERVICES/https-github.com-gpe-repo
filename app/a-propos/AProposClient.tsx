'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const keyFigures = [
  {
    emoji: '☀️',
    value: '+100 MWc',
    label: 'installés en 4 ans',
    desc: 'Une capacité photovoltaïque considérable déployée sur le territoire au cours des trois dernières années.',
  },
  {
    emoji: '🏗️',
    value: '+500',
    label: 'projets réalisés',
    desc: 'Plus de 500 chantiers menés à bien sur le territoire français en trois ans d\'activité.',
  },
  {
    emoji: '📈',
    value: 'Croissance',
    label: 'continue et maîtrisée',
    desc: 'Une progression constante et structurée qui témoigne de la confiance renouvelée de nos clients.',
  },
]

const expertise = [
  {
    emoji: '📐',
    title: "Bureau d'étude interne",
    desc: "Conception, dimensionnement et suivi technique des projets en interne, de la phase études jusqu'à la livraison.",
  },
  {
    emoji: '👷',
    title: 'Équipe technique spécialisée',
    desc: "Pilotage et gestion de chantier par une équipe dédiée au suivi opérationnel de vos projets.",
  },
  {
    emoji: '☀️',
    title: '7 équipes photovoltaïques',
    desc: "7 équipes d'installateurs spécialisés dans le photovoltaïque, pour des déploiements rapides et conformes.",
  },
  {
    emoji: '⚡',
    title: '3 équipes électricité',
    desc: "3 équipes spécialisées dans l'électricité tertiaire et industrielle, pour tous vos projets courants forts et faibles.",
  },
  {
    emoji: '🔋',
    title: '2 équipe IRVE',
    desc: "2 équipe dédiée à l'installation de bornes de recharge pour véhicules électriques, certifiée IRVE.",
  },
]

const activities = [
  'Installations photovoltaïques',
  "Travaux d'électricité industrielle et tertiaire",
  'Infrastructures de recharge pour véhicules électriques',
]

export default function AProposClient() {
  return (
    <main className="min-h-screen">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">
          {/* TODO: Remplacer /images/kawkab2.jpeg par la photo hero définitive de la page À propos */}
          <Image
            src="/images/kawkab2.jpeg"
            alt="GPE Énergies & Services"
            fill
            priority
            className="object-cover object-[center_40%]"
          />

          {/* Gradient overlay brand — identique à la page À l'international */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1faf5a]/70 via-black/55 to-[#c6ff00]/25" />

          {/* Glow effects */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#1faf5a]/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#c6ff00]/20 blur-3xl rounded-full" />

          {/* Fade bas vers blanc */}
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
              Accueil
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
              À propos{' '}
              <span className="text-[#a3e635]">de nous</span>
            </h1>

            <p className="mt-6 text-neutral-200 text-lg leading-relaxed max-w-2xl">
              Votre partenaire de confiance dans les énergies renouvelables et les infrastructures électriques.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ── PHOTO INSTITUTIONNELLE ───────────────────────────────── */}
      <section className="pt-4 pb-16 bg-white">
        <div className="section-padding container-max">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative w-full rounded-3xl overflow-hidden shadow-2xl shadow-neutral-200/60"
            style={{ height: 'clamp(220px, 40vw, 500px)' }}
          >
            {/* TODO: Remplacer /images/realisationherox.jpeg par la photo institutionnelle de l'entreprise */}
            <Image
              src="/images/realisationherox.jpeg"
              alt="GPE Énergies & Services — équipe et chantiers"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1280px"
            />

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e22]/55 via-transparent to-transparent" />

            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 px-7 py-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
              <div>
                <p className="text-white font-semibold text-base sm:text-lg leading-tight">
                  GPE Énergies & Services
                </p>
                <p className="text-white/65 text-sm mt-0.5">
                  Spécialiste des énergies renouvelables et des infrastructures électriques
                </p>
              </div>
              <span className="self-start sm:self-auto inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#c6ff00] bg-black/20 border border-white/15 px-2.5 py-1.5 rounded-full backdrop-blur-sm whitespace-nowrap">
                <span className="w-1 h-1 rounded-full bg-[#c6ff00]" />
                Depuis 2023
              </span>
            </div>
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
                Notre entreprise
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-[#2e5240] leading-tight">
                Experts en énergie{' '}
                <span className="text-[#a3e635]">depuis 2023</span>
              </h2>

              <p className="mt-7 text-[#2e5240]/70 text-base leading-relaxed">
                GPE Énergies et Services est spécialisée dans les énergies renouvelables et les infrastructures électriques.
              </p>

              <div className="mt-6 space-y-3.5">
                {activities.map((activity) => (
                  <div key={activity} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#a3e635]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#a3e635]" />
                    </div>
                    <span className="text-[#2e5240]/75 text-sm leading-relaxed">{activity}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-[#2e5240]/70 text-base leading-relaxed">
                Nous accompagnons nos clients avec des solutions fiables, performantes et durables, adaptées aux enjeux énergétiques d&apos;aujourd&apos;hui et de demain.
              </p>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#2e5240] text-white text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-[#a3e635] hover:text-[#1a2e22] transition-colors duration-200 shadow-sm"
                >
                  Contactez-nous
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
                <h3 className="text-2xl font-bold mb-4">Notre mission</h3>
                <p className="text-white/75 leading-relaxed text-sm">
                  Accompagner la transition énergétique de nos clients avec des solutions techniques de pointe, fiables et adaptées à chaque projet — de la conception à la mise en service.
                </p>
                <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-[#a3e635]">2023</div>
                    <div className="text-[11px] text-white/45 uppercase tracking-widest mt-1">Création</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#a3e635]">+50</div>
                    <div className="text-[11px] text-white/45 uppercase tracking-widest mt-1">Collaborateurs</div>
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
                    <div className="text-sm font-semibold text-[#2e5240]">Présence internationale</div>
                    <div className="text-xs text-neutral-500">Algérie · France · Arabie saoudite</div>
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
              Chiffres clés
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2e5240]">
              Des résultats qui{' '}
              <span className="text-[#a3e635]">parlent</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyFigures.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="group bg-white rounded-3xl p-9 border border-neutral-100 shadow-sm hover:shadow-xl hover:border-[#a3e635]/40 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="text-5xl mb-6">{item.emoji}</div>
                <div className="text-4xl font-bold text-[#2e5240] mb-1.5">{item.value}</div>
                <div className="text-sm font-semibold text-[#2e5240]/80 mb-4">{item.label}</div>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
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
              Organisation & ressources
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2e5240]">
              Nos moyens &{' '}
              <span className="text-[#a3e635]">expertises</span>
            </h2>
            <p className="mt-5 text-neutral-500 max-w-xl mx-auto text-base">
              Une organisation humaine et technique au service de l&apos;excellence sur chaque projet.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, i) => (
              <motion.div
                key={item.title}
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
                <h3 className="text-base font-semibold text-[#2e5240] mb-2.5">{item.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
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
              Un projet en tête ?
            </h2>
            <p className="text-white/65 max-w-xl mx-auto mb-10 text-base leading-relaxed">
              Notre équipe est disponible pour étudier votre projet et vous proposer une solution sur mesure, de la conception à la mise en service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#a3e635] text-[#1a2e22] font-semibold px-8 py-4 rounded-full hover:bg-white transition-colors duration-200 shadow-lg"
              >
                Demander un devis
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="tel:+213549480097"
                className="inline-flex items-center justify-center gap-2 text-white/80 font-medium px-8 py-4 rounded-full border border-white/20 hover:border-[#a3e635]/50 hover:text-[#a3e635] transition-colors duration-200"
              >
                +213 549 48 00 97
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
