"use client"

import { useState, useEffect } from 'react'
import { useLanguageContext } from '@/contexts/LanguageContext'

interface TranslatedTextProps {
  pt: string
  en: string
  className?: string
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div'
}

export function TranslatedText({ pt, en, className = '', as: Component = 'span' }: TranslatedTextProps) {
  const { currentLocale } = useLanguageContext()
  const [text, setText] = useState(pt)

  useEffect(() => {
    setText(currentLocale === 'pt' ? pt : en)
  }, [currentLocale, pt, en])

  return (
    <Component className={className}>
      {text}
    </Component>
  )
}

// Componentes específicos para facilitar o uso
export function TranslatedH1({ pt, en, className = '' }: Omit<TranslatedTextProps, 'as'>) {
  return <TranslatedText pt={pt} en={en} className={className} as="h1" />
}

export function TranslatedH2({ pt, en, className = '' }: Omit<TranslatedTextProps, 'as'>) {
  return <TranslatedText pt={pt} en={en} className={className} as="h2" />
}

export function TranslatedH3({ pt, en, className = '' }: Omit<TranslatedTextProps, 'as'>) {
  return <TranslatedText pt={pt} en={en} className={className} as="h3" />
}

export function TranslatedP({ pt, en, className = '' }: Omit<TranslatedTextProps, 'as'>) {
  return <TranslatedText pt={pt} en={en} className={className} as="p" />
}

export function TranslatedSpan({ pt, en, className = '' }: Omit<TranslatedTextProps, 'as'>) {
  return <TranslatedText pt={pt} en={en} className={className} as="span" />
}
