"use client"

import { Card, CardContent, CardHeader, CardTitle, Button, Input, Modal, Table, type Column } from "@rl/ui"
import { useState } from "react"

interface CashRecord {
  id: string
  type: "income" | "expense"
  amount: number
  description: string
  date: string
}

export default function CashPage() {
  const [records, setRecords] = useState<CashRecord[]>([])
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState({ type: "income", amount: "", description: "" })

  const balance = records.reduce((acc, r) => r.type === "income" ? acc + r.amount : acc - r.amount, 0)

  function addRecord() {
    setRecords((prev) => [{
      id: crypto.randomUUID(),
      type: form.type as "income" | "expense",
      amount: Number(form.amount),
      description: form.description,
      date: new Date().toISOString(),
    }, ...prev])
    setForm({ type: "income", amount: "", description: "" })
    setShowModal(false)
  }

  const columns: Column<CashRecord>[] = [
    {
      key: "type",
      header: "Type",
      render: (r) => r.type === "income" ? "Pemasukan" : "Pengeluaran",
    },
    { key: "description", header: "Description" },
    {
      key: "amount",
      header: "Amount",
      render: (r) => `Rp ${r.amount.toLocaleString()}`,
    },
    { key: "date", header: "Date" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <a href="/dashboard/finance" className="text-sm text-blue-600">&larr; Finance</a>
          <h1 className="text-2xl font-bold text-gray-900 mt-1">Cash Management</h1>
        </div>
        <Button onClick={() => setShowModal(true)}>+ Add Record</Button>
      </div>

      <Card>
        <CardContent className="flex items-center justify-between">
          <span className="text-gray-600">Current Balance</span>
          <span className={`text-2xl font-bold ${balance >= 0 ? "text-green-600" : "text-red-600"}`}>
            Rp {balance.toLocaleString()}
          </span>
        </CardContent>
      </Card>

      <Card padding="none">
        <Table columns={columns} data={records} emptyMessage="Belum ada catatan keuangan" />
      </Card>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Add Cash Record">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
            <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm">
              <option value="income">Pemasukan</option>
              <option value="expense">Pengeluaran</option>
            </select>
          </div>
          <Input label="Amount" type="number" value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })} />
          <Input label="Description" value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })} />
          <Button onClick={addRecord} className="w-full">Save</Button>
        </div>
      </Modal>
    </div>
  )
}
