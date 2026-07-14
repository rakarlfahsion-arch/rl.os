import { cn } from "@rl/shared"
import type { ReactNode } from "react"

interface CardProps {
  padding?: "none" | "sm" | "md" | "lg"
  children?: ReactNode
  className?: string
}

export function Card({ className, padding = "md", children }: CardProps) {
  const paddings = { none: "", sm: "p-3", md: "p-4", lg: "p-6" }
  return (
    <div className={cn("bg-white rounded-xl border border-gray-200 shadow-sm", paddings[padding], className)}>
      {children}
    </div>
  )
}

interface CardSubProps {
  children?: ReactNode
  className?: string
}

export function CardHeader({ className, children }: CardSubProps) {
  return <div className={cn("mb-4", className)}>{children}</div>
}

export function CardTitle({ className, children }: CardSubProps) {
  return <h3 className={cn("text-lg font-semibold text-gray-900", className)}>{children}</h3>
}

export function CardContent({ className, children }: CardSubProps) {
  return <div className={className}>{children}</div>
}
