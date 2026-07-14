"use client"

import { Card, CardContent, CardHeader, CardTitle, Button, Input, Modal, Table, Badge, type Column } from "@rl/ui"
import { useState } from "react"

interface WaEmployee {
  id: string
  name: string
  phone: string
  department: string
  group: string
}

export default function WaEmployeePage() {
  const [employees, setEmployees] = useState<WaEmployee[]>([])
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", department: "", group: "Production" })

  function addEmployee() {
    setEmployees((prev) => [{
      id: crypto.randomUUID(),
      name: form.name,
      phone: form.phone,
      department: form.department,
      group: form.group,
    }, ...prev])
    setForm({ name: "", phone: "", department: "", group: "Production" })
    setShowModal(false)
  }

  const columns: Column<WaEmployee>[] = [
    { key: "name", header: "Name" },
    { key: "phone", header: "Phone" },
    { key: "department", header: "Department" },
    { key: "group", header: "WhatsApp Group" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <a href="/dashboard/whatsapp" className="text-sm text-blue-600">&larr; WhatsApp</a>
          <h1 className="text-2xl font-bold text-gray-900 mt-1">Employee WhatsApp</h1>
        </div>
        <Button onClick={() => setShowModal(true)}>+ Add Employee</Button>
      </div>

      <Card padding="none">
        <Table columns={columns} data={employees} emptyMessage="Belum ada data" />
      </Card>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Add Employee WhatsApp">
        <div className="space-y-4">
          <Input label="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <Input label="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <Input label="Department" value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Group</label>
            <select value={form.group} onChange={(e) => setForm({ ...form, group: e.target.value })}
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm">
              <option>Production</option>
              <option>Finance</option>
              <option>Management</option>
              <option>All Staff</option>
            </select>
          </div>
          <Button onClick={addEmployee} className="w-full">Save</Button>
        </div>
      </Modal>
    </div>
  )
}
