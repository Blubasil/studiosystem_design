"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/i18n/context"

/** Visual order: Apps | AI agents (featured) | Legacy */
const images = [
  { src: "/focus-pillar-apps.png", key: "pillar1" as const, altKey: "imageAlt1" as const },
  { src: "/focus-pillar-agents.png", key: "pillar3" as const, altKey: "imageAlt3" as const },
  { src: "/focus-pillar-legacy.png", key: "pillar2" as const, altKey: "imageAlt2" as const },
]

/** Same footprint every card; object-cover at all breakpoints so mobile matches desktop framing. */
const MEDIA_ASPECT = "aspect-[4/5]"

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

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-stretch">
          {images.map(({ src, key, altKey }, index) => {
            const pillar = fp[key]
            const isFeatured = key === "pillar3"
            const isFirst = index === 0
            const isLast = index === images.length - 1
            return (
              <article
                key={key}
                className={`relative flex h-full flex-col overflow-hidden rounded-3xl bg-white/[0.03] ${
                  isFeatured
                    ? "border border-teal-400/25 shadow-[0_0_60px_-20px_rgba(20,184,166,0.35)] lg:ring-2 lg:ring-teal-400/35"
                    : isFirst || isLast
                      ? "border border-white"
                      : "border border-white/10"
                }`}
              >
                {isFeatured && (
                  <span className="pointer-events-none absolute right-3 top-3 z-20 max-w-[calc(100%-1.5rem)] truncate rounded-full border border-teal-400/40 bg-black/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-teal-200 shadow-lg backdrop-blur-md sm:right-4 sm:top-4 sm:text-[11px]">
                    {fp.pillar3.badge}
                  </span>
                )}

                <div
                  className={`relative w-full shrink-0 overflow-hidden border-b border-white/[0.08] bg-zinc-950 ${MEDIA_ASPECT}`}
                >
                  <Image
                    src={src}
                    alt={fp[altKey]}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    priority={isFeatured}
                  />
                </div>

                <div className="flex flex-col p-6 sm:p-8">
                  <h3 className="mb-3 text-xl font-semibold text-white">{pillar.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-white/50">{pillar.body}</p>
                  <p className="border-t border-white/10 pt-4 text-sm leading-relaxed text-teal-200/70">
                    {pillar.example}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
