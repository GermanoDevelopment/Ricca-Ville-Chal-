import { SectionHeader } from "@/components/molecules/section-header"
import { ContactButton } from "@/components/molecules/contact-button"
import { ContactInfo } from "@/components/molecules/contact-info"
import { Text } from "@/components/atoms/text"
import { MessageCircle, Phone, Mail, Instagram } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Contato"
          title="Vamos planejar sua estadia"
          description="Entre em contato conosco e garante já sua reserva no paraíso de Barra Grande."
          centered
        />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <ContactButton
                type="whatsapp"
                value="86 9950-5437"
                className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Reservar pelo WhatsApp
              </ContactButton>
              <ContactButton
                type="phone"
                value="86 9950-5437"
                variant="outline"
                className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Ligar Agora
              </ContactButton>
            </div>
            <Text variant="small" className="text-muted-foreground">
              Resposta rápida garantida • Atendimento personalizado • Disponível todos os dias
            </Text>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ContactInfo
              icon={MessageCircle}
              label="WhatsApp"
              value="86 9950-5437"
              href="https://wa.me/558699505437"
            />
            <ContactInfo icon={Phone} label="Telefone" value="(86) 99839-0312" href="tel:+5586998390312" />
            <ContactInfo icon={Mail} label="E-mail" value="casualricca@gmail.com" href="mailto:casualricca@gmail.com" />
            <ContactInfo
              icon={Instagram}
              label="Instagram"
              value="@riccacasual"
              href="https://instagram.com/riccacasual"
            />
          </div>

          <div className="mt-12 p-8 bg-card border border-border rounded-xl text-center">
            <Text variant="lead" className="font-semibold mb-4">
              Pronto para sua próxima aventura?
            </Text>
            <Text className="text-muted-foreground mb-6">
              Reserve agora e garanta os melhores dias da sua vida em Barra Grande. Nossa equipe está pronta para
              recebê-lo!
            </Text>
            <ContactButton
              type="whatsapp"
              value="86 9950-5437"
              className="text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
            >
              Fazer Reserva Agora
            </ContactButton>
          </div>
        </div>
      </div>
    </section>
  )
}
