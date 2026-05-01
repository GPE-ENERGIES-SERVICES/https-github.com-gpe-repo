import type { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Mentions légales — GPE Énergies & Services',
  description: "Mentions légales du site GPE Énergies & Services.",
}

export default function MentionsLegales() {
  return (
    <LegalLayout title="Mentions légales" lastUpdated="Avril 2026">
      <h2>Éditeur du site</h2>
      <p>
        <strong>GPE Énergies &amp; Services</strong>
        <br />
        92 Bd de l’Europe ZA, 13127 Vitrolles, France
        <br />
        Téléphone : +33 4 42 07 22 62
        <br />
        Email : contact@gpefrance.eu
      </p>

      <h2>Directeur de la publication</h2>
      <p>Le directeur de la publication est le représentant légal de GPE Énergies &amp; Services.</p>

      <h2>Hébergement</h2>
      <p>
        Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L’ensemble des contenus présents sur ce site (textes, images, logos, vidéos, graphismes)
        est la propriété exclusive de GPE Énergies &amp; Services ou de ses partenaires.
        Toute reproduction, représentation, modification ou exploitation, totale ou partielle,
        sans autorisation écrite préalable est strictement interdite.
      </p>

      <h2>Responsabilité</h2>
      <p>
        Les informations diffusées sur ce site sont fournies à titre indicatif. GPE Énergies &amp; Services
        s’efforce de garantir l’exactitude et la mise à jour de ces informations, sans pour autant
        en garantir l’exhaustivité.
      </p>
    </LegalLayout>
  )
}
