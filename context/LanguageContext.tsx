'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Lang = 'fr' | 'en' | 'ar'

const t18n: Record<Lang, Record<string, string>> = {
  fr: {
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.realisations': 'Réalisations',
    'nav.international': "À l'international",
    'nav.contact': 'Contact',
    'nav.cta': 'Demander un devis',
    'international.hero.label': 'Présence mondiale',
    'international.hero.title': 'Au-delà des frontières.',
    'international.hero.sub': "GPE Énergies & Services accompagne des projets d'envergure en France et à l'international, en apportant son expertise technique sur chaque continent.",
    'international.locations.title': 'Nos implantations',
    'international.partners.title': 'Partenaires internationaux',
    'international.certs.title': 'Certifications & qualifications',
    'contact.label': 'Contact',
    'contact.title': 'Parlons de votre projet.',
    'contact.sub': "Notre équipe répond sous 24h ouvrées. Que ce soit pour un devis, une étude de faisabilité ou une question technique, nous sommes à votre écoute.",
    'realisations.label': 'Nos réalisations',
    'realisations.title': 'Des projets qui parlent d\'eux-mêmes.',
    'realisations.sub': 'Plus de 500 projets réalisés pour des maîtres d\'ouvrage publics et privés partout en France.',
    'realisations.all': 'Tous les projets',
    'realisations.empty': 'Aucun projet dans cette catégorie.',
  },
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.realisations': 'Projects',
    'nav.international': 'International',
    'nav.contact': 'Contact',
    'nav.cta': 'Request a quote',
    'international.hero.label': 'Global presence',
    'international.hero.title': 'Beyond borders.',
    'international.hero.sub': 'GPE Énergies & Services supports large-scale projects in France and internationally, bringing technical expertise to every continent.',
    'international.locations.title': 'Our locations',
    'international.partners.title': 'International partners',
    'international.certs.title': 'Certifications & qualifications',
    'contact.label': 'Contact',
    'contact.title': "Let's talk about your project.",
    'contact.sub': 'Our team responds within 24 business hours. Whether for a quote, a feasibility study, or a technical question, we are here for you.',
    'realisations.label': 'Our projects',
    'realisations.title': 'Projects that speak for themselves.',
    'realisations.sub': 'Over 500 projects completed for public and private clients across France.',
    'realisations.all': 'All projects',
    'realisations.empty': 'No projects in this category.',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.services': 'الخدمات',
    'nav.realisations': 'مشاريعنا',
    'nav.international': 'دولي',
    'nav.contact': 'اتصل بنا',
    'nav.cta': 'طلب عرض أسعار',
    'international.hero.label': 'حضور عالمي',
    'international.hero.title': 'ما وراء الحدود.',
    'international.hero.sub': 'تدعم GPE Énergies & Services مشاريع واسعة النطاق في فرنسا وعلى الصعيد الدولي، مع تقديم خبرات تقنية في كل قارة.',
    'international.locations.title': 'مواقعنا',
    'international.partners.title': 'شركاء دوليون',
    'international.certs.title': 'الشهادات والمؤهلات',
    'contact.label': 'تواصل معنا',
    'contact.title': 'لنتحدث عن مشروعك.',
    'contact.sub': 'يرد فريقنا خلال 24 ساعة عمل. سواء لعرض أسعار أو دراسة جدوى أو سؤال تقني، نحن هنا لمساعدتك.',
    'realisations.label': 'مشاريعنا المنجزة',
    'realisations.title': 'مشاريع تتحدث عن نفسها.',
    'realisations.sub': 'أكثر من 500 مشروع منجز للعملاء من القطاع العام والخاص في جميع أنحاء فرنسا.',
    'realisations.all': 'جميع المشاريع',
    'realisations.empty': 'لا توجد مشاريع في هذه الفئة.',
  },
}

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
  dir: 'ltr' | 'rtl'
}

const LanguageContext = createContext<LangCtx>({
  lang: 'fr',
  setLang: () => {},
  t: (key) => key,
  dir: 'ltr',
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('fr')

  useEffect(() => {
    const stored = localStorage.getItem('gpe-lang') as Lang
    if (stored && ['fr', 'en', 'ar'].includes(stored)) setLangState(stored)
  }, [])

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('gpe-lang', l)
  }

  const t = (key: string) => t18n[lang]?.[key] ?? t18n.fr[key] ?? key

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir: lang === 'ar' ? 'rtl' : 'ltr' }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
