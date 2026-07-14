"use client"

import { Card, CardContent, CardHeader, CardTitle, Button, Badge } from "@rl/ui"
import { useState } from "react"

export default function HashtagPage() {
  const [productName, setProductName] = useState("")
  const [platform, setPlatform] = useState("instagram")
  const [hashtags, setHashtags] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  async function handleGenerate() {
    if (!productName.trim()) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setHashtags([
      "#Fashion", `#${productName.replace(/\s/g, "")}`, "#OOTD",
      "#StyleInspo", "#FashionDaily", "#TrendingNow",
      "#FashionIndonesia", "#HijabFashion", "#ModestFashion",
      "#BajuMuslim", "#FashionMuslimah", "#OOTDIndonesia",
      "#StyleGoals", "#FashionTips", "#DailyLook",
    ])
    setLoading(false)
  }

  const copyAll = () => {
    navigator.clipboard.writeText(hashtags.join(" "))
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <a href="/dashboard/video-studio" className="text-sm text-blue-600 hover:text-blue-700">&larr; Back to Video Studio</a>
        <h1 className="text-2xl font-bold text-gray-900 mt-1">AI Hashtag Generator</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Generate Hashtags</CardTitle>
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
              <select value={platform} onChange={(e) => setPlatform(e.target.value)} className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm">
                <option value="instagram">Instagram</option>
                <option value="tiktok">TikTok</option>
                <option value="youtube">YouTube</option>
                <option value="all">All Platforms</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
              <select className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm">
                <option>10 hashtags</option>
                <option selected>15 hashtags</option>
                <option>20 hashtags</option>
                <option>30 hashtags</option>
              </select>
            </div>
          </div>
          <Button onClick={handleGenerate} loading={loading}>
            Generate Hashtags
          </Button>
        </CardContent>
      </Card>

      {hashtags.length > 0 && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Generated Hashtags</CardTitle>
              <Button variant="outline" size="sm" onClick={copyAll}>Copy All</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {hashtags.map((tag) => (
                <Badge key={tag} variant="info">{tag}</Badge>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              <Button variant="outline" size="sm">Regenerate</Button>
              <Button variant="outline" size="sm">Save as Template</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
