import { cn } from "@rl/shared"
import type { ReactNode } from "react"

export interface SidebarItem {
  label: string
  icon: ReactNode
  href: string
  badge?: string | number
  active?: boolean
}

interface SidebarProps {
  items: SidebarItem[]
  isCollapsed?: boolean
  onToggle?: () => void
  logo?: ReactNode
}

export function Sidebar({ items, isCollapsed, logo }: SidebarProps) {
  return (
    <aside className={cn(
      "h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-300",
      isCollapsed ? "w-16" : "w-64",
    )}>
      <div className={cn("p-4 border-b border-gray-200", isCollapsed && "p-3")}>
        {logo}
      </div>
      <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
              item.active
                ? "bg-blue-50 text-blue-700"
                : "text-gray-700 hover:bg-gray-100",
              isCollapsed && "justify-center px-2",
            )}
            title={isCollapsed ? item.label : undefined}
          >
            <span className="w-5 h-5 shrink-0">{item.icon}</span>
            {!isCollapsed && (
              <>
                <span className="flex-1 truncate">{item.label}</span>
                {item.badge && (
                  <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
                    {item.badge}
                  </span>
                )}
              </>
            )}
          </a>
        ))}
      </nav>
    </aside>
  )
}
