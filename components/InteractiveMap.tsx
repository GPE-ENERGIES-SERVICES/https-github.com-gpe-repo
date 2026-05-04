'use client'

import dynamic from 'next/dynamic'
export type { MapLocation } from './InteractiveMapLeaflet'

const InteractiveMap = dynamic(
  () => import('./InteractiveMapLeaflet'),
  {
    ssr: false,
    loading: () => (
      <div
        className="rounded-3xl overflow-hidden border border-neutral-200 bg-neutral-100 animate-pulse"
        style={{ height: 500, boxShadow: '0 8px 40px rgba(0,0,0,0.08)' }}
      />
    ),
  },
)

export default InteractiveMap
