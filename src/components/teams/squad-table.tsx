'use client'

import { useState } from 'react'
import { useLanguage } from '@/providers/language-provider'
import { motion } from 'framer-motion'
import { ArrowUpDown, Star } from 'lucide-react'
import Image from 'next/image'

interface Player {
  id: string
  name: string
  nameAr: string
  position: string
  positionAr: string
  age: number
  nationality: string
  nationalityAr: string
  value: number
  wage: number
  currentAbility: number
  potentialAbility: number
  photo: string
}

interface SquadTableProps {
  squadType: 'first' | 'youth'
  searchQuery: string
  teamId: string
}

type SortField =
  | 'name'
  | 'position'
  | 'age'
  | 'value'
  | 'wage'
  | 'currentAbility'
  | 'potentialAbility'
type SortDirection = 'asc' | 'desc'

const mockPlayers: Player[] = [
  {
    id: 'p001',
    name: 'Mohamed Salah',
    nameAr: 'محمد صلاح',
    position: 'Forward',
    positionAr: 'مهاجم',
    age: 31,
    nationality: 'Egyptian',
    nationalityAr: 'مصري',
    value: 80000000,
    wage: 250000,
    currentAbility: 88,
    potentialAbility: 85,
    photo: '/players/salah.jpg',
  },
  {
    id: 'p002',
    name: 'Virgil van Dijk',
    nameAr: 'فيرجيل فان دايك',
    position: 'Defender',
    positionAr: 'مدافع',
    age: 32,
    nationality: 'Dutch',
    nationalityAr: 'هولندي',
    value: 70000000,
    wage: 220000,
    currentAbility: 89,
    potentialAbility: 87,
    photo: '/players/vandijk.jpg',
  },
  {
    id: 'p003',
    name: 'Alisson Becker',
    nameAr: 'أليسون بيكر',
    position: 'Goalkeeper',
    positionAr: 'حارس مرمى',
    age: 31,
    nationality: 'Brazilian',
    nationalityAr: 'برازيلي',
    value: 65000000,
    wage: 190000,
    currentAbility: 87,
    potentialAbility: 86,
    photo: '/players/alisson.jpg',
  },
  {
    id: 'p004',
    name: 'Trent Alexander-Arnold',
    nameAr: 'ترينت ألكسندر-أرنولد',
    position: 'Defender',
    positionAr: 'مدافع',
    age: 25,
    nationality: 'English',
    nationalityAr: 'إنجليزي',
    value: 85000000,
    wage: 180000,
    currentAbility: 86,
    potentialAbility: 90,
    photo: '/players/taa.jpg',
  },
  {
    id: 'p005',
    name: 'Luis Diaz',
    nameAr: 'لويس دياز',
    position: 'Forward',
    positionAr: 'مهاجم',
    age: 27,
    nationality: 'Colombian',
    nationalityAr: 'كولومبي',
    value: 55000000,
    wage: 140000,
    currentAbility: 83,
    potentialAbility: 87,
    photo: '/players/diaz.jpg',
  },
  {
    id: 'p006',
    name: 'Curtis Jones',
    nameAr: 'كورتيس جونز',
    position: 'Midfielder',
    positionAr: 'لاعب وسط',
    age: 23,
    nationality: 'English',
    nationalityAr: 'إنجليزي',
    value: 25000000,
    wage: 50000,
    currentAbility: 75,
    potentialAbility: 85,
    photo: '/players/jones.jpg',
  },
  {
    id: 'p007',
    name: 'Darwin Nunez',
    nameAr: 'داروين نونيز',
    position: 'Forward',
    positionAr: 'مهاجم',
    age: 24,
    nationality: 'Uruguayan',
    nationalityAr: 'أوروجواي',
    value: 60000000,
    wage: 160000,
    currentAbility: 81,
    potentialAbility: 88,
    photo: '/players/nunez.jpg',
  },
]
export default function SquadTable({
  squadType,
  searchQuery,
  teamId,
}: SquadTableProps) {
  const { language } = useLanguage()
  const [sortField, setSortField] = useState<SortField>('currentAbility')
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc')
  const [expandedPlayer, setExpandedPlayer] = useState<string | null>(null)

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('desc')
    }
  }

  const filteredPlayers = mockPlayers
    .filter((player) => {
      const searchTerm = searchQuery.toLowerCase()
      return (
        player.name.toLowerCase().includes(searchTerm) ||
        player.nameAr.includes(searchTerm) ||
        player.position.toLowerCase().includes(searchTerm) ||
        player.positionAr.includes(searchTerm)
      )
    })
    .sort((a, b) => {
      const modifier = sortDirection === 'asc' ? 1 : -1
      if (sortField === 'name') {
        return (
          (language === 'en'
            ? a.name.localeCompare(b.name)
            : a.nameAr.localeCompare(b.nameAr)) * modifier
        )
      }
      return (a[sortField] - b[sortField]) * modifier
    })

  const SortButton = ({
    field,
    children,
  }: {
    field: SortField
    children: React.ReactNode
  }) => (
    <button
      onClick={() => handleSort(field)}
      className="flex items-center gap-1 transition-colors hover:text-primary"
    >
      {children}
      <ArrowUpDown
        className={`h-4 w-4 ${sortField === field ? 'text-primary' : 'opacity-50'}`}
      />
    </button>
  )

  return (
    <div className="overflow-hidden rounded-lg border">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-muted/50">
              <th className="p-4 text-left"></th>
              <th className="p-4 text-left">
                <SortButton field="name">
                  {language === 'en' ? 'Name' : 'الاسم'}
                </SortButton>
              </th>
              <th className="p-4 text-left">
                <SortButton field="position">
                  {language === 'en' ? 'Position' : 'المركز'}
                </SortButton>
              </th>
              <th className="p-4 text-left">
                <SortButton field="age">
                  {language === 'en' ? 'Age' : 'العمر'}
                </SortButton>
              </th>
              <th className="p-4 text-left">
                {language === 'en' ? 'Nationality' : 'الجنسية'}
              </th>
              <th className="p-4 text-left">
                <SortButton field="value">
                  {language === 'en' ? 'Value' : 'القيمة'}
                </SortButton>
              </th>
              <th className="p-4 text-left">
                <SortButton field="wage">
                  {language === 'en' ? 'Wage' : 'الراتب'}
                </SortButton>
              </th>
              <th className="p-4 text-left">
                <SortButton field="currentAbility">CA</SortButton>
              </th>
              <th className="p-4 text-left">
                <SortButton field="potentialAbility">PA</SortButton>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredPlayers.map((player) => (
              <motion.tr
                key={player.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="cursor-pointer border-t transition-colors hover:bg-muted/50"
                onClick={() =>
                  setExpandedPlayer(
                    expandedPlayer === player.id ? null : player.id
                  )
                }
              >
                <td className="p-4">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full">
                    <Image
                      src={player.photo}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                </td>
                <td className="p-4 font-medium">
                  {language === 'en' ? player.name : player.nameAr}
                </td>
                <td className="p-4 text-muted-foreground">
                  {language === 'en' ? player.position : player.positionAr}
                </td>
                <td className="p-4">{player.age}</td>
                <td className="p-4">
                  {language === 'en'
                    ? player.nationality
                    : player.nationalityAr}
                </td>
                <td className="p-4">£{player.value.toLocaleString()}</td>
                <td className="p-4">£{player.wage.toLocaleString()}/w</td>
                <td className="p-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-primary" />
                    {player.currentAbility}
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-primary" />
                    {player.potentialAbility}
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
