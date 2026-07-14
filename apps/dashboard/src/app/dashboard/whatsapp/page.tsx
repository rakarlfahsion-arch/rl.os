"use client"

import { Card, CardContent, CardHeader, CardTitle, Button } from "@rl/ui"
import { useState } from "react"

export default function WhatsAppPage() {
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [sending, setSending] = useState(false)

  async function handleSend() {
    if (!phone.trim() || !message.trim()) return
    setSending(true)
    await new Promise((r) => setTimeout(r, 1500))
    setSending(false)
    setMessage("")
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">WhatsApp Integration</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Send WhatsApp Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="6281234567890"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Type your message..."
                />
              </div>
              <div className="flex gap-2">
                <select className="rounded-lg border border-gray-300 px-3 py-2 text-sm">
                  <option>Send Now</option>
                  <option>Schedule</option>
                </select>
                <Button onClick={handleSend} loading={sending}>Send</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <a href="/dashboard/whatsapp/customer" className="block">
            <Card className="hover:shadow-md cursor-pointer">
              <CardHeader><CardTitle>👥 Customers</CardTitle></CardHeader>
              <CardContent><p className="text-sm text-gray-600">Manage customer contacts</p></CardContent>
            </Card>
          </a>
          <a href="/dashboard/whatsapp/recruitment" className="block">
            <Card className="hover:shadow-md cursor-pointer">
              <CardHeader><CardTitle>🎯 Recruitment</CardTitle></CardHeader>
              <CardContent><p className="text-sm text-gray-600">Recruit via WhatsApp</p></CardContent>
            </Card>
          </a>
          <a href="/dashboard/whatsapp/partner" className="block">
            <Card className="hover:shadow-md cursor-pointer">
              <CardHeader><CardTitle>🤝 Partners</CardTitle></CardHeader>
              <CardContent><p className="text-sm text-gray-600">Partner communication</p></CardContent>
            </Card>
          </a>
          <a href="/dashboard/whatsapp/employee" className="block">
            <Card className="hover:shadow-md cursor-pointer">
              <CardHeader><CardTitle>👷 Employees</CardTitle></CardHeader>
              <CardContent><p className="text-sm text-gray-600">Employee notifications</p></CardContent>
            </Card>
          </a>
        </div>
      </div>
    </div>
  )
}
