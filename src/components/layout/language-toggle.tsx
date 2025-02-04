'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/providers/language-provider'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      className="w-14"
    >
      {language.toUpperCase()}
    </Button>
  )
}
