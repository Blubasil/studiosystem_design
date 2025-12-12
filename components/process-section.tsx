import { Target, Search, Code, Rocket } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      icon: Target,
      step: "01",
      title: "AI-Assisted Business Goals",
      description:
        "We analyze your objectives with AI to define clear, measurable outcomes aligned with your business strategy.",
    },
    {
      icon: Search,
      step: "02",
      title: "Scope from Goals",
      description:
        "AI transforms your goals into detailed technical specifications, ensuring nothing gets lost in translation.",
    },
    {
      icon: Code,
      step: "03",
      title: "AI-Native Development",
      description:
        "Our agentic programming approach delivers production-ready code at unprecedented speed and quality.",
    },
    {
      icon: Rocket,
      step: "04",
      title: "Deploy & Iterate",
      description: "Continuous delivery with AI-powered monitoring ensures your software evolves with your business.",
    },
  ]

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">AI in Every Phase</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From initial concept to production deployment, AI enhances every step of your development journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-bold text-border absolute -top-4 -left-2 select-none">{step.step}</div>
              <div className="relative pt-8">
                <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center mb-4">
                  <step.icon className="w-5 h-5 text-background" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
