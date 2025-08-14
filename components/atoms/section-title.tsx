import { cn } from "@/lib/utils"
import type React from "react"

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
  level?: 1 | 2 | 3
  centered?: boolean
}

export function SectionTitle({ children, className, level = 2, centered = false }: SectionTitleProps) {
  const Component = `h${level}` as keyof JSX.IntrinsicElements

  const levelClasses = {
    1: "text-4xl md:text-5xl lg:text-6xl",
    2: "text-3xl md:text-4xl lg:text-5xl",
    3: "text-2xl md:text-3xl lg:text-4xl",
  }

  return (
    <Component
      className={cn(
        "font-serif font-bold text-foreground mb-4",
        levelClasses[level],
        centered && "text-center",
        className,
      )}
    >
      {children}
    </Component>
  )
}
