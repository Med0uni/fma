import { useState, useEffect } from 'react'
import { fetchArticles } from '../services/articlesService'
import { Article } from '../types/article'

export function useArticles(limit: number = 3) {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadArticles() {
      try {
        const data = await fetchArticles(limit)
        setArticles(data)
      } catch (error) {
        console.error('Error fetching articles:', error)
      } finally {
        setLoading(false)
      }
    }

    loadArticles()
  }, [limit])

  return { articles, loading }
}
