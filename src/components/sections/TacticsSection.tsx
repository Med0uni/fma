'use client'

import { useLanguage } from '@/providers/language-provider'
import Link from 'next/link'
import TacticCard from '../cards/TacticCard'

const demoTactics = [
  {
    title: 'Tiki-Taka 4-3-3',
    titleAr: 'تيكي-تاكا 4-3-3',
    formation: '4-3-3',
    downloads: 2500,
    rating: 4.9,
    image: '/images/tactics/tiki-taka.jpg',
    slug: 'tiki-taka-433',
  },
  {
    title: 'Park the Bus 4-2-3-1',
    titleAr: 'جيجينبريس 4-2-3-1',
    formation: '4-2-3-1',
    downloads: 1800,
    rating: 4.7,
    image: '/images/tactics/gegenpress.jpg',
    slug: 'gegenpress-4231',
  },
  {
    title: "Ahly's 4-2-3-1",
    titleAr: 'جيجينبريس 4-2-3-1',
    formation: '4-2-3-1',
    downloads: 1800,
    rating: 4.7,
    image: '/images/tactics/gegenpress.jpg',
    slug: 'gegenpress-4231',
  },
  {
    title: 'Gegenpress 4-2-3-1',
    titleAr: 'جيجينبريس 4-2-3-1',
    formation: '4-2-3-1',
    downloads: 1800,
    rating: 4.7,
    image: '/images/tactics/gegenpress.jpg',
    slug: 'gegenpress-4231',
  },
]

export default function TacticsSection() {
  const { language } = useLanguage()

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          {language === 'en' ? 'Popular Tactics' : 'التكتيكات الشائعة'}
        </h2>
        <Link href="/tactics" className="text-primary hover:underline">
          {language === 'en' ? 'View All' : 'عرض المزيد'}
        </Link>
      </div>
      <div className="grid gap-4">
        {demoTactics.map((tactic, index) => (
          <TacticCard key={index} {...tactic} />
        ))}
      </div>
    </div>
  )
}
