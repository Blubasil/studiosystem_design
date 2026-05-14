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
import { JsonLd } from "@/components/json-ld"
import { homeMetadataEn } from "@/lib/seo-home-metadata"

export const metadata: Metadata = homeMetadataEn

export default function EnglishHome() {
  return (
    <>
      <JsonLd locale="en" />
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
    </>
  )
}
