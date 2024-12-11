'use client'

import { useState } from 'react'
import FilterSearch from '@/components/teams/filter-search'
import TeamTable from '@/components/teams/team-table'

interface Team {
  id: string
  name: string
  nameAr: string
  league: string
  leagueAr: string
  rating: number
  balance: number
  budget: number
  training: number
  youth: number
}

interface TeamsClientProps {
  initialTeams: Team[]
}

export default function TeamsClient({ initialTeams }: TeamsClientProps) {
  const [teams, setTeams] = useState<Team[]>(initialTeams)

  const handleFiltersChange = (filters: any) => {
    console.log('Filters changed:', filters)
    // Add filtering logic here if needed
  }

  return (
    <>
      <FilterSearch onFiltersChange={handleFiltersChange} />
      <TeamTable teams={teams} />
    </>
  )
}
