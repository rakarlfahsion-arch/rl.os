"use client"

import { Card, CardContent, CardHeader, CardTitle, Button, Badge } from "@rl/ui"
import { useState } from "react"

export default function SEOPage() {
  const [productName, setProductName] = useState("")
  const [platform, setPlatform] = useState("all")
  const [seoResult, setSeoResult] = useState<{
    title: string
    description: string
    keywords: string[]
    tips: string[]
  } | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleOptimize() {
    if (!productName.trim()) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setSeoResult({
      title: `${productName} | R&L Fashion`,
      description: `Beli ${productName} terbaru dengan harga terbaik. Kualitas premium, fashion terbaru, ready stock.`,
      keywords: [productName, `jual ${productName}`, `${productName} murah`, `${productName} original`, "fashion", "baju", "fashion indonesia"],
      tips: [
        "Gunakan foto produk berkualitas tinggi dengan resolusi minimal 1000px",
        "Sertakan video produk untuk meningkatkan engagement",
        "Tulis deskripsi detail minimal 200 kata",
        "Gunakan kata kunci di judul dan deskripsi",
        "Aktifkan fitur live streaming untuk interaksi",
      ],
    })
    setLoading(false)
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <a href="/dashboard/video-studio" className="text-sm text-blue-600 hover:text-blue-700">&larr; Back to Video Studio</a>
        <h1 className="text-2xl font-bold text-gray-900 mt-1">SEO Optimizer</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Optimize Product SEO</CardTitle>
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
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Target Platform</label>
            <select value={platform} onChange={(e) => setPlatform(e.target.value)} className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm">
              <option value="all">All Platforms</option>
              <option value="shopee">Shopee</option>
              <option value="tokopedia">Tokopedia</option>
              <option value="lazada">Lazada</option>
              <option value="tiktok">TikTok Shop</option>
            </select>
          </div>
          <Button onClick={handleOptimize} loading={loading}>
            Optimize SEO
          </Button>
        </CardContent>
      </Card>

      {seoResult && (
        <>
          <Card>
            <CardHeader>
              <CardTitle>SEO Preview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-blue-600 text-sm font-medium">{seoResult.title}</p>
                <p className="text-green-700 text-xs mt-1">{window.location.origin}/product/{productName.toLowerCase().replace(/\s+/g, "-")}</p>
                <p className="text-gray-600 text-sm mt-1">{seoResult.description}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Keywords</label>
                <div className="flex flex-wrap gap-2">
                  {seoResult.keywords.map((kw) => (
                    <Badge key={kw} variant="info">{kw}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SEO Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {seoResult.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    {tip}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}
