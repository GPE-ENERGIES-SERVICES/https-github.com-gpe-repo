import Link from 'next/link'
import type { ReactNode } from 'react'

interface Props {
  title: string
  lastUpdated?: string
  children: ReactNode
}

export default function LegalLayout({ title, lastUpdated, children }: Props) {
  return (
    <section className="pt-32 pb-24 bg-white min-h-screen">
      <div className="section-padding container-max max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-800 transition-colors mb-8"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M11 7H3M6 4L3 7l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Retour à l&apos;accueil
        </Link>

        <h1 className="heading-display text-4xl md:text-5xl text-neutral-950 leading-tight">{title}</h1>
        {lastUpdated && (
          <p className="mt-3 text-sm text-neutral-400">Dernière mise à jour : {lastUpdated}</p>
        )}

        <div className="mt-12 space-y-6 text-neutral-600 text-base leading-relaxed legal-prose">
          {children}
        </div>
      </div>
    </section>
  )
}
