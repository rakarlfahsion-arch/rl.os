import { Card, CardContent, CardHeader, CardTitle } from "@rl/ui"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-gray-900">0</p>
            <p className="text-sm text-gray-500">today</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-600">Rp 0</p>
            <p className="text-sm text-gray-500">this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Products</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-gray-900">0</p>
            <p className="text-sm text-gray-500">active products</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Employees</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-gray-900">0</p>
            <p className="text-sm text-gray-500">active staff</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500 text-sm">Belum ada order</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Production Status</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500 text-sm">Belum ada produksi</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
