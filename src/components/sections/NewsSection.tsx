'use client'

import { useLanguage } from '@/providers/language-provider'
import NewsCard from '@/components/news/NewsCard'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const demoNews = [
  {
    title: 'FM24 Winter Update Released',
    titleAr: 'إصدار تحديث FM24 الشتوي',
    excerpt:
      'The latest database update includes all January transfers and various gameplay improvements.',
    excerptAr:
      'يتضمن تحديث قاعدة البيانات الأخير جميع الانتقالات في يناير وتحسينات متنوعة في اللعب.',
    date: '2024-02-15',
    category: 'Updates',
    categoryAr: 'التحديثات',
    slug: 'fm24-winter-update',
    image: '/images/news/winter-update.jpg',
  },
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
  {
    title: 'New Tactical Analysis Feature',
    titleAr: 'ميزة التحليل التكتيكي الجديدة',
    excerpt:
      'Sports Interactive introduces advanced tactical analysis tools in the latest update.',
    excerptAr:
      'تقدم Sports Interactive أدوات متقدمة لتحليل التكتيكات في التحديث الأخير.',
    date: '2024-02-05',
    category: 'Features',
    categoryAr: 'الميزات',
    slug: 'tactical-analysis-feature',
    image: '/images/news/tactics.jpg',
  },
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

  return (
    <div className="flex flex-col gap-8 ">
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
      <div className="grid gap-6">
        {demoNews.map((news, index) => (
          <NewsCard key={index} {...news} />
        ))}
      </div>
    </div>
  )
}
