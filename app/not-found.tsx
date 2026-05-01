import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="text-center px-6">
        <div className="text-8xl font-bold text-neutral-200 mb-4">404</div>
        <h1 className="text-2xl font-semibold text-neutral-900 mb-3">Page introuvable</h1>
        <p className="text-neutral-500 mb-8 max-w-sm">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link href="/" className="btn-primary">
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  )
}
