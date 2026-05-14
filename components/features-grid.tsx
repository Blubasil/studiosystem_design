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
    <section id="features" className="scroll-mt-24 py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#050505]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">{t.features.title}</h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">{t.features.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-black/[0.08] bg-gradient-to-br from-white from-[8%] via-[#f0fdf7] via-[45%] to-[#8ee4c8] p-8 shadow-[0_16px_44px_-14px_rgba(0,0,0,0.45)] transition-all duration-300 hover:border-black/12 hover:shadow-[0_22px_52px_-14px_rgba(0,0,0,0.5)]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_80%_at_0%_0%,rgba(255,255,255,0.45),transparent_50%)]"
              />
              <div className="relative">
                <div className="icon-box mb-8">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="mb-3 text-lg font-semibold leading-snug text-black">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-black/60">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
