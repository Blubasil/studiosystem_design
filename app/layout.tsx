import type React from "react"
import type { Metadata } from "next"
import { Nunito, Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/i18n/context"
import { JsonLd } from "@/components/json-ld"
import "./globals.css"

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-title",
})

export const metadata: Metadata = {
  title: "Studio System | AI agents, apps, and legacy renewal",
  description:
    "Apps and websites that ship faster, legacy software renewed, and AI agents embedded in your everyday operations — from Padova, Italy.",
  metadataBase: new URL("https://www.studiosystem.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Studio System | AI agents, apps, and legacy renewal",
    description:
      "Tangible software: modern apps and sites, updated legacy systems, and AI agents that work inside your business.",
    url: "https://www.studiosystem.io",
    siteName: "Studio System",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "android-chrome", url: "/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "android-chrome", url: "/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body className={`${nunito.variable} ${roboto.variable} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
