"use client"

import { Bot, Gauge, Lock, Repeat, Terminal, Users } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

export function FeaturesGrid() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Bot,
      title: t.features.feature1.title,
      description: t.features.feature1.description,
    },
    {
      icon: Gauge,
      title: t.features.feature2.title,
      description: t.features.feature2.description,
    },
    {
      icon: Lock,
      title: t.features.feature3.title,
      description: t.features.feature3.description,
    },
    {
      icon: Repeat,
      title: t.features.feature4.title,
      description: t.features.feature4.description,
    },
    {
      icon: Terminal,
      title: t.features.feature5.title,
      description: t.features.feature5.description,
    },
    {
      icon: Users,
      title: t.features.feature6.title,
      description: t.features.feature6.description,
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t.features.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.features.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border bg-card hover:border-foreground/30 transition-colors"
            >
              <feature.icon className="w-8 h-8 text-foreground mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
