'use client'

import { useState } from 'react'
import { useLanguage } from '@/providers/language-provider'
import TeamInfo from '@/components/teams/team-info'
import SquadTable from '@/components/teams/squad-table'
import { ChevronRight, Search } from 'lucide-react'
import Link from 'next/link'

interface TeamDetailsClientProps {
  team: any // We'll define proper types later
}

export default function TeamDetailsClient({ team }: TeamDetailsClientProps) {
  const { language } = useLanguage()
  const [squadType, setSquadType] = useState<'first' | 'youth'>('first')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/teams" className="transition-colors hover:text-primary">
          {language === 'en' ? 'Teams' : 'الفرق'}
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">
          {language === 'en' ? team.name : team.nameAr}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Team Info */}
        <div className="lg:col-span-1">
          <TeamInfo team={team} />
        </div>

        {/* Squad Section */}
        <div className="space-y-6 lg:col-span-3">
          <div className="flex flex-col justify-between gap-4 sm:flex-row">
            {/* Squad Type Toggle */}
            <div className="flex rounded-lg border p-1">
              <button
                onClick={() => setSquadType('first')}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  squadType === 'first'
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                }`}
              >
                {language === 'en' ? 'First Team' : 'الفريق الأول'}
              </button>
              <button
                onClick={() => setSquadType('youth')}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  squadType === 'youth'
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                }`}
              >
                {language === 'en' ? 'Youth Team' : 'فريق الشباب'}
              </button>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder={
                  language === 'en'
                    ? 'Search players...'
                    : '...البحث عن اللاعبين'
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-border bg-background py-2 pl-9 pr-4 transition-colors focus:border-primary"
              />
            </div>
          </div>

          <SquadTable
            squadType={squadType}
            searchQuery={searchQuery}
            teamId={team.id}
          />
        </div>
      </div>
    </div>
  )
}
