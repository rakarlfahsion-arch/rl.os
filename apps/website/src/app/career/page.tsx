"use client"

import { useState } from "react"

const positions = [
  { title: "Production Supervisor", type: "Full-time", dept: "Production", location: "Bandung" },
  { title: "Quality Control Staff", type: "Full-time", dept: "QC", location: "Bandung" },
  { title: "Fashion Designer", type: "Full-time", dept: "Design", location: "Bandung" },
  { title: "Marketing Specialist", type: "Full-time", dept: "Marketing", location: "Jakarta" },
  { title: "Admin & Finance", type: "Full-time", dept: "Finance", location: "Bandung" },
  { title: "IT Support", type: "Contract", dept: "IT", location: "Remote" },
]

export default function CareerPage() {
  const [selectedPosition, setSelectedPosition] = useState("")
  const [form, setForm] = useState({ name: "", phone: "", email: "", position: "" })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSelectedPosition("")
    setForm({ name: "", phone: "", email: "", position: "" })
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

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Career Opportunities</h1>
        <p className="text-gray-600 mb-8">Bergabunglah dengan tim R&L Fashion dan tumbuh bersama kami.</p>

        <div className="grid gap-4 mb-12">
          {positions.map((p) => (
            <div key={p.title} className="bg-white rounded-xl p-6 border border-gray-200 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">{p.title}</h3>
                <p className="text-sm text-gray-500">{p.dept} · {p.location} · {p.type}</p>
              </div>
              <button onClick={() => { setSelectedPosition(p.title); setForm({ ...form, position: p.title }) }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                Apply
              </button>
            </div>
          ))}
        </div>

        {selectedPosition && (
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Apply for {selectedPosition}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" />
              </div>
              <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 text-sm">
                Submit Application
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
