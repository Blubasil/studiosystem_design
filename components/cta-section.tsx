"use client"

import { useLanguage } from "@/lib/i18n/context"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="pt-32 pb-56 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#050505] border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center p-14 sm:p-20 card cta-card">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">{t.cta.title}</h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
            {t.cta.description}
          </p>
          <Button size="lg" className="group">
            {t.cta.button}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
