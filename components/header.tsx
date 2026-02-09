"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"
import { LanguageSwitcher } from "./language-switcher"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Studio System Logo"
              width={28}
              height={28}
              className="h-7 w-auto"
            />
            <span className="stat-title text-xl tracking-tight text-white transition-opacity group-hover:opacity-80">
              Studio <span className="text-white/50">System</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-sm text-white/60 hover:text-white transition-colors duration-300">
              {t.header.services}
            </Link>
            <Link href="#process" className="text-sm text-white/60 hover:text-white transition-colors duration-300">
              {t.header.process}
            </Link>
            <Link href="#features" className="text-sm text-white/60 hover:text-white transition-colors duration-300">
              {t.header.features}
            </Link>
            <Link href="#contact" className="text-sm text-white/60 hover:text-white transition-colors duration-300">
              {t.header.contact}
            </Link>
            <LanguageSwitcher />
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button className="p-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-5 border-t border-white/[0.06] animate-fade-in">
            <nav className="flex flex-col gap-5">
              <Link href="#services" className="text-white/60 hover:text-white transition-colors duration-300">
                {t.header.services}
              </Link>
              <Link href="#process" className="text-white/60 hover:text-white transition-colors duration-300">
                {t.header.process}
              </Link>
              <Link href="#features" className="text-white/60 hover:text-white transition-colors duration-300">
                {t.header.features}
              </Link>
              <Link href="#contact" className="text-white/60 hover:text-white transition-colors duration-300">
                {t.header.contact}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
