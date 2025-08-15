"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/molecules/section-header"
import { GalleryItem } from "@/components/molecules/gallery-item"
import { Lightbox } from "@/components/molecules/lightbox"

export function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    {
      src: "/images/area-piscina-completa.jpg",
      alt: "Área da piscina com espreguiçadeiras e paisagismo tropical",
    },
    {
      src: "/images/fachada-externa.jpg",
      alt: "Vista externa do chalé com flores amarelas e arquitetura rústica",
    },
    {
      src: "/images/area-jantar-interna.jpg",
      alt: "Área de jantar com mesa de madeira maciça e azulejos decorativos",
    },
    {
      src: "/images/chale-escada-flores.jpg",
      alt: "Escada de madeira decorada com flores amarelas tropicais",
    },
    {
      src: "/images/varanda-superior.jpg",
      alt: "Varanda superior com deck de madeira e vista panorâmica",
    },
    {
      src: "/images/jantar-azulejos.jpg",
      alt: "Mesa de jantar com azulejos decorativos azuis e amarelos ao fundo",
    },
    {
      src: "/images/varanda-escada.jpg",
      alt: "Varanda com escada de madeira e jardim com flores amarelas",
    },
    {
      src: "/images/corredor-varanda.jpg",
      alt: "Corredor da varanda com piso de madeira e vista para vegetação",
    },
    {
      src: "/images/detalhes-decorativos.jpg",
      alt: "Detalhes decorativos com cerâmicas artesanais e móveis rústicos",
    },
    {
      src: "/images/chale-vista-aerea.jpg",
      alt: "Vista aérea do chalé mostrando telhado de telhas e piscina",
    },
  ]

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Galeria"
          title="Conheça cada detalhe"
          description="Explore todos os ambientes e amenidades que tornam sua estadia especial."
          centered
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
            <GalleryItem
              key={index}
              src={image.src}
              alt={image.alt}
              onClick={() => openLightbox(index)}
              className="animate-slide-up"
              // Removido o prop 'style' que não existe em GalleryItemProps
            />
            ))}
        </div>

        <Lightbox
          images={images}
          currentIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      </div>
    </section>
  )
}
