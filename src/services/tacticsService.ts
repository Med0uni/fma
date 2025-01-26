import axios from 'axios'
import { LOCALES } from '@/lib/locales'

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}`,
  },
})

/**
 * Fetches tactics from the API based on the specified locale and limit.
 * @param {string} language - The language to fetch tactics for ('en' or 'ar').
 * @param {number} [limit=3] - The maximum number of tactics to fetch.
 * @returns {Promise<Array>} - A promise resolving to a list of tactics.
 */
export async function fetchTactics(language: string, limit: number = 4) {
  try {
    const locale = language === 'en' ? LOCALES.EN : LOCALES.AR

    const response = await apiClient.get('/tactics', {
      params: { locale, populate: 'featuredImage' },
    })

    const tactics = response.data.data.map((tactic: any) => ({
      id: tactic.id,
      title: tactic.title,
      slug: tactic.slug,
      description: tactic.description,
      formation: tactic.Formation,
      tag: tactic.tag,
      datePublished: tactic.datePublished,
      author: tactic.author,
      featuredImage: tactic.featuredImage || null,
      locale: language,
    }))

    const sortedTactics = tactics
      .sort(
        (
          a: { datePublished: string | number | Date },
          b: { datePublished: string | number | Date }
        ) =>
          new Date(b.datePublished).getTime() -
          new Date(a.datePublished).getTime()
      )
      .slice(0, limit)

    return sortedTactics
  } catch (error) {
    console.error('Error fetching tactics:', error)
    throw error
  }
}
