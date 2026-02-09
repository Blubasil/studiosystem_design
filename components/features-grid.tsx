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
    <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#050505]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">{t.features.title}</h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">{t.features.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div key={index} className="card p-7">
              <div className="icon-box mb-6">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
