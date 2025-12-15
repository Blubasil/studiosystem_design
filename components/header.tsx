"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"
import { LanguageSwitcher } from "./language-switcher"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl tracking-tight text-foreground">
              Studio <span className="text-muted-foreground">System</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.header.services}
            </Link>
            <Link href="#process" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.header.process}
            </Link>
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.header.features}
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.header.contact}
            </Link>
            <LanguageSwitcher />
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button className="p-2 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.header.services}
              </Link>
              <Link href="#process" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.header.process}
              </Link>
              <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.header.features}
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.header.contact}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
