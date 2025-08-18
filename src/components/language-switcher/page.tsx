"use client"

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, ChevronDown } from 'lucide-react'
import { useLanguageContext } from '@/contexts/LanguageContext'
import { locales, localeNames, localeFlags, type Locale } from '@/i18n'

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const { currentLocale, changeLanguage } = useLanguageContext()
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLocaleChange = (locale: Locale) => {
    changeLanguage(locale)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Language Switcher Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg glass-effect border border-white/20 hover:border-white/40 transition-all duration-300 group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe className="h-4 w-4 text-[#ffd95a] group-hover:text-[#ffed4e] transition-colors" />
        <span className="text-lg">{localeFlags[currentLocale]}</span>
        <span className="text-sm text-white font-medium hidden sm:inline">
          {localeNames[currentLocale]}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4 text-slate-400" />
        </motion.div>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
            className="absolute top-full right-0 mt-2 w-48 rounded-xl glass-effect border border-white/20 backdrop-blur-xl shadow-2xl z-50"
          >
            <div className="p-2">
              {locales.map((locale) => (
                <motion.button
                  key={locale}
                  onClick={() => handleLocaleChange(locale)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    currentLocale === locale
                      ? 'bg-gradient-to-r from-[#ffd95a]/20 to-[#ff6b6b]/20 border border-[#ffd95a]/30'
                      : 'hover:bg-white/10'
                  }`}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xl">{localeFlags[locale]}</span>
                  <div className="flex-1">
                    <div className="font-medium text-white">
                      {localeNames[locale]}
                    </div>
                    <div className="text-xs text-slate-400">
                      {locale === 'pt' ? 'Português' : 'English'}
                    </div>
                  </div>
                  {currentLocale === locale && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 bg-gradient-to-r from-[#ffd95a] to-[#ff6b6b] rounded-full"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
