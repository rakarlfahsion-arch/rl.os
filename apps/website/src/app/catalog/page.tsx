"use client"

import { useState } from "react"

const products = [
  { id: 1, name: "Kemeja Premium Pria", category: "Kemeja", price: 149000, image: "👔" },
  { id: 2, name: "Gamis Elegan Wanita", category: "Gamis", price: 199000, image: "👗" },
  { id: 3, name: "Batik Modern Couple", category: "Batik", price: 250000, image: "🥻" },
  { id: 4, name: "Hijab Syar'i Premium", category: "Hijab", price: 89000, image: "🧣" },
  { id: 5, name: "Koko Muslim Pria", category: "Koko", price: 129000, image: "👕" },
  { id: 6, name: "Cardigan Wanita", category: "Cardigan", price: 159000, image: "🧥" },
]

export default function CatalogPage() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")

  const filtered = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    const matchCat = category === "all" || p.category.toLowerCase() === category.toLowerCase()
    return matchSearch && matchCat
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">RL</div>
            <span className="font-semibold">R&L Fashion</span>
          </a>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Product Catalog</h1>

        <div className="flex gap-4 mb-8">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm"
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm">
            <option value="all">All Categories</option>
            <option value="kemeja">Kemeja</option>
            <option value="gamis">Gamis</option>
            <option value="batik">Batik</option>
            <option value="hijab">Hijab</option>
            <option value="koko">Koko</option>
            <option value="cardigan">Cardigan</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <div key={p.id} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4 text-center">{p.image}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{p.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{p.category}</p>
              <p className="text-lg font-bold text-blue-600">Rp {p.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
