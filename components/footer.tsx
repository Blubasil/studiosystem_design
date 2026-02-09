"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col items-start gap-3">
            <Link href="/" className="group flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Studio System Logo"
                width={28}
                height={28}
                className="h-7 w-auto invert"
              />
              <span className="stat-title text-xl tracking-tight text-black transition-opacity group-hover:opacity-70">
                Studio <span className="text-black/40">System</span>
              </span>
            </Link>
            <p className="text-sm text-black/50 text-left max-w-md">
              Transforming software development with AI-native technologies. Higher quality, faster delivery, more value.
            </p>
          </div>
          <p className="text-sm text-black/45 text-left sm:text-right">
            {t.footer.copyright} · Padova, Italy
          </p>
        </div>
      </div>
    </footer>
  )
}
