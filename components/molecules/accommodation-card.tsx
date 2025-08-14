import { Card } from "@/components/ui/card"
import { Text } from "@/components/atoms/text"
import { Badge } from "@/components/atoms/badge"
import { Icon } from "@/components/atoms/icon"
import { Users } from "lucide-react"

interface AccommodationCardProps {
  title: string
  capacity: number
  features: string[]
  description: string
  className?: string
}

export function AccommodationCard({ title, capacity, features, description, className }: AccommodationCardProps) {
  return (
    <Card className={className}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-serif font-semibold">{title}</h3>
          <Badge variant="coastal">
            <Icon icon={Users} size="sm" className="mr-1" />
            {capacity} pessoas
          </Badge>
        </div>

        <Text className="mb-4 text-muted-foreground">{description}</Text>

        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm">
              <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
