import { FeaturedImage } from '.././featuredImage'
import { Category } from '../articles/category'

export interface NewsCardProps {
  title: string
  excerpt: string
  publishedAt: string
  category: Category
  slug: string
  featuredImage: FeaturedImage
}
