"use client"

import { useState } from "react"

export default function ResellerPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", city: "" })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">RL</div>
            <span className="font-semibold">R&L Fashion</span>
          </a>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Jadi Reseller R&L Fashion</h1>
        <p className="text-gray-600 mb-8">
          Dapatkan keuntungan menarik dengan menjadi reseller produk fashion berkualitas kami.
        </p>

        <div className="grid grid-cols-3 gap-6 mb-12">
          {[
            { title: "Diskon 30%", desc: "Harga khusus reseller" },
            { title: "Free Ongkir", desc: "Minimal pembelian tertentu" },
            { title: "Support 24/7", desc: "Dedicated customer service" },
          ].map((b) => (
            <div key={b.title} className="text-center p-4 bg-white rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{b.title}</h3>
              <p className="text-xs text-gray-500">{b.desc}</p>
            </div>
          ))}
        </div>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
            <p className="text-green-700 font-medium">Pendaftaran berhasil! Kami akan menghubungi Anda dalam 1x24 jam.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 border border-gray-200 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
              <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">No. WhatsApp</label>
              <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Kota</label>
              <input type="text" required value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" />
            </div>
            <button type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 text-sm">
              Daftar Reseller
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
