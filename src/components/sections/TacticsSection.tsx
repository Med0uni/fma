'use client'

import { useLanguage } from '@/providers/language-provider'
import Link from 'next/link'
import TacticCard from '../cards/TacticCard'
import { useTactics } from '@/hooks/useTactics'
import { ArrowRight } from 'lucide-react'

export default function TacticsSection() {
  const { language } = useLanguage()

  const { tactics, loading, error } = useTactics(language, 4)

  if (loading) {
    return <p>{language === 'en' ? 'Loading...' : 'جاري التحميل...'}</p>
  }

  if (error) {
    return (
      <p>
        {language === 'en' ? 'Error loading tactics' : 'خطأ في تحميل التكتيكات'}
      </p>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          {language === 'en' ? 'Popular Tactics' : 'التكتيكات الشائعة'}
        </h2>
        <Link
          href="/tactics"
          className="group flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80"
        >
          <span>{language === 'en' ? 'View All' : 'عرض المزيد'}</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      <div className="grid gap-4">
        {tactics.map((tactic, index) => (
          <TacticCard key={index} {...tactic} />
        ))}
      </div>
    </div>
  )
}
