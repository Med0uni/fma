'use client'

import { useLanguage } from '@/providers/language-provider'
import { Star, Trophy, Users, Building2, Coins } from 'lucide-react'
import Image from 'next/image'

interface TeamInfoProps {
  team: any // We'll define proper types later
}

export default function TeamInfo({ team }: TeamInfoProps) {
  const { language } = useLanguage()

  const stats = [
    {
      icon: Star,
      label: language === 'en' ? 'Rating' : 'التقييم',
      value: team.rating,
    },
    {
      icon: Building2,
      label: language === 'en' ? 'Training' : 'التدريب',
      value: team.training,
    },
    {
      icon: Users,
      label: language === 'en' ? 'Youth' : 'الشباب',
      value: team.youth,
    },
  ]

  return (
    <div className="rounded-lg border bg-card">
      {/* Team Header */}
      <div className="space-y-4 border-b p-6">
        <div className="relative mx-auto h-24 w-24">
          <Image
            src={`/images/teams/${team.id}.png`}
            alt={language === 'en' ? team.name : team.nameAr}
            fill
            className="object-contain"
          />
        </div>
        <div className="text-center">
          <h1 className="text-xl font-bold">
            {language === 'en' ? team.name : team.nameAr}
          </h1>
          <p className="text-sm text-muted-foreground">
            {language === 'en' ? team.league : team.leagueAr}
          </p>
        </div>
      </div>

      {/* Team Stats */}
      <div className="border-b p-6">
        <div className="space-y-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <stat.icon className="h-4 w-4 text-primary" />
                <span className="text-sm">{stat.label}</span>
              </div>
              <div className="font-medium">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Finances */}
      <div className="space-y-4 p-6">
        <h2 className="flex items-center gap-2 text-sm font-semibold">
          <Coins className="h-4 w-4" />
          {language === 'en' ? 'Finances' : 'الأموال'}
        </h2>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">
              {language === 'en' ? 'Balance' : 'الرصيد'}
            </span>
            <span>£{team.balance.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">
              {language === 'en' ? 'Transfer Budget' : 'ميزانية الانتقالات'}
            </span>
            <span>£{team.budget.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
