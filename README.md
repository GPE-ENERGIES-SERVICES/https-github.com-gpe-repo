# GPE Énergies & Services — Website

Premium corporate website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Backend**: Next.js API Routes
- **Optional email**: Nodemailer

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env.local
# Edit .env.local with your values
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
gpe-energies/
├── app/
│   ├── layout.tsx          # Root layout (fonts, Navbar, Footer)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── not-found.tsx       # 404 page
│   ├── api/
│   │   └── contact/
│   │       └── route.ts    # POST /api/contact — contact form backend
│   ├── services/
│   │   └── [slug]/
│   │       ├── page.tsx             # Dynamic service page (SSG)
│   │       └── ServicePageClient.tsx # Client component
│   ├── mentions-legales/page.tsx   # Mentions légales
│   ├── politique-confidentialite/page.tsx
│   └── cgv/page.tsx                # CGV
├── components/
│   └── LegalLayout.tsx             # Layout shared by legal pages
│   ├── Navbar.tsx           # Fixed, scroll-aware navigation
│   ├── Hero.tsx             # Hero section
│   ├── ServicesSection.tsx  # Services grid
│   ├── ReferencesSection.tsx# Clients & projects
│   ├── AboutSection.tsx     # Company story
│   ├── ContactSection.tsx   # Contact form + info
│   ├── Footer.tsx           # Footer
│   └── ServiceIcon.tsx      # SVG icon renderer
├── lib/
│   └── services.ts          # All 8 services data
└── ...config files
```

## Services

All 8 service pages are statically generated at build time:

| Slug | Title |
|------|-------|
| `courants-forts` | Courants Forts |
| `courants-faibles` | Courants Faibles |
| `energies-renouvelables` | Énergies Renouvelables |
| `mobilite-electrique` | Mobilité Électrique |
| `renovation-energetique` | Rénovation Énergétique |
| `chauffage-climatisation` | Chauffage & Climatisation |
| `vrd` | VRD |
| `bureau-etudes` | Bureau d'Études |

## Contact Form API

```
POST /api/contact
Content-Type: application/json

{
  "name": "Jean Dupont",       // required, min 2 chars
  "email": "jean@example.fr", // required, valid email
  "phone": "+33 6 00 00 00",  // optional
  "company": "ACME Corp",     // optional
  "service": "Courants Forts",// optional
  "message": "..."            // required, min 20 chars
}
```

Returns `201` on success, `400` on validation error, `429` on rate-limit, `502` on SMTP failure, `500` on server error.

### Activer l'envoi d'emails (SMTP)

L'envoi d'emails est implémenté dans `lib/mailer.ts` via Nodemailer. Pour l'activer :

```bash
cp .env.example .env.local
# puis remplir SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO
```

Si ces variables ne sont pas définies, le formulaire fonctionne quand même (les messages sont
loggés en console). Avec un fournisseur SMTP configuré, chaque message est envoyé en HTML
soigné à `CONTACT_TO`. Une protection anti-spam (honeypot + rate-limit 5/h par IP) est active.

## Build for Production

```bash
npm run build
npm start
```

## Customization

- **Company info** (address, phone, email): Edit `components/ContactSection.tsx` and `components/Footer.tsx`
- **Services content**: Edit `lib/services.ts`
- **Client references**: Edit `components/ReferencesSection.tsx`
- **Brand colors**: Edit `tailwind.config.ts` → `colors.brand`
- **Fonts**: Edit `app/layout.tsx` (uses Google Fonts via next/font)
