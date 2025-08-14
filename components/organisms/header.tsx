"use client"

import { useState, useEffect } from "react"
import { Logo } from "@/components/atoms/logo"
import { NavLink } from "@/components/molecules/nav-link"
import { Button } from "@/components/atoms/button"
import { ContactButton } from "@/components/molecules/contact-button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#sobre", label: "Sobre" },
    { href: "#acomodacoes", label: "Acomodações" },
    { href: "#area-lazer", label: "Área de Lazer" },
    { href: "#capacidade", label: "Capacidade" },
    { href: "#regras", label: "Regras" },
    { href: "#contato", label: "Contato" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-background/80 backdrop-blur-sm border-b border-border/50",
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo size="md" className={cn("transition-all duration-300", isScrolled && "scale-95")} />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <ContactButton type="whatsapp" value="86999999999" variant="coastal" className="px-6">
              Reservar
            </ContactButton>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        <nav
          className={cn(
            "lg:hidden mt-4 pb-4 border-t border-border transition-all duration-300",
            isMenuOpen ? "block opacity-100" : "hidden opacity-0",
          )}
        >
          <div className="flex flex-col space-y-4 pt-4">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="py-2 px-4 rounded-lg hover:bg-muted/50 transition-colors"
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-4 border-t border-border">
              <ContactButton
                type="whatsapp"
                value="86999999999"
                variant="coastal"
                className="w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Reservar Agora
              </ContactButton>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
