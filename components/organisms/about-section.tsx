import { SectionTitle } from "@/components/atoms/section-title"
import { Text } from "@/components/atoms/text"

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <SectionTitle level={2} className="mb-6">
              Sobre o Ricca Ville Chalé
            </SectionTitle>

            <Text variant="lead" className="mb-6">
              Localizado na paradisíaca Praia de Barra Grande, no Piauí, nosso chalé oferece a combinação perfeita entre
              conforto e natureza.
            </Text>

            <Text className="mb-4">
              A apenas 800 metros do mar, você encontrará um refúgio completo com piscina com hidromassagem e LED, área
              gourmet equipada e acomodações confortáveis para até 10 pessoas.
            </Text>

            <Text>
              Desconecte-se da rotina e reconecte-se com o que realmente importa: momentos especiais com família e
              amigos em um dos destinos mais belos do litoral brasileiro.
            </Text>
          </div>

          <div className="animate-slide-up">
            <img
              src="/images/area-jantar-interna.jpg"
              alt="Área de jantar interna com mesa de madeira maciça e azulejos decorativos"
              className="w-full h-auto rounded-xl shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
