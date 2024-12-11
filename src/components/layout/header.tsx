"use client"

import Link from 'next/link'
import { useTheme } from "next-themes"
import { Menu, Moon, Sun, Languages, Search, X, ChevronDown } from "lucide-react"
import { useLanguage } from '@/providers/language-provider'
import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1 md:flex-initial">
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
          
          <Link href="/" className="text-xl font-bold whitespace-nowrap">
            FM Arabia
          </Link>
        </div>

        <div className={`absolute md:relative left-0 right-0 top-0 md:top-auto ${isSearchFocused ? 'block' : 'hidden md:block'}`}>
          <div className="container md:px-0">
            <div className="relative flex items-center h-16">
              <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder={language === 'en' ? 'Search players, teams, tactics...' : 'البحث عن اللاعبين والفرق والتكتيكات...'}
                className="h-10 w-full md:w-[300px] rounded-md bg-secondary pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {isSearchFocused && (
                <button 
                  className="md:hidden absolute right-3 top-1/2 -translate-y-1/2"
                  onClick={() => setIsSearchFocused(false)}
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="text-sm hover:text-primary transition-colors"
              >
                {language === 'en' ? item.labelEn : item.labelAr}
              </Link>
            ))}
          </nav>

          <span className="hidden md:block h-4 w-px bg-border"></span>

          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="relative h-8 w-14 rounded-full bg-secondary transition-colors"
              >
                <div
                  className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow-sm transition-all duration-200 ${
                    theme === "dark" ? "left-7" : "left-1"
                  }`}
                >
                  {theme === "dark" ? (
                    <Moon className="h-4 w-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary" />
                  ) : (
                    <Sun className="h-4 w-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary" />
                  )}
                </div>
              </button>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1.5 rounded-md px-2 py-2 hover:bg-accent text-sm">
                <Languages className="h-4 w-4" />
                <ChevronDown className="h-4 w-4 opacity-50" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => setLanguage('en')}
                  className="flex items-center justify-between gap-2"
                >
                  <span className={language === 'en' ? "font-medium" : ""}>
                    English
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage('ar')}
                  className="flex items-center justify-between gap-2"
                >
                  <span className={language === 'ar' ? "font-medium" : ""}>
                    العربية
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className="text-sm hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {language === 'en' ? item.labelEn : item.labelAr}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
