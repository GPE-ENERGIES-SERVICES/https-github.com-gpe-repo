import Link from 'next/link'
import Image from 'next/image'
const keyServices = [
  { label: 'Courants forts', href: '/services/courants-forts' },
  { label: 'Énergies renouvelables', href: '/services/energies-renouvelables' },
  { label: 'Mobilité électrique', href: '/services/mobilite-electrique' },
  { label: 'Chauffage & Climatisation', href: '/services/chauffage-climatisation' },
  { label: "Bureau d'études", href: '/services/bureau-etudes' },
]

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 pt-16 pb-8">
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
                <div className="text-sm font-bold text-white">GPE Énergies & Services</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-neutral-500">
              Expert en installations électriques, énergies renouvelables et solutions CVC depuis 2008.
            </p>
            <div className="mt-5 flex gap-3">
              {['linkedin', 'twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                  aria-label={social}
                >
                  <span className="text-xs text-neutral-500 capitalize">{social[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-xs font-semibold text-neutral-300 uppercase tracking-widest mb-4">Navigation</div>
            <ul className="space-y-2.5">
              {[
                { label: 'Accueil', href: '/' },
                { label: 'Services', href: '/#services' },
                { label: 'Réalisations', href: '/#references' },
                { label: 'À propos', href: '/#about' },
                { label: 'Contact', href: '/#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="text-xs font-semibold text-neutral-300 uppercase tracking-widest mb-4">Nos services</div>
            <ul className="space-y-2.5">
              {keyServices.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-sm hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-semibold text-neutral-300 uppercase tracking-widest mb-4">Contact</div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+33 4 42 07 22 62" className="hover:text-white transition-colors">
                  +33 4 42 07 22 62
                </a>
              </li>
              <li>
                <a href="mailto:contact@gpefrance.eu" className="hover:text-white transition-colors">
                  contact@gpefrance.eu
                </a>
              </li>
              <li className="text-neutral-500 leading-relaxed">
                92 Bd de l’Europe ZA, 13127 Vitrolles
              </li>
            </ul>
            <div className="mt-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-lime" />
                <span className="text-xs text-neutral-500">Réponse sous 24h ouvrées</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} GPE Énergies & Services. Tous droits réservés.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center sm:justify-end">
            {[
              { label: 'Mentions légales', href: '/mentions-legales' },
              { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
              { label: 'CGV', href: '/cgv' },
            ].map((item) => (
              <Link key={item.label} href={item.href} className="text-xs text-neutral-600 hover:text-neutral-300 transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
