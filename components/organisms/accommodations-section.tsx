import { SectionHeader } from "@/components/molecules/section-header"
import { AccommodationCard } from "@/components/molecules/accommodation-card"

export function AccommodationsSection() {
  const accommodations = [
    {
      title: "Quarto Térreo Triplo",
      capacity: 3,
      description: "Quarto confortável no térreo com ar-condicionado e espaço para até 3 pessoas.",
      features: [
        "Ar-condicionado",
        "2 armadores para redes",
        "Colchão extra disponível",
        "Acesso direto à área externa",
      ],
    },
    {
      title: "Quarto Mezanino Triplo",
      capacity: 3,
      description: "Quarto no mezanino com vista privilegiada e ambiente aconchegante.",
      features: [
        "Ar-condicionado",
        "Espaço para 2 redes (trazer suas redes)",
        "Colchão extra disponível",
        "Vista panorâmica da propriedade",
      ],
    },
    {
      title: "Áreas Comuns",
      capacity: 4,
      description: "Espaços compartilhados amplos e bem equipados para toda a família.",
      features: ["Sala de estar espaçosa", "Cozinha completa", "Banheiro social", "Deck avarandado com 7 armadores"],
    },
  ]

  return (
    <section id="acomodacoes" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Acomodações"
          title="Conforto para toda a família"
          description="Espaços pensados para proporcionar o máximo de conforto e comodidade durante sua estadia."
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation, index) => (
            <AccommodationCard
              key={index}
              title={accommodation.title}
              capacity={accommodation.capacity}
              features={accommodation.features}
              description={accommodation.description}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
