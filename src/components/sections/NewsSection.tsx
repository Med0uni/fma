'use client'

import { useLanguage } from '@/providers/language-provider'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { fetchArticles } from '@/services/articlesService'
import { Article } from '@/types/article'
import NewsCard from '@/components/news/NewsCard'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const demoNews = [
  {
    title: 'Top 10 Wonderkids for FM24',
    titleAr: 'أفضل 10 مواهب شابة في FM24',
    excerpt:
      'Discover the most promising young talents in Football Manager 2024.',
    excerptAr: 'اكتشف أكثر المواهب الشابة الواعدة في Football Manager 2024.',
    date: '2024-02-10',
    category: 'Guides',
    categoryAr: 'الأدلة',
    slug: 'top-wonderkids-fm24',
    image: '/images/news/wonderkids.jpg',
  },
  //4b6f6cb3e22f1f2ecbba78e8c97f5f9a720c5c52623eead0d8479d0e1cb07296153e9341add7212bfd8a653d8ff80c59a5098131455eb527a566f0e0371d9e3bf162dd570f23686f45352cd1864cfea71256975506bea6107e997a15d067f0fc3d9812c95dd119389043979d271465711872c3c0b3fa96a2a75ede621a9aaaaa
  {
    title: 'Community Tactic of the Month',
    titleAr: 'تكتيك المجتمع لهذا الشهر',
    excerpt: "Check out this month's most successful community-created tactic.",
    excerptAr: 'تعرف على أنجح تكتيك تم إنشاؤه من قبل المجتمع هذا الشهر.',
    date: '2024-02-01',
    category: 'Community',
    categoryAr: 'المجتمع',
    slug: 'community-tactic-february',
    image: '/images/news/community.jpg',
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
        console.log('Selected Language:', language)
        console.log('Fetched Articles:', data)
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
          {articles.map((article) => (
            <NewsCard key={article.id} {...article} />
          ))}
        </div>
      )}
    </div>
  )
}
