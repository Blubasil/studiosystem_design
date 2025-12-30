"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations, type Language, type Translations } from "./translations"
import { i18nConfig } from "./config"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
  isEnabled: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const STORAGE_KEY = "preferred-language"

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(i18nConfig.DEFAULT_LANGUAGE)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // If i18n is disabled, always use default language
    if (!i18nConfig.ENABLED) {
      setLanguageState(i18nConfig.DEFAULT_LANGUAGE)
      setMounted(true)
      return
    }

    // Get saved language or detect from browser
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null
    if (saved && (saved === "en" || saved === "it")) {
      setLanguageState(saved)
    } else {
      // Detect browser language
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith("it")) {
        setLanguageState("it")
      }
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && i18nConfig.ENABLED) {
      localStorage.setItem(STORAGE_KEY, language)
      document.documentElement.lang = language
    }
  }, [language, mounted])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
    isEnabled: i18nConfig.ENABLED,
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}








