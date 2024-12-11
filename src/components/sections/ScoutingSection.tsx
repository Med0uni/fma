'use client'

import { useLanguage } from '@/providers/language-provider'
import Link from 'next/link'
import ScoutingCard from '../cards/ScoutingCard'

const demoScouting = [
  {
    title: 'Next Haaland Found in Norwegian League',
    titleAr: 'العثور على هالاند الجديد في الدوري النرويجي',
    date: '2024-02-15',
    category: 'Wonderkid',
    categoryAr: 'موهبة شابة',
    image: '/images/scouting/norway.jpg',
    slug: 'next-haaland',
  },
  {
    title: 'South American Hidden Gems Under £1M',
    titleAr: 'جواهر أمريكا الجنوبية المخفية تحت 1 مليون جنيه',
    date: '2024-02-14',
    category: 'Bargains',
    categoryAr: 'صفقات',
    image: '/images/scouting/southamerica.jpg',
    slug: 'south-american-gems',
  },
  {
    title: 'Top 5 Free Agents for 2024',
    titleAr: 'أفضل 5 لاعبين أحرار لعام 2024',
    date: '2024-02-13',
    category: 'Free Agents',
    categoryAr: 'لاعبون أحرار',
    image: '/images/scouting/freeagents.jpg',
    slug: 'top-free-agents',
  },
  {
    title: 'Rising Stars from African Cup of Nations',
    titleAr: 'النجوم الصاعدة من كأس أمم أفريقيا',
    date: '2024-02-12',
    category: 'Tournament',
    categoryAr: 'بطولة',
    image: '/images/scouting/afcon.jpg',
    slug: 'afcon-rising-stars',
  },
]

export default function ScoutingSection() {
  const { language } = useLanguage()

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          {language === 'en' ? 'Scouting' : 'الكشافة'}
        </h2>
        <Link href="/scouting" className="text-primary hover:underline">
          {language === 'en' ? 'View All' : 'عرض المزيد'}
        </Link>
      </div>
      <div className="grid gap-4">
        {demoScouting.map((item, index) => (
          <ScoutingCard key={index} {...item} />
        ))}
      </div>
    </div>
  )
}
