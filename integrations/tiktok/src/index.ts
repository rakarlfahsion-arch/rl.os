export class TikTokClient {
  private accessToken: string

  constructor(config: { accessToken: string }) {
    this.accessToken = config.accessToken
  }

  async getShopInfo() {
    // TODO: implement TikTok Shop API
    return {}
  }

  async syncProducts(products: unknown[]) {
    // TODO: sync to TikTok Shop
    return { synced: products.length }
  }
}
