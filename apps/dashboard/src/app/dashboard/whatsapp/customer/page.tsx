"use client"

import { Card, CardContent, CardHeader, CardTitle, Button, Input, Modal, Table, Badge, type Column } from "@rl/ui"
import { useState } from "react"

interface Customer {
  id: string
  name: string
  phone: string
  orders: number
  lastOrder: string
  status: "active" | "inactive"
}

export default function CustomerPage() {
  const [customers, setCustomers] = useState<Customer[]>([])
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "" })

  function addCustomer() {
    setCustomers((prev) => [{
      id: crypto.randomUUID(),
      name: form.name,
      phone: form.phone,
      orders: 0,
      lastOrder: "-",
      status: "active",
    }, ...prev])
    setForm({ name: "", phone: "" })
    setShowModal(false)
  }

  const columns: Column<Customer>[] = [
    { key: "name", header: "Name" },
    { key: "phone", header: "Phone" },
    { key: "orders", header: "Orders" },
    { key: "lastOrder", header: "Last Order" },
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
          <h1 className="text-2xl font-bold text-gray-900 mt-1">WhatsApp Customers</h1>
        </div>
        <Button onClick={() => setShowModal(true)}>+ Add Customer</Button>
      </div>

      <Card padding="none">
        <Table columns={columns} data={customers} emptyMessage="Belum ada customer" />
      </Card>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Add Customer">
        <div className="space-y-4">
          <Input label="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <Input label="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <Button onClick={addCustomer} className="w-full">Save</Button>
        </div>
      </Modal>
    </div>
  )
}
