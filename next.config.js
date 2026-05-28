/** @type {import('next').NextConfig} */

const securityHeaders = [
  // Empêche le clickjacking
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  // Empêche le MIME-type sniffing
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Contrôle les informations de référent envoyées
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Désactive les APIs sensibles non utilisées
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=()',
  },
  // Active le DNS prefetch pour les performances
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  // Content Security Policy — adapté pour Next.js + Google Fonts + Leaflet + Unsplash
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      // Next.js nécessite unsafe-inline pour les scripts injectés
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      // Framer Motion et Next.js utilisent des styles inline
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Images locales + Unsplash + tuiles CartoDB (Leaflet) + data URLs
      "img-src 'self' blob: data: https://images.unsplash.com https://*.basemaps.cartocdn.com",
      // Polices Google Fonts
      "font-src 'self' https://fonts.gstatic.com",
      // Requêtes API uniquement vers le même domaine
      "connect-src 'self'",
      // Empêche l'inclusion de cette page dans des iframes externes
      "frame-ancestors 'self'",
      // Restreint les actions de formulaire au même domaine
      "form-action 'self'",
      // Restreint les URL de base
      "base-uri 'self'",
    ].join('; '),
  },
]

const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}

module.exports = nextConfig
