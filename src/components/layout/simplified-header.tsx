'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { Languages, Moon, Sun, Menu, X, ChevronDown } from 'lucide-react'
import { useLanguage } from '@/providers/language-provider'
import { FaDiscord, FaXTwitter, FaInstagram } from 'react-icons/fa6'
import { Facebook, Youtube } from 'lucide-react'
import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function SimplifiedHeader() {
  const { setTheme, theme } = useTheme()
  const { language, setLanguage } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const socialLinks = [
    {
      name: 'Discord',
      Icon: FaDiscord,
      color: 'hover:bg-[#5865F2]',
      url: '#',
      label:
        language === 'en' ? 'Join us on Discord' : 'انضم إلينا على Discord',
    },
    {
      name: 'Twitter',
      Icon: FaXTwitter,
      color: 'hover:bg-black',
      url: '#',
      label: language === 'en' ? 'Follow us on Twitter' : 'تابعنا على تويتر',
    },
    {
      name: 'Facebook',
      Icon: Facebook,
      color: 'hover:bg-[#4267B2]',
      url: '#',
      label: language === 'en' ? 'Follow us on Facebook' : 'تابعنا على فيسبوك',
    },
    {
      name: 'Instagram',
      Icon: FaInstagram,
      color: 'hover:bg-[#E4405F]',
      url: '#',
      label:
        language === 'en' ? 'Follow us on Instagram' : 'تابعنا على انستغرام',
    },
    {
      name: 'Youtube',
      Icon: Youtube,
      color: 'hover:bg-[#FF0000]',
      url: '#',
      label: language === 'en' ? 'Subscribe on Youtube' : 'اشترك في يوتيوب',
    },
  ]

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container flex h-16 items-center justify-between gap-4">
        {/* Left Section - Logo and Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          <Link
            href="/"
            className="text-xl font-bold transition-colors hover:text-primary"
            aria-label={
              language === 'en' ? 'FM Arabia Home' : 'الصفحة الرئيسية FM Arabia'
            }
          >
            FM Arabia
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {/* Social Icons */}
          <div className="flex items-center gap-1">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`flex h-8 w-8 items-center justify-center rounded-md transition-colors hover:text-white ${social.color}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.Icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>

          {/* Separator */}
          <span className="h-4 w-px bg-border" />

          {/* Theme Toggle */}
          <div className="relative">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="relative h-8 w-14 rounded-full bg-secondary transition-colors"
              aria-label={
                theme === 'dark'
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
              }
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

          {/* Language Dropdown */}
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t bg-background md:hidden"
        >
          <div className="container space-y-6 py-6">
            {/* Mobile Social Icons */}
            <div className="grid grid-cols-5 gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`flex flex-col items-center gap-1 rounded-lg p-3 text-center transition-colors hover:text-white ${social.color}`}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.Icon className="h-5 w-5" />
                  <span className="text-xs">{social.name}</span>
                </motion.a>
              ))}
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center justify-between gap-4 rounded-lg border bg-card p-4">
              {/* Theme Toggle */}
              <div className="flex items-center gap-2">
                <span className="text-sm">
                  {language === 'en' ? 'Theme' : 'المظهر'}
                </span>
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

              {/* Language Toggle */}
              <div className="flex items-center gap-2">
                <span className="text-sm">
                  {language === 'en' ? 'Language' : 'اللغة'}
                </span>
                <button
                  onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                  className="rounded-md bg-secondary px-3 py-1.5 text-sm transition-colors hover:bg-secondary/80"
                >
                  {language === 'en' ? 'العربية' : 'English'}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
