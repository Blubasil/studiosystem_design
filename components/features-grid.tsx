import { Bot, Gauge, Lock, Repeat, Terminal, Users } from "lucide-react"

export function FeaturesGrid() {
  const features = [
    {
      icon: Bot,
      title: "Autonomous Agents",
      description: "AI agents that understand context and make intelligent decisions throughout development.",
    },
    {
      icon: Gauge,
      title: "Real-Time Quality",
      description: "Continuous quality assessment and automated fixes before issues reach production.",
    },
    {
      icon: Lock,
      title: "Security First",
      description: "AI-powered security scanning and compliance checking built into every workflow.",
    },
    {
      icon: Repeat,
      title: "Seamless Migration",
      description: "Preserve your data while completely rebuilding with modern, scalable architecture.",
    },
    {
      icon: Terminal,
      title: "Natural Language",
      description: "Describe what you want in plain language and watch AI translate it into working code.",
    },
    {
      icon: Users,
      title: "Human + AI Teams",
      description: "The perfect collaboration between human creativity and AI efficiency.",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">The AI Advantage</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            State-of-the-art capabilities that set your software apart
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border bg-card hover:border-foreground/30 transition-colors"
            >
              <feature.icon className="w-8 h-8 text-foreground mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
