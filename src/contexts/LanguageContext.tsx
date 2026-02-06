"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { locales, type Locale } from '@/i18n'

interface LanguageContextType {
  currentLocale: Locale
  changeLanguage: (locale: Locale) => void
  isLoading: boolean
  locales: readonly Locale[]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

/** Server-computed locale: from cookie (user choice) or from geo (outside BR → en). */
export function LanguageProvider({
  children,
  initialLocale,
}: {
  children: ReactNode
  initialLocale?: Locale | null
}) {
  const [currentLocale, setCurrentLocale] = useState<Locale>(
    initialLocale && locales.includes(initialLocale) ? initialLocale : 'pt'
  )
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale | null
    if (savedLocale && locales.includes(savedLocale)) {
      setCurrentLocale(savedLocale)
    } else {
      localStorage.setItem('locale', currentLocale)
    }
    setIsLoading(false)
  }, [])

  const changeLanguage = (locale: Locale) => {
    if (locales.includes(locale)) {
      setCurrentLocale(locale)
      localStorage.setItem('locale', locale)
      document.cookie = `locale=${locale};path=/;max-age=31536000;sameSite=lax`
      window.location.reload()
    }
  }

  const value: LanguageContextType = {
    currentLocale,
    changeLanguage,
    isLoading,
    locales
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguageContext() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageProvider')
  }
  return context
}
