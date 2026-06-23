'use client'

import Image from 'next/image'

const certs = [
  { img: '/images/Certifications/qualifelec.png' },
  { img: '/images/Certifications/Logo-QualiPV-RGE.png' },
  { img: '/images/Certifications/logo-qualipac.png' },
  { img: '/images/Certifications/opqibi-1-1280x560-removebg-preview.png' },
  { img: '/images/Certifications/9001.png' },
  { img: '/images/Certifications/knx.png' },
  { img: '/images/Certifications/irvevoiture.png' },

  // duplicate for seamless loop
  { img: '/images/Certifications/qualifelec.png' },
  { img: '/images/Certifications/Logo-QualiPV-RGE.png' },
  { img: '/images/Certifications/logo-qualipac.png' },
  { img: '/images/Certifications/opqibi-1-1280x560-removebg-preview.png' },
  { img: '/images/Certifications/9001.png' },
  { img: '/images/Certifications/knx.png' },
  { img: '/images/Certifications/irvevoiture.png' },
]

export default function CertificationsMarquee() {
  return (
    <div className="relative overflow-hidden py-14" dir="ltr">

      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-28 z-10 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-28 z-10 bg-gradient-to-l from-white to-transparent" />

      <div className="flex gap-8 animate-marquee w-max">
        {certs.map((cert, i) => (
          <div
            key={i}
            className="group relative flex-shrink-0 flex items-center justify-center
                       w-60 h-36 rounded-2xl border border-neutral-300 bg-white
                       shadow-md p-6 transition-all duration-300
                       hover:-translate-y-2 hover:shadow-xl hover:border-[#a3e635]/60"
          >
            <div className="absolute inset-0 rounded-2xl opacity-0
                            group-hover:opacity-100 transition duration-500
                            bg-[#a3e635]/15 blur-2xl" />
            <Image
              src={cert.img}
              alt=""
              width={180}
              height={90}
              className="relative z-10 object-contain w-full h-full
                         group-hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
