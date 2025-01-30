'use client'

import { useLanguage } from '@/providers/language-provider'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { fetchArticles } from '@/services/articlesService'
import { Article } from '@/types/article'
import NewsCard from '@/components/cards/NewsCard'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const demoData = [
  {
    id: 8,
    documentId: 'r24wfd9b7pgpuyizjzyqqx75',
    title: 'FM24 Winter Update Released',
    slug: 'fm24-winter-update',
    createdAt: '2025-01-18T17:20:32.631Z',
    updatedAt: '2025-01-18T22:32:48.356Z',
    publishedAt: '2025-01-18T22:32:48.372Z',
    locale: 'en',
    content:
      'Here’s everything you need to know about the Football Manager 2024 winter update...',
    category: 'News',
    datePublished: '2025-01-18',
    excerpt:
      'The latest database update includes all January transfers and various gameplay improvements.',
    featuredImage: {
      formats: {
        medium: {
          url: '/uploads/medium_stadium_364d059495.jpg',
        },
      },
    },
  },
  {
    id: 9,
    documentId: 'r24wfd9b7pgpuyizjzyqqx76',
    title: 'New Features in FM24 Tactics Update',
    slug: 'fm24-tactics-update',
    createdAt: '2025-01-19T10:15:32.631Z',
    updatedAt: '2025-01-19T15:30:48.356Z',
    publishedAt: '2025-01-19T15:32:48.372Z',
    locale: 'en',
    content: 'Football Manager 2024 tactics update brings exciting changes...',
    category: 'Tactics',
    datePublished: '2025-01-19',
    excerpt:
      'The latest tactics update for FM24 introduces new strategies and tweaks.',
    featuredImage: {
      formats: {
        medium: {
          url: '/uploads/medium_tactics_update_364d059495.jpg',
        },
      },
    },
  },
  {
    id: 10,
    documentId: 'r24wfd9b7pgpuyizjzyqqx77',
    title: 'Top 5 Football Manager 2024 Challenges',
    slug: 'fm24-challenges',
    createdAt: '2025-01-20T14:10:32.631Z',
    updatedAt: '2025-01-20T16:35:48.356Z',
    publishedAt: '2025-01-20T16:45:48.372Z',
    locale: 'en',
    content:
      'In this article, we explore the top 5 challenges to tackle in Football Manager 2024...',
    category: 'Challenges',
    datePublished: '2025-01-20',
    excerpt:
      'Looking for a new challenge in FM24? Here are the top 5 you can try.',
    featuredImage: {
      formats: {
        medium: {
          url: '/uploads/medium_challenges_364d059495.jpg',
        },
      },
    },
  },
  {
    id: 11,
    documentId: 'r24wfd9b7pgpuyizjzyqqx78',
    title: 'FM24 Advanced Scouting Tips',
    slug: 'fm24-advanced-scouting',
    createdAt: '2025-01-21T11:00:32.631Z',
    updatedAt: '2025-01-21T12:30:48.356Z',
    publishedAt: '2025-01-21T12:45:48.372Z',
    locale: 'en',
    content:
      'Advanced scouting tips in Football Manager 2024 can make all the difference in building your team...',
    category: 'Scouting',
    datePublished: '2025-01-21',
    excerpt: 'Master the art of scouting in FM24 with these advanced tips.',
    featuredImage: {
      formats: {
        medium: {
          url: '/uploads/medium_scouting_tips_364d059495.jpg',
        },
      },
    },
  },
]

export default function NewsSection() {
  const { language } = useLanguage()
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadArticles() {
      try {
        const data = await fetchArticles(language)
        setArticles(data)
        //console.log('Selected Language:', language)
        //console.log('Fetched Articles:', data)
      } catch (error) {
        console.error('Error loading articles:', error)
      } finally {
        setLoading(false)
      }
    }

    loadArticles()
  }, [language])

  return (
    <div className="flex flex-col gap-8">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold">
          {language === 'en' ? 'Latest News' : 'آخر الأخبار'}
        </h2>
        <Link
          href="/news"
          className="group flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80"
        >
          <span>{language === 'en' ? 'View All' : 'عرض المزيد'}</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {loading ? (
        <div className="text-center">
          {language === 'en' ? 'Loading...' : 'جاري التحميل...'}
        </div>
      ) : (
        <div className="grid gap-6">
          {demoData.map((article) => (
            <NewsCard key={article.id} {...article} />
          ))}
        </div>
      )}
    </div>
  )
}
