"use client"

import { useState } from "react"
import { FileText, Package, Receipt, Clock, CalendarDays, MessageCircle, ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

const scenarioKeys = ["scenario1", "scenario2", "scenario3", "scenario4", "scenario5", "scenario6"] as const
const icons = [FileText, Package, Receipt, Clock, CalendarDays, MessageCircle]

export function DailyScenariosSection() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const ds = t.dailyScenarios

  return (
    <section id="quotidiano" className="scroll-mt-24 py-28 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            {ds.title}
          </h2>
          <p className="text-lg text-white/55 leading-relaxed">{ds.hook}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {scenarioKeys.map((key, index) => {
            const s = ds[key]
            const Icon = icons[index]
            return (
              <div
                key={key}
                className="neon-process-card relative rounded-2xl p-6 bg-white/[0.03] backdrop-blur-md border border-white/10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-black">
                    <Icon className="w-5 h-5" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-2">{s.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">{s.line}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <p className="text-center text-white/55 max-w-2xl mx-auto mb-8 leading-relaxed">{ds.closing}</p>

        <div className="max-w-3xl mx-auto">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex items-center justify-center gap-2 w-full sm:w-auto mx-auto px-5 py-3 rounded-xl border border-teal-400/30 bg-teal-950/20 text-sm font-medium text-teal-200/90 hover:bg-teal-950/35 transition-colors"
          >
            {open ? ds.readLess : ds.readMore}
            <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
          {open && (
            <p className="mt-6 text-base text-white/55 leading-relaxed text-left animate-fade-in">{ds.long}</p>
          )}
        </div>
      </div>
    </section>
  )
}
