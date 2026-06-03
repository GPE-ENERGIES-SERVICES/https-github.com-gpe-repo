'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import 'leaflet/dist/leaflet.css'

export interface MapLocation {
  id: string
  city: string
  country: string
  flag: string
  address: string
  phone?: string
  email?: string
  role: string
  coords: [number, number]
}

interface Props {
  locations: MapLocation[]
  initialId?: string
  height?: number
}

/* ─── Marker styles injected once into <head> ─── */
const MARKER_STYLES = `
  .gpe-marker {
    position: relative;
    width: 44px;
    height: 44px;
    cursor: pointer;
  }
  .gpe-pulse {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: rgba(163,230,53,0.35);
    animation: gpePulse 2.2s ease-out infinite;
  }
  .gpe-pulse-2 {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: rgba(163,230,53,0.18);
    animation: gpePulse 2.2s ease-out 0.7s infinite;
  }
  .gpe-dot {
    position: absolute;
    width: 18px;
    height: 18px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #a3e635;
    border-radius: 50%;
    border: 3px solid #fff;
    box-shadow: 0 2px 12px rgba(163,230,53,0.65);
    transition: transform 0.25s cubic-bezier(.22,1,.36,1), box-shadow 0.25s ease;
  }
  .gpe-marker.active .gpe-dot {
    background: #a3e635;
    transform: translate(-50%,-50%) scale(1.35);
    box-shadow: 0 4px 20px rgba(163,230,53,0.80);
  }
  .gpe-marker.active .gpe-pulse {
    background: rgba(163,230,53,0.45);
    animation-duration: 1.6s;
  }
  @keyframes gpePulse {
    0%   { transform: scale(0.7); opacity: 0.9; }
    70%  { transform: scale(2.2); opacity: 0; }
    100% { transform: scale(2.2); opacity: 0; }
  }
  /* Override Leaflet UI to match the design */
  .leaflet-container {
    font-family: inherit;
    background: #e8e8e8;
  }
  .leaflet-control-zoom {
    border: none !important;
    box-shadow: 0 4px 16px rgba(0,0,0,0.10) !important;
    border-radius: 12px !important;
    overflow: hidden;
  }
  .leaflet-control-zoom a {
    width: 36px !important;
    height: 36px !important;
    line-height: 36px !important;
    background: #fff !important;
    color: #404040 !important;
    font-size: 18px !important;
    border: none !important;
    border-bottom: 1px solid #f0f0f0 !important;
    transition: background 0.15s ease, color 0.15s ease !important;
  }
  .leaflet-control-zoom a:last-child {
    border-bottom: none !important;
  }
  .leaflet-control-zoom a:hover {
    background: #2e5240 !important;
    color: #fff !important;
  }
  .leaflet-control-attribution {
    background: rgba(255,255,255,0.75) !important;
    backdrop-filter: blur(6px);
    border-radius: 8px 0 0 0 !important;
    font-size: 10px !important;
    padding: 3px 8px !important;
  }
  .leaflet-control-attribution a {
    color: #2e5240 !important;
  }
  .gpe-div-icon {
    background: transparent !important;
    border: none !important;
  }
`

function injectStyles() {
  if (typeof document === 'undefined') return
  if (document.getElementById('gpe-map-styles')) return
  const el = document.createElement('style')
  el.id = 'gpe-map-styles'
  el.textContent = MARKER_STYLES
  document.head.appendChild(el)
}

export default function InteractiveMapLeaflet({ locations, initialId, height = 500 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<import('leaflet').Map | null>(null)
  const markersRef = useRef<Map<string, import('leaflet').Marker>>(new Map())
  const [activeId, setActiveId] = useState(initialId ?? locations[0]?.id)
  const [isMapReady, setIsMapReady] = useState(false)

  const active = locations.find(l => l.id === activeId) ?? locations[0]

  /* ─── Bootstrap Leaflet ─── */
  useEffect(() => {
    injectStyles()

    let mounted = true

    ;(async () => {
      const L = (await import('leaflet')).default

      if (!containerRef.current || mapRef.current || !mounted) return

      /* Init map */
      const map = L.map(containerRef.current, {
        center: [30, 20],
        zoom: 3,
        zoomControl: true,
        scrollWheelZoom: false,
        doubleClickZoom: true,
        attributionControl: true,
      })

      /* CartoDB Light tiles — free, no API key */
      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 19,
        },
      ).addTo(map)

      /* Reposition zoom control */
      map.zoomControl.setPosition('bottomright')

      /* Create markers */
      locations.forEach(loc => {
        const isActive = loc.id === (initialId ?? locations[0]?.id)
        const icon = L.divIcon({
          className: 'gpe-div-icon',
          html: `<div class="gpe-marker ${isActive ? 'active' : ''}">
                   <div class="gpe-pulse"></div>
                   <div class="gpe-pulse-2"></div>
                   <div class="gpe-dot"></div>
                 </div>`,
          iconSize: [44, 44],
          iconAnchor: [22, 22],
        })

        const marker = L.marker(loc.coords, { icon }).addTo(map)

        marker.on('click', () => {
          if (!mounted) return
          setActiveId(loc.id)
        })

        markersRef.current.set(loc.id, marker)
      })

      /* Fit all markers in view */
      const bounds = L.latLngBounds(locations.map(l => l.coords))
      map.fitBounds(bounds, { padding: [80, 60] })

      mapRef.current = map
      if (mounted) setIsMapReady(true)
    })()

    return () => {
      mounted = false
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
        markersRef.current.clear()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /* ─── Fly to active location & update marker styles ─── */
  useEffect(() => {
    if (!mapRef.current || !isMapReady) return

    mapRef.current.flyTo(active.coords, 10, {
      duration: 1.4,
      easeLinearity: 0.08,
    })

    /* Update marker active classes */
    markersRef.current.forEach((marker, id) => {
      const el = marker.getElement()?.querySelector('.gpe-marker')
      if (!el) return
      if (id === activeId) {
        el.classList.add('active')
      } else {
        el.classList.remove('active')
      }
    })
  }, [activeId, active.coords, isMapReady])

  return (
    <div className="relative z-0 rounded-3xl overflow-hidden border border-neutral-200 shadow-lg bg-white"
         style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.08)' }}>
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">

        {/* ── Left panel ── */}
        <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-neutral-100">

          {/* Panel header */}
          <div className="px-5 py-5 border-b border-neutral-100">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#2e5240]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-400">
                Implantations
              </span>
            </div>
            <p className="text-sm font-semibold text-neutral-700 leading-snug">
              3 bureaux sur 3 continents
            </p>
          </div>

          {/* Location list */}
          <div className="flex-1 divide-y divide-neutral-100">
            {locations.map(loc => {
              const isActive = loc.id === activeId
              return (
                <button
                  key={loc.id}
                  onClick={() => setActiveId(loc.id)}
                  className={`w-full text-start px-5 py-4 transition-all duration-200 group ${
                    isActive
                      ? 'bg-[#2e5240]/5 border-l-2 border-[#2e5240]'
                      : 'border-l-2 border-transparent hover:bg-neutral-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg leading-none">{loc.flag}</span>
                    <div className="flex-1 min-w-0">
                      <div className={`text-sm font-semibold leading-tight transition-colors ${
                        isActive ? 'text-[#2e5240]' : 'text-neutral-800 group-hover:text-neutral-600'
                      }`}>
                        {loc.city}
                      </div>
                      <div className="text-xs text-neutral-400 mt-0.5">{loc.country}</div>
                    </div>
                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all ${
                      isActive ? 'bg-[#2e5240] scale-100' : 'bg-neutral-200 scale-75'
                    }`} />
                  </div>
                </button>
              )
            })}
          </div>

          {/* Active location detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-neutral-100 px-5 py-5 space-y-3"
            >
              {active.role && (
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#2e5240] bg-[#2e5240]/8 border border-[#2e5240]/20 px-2.5 py-1 rounded-full">
                  <span className="w-1 h-1 rounded-full bg-[#2e5240]" />
                  {active.role}
                </span>
              )}

              {active.address && (
                <div className="flex gap-2.5 items-start">
                  <svg className="w-3.5 h-3.5 text-neutral-400 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  <p className="text-xs text-neutral-500 leading-relaxed">{active.address}</p>
                </div>
              )}

              {active.phone && (
                <a
                  href={`tel:${active.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2.5 group/phone"
                >
                  <svg className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0 group-hover/phone:text-[#2e5240] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span className="text-xs font-semibold text-neutral-700 group-hover/phone:text-[#2e5240] transition-colors">
                    {active.phone}
                  </span>
                </a>
              )}

              {active.email && (
                <a
                  href={`mailto:${active.email}`}
                  className="flex items-center gap-2.5 group/email"
                >
                  <svg className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0 group-hover/email:text-[#2e5240] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <span className="text-xs font-semibold text-neutral-700 group-hover/email:text-[#2e5240] transition-colors">
                    {active.email}
                  </span>
                </a>
              )}

              {/* Coordinates badge */}
              <div className="flex items-center gap-2 pt-1">
                <div className="flex-1 h-px bg-neutral-100" />
                <span className="text-[10px] text-neutral-300 font-mono">
                  {active.coords[0].toFixed(4)}°, {active.coords[1].toFixed(4)}°
                </span>
                <div className="flex-1 h-px bg-neutral-100" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Map ── */}
        <div className="relative z-0 isolate" style={{ height }}>
          {/* Loading overlay */}
          {!isMapReady && (
            <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center z-10">
              <div className="flex items-center gap-3 text-neutral-400">
                <div className="w-4 h-4 rounded-full border-2 border-[#2e5240] border-t-transparent animate-spin" />
                <span className="text-sm font-medium">Chargement…</span>
              </div>
            </div>
          )}

          {/* Active location floating badge */}
          <AnimatePresence mode="wait">
            {isMapReady && (
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-4 left-4 z-[500] pointer-events-none"
              >
                <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-lg border border-neutral-100/80"
                     style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.10)' }}>
                  <span className="text-lg leading-none">{active.flag}</span>
                  <div>
                    <div className="text-sm font-bold text-neutral-900 leading-tight">{active.city}</div>
                    <div className="text-[10px] text-neutral-400 font-medium mt-0.5">{active.country}</div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* The map container */}
          <div ref={containerRef} className="w-full h-full" />
        </div>
      </div>
    </div>
  )
}
