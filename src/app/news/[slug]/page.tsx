import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Calendar, ArrowLeft, Clock, Share2 } from 'lucide-react'
import Link from 'next/link'
import { getArticleBySlug, getRelatedArticles } from '../data'
import RelatedArticles from '@/components/news/RelatedArticles'

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  try {
    const article = await getArticleBySlug(params.slug)

    return {
      title: `${article.title} | FM Arabia News`,
      description: article.excerpt,
      openGraph: {
        title: article.title,
        description: article.excerpt,
        type: 'article',
        publishedTime: article.date,
        authors: [article.author],
        images: [
          {
            url: article.featuredImage.formats.large.url,
            width: 1200,
            height: 630,
            alt: article.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: article.title,
        description: article.excerpt,
        images: [article.featuredImage.formats.large.url],
      },
    }
  } catch (error) {
    return {
      title: 'Article Not Found | FM Arabia',
      description: 'The requested article could not be found.',
    }
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  let article
  try {
    article = await getArticleBySlug(params.slug)
  } catch (error) {
    notFound()
  }

  const relatedArticles = await getRelatedArticles(params.slug)

  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="relative min-h-screen">
      <div className="relative h-[60vh] w-full">
        <Image
          src={article.featuredImage.formats.large.url}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="container relative z-10 -mt-32">
        <Link
          href="/news"
          className="mb-8 inline-flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to News</span>
        </Link>

        <div className="rounded-lg border bg-card shadow-lg">
          <div className="p-8">
            <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={article.date}>{formattedDate}</time>
              </div>
              {article.readTime && (
                <>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime}</span>
                  </div>
                </>
              )}
              <span>•</span>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                {article.category}
              </span>
            </div>

            <h1 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              {article.title}
            </h1>

            {article.author && (
              <div className="mb-8 flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-muted">
                  <Image
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${article.author}`}
                    alt={article.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">{article.author}</div>
                  <div className="text-sm text-muted-foreground">Author</div>
                </div>
              </div>
            )}

            <div
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {article.tags && (
              <div className="mt-8 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {article.socialShares && (
              <div className="mt-8 flex items-center gap-4">
                <Share2 className="h-4 w-4 text-muted-foreground" />
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span>{article.socialShares.twitter} shares on X</span>
                  <span>
                    {article.socialShares.facebook} shares on Facebook
                  </span>
                  <span>
                    {article.socialShares.linkedin} shares on LinkedIn
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {relatedArticles.length > 0 && (
          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-bold">Related Articles</h2>
            <RelatedArticles articles={relatedArticles} />
          </div>
        )}
      </div>
    </article>
  )
}
