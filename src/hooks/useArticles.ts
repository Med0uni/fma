'use client'

import { useEffect, useRef, useState } from 'react'
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
  const abortControllerRef = useRef<AbortController>()

  useEffect(() => {
    // Reset to first page when language changes
    setCurrentPage(1)
  }, [language])

  useEffect(() => {
    const fetchData = async () => {
      abortControllerRef.current?.abort()
      abortControllerRef.current = new AbortController()

      setLoading(true)
      setError(null)

      try {
        const { articles, totalPages } = await fetchArticles(
          language,
          pageSize,
          currentPage,
          cacheStrategy,
          abortControllerRef.current.signal
        )

        // Handle cases where current page might be beyond total pages
        if (currentPage > totalPages && totalPages > 0) {
          setCurrentPage(totalPages)
          return
        }

        setArticles(articles)
        setTotalPages(totalPages)
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          setError('Failed to load articles')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    return () => {
      abortControllerRef.current?.abort()
    }
  }, [language, pageSize, currentPage, cacheStrategy])

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  return {
    articles,
    currentPage,
    totalPages,
    goToPage,
    loading,
    error,
  }
}
