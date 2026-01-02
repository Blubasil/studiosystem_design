import type { Metadata } from "next"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ServicesSection } from "@/components/services-section"
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
  title: "Studio System | AI-Native Software Development",
  description:
    "Transform your software development with AI-native technologies. Higher quality, faster delivery, more value. From legacy modernization to full SDLC automation.",
  alternates: {
    // Temporary: points to / until Italian version is ready
    canonical: "/",
  },
}

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
