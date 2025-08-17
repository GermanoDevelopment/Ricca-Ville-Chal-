// DENTRO DE: components/atoms/image.tsx

"use client"
import NextImage from "next/image" // Importando o componente otimizado do Next.js
import { cn } from "@/lib/utils"

interface ImageProps {
  src: string
  alt: string
  className?: string
  loading?: "lazy" | "eager"
  rounded?: boolean
  shadow?: boolean
}

export function Image({
  src,
  alt,
  className,
  loading = "lazy",
  rounded = false,
  shadow = false,
}: ImageProps) {
  return (
    <div className={cn("relative overflow-hidden", rounded && "rounded-lg", className)}>
      <NextImage
        src={src || "/placeholder.svg"}
        alt={alt}
        fill // Propriedade importante que faz a imagem preencher o container pai
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw" // Ajuda o Next.js a escolher a melhor qualidade de imagem
        loading={loading}
        className={cn(
          "object-cover transition-transform duration-300 group-hover:scale-105", // Mantive seu efeito de hover
          shadow && "shadow-lg"
        )}
      />
    </div>
  )
}