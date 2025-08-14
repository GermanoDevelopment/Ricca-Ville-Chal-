import type React from "react"
import { cn } from "@/lib/utils"

interface TextProps {
  children: React.ReactNode
  className?: string
  variant?: "body" | "lead" | "small" | "muted"
  as?: "p" | "span" | "div"
}

export function Text({ children, className, variant = "body", as: Component = "p" }: TextProps) {
  const variantClasses = {
    body: "text-base leading-relaxed",
    lead: "text-lg leading-relaxed font-medium",
    small: "text-sm leading-normal",
    muted: "text-sm text-muted-foreground leading-normal",
  }

  return <Component className={cn(variantClasses[variant], className)}>{children}</Component>
}
