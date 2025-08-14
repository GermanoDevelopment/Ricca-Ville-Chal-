import { Icon } from "@/components/atoms/icon"
import { Text } from "@/components/atoms/text"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface ContactInfoProps {
  icon: LucideIcon
  label: string
  value: string
  href?: string
  className?: string
}

export function ContactInfo({ icon, label, value, href, className }: ContactInfoProps) {
  const content = (
    <div className={cn("flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors", className)}>
      <Icon icon={icon} className="text-primary" />
      <div>
        <Text variant="small" className="text-muted-foreground">
          {label}
        </Text>
        <Text variant="body" className="font-medium">
          {value}
        </Text>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    )
  }

  return content
}
