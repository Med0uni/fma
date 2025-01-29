'use client'

import { useLanguage } from '@/providers/language-provider'
import Link from 'next/link'
import ScoutingCard from '../cards/ScoutingCard'
import { ArrowRight } from 'lucide-react'
import { useScoutings } from '@/hooks/useScoutings'

export default function ScoutingSection() {
  const { language } = useLanguage()
  const { scoutings, loading, error } = useScoutings(language)

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          {language === 'en' ? 'Scouting' : 'الكشافة'}
        </h2>
        <Link
          href="/scouting"
          className="group flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80"
        >
          <span>{language === 'en' ? 'View All' : 'عرض المزيد'}</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      <div className="grid gap-4">
        {scoutings.map((item, index) => (
          <ScoutingCard key={index} {...item} />
        ))}
      </div>
    </div>
  )
}
