export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Studio System",
    url: "https://www.studiosystem.io",
    logo: "https://www.studiosystem.io/android-chrome-512x512.png",
    description:
      "AI-native software development studio specializing in legacy modernization, SDLC automation, and AI-powered development solutions.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Padova",
      addressRegion: "Veneto",
      postalCode: "35100",
      addressCountry: "IT",
    },
    sameAs: [
      // Add social profiles when available:
      // "https://www.linkedin.com/company/studiosystem",
      // "https://github.com/studiosystem",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      availableLanguage: ["English", "Italian"],
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Studio System",
    url: "https://www.studiosystem.io",
    description:
      "AI-Native Software Development - Transform your software development with AI-native technologies.",
    publisher: {
      "@type": "Organization",
      name: "Studio System",
    },
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Studio System",
    image: "https://www.studiosystem.io/android-chrome-512x512.png",
    url: "https://www.studiosystem.io",
    description:
      "AI-native software development studio offering legacy modernization, SDLC automation, and custom AI solutions.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Padova",
      addressRegion: "Veneto",
      postalCode: "35100",
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.4064,
      longitude: 11.8768,
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Italy",
      },
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 45.4064,
          longitude: 11.8768,
        },
        geoRadius: "50000",
      },
    ],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  )
}
