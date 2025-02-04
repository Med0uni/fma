import { LOCALES } from '@/lib/locales'
import { Article } from '@/types/articles/article'

export async function fetchArticles(
  language: string,
  pageSize: number = 6,
  page: number = 1,
  cacheStrategy: RequestCache = 'default',
  signal?: AbortSignal
): Promise<{ articles: Article[]; totalPages: number; totalItems: number }> {
  try {
    const locale = language === 'en' ? LOCALES.EN : LOCALES.AR

    const url = new URL(
      `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/articles`
    )
    url.searchParams.append('locale', locale)
    url.searchParams.append('populate', 'featuredImage')
    url.searchParams.append('populate', 'category')
    url.searchParams.append('populate', 'tags')
    url.searchParams.append('sort', 'publishedAt:desc')
    url.searchParams.append('pagination[page]', page.toString())
    url.searchParams.append('pagination[pageSize]', pageSize.toString())

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}`,
      },
      cache: cacheStrategy,
      signal,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    return {
      articles: data.data.map((article: any) => ({
        id: article.id,
        title: article.title,
        excerpt: article.excerpt,
        publishedAt: article.publishedAt,
        category: article.category,
        tags: article.tags,
        slug: article.slug,
        featuredImage: article.featuredImage,
        locale: language,
      })),
      totalPages: data.meta.pagination.pageCount,
      totalItems: data.meta.pagination.total,
    }
  } catch (error) {
    if ((error as Error).name !== 'AbortError') {
      console.error('Error fetching articles:', error)
    }
    throw error
  }
}
