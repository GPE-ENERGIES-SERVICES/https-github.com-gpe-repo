'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Réalisations', href: '/#references' },
  { label: 'À propos', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-[background,backdrop-filter,border-color] duration-300 ${
          scrolled
            ? 'bg-white/75 backdrop-blur-xl border-b border-neutral-200/60'
            : 'bg-white/40 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <nav className="section-padding container-max">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 -ml-1">
              <Image
                src="/images/logo.png"
                alt="GPE Énergies"
                width={200}
                height={60}
                className="h-9 w-auto md:h-10"
                priority
              />
              <span className="hidden sm:block text-[13px] font-semibold tracking-tight text-neutral-900 leading-tight">
                GPE Énergies
                <span className="block text-[10px] font-medium tracking-widest uppercase text-neutral-400">
                  &amp; Services
                </span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const active =
                  pathname === '/' && link.href.startsWith('/#') === false
                    ? false
                    : false
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group relative px-4 py-2 text-[13.5px] font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    {link.label}
                    <span
                      className={`pointer-events-none absolute left-4 right-4 -bottom-0.5 h-px origin-left scale-x-0 bg-neutral-900 transition-transform duration-300 group-hover:scale-x-100 ${
                        active ? 'scale-x-100' : ''
                      }`}
                    />
                  </Link>
                )
              })}
            </div>

            {/* CTA + meta */}
            <div className="hidden md:flex items-center gap-5">
              <a
                href="tel:+33442072262"
                className="text-[13px] font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                +33 4 42 07 22 62
              </a>
              <span className="h-4 w-px bg-neutral-200" />
              <Link
                href="/#contact"
                className="inline-flex items-center gap-1.5 bg-neutral-900 text-white text-[13px] font-medium px-4 py-2 rounded-full hover:bg-neutral-800 transition-colors"
              >
                Demander un devis
              </Link>
            </div>

            {/* Burger */}
            <button
              className="md:hidden -mr-2 p-2 rounded-lg hover:bg-neutral-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              <div className="relative w-5 h-4">
                <span
                  className={`absolute left-0 right-0 h-px bg-neutral-900 transition-all duration-300 ${
                    menuOpen ? 'top-2 rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute left-0 right-0 top-2 h-px bg-neutral-900 transition-opacity duration-200 ${
                    menuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-0 right-0 h-px bg-neutral-900 transition-all duration-300 ${
                    menuOpen ? 'top-2 -rotate-45' : 'top-4'
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-20 px-6 md:hidden"
          >
            <div className="flex flex-col">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between py-5 text-[22px] font-medium text-neutral-900 border-b border-neutral-100"
                  >
                    {link.label}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-neutral-300">
                      <path d="M5 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mt-8 space-y-3"
              >
                <Link
                  href="/#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center bg-neutral-900 text-white text-sm font-medium px-5 py-3.5 rounded-full"
                >
                  Demander un devis
                </Link>
                <a
                  href="tel:+33442072262"
                  className="flex items-center justify-center text-sm font-medium text-neutral-600 px-5 py-3.5 rounded-full border border-neutral-200"
                >
                  +33 4 42 07 22 62
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
