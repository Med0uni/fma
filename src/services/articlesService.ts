import axios from 'axios'
import { LOCALES } from '@/lib/locales'

const apiClient = axios.create({
  baseURL: process.env.STRAPI_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
  },
})

export async function fetchArticles(limit: number = 3) {
  try {
    const [enResponse, arResponse] = await Promise.all([
      apiClient.get('/articles', { params: { locale: LOCALES.EN } }),
      apiClient.get('/articles', { params: { locale: LOCALES.AR } }),
    ])

    const enArticles = enResponse.data.data.map((article: any) => ({
      id: article.id,
      title: article.title,
      excerpt: article.excerpt,
      date: article.datePublished,
      category: article.tags,
      slug: article.slug,
      locale: LOCALES.EN,
    }))

    const arArticles = arResponse.data.data.map((article: any) => ({
      id: article.id,
      title: article.title,
      excerpt: article.excerpt,
      date: article.datePublished,
      category: article.tags,
      slug: article.slug,
      locale: LOCALES.AR,
    }))

    const allArticles = [...enArticles, ...arArticles]
      .sort(
        (
          a: { date: string | number | Date },
          b: { date: string | number | Date }
        ) => new Date(b.date).getTime() - new Date(a.date).getTime()
      )
      .slice(0, limit)

    return allArticles
  } catch (error) {
    console.error('Error fetching articles:', error)
    throw error
  }
}
