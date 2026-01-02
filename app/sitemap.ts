import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.studiosystem.io"

  // Core pages
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    // TODO: Add Italian version when ready
    // {
    //   url: `${baseUrl}/it`,
    //   lastModified: new Date(),
    //   changeFrequency: "weekly" as const,
    //   priority: 1.0,
    // },
  ]

  return routes
}
