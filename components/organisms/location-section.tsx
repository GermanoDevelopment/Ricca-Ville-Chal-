import { SectionHeader } from "@/components/molecules/section-header"
import { Text } from "@/components/atoms/text"
import { Badge } from "@/components/atoms/badge"
import { Icon } from "@/components/atoms/icon"
import { MapPin, Car, Clock } from "lucide-react"

export function LocationSection() {
  return (
    <section id="localizacao" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Localização"
          title="Pertinho de tudo que importa"
          description="Localização privilegiada a poucos metros do mar e próximo aos principais pontos de Barra Grande."
          centered
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                <Icon icon={MapPin} className="text-primary" />
              </div>
              <div>
                <Text variant="lead" className="font-semibold mb-2">
                  Praia de Barra Grande - Piauí
                </Text>
                <Text className="text-muted-foreground">
                  Localizado em uma das praias mais belas do litoral piauiense, com águas cristalinas e paisagens
                  deslumbrantes.
                </Text>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                <Icon icon={Clock} className="text-primary" />
              </div>
              <div>
                <Text variant="lead" className="font-semibold mb-2">
                  Apenas 800m do mar
                </Text>
                <Text className="text-muted-foreground">
                  Caminhada tranquila de poucos minutos até a praia. Perfeito para ir e voltar quantas vezes quiser.
                </Text>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                <Icon icon={Car} className="text-primary" />
              </div>
              <div>
                <Text variant="lead" className="font-semibold mb-2">
                  Estacionamento para 5 carros
                </Text>
                <Text className="text-muted-foreground">
                  Espaço seguro e coberto dentro da propriedade para toda a família e amigos.
                </Text>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Badge variant="coastal">
                <Icon icon={MapPin} size="sm" className="mr-1" />
                800m da praia
              </Badge>
              <Badge variant="secondary">Centro de Barra Grande</Badge>
              <Badge variant="secondary">Restaurantes próximos</Badge>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.661779852347!2d-41.40113742585912!3d-2.9133124970630777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ec0569c462e513%3A0xfc3b099691ea8be!2sChal%C3%A9%20Ricca%20Ville-%20Barra%20Grande%20PI!5e0!3m2!1spt-BR!2sbr!4v1755452664895!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Ricca Ville Chalé em Barra Grande - Piauí"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-background border border-border rounded-lg p-4 shadow-lg">
              <Text variant="small" className="font-medium">
                Barra Grande - PI
              </Text>
              <Text variant="small" className="text-muted-foreground">
                Localização exata
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
