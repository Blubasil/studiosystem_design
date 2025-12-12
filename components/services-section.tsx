import { Zap, RefreshCw, Shield, Layers } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: RefreshCw,
      title: "Legacy System Modernization",
      description:
        "Replace your old, slow CMS with state-of-the-art technology. We migrate your data while building from scratch with modern architecture.",
    },
    {
      icon: Zap,
      title: "AI-First Development",
      description:
        "Every line of code benefits from AI assistance. From business analysis to deployment, AI accelerates and improves every phase.",
    },
    {
      icon: Layers,
      title: "Vibe Engineering",
      description:
        "Natural language-driven development that translates your vision into working software faster than ever before.",
    },
    {
      icon: Shield,
      title: "Agentic Programming",
      description:
        "Autonomous AI agents that write, test, and deploy code while maintaining quality standards and security protocols.",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">AI-Powered Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive solutions that leverage AI across the entire software development lifecycle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl border border-border bg-card hover:bg-secondary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-foreground transition-colors">
                <service.icon className="w-6 h-6 text-foreground group-hover:text-background transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
