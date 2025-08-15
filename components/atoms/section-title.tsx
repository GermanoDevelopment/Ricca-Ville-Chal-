import React from "react"

// 1. Adicionamos a nova propriedade aqui
interface SectionTitleProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
  className?: string
  centered?: boolean // Propriedade para centralizar (opcional)
}

export function SectionTitle({ 
  level = 2, 
  children, 
  className, 
  centered = false // 2. Pegamos a propriedade (valor padrão: false)
}: SectionTitleProps) {
  const Tag: React.ElementType = `h${level}`

  // 3. Juntamos as classes: a que veio de fora + 'text-center' (se 'centered' for true)
  const finalClassName = `${className || ''} ${centered ? 'text-center' : ''}`.trim()

  return (
    <Tag className={finalClassName}>
      {children}
    </Tag>
  )
}