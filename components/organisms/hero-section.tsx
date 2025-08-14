"use client"

import { useState, useEffect } from "react"
import { SectionTitle } from "@/components/atoms/section-title"
import { Text } from "@/components/atoms/text"
import { ContactButton } from "@/components/molecules/contact-button"
import { Badge } from "@/components/atoms/badge"
import { Icon } from "@/components/atoms/icon"
import { MapPin, Star, Users, ChevronLeft, ChevronRight } from "lucide-react"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroImages = [
    {
      src: "/images/area-piscina-completa.jpg",
      alt: "Área da piscina com espreguiçadeiras e paisagismo tropical",
    },
    {
      src: "/images/fachada-externa.jpg",
      alt: "Vista externa do chalé com flores amarelas",
    },
    {
      src: "/images/chale-vista-aerea.jpg",
      alt: "Vista aérea do chalé mostrando toda a propriedade",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm p-2 rounded-full border border-border/50 hover:bg-background/90 transition-all"
        aria-label="Imagem anterior"
      >
        <ChevronLeft className="w-6 h-6 text-foreground" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm p-2 rounded-full border border-border/50 hover:bg-background/90 transition-all"
        aria-label="Próxima imagem"
      >
        <ChevronRight className="w-6 h-6 text-foreground" />
      </button>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-primary scale-110" : "bg-background/50 hover:bg-background/70"
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Location Badge */}
          <div className="mb-6 animate-fade-in">
            <Badge variant="coastal" className="text-sm px-4 py-2 bg-accent/90 text-accent-foreground border-accent">
              <Icon icon={MapPin} size="sm" className="mr-2" />
              Barra Grande - Piauí
            </Badge>
          </div>

          <SectionTitle level={1} centered className="mb-6 animate-slide-up text-background drop-shadow-lg">
            Viva dias inesquecíveis em Barra Grande – Piauí
          </SectionTitle>

          <Text
            variant="lead"
            className="mb-8 max-w-3xl mx-auto text-center animate-slide-up text-background/90 drop-shadow-md"
          >
            Desfrute de momentos únicos em nossa casa de temporada com piscina, área gourmet e toda comodidade que você
            merece, a apenas 800m do mar cristalino.
          </Text>

          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-slide-up">
            <div className="flex items-center bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 border border-border/50 shadow-lg">
              <Icon icon={Users} size="sm" className="mr-2 text-primary" />
              <span className="text-sm font-medium">Até 10 pessoas</span>
            </div>
            <div className="flex items-center bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 border border-border/50 shadow-lg">
              <Icon icon={Star} size="sm" className="mr-2 text-blue-tile" />
              <span className="text-sm font-medium">Piscina com LED</span>
            </div>
            <div className="flex items-center bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 border border-border/50 shadow-lg">
              <Icon icon={MapPin} size="sm" className="mr-2 text-accent" />
              <span className="text-sm font-medium">800m do mar</span>
            </div>
          </div>

          <div className="animate-slide-up space-y-4">
            <ContactButton
              type="whatsapp"
              value="86999999999"
              className="text-lg px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 bg-primary hover:bg-primary/90"
            >
              Reservar Agora
            </ContactButton>
            <div>
              <Text variant="small" className="text-background/80 drop-shadow-sm">
                Resposta rápida via WhatsApp • Disponível 24h
              </Text>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/70 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-background rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
