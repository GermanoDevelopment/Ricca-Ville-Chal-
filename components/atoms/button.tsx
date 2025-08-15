import type React from "react"
import { Button as ShadcnButton } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

type ShadcnVariants = "default" | "secondary" | "outline" | "ghost" | "link"
type ButtonProps = Omit<React.ComponentProps<typeof ShadcnButton>, "variant"> & {
  variant?: ShadcnVariants | "coastal"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...rest }, ref) => {
    const mappedVariant: ShadcnVariants = variant === "coastal" ? "default" : variant as ShadcnVariants

    return (
      <ShadcnButton
        ref={ref}
        variant={mappedVariant}
        className={cn(
          variant === "coastal" && [
            "bg-primary hover:bg-primary/90 text-primary-foreground",
            "shadow-lg hover:shadow-xl transition-all duration-300",
            "border-2 border-primary/20 hover:border-primary/30",
          ],
          className
        )}
        {...rest}
      />
    )
  }
)

Button.displayName = "Button"
export { Button }
