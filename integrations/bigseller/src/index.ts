export class BigSellerClient {
  private baseUrl: string
  private apiKey: string
  private apiSecret: string

  constructor(config: { apiKey: string; apiSecret: string; shopName: string }) {
    this.baseUrl = `https://${config.shopName}.bigseller.com/api/v2`
    this.apiKey = config.apiKey
    this.apiSecret = config.apiSecret
  }

  async getProducts() {
    const response = await fetch(`${this.baseUrl}/products`, {
      headers: this.getHeaders(),
    })
    return response.json()
  }

  async getOrders(params?: { status?: string; page?: number; limit?: number }) {
    const query = new URLSearchParams()
    if (params?.status) query.set("status", params.status)
    if (params?.page) query.set("page", String(params.page))
    if (params?.limit) query.set("limit", String(params.limit))

    const response = await fetch(`${this.baseUrl}/orders?${query}`, {
      headers: this.getHeaders(),
    })
    return response.json()
  }

  async syncProducts() {
    const products = await this.getProducts()
    return products
  }

  async syncOrders() {
    const orders = await this.getOrders()
    return orders
  }

  private getHeaders(): Record<string, string> {
    return {
      "Authorization": `Bearer ${this.apiKey}`,
      "X-Secret": this.apiSecret,
      "Content-Type": "application/json",
    }
  }
}
