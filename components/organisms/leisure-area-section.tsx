import React from "react"

interface FeatureCardProps {
  icon: React.ElementType
  title: string
  description: string
  className?: string
  style?: React.CSSProperties // <-- adiciona essa linha
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  style
}: FeatureCardProps) {
  return (
    <div className={`p-6 rounded-lg shadow ${className ?? ""}`} style={style}>
      <Icon className="w-8 h-8 mb-4" />
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
