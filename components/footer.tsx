"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/lib/i18n/context"

export function Footer() {
  const { t } = useLanguage()
  const pathname = usePathname()
  const base = pathname === "/en" || pathname?.startsWith("/en/") ? "/en" : ""

  return (
    <footer className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
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
            <p className="text-sm text-black/50 text-left max-w-sm leading-relaxed">{t.footer.description}</p>
          </div>

          <div>
            <p className="stat-title text-sm font-semibold text-black mb-4">{t.footer.servicesTitle}</p>
            <nav className="flex flex-col gap-3 text-sm text-black/55">
              <Link href={`${base}#quotidiano`} className="hover:text-black transition-colors">
                {t.footer.linkDaily}
              </Link>
              <Link href={`${base}#focus`} className="hover:text-black transition-colors">
                {t.footer.linkPillars}
              </Link>
              <Link href={`${base}#agent`} className="hover:text-black transition-colors">
                {t.footer.linkAgent}
              </Link>
            </nav>
          </div>

          <div>
            <p className="stat-title text-sm font-semibold text-black mb-4">{t.footer.companyTitle}</p>
            <nav className="flex flex-col gap-3 text-sm text-black/55">
              <span className="text-black/40">{t.footer.about}</span>
              <span className="text-black/40">{t.footer.careers}</span>
              <Link href={`${base}#contact`} className="hover:text-black transition-colors">
                {t.footer.contact}
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-black/10 flex flex-col sm:flex-row justify-between gap-4 text-sm text-black/45">
          <p>
            {t.footer.copyright} · Padova, Italy
          </p>
          <p className="flex gap-4">
            <span className="hover:text-black/60 cursor-default">{t.footer.privacy}</span>
            <span className="hover:text-black/60 cursor-default">{t.footer.terms}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
