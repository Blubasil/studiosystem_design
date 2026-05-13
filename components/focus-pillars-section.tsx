"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/i18n/context"

/** Visual order: Apps | AI agents (featured) | Legacy */
const images = [
  { src: "/focus-pillar-apps.png", key: "pillar1" as const, altKey: "imageAlt1" as const },
  { src: "/focus-pillar-agents.png", key: "pillar3" as const, altKey: "imageAlt3" as const },
  { src: "/focus-pillar-legacy.png", key: "pillar2" as const, altKey: "imageAlt2" as const },
]

export function FocusPillarsSection() {
  const { t } = useLanguage()
  const fp = t.focusPillars

  return (
    <section id="focus" className="scroll-mt-24 py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#050505] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            {fp.title}
          </h2>
          <p className="text-lg text-white/50 leading-relaxed">{fp.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {images.map(({ src, key, altKey }) => {
            const pillar = fp[key]
            const isFeatured = key === "pillar3"
            return (
              <article
                key={key}
                className={`flex flex-col rounded-3xl overflow-hidden bg-white/[0.03] border ${
                  isFeatured
                    ? "lg:ring-2 lg:ring-teal-400/35 border-teal-400/25 shadow-[0_0_60px_-20px_rgba(20,184,166,0.35)]"
                    : "border-white/10"
                }`}
              >
                <div className="relative aspect-[4/3] w-full bg-black/40">
                  <Image
                    src={src}
                    alt={fp[altKey]}
                    fill
                    className={key === "pillar3" ? "object-cover object-top" : "object-cover"}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6 sm:p-8">
                  {isFeatured && (
                    <span className="inline-flex self-start mb-3 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-teal-500/15 text-teal-300 border border-teal-400/30">
                      {fp.pillar3.badge}
                    </span>
                  )}
                  <h3 className="text-xl font-semibold text-white mb-3">{pillar.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed flex-1 mb-4">{pillar.body}</p>
                  <p className="text-sm text-teal-200/70 border-t border-white/10 pt-4 leading-relaxed">{pillar.example}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
