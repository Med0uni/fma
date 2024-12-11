import { Metadata } from 'next'
import PageBanner from '@/components/ui/page-banner'
import { Users } from 'lucide-react'
import FilterSearch from '@/components/teams/filter-search'
import TeamTable from '@/components/teams/team-table'

export const metadata: Metadata = {
  title: 'Teams - FM Arabia',
  description:
    'Explore team guides, tactics, and strategies for Football Manager.',
}

// Mock data - replace with actual data fetching
const mockTeams = [
  {
    id: '1',
    name: 'Manchester City',
    nameAr: 'مانشستر سيتي',
    league: 'Premier League',
    leagueAr: 'الدوري الإنجليزي الممتاز',
    rating: 5,
    balance: 200000000,
    budget: 100000000,
    training: 5,
    youth: 4,
  },
  {
    id: '2',
    name: 'Real Madrid',
    nameAr: 'ريال مدريد',
    league: 'La Liga',
    leagueAr: 'الدوري الإسباني',
    rating: 5,
    balance: 300000000,
    budget: 150000000,
    training: 5,
    youth: 5,
  },
  {
    id: '3',
    name: 'Al Ahly',
    nameAr: 'الأهلي',
    league: 'Egyptian Premier League',
    leagueAr: 'الدوري المصري الممتاز',
    rating: 4,
    balance: 50000000,
    budget: 20000000,
    training: 3,
    youth: 4,
  },
  {
    id: '4',
    name: 'Bayern Munich',
    nameAr: 'بايرن ميونخ',
    league: 'Bundesliga',
    leagueAr: 'الدوري الألماني',
    rating: 5,
    balance: 250000000,
    budget: 120000000,
    training: 5,
    youth: 5,
  },
  {
    id: '5',
    name: 'Zamalek',
    nameAr: 'الزمالك',
    league: 'Egyptian Premier League',
    leagueAr: 'الدوري المصري الممتاز',
    rating: 4,
    balance: 40000000,
    budget: 15000000,
    training: 3,
    youth: 3,
  },
  {
    id: '6',
    name: 'Paris Saint-Germain',
    nameAr: 'باريس سان جيرمان',
    league: 'Ligue 1',
    leagueAr: 'الدوري الفرنسي',
    rating: 5,
    balance: 350000000,
    budget: 200000000,
    training: 5,
    youth: 4,
  },
  {
    id: '7',
    name: 'Juventus',
    nameAr: 'يوفنتوس',
    league: 'Serie A',
    leagueAr: 'الدوري الإيطالي',
    rating: 4,
    balance: 180000000,
    budget: 80000000,
    training: 4,
    youth: 4,
  },
  {
    id: '8',
    name: 'Esperance de Tunis',
    nameAr: 'الترجي التونسي',
    league: 'Tunisian Ligue Professionnelle 1',
    leagueAr: 'الرابطة التونسية المحترفة الأولى',
    rating: 4,
    balance: 30000000,
    budget: 10000000,
    training: 3,
    youth: 3,
  },
  {
    id: '9',
    name: 'Chelsea',
    nameAr: 'تشيلسي',
    league: 'Premier League',
    leagueAr: 'الدوري الإنجليزي الممتاز',
    rating: 4,
    balance: 200000000,
    budget: 90000000,
    training: 4,
    youth: 4,
  },
  {
    id: '10',
    name: 'Wydad Casablanca',
    nameAr: 'الوداد البيضاوي',
    league: 'Botola Pro',
    leagueAr: 'البطولة الوطنية الاحترافية',
    rating: 4,
    balance: 20000000,
    budget: 5000000,
    training: 3,
    youth: 3,
  },
]

export default function TeamsPage() {
  return (
    <div>
      <PageBanner
        title="Team Guides"
        titleAr="دليل الفرق"
        subtitle="Discover comprehensive guides and strategies for managing different teams."
        subtitleAr="اكتشف أدلة واستراتيجيات شاملة لإدارة الفرق المختلفة."
        backgroundImage="/images/banners/teams.jpg"
        icon={<Users className="h-full w-full" />}
      />
      <div className="container space-y-8 py-12">
        <FilterSearch />
        <TeamTable teams={mockTeams} />
      </div>
    </div>
  )
}
