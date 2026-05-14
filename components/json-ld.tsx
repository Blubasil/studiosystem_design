import { getSiteUrl } from "@/lib/site-url"
import { translations } from "@/lib/i18n/translations"
import { seoFaqs } from "@/lib/seo-faq"
import type { Language } from "@/lib/i18n/translations"

type JsonLdProps = {
  locale: Language
}

export function JsonLd({ locale }: JsonLdProps) {
  const base = getSiteUrl()
  const pagePath = locale === "it" ? "/" : "/en"
  const pageUrl = `${base}${pagePath === "/" ? "" : pagePath}`
  const t = translations[locale]
  const faqs = seoFaqs[locale]

  const orgId = `${base}/#organization`
  const websiteId = `${base}/#website`
  const webpageId = `${pageUrl}#webpage`

  const organization = {
    "@type": "Organization",
    "@id": orgId,
    name: "Studio System",
    url: base,
    logo: {
      "@type": "ImageObject",
      url: `${base}/android-chrome-512x512.png`,
    },
    description:
      locale === "it"
        ? "Studio software a Padova: app e siti per i clienti, modernizzazione legacy e agenti AI integrati con ERP, posta e documenti."
        : "Software studio in Padova, Italy: customer apps and websites, legacy modernization, and operational AI agents integrated with ERP, email, and documents.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Padova",
      addressRegion: "Veneto",
      postalCode: "35100",
      addressCountry: "IT",
    },
    knowsAbout: [
      "AI agents for business operations",
      "Legacy software modernization",
      "ERP and CRM integration",
      "AI-native software development",
      "SME digital transformation",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      availableLanguage: ["English", "Italian"],
      areaServed: ["IT", "EU"],
    },
  }

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    name: "Studio System",
    url: base,
    inLanguage: locale === "it" ? ["it-IT", "en-US"] : ["en-US", "it-IT"],
    description:
      locale === "it"
        ? "Sito ufficiale Studio System — agenti AI, prodotti digitali e rinnovo dei sistemi in azienda."
        : "Official Studio System website — AI agents, digital products, and practical modernization.",
    publisher: { "@id": orgId },
  }

  const localBusiness = {
    "@type": "ProfessionalService",
    "@id": `${base}/#localbusiness`,
    name: "Studio System",
    image: `${base}/android-chrome-512x512.png`,
    url: base,
    description:
      locale === "it"
        ? "Servizi professionali di software: prodotti digitali per i clienti, aggiornamento di sistemi legacy e agenti AI per l’operatività quotidiana."
        : "Professional software services: customer-facing products, legacy updates, and AI agents for day-to-day operations.",
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
      { "@type": "Country", name: "Italy" },
      {
        "@type": "GeoCircle",
        geoMidpoint: { "@type": "GeoCoordinates", latitude: 45.4064, longitude: 11.8768 },
        geoRadius: "500000",
      },
    ],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    parentOrganization: { "@id": orgId },
  }

  const webPage = {
    "@type": "WebPage",
    "@id": webpageId,
    url: pageUrl,
    name:
      locale === "it"
        ? "Studio System — Agenti AI, app e siti, modernizzazione legacy per PMI"
        : "Studio System — AI agents, apps & websites, legacy renewal",
    description:
      locale === "it"
        ? "Homepage: servizi spiegati in modo chiaro, tre leve (app, legacy, agenti), confronto chat vs agente, perché le PMI ci scelgono e contatti."
        : "Homepage: everyday scenarios, three focus areas (apps, legacy, agents), chat vs agent explainer, why teams work with us, and contact.",
    inLanguage: locale === "it" ? "it-IT" : "en-US",
    isPartOf: { "@id": websiteId },
    about: { "@id": orgId },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${base}/opengraph-image`,
    },
    publisher: { "@id": orgId },
  }

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  const serviceList = {
    "@type": "ItemList",
    "@id": `${pageUrl}#services`,
    name: locale === "it" ? "Tre leve principali" : "Three core service areas",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: t.focusPillars.pillar1.title,
          description: t.focusPillars.pillar1.body,
          provider: { "@id": orgId },
          areaServed: "IT",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: t.focusPillars.pillar3.title,
          description: t.focusPillars.pillar3.body,
          provider: { "@id": orgId },
          areaServed: "IT",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: t.focusPillars.pillar2.title,
          description: t.focusPillars.pillar2.body,
          provider: { "@id": orgId },
          areaServed: "IT",
        },
      },
    ],
  }

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, website, localBusiness, webPage, faqPage, serviceList],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph),
      }}
    />
  )
}
