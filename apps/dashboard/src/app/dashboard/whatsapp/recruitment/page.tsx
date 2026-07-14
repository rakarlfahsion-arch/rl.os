"use client"

import { Card, CardContent, CardHeader, CardTitle, Button, Input, Modal, Table, Badge, type Column } from "@rl/ui"
import { useState } from "react"

interface Applicant {
  id: string
  name: string
  phone: string
  position: string
  status: "new" | "interview" | "accepted" | "rejected"
  appliedAt: string
}

export default function RecruitmentPage() {
  const [applicants, setApplicants] = useState<Applicant[]>([])
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", position: "" })

  function addApplicant() {
    setApplicants((prev) => [{
      id: crypto.randomUUID(),
      name: form.name,
      phone: form.phone,
      position: form.position,
      status: "new",
      appliedAt: new Date().toLocaleDateString("id-ID"),
    }, ...prev])
    setForm({ name: "", phone: "", position: "" })
    setShowModal(false)
  }

  const columns: Column<Applicant>[] = [
    { key: "name", header: "Name" },
    { key: "phone", header: "Phone" },
    { key: "position", header: "Position" },
    {
      key: "status",
      header: "Status",
      render: (r) => {
        const v = r.status === "accepted" ? "success" as const : r.status === "rejected" ? "danger" as const : r.status === "interview" ? "warning" as const : "info" as const
        return <Badge variant={v}>{r.status}</Badge>
      },
    },
    { key: "appliedAt", header: "Applied" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <a href="/dashboard/whatsapp" className="text-sm text-blue-600">&larr; WhatsApp</a>
          <h1 className="text-2xl font-bold text-gray-900 mt-1">Recruitment</h1>
        </div>
        <Button onClick={() => setShowModal(true)}>+ Add Applicant</Button>
      </div>

      <Card padding="none">
        <Table columns={columns} data={applicants} emptyMessage="Belum ada pelamar" />
      </Card>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Add Applicant">
        <div className="space-y-4">
          <Input label="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <Input label="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <Input label="Position" value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} />
          <Button onClick={addApplicant} className="w-full">Save</Button>
        </div>
      </Modal>
    </div>
  )
}
