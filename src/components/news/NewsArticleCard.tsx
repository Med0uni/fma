'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar } from 'lucide-react'
import { useLanguage } from '@/providers/language-provider'

interface NewsArticleCardProps {
  title: string
  excerpt: string
  date: string
  category: string
  slug: string
  featuredImage: {
    formats: {
      medium: {
        url: string
      }
    }
  }
}

export default function NewsArticleCard({
  title,
  excerpt,
  date,
  category,
  slug,
  featuredImage,
}: NewsArticleCardProps) {
  const { language } = useLanguage()

  const formattedDate = new Date(date).toLocaleDateString(language, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.article
      variants={item}
      whileHover={{ y: -5 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-lg border bg-card transition-colors hover:border-primary/50"
    >
      <Link href={`/news/${slug}`} className="flex h-full flex-col">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={featuredImage.formats.medium.url}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {category}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-4">
          <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <time dateTime={date}>{formattedDate}</time>
          </div>

          <h2 className="mb-2 line-clamp-2 flex-1 text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
            {title}
          </h2>

          <p className="line-clamp-2 text-sm text-muted-foreground">
            {excerpt}
          </p>
        </div>
      </Link>
    </motion.article>
  )
}
