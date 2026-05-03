'use client'

import { useLanguage, type Lang } from '@/context/LanguageContext'

const langs: { code: Lang; label: string }[] = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'AR' },
]

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex items-center gap-0.5 p-0.5 rounded-full bg-neutral-100 border border-neutral-200/60">
      {langs.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={`px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wider transition-all duration-150 ${
            lang === code
              ? 'bg-white text-neutral-900 shadow-sm'
              : 'text-neutral-500 hover:text-neutral-700'
          }`}
          aria-label={`Switch to ${label}`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
