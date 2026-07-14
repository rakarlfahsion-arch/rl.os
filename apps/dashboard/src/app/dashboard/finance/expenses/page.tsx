"use client"

import { Card, CardContent, CardHeader, CardTitle, Button, Input, Modal, Table, Badge, type Column } from "@rl/ui"
import { useState } from "react"

interface Expense {
  id: string
  description: string
  amount: number
  category: string
  date: string
}

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState<Expense[]>([])
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState({ description: "", amount: "", category: "Operational" })

  const total = expenses.reduce((acc, e) => acc + e.amount, 0)

  function addExpense() {
    setExpenses((prev) => [{
      id: crypto.randomUUID(),
      description: form.description,
      amount: Number(form.amount),
      category: form.category,
      date: new Date().toLocaleDateString("id-ID"),
    }, ...prev])
    setForm({ description: "", amount: "", category: "Operational" })
    setShowModal(false)
  }

  const columns: Column<Expense>[] = [
    { key: "description", header: "Description" },
    { key: "amount", header: "Amount", render: (r) => `Rp ${r.amount.toLocaleString()}` },
    { key: "category", header: "Category", render: (r) => <Badge>{r.category}</Badge> },
    { key: "date", header: "Date" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <a href="/dashboard/finance" className="text-sm text-blue-600">&larr; Finance</a>
          <h1 className="text-2xl font-bold text-gray-900 mt-1">Expenses</h1>
        </div>
        <Button onClick={() => setShowModal(true)}>+ Add Expense</Button>
      </div>

      <Card>
        <CardContent className="flex items-center justify-between">
          <span className="text-gray-600">Total Expenses</span>
          <span className="text-2xl font-bold text-red-600">Rp {total.toLocaleString()}</span>
        </CardContent>
      </Card>

      <Card padding="none">
        <Table columns={columns} data={expenses} emptyMessage="Belum ada pengeluaran" />
      </Card>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Add Expense">
        <div className="space-y-4">
          <Input label="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
          <Input label="Amount" type="number" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm">
              <option>Operational</option>
              <option>Material</option>
              <option>Utility</option>
              <option>Marketing</option>
              <option>Transport</option>
              <option>Other</option>
            </select>
          </div>
          <Button onClick={addExpense} className="w-full">Save</Button>
        </div>
      </Modal>
    </div>
  )
}
