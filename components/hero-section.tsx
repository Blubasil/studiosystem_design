"use client"

import Image from "next/image"
import { Code2, Cpu, Workflow } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/hero6.jpg"
        alt="Hero background"
        fill
        priority
        className="object-cover absolute inset-0 z-0 grayscale brightness-90 contrast-125"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_10%,rgba(255,255,255,0.18),transparent_60%)] z-10" />
      
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-12 animate-fade-in-up">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-sm text-white/70">{t.hero.badge}</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-4 animate-fade-in-up delay-100">
            {t.hero.title1}
          </h1>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white/30 leading-[1.1] tracking-tight mb-10 animate-fade-in-up delay-200">
            {t.hero.title2}
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/45 max-w-2xl mx-auto mb-16 leading-relaxed animate-fade-in-up delay-300">
            {t.hero.description}
          </p>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto animate-fade-in-up delay-400">
            <div className="grid grid-cols-[48px_1fr] items-center gap-3 sm:flex sm:items-center sm:justify-center py-4 px-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl mx-auto w-full max-w-sm sm:max-w-none">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center justify-self-center sm:justify-self-auto">
                <Code2 className="w-5 h-5 text-black" />
              </div>
              <span className="text-sm text-white/80 font-medium whitespace-nowrap">{t.hero.feature1}</span>
            </div>
            <div className="grid grid-cols-[48px_1fr] items-center gap-3 sm:flex sm:items-center sm:justify-center py-4 px-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl mx-auto w-full max-w-sm sm:max-w-none">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center justify-self-center sm:justify-self-auto">
                <Cpu className="w-5 h-5 text-black" />
              </div>
              <span className="text-sm text-white/80 font-medium whitespace-nowrap">{t.hero.feature2}</span>
            </div>
            <div className="grid grid-cols-[48px_1fr] items-center gap-3 sm:flex sm:items-center sm:justify-center py-4 px-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl mx-auto w-full max-w-sm sm:max-w-none">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center justify-self-center sm:justify-self-auto">
                <Workflow className="w-5 h-5 text-black" />
              </div>
              <span className="text-sm text-white/80 font-medium whitespace-nowrap">{t.hero.feature3}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
