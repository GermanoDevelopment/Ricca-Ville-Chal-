import { SectionHeader } from "@/components/molecules/section-header"
import { TestimonialCard } from "@/components/molecules/testimonial-card"

// Array de depoimentos - fácil de adicionar novas imagens aqui
const testimonials = [
  {
    id: 1,
    imageSrc: "/satisfied-customer-chalet-testimonial.png",
    imageAlt: "Depoimento de cliente satisfeito com a estadia no Ricca Ville Chalé",
    clientName: "Cliente Satisfeito",
    date: "Dezembro 2024",
  },
  {
    id: 2,
    imageSrc: "/positive-hotel-review.png",
    imageAlt: "Avaliação positiva da hospedagem no chalé",
    clientName: "Família Silva",
    date: "Janeiro 2025",
  },
  {
    id: 3,
    imageSrc: "/elogio-redes-sociais.png",
    imageAlt: "Comentário elogioso nas redes sociais sobre o chalé",
    clientName: "Casal Viajante",
    date: "Novembro 2024",
  },
  {
    id: 4,
    imageSrc: "/incredible-testimonial.png",
    imageAlt: "Depoimento sobre experiência incrível no Ricca Ville Chalé",
    clientName: "Grupo de Amigos",
    date: "Outubro 2024",
  },
  {
    id: 5,
    imageSrc: "/booking-five-stars.png",
    imageAlt: "Avaliação 5 estrelas em plataforma de reservas",
    clientName: "Turista Internacional",
    date: "Setembro 2024",
  },
  {
    id: 6,
    imageSrc: "/instagram-story-recommendation.png",
    imageAlt: "Recomendação do chalé em stories do Instagram",
    clientName: "Influencer Local",
    date: "Agosto 2024",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-sand/20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="O Que Nossos Hóspedes Dizem"
          subtitle="Depoimentos reais de quem já viveu momentos especiais no Ricca Ville Chalé"
          className="text-center mb-16"
        />

        {/* Grid responsivo de depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              imageSrc={testimonial.imageSrc}
              imageAlt={testimonial.imageAlt}
              clientName={testimonial.clientName}
              date={testimonial.date}
              className={`
                ${index % 3 === 1 ? "lg:mt-8" : ""}
                ${index % 2 === 1 ? "md:mt-6 lg:mt-0" : ""}
                animate-fade-in-up
              `}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            />
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">Faça parte dessa história de momentos inesquecíveis</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5586998390312?text=Olá! Gostaria de fazer uma reserva no Ricca Ville Chalé"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Reserve Sua Estadia
            </a>
            <a
              href="#galeria"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            >
              Ver Mais Fotos
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
