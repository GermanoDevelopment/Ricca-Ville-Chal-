import React from "react"
import type { SVGProps } from "react"

// AQUI a gente avisa que o componente vai receber a propriedade 'type'
export interface RuleItemProps {
  icon: React.ComponentType<SVGProps<SVGSVGElement>>
  title: string
  description?: string
  className?: string
  style?: React.CSSProperties
  type: 'success' | 'info' | 'warning'; // <<< MUDANÇA 1
}

export function RuleItem({ 
  icon: Icon, 
  title, 
  description, 
  className, 
  style, 
  type // <<< MUDANÇA 2: Pegando a propriedade 'type'
}: RuleItemProps) {

  // AQUI a gente define qual cor usar para cada tipo
  const typeStyles = {
    success: "text-green-500",
    info: "text-blue-500",
    warning: "text-yellow-500",
  }; // <<< MUDANÇA 3

  return (
    <div className={className} style={style}>
      {/* E AQUI a gente aplica a cor no ícone */}
      <Icon className={`w-6 h-6 mb-2 ${typeStyles[type]}`} /> {/* <<< MUDANÇA 4 */}
      
      <div className="font-medium">{title}</div>
      {description && <p className="text-sm text-muted-foreground">{description}</p>}
    </div>
  )
}