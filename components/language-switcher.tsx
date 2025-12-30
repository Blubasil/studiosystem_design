"use client"

import { useLanguage } from "@/lib/i18n/context"

export function LanguageSwitcher() {
  const { language, setLanguage, isEnabled } = useLanguage()

  // Hide switcher when i18n is disabled
  if (!isEnabled) {
    return null
  }

  return (
    <div className="flex items-center gap-1 px-1 py-1 rounded-md bg-secondary/50 border border-border">
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1.5 rounded text-sm font-medium transition-all ${
          language === "en"
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("it")}
        className={`px-3 py-1.5 rounded text-sm font-medium transition-all ${
          language === "it"
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Passa all'italiano"
      >
        IT
      </button>
    </div>
  )
}





