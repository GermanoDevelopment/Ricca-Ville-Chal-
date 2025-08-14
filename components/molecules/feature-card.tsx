import { Icon } from "@/components/atoms/icon"
import { Text } from "@/components/atoms/text"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center p-6 rounded-lg",
        "bg-card border border-border shadow-sm",
        "hover:shadow-md transition-shadow duration-200",
        className,
      )}
    >
      <div className="mb-4 p-3 rounded-full bg-primary/10">
        <Icon icon={icon} size="lg" className="text-primary" />
      </div>
      <Text variant="lead" className="mb-2 font-semibold">
        {title}
      </Text>
      <Text variant="small" className="text-muted-foreground">
        {description}
      </Text>
    </div>
  )
}
