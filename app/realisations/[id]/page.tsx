import { notFound } from 'next/navigation'
import { projects, getProjectById } from '@/lib/projects'
import type { Metadata } from 'next'
import ProjectPageClient from './ProjectPageClient'

interface Props {
  params: { id: string }
}

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectById(params.id)
  if (!project) return { title: 'Projet introuvable' }
  return {
    title: `${project.title} — GPE Énergies & Services`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectById(params.id)
  if (!project) notFound()
  return <ProjectPageClient project={project} />
}
