import { OpenAIClient } from "@composio/openai"

export class HermesAI {
  private client: OpenAIClient

  constructor(apiKey: string) {
    this.client = new OpenAIClient({ apiKey })
  }

  async chat(message: string, context?: string) {
    return this.client.chat({
      messages: [
        { role: "system", content: "Anda adalah Hermes AI, asisten AI untuk R&L AI OS. Anda membantu mengelola bisnis fashion, produksi, dan e-commerce." },
        ...(context ? [{ role: "system" as const, content: context }] : []),
        { role: "user", content: message },
      ],
    })
  }

  async analyzeSentiment(text: string) {
    return this.client.chat({
      messages: [
        { role: "system", content: "Analisis sentimen dari teks berikut. Balas hanya dengan: POSITIVE, NEGATIVE, atau NEUTRAL." },
        { role: "user", content: text },
      ],
    })
  }
}
