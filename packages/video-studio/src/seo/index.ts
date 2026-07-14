import { HermesAI } from "@rl/ai"

export interface SEOOptions {
  productName: string
  description?: string
  category?: string
  platform?: "shopee" | "tokopedia" | "lazada" | "tiktok" | "instagram" | "all"
}

export interface SEOResult {
  title: string
  metaDescription: string
  keywords: string[]
  slug: string
  tips: string[]
}

export async function optimizeSEO(
  hermes: HermesAI,
  options: SEOOptions,
): Promise<SEOResult> {
  const prompt = buildSEOPrompt(options)
  const response = await hermes.chat(prompt)
  const content = response.choices?.[0]?.message?.content || ""

  const slug = options.productName
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "-")

  return {
    title: `${options.productName} | R&L Fashion`,
    metaDescription: `Beli ${options.productName} terbaru dengan harga terbaik. ${options.description?.slice(0, 100) || "Kualitas premium, fashion terbaru."}`,
    keywords: generateKeywords(options),
    slug,
    tips: getSEOTips(options.platform),
  }
}

function buildSEOPrompt(options: SEOOptions): string {
  return `Optimasi SEO untuk produk fashion:

Nama Produk: ${options.productName}
Deskripsi: ${options.description || "-"}
Kategori: ${options.category || "-"}
Platform: ${options.platform || "all"}

Berikan:
1. Judul SEO (max 60 chars)
2. Meta description (max 160 chars)
3. 10 keywords relevan
4. Tips optimasi`
}

function generateKeywords(options: SEOOptions): string[] {
  const words = options.productName.toLowerCase().split(" ")
  const keywords = [
    ...words,
    "jual " + options.productName.toLowerCase(),
    options.productName.toLowerCase() + " murah",
    options.productName.toLowerCase() + " original",
  ]
  if (options.category) {
    keywords.push(options.category.toLowerCase(), "fashion " + options.category.toLowerCase())
  }
  return [...new Set(keywords)]
}

function getSEOTips(platform?: string): string[] {
  const tips: string[] = [
    "Gunakan foto produk berkualitas tinggi dengan resolusi minimal 1000px",
    "Sertakan video produk untuk meningkatkan engagement",
    "Tulis deskripsi detail dengan kata kunci relevan",
  ]

  if (platform === "shopee") {
    tips.push("Gunakan fitur Shopee Video untuk meningkatkan visibilitas")
    tips.push("Aktifkan Shopee Live untuk interaksi langsung")
  }
  if (platform === "tokopedia") {
    tips.push("Optimasi dengan Tokopedia Product Knowledge")
    tips.push("Gunakan Official Store badge untuk kepercayaan")
  }
  if (platform === "instagram" || platform === "tiktok") {
    tips.push("Gunakan hashtag populer dengan volume tinggi")
    tips.push("Posting di jam sibuk (19:00-22:00 WIB)")
  }

  return tips
}
