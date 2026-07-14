"use client"

import { Card, CardContent, CardHeader, CardTitle, Button } from "@rl/ui"
import { useState } from "react"

export default function ReportsPage() {
  const [period, setPeriod] = useState("monthly")
  const [generating, setGenerating] = useState(false)

  async function handleGenerate() {
    setGenerating(true)
    await new Promise((r) => setTimeout(r, 2000))
    setGenerating(false)
  }

  return (
    <div className="space-y-6">
      <div>
        <a href="/dashboard/finance" className="text-sm text-blue-600">&larr; Finance</a>
        <h1 className="text-2xl font-bold text-gray-900 mt-1">Financial Reports</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Generate Report</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Period</label>
              <select value={period} onChange={(e) => setPeriod(e.target.value)}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm">
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Report Type</label>
              <select className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm">
                <option>Profit & Loss</option>
                <option>Cash Flow</option>
                <option>Expense Summary</option>
                <option>Salary Summary</option>
              </select>
            </div>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleGenerate} loading={generating}>Generate Report</Button>
            <Button variant="outline">Export PDF</Button>
            <Button variant="outline">Export Excel</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Recent Reports</CardTitle></CardHeader>
        <CardContent>
          <p className="text-gray-500 text-sm">Belum ada laporan yang di-generate</p>
        </CardContent>
      </Card>
    </div>
  )
}
