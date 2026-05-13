"use client"

import { useLanguage } from "@/lib/i18n/context"

export function LanguageSwitcher() {
  const { language, setLanguage, isEnabled } = useLanguage()

  if (!isEnabled) {
    return null
  }

  return (
    <div
      role="group"
      aria-label="Lingua / Language"
      className="inline-flex shrink-0 rounded-full border border-white/15 bg-black/35 p-1 backdrop-blur-md"
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`min-w-[2.75rem] rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide transition-all ${
          language === "en" ? "bg-white text-black shadow-sm" : "text-white/55 hover:bg-white/5 hover:text-white"
        }`}
        aria-pressed={language === "en"}
        aria-label="English"
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("it")}
        className={`min-w-[2.75rem] rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide transition-all ${
          language === "it" ? "bg-white text-black shadow-sm" : "text-white/55 hover:bg-white/5 hover:text-white"
        }`}
        aria-pressed={language === "it"}
        aria-label="Italiano"
      >
        IT
      </button>
    </div>
  )
}
