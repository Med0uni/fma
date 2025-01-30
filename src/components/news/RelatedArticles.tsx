'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar } from 'lucide-react'

interface RelatedArticle {
  id: number
  title: string
  slug: string
  excerpt: string
  date: string
  category: string
}

interface RelatedArticlesProps {
  articles: RelatedArticle[]
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article, index) => (
        <motion.article
          key={article.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="group rounded-lg border bg-card p-4 transition-colors hover:border-primary/50"
        >
          <Link href={`/news/${article.slug}`}>
            <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString()}
              </time>
              <span>•</span>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
                {article.category}
              </span>
            </div>

            <h3 className="mb-2 line-clamp-2 text-lg font-semibold transition-colors group-hover:text-primary">
              {article.title}
            </h3>

            <p className="line-clamp-2 text-sm text-muted-foreground">
              {article.excerpt}
            </p>
          </Link>
        </motion.article>
      ))}
    </div>
  )
}
