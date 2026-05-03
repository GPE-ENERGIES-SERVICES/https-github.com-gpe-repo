'use client'

import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

function Counter({ end, duration = 1600 }: { end: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
      setCount(Math.round(end * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, end, duration])

  return <span ref={ref}>{count}</span>
}

export default function Hero() {
  const stats = [
    { value: 10, suffix: '+', label: "Années d'expérience" },
    { value: 150, suffix: '+', label: 'Projets réalisés' },
    { value: 8, suffix: '', label: 'Expertises métier' },
    { value: 95, suffix: '%', label: 'Clients satisfaits' },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/40 to-emerald-50/30" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-brand-100/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-limeLight/40 rounded-full blur-3xl pointer-events-none" />

      {/* Geometric accents */}
      <div className="hidden md:block absolute top-1/3 right-1/4 w-px h-40 bg-gradient-to-b from-transparent via-brand-200 to-transparent opacity-60" />
      <div className="hidden md:block absolute top-2/3 right-1/3 w-20 h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent opacity-60" />

      <div className="relative section-padding container-max w-full pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-7 flex items-center gap-3 text-[11px] font-medium tracking-[0.18em] uppercase text-neutral-500"
          >
            <span className="w-8 h-px bg-neutral-300" />
            Vitrolles · depuis 2008
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-neutral-950 leading-[1.05]"
          >
            L&apos;énergie qui{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-brand-400">donne vie</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-1 left-0 right-0 h-3 bg-brand-100 rounded-sm -z-10 origin-left"
              />
            </span>
            <br className="hidden sm:block" /> à vos propriétés.
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.25}
            variants={fadeUp}
            className="mt-8 text-base sm:text-lg md:text-xl text-neutral-500 max-w-2xl leading-relaxed font-light"
          >
            Installations électriques, énergies renouvelables, CVC, VRD et bureau d&apos;études.
            Des solutions intégrées pour les professionnels et les collectivités exigeants.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.4}
            variants={fadeUp}
            className="mt-12 flex flex-wrap gap-4 items-center"
          >
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Contactez-nous
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M10 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/#services" className="btn-secondary text-base px-8 py-4">
              Nos Services
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.55}
            variants={fadeUp}
            className="mt-16 sm:mt-20 grid grid-cols-2 sm:flex sm:flex-wrap gap-8 sm:gap-12"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold text-neutral-900 flex items-end gap-1">
                  <Counter end={stat.value} />
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-sm text-neutral-400 mt-0.5 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  )
}
