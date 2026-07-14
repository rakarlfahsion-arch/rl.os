"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@rl/ui"

export default function FinancePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Finance</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader><CardTitle>Cash Balance</CardTitle></CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-600">Rp 0</p>
            <p className="text-sm text-gray-500">current balance</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Total Expenses</CardTitle></CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-red-600">Rp 0</p>
            <p className="text-sm text-gray-500">this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Total Salary</CardTitle></CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-gray-900">Rp 0</p>
            <p className="text-sm text-gray-500">this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Net Profit</CardTitle></CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-blue-600">Rp 0</p>
            <p className="text-sm text-gray-500">this month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <a href="/dashboard/finance/cash" className="block">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader><CardTitle>💵 Cash Management</CardTitle></CardHeader>
            <CardContent><p className="text-sm text-gray-600">Catat pemasukan & pengeluaran harian</p></CardContent>
          </Card>
        </a>
        <a href="/dashboard/finance/salary" className="block">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader><CardTitle>💰 Salary Management</CardTitle></CardHeader>
            <CardContent><p className="text-sm text-gray-600">Kelola gaji karyawan & pembayaran</p></CardContent>
          </Card>
        </a>
        <a href="/dashboard/finance/expenses" className="block">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader><CardTitle>📋 Expenses</CardTitle></CardHeader>
            <CardContent><p className="text-sm text-gray-600">Catat & pantau semua pengeluaran</p></CardContent>
          </Card>
        </a>
        <a href="/dashboard/finance/reports" className="block">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader><CardTitle>📊 Reports</CardTitle></CardHeader>
            <CardContent><p className="text-sm text-gray-600">Laporan keuangan & analisis</p></CardContent>
          </Card>
        </a>
      </div>
    </div>
  )
}
