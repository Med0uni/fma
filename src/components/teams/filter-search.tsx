'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react'
import { useLanguage } from '@/providers/language-provider'

interface FilterSearchProps {
  onFiltersChange: (filters: any) => void
}

export default function FilterSearch({ onFiltersChange }: FilterSearchProps) {
  const { language } = useLanguage()
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [filters, setFilters] = useState({
    search: '',
    league: '',
    ratingMin: '',
    ratingMax: '',
    budgetMin: '',
    budgetMax: '',
    balanceMin: '',
    balanceMax: '',
    trainingMin: '',
    trainingMax: '',
    youthMin: '',
    youthMax: '',
  })

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFiltersChange(newFilters)
  }

  return (
    <div className="space-y-6 rounded-lg border bg-card p-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder={
            language === 'en' ? 'Search teams...' : '...البحث عن الفرق'
          }
          className="w-full rounded-lg border border-border bg-background py-2 pl-10 pr-4 transition-colors focus:border-primary"
          value={filters.search}
          onChange={(e) => handleFilterChange('search', e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <select
          className="rounded-lg border border-border bg-background p-2 transition-colors focus:border-primary"
          value={filters.league}
          onChange={(e) => handleFilterChange('league', e.target.value)}
        >
          <option value="">
            {language === 'en' ? 'All Leagues' : 'جميع الدوريات'}
          </option>
          <option value="premier-league">Premier League</option>
          <option value="la-liga">La Liga</option>
          <option value="bundesliga">Bundesliga</option>
          {/* Add more leagues */}
        </select>

        <div className="flex gap-2">
          <input
            type="number"
            placeholder={language === 'en' ? 'Min Rating' : 'أدنى تقييم'}
            className="w-full rounded-lg border border-border bg-background p-2 transition-colors focus:border-primary"
            value={filters.ratingMin}
            onChange={(e) => handleFilterChange('ratingMin', e.target.value)}
          />
          <input
            type="number"
            placeholder={language === 'en' ? 'Max Rating' : 'أعلى تقييم'}
            className="w-full rounded-lg border border-border bg-background p-2 transition-colors focus:border-primary"
            value={filters.ratingMax}
            onChange={(e) => handleFilterChange('ratingMax', e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <input
            type="number"
            placeholder={language === 'en' ? 'Min Budget' : 'أدنى ميزانية'}
            className="w-full rounded-lg border border-border bg-background p-2 transition-colors focus:border-primary"
            value={filters.budgetMin}
            onChange={(e) => handleFilterChange('budgetMin', e.target.value)}
          />
          <input
            type="number"
            placeholder={language === 'en' ? 'Max Budget' : 'أعلى ميزانية'}
            className="w-full rounded-lg border border-border bg-background p-2 transition-colors focus:border-primary"
            value={filters.budgetMax}
            onChange={(e) => handleFilterChange('budgetMax', e.target.value)}
          />
        </div>
      </div>

      <button
        onClick={() => setShowAdvanced(!showAdvanced)}
        className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <SlidersHorizontal className="h-4 w-4" />
        <span>{language === 'en' ? 'Advanced Filters' : 'تصفية متقدمة'}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${showAdvanced ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {showAdvanced && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="space-y-4 overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder={language === 'en' ? 'Min Balance' : 'أدنى رصيد'}
                  className="w-full rounded-lg border border-border bg-background p-2 transition-colors focus:border-primary"
                  value={filters.balanceMin}
                  onChange={(e) =>
                    handleFilterChange('balanceMin', e.target.value)
                  }
                />
                <input
                  type="number"
                  placeholder={language === 'en' ? 'Max Balance' : 'أعلى رصيد'}
                  className="w-full rounded-lg border border-border bg-background p-2 transition-colors focus:border-primary"
                  value={filters.balanceMax}
                  onChange={(e) =>
                    handleFilterChange('balanceMax', e.target.value)
                  }
                />
              </div>

              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder={
                    language === 'en' ? 'Min Training' : 'أدنى تدريب'
                  }
                  className="w-full rounded-lg border border-border bg-background p-2 transition-colors focus:border-primary"
                  value={filters.trainingMin}
                  onChange={(e) =>
                    handleFilterChange('trainingMin', e.target.value)
                  }
                />
                <input
                  type="number"
                  placeholder={
                    language === 'en' ? 'Max Training' : 'أعلى تدريب'
                  }
                  className="w-full rounded-lg border border-border bg-background p-2 transition-colors focus:border-primary"
                  value={filters.trainingMax}
                  onChange={(e) =>
                    handleFilterChange('trainingMax', e.target.value)
                  }
                />
              </div>

              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder={language === 'en' ? 'Min Youth' : 'أدنى شباب'}
                  className="w-full rounded-lg border border-border bg-background p-2 transition-colors focus:border-primary"
                  value={filters.youthMin}
                  onChange={(e) =>
                    handleFilterChange('youthMin', e.target.value)
                  }
                />
                <input
                  type="number"
                  placeholder={language === 'en' ? 'Max Youth' : 'أعلى شباب'}
                  className="w-full rounded-lg border border-border bg-background p-2 transition-colors focus:border-primary"
                  value={filters.youthMax}
                  onChange={(e) =>
                    handleFilterChange('youthMax', e.target.value)
                  }
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
