"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/providers/language-provider"
import { ArrowUpDown, Star, Dumbbell, Users } from "lucide-react"
import { useVirtualizer } from "@tanstack/react-virtual"

interface Team {
  id: string
  name: string
  nameAr: string
  league: string
  leagueAr: string
  rating: number
  balance: number
  budget: number
  training: number
  youth: number
}

interface TeamTableProps {
  teams: Team[]
  isLoading?: boolean
}

type SortField = "rating" | "name" | "league" | "balance" | "budget" | "training" | "youth"
type SortDirection = "asc" | "desc"

const RatingDisplay = ({ value }: { value: number }) => {
  const getColor = (rating: number) => {
    if (rating >= 4) return "text-green-500"
    if (rating >= 3) return "text-yellow-500"
    return "text-red-500"
  }

  return (
    <div className={`flex items-center gap-1 ${getColor(value)}`}>
      <Star className="h-4 w-4 fill-current" />
      <span>{value.toFixed(1)}</span>
    </div>
  )
}

export default function TeamTable({ teams, isLoading }: TeamTableProps) {
  const { language } = useLanguage()
  const [sortField, setSortField] = useState<SortField>("rating")
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc")

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("desc")
    }
  }

  const sortedTeams = [...teams].sort((a, b) => {
    const modifier = sortDirection === "asc" ? 1 : -1
    if (sortField === "name") {
      return (language === "en" ? a.name.localeCompare(b.name) : a.nameAr.localeCompare(b.nameAr)) * modifier
    }
    return (a[sortField] - b[sortField]) * modifier
  })

  const parentRef = useVirtualizer({
    count: sortedTeams.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 60,
    overscan: 5,
  })

  const SortButton = ({ field, children }: { field: SortField; children: React.ReactNode }) => (
    <button
      onClick={() => handleSort(field)}
      className="flex items-center gap-1 hover:text-primary transition-colors"
    >
      {children}
      <ArrowUpDown className={`h-4 w-4 ${sortField === field ? "text-primary" : "opacity-50"}`} />
    </button>
  )

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
      </div>
    )
  }

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-muted/50">
              <th className="p-4 text-left">
                <SortButton field="rating">RAT</SortButton>
              </th>
              <th className="p-4 text-left">
                <SortButton field="name">{language === "en" ? "Name" : "الاسم"}</SortButton>
              </th>
              <th className="p-4 text-left">
                <SortButton field="league">{language === "en" ? "League" : "الدوري"}</SortButton>
              </th>
              <th className="p-4 text-left">
                <SortButton field="balance">{language === "en" ? "Balance" : "الرصيد"}</SortButton>
              </th>
              <th className="p-4 text-left">
                <SortButton field="budget">{language === "en" ? "Budget" : "الميزانية"}</SortButton>
              </th>
              <th className="p-4 text-left">
                <SortButton field="training">TRA</SortButton>
              </th>
              <th className="p-4 text-left">
                <SortButton field="youth">YTH</SortButton>
              </th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {sortedTeams.map((team, index) => (
                <motion.tr
                  key={team.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="border-t hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <td className="p-4">
                    <RatingDisplay value={team.rating} />
                  </td>
                  <td className="p-4 font-medium">
                    {language === "en" ? team.name : team.nameAr}
                  </td>
                  <td className="p-4 text-muted-foreground">
                    {language === "en" ? team.league : team.leagueAr}
                  </td>
                  <td className="p-4">£{team.balance.toLocaleString()}</td>
                  <td className="p-4">£{team.budget.toLocaleString()}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <Dumbbell className="h-4 w-4 text-primary" />
                      {team.training}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-primary" />
                      {team.youth}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    </div>
  )
}
