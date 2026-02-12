"use client"

import { ArrowDown, ArrowUp } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

export function StatsSection() {
  const { t } = useLanguage()

  const stats = [
    t.stats.stat1,
    t.stats.stat2,
    t.stats.stat3,
    t.stats.stat4,
  ]

  const renderValue = (value: string) => {
    if (value === "↑") {
      return <ArrowUp className="h-12 w-12 sm:h-14 sm:w-14 text-black" strokeWidth={2.5} />
    }
    if (value === "↓") {
      return <ArrowDown className="h-12 w-12 sm:h-14 sm:w-14 text-black" strokeWidth={2.5} />
    }
    return value
  }

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 rounded-2xl hover:bg-black/[0.02] transition-colors duration-300">
              <div className="stat-title text-5xl sm:text-6xl font-bold mb-3 text-black flex items-center justify-center">
                <span className="inline-flex items-center justify-center h-12 sm:h-14 min-w-[56px] sm:min-w-[64px] px-3 rounded-full border border-black/80">
                  {renderValue(stat.value)}
                </span>
              </div>
              <div className="stat-title text-[22px] sm:text-[26px] font-extrabold mb-3 text-black/90">{stat.label}</div>
              <div className="text-sm text-black/50 leading-relaxed max-w-[200px] mx-auto">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
