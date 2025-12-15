"use client"

import { useLanguage } from "@/lib/i18n/context"

export function CTASection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center p-12 rounded-2xl border border-border bg-secondary/30">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t.cta.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.cta.description}
          </p>
        </div>
      </div>
    </section>
  )
}
