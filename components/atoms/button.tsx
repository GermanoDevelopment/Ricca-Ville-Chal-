import type React from "react"
import { Button as ShadcnButton } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface ButtonProps extends React.ComponentProps<typeof ShadcnButton> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "coastal"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = "default", ...props }, ref) => {
  return (
    <ShadcnButton
      ref={ref}
      variant={variant === "coastal" ? "default" : variant}
      className={cn(
        variant === "coastal" && [
          "bg-primary hover:bg-primary/90 text-primary-foreground",
          "shadow-lg hover:shadow-xl transition-all duration-300",
          "border-2 border-primary/20 hover:border-primary/30",
        ],
        className,
      )}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }
