'use client'

import { useLanguage } from '@/providers/language-provider'
import Link from 'next/link'
import ScoutingCard from '../cards/ScoutingCard'
import { ArrowRight } from 'lucide-react'
import { useScoutings } from '@/hooks/useScoutings'

const demoData = [
  {
    id: 4,
    title: 'Next Haaland Found in Norwegian Leagu',
    slug: 'next-haaland',
    date: '2025-01-28',
    content:
      'Haaland’s career took off during the 2015-2016 season when he showcased his talent by scoring eighteen goals in just fourteen matches for Bryne’s reserve team. Subsequently, he secured a spot in the starting lineup in 2016. After a brief spell at 1899 Hoffenheim, he joined Molde in 2017. His professional debut came in April 2017, leading to a successful first season with the club.\n\nHis standout performances attracted the attention of Red Bull Salzburg, where he signed a contract lasting five years from 2019. Haaland’s exceptional run continued with historic appearances in various competitions. Borussia Dortmund signed him in January 2020, marking a period of remarkable achievements, such as becoming the Bundesliga Player of the Month in January.\n\nHaaland’s success soared in the 2020-2021 season, where he reached significant milestones, including scoring his 100th senior career goal and earning multiple awards for his outstanding performances.',
    createdAt: '2025-01-28T17:22:13.063Z',
    updatedAt: '2025-01-28T17:22:13.063Z',
    publishedAt: '2025-01-28T17:22:13.104Z',
    locale: 'en',
    featuredImage: {
      formats: {
        thumbnail: {
          url: '/uploads/thumbnail_haaland_ceb947b0ad.png',
        },
      },
    },
    category: 'wonderkid',
  },
  {
    id: 4,
    title: 'Next Haaland Found in Norwegian Leagu',
    slug: 'next-haaland',
    date: '2025-01-28',
    content:
      'Haaland’s career took off during the 2015-2016 season when he showcased his talent by scoring eighteen goals in just fourteen matches for Bryne’s reserve team. Subsequently, he secured a spot in the starting lineup in 2016. After a brief spell at 1899 Hoffenheim, he joined Molde in 2017. His professional debut came in April 2017, leading to a successful first season with the club.\n\nHis standout performances attracted the attention of Red Bull Salzburg, where he signed a contract lasting five years from 2019. Haaland’s exceptional run continued with historic appearances in various competitions. Borussia Dortmund signed him in January 2020, marking a period of remarkable achievements, such as becoming the Bundesliga Player of the Month in January.\n\nHaaland’s success soared in the 2020-2021 season, where he reached significant milestones, including scoring his 100th senior career goal and earning multiple awards for his outstanding performances.',
    createdAt: '2025-01-28T17:22:13.063Z',
    updatedAt: '2025-01-28T17:22:13.063Z',
    publishedAt: '2025-01-28T17:22:13.104Z',
    locale: 'en',
    featuredImage: {
      formats: {
        thumbnail: {
          url: '/uploads/thumbnail_haaland_ceb947b0ad.png',
        },
      },
    },
    category: 'wonderkid',
  },
  {
    id: 4,
    title: 'Next Haaland Found in Norwegian Leagu',
    slug: 'next-haaland',
    date: '2025-01-28',
    content:
      'Haaland’s career took off during the 2015-2016 season when he showcased his talent by scoring eighteen goals in just fourteen matches for Bryne’s reserve team. Subsequently, he secured a spot in the starting lineup in 2016. After a brief spell at 1899 Hoffenheim, he joined Molde in 2017. His professional debut came in April 2017, leading to a successful first season with the club.\n\nHis standout performances attracted the attention of Red Bull Salzburg, where he signed a contract lasting five years from 2019. Haaland’s exceptional run continued with historic appearances in various competitions. Borussia Dortmund signed him in January 2020, marking a period of remarkable achievements, such as becoming the Bundesliga Player of the Month in January.\n\nHaaland’s success soared in the 2020-2021 season, where he reached significant milestones, including scoring his 100th senior career goal and earning multiple awards for his outstanding performances.',
    createdAt: '2025-01-28T17:22:13.063Z',
    updatedAt: '2025-01-28T17:22:13.063Z',
    publishedAt: '2025-01-28T17:22:13.104Z',
    locale: 'en',
    featuredImage: {
      formats: {
        thumbnail: {
          url: '/uploads/thumbnail_haaland_ceb947b0ad.png',
        },
      },
    },
    category: 'wonderkid',
  },
  {
    id: 4,
    title: 'Next Haaland Found in Norwegian Leagu',
    slug: 'next-haaland',
    date: '2025-01-28',
    content:
      'Haaland’s career took off during the 2015-2016 season when he showcased his talent by scoring eighteen goals in just fourteen matches for Bryne’s reserve team. Subsequently, he secured a spot in the starting lineup in 2016. After a brief spell at 1899 Hoffenheim, he joined Molde in 2017. His professional debut came in April 2017, leading to a successful first season with the club.\n\nHis standout performances attracted the attention of Red Bull Salzburg, where he signed a contract lasting five years from 2019. Haaland’s exceptional run continued with historic appearances in various competitions. Borussia Dortmund signed him in January 2020, marking a period of remarkable achievements, such as becoming the Bundesliga Player of the Month in January.\n\nHaaland’s success soared in the 2020-2021 season, where he reached significant milestones, including scoring his 100th senior career goal and earning multiple awards for his outstanding performances.',
    createdAt: '2025-01-28T17:22:13.063Z',
    updatedAt: '2025-01-28T17:22:13.063Z',
    publishedAt: '2025-01-28T17:22:13.104Z',
    locale: 'en',
    featuredImage: {
      formats: {
        thumbnail: {
          url: '/uploads/thumbnail_haaland_ceb947b0ad.png',
        },
      },
    },
    category: 'wonderkid',
  },
]

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
        {demoData.map((item, index) => (
          <ScoutingCard key={index} {...item} />
        ))}
      </div>
    </div>
  )
}
