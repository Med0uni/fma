export interface ScoutingData {
  id: number
  title: string
  slug: string
  date: string
  category?: string
  featuredImage: {
    url: string
    alternativeText?: string | null
  }
}
