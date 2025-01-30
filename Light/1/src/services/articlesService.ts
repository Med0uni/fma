import axios from 'axios'
import { LOCALES } from '@/lib/locales'

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}`,
  },
})
export async function fetchArticles(language: string, limit: number = 3) {
  try {
    const locale = language === 'en' ? LOCALES.EN : LOCALES.AR

    const response = await apiClient.get('/articles', {
      params: { locale, populate: 'featuredImage' },
    })

    const articles = response.data.data.map((article: any) => ({
      id: article.id,
      title: article.title,
      excerpt: article.excerpt,
      date: article.datePublished,
      category: article.tags,
      slug: article.slug,
      featuredImage: article.featuredImage,
      locale: language,
    }))

    const sortedArticles = articles
      .sort(
        (
          a: { date: string | number | Date },
          b: { date: string | number | Date }
        ) => new Date(b.date).getTime() - new Date(a.date).getTime()
      )
      .slice(0, limit)
    return sortedArticles
  } catch (error) {
    console.error('Error fetching articles:', error)
    throw error
  }
}
