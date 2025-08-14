"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    onClick?.()
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        "text-foreground hover:text-primary transition-colors duration-200",
        "font-medium text-sm md:text-base",
        "hover:underline underline-offset-4",
        className,
      )}
    >
      {children}
    </a>
  )
}
