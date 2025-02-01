import { fetchArticles } from '@/services/articlesService'
import NewsGrid from '@/components/news/NewsGrid'
import ClientPagination from './ClientPagination'
import { Suspense } from 'react'

export default async function NewsServer({ language }: { language: string }) {
  const { articles, totalPages } = await fetchArticles(
    language,
    3,
    1,
    'force-cache'
  )

  return (
    <div className="container py-12">
      {/*<NewsGrid articles={articles} />*/}
      <Suspense fallback={<p>Loading...</p>}>
        <ClientPagination
          initialArticles={articles}
          //totalPages={totalPages}/*}
        />
      </Suspense>
    </div>
  )
}
