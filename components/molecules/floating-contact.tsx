"use client"

import { ContactButton } from "@/components/molecules/contact-button"
import { cn } from "@/lib/utils"

interface FloatingContactProps {
  className?: string
}

export function FloatingContact({ className }: FloatingContactProps) {
  return (
    <div className={cn("fixed bottom-6 right-6 z-40 flex flex-col space-y-3", className)}>
      <ContactButton
        type="whatsapp"
        value="8699839-0312"
        className="shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300"
      >
        WhatsApp
      </ContactButton>
      <ContactButton
        type="phone"
        value="8699839-0312"
        variant="outline"
        className="shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
      >
        Ligar
      </ContactButton>
    </div>
  )
}
