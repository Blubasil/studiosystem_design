"use client"

import Link from "next/link"
import { MapPin } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <span className="font-bold text-xl tracking-tight text-foreground">
              Studio <span className="text-muted-foreground">System</span>
            </span>
          </Link>
          <p className="text-muted-foreground max-w-sm mb-4">
            {t.footer.description}
          </p>
          <div className="flex items-start gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
            <address className="not-italic text-sm">35100 Padova, Italy</address>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
