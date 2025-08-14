"use client"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface ImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  loading?: "lazy" | "eager"
  rounded?: boolean
  shadow?: boolean
}

export function Image({
  src,
  alt,
  className,
  width,
  height,
  loading = "lazy",
  rounded = false,
  shadow = false,
}: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  return (
    <div className={cn("relative overflow-hidden", rounded && "rounded-lg", className)}>
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          shadow && "shadow-lg",
          hasError && "opacity-50",
        )}
      />
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
          <div className="text-muted-foreground text-sm">Carregando...</div>
        </div>
      )}
      {hasError && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <div className="text-muted-foreground text-sm">Erro ao carregar imagem</div>
        </div>
      )}
    </div>
  )
}
