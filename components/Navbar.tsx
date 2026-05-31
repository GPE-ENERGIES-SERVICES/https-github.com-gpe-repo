'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '@/context/LanguageContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  const navLinks = [
    { key: 'nav.home', href: '/' },
    { key: 'nav.services', href: '/#services' },
    { key: 'nav.realisations', href: '/realisations' },
    { key: 'nav.international', href: '/international' },
    { key: 'nav.contact', href: '/contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    if (href.startsWith('/#')) return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-neutral-200'
            : 'bg-white/80 backdrop-blur-md border-transparent'
        }`}
      >
        <nav className="section-padding container-max">
          <div className="flex items-center justify-between h-20 gap-2 lg:gap-3 xl:gap-6">

            {/* LOGO + DRAPEAU */}
            <div className="flex items-center gap-2 xl:gap-3 flex-shrink-0 -ms-1">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo0.png"
                  alt="GPE Énergies"
                  width={10000}
                  height={5000}
                  className="h-16 w-auto sm:h-18 lg:h-28 xl:h-40 2xl:h-44"
                  priority
                />
              </Link>

              {/* Drapeau algérien */}
              <Image
                src="/images/flag-algeria.png"
                alt="Drapeau de l'Algérie"
                width={28}
                height={14}
                className="flex-shrink-0 h-7 w-auto sm:h-4 lg:h-5 xl:h-6 2xl:h-7 rounded shadow-sm
                           transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default"
              />
            </div>

            {/* NAV LINKS */}
            <div className="hidden lg:flex items-center gap-0.5 xl:gap-3 flex-nowrap">
              {navLinks.map((link) => {
                const active = isActive(link.href)

                return (
                  <Link
                    key={link.key}
                    href={link.href}
                    className={`group relative px-2 py-2 xl:px-3.5 text-[13px] font-medium transition-colors whitespace-nowrap ${
                      active ? 'text-[#2e5240]' : 'text-[#2e5240]/80'
                    } hover:text-[#a3e635]`}
                  >
                    {t(link.key)}

                    <span
                      className={`absolute left-2 right-2 xl:left-3.5 xl:right-3.5 -bottom-0.5 h-px bg-[#a3e635] transition-transform duration-300 ${
                        active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>
                )
              })}
            </div>

            {/* RIGHT SIDE */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-4 flex-shrink-0 whitespace-nowrap">
              <LanguageSwitcher />

              <span className="hidden xl:block h-4 w-px bg-neutral-200" />
              <a
                href="tel:+213 549 48 00 97"
                className="hidden xl:block text-[13px] font-medium text-[#2e5240]/70 hover:text-[#a3e635] transition-colors whitespace-nowrap"
              >
                +213 549 48 00 97
              </a>

              <span className="h-4 w-px bg-neutral-200" />

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 bg-[#2e5240] text-white text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-[#a3e635] hover:text-[#1a2e22] transition-colors shadow-sm whitespace-nowrap"
              >
                {t('nav.cta')}
              </Link>
            </div>

            {/* BURGER */}
            <button
              className="lg:hidden -me-2 p-2 rounded-lg hover:bg-neutral-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="relative w-5 h-4">
                <span className={`absolute left-0 right-0 h-px bg-[#2e5240] transition-all duration-300 ${menuOpen ? 'top-2 rotate-45' : 'top-0'}`} />
                <span className={`absolute left-0 right-0 top-2 h-px bg-[#2e5240] transition-opacity duration-200 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute left-0 right-0 h-px bg-[#2e5240] transition-all duration-300 ${menuOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
              </div>
            </button>

          </div>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white pt-20 px-6 lg:hidden"
          >
            <div className="flex flex-col">

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between py-5 text-[22px] font-medium border-b border-neutral-100 ${
                      isActive(link.href) ? 'text-[#a3e635]' : 'text-[#2e5240]'
                    }`}
                  >
                    {t(link.key)}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-8 space-y-3">

                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center bg-[#2e5240] text-white text-sm font-semibold px-5 py-3.5 rounded-full hover:bg-[#a3e635] hover:text-[#1a2e22] transition"
                >
                  {t('nav.cta')}
                </Link>

                <a
                  href="tel:+213549480097"
                  className="flex items-center justify-center text-sm font-medium text-[#2e5240] px-5 py-3.5 rounded-full border border-neutral-200"
                >
                  +213 549 48 00 97
                </a>

                <div className="flex justify-center pt-2">
                  <LanguageSwitcher />
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}