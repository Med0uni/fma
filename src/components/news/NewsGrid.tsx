'use client'

import { motion } from 'framer-motion'
import NewsArticleCard from './NewsArticleCard'
import Pagination from './Pagination'
import { useLanguage } from '@/providers/language-provider'

interface NewsGridProps {
  articles: any[]
  currentPage: number
  totalPages: number
}

export default function NewsGrid({
  articles,
  currentPage,
  totalPages,
}: NewsGridProps) {
  const { language } = useLanguage()

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="space-y-8">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {articles.map((article) => (
          <NewsArticleCard key={article.id} {...article} />
        ))}
      </motion.div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        language={language}
      />
    </div>
  )
}
