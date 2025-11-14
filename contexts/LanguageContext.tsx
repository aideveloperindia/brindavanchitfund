'use client'

import { createContext, useContext, useState, useEffect, useMemo, useCallback, ReactNode } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Language, defaultLanguage, getLanguageFromPath, getPathWithLanguage, persistLanguage, getPersistedLanguage } from '@/lib/i18n'
import teTranslations from '@/locales/te.json'
import enTranslations from '@/locales/en.json'

type Translations = typeof teTranslations

const translations: Record<Language, Translations> = {
  te: teTranslations,
  en: enTranslations,
}

interface LanguageContextType {
  language: Language
  t: Translations
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const persisted = getPersistedLanguage()
      return persisted || defaultLanguage
    }
    return defaultLanguage
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const persisted = getPersistedLanguage()
      if (persisted && persisted !== language) {
        setLanguageState(persisted)
      }
    }
  }, [])

  const setLanguage = useCallback((lang: Language) => {
    if (lang !== language) {
      setLanguageState(lang)
      persistLanguage(lang)
      // Force a re-render by updating state
      // This ensures the language switch works immediately
    }
  }, [language])

  const contextValue = useMemo(() => ({
    language,
    t: translations[language],
    setLanguage
  }), [language, setLanguage])

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

