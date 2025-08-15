"use client"

import * as React from "react"
import { Button } from "@/components/atoms/button"

type ContactType = "whatsapp" | "phone" | "email"
type ButtonBaseProps = React.ComponentProps<typeof Button>

export interface ContactButtonProps
  extends Omit<ButtonBaseProps, "children" | "href" | "type"> {
  type: ContactType
  value: string
  message?: string
  children?: React.ReactNode
}

function buildHref({
  type,
  value,
  message,
}: {
  type: ContactType
  value: string
  message?: string
}) {
  switch (type) {
    case "whatsapp": {
      const phone = value.replace(/\D/g, "")
      const text = message ? encodeURIComponent(message) : ""
      return `https://wa.me/${phone}${text ? `?text=${text}` : ""}`
    }
    case "phone":
      return `tel:${value.replace(/\D/g, "")}`
    case "email":
      return `mailto:${value}`
  }
}

export const ContactButton = React.forwardRef<HTMLButtonElement, ContactButtonProps>(
  (
    {
      type,
      value,
      message,
      children,
      className,
      variant = "default",
      onClick,
      ...rest
    }: ContactButtonProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    const href: string | undefined = buildHref({ type, value, message })

    return (
      <Button ref={ref} asChild variant={variant} className={className} onClick={onClick} {...rest}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children ??
            (type === "whatsapp" ? "Falar no WhatsApp" : type === "phone" ? "Ligar" : "Enviar e-mail")}
        </a>
      </Button>
    )
  }
)

ContactButton.displayName = "ContactButton"
