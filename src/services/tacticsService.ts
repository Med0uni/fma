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
      title: tactic.attributes.title,
      slug: tactic.attributes.slug,
      description: tactic.attributes.description,
      formation: tactic.attributes.Formation,
      tag: tactic.attributes.tag,
      datePublished: tactic.attributes.datePublished,
      author: tactic.attributes.author,
      featuredImage: tactic.attributes.featuredImage?.url || null,
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
