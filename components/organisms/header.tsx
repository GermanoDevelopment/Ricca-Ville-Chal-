"use client"

import * as React from "react"
import { LogoSite } from "@/components/atoms/logo-site" 
import { NavLink } from "@/components/molecules/nav-link"
import { ContactButton } from "@/components/molecules/contact-button"
import { Button } from "@/components/atoms/button"
import { Menu, X } from "lucide-react"

export const Header = () => {
  // Estado para controlar o menu mobile
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  // Seus links de navegação atualizados
  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#acomodacoes", label: "Acomodações" },
    { href: "#galeria", label: "Galeria" },
    { href: "#regras", label: "Regras" },
    { href: "#localizacao", label: "Localização"}
  ]

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <LogoSite /> 
          
          {/* NAVEGAÇÃO DESKTOP: Escondida em telas pequenas */}
          <nav className="hidden md:flex gap-6 items-center">
            {navLinks.map(link => (
              <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
            ))}
             <div className="hidden lg:block"> {/* Esconde o botão em telas médias para não quebrar o layout */}
                <ContactButton type="whatsapp" value="8699505437">
                    Fale Conosco
                </ContactButton>
             </div>
          </nav>

          {/* BOTÃO HAMBÚRGUER: Visível apenas em telas pequenas */}
          <div className="md:hidden">
            <Button onClick={() => setIsMenuOpen(true)} variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* MENU MOBILE: Overlay que aparece quando isMenuOpen é true */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex flex-col p-6 md:hidden">
          <div className="flex items-center justify-between mb-8">
            <LogoSite />
            <Button onClick={() => setIsMenuOpen(false)} variant="ghost" size="icon">
              <X className="h-6 w-6" />
            </Button>
          </div>
          
          <nav className="flex flex-col items-center justify-center flex-1 gap-8">
            {navLinks.map(link => (
              <NavLink 
                key={link.href} 
                href={link.href} 
                className="text-2xl font-serif"
                onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar no link
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-4">
            <ContactButton type="whatsapp" value="8699505437" className="w-full text-lg py-6">
              Fale Conosco
            </ContactButton>
          </div>
        </div>
      )}
    </>
  )
}