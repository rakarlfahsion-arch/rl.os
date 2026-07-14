import { HermesAI } from "@rl/ai"

export interface CaptionOptions {
  productName: string
  productDescription?: string
  tone?: "professional" | "casual" | "fun" | "luxury"
  length?: "short" | "medium" | "long"
  includeCta?: boolean
  language?: "id" | "en"
}

export interface CaptionResult {
  caption: string
  variations: string[]
  cta?: string
  estimatedReadTime: number
}

export async function generateCaption(
  hermes: HermesAI,
  options: CaptionOptions,
): Promise<CaptionResult> {
  const prompt = buildCaptionPrompt(options)
  const response = await hermes.chat(prompt)
  const captions = response.choices?.[0]?.message?.content || ""

  return {
    caption: captions.split("\n\n")[0] || captions,
    variations: captions.split("\n\n").slice(1, 3),
    cta: options.includeCta ? getDefaultCta(options.tone) : undefined,
    estimatedReadTime: Math.ceil(captions.length / 200),
  }
}

function buildCaptionPrompt(options: CaptionOptions): string {
  return `Buatkan caption ${options.language === "en" ? "in English" : "dalam Bahasa Indonesia"} untuk produk fashion berikut:

Nama Produk: ${options.productName}
Deskripsi: ${options.productDescription || "-"}
Nada: ${options.tone || "professional"}
Panjang: ${options.length || "medium"}
${options.includeCta ? "Sertakan Call-to-Action" : "Tanpa CTA"}

Berikan 3 variasi caption yang dipisahkan oleh baris kosong.`
}

function getDefaultCta(tone?: string): string {
  const ctas: Record<string, string> = {
    professional: "Dapatkan produk ini sekarang juga!",
    casual: "Yuk, checkout sekarang! 🛍️",
    fun: "Jangan sampai kehabisan! 🔥",
    luxury: "Experience the elegance. Order now.",
  }
  return ctas[tone || "professional"] || ctas.professional
}
