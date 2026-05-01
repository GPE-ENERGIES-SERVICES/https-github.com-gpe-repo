import type { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Politique de confidentialité — GPE Énergies & Services',
  description: 'Politique de confidentialité et traitement des données personnelles.',
}

export default function PolitiqueConfidentialite() {
  return (
    <LegalLayout title="Politique de confidentialité" lastUpdated="Avril 2026">
      <p>
        Cette politique décrit la manière dont GPE Énergies &amp; Services collecte, utilise
        et protège les données personnelles transmises via ce site.
      </p>

      <h2>Données collectées</h2>
      <p>
        Lorsque vous utilisez notre formulaire de contact, nous recueillons les informations
        suivantes : nom, adresse email, numéro de téléphone (optionnel), société (optionnel),
        service concerné et contenu du message.
      </p>

      <h2>Finalité du traitement</h2>
      <p>
        Ces données sont exclusivement utilisées pour répondre à votre demande et établir
        une relation commerciale. Elles ne sont en aucun cas revendues ou cédées à des tiers
        à des fins marketing.
      </p>

      <h2>Durée de conservation</h2>
      <p>
        Vos données sont conservées pendant la durée strictement nécessaire au traitement
        de votre demande, et au maximum 3 ans à compter du dernier contact.
      </p>

      <h2>Vos droits</h2>
      <p>
        Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, de portabilité,
        d’effacement et d’opposition. Pour exercer ces droits, contactez-nous à
        <a href="mailto:contact@gpefrance.eu"> contact@gpefrance.eu</a>.
      </p>

      <h2>Cookies</h2>
      <p>
        Ce site utilise uniquement des cookies techniques nécessaires à son fonctionnement.
        Aucun cookie de suivi publicitaire n’est déposé.
      </p>
    </LegalLayout>
  )
}
