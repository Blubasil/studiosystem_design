"use client"

import { useLanguage } from "@/lib/i18n/context"

export function StatsSection() {
  const { t } = useLanguage()

  const stats = [
    t.stats.stat1,
    t.stats.stat2,
    t.stats.stat3,
    t.stats.stat4,
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center lg:text-left lg:border-l lg:first:border-l-0 border-border lg:pl-8 lg:first:pl-0"
            >
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-foreground font-medium mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
