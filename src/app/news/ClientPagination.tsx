'use client'

import { useArticles } from '@/hooks/useArticles'
import { Article } from '@/types/articles/article'
import NewsGrid from '@/components/news/NewsGrid'

interface Props {
  initialArticles: Article[]
}

export default function ClientPagination({ initialArticles }: Props) {
  const { articles, currentPage, totalPages, setCurrentPage, loading } =
    useArticles('en', 3)

  return (
    <>
      <NewsGrid
        articles={currentPage === 1 ? initialArticles : articles}
        currentPage={0}
        totalPages={0}
      />
      <div className="pagination-controls">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        ></button>
        <button
          disabled={currentPage >= totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        ></button>
      </div>
      {loading && <p>Loading more articles...</p>}
    </>
  )
}
