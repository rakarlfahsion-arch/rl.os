import { cn } from "@rl/shared"
import type { ReactNode, ChangeEvent } from "react"

interface InputProps {
  label?: string
  error?: string
  id?: string
  className?: string
  type?: string
  placeholder?: string
  value?: string | number
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  children?: ReactNode
}

export function Input({ className, label, error, id, ...props }: InputProps) {
  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(
          "block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm",
          "placeholder:text-gray-400",
          "focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500",
          className,
        )}
        {...props}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  )
}
