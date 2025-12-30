import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { FeaturesGrid } from "@/components/features-grid"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function EnglishHome() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <FeaturesGrid />
      <CTASection />
      <Footer />
    </main>
  )
}
