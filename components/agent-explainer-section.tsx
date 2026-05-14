"use client"

import { Sparkles, Bot } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

export function AgentExplainerSection() {
  const { t } = useLanguage()
  const a = t.agentExplainer

  const chatPoints = [a.chat1, a.chat2, a.chat3]
  const agentPoints = [a.agent1, a.agent2, a.agent3, a.agent4]

  return (
    <section id="agent" className="scroll-mt-24 border-t border-white/[0.06] bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-14 max-w-3xl text-center sm:mb-20">
          <h2 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            {a.title}
          </h2>
          <p className="mx-auto max-w-xl text-pretty text-lg leading-relaxed text-white/50">
            {a.lead}
          </p>
        </header>

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-2 lg:items-stretch lg:gap-6">
          {/* Light cards: white surface, black typography */}
          <article className="flex min-h-[22rem] flex-col rounded-2xl border border-black/[0.08] bg-white p-8 shadow-[0_1px_0_rgba(0,0,0,0.04)] sm:min-h-[24rem] sm:p-9">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black">
                <Sparkles className="h-6 w-6 text-white" strokeWidth={2} aria-hidden />
              </div>
              <h3 className="min-w-0 text-xl font-bold leading-tight tracking-[-0.02em] text-black sm:text-2xl">
                {a.chatTitle}
              </h3>
            </div>
            <ul className="flex flex-1 flex-col gap-4">
              {chatPoints.map((line) => (
                <li
                  key={line}
                  className="relative pl-5 text-base font-semibold leading-snug text-black/75 before:absolute before:left-0 before:top-[0.5em] before:h-2 before:w-2 before:rounded-full before:bg-black/25 before:content-[''] sm:text-lg sm:leading-relaxed"
                >
                  {line}
                </li>
              ))}
            </ul>
          </article>

          <article className="flex min-h-[22rem] flex-col rounded-2xl border border-black/[0.08] bg-white p-8 shadow-[inset_3px_0_0_0_#54FFC9,0_1px_0_rgba(0,0,0,0.04)] sm:min-h-[24rem] sm:p-9">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black">
                <Bot className="h-6 w-6 text-white" strokeWidth={2} aria-hidden />
              </div>
              <h3 className="min-w-0 text-xl font-bold leading-tight tracking-[-0.02em] text-black sm:text-2xl">
                {a.agentTitle}
              </h3>
            </div>
            <ul className="flex flex-1 flex-col gap-4">
              {agentPoints.map((line) => (
                <li
                  key={line}
                  className="relative pl-5 text-base font-semibold leading-snug text-black/75 before:absolute before:left-0 before:top-[0.5em] before:h-2 before:w-2 before:rounded-full before:bg-[#54FFC9]/75 before:content-[''] sm:text-lg sm:leading-relaxed"
                >
                  {line}
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* Dark glass card */}
        <div className="relative mt-10 overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-white/[0.1] via-white/[0.04] to-transparent px-8 py-10 shadow-[0_24px_64px_-32px_rgba(0,0,0,0.85)] backdrop-blur-xl sm:mt-12 sm:px-11 sm:py-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_10%_0%,rgba(255,255,255,0.12),transparent_55%)] opacity-40" />
          <div className="relative">
            <h3 className="text-balance text-center text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {a.workforceTitle}
            </h3>
            <p className="mx-auto mt-8 max-w-2xl text-center text-pretty text-base leading-relaxed text-white/60 sm:text-lg">
              {a.workforce}
            </p>
            <div className="mx-auto mt-9 max-w-xl border-t border-white/[0.12] pt-9">
              <p className="text-center text-[14px] font-medium leading-relaxed tracking-wide text-[#54FFC9]/90 sm:text-[15px]">
                {a.automationNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
