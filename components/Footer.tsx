'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/gpe-energies',
  instagram: 'https://www.instagram.com/gpeenergies',
}

export default function Footer() {
  const { t } = useLanguage()

  const navLinks = [
    { labelKey: 'footer.nav.home', href: '/' },
    { labelKey: 'footer.nav.services', href: '/#services' },
    { labelKey: 'footer.nav.references', href: '/realisations' },
    { labelKey: 'footer.nav.about', href: '/#about' },
    { labelKey: 'footer.nav.contact', href: '/contact' },
    { labelKey: 'nav.international', href: '/international' },
  ]

  const keyServices = [
    { labelKey: 'service.courants-forts-faibles.title', href: '/services/courants-forts-faibles' },
    { labelKey: 'service.energies-renouvelables.title', href: '/services/energies-renouvelables' },
    { labelKey: 'service.mobilite-electrique.title', href: '/services/mobilite-electrique' },
    { labelKey: 'service.gtb-knx.title', href: '/services/gtb-knx' },
    { labelKey: 'service.renovation-energetique.title', href: '/services/renovation-energetique' },
    { labelKey: 'service.chauffage-climatisation.title', href: '/services/chauffage-climatisation' },
    { labelKey: 'service.bureau-etudes.title', href: '/services/bureau-etudes' },
    { labelKey: 'service.vrd.title', href: '/services/vrd' },
  ]

  const legalLinks = [
    { labelKey: 'footer.links.legal', href: '/mentions-legales' },
    { labelKey: 'footer.links.privacy', href: '/politique-confidentialite' },
    { labelKey: 'footer.links.cgv', href: '/cgv' },
  ]

  return (
    <footer className="bg-[#2e5240] text-white pt-16 pb-8">
      <div className="section-padding container-max">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="GPE Énergies"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
              <div>
                <div className="text-sm font-bold text-white">
                  GPE Énergies & Services
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-white/80">
              {t('footer.tagline')}
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex gap-3">

              {/* LinkedIn */}
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#a3e635]/20 flex items-center justify-center transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.025-3.058-1.865-3.058-1.867 0-2.154 1.459-2.154 2.967v5.695h-3v-10h2.881v1.367h.041c.401-.76 1.379-1.562 2.838-1.562 3.034 0 3.595 1.998 3.595 4.59v5.605z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#a3e635]/20 flex items-center justify-center transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-4 text-white">
              {t('footer.nav.title')}
            </div>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white hover:text-[#a3e635] transition-colors"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-4 text-white">
              {t('footer.services.title')}
            </div>
            <ul className="space-y-2.5">
              {keyServices.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-white hover:text-[#a3e635] transition-colors"
                  >
                    {t(s.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-4 text-white">
              {t('footer.contact.title')}
            </div>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+213 549 48 00 97" className="text-white hover:text-[#a3e635] transition-colors">
                  +213 549 48 00 97
                </a>
              </li>

              <li>
                <a href="mailto:contact@gpealgerie.com" className="text-white hover:text-[#a3e635] transition-colors">
                  contact@gpealgerie.com
                </a>
              </li>

              <li className="text-white/80">
                Résidence Coloris, Chemin Sidi Yahia<br />Bir Mourad Raïs 16005, Alger
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#a3e635]" />
              <span className="text-xs text-white/80">
                {t('footer.response')}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/70">
            © {new Date().getFullYear()} GPE Énergies & Services. {t('footer.copyright')}
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-white/70 hover:text-[#a3e635] transition-colors"
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}