import { Metadata } from 'next'
import NewsClient from './NewsClient'

export const metadata: Metadata = {
  title: 'News - FM Arabia',
  description:
    'Latest Football Manager news, updates, and community highlights.',
}

export default function NewsPage() {
  return <NewsClient />
}
