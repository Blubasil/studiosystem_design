import type { Metadata } from "next"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { DailyScenariosSection } from "@/components/daily-scenarios-section"
import { FocusPillarsSection } from "@/components/focus-pillars-section"
import { AgentExplainerSection } from "@/components/agent-explainer-section"
import { StatsSection } from "@/components/stats-section"
import { ProcessSection } from "@/components/process-section"
import { FeaturesGrid } from "@/components/features-grid"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

/**
 * TODO: When Italian version is ready:
 * 1. Change canonical back to "/en"
 * 2. Add hreflang alternates:
 *    alternates: {
 *      canonical: "/en",
 *      languages: {
 *        'it': '/',
 *        'en': '/en',
 *        'x-default': '/',
 *      },
 *    }
 * 3. Add same hreflang to app/page.tsx
 */
export const metadata: Metadata = {
  title: "Studio System | AI agents, apps, and legacy renewal",
  description:
    "Apps and websites that ship faster, legacy systems renewed, and AI agents embedded in your real workflows — from Padova, Italy.",
  alternates: {
    canonical: "/",
  },
}

export default function EnglishHome() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <DailyScenariosSection />
      <FocusPillarsSection />
      <AgentExplainerSection />
      <StatsSection />
      <ProcessSection />
      <FeaturesGrid />
      <CTASection />
      <Footer />
    </main>
  )
}
