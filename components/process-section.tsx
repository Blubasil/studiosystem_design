"use client"

import { Target, Search, Code, Rocket } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

export function ProcessSection() {
  const { t } = useLanguage()

  const steps = [
    {
      icon: Target,
      step: "01",
      title: t.process.step1.title,
      description: t.process.step1.description,
    },
    {
      icon: Search,
      step: "02",
      title: t.process.step2.title,
      description: t.process.step2.description,
    },
    {
      icon: Code,
      step: "03",
      title: t.process.step3.title,
      description: t.process.step3.description,
    },
    {
      icon: Rocket,
      step: "04",
      title: t.process.step4.title,
      description: t.process.step4.description,
    },
  ]

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t.process.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.process.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-bold text-border absolute -top-4 -left-2 select-none">{step.step}</div>
              <div className="relative pt-8">
                <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center mb-4">
                  <step.icon className="w-5 h-5 text-background" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
