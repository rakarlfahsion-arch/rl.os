"use client"

import { Card, CardContent, CardHeader, CardTitle, Button, Input, Modal, Table, Badge, type Column } from "@rl/ui"
import { useState } from "react"

interface Partner {
  id: string
  name: string
  phone: string
  type: string
  status: "active" | "inactive"
}

export default function PartnerPage() {
  const [partners, setPartners] = useState<Partner[]>([])
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", type: "Reseller" })

  function addPartner() {
    setPartners((prev) => [{
      id: crypto.randomUUID(),
      name: form.name,
      phone: form.phone,
      type: form.type,
      status: "active",
    }, ...prev])
    setForm({ name: "", phone: "", type: "Reseller" })
    setShowModal(false)
  }

  const columns: Column<Partner>[] = [
    { key: "name", header: "Name" },
    { key: "phone", header: "Phone" },
    { key: "type", header: "Type" },
    {
      key: "status",
      header: "Status",
      render: (r) => <Badge variant={r.status === "active" ? "success" : "default"}>{r.status}</Badge>,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <a href="/dashboard/whatsapp" className="text-sm text-blue-600">&larr; WhatsApp</a>
          <h1 className="text-2xl font-bold text-gray-900 mt-1">Partners</h1>
        </div>
        <Button onClick={() => setShowModal(true)}>+ Add Partner</Button>
      </div>

      <Card padding="none">
        <Table columns={columns} data={partners} emptyMessage="Belum ada partner" />
      </Card>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Add Partner">
        <div className="space-y-4">
          <Input label="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <Input label="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
            <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm">
              <option>Reseller</option>
              <option>Supplier</option>
              <option>Distributor</option>
              <option>Affiliate</option>
            </select>
          </div>
          <Button onClick={addPartner} className="w-full">Save</Button>
        </div>
      </Modal>
    </div>
  )
}
