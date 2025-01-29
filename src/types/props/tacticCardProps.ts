import { Formation } from '../enums/formation'
import { FormationTag } from '../enums/formationTag'
import { FeaturedImage } from '../featuredImage'

export interface TacticCardProps {
  title: string
  slug: string
  formation: Formation
  rating: number
  featuredImage: FeaturedImage
  downloads: number
  description?: string
  tag?: FormationTag
  datePublished?: string
  author?: string
  files?: string[]
}
