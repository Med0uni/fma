'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'

export default function LanguageToggle() {
  const [lang, setLang] = React.useState('en')

  return (
    <Button
      variant="ghost"
      onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
      className="w-14"
    >
      {lang.toUpperCase()}
    </Button>
  )
}
