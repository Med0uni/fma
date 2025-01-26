import { FeaturedImage } from './featuredImage'

export interface NewsCardProps {
  title: string
  excerpt: string
  date: string
  category: string
  slug: string
  featuredImage: FeaturedImage
}
