import type { MetadataRoute } from "next"
import { getSiteUrl } from "@/lib/site-url"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  const now = new Date()

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          "it-IT": `${base}/`,
          "en-US": `${base}/en`,
        },
      },
    },
    {
      url: `${base}/en`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          "it-IT": `${base}/`,
          "en-US": `${base}/en`,
        },
      },
    },
  ]
}
