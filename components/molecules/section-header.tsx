import { SectionTitle } from "@/components/atoms/section-title"
import { Text } from "@/components/atoms/text"
import { Divider } from "@/components/atoms/divider"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({ title, subtitle, description, centered = false, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      {subtitle && (
        <Text variant="small" className="text-primary font-medium mb-2 uppercase tracking-wider">
          {subtitle}
        </Text>
      )}
      <SectionTitle level={2} centered={centered} className="mb-4">
        {title}
      </SectionTitle>
      {description && (
        <Text variant="lead" className={cn("text-muted-foreground max-w-2xl", centered && "mx-auto")}>
          {description}
        </Text>
      )}
      <div className={cn("mt-6", centered && "flex justify-center")}>
        <Divider className="w-20 bg-primary/30" />
      </div>
    </div>
  )
}
