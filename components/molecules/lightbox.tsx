"use client"

import { useEffect } from "react"
import { Button } from "@/components/atoms/button"
import { Icon } from "@/components/atoms/icon"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface LightboxProps {
  images: Array<{ src: string; alt: string }>
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}

export function Lightbox({ images, currentIndex, isOpen, onClose, onNext, onPrevious }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case "Escape":
          onClose()
          break
        case "ArrowLeft":
          onPrevious()
          break
        case "ArrowRight":
          onNext()
          break
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose, onNext, onPrevious])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  const currentImage = images[currentIndex]

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
        >
          <Icon icon={X} size="lg" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={onPrevious}
          className={cn(
            "absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20",
            images.length <= 1 && "hidden",
          )}
        >
          <Icon icon={ChevronLeft} size="lg" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={onNext}
          className={cn(
            "absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20",
            images.length <= 1 && "hidden",
          )}
        >
          <Icon icon={ChevronRight} size="lg" />
        </Button>

        <img
          src={currentImage?.src || "/placeholder.svg"}
          alt={currentImage?.alt || ""}
          className="max-w-full max-h-full object-contain"
        />

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
          {currentIndex + 1} de {images.length}
        </div>
      </div>
    </div>
  )
}
