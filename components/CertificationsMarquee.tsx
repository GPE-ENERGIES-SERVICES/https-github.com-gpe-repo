'use client'

import Image from 'next/image'

const certs = [
  { name: 'Qualifelec', img: '/images/Certifications/qualifelec.png' },
  { name: 'QualiPV RGE', img: '/images/Certifications/Logo-QualiPV-RGE.png' },
  { name: 'QualiPAC', img: '/images/Certifications/logo-qualipac.png' },
  { name: 'OPQIBI', img: '/images/Certifications/opqibi-1-1280x560-removebg-preview.png' },
  { name: 'ISO 9001', img: '/images/Certifications/9001.png' },
  { name: 'KNX', img: '/images/Certifications/knx.png' },
  { name: 'IRVE', img: '/images/Certifications/irvevoiture.png' },
]

const marqueeItems = [...certs, ...certs]

export default function CertificationsMarquee() {
  return (
    <div className="py-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]" dir="ltr">
      <div className="flex w-max animate-marquee">
        {marqueeItems.map((cert, i) => (
          <div
            key={i}
            className="group relative flex-shrink-0 flex items-center justify-center
                       w-60 h-36 mx-4 rounded-2xl border border-neutral-300 bg-white
                       shadow-md transition-all duration-300
                       hover:-translate-y-2 hover:shadow-xl hover:border-[#a3e635]/60"
          >
            <div className="absolute inset-0 rounded-2xl opacity-0
                            group-hover:opacity-100 transition duration-500
                            bg-[#a3e635]/15 blur-2xl" />
            <div className="relative w-full h-full flex items-center justify-center p-6">
              <Image
                src={cert.img}
                alt={cert.name}
                fill
                className="object-contain p-5 transition duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
