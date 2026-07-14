export class WhatsAppClient {
  private apiKey: string

  constructor(config: { apiKey: string }) {
    this.apiKey = config.apiKey
  }

  async sendMessage(to: string, message: string) {
    // TODO: implement WhatsApp API
    console.log(`Sending to ${to}: ${message}`)
  }

  async sendTemplate(to: string, templateName: string, params: Record<string, string>) {
    // TODO: implement WhatsApp template
    console.log(`Sending template ${templateName} to ${to}`, params)
  }

  async getConversations() {
    return []
  }
}
