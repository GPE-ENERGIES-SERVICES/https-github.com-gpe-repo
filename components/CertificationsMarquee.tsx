'use client'

const certs = [
  { name: 'RGE QualiPV', desc: 'Photovoltaïque' },
  { name: 'Qualifelec', desc: 'Installations électriques' },
  { name: 'RGE QualiClimat', desc: 'CVC & ENR' },
  { name: 'IRVE Qualif.', desc: 'Recharge véhicules' },
  { name: 'Qualibat', desc: 'Bâtiment & rénovation' },
  { name: 'ISO 9001', desc: 'Management qualité' },
  { name: "Qualit'ENR", desc: 'Énergies renouvelables' },
  { name: 'APSAD R81', desc: "Systèmes d'alarme" },
  // duplicate for seamless loop
  { name: 'RGE QualiPV', desc: 'Photovoltaïque' },
  { name: 'Qualifelec', desc: 'Installations électriques' },
  { name: 'RGE QualiClimat', desc: 'CVC & ENR' },
  { name: 'IRVE Qualif.', desc: 'Recharge véhicules' },
  { name: 'Qualibat', desc: 'Bâtiment & rénovation' },
  { name: 'ISO 9001', desc: 'Management qualité' },
  { name: "Qualit'ENR", desc: 'Énergies renouvelables' },
  { name: 'APSAD R81', desc: "Systèmes d'alarme" },
]

export default function CertificationsMarquee() {
  return (
    <div className="relative overflow-hidden py-10">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-white to-transparent" />

      <div className="flex gap-4 animate-marquee w-max">
        {certs.map((cert, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex flex-col items-center justify-center w-44 h-24 rounded-2xl border border-neutral-200 bg-white shadow-sm px-4"
          >
            <div className="font-bold text-sm text-neutral-900 text-center leading-tight">
              {cert.name}
            </div>
            <div className="mt-1 text-[10px] font-medium text-neutral-400 uppercase tracking-wider text-center">
              {cert.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
