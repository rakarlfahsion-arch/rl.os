export class FacebookClient {
  private accessToken: string

  constructor(config: { accessToken: string }) {
    this.accessToken = config.accessToken
  }

  async getCatalog() {
    // TODO: implement Facebook Catalog API
    return []
  }

  async syncProducts(products: unknown[]) {
    // TODO: sync to Facebook Shop
    return { synced: products.length }
  }
}
