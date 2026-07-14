"use client"

import { Card, CardContent, CardHeader, CardTitle, Button } from "@rl/ui"
import { useState } from "react"

export default function CaptionPage() {
  const [productName, setProductName] = useState("")
  const [tone, setTone] = useState("professional")
  const [caption, setCaption] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleGenerate() {
    if (!productName.trim()) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setCaption(
      `Transform your look with ${productName} — where elegance meets everyday comfort. ✨\n\n` +
      `Crafted with premium materials for the ultimate style experience.\n\n` +
      `Shop now and elevate your fashion game! 👗👑`
    )
    setLoading(false)
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <a href="/dashboard/video-studio" className="text-sm text-blue-600 hover:text-blue-700">&larr; Back to Video Studio</a>
        <h1 className="text-2xl font-bold text-gray-900 mt-1">AI Caption Generator</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Generate Caption</CardTitle>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Tone</label>
              <select value={tone} onChange={(e) => setTone(e.target.value)} className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm">
                <option value="professional">Professional</option>
                <option value="casual">Casual</option>
                <option value="fun">Fun</option>
                <option value="luxury">Luxury</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Length</label>
              <select className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm">
                <option>Short</option>
                <option selected>Medium</option>
                <option>Long</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="cta" defaultChecked />
            <label htmlFor="cta" className="text-sm text-gray-700">Include Call-to-Action</label>
          </div>
          <Button onClick={handleGenerate} loading={loading}>
            Generate Caption
          </Button>
        </CardContent>
      </Card>

      {caption && (
        <Card>
          <CardHeader>
            <CardTitle>Generated Caption</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 rounded-lg p-4 whitespace-pre-wrap text-sm text-gray-800">{caption}</div>
            <div className="flex gap-2 mt-3">
              <Button variant="outline" size="sm">Copy</Button>
              <Button variant="outline" size="sm">Regenerate</Button>
              <Button variant="outline" size="sm">Use for All Platforms</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
