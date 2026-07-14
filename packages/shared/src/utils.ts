export function formatCurrency(amount: number, currency = "IDR"): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(amount)
}

export function formatDate(date: Date | string, format: "short" | "long" | "relative" = "short"): string {
  const d = typeof date === "string" ? new Date(date) : date
  if (format === "relative") {
    const now = new Date()
    const diff = now.getTime() - d.getTime()
    const minutes = Math.floor(diff / 60000)
    if (minutes < 1) return "baru saja"
    if (minutes < 60) return `${minutes}m lalu`
    const hours = Math.floor(minutes / 60)
    if (hours < 24) return `${hours}j lalu`
    const days = Math.floor(hours / 24)
    return `${days}h lalu`
  }
  return d.toLocaleDateString("id-ID", {
    year: "numeric",
    month: format === "long" ? "long" : "short",
    day: "numeric",
  })
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ")
}
