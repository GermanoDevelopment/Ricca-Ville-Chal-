import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface IconProps {
  icon: LucideIcon
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
}

export function Icon({ icon: IconComponent, className, size = "md" }: IconProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8",
  }

  return <IconComponent className={cn(sizeClasses[size], className)} />
}
