import type React from "react"
import { SectionTitle } from "@/components/atoms/section-title"
import { Text } from "@/components/atoms/text"
import { TestimonialCard } from "@/components/molecules/testimonial-card"

// Array de depoimentos - facilita a adição de novas imagens
const testimonials = [
	{
		id: 1,
		imageSrc: "/whatsapp-testimonial.png",
		imageAlt: "Depoimento de cliente satisfeito no WhatsApp",
		clientName: "Cliente Satisfeito",
		platform: "WhatsApp",
	},
	{
		id: 2,
		imageSrc: "/instagram-testimonial.png",
		imageAlt: "Avaliação positiva no Instagram",
		clientName: "Hóspede Feliz",
		platform: "Instagram",
	},
	{
		id: 3,
		imageSrc: "/whatsapp-review-screenshot.png",
		imageAlt: "Review detalhado no WhatsApp",
		clientName: "Família Contente",
		platform: "WhatsApp",
	},
	{
		id: 4,
		imageSrc: "/social-media-testimonial.png",
		imageAlt: "Comentário positivo nas redes sociais",
		clientName: "Casal Apaixonado",
		platform: "Instagram",
	},
]

export function SocialProofSection() {
	return (
		<section className="py-16 lg:py-24 bg-gradient-to-br from-cream-50 to-sand-50">
			<div className="container mx-auto px-4">
				{/* Header da seção */}
				<div className="text-center mb-12 lg:mb-16">
					<SectionTitle className="text-terracotta-600 mb-4">
						O que nossos hóspedes dizem
					</SectionTitle>
					<Text className="text-wood-700 max-w-2xl mx-auto">
						Experiências reais de quem já se hospedou no Ricca Ville Chalé.
						Confira os relatos e avaliações dos nossos queridos hóspedes.
					</Text>
				</div>

				{/* Grid de depoimentos */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
					{testimonials.map((testimonial, index) => (
						<TestimonialCard
							key={testimonial.id}
							imageSrc={testimonial.imageSrc}
							imageAlt={testimonial.imageAlt}
							clientName={testimonial.clientName}
							platform={testimonial.platform}
							className={`animate-fade-in-up`}
						/>
					))}
				</div>

				{/* Estatísticas de satisfação */}
				<div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
					<div className="space-y-2">
						<div className="text-3xl lg:text-4xl font-bold text-terracotta-600">
							98%
						</div>
						<Text className="text-wood-600">
							Satisfação dos Hóspedes
						</Text>
					</div>
					<div className="space-y-2">
						<div className="text-3xl lg:text-4xl font-bold text-azure-600">
							150+
						</div>
						<Text className="text-wood-600">
							Avaliações Positivas
						</Text>
					</div>
					<div className="space-y-2">
						<div className="text-3xl lg:text-4xl font-bold text-sunflower-600">
							4.9
						</div>
						<Text className="text-wood-600">Nota Média</Text>
					</div>
				</div>
			</div>
		</section>
	)
}
