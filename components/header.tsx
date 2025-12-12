"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-background" />
            </div>
            <span className="font-semibold text-lg text-foreground">AI Assisted Software</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="#process" className="text-muted-foreground hover:text-foreground transition-colors">
              Process
            </Link>
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-foreground">
              Get a Demo
            </Button>
            <Button className="bg-foreground text-background hover:bg-foreground/90">Start Project</Button>
          </div>

          <button className="md:hidden p-2 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="#process" className="text-muted-foreground hover:text-foreground transition-colors">
                Process
              </Link>
              <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="ghost" className="w-full text-foreground">
                  Get a Demo
                </Button>
                <Button className="w-full bg-foreground text-background hover:bg-foreground/90">Start Project</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
