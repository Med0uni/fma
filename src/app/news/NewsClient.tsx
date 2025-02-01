'use client'

import PageBanner from '@/components/ui/page-banner'
import { Newspaper } from 'lucide-react'
import { useLanguage } from '@/providers/language-provider'
import NewsServer from './NewsServer'

export default function NewsClient() {
  const { language } = useLanguage()

  return (
    <div>
      <PageBanner
        title={language === 'ar' ? 'آخر الأخبار' : 'Latest News'}
        subtitle={
          language === 'ar'
            ? 'ابق على اطلاع بآخر أخبار Football Manager والتحديثات وأبرز أحداث المجتمع.'
            : 'Stay updated with the latest Football Manager news, updates, and community highlights.'
        }
        backgroundImage="/assets/banners/press.jpg"
        icon={<Newspaper className="h-full w-full" />}
        hasSearch
      />
      <NewsServer language={language} />
    </div>
  )
}
