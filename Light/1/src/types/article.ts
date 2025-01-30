import { FeaturedImage } from './featuredImage'

export interface Article {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  slug: string
  featuredImage: FeaturedImage
}
