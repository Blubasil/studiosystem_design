"use client"

import { Code2, Cpu, Workflow } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground mb-8">
            <span className="w-2 h-2 bg-foreground rounded-full animate-pulse" />
            {t.hero.badge}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight text-balance mb-6">
            {t.hero.title1}
            <br />
            <span className="text-muted-foreground">{t.hero.title2}</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-16 text-pretty">
            {t.hero.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-secondary/50 border border-border">
              <Code2 className="w-5 h-5 text-foreground" />
              <span className="text-sm text-foreground">{t.hero.feature1}</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-secondary/50 border border-border">
              <Cpu className="w-5 h-5 text-foreground" />
              <span className="text-sm text-foreground">{t.hero.feature2}</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-secondary/50 border border-border">
              <Workflow className="w-5 h-5 text-foreground" />
              <span className="text-sm text-foreground">{t.hero.feature3}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
