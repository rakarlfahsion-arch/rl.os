import { Card, CardContent, CardHeader, CardTitle } from "@rl/ui"

export default function OwnerCenterPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Owner Center</h1>

      <Card>
        <CardHeader>
          <CardTitle>Business Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Business Name</label>
              <p className="text-gray-900 mt-1">R&L Fashion</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Business Phone</label>
              <p className="text-gray-900 mt-1">-</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <p className="text-gray-900 mt-1">-</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <p className="text-gray-900 mt-1">-</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
