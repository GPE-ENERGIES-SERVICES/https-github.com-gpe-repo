# Cahier des charges — Site GPE Énergies & Services

**Version** 1.0 · Avril 2026
**Type** Site corporate B2B (vitrine + acquisition de leads)
**Stack** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Nodemailer

---

## 1. Contexte & objectifs

### 1.1 Contexte
GPE Énergies & Services (Vitrolles, depuis 2008) intervient sur cinq métiers : électricité courants forts/faibles, énergies renouvelables, CVC, VRD, bureau d'études. Cible principale : maîtres d'ouvrage publics et privés, promoteurs, bailleurs sociaux, collectivités, entreprises tertiaires.

### 1.2 Objectifs business
- **Présenter** les 8 expertises métier de façon claire et hiérarchisée.
- **Convertir** les visiteurs en leads qualifiés via un formulaire de contact direct.
- **Crédibiliser** par les références clients, certifications et chiffres clés.
- **Référencer** sur les requêtes métier (SEO local + sectoriel).

### 1.3 Cibles utilisateurs
| Persona | Besoin principal |
|---|---|
| Maître d'ouvrage / promoteur | Comprendre le périmètre, demander un devis |
| Bureau d'études externe | Vérifier les compétences, identifier les certifications |
| Collectivité | Confirmer les références similaires, contacter |
| Particulier (rénovation) | Trouver le service adapté, obtenir un contact |

### 1.4 Critères de succès
- Score Lighthouse Performance ≥ 90 sur mobile.
- Formulaire de contact opérationnel avec envoi email automatique.
- Site 100% responsive (mobile, tablette, desktop, grand écran).
- Délai d'affichage initial < 2 s sur 4G.

---

## 2. Périmètre fonctionnel

### 2.1 Arborescence
```
/                                  Accueil
├── /#services                     Ancre — Section services
├── /#references                   Ancre — Réalisations
├── /#about                        Ancre — À propos
├── /#contact                      Ancre — Formulaire
│
├── /services/[slug]               8 pages services dynamiques
│   ├── courants-forts
│   ├── courants-faibles
│   ├── energies-renouvelables
│   ├── mobilite-electrique
│   ├── renovation-energetique
│   ├── chauffage-climatisation
│   ├── vrd
│   └── bureau-etudes
│
├── /mentions-legales              Page légale
├── /politique-confidentialite     Page RGPD
├── /cgv                           Conditions générales
└── /api/contact                   Endpoint POST (backend)
```

### 2.2 Pages — vue d'ensemble
| Page | Type | Pré-rendu | Authent. | Indexable |
|---|---|---|---|---|
| Accueil | Statique | ✓ SSG | Non | ✓ |
| Services individuels (×8) | Dynamique SSG | ✓ build-time | Non | ✓ |
| Pages légales (×3) | Statique | ✓ SSG | Non | ✓ |
| API `/api/contact` | Server Route | Dynamique | Non | — |
| 404 | Statique | ✓ | Non | ✗ |

---

## 3. Fonctionnalités détaillées

### 3.1 Navigation globale (Navbar)
- **Position** : fixe en haut, persistante sur toutes les pages.
- **Comportement** : transparente avec léger flou sur fond, intensification du flou + bordure fine au scroll (> 24 px).
- **Contenu** :
  - Logo + nom de marque (lien vers `/`).
  - 4 liens d'ancre : Services · Réalisations · À propos · Contact.
  - Numéro de téléphone cliquable (`tel:` link).
  - CTA pilule sombre « Demander un devis ».
- **Effets** : soulignement animé au survol des liens (origin-left scale-x).
- **Mobile** : burger 3 traits, menu plein écran, scroll body verrouillé à l'ouverture, flèches discrètes par item.

### 3.2 Pied de page (Footer)
- Fond noir, 4 colonnes en desktop, repliées en colonne unique en mobile.
  1. **Marque** : logo + baseline + icônes sociales.
  2. **Navigation** : 5 liens principaux.
  3. **Services clés** : 5 services (pas la liste exhaustive — choix éditorial).
  4. **Contact** : téléphone + email + adresse + indicateur « réponse 24 h ouvrées ».
- Barre du bas : copyright + 3 liens légaux (`/mentions-legales`, `/politique-confidentialite`, `/cgv`).

### 3.3 Page d'accueil — Hero
- **Section plein écran** (`min-h-screen`).
- **Eyebrow** sobre `Vitrolles · depuis 2008`.
- **Titre principal** typographie Playfair Display, taille fluide (4xl mobile → 8xl desktop), avec mise en surbrillance bleue animée du segment « donne vie ».
- **Sous-titre** descriptif des 5 métiers.
- **2 CTAs** : « Contactez-nous » (primaire) + « Nos Services » (secondaire).
- **Bloc statistiques** (4 chiffres clés) :
  - 10+ années d'expérience
  - 150+ projets réalisés
  - 8 expertises métier
  - 95 % de clients satisfaits
- **Animation** : compteurs 0 → cible (easing cubique sur 1,6 s) déclenchés à l'apparition dans la vue (`useInView`, jouée une seule fois).
- **Décor** : gradient pastel (bleu/vert) + 2 cercles flous diffus, lignes géométriques fines (cachées en mobile).

### 3.4 Page d'accueil — Section Services
- Titre + label + sous-titre (ancre `#services`).
- **Grille adaptative** : 1 / 2 / 3 / 4 colonnes selon viewport.
- **Carte service** :
  - Image header (16:9 environ) avec hover scale 1.05.
  - Badge couleur + icône SVG en bas-gauche de l'image.
  - Titre + description courte (3 lignes max, `line-clamp-3`).
  - Lien « En savoir plus » → `/services/[slug]`.
- **Animations** : fade-up séquentiel (stagger 80 ms).

### 3.5 Page d'accueil — Section Réalisations
- **Logos clients** : grille 2/5 colonnes, 10 placeholders typographiques (initiales + nom).
- **Projets de référence** : grille 1/2/3 colonnes, 6 cartes (label + localisation + tag de service).
- Animations stagger à l'entrée.

### 3.6 Page d'accueil — Section À propos
- **Fond** : neutral-950 (mode sombre local pour rupture).
- **Colonne gauche** : titre, paragraphes d'histoire, badges de certifications (RGE QualiPV, Qualifelec, RGE QualiClimat, IRVE Qualif., Qualibat).
- **Colonne droite** :
  - 3 valeurs (icône + titre + description).
  - Bloc « snapshot » 3 colonnes : `2008 · Création`, `+40 · Collaborateurs`, `Sud · Région d'intervention`.

### 3.7 Page d'accueil — Section Contact
- **Colonne gauche (informations)** : titre + sous-titre, 3 contacts cliquables (tel/mailto/maps), encart horaires d'ouverture.
- **Colonne droite (formulaire)** :
  - Champs : Nom *, Email *, Téléphone, Société, Service (select), Message *.
  - Champ honeypot caché (`website`) — anti-bot.
  - Validation côté client (react-hook-form) + côté serveur (Zod).
  - États : `idle` → `loading` (spinner SVG) → `success` (écran de confirmation) ou `error` (message rouge).
  - Bouton « Nouveau message » après envoi.

### 3.8 Pages services dynamiques
Chaque page (`/services/[slug]`) est générée statiquement à la compilation. Structure :
1. **Hero immersif** : image plein écran, dégradé sombre, badge icône coloré, titre + sous-titre, lien retour vers `/#services`.
2. **Bloc principal (2/3 de la largeur)** :
   - Description longue (paragraphes éditoriaux).
   - Grille « Prestations incluses » avec coches colorées (couleur du service).
   - Étapes du processus : 01 Analyse, 02 Conception, 03 Réalisation, 04 Réception.
3. **Sidebar sticky (1/3)** :
   - CTA noir avec couleur d'accent du service, bouton devis + bouton appel.
   - Encart certifications.
4. **Bloc bas — Services complémentaires** : 3 cartes liens vers d'autres services.

### 3.9 Pages légales
Mise en page partagée (`components/LegalLayout.tsx`) :
- Lien retour accueil.
- Titre + date de mise à jour.
- Contenu structuré (h2 + paragraphes), styles `.legal-prose` dans `globals.css`.

Contenu :
- `/mentions-legales` : éditeur, directeur de publication, hébergeur, propriété intellectuelle, responsabilité.
- `/politique-confidentialite` : données collectées, finalités, durée de conservation, droits RGPD, cookies.
- `/cgv` : devis, délais, tarifs, garanties, litiges.

### 3.10 Page 404
- Centrée, fond clair, code « 404 » géant, titre + description, bouton retour accueil.

---

## 4. Backend — API contact

### 4.1 Endpoint
```
POST /api/contact
Content-Type: application/json
```

### 4.2 Schéma de requête (Zod)
| Champ | Type | Contraintes |
|---|---|---|
| `name` | string | min 2, max 120, requis |
| `email` | string | format email valide, max 200, requis |
| `phone` | string | max 40, optionnel |
| `company` | string | max 160, optionnel |
| `service` | string | max 80, optionnel |
| `message` | string | min 20, max 5000, requis |
| `website` | string | max 0 (honeypot), doit rester vide |

### 4.3 Codes de réponse
| Code | Cas |
|---|---|
| 201 | Message reçu (et envoyé si SMTP configuré) |
| 400 | Validation Zod en échec |
| 429 | Rate-limit dépassé (5 requêtes/heure/IP) |
| 502 | Erreur SMTP en aval |
| 500 | Erreur interne inattendue |

### 4.4 Mécanismes de sécurité
- **Validation stricte** côté serveur via Zod (jamais faire confiance au client).
- **Honeypot** : champ `website` invisible — si rempli, requête rejetée silencieusement.
- **Rate-limit en mémoire** : 5 requêtes par IP / heure (basé sur `x-forwarded-for` puis `x-real-ip`).
- **Échappement HTML** des contenus dans le mail (`escapeHtml`).
- **Runtime Node.js** explicite (`export const runtime = 'nodejs'`) — nodemailer n'est pas Edge-compatible.
- **CONTACT_TO** : adresse de réception distincte, configurable via env.

### 4.5 Module `lib/mailer.ts`
- Fonction `sendContactEmail(payload)` : crée un `Transporter` nodemailer mis en cache.
- **Fallback gracieux** : si les variables d'env ne sont pas définies, retourne `{ sent: false, reason: 'smtp-not-configured' }` sans erreur — le formulaire reste fonctionnel en dev.
- **Email HTML** stylisé : header dégradé bleu/vert, table des champs, message en blanc, pied de page horodaté (`fr-FR`).
- **Plain text fallback** pour clients mail sans HTML.
- **Reply-To** = email du visiteur → réponse directe en un clic.

### 4.6 Configuration SMTP
Variables d'environnement (`.env.local`, jamais commit) :
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=hl.human.link@gmail.com
SMTP_PASS=<app password 16 caractères>
CONTACT_TO=etatz56@gmail.com
```
- Port 465 → `secure: true` automatique.
- Port 587 ou autre → STARTTLS.
- Compatible Gmail (mot de passe d'application requis), OVH, Office 365, SendGrid, Mailgun.

---

## 5. Architecture technique

### 5.1 Stack
| Couche | Technologie | Rôle |
|---|---|---|
| Framework | Next.js 14.2 (App Router) | Rendu hybride SSG/SSR/Client |
| Langage | TypeScript 5 strict | Sûreté de typage |
| Style | Tailwind CSS 3.4 | Utility classes + design system |
| Animations | Framer Motion 11 | Entrées, hover, scroll-trigger |
| Formulaires | react-hook-form 7 | UX formulaires côté client |
| Validation | Zod 3 | Schéma partagé client/serveur |
| Email | Nodemailer 6 | SMTP (Gmail, OVH, etc.) |
| Polices | next/font (Google) | Outfit + Playfair Display |
| Images | next/image | Optim. & sizes responsive |

### 5.2 Structure des dossiers
```
gpe-energies/
├── app/                          App Router — chaque dossier = route
│   ├── layout.tsx                Layout racine (Navbar + Footer + fonts)
│   ├── page.tsx                  Page d'accueil (compose les sections)
│   ├── globals.css               Tailwind + classes utilitaires custom
│   ├── not-found.tsx             404
│   ├── api/contact/route.ts      Endpoint backend
│   ├── services/[slug]/          Pages dynamiques services
│   ├── mentions-legales/page.tsx
│   ├── politique-confidentialite/page.tsx
│   └── cgv/page.tsx
├── components/                   Composants React
│   ├── Navbar.tsx                Header fixe
│   ├── Footer.tsx                Pied de page
│   ├── Hero.tsx                  Section hero accueil
│   ├── ServicesSection.tsx       Grille services accueil
│   ├── ReferencesSection.tsx     Références clients
│   ├── AboutSection.tsx          À propos
│   ├── ContactSection.tsx        Formulaire + infos
│   ├── ServiceIcon.tsx           Icônes SVG par nom
│   └── LegalLayout.tsx           Wrapper pages légales
├── lib/                          Logique partagée
│   ├── services.ts               Données des 8 services
│   └── mailer.ts                 SMTP + template email
├── public/images/                Assets statiques (logo, etc.)
├── tailwind.config.ts            Tokens design (couleurs, anim, fonts)
├── tsconfig.json                 Config TypeScript
├── next.config.js                Config Next.js (domains images)
├── .env.example                  Template variables d'env
├── .env.local                    Secrets (gitignored)
├── .gitignore                    Exclusions Git
└── package.json                  Dépendances + scripts
```

### 5.3 Modèle de données — Service
```ts
interface Service {
  slug: string             // identifiant URL
  title: string            // ex. « Courants Forts »
  shortDesc: string        // teaser carte (≈ 130 car.)
  description: string[]    // paragraphes longs
  benefits: string[]       // 5 prestations clés
  icon: string             // nom (mappé dans ServiceIcon)
  color: string            // hex couleur d'accent
  image: string            // URL Unsplash pour mock-up
}
```
Source de vérité unique : `lib/services.ts`. Sert à la fois la grille d'accueil, le footer, les pages dynamiques, le sélecteur du formulaire.

---

## 6. Design system

### 6.1 Palette
| Token | Hex | Usage |
|---|---|---|
| `brand-50 → 900` | bleu (#0B7FED principal) | Liens, CTA primaire, accents |
| `accent-green` | `#00C896` | Confirmation, énergies vertes |
| `accent-greenLight` | `#e6faf5` | Fonds doux verts |
| `neutral-50 → 950` | grayscale | Texte, fonds, bordures |

### 6.2 Typographie
- **Sans** — Outfit (corps de texte, UI).
- **Display** — Playfair Display (titres `heading-display`).
- Tailles fluides (responsive `text-4xl sm:text-5xl md:text-6xl …`).

### 6.3 Composants réutilisables (CSS @layer)
```
.btn-primary         CTA bleu pilule
.btn-secondary       Bouton blanc bordure
.heading-display     Titres Playfair gras tracking-tight
.label-tag           Pilule avec bordure, uppercase tracking-widest
.section-padding     Padding horizontal responsive
.container-max       max-w-7xl mx-auto
.legal-prose         Styles h2/p/a/strong des pages légales
```

### 6.4 Principes UX
- Beaucoup de blanc, hiérarchie typographique forte.
- Animations subtiles (fade-up + scroll-triggered, jouées une fois).
- Pas de carrousel auto-rotatif, pas de pop-up, pas de tracking publicitaire.
- Boutons larges et lisibles (min 44 px tactile sur mobile).

---

## 7. Sécurité & conformité

| Volet | Mesure |
|---|---|
| Validation entrée | Zod côté serveur (jamais que côté client) |
| Anti-spam | Honeypot + rate-limit IP |
| Échappement | HTML escape sur tous les contenus utilisateur dans l'email |
| Secrets | `.env.local` gitignored, jamais en repo |
| HTTPS | À gérer au déploiement (Vercel, OVH, Netlify…) |
| RGPD | Page dédiée + mention sous le formulaire + droits explicites |
| Cookies | Aucun cookie de tracking — uniquement techniques |
| En-têtes | À renforcer en prod (CSP, X-Frame-Options) via `next.config.js` |

---

## 8. Performance & SEO

### 8.1 Performance
- **SSG** sur toutes les pages publiques → HTML pré-rendu, TTFB minimal.
- **next/image** avec `sizes` adaptés et `priority` sur les images critiques.
- **next/font** Google Fonts via CSS (pas de FOIT/FOUT, swap).
- **Code splitting** automatique par route.
- **Animations Framer Motion** déclenchées en `viewport once` pour ne pas re-rejouer.

### 8.2 SEO
- `metadata` par page (title + description + OpenGraph) via Next.js metadata API.
- Template de title (`%s — GPE Énergies & Services`).
- `metadataBase` configurée via `NEXT_PUBLIC_SITE_URL`.
- 404 propre.
- HTML sémantique (h1 unique par page, `<main>`, `<footer>`).
- `lang="fr"` sur `<html>`.

### 8.3 Accessibilité
- Contrastes WCAG AA respectés (texte neutral-700+ sur blanc).
- `aria-label` sur boutons icôniques (burger, sociaux).
- Focus visible (focus-ring sur inputs).
- Navigation clavier fonctionnelle.

---

## 9. Responsive design

| Breakpoint | Largeur | Comportement |
|---|---|---|
| `< sm` (< 640) | mobile portrait | 1 colonne partout, burger menu, hero plus compact |
| `sm` (≥ 640) | mobile paysage | Idem, plus d'espacement |
| `md` (≥ 768) | tablette | 2 colonnes services, navbar desktop |
| `lg` (≥ 1024) | laptop | 2 colonnes about/contact, 3 col. services |
| `xl` (≥ 1280) | desktop | 4 col. services, hero pleine taille |

---

## 10. Configuration & déploiement

### 10.1 Variables d'environnement
| Variable | Obligatoire | Description |
|---|---|---|
| `SMTP_HOST` | si email actif | Hôte SMTP |
| `SMTP_PORT` | si email actif | 465 (SSL) / 587 (STARTTLS) |
| `SMTP_USER` | si email actif | Login SMTP |
| `SMTP_PASS` | si email actif | Mot de passe (Gmail = app password) |
| `CONTACT_TO` | recommandé | Adresse qui reçoit les leads |
| `NEXT_PUBLIC_SITE_URL` | recommandé | URL canonique (SEO/OG) |

### 10.2 Scripts npm
```
npm run dev      Serveur dev (port 3000) avec hot reload
npm run build    Build production (SSG + bundle)
npm run start    Serveur production
npm run lint     ESLint via next lint
```

### 10.3 Déploiement recommandé
- **Vercel** (zero config, hébergeur Next.js de référence).
- Alternative : OVH Hosting Node.js, Netlify, Cloudflare Pages, Railway.
- Configurer les env vars dans le panneau de l'hébergeur (jamais en repo).
- Domaine custom + redirection HTTPS automatique.

---

## 11. Évolutions possibles

| Évolution | Effort | Bénéfice |
|---|---|---|
| Espace réalisations dédié (`/realisations`) avec galerie | M | Crédibilité commerciale |
| CMS headless (Sanity, Strapi) pour services + actus | L | Autonomie éditoriale |
| Blog / actualités | M | SEO contenu, autorité |
| Multilingue (fr/en) via `next-intl` | M | Marchés export |
| Stockage des leads en base (Supabase, Postgres) | M | Historique, analytics |
| Intégration CRM (HubSpot, Pipedrive) | M | Suivi commercial |
| Page certifications détaillée | S | Trust building |
| Module devis estimatif en ligne | L | Lead qualification |
| Analytics privacy-friendly (Plausible, Umami) | S | Mesure |
| Sitemap.xml + robots.txt automatiques | S | SEO technique |

---

## 12. Recettes & validation

### 12.1 Tests fonctionnels manuels
- [ ] Navigation entre toutes les pages (8 services + 3 légales + accueil).
- [ ] Ancres internes scrollent à la bonne section.
- [ ] Menu mobile s'ouvre/ferme proprement, scroll bloqué pendant.
- [ ] Formulaire : succès, erreur validation, erreur réseau (couper internet).
- [ ] Email reçu sur `CONTACT_TO`, format HTML correct.
- [ ] Reply-to du mail = email saisi par le visiteur.
- [ ] Honeypot : remplir `website` via DevTools → message rejeté silencieusement.
- [ ] Rate-limit : 6e POST en < 1 h → 429.

### 12.2 Tests responsive
- [ ] iPhone SE (375 px) : tous les contenus lisibles, pas de débordement horizontal.
- [ ] iPad portrait (768 px) : grille 2 colonnes services.
- [ ] Desktop 1440 px : grille 4 colonnes services, hero ample.

### 12.3 Tests performance
- [ ] Lighthouse mobile ≥ 90 sur Performance, Accessibility, Best Practices, SEO.
- [ ] LCP < 2,5 s sur 4G simulé.
- [ ] Aucune erreur console en prod.

---

**Fin du cahier des charges.**
