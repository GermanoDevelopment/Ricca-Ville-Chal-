import { Logo } from "@/components/atoms/logo"
import { Text } from "@/components/atoms/text"
import { ContactInfo } from "@/components/molecules/contact-info"
import { NavLink } from "@/components/molecules/nav-link"
import { Divider } from "@/components/atoms/divider"
import { MessageCircle, Phone, Mail, Instagram, MapPin, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#acomodacoes", label: "Acomodações" },
    { href: "#area-lazer", label: "Área de Lazer" },
    { href: "#galeria", label: "Galeria" },
    { href: "#contato", label: "Contato" },
  ]

  return (
    <footer className="bg-primary/5 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <Logo size="lg" className="mb-4" />
            <Text className="mb-6 max-w-md text-muted-foreground">
              Sua casa de temporada em Barra Grande - Piauí. Momentos inesquecíveis a apenas 800m do mar, com todo
              conforto e comodidade que você merece.
            </Text>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Praia de Barra Grande, Piauí - Brasil
              </div>
              <div>
                <Text variant="small" className="font-medium">
                  Grupo RICCA CASUAL LTDA
                </Text>
              </div>
              <div>
                <Text variant="small">CNPJ: 25.463.257/0001-00</Text>
              </div>
              <div>
                <Text variant="small">Rua Landri Sales, 10a - Centro</Text>
              </div>
              <div>
                <Text variant="small">Esperantina - PI, 64.180-000</Text>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <Text variant="lead" className="font-semibold mb-4">
              Links Rápidos
            </Text>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <div key={link.href}>
                  <NavLink href={link.href} className="text-muted-foreground hover:text-primary">
                    {link.label}
                  </NavLink>
                </div>
              ))}
            </nav>
          </div>

          {/* Contato */}
          <div>
            <Text variant="lead" className="font-semibold mb-4">
              Contato
            </Text>
            <div className="space-y-2">
              <ContactInfo
                icon={MessageCircle}
                label="WhatsApp"
                value="(86) 99839-0312"
                href="https://wa.me/5586998390312"
                className="p-0 hover:bg-transparent"
              />
              <ContactInfo
                icon={Phone}
                label="Telefone"
                value="(86) 99839-0312"
                href="tel:+5586998390312"
                className="p-0 hover:bg-transparent"
              />
              <ContactInfo
                icon={Mail}
                label="E-mail"
                value="casualricca@gmail.com"
                href="mailto:casualricca@gmail.com"
                className="p-0 hover:bg-transparent"
              />
              <ContactInfo
                icon={Instagram}
                label="Instagram"
                value="@riccacasual"
                href="https://instagram.com/riccacasual"
                className="p-0 hover:bg-transparent"
              />
            </div>
          </div>
        </div>

        <Divider className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="flex items-center mb-4 md:mb-0">
            <Text variant="small">© {currentYear} Grupo RICCA CASUAL LTDA. Todos os direitos reservados.</Text>
          </div>
          <div className="flex items-center">
            <Text variant="small">Feito com</Text>
            <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
            <Text variant="small">para suas férias perfeitas</Text>
          </div>
        </div>
      </div>
    </footer>
  )
}
