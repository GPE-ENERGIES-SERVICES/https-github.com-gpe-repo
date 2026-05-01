import type { Metadata, Viewport } from 'next'
import { Outfit, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'GPE Énergies & Services — Installations électriques & Énergies renouvelables',
    template: '%s — GPE Énergies & Services',
  },
  description:
    "GPE Énergies & Services, expert en installations électriques, énergies renouvelables, CVC, VRD et bureau d'études. Solutions sur mesure pour professionnels et collectivités.",
  keywords: ['électricité', 'énergies renouvelables', 'photovoltaïque', 'CVC', 'VRD', "bureau d'études", 'IRVE'],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    title: 'GPE Énergies & Services',
    description: "Installations électriques, énergies renouvelables et solutions CVC pour professionnels.",
  },
  icons: {
    icon: '/images/logo.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${outfit.variable} ${playfair.variable}`}>
      <body className="bg-white text-neutral-900 antialiased">
        <Navbar />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
