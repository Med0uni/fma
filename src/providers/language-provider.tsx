'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'

type Language = 'en' | 'ar'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  // Initialize language from cookie
  useEffect(() => {
    const savedLang = Cookies.get('fm-language')
    if (savedLang === 'en' || savedLang === 'ar') {
      setLanguage(savedLang)
    }
  }, [])

  // Update cookie when language changes
  useEffect(() => {
    Cookies.set('fm-language', language, { expires: 365 })
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = language
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'}>{children}</div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
