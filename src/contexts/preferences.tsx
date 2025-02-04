'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'

type Preferences = {
  language: 'en' | 'ar'
  theme: 'light' | 'dark'
}

const PreferencesContext = createContext<{
  preferences: Preferences
  setLanguage: (lang: 'en' | 'ar') => void
  setTheme: (theme: 'light' | 'dark') => void
}>({
  preferences: { language: 'en', theme: 'light' },
  setLanguage: () => {},
  setTheme: () => {},
})

export function PreferencesProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [preferences, setPreferences] = useState<Preferences>(() => ({
    language: (Cookies.get('language') as 'en' | 'ar') || 'en',
    theme: (typeof window !== 'undefined'
      ? localStorage.getItem('theme')
      : 'light') as 'light' | 'dark',
  }))

  const setLanguage = (lang: 'en' | 'ar') => {
    Cookies.set('language', lang, { expires: 365 })
    setPreferences((prev) => ({ ...prev, language: lang }))
  }

  const setTheme = (theme: 'light' | 'dark') => {
    localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
    setPreferences((prev) => ({ ...prev, theme }))
  }

  return (
    <PreferencesContext.Provider value={{ preferences, setLanguage, setTheme }}>
      {children}
    </PreferencesContext.Provider>
  )
}

export const usePreferences = () => useContext(PreferencesContext)
