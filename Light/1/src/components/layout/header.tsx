'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import {
  Menu,
  Moon,
  Sun,
  Languages,
  Search,
  X,
  ChevronDown,
} from 'lucide-react'
import { useLanguage } from '@/providers/language-provider'
import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function Header() {
  const { setTheme, theme } = useTheme()
  const { language, setLanguage } = useLanguage()
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const navItems = [
    { href: '/news', labelEn: 'News', labelAr: 'الأخبار' },
    { href: '/teams', labelEn: 'Teams', labelAr: 'الفرق' },
    { href: '/downloads', labelEn: 'Downloads', labelAr: 'التحميلات' },
    { href: '/tactics', labelEn: 'Tactics', labelAr: 'التكتيكات' },
    { href: '/scouting', labelEn: 'Scouting', labelAr: 'الكشافة' },
    { href: '/tutorials', labelEn: 'Tutorials', labelAr: 'الدروس' },
  ]

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container flex h-16 items-center justify-between gap-4">
        <div className="flex flex-1 items-center gap-4 md:flex-initial">
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          <Link href="/" className="whitespace-nowrap text-xl font-bold">
            FM Arabia
          </Link>
        </div>

        <div
          className={`absolute left-0 right-0 top-0 md:relative md:top-auto ${isSearchFocused ? 'block' : 'hidden md:block'}`}
        >
          <div className="container md:px-0">
            <div className="relative flex h-16 items-center">
              <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder={
                  language === 'en'
                    ? 'Search players, teams, tactics...'
                    : 'البحث عن اللاعبين والفرق والتكتيكات...'
                }
                className="h-10 w-full rounded-md bg-secondary pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary md:w-[300px]"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {isSearchFocused && (
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 md:hidden"
                  onClick={() => setIsSearchFocused(false)}
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm transition-colors hover:text-primary"
              >
                {language === 'en' ? item.labelEn : item.labelAr}
              </Link>
            ))}
          </nav>

          <span className="hidden h-4 w-px bg-border md:block"></span>

          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="relative h-8 w-14 rounded-full bg-secondary transition-colors"
              >
                <div
                  className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow-sm transition-all duration-200 ${
                    theme === 'dark' ? 'left-7' : 'left-1'
                  }`}
                >
                  {theme === 'dark' ? (
                    <Moon className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-primary" />
                  ) : (
                    <Sun className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-primary" />
                  )}
                </div>
              </button>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1.5 rounded-md px-2 py-2 text-sm hover:bg-accent">
                <Languages className="h-4 w-4" />
                <ChevronDown className="h-4 w-4 opacity-50" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => setLanguage('en')}
                  className="flex items-center justify-between gap-2"
                >
                  <span className={language === 'en' ? 'font-medium' : ''}>
                    English
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage('ar')}
                  className="flex items-center justify-between gap-2"
                >
                  <span className={language === 'ar' ? 'font-medium' : ''}>
                    العربية
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t bg-background md:hidden">
          <nav className="container py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm transition-colors hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {language === 'en' ? item.labelEn : item.labelAr}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </motion.header>
  )
}
