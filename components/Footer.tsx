'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

// Remplacer ces valeurs par les URLs définitives
const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/gpe-energies',
  facebook: 'https://www.facebook.com/gpeenergies',
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
    { labelKey: 'service.chauffage-climatisation.title', href: '/services/chauffage-climatisation' },
    { labelKey: 'service.bureau-etudes.title', href: '/services/bureau-etudes' },
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
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#5a9474] flex items-center justify-center transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-white hover:text-black"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.025-3.058-1.865-3.058-1.867 0-2.154 1.459-2.154 2.967v5.695h-3v-10h2.881v1.367h.041c.401-.76 1.379-1.562 2.838-1.562 3.034 0 3.595 1.998 3.595 4.59v5.605z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#5a9474] flex items-center justify-center transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-white hover:text-black"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.326v21.348c0 .732.593 1.326 1.325 1.326h11.495v-9.294h-3.127v-3.622h3.127v-2.671c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.116c.732 0 1.325-.594 1.325-1.326v-21.349c0-.733-.593-1.326-1.325-1.326z"/>
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
                    className="text-sm text-white hover:text-[#5a9474] transition-colors"
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
                    className="text-sm text-white hover:text-[#5a9474] transition-colors"
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
                <a href="tel:+21321221415" className="text-white hover:text-[#5a9474] transition-colors">
                  +213 21 22 14 15
                </a>
              </li>

              <li>
                <a href="mailto:contact@gpefrance.eu" className="text-white hover:text-[#5a9474] transition-colors">
                  contact@gpefrance.eu
                </a>
              </li>

              <li className="text-white/80">
                92 Bd de l&apos;Europe ZA, 13127 Vitrolles
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#5a9474]" />
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
                className="text-xs text-white/70 hover:text-[#5a9474] transition-colors"
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