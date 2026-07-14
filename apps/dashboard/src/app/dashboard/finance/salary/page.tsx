"use client"

import { Card, CardContent, CardHeader, CardTitle, Button, Input, Modal, Table, Badge, type Column } from "@rl/ui"
import { useState } from "react"

interface SalaryRecord {
  id: string
  employee: string
  amount: number
  period: string
  status: "paid" | "pending"
  paidAt?: string
}

export default function SalaryPage() {
  const [salaries, setSalaries] = useState<SalaryRecord[]>([])
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState({ employee: "", amount: "", period: "" })

  const totalSalary = salaries.reduce((acc, s) => acc + s.amount, 0)
  const pendingSalary = salaries.filter((s) => s.status === "pending").reduce((acc, s) => acc + s.amount, 0)

  function addSalary() {
    setSalaries((prev) => [{
      id: crypto.randomUUID(),
      employee: form.employee,
      amount: Number(form.amount),
      period: form.period,
      status: "pending",
    }, ...prev])
    setForm({ employee: "", amount: "", period: "" })
    setShowModal(false)
  }

  const columns: Column<SalaryRecord>[] = [
    { key: "employee", header: "Employee" },
    { key: "amount", header: "Amount", render: (r) => `Rp ${r.amount.toLocaleString()}` },
    { key: "period", header: "Period" },
    {
      key: "status",
      header: "Status",
      render: (r) => <Badge variant={r.status === "paid" ? "success" : "warning"}>{r.status}</Badge>,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <a href="/dashboard/finance" className="text-sm text-blue-600">&larr; Finance</a>
          <h1 className="text-2xl font-bold text-gray-900 mt-1">Salary Management</h1>
        </div>
        <Button onClick={() => setShowModal(true)}>+ Add Salary</Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader><CardTitle>Total Salary</CardTitle></CardHeader>
          <CardContent><p className="text-2xl font-bold text-gray-900">Rp {totalSalary.toLocaleString()}</p></CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Pending Payment</CardTitle></CardHeader>
          <CardContent><p className="text-2xl font-bold text-yellow-600">Rp {pendingSalary.toLocaleString()}</p></CardContent>
        </Card>
      </div>

      <Card padding="none">
        <Table columns={columns} data={salaries} emptyMessage="Belum ada data gaji" />
      </Card>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Add Salary">
        <div className="space-y-4">
          <Input label="Employee Name" value={form.employee} onChange={(e) => setForm({ ...form, employee: e.target.value })} />
          <Input label="Amount" type="number" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} />
          <Input label="Period (e.g. Jan 2026)" value={form.period} onChange={(e) => setForm({ ...form, period: e.target.value })} />
          <Button onClick={addSalary} className="w-full">Save</Button>
        </div>
      </Modal>
    </div>
  )
}
