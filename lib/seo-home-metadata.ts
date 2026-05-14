import type { Metadata } from "next"
import { getSiteUrl } from "@/lib/site-url"

const site = () => getSiteUrl()

/** Italian homepage (`/`) — primary market */
export const homeMetadataIt: Metadata = {
  title: {
    absolute:
      "Studio System | Agenti AI, app e siti, modernizzazione legacy — Padova, PMI",
  },
  description:
    "Da Padova: app e siti per i clienti, gestionale e sistemi legacy aggiornati, agenti AI in ufficio su ERP e mail — sviluppo software AI-native per PMI italiane.",
  keywords: [
    "agenti AI PMI",
    "sviluppo software Padova",
    "modernizzazione gestionale",
    "integrazione ERP",
    "automazione ufficio",
    "Studio System",
    "software AI-native Italia",
  ],
  authors: [{ name: "Studio System" }],
  creator: "Studio System",
  publisher: "Studio System",
  category: "technology",
  alternates: {
    canonical: "/",
    languages: {
      "it-IT": "/",
      "en-US": "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    title:
      "Studio System | Agenti AI, app e siti, modernizzazione legacy — Padova",
    description:
      "App e siti per i clienti, gestionale aggiornato, agenti AI operativi sui vostri sistemi — da Padova, con occhio alle PMI.",
    url: `${site()}/`,
    siteName: "Studio System",
    locale: "it_IT",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio System | Agenti AI, app e legacy per PMI",
    description:
      "Sviluppo software AI-native: prodotti digitali, sistemi che già usate, agenti che completano lavoro vero in azienda.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

/** English homepage (`/en`) */
export const homeMetadataEn: Metadata = {
  title: {
    absolute:
      "Studio System | AI agents, apps & websites, legacy renewal — Padova, Italy",
  },
  description:
    "Padova-based software studio: customer apps and sites, legacy and ERP modernization, and AI agents embedded in real workflows — AI-native delivery for growing teams.",
  keywords: [
    "AI agents for business",
    "legacy software modernization",
    "ERP integration Italy",
    "Padova software studio",
    "AI-native development",
    "Studio System",
    "operational AI agents",
  ],
  authors: [{ name: "Studio System" }],
  creator: "Studio System",
  publisher: "Studio System",
  category: "technology",
  alternates: {
    canonical: "/en",
    languages: {
      "it-IT": "/",
      "en-US": "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Studio System | AI agents, apps, and legacy renewal",
    description:
      "Tangible software: modern apps and sites, updated legacy systems, and AI agents that work inside your business — from Padova, Italy.",
    url: `${site()}/en`,
    siteName: "Studio System",
    locale: "en_US",
    alternateLocale: ["it_IT"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio System | AI agents, apps, and legacy renewal",
    description:
      "Tangible software: modern apps and sites, updated legacy systems, and AI agents that work inside your business.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}
