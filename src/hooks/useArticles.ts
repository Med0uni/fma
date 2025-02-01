'use client'

import { useEffect, useState } from 'react'
import { fetchArticles } from '@/services/articlesService'
import { Article } from '@/types/articles/article'

export function useArticles(
  language: string,
  pageSize: number = 6,
  cacheStrategy: RequestCache = 'default'
) {
  const [articles, setArticles] = useState<Article[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadArticles() {
      setLoading(true)
      try {
        const { articles, totalPages } = await fetchArticles(
          language,
          pageSize,
          currentPage,
          cacheStrategy
        )
        setArticles(articles)
        setTotalPages(totalPages)
      } catch (err) {
        setError('Failed to load articles')
      } finally {
        setLoading(false)
      }
    }

    loadArticles()
  }, [language, pageSize, currentPage, cacheStrategy])

  return { articles, currentPage, totalPages, setCurrentPage, loading, error }
}
