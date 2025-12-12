export function StatsSection() {
  const stats = [
    { value: "10x", label: "Faster Development", description: "Accelerate time to market" },
    { value: "85%", label: "Less Manual Code", description: "AI-generated quality code" },
    { value: "99%", label: "Test Coverage", description: "Automated testing at scale" },
    { value: "50%", label: "Cost Reduction", description: "Optimized resources" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center lg:text-left lg:border-l lg:first:border-l-0 border-border lg:pl-8 lg:first:pl-0"
            >
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-foreground font-medium mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
