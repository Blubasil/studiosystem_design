import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center p-12 rounded-2xl border border-border bg-secondary/30">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Ready to Transform Your Development?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join forward-thinking companies that are already building better software faster with AI-native development.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 px-8">
              Start Your Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary px-8 bg-transparent"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
