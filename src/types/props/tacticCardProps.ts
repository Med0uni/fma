import { Formation } from '../enums/formation'
import { FormationTag } from '../enums/formationTag'
import { FeaturedImage } from '../featuredImage'

export interface TacticCardProps {
  title: string // The title of the tactic
  slug: string // The slug for the tactic, used for generating URLs
  formation: Formation // The formation type (Enumeration in Strapi)
  rating: number // The tactic's rating
  featuredImage: FeaturedImage // The featured image for the tactic
  downloads: number // The number of downloads for the tactic
  description?: string // A rich text description of the tactic
  tag?: FormationTag // Tag associated with the tactic (Enumeration)
  datePublished?: string // Date the tactic was published
  author?: string // The author of the tactic
  files?: string[] // Associated files (URLs)
}
