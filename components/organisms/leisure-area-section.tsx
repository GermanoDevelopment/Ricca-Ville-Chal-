import { SectionHeader } from "@/components/molecules/section-header"
import { FeatureCard } from "@/components/molecules/feature-card"
import { Waves, Wifi, ChefHat, Tv, UtensilsCrossed, ShowerHeadIcon as Shower, Droplets, Car } from "lucide-react"

export function LeisureAreaSection() {
  const features = [
    {
      icon: Waves,
      title: "Piscina com Hidromassagem",
      description: "Piscina equipada com hidromassagem e iluminação LED para relaxar dia e noite.",
    },
    {
      icon: Wifi,
      title: "Internet Wi-Fi",
      description: "Conexão de alta velocidade para você se manter conectado quando necessário.",
    },
    {
      icon: ChefHat,
      title: "Área Gourmet",
      description: "Espaço completo com churrasqueira e freezer para suas refeições especiais.",
    },
    {
      icon: Tv,
      title: "TV com Internet",
      description: "Smart TV com acesso à internet para entretenimento de toda a família.",
    },
    {
      icon: UtensilsCrossed,
      title: "Cozinha Ampla",
      description: "Cozinha totalmente equipada para preparar suas refeições com comodidade.",
    },
    {
      icon: Shower,
      title: "Chuveiro Externo",
      description: "Chuveiro ao ar livre para se refrescar após um dia de praia.",
    },
    {
      icon: Droplets,
      title: "Poço Tubular",
      description: "Água de qualidade direto do poço tubular para seu conforto.",
    },
    {
      icon: Car,
      title: "Estacionamento",
      description: "Espaço seguro para até 5 carros dentro da propriedade.",
    },
  ]

  return (
    <section id="area-lazer" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Área de Lazer"
          title="Tudo que você precisa para relaxar"
          description="Amenidades completas para tornar sua estadia ainda mais especial e confortável."
          centered
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
