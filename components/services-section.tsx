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
    <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#050505]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">{t.services.title}</h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">{t.services.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, index) => (
            <div key={index} className="card p-8">
              <div className="icon-box mb-6">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-white/50 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
