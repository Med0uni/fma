'use client'

import { useLanguage } from '@/providers/language-provider'
import Link from 'next/link'
import TacticCard from '../cards/TacticCard'
import { useTactics } from '@/hooks/useTactics'
import { ArrowRight } from 'lucide-react'

const demoData = [
  {
    id: 5,
    documentId: 'fuq0dwfb7r4b336xixg466sq',
    title: 'Tiki-Taka 4-3-3',
    slug: 'tiki-taka-433',
    description:
      'If you wish to view a more in depth breakdown and further tactical analysis check out the below video! I also have gone to the effort to make Attacking/Defending variants which can you find in the video!\n\n\n\nTo Stay in touch with myself, to ask any questions or request tactics, follow my socials <3\nTwitch TwitterYoutube Discord Instagram\n\nTactic TESTING\n\n\n![OIP.jpeg](http://localhost:1331/uploads/OIP_fefb9fae05.jpeg)\nData Hub\n\n\n[https://www.youtube.com/watch?v=dAw5waeS3Yo](youtube)\n\n\n\nTactic Screenshots\n\n\n\n\n',
    Formation: 'I 4-3-3 I',
    tag: 'Control Possession',
    datePublished: '2025-01-18',
    author: 'Mohamed Ouni',
    createdAt: '2025-01-25T16:04:00.126Z',
    updatedAt: '2025-01-25T16:26:28.382Z',
    publishedAt: '2025-01-25T16:25:38.069Z',
    locale: 'en',
    featuredImage: {
      formats: {
        thumbnail: {
          url: '/uploads/thumbnail_OIP_fefb9fae05.jpeg',
        },
      },
    },
  },
  {
    id: 5,
    documentId: 'fuq0dwfb7r4b336xixg466sq',
    title: 'Tiki-Taka 4-3-3',
    slug: 'tiki-taka-433',
    description:
      'If you wish to view a more in depth breakdown and further tactical analysis check out the below video! I also have gone to the effort to make Attacking/Defending variants which can you find in the video!\n\n\n\nTo Stay in touch with myself, to ask any questions or request tactics, follow my socials <3\nTwitch TwitterYoutube Discord Instagram\n\nTactic TESTING\n\n\n![OIP.jpeg](http://localhost:1331/uploads/OIP_fefb9fae05.jpeg)\nData Hub\n\n\n[https://www.youtube.com/watch?v=dAw5waeS3Yo](youtube)\n\n\n\nTactic Screenshots\n\n\n\n\n',
    Formation: 'I 4-3-3 I',
    tag: 'Control Possession',
    datePublished: '2025-01-18',
    author: 'Mohamed Ouni',
    createdAt: '2025-01-25T16:04:00.126Z',
    updatedAt: '2025-01-25T16:26:28.382Z',
    publishedAt: '2025-01-25T16:25:38.069Z',
    locale: 'en',
    featuredImage: {
      formats: {
        thumbnail: {
          url: '/uploads/thumbnail_OIP_fefb9fae05.jpeg',
        },
      },
    },
  },
  {
    id: 5,
    documentId: 'fuq0dwfb7r4b336xixg466sq',
    title: 'Tiki-Taka 4-3-3',
    slug: 'tiki-taka-433',
    description:
      'If you wish to view a more in depth breakdown and further tactical analysis check out the below video! I also have gone to the effort to make Attacking/Defending variants which can you find in the video!\n\n\n\nTo Stay in touch with myself, to ask any questions or request tactics, follow my socials <3\nTwitch TwitterYoutube Discord Instagram\n\nTactic TESTING\n\n\n![OIP.jpeg](http://localhost:1331/uploads/OIP_fefb9fae05.jpeg)\nData Hub\n\n\n[https://www.youtube.com/watch?v=dAw5waeS3Yo](youtube)\n\n\n\nTactic Screenshots\n\n\n\n\n',
    Formation: 'I 4-3-3 I',
    tag: 'Control Possession',
    datePublished: '2025-01-18',
    author: 'Mohamed Ouni',
    createdAt: '2025-01-25T16:04:00.126Z',
    updatedAt: '2025-01-25T16:26:28.382Z',
    publishedAt: '2025-01-25T16:25:38.069Z',
    locale: 'en',
    featuredImage: {
      formats: {
        thumbnail: {
          url: '/uploads/thumbnail_OIP_fefb9fae05.jpeg',
        },
      },
    },
  },
  {
    id: 5,
    documentId: 'fuq0dwfb7r4b336xixg466sq',
    title: 'Tiki-Taka 4-3-3',
    slug: 'tiki-taka-433',
    description:
      'If you wish to view a more in depth breakdown and further tactical analysis check out the below video! I also have gone to the effort to make Attacking/Defending variants which can you find in the video!\n\n\n\nTo Stay in touch with myself, to ask any questions or request tactics, follow my socials <3\nTwitch TwitterYoutube Discord Instagram\n\nTactic TESTING\n\n\n![OIP.jpeg](http://localhost:1331/uploads/OIP_fefb9fae05.jpeg)\nData Hub\n\n\n[https://www.youtube.com/watch?v=dAw5waeS3Yo](youtube)\n\n\n\nTactic Screenshots\n\n\n\n\n',
    Formation: 'I 4-3-3 I',
    tag: 'Control Possession',
    datePublished: '2025-01-18',
    author: 'Mohamed Ouni',
    createdAt: '2025-01-25T16:04:00.126Z',
    updatedAt: '2025-01-25T16:26:28.382Z',
    publishedAt: '2025-01-25T16:25:38.069Z',
    locale: 'en',
    featuredImage: {
      formats: {
        thumbnail: {
          url: '/uploads/thumbnail_OIP_fefb9fae05.jpeg',
        },
      },
    },
  },
]
export default function TacticsSection() {
  const { language } = useLanguage()

  const { tactics, loading, error } = useTactics(language, 4)

  if (loading) {
    return <p>{language === 'en' ? 'Loading...' : 'جاري التحميل...'}</p>
  }

  if (error) {
    return (
      <p>
        {language === 'en' ? 'Error loading tactics' : 'خطأ في تحميل التكتيكات'}
      </p>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          {language === 'en' ? 'Popular Tactics' : 'التكتيكات الشائعة'}
        </h2>
        <Link
          href="/tactics"
          className="group flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80"
        >
          <span>{language === 'en' ? 'View All' : 'عرض المزيد'}</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      <div className="grid gap-4">
        {demoData.map((tactic, index) => (
          <TacticCard key={index} {...tactic} />
        ))}
      </div>
    </div>
  )
}
