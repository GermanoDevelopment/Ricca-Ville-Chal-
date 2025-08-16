"use client"
import { Logo } from "@/components/atoms/logo"
import { NavLink } from "@/components/molecules/nav-link"
import { ContactButton } from "@/components/molecules/contact-button"

export const Header = () => {
  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#acomodacoes", label: "Acomodações" },
    { href: "#galeria", label: "Galeria" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo />
        <nav className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
          ))}
        </nav>
        <div className="hidden md:block">
          <ContactButton type="whatsapp" value="86998390312">
            Fale Conosco
          </ContactButton>
        </div>
      </div>
    </header>
  )
}