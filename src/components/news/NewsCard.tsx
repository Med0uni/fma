'use client'

import { motion } from 'framer-motion'
import { Calendar, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/providers/language-provider'

interface NewsCardProps {
  title: string
  titleAr: string
  excerpt: string
  excerptAr: string
  date: string
  category: string
  categoryAr: string
  slug: string
  image: string
}

export default function NewsCard({
  title,
  titleAr,
  excerpt,
  excerptAr,
  date,
  category,
  categoryAr,
  slug,
  image,
}: NewsCardProps) {
  const { language } = useLanguage()

  return (
    <div className="group relative overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
      <div className="flex h-full flex-col md:flex-row">
        <div className="relative h-48 overflow-hidden md:h-auto md:w-1/3">
          <Image
            src={image}
            alt={language === 'en' ? title : titleAr}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="flex-1 p-4 md:p-6">
          <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground md:text-sm">
            <Calendar className="h-3 w-3 md:h-4 md:w-4" />
            <time dateTime={date}>{date}</time>
            <span>•</span>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-primary">
              {language === 'en' ? category : categoryAr}
            </span>
          </div>

          <h3 className="mb-2 line-clamp-2 text-lg font-semibold transition-colors group-hover:text-primary md:text-xl">
            {language === 'en' ? title : titleAr}
          </h3>

          <p className="mb-4 line-clamp-2 text-sm text-muted-foreground md:text-base">
            {language === 'en' ? excerpt : excerptAr}
          </p>

          <Link
            href={`/news/${slug}`}
            className="inline-flex items-center text-sm text-primary transition-colors hover:text-primary/80 md:text-base"
          >
            <span>{language === 'en' ? 'Read More' : 'اقرأ المزيد'}</span>
            <ChevronRight
              className={`h-4 w-4 ${language === 'ar' ? 'rotate-180' : ''}`}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
