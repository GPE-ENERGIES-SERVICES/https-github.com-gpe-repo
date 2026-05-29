'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import InteractiveMap, { type MapLocation } from '@/components/InteractiveMap'
import { useLanguage } from '@/context/LanguageContext'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
  website?: string
}

const officeLocation: MapLocation = {
  id: 'alger',
  city: 'Bir Mourad Raïs',
  country: 'Algérie',
  flag: '🇩🇿',
  address: 'Résidence Coloris, Chemin Sidi Yahia, Bir Mourad Raïs 16005',
  phone: '+213 549 48 00 97',
  role: 'Siège social',
  coords: [36.7308, 3.0492],
}

const serviceOptionsFr = [
  'Courants forts / faibles',
  'Énergies Renouvelables',
  'Mobilité Électrique',
  'GTB / KNX',
  'Rénovation Énergétique',
  'Chauffage & Climatisation',
  "Bureau d'Études",
  'VRD',
  'Autre / Non défini',
]

export default function ContactPageClient() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) { setStatus('success'); reset() }
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  const inputClass = (hasError?: boolean) =>
    `w-full px-4 py-3.5 rounded-xl border text-sm text-neutral-800 placeholder-neutral-400 bg-white transition-all duration-150 outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-400 ${
      hasError ? 'border-red-300' : 'border-neutral-200 hover:border-neutral-300'
    }`

  const contactItems = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      labelKey: 'contact.info.phone',
      value: '+213 549 48 00 97',
      href: 'tel:+213549480097',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      labelKey: 'contact.info.email',
      value: 'contact@gpealgerie.com',
      href: 'mailto:contact@gpealgerie.com',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      labelKey: 'contact.info.address',
      value: 'Résidence Coloris, Chemin Sidi Yahia, Bir Mourad Raïs 16005, Alger',
      href: 'https://www.google.com/maps/search/R%C3%A9sidence+Coloris+Chemin+Sidi+Yahia+Bir+Mourad+Ra%C3%AFs+Alger',
    },
  ]

  return (
    <>
      {/* Page header */}
      <section className="pt-36 pb-16 bg-white border-b border-neutral-100">
        <div className="section-padding container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="label-tag">{t('contact.label')}</span>
            <h1 className="heading-display text-5xl md:text-6xl text-neutral-950 mt-4 leading-tight">
              {t('contact.title')}
            </h1>
            <p className="mt-5 text-neutral-500 text-lg leading-relaxed max-w-2xl">
              {t('contact.sub')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + info grid */}
      <section className="py-20 bg-white">
        <div className="section-padding container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left — contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="space-y-6">
                {contactItems.map((item) => (
                  <a
                    key={item.labelKey}
                    href={item.href}
                    className="flex items-start gap-4 group"
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-400 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-200 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                        {t(item.labelKey)}
                      </div>
                      <div className="text-sm font-medium text-neutral-700 mt-0.5 group-hover:text-brand-400 transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Hours */}
              <div className="mt-10 p-5 rounded-2xl bg-neutral-50 border border-neutral-150">
                <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                  {t('contact.hours.title')}
                </div>
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between text-neutral-700">
                    <span>{t('contact.hours.weekdays')}</span>
                    <span className="font-medium">{t('contact.hours.weekdaysTime')}</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>{t('contact.hours.weekend')}</span>
                    <span>{t('contact.hours.closed')}</span>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <InteractiveMap locations={[officeLocation]} height={280} />
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="bg-white rounded-3xl border border-neutral-150 p-8 shadow-sm">
                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-accent-limeLight flex items-center justify-center mb-5">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C6FF00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900">{t('contact.success.title')}</h3>
                    <p className="mt-2 text-neutral-500 text-sm max-w-xs">
                      {t('contact.success.message')}
                    </p>
                    <button onClick={() => setStatus('idle')} className="mt-6 btn-secondary text-sm">
                      {t('contact.success.button')}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                    <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
                      <label>
                        Ne pas remplir
                        <input type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
                      </label>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-600 mb-1.5 uppercase tracking-wider">
                          {t('contact.form.name')}
                        </label>
                        <input
                          {...register('name', { required: true })}
                          placeholder={t('contact.form.namePlaceholder')}
                          className={inputClass(!!errors.name)}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-600 mb-1.5 uppercase tracking-wider">
                          {t('contact.form.email')}
                        </label>
                        <input
                          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                          type="email"
                          placeholder={t('contact.form.emailPlaceholder')}
                          className={inputClass(!!errors.email)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-600 mb-1.5 uppercase tracking-wider">
                          {t('contact.form.phone')}
                        </label>
                        <input
                          {...register('phone')}
                          type="tel"
                          placeholder={t('contact.form.phonePlaceholder')}
                          className={inputClass()}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-600 mb-1.5 uppercase tracking-wider">
                          {t('contact.form.company')}
                        </label>
                        <input
                          {...register('company')}
                          placeholder={t('contact.form.companyPlaceholder')}
                          className={inputClass()}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-600 mb-1.5 uppercase tracking-wider">
                        {t('contact.form.service')}
                      </label>
                      <select {...register('service')} className={inputClass()}>
                        <option value="">{t('contact.form.serviceDefault')}</option>
                        {serviceOptionsFr.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-600 mb-1.5 uppercase tracking-wider">
                        {t('contact.form.message')}
                      </label>
                      <textarea
                        {...register('message', { required: true, minLength: 20 })}
                        rows={5}
                        placeholder={t('contact.form.messagePlaceholder')}
                        className={`${inputClass(!!errors.message)} resize-none`}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-500 mt-1">{t('contact.form.messageError')}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                          </svg>
                          {t('contact.form.sending')}
                        </>
                      ) : (
                        <>
                          {t('contact.form.submit')}
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                          </svg>
                        </>
                      )}
                    </button>

                    {status === 'error' && (
                      <p className="text-xs text-red-500 text-center">
                        {t('contact.form.error')}
                      </p>
                    )}
                    <p className="text-xs text-neutral-400 text-center">
                      {t('contact.form.privacy')}
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
