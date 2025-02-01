import { FeaturedImage } from '../featuredImage'
import { Category } from './category'
import { Tag } from './tag'

export interface Article {
  id: number
  title: string
  excerpt: string
  content: string
  publishedAt: string
  slug: string
  locale: string
  category: Category
  tags: Tag[] | null
  featuredImage: FeaturedImage
}
