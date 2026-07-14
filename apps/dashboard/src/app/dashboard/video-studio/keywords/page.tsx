"use client"

import { Card, CardContent, CardHeader, CardTitle, Button, Badge, Table, type Column } from "@rl/ui"
import { useState } from "react"

interface KeywordRow {
  keyword: string
  volume: number
  competition: string
  trend: string
}

export default function KeywordsPage() {
  const [productName, setProductName] = useState("")
  const [keywords, setKeywords] = useState<KeywordRow[]>([])
  const [loading, setLoading] = useState(false)

  async function handleResearch() {
    if (!productName.trim()) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setKeywords([
      { keyword: productName, volume: 12000, competition: "High", trend: "Stable" },
      { keyword: `${productName} murah`, volume: 8500, competition: "Medium", trend: "Up" },
      { keyword: `harga ${productName}`, volume: 5400, competition: "Medium", trend: "Stable" },
      { keyword: `${productName} original`, volume: 4200, competition: "Low", trend: "Stable" },
      { keyword: `beli ${productName} online`, volume: 3800, competition: "Low", trend: "Up" },
      { keyword: `${productName} premium`, volume: 2100, competition: "Low", trend: "Up" },
      { keyword: `${productName} terbaru`, volume: 1800, competition: "Medium", trend: "Stable" },
      { keyword: `review ${productName}`, volume: 1200, competition: "Low", trend: "Down" },
      { keyword: `${productName} cod`, volume: 850, competition: "Low", trend: "Stable" },
      { keyword: `${productName} free ongkir`, volume: 620, competition: "Medium", trend: "Stable" },
    ])
    setLoading(false)
  }

  const columns: Column<KeywordRow>[] = [
    { key: "keyword", header: "Keyword" },
    {
      key: "volume",
      header: "Search Volume",
      render: (row) => row.volume.toLocaleString(),
    },
    {
      key: "competition",
      header: "Competition",
      render: (row) => (
        <Badge variant={row.competition === "High" ? "danger" : row.competition === "Medium" ? "warning" : "success"}>
          {row.competition}
        </Badge>
      ),
    },
    {
      key: "trend",
      header: "Trend",
      render: (row) => (
        <Badge variant={row.trend === "Up" ? "success" : row.trend === "Down" ? "danger" : "default"}>
          {row.trend}
        </Badge>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <a href="/dashboard/video-studio" className="text-sm text-blue-600 hover:text-blue-700">&larr; Back to Video Studio</a>
        <h1 className="text-2xl font-bold text-gray-900 mt-1">Keywords Research</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Research Keywords</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Nama produk..."
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Platform</label>
              <select className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm">
                <option>All Platforms</option>
                <option>Shopee</option>
                <option>Tokopedia</option>
                <option>Google</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm">
                <option>All Categories</option>
                <option>Baju</option>
                <option>Gamis</option>
                <option>Batik</option>
                <option>Hijab</option>
              </select>
            </div>
          </div>
          <Button onClick={handleResearch} loading={loading}>
            Research Keywords
          </Button>
        </CardContent>
      </Card>

      {keywords.length > 0 && (
        <Card padding="none">
          <Table
            columns={columns}
            data={keywords}
          />
        </Card>
      )}
    </div>
  )
}
