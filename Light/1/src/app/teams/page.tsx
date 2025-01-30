import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import PageBanner from '@/components/ui/page-banner'
import { Users } from 'lucide-react'
import FilterSearch from '@/components/teams/filter-search'
import TeamTable from '@/components/teams/team-table'
import TeamsClient from './teamsClient'

export const metadata: Metadata = {
  title: 'Teams - FM Arabia',
  description:
    'Explore team guides, tactics, and strategies for Football Manager.',
}

export default function TeamsPage() {
  return (
    <div>
      <PageBanner
        title="Team Guides"
        titleAr="دليل الفرق"
        subtitle="Discover comprehensive guides and strategies for managing different teams."
        subtitleAr="اكتشف أدلة واستراتيجيات شاملة لإدارة الفرق المختلفة."
        backgroundImage="/assets/banners/teams.jpeg"
        icon={<Users className="h-full w-full" />}
      />
      <div className="container space-y-8 py-12"></div>
    </div>
  )
}
