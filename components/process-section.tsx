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
    <section
      id="process"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#050505] to-black overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/hero3.jpg')] bg-cover bg-center opacity-85" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">{t.process.title}</h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">{t.process.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative p-6 rounded-2xl transition-all duration-500 bg-white/[0.04] backdrop-blur-md hover:border hover:border-white/60">
              <div className="text-6xl font-bold text-white/[0.06] mb-4">{step.step}</div>
              <div className="w-14 h-14 bg-black border border-white/20 rounded-xl flex items-center justify-center mb-5">
                <step.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-base font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
