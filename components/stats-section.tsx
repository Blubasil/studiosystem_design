"use client"

import { ArrowRight, Infinity as InfinityIcon } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

/** Teal used for neon glow under pills (matches brand mint) */
const TEAL_NEON = "84,255,201"

/** Stroke matched so arrow and infinity read like the bold numerals */
const SYMBOL_STROKE = 3

export function StatsSection() {
  const { t } = useLanguage()

  const stats = [t.stats.stat1, t.stats.stat2, t.stats.stat3, t.stats.stat4]

  const baseFont = "clamp(1.6875rem, 4.2vw, 2.0625rem)"
  const symbolFont = "clamp(2.53125rem, 6.3vw, 3.09375rem)"

  return (
    <section className="py-36 px-4 sm:px-6 sm:py-44 lg:py-48 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 rounded-2xl hover:bg-black/[0.02] transition-colors duration-300">
              <div className="mb-8 flex justify-center sm:mb-10">
                <div
                  className="inline-flex min-h-[4.5rem] min-w-[12rem] max-w-full shrink-0 items-center justify-center rounded-full border border-white/35 bg-black px-5 py-3 sm:min-h-[5.25rem] sm:min-w-[13rem] sm:px-6 sm:py-3.5"
                  style={{
                    boxShadow: `0 10px 28px -6px rgba(${TEAL_NEON}, 0.55), 0 18px 44px -10px rgba(${TEAL_NEON}, 0.35), 0 4px 12px -2px rgba(${TEAL_NEON}, 0.25)`,
                  }}
                >
                  {/* Full-area flex center fixes uneven glyph sidebearings (Unicode ∞ / →) */}
                  <div className="flex h-full min-h-[2.25rem] w-full min-w-0 flex-1 items-center justify-center">
                    {stat.value === "∞" ? (
                      <span
                        className="inline-flex items-center justify-center text-white"
                        style={{ fontSize: symbolFont, lineHeight: 1 }}
                      >
                        <span className="sr-only">∞</span>
                        <InfinityIcon
                          className="block h-[1em] w-[1em] shrink-0"
                          strokeWidth={SYMBOL_STROKE}
                          aria-hidden
                        />
                      </span>
                    ) : stat.value === "→" ? (
                      <span
                        className="inline-flex items-center justify-center text-white"
                        style={{ fontSize: symbolFont, lineHeight: 1 }}
                      >
                        <span className="sr-only">→</span>
                        <ArrowRight
                          className="block h-[1em] w-[1em] shrink-0"
                          strokeWidth={SYMBOL_STROKE}
                          aria-hidden
                        />
                      </span>
                    ) : (
                      <span
                        className="stat-title text-center font-bold leading-none tracking-tight text-white tabular-nums [font-feature-settings:'tnum'] [line-height:1]"
                        style={{ fontSize: baseFont }}
                      >
                        {stat.value}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="stat-title text-[22px] sm:text-[26px] font-extrabold mb-3 text-black/90">{stat.label}</div>
              <div className="text-sm text-black/50 leading-relaxed max-w-[200px] mx-auto">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
