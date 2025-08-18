"use client"

// 1. Importa o novo componente do novo arquivo
import { LogoSite } from "@/components/atoms/logo-site" 
import { NavLink } from "@/components/molecules/nav-link"
import { ContactButton } from "@/components/molecules/contact-button"

export const Header = () => {
  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#acomodacoes", label: "Acomodações" },
    { href: "#galeria", label: "Galeria" },
    { href: "#regras", label: "regras" },
    { href: "#localizacao", label: "localização"}
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* 2. Usa o novo componente aqui */}
        <LogoSite /> 

        <nav className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
          ))}
        </nav>
        <div className="hidden md:block">
          <ContactButton type="whatsapp" value="8699505437">
            Fale Conosco
          </ContactButton>
        </div>
      </div>
    </header>
  )
}