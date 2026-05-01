import type { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'CGV — GPE Énergies & Services',
  description: 'Conditions générales de vente.',
}

export default function CGV() {
  return (
    <LegalLayout title="Conditions générales de vente" lastUpdated="Avril 2026">
      <p>
        Les présentes CGV régissent les relations contractuelles entre GPE Énergies &amp; Services
        et ses clients dans le cadre de la fourniture de prestations d’installation électrique,
        d’énergies renouvelables, de CVC, de VRD et de bureau d’études.
      </p>

      <h2>Devis &amp; commande</h2>
      <p>
        Toute prestation fait l’objet d’un devis détaillé. La validation du devis vaut acceptation
        sans réserve des présentes conditions.
      </p>

      <h2>Délais d’exécution</h2>
      <p>
        Les délais sont indiqués à titre indicatif et engagent la société dans la mesure où
        les conditions d’intervention sont réunies (accès au site, fourniture des éléments
        contractuels, etc.).
      </p>

      <h2>Tarifs &amp; règlement</h2>
      <p>
        Les prix sont exprimés hors taxes. Les conditions de règlement sont précisées sur
        chaque devis. Tout retard de paiement entraîne l’application de pénalités au taux légal
        en vigueur.
      </p>

      <h2>Garantie</h2>
      <p>
        Nos installations bénéficient des garanties légales en vigueur (parfait achèvement,
        biennale, décennale selon la nature des travaux).
      </p>

      <h2>Litiges</h2>
      <p>
        À défaut de résolution amiable, tout litige relèvera de la compétence exclusive
        des tribunaux du ressort du siège social.
      </p>
    </LegalLayout>
  )
}
