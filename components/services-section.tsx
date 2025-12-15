"use client"

import { Zap, RefreshCw, Shield, Layers } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

export function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      icon: RefreshCw,
      title: t.services.service1.title,
      description: t.services.service1.description,
    },
    {
      icon: Zap,
      title: t.services.service2.title,
      description: t.services.service2.description,
    },
    {
      icon: Layers,
      title: t.services.service3.title,
      description: t.services.service3.description,
    },
    {
      icon: Shield,
      title: t.services.service4.title,
      description: t.services.service4.description,
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t.services.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl border border-border bg-card hover:bg-secondary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-foreground transition-colors">
                <service.icon className="w-6 h-6 text-foreground group-hover:text-background transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
