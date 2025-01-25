import { FeaturedImage } from "./featuredImage"

export interface TacticCard {
  id: string
  title: string
  slug: string
  description: string
  formation: string
  tag: string
  datePublished: string
  author: string
  featuredImage: FeaturedImage
  locale: string
}
