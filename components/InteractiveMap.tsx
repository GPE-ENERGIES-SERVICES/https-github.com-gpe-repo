'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export interface MapLocation {
  id: string
  city: string
  country: string
  flag: string
  address: string
  phone?: string
  role: string
  osmEmbed: string
}

interface Props {
  locations: MapLocation[]
  initialId?: string
  height?: number
}

export default function InteractiveMap({ locations, initialId, height = 420 }: Props) {
  const [activeId, setActiveId] = useState(initialId ?? locations[0]?.id)

  const active = locations.find(l => l.id === activeId) ?? locations[0]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 rounded-3xl overflow-hidden border border-neutral-200 shadow-sm bg-white">
      {/* Sidebar — location list */}
      <div className="border-b lg:border-b-0 lg:border-r border-neutral-150 divide-y divide-neutral-100">
        {locations.map((loc) => {
          const isActive = loc.id === activeId
          return (
            <button
              key={loc.id}
              onClick={() => setActiveId(loc.id)}
              className={`w-full text-start p-5 transition-all duration-200 group ${
                isActive
                  ? 'bg-brand-50 border-l-2 border-l-brand-400'
                  : 'hover:bg-neutral-50 border-l-2 border-l-transparent'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{loc.flag}</span>
                <div className="min-w-0">
                  <div className={`text-sm font-semibold leading-snug transition-colors ${
                    isActive ? 'text-brand-500' : 'text-neutral-900 group-hover:text-neutral-700'
                  }`}>
                    {loc.city}
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5 font-medium">{loc.country}</div>
                </div>
                {isActive && (
                  <div className="ms-auto">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-400">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="3" fill="white" />
                      </svg>
                    </span>
                  </div>
                )}
              </div>
              <div className="mt-2 ms-9">
                <div className="text-xs text-neutral-500 leading-relaxed">{loc.address}</div>
                {loc.role && (
                  <span className={`mt-1.5 inline-block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    isActive
                      ? 'text-brand-500 bg-brand-100'
                      : 'text-neutral-400 bg-neutral-100'
                  }`}>
                    {loc.role}
                  </span>
                )}
              </div>
            </button>
          )
        })}
      </div>

      {/* Map area */}
      <div className="lg:col-span-2 relative" style={{ height }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            <iframe
              src={active.osmEmbed}
              className="w-full h-full border-0"
              loading="lazy"
              title={`Carte — ${active.city}`}
              aria-label={`Localisation ${active.city}, ${active.country}`}
            />
          </motion.div>
        </AnimatePresence>

        {/* Location badge overlay */}
        <div className="absolute top-4 start-4 z-10 pointer-events-none">
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-sm border border-neutral-200/60">
            <span className="text-base">{active.flag}</span>
            <div>
              <div className="text-xs font-semibold text-neutral-900 leading-none">{active.city}</div>
              <div className="text-[10px] text-neutral-400 mt-0.5">{active.country}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
