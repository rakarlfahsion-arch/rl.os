"use client"

import { Card, CardContent, CardHeader, CardTitle, Button } from "@rl/ui"
import { useState } from "react"

export default function VideoStudioPage() {
  const [productName, setProductName] = useState("")
  const [generating, setGenerating] = useState(false)
  const [videos, setVideos] = useState<string[]>([])

  async function handleGenerate() {
    if (!productName.trim()) return
    setGenerating(true)
    // TODO: call video generation API
    await new Promise((r) => setTimeout(r, 3000))
    setVideos((prev) => [`Video untuk ${productName}`, ...prev])
    setGenerating(false)
    setProductName("")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">AI Video Studio</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Generate Product Video</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-sm text-gray-600 mb-1">Upload product images</p>
                <p className="text-xs text-gray-400">Drag & drop atau klik untuk upload (max 10 images)</p>
              </div>

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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Style</label>
                  <select className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm">
                    <option>Cinematic</option>
                    <option>Catalog</option>
                    <option>Lifestyle</option>
                    <option>Unboxing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                  <select className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm">
                    <option>15 seconds</option>
                    <option selected>30 seconds</option>
                    <option>60 seconds</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="checkbox" /> Voiceover
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="checkbox" defaultChecked /> Watermark
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="checkbox" defaultChecked /> Background Music
                </label>
              </div>

              <Button onClick={handleGenerate} loading={generating} className="w-full">
                {generating ? "Generating Video..." : "Generate Video"}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Generated Videos</CardTitle>
            </CardHeader>
            <CardContent>
              {videos.length === 0 ? (
                <p className="text-gray-500 text-sm">Belum ada video yang di-generate</p>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {videos.map((v, i) => (
                    <div key={i} className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <svg className="w-8 h-8 mx-auto text-gray-400 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-xs text-gray-500 truncate px-2">{v}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>AI Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <a href="/dashboard/video-studio/caption" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">AI Caption</p>
                  <p className="text-xs text-gray-500">Generate captions otomatis</p>
                </div>
              </a>
              <a href="/dashboard/video-studio/hashtag" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">AI Hashtag</p>
                  <p className="text-xs text-gray-500">Generate hashtag trending</p>
                </div>
              </a>
              <a href="/dashboard/video-studio/seo" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">SEO Optimizer</p>
                  <p className="text-xs text-gray-500">Optimasi SEO produk</p>
                </div>
              </a>
              <a href="/dashboard/video-studio/keywords" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Keywords Research</p>
                  <p className="text-xs text-gray-500">Riset keyword produk</p>
                </div>
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Videos Generated</span>
                <span className="font-semibold text-gray-900">{videos.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Processing</span>
                <span className="font-semibold text-gray-900">{generating ? 1 : 0}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Storage Used</span>
                <span className="font-semibold text-gray-900">0 MB</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
