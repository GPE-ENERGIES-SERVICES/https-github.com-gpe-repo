'use client'

import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

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
      const eased = 1 - Math.pow(1 - t, 3)
      setCount(Math.round(end * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, end, duration])

  return <span ref={ref}>{count}</span>
}

export default function Hero() {
  const { t } = useLanguage()

  const stats = [
    { value: 20, suffix: '+', labelKey: 'hero.stat.years' },
    { value: 500, suffix: '+', labelKey: 'hero.stat.projects' },
    { value: 10, suffix: '', labelKey: 'hero.stat.expertise' },
    { value: 100, suffix: '%', labelKey: 'hero.stat.satisfaction' },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* 🎥 VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Videos/herovideo.mp4" type="video/mp4" />
      </video>

      {/* 🌑 OVERLAY (IMPORTANT pour lisibilité) */}
      <div className="absolute inset-0 bg-black/50" />

      {/* glow subtil (optionnel mais premium) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2e5240]/30 blur-3xl rounded-full" />

      {/* CONTENT */}
      <div className="relative section-padding container-max w-full pt-32 pb-20">
        <div className="max-w-4xl text-white">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-7 flex items-center gap-3 text-[11px] font-medium tracking-[0.18em] uppercase text-white/70"
          >
            <span className="w-8 h-px bg-white/40" />
            {t('hero.eyebrow')}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]"
          >
            {t('hero.title.part1')}{' '}
            <span className="text-[#a3e635]">
              {t('hero.title.highlight')}
            </span>
            <br />
            {t('hero.title.part2')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.25}
            variants={fadeUp}
            className="mt-8 text-lg text-white/70 max-w-2xl"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.4}
            variants={fadeUp}
            className="mt-12 flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#2e5240] hover:bg-[#a3e635] hover:text-[#1a2e22] text-white transition-all duration-200 rounded-xl font-semibold"
            >
              {t('hero.cta.contact')}
            </Link>

            <Link
              href="/#services"
              className="px-8 py-4 border border-white/30 hover:border-[#a3e635] hover:text-[#a3e635] text-white rounded-xl transition-all duration-200"
            >
              {t('hero.cta.services')}
            </Link>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.55}
            variants={fadeUp}
            className="mt-16 grid grid-cols-2 sm:flex gap-10 text-white"
          >
            {stats.map((stat) => (
              <div key={stat.labelKey}>
                <div className="text-2xl font-bold flex gap-1">
                  <Counter end={stat.value} />
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-sm text-white/60">
                  {t(stat.labelKey)}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

    </section>
  )
}