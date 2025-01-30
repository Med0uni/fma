import { GetStaticProps, GetStaticPaths } from 'next'
import ArticleDetail from '@/components/ArticleDetail'
import { fetchArticle, fetchArticleSlugs } from '@/lib/api'

interface ArticlePageProps {
  article: ArticleDetailProps
}

export default function ArticlePage({ article }: ArticlePageProps) {
  return <ArticleDetail {...article} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await fetchArticleSlugs()

  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const article = await fetchArticle(params?.slug as string)

    return {
      props: {
        article,
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
