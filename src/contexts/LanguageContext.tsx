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

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLocale, setCurrentLocale] = useState<Locale>('pt')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Get saved locale from localStorage
    const savedLocale = localStorage.getItem('locale') as Locale
    if (savedLocale && locales.includes(savedLocale)) {
      setCurrentLocale(savedLocale)
    }
    setIsLoading(false)
  }, [])

  const changeLanguage = (locale: Locale) => {
    if (locales.includes(locale)) {
      setCurrentLocale(locale)
      localStorage.setItem('locale', locale)

      // Reload page to apply new locale
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
