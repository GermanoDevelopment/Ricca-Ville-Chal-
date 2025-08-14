"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/atoms/button"
import { Icon } from "@/components/atoms/icon"
import { ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Button
      onClick={scrollToTop}
      variant="coastal"
      size="sm"
      className={cn(
        "fixed bottom-24 left-6 z-40 rounded-full p-3 shadow-lg hover:shadow-xl",
        "transform transition-all duration-300",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none",
      )}
      aria-label="Voltar ao topo"
    >
      <Icon icon={ChevronUp} size="md" />
    </Button>
  )
}
