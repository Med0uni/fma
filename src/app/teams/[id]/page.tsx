import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import TeamDetailsClient from './team-details-client'
import { mockTeams } from '../data'

interface TeamPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({
  params,
}: TeamPageProps): Promise<Metadata> {
  const team = mockTeams.find((t) => t.id === params.id)
  if (!team) return { title: 'Team Not Found' }

  return {
    title: `${team.name} - FM Arabia`,
    description: `Detailed information about ${team.name}, including squad, finances, and facilities.`,
  }
}

export default function TeamPage({ params }: TeamPageProps) {
  const team = mockTeams.find((t) => t.id === params.id)
  if (!team) notFound()

  return <TeamDetailsClient team={team} />
}
