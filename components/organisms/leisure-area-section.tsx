import { SectionHeader } from "@/components/molecules/section-header"
import { FeatureCard } from "@/components/molecules/feature-card"
import { Wifi, Tv, Wind, Droplets, Utensils, Sun } from "lucide-react"

export function LeisureAreaSection() {
  const features = [
    { icon: Wifi, title: "Wi-Fi de Alta Velocidade", description: "Conexão de fibra óptica." },
    { icon: Tv, title: "Smart TV", description: "Acesso a Netflix, YouTube e outros apps." },
    { icon: Wind, title: "Ar-Condicionado", description: "Quartos climatizados para seu conforto." },
    { icon: Droplets, title: "Piscina com Hidro", description: "Relaxe com hidromassagem e iluminação LED." },
    { icon: Utensils, title: "Área Gourmet Completa", description: "Churrasqueira e fogão a lenha." },
    { icon: Sun, title: "Deck Avarandado", description: "Espaço amplo com armadores para redes." },
  ];

  return (
    <section id="area-lazer" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Área de Lazer"
          title="Diversão e relaxamento garantidos"
          description="Nossa estrutura foi pensada para oferecer a melhor experiência para você e sua família."
          centered
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="animate-slide-up"
            />
          ))}
        </div>
      </div>
    </section>
  )
}