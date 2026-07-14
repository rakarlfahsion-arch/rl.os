export interface Recommendation {
  type: "product" | "price" | "stock" | "production"
  title: string
  description: string
  priority: "high" | "medium" | "low"
  action?: string
}

export function generateRecommendations(data: {
  salesTrend?: "up" | "down" | "stable"
  lowStock?: string[]
  productionDelay?: boolean
}): Recommendation[] {
  const recs: Recommendation[] = []

  if (data.salesTrend === "down") {
    recs.push({
      type: "price",
      title: "Penurunan Penjualan",
      description: "Pertimbangkan promo atau diskon untuk meningkatkan penjualan",
      priority: "high",
      action: "Buat Promo",
    })
  }

  if (data.lowStock?.length) {
    recs.push({
      type: "stock",
      title: "Stok Menipis",
      description: `${data.lowStock.length} produk perlu restock`,
      priority: "high",
      action: "Lihat Stok",
    })
  }

  if (data.productionDelay) {
    recs.push({
      type: "production",
      title: "Produksi Terlambat",
      description: "Ada order produksi yang melebihi deadline",
      priority: "medium",
      action: "Cek Produksi",
    })
  }

  return recs
}
