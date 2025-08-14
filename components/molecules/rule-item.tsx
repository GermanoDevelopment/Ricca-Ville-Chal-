import { Icon } from "@/components/atoms/icon"
import { Text } from "@/components/atoms/text"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface RuleItemProps {
  icon: LucideIcon
  title: string
  description: string
  type?: "info" | "warning" | "success"
  className?: string
}

export function RuleItem({ icon, title, description, type = "info", className }: RuleItemProps) {
  const typeClasses = {
    info: "text-primary",
    warning: "text-yellow-600",
    success: "text-green-600",
  }

  return (
    <div className={cn("flex items-start space-x-4 p-4 rounded-lg bg-card border border-border", className)}>
      <div className={cn("flex-shrink-0 mt-1", typeClasses[type])}>
        <Icon icon={icon} size="md" />
      </div>
      <div className="flex-1">
        <Text variant="lead" className="mb-1 font-medium">
          {title}
        </Text>
        <Text variant="small" className="text-muted-foreground">
          {description}
        </Text>
      </div>
    </div>
  )
}
