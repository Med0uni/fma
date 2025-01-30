import axios from 'axios'
import { LOCALES } from '@/lib/locales'

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}`,
  },
})

/**
 * Fetches scouting data from the API based on the specified locale and limit.
 * @param {string} language - The language to fetch scoutings for ('en' or 'ar').
 * @param {number} [limit=3] - The maximum number of scouting data to fetch.
 * @returns {Promise<Array>} - A promise resolving to a list of scouting data.
 */
export async function fetchScoutings(language: string, limit: number) {
  try {
    const locale = language === 'en' ? LOCALES.EN : LOCALES.AR

    const response = await apiClient.get('/scoutings', {
      params: { 
        locale, 
        'populate[featuredImage]': true, 
        'populate[category]': true, 
      },
    });

    const scoutings = response.data.data.map((scouting: any) => ({
      id: scouting.id,
      title: scouting.title,
      slug: scouting.slug,
      date: scouting.date,
      category: scouting.category.name,
      featuredImage: scouting.featuredImage || null,
      content: scouting.content,
      locale: language,
    }))

    const sortedScoutings = scoutings
      .sort(
        (
          a: { date: string | number | Date },
          b: { date: string | number | Date }
        ) => new Date(b.date).getTime() - new Date(a.date).getTime()
      )
      .slice(0, limit)

    return sortedScoutings
  } catch (error) {
    console.error('Error fetching scoutings:', error)
    throw error
  }
}
