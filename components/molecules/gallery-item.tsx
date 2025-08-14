"use client"
import { useState } from "react"
import { Image } from "@/components/atoms/image"
import { cn } from "@/lib/utils"

interface GalleryItemProps {
  src: string
  alt: string
  className?: string
  onClick?: () => void
}

export function GalleryItem({ src, alt, className, onClick }: GalleryItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg cursor-pointer group",
        "transform transition-all duration-300 hover:scale-105",
        className,
      )}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={src || "/placeholder.svg"} alt={alt} className="aspect-square" shadow />
      <div
        className={cn(
          "absolute inset-0 bg-black/40 flex items-center justify-center",
          "transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="text-white text-sm font-medium">Ver imagem</div>
      </div>
    </div>
  )
}
