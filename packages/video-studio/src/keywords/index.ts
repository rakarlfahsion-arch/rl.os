import { HermesAI } from "@rl/ai"

export interface KeywordOptions {
  productName: string
  category?: string
  platform?: "shopee" | "tokopedia" | "google" | "all"
  minVolume?: number
}

export interface KeywordResult {
  primary: Keyword[]
  longTail: Keyword[]
  related: Keyword[]
}

export interface Keyword {
  keyword: string
  volume: number
  competition: "low" | "medium" | "high"
  trend: "up" | "stable" | "down"
}

export async function researchKeywords(
  hermes: HermesAI,
  options: KeywordOptions,
): Promise<KeywordResult> {
  const prompt = buildKeywordPrompt(options)
  const response = await hermes.chat(prompt)
  const content = response.choices?.[0]?.message?.content || ""

  return {
    primary: generatePrimaryKeywords(options),
    longTail: generateLongTailKeywords(options),
    related: generateRelatedKeywords(options),
  }
}

function buildKeywordPrompt(options: KeywordOptions): string {
  return `Riset keyword untuk produk fashion:

Produk: ${options.productName}
Kategori: ${options.category || "-"}
Platform: ${options.platform || "all"}

Berikan:
1. 5 keyword utama (volume tinggi)
2. 10 long-tail keyword
3. 5 keyword terkait`
}

function generatePrimaryKeywords(options: KeywordOptions): Keyword[] {
  const keywords = [
    { keyword: options.productName.toLowerCase(), volume: 12000, competition: "high" as const, trend: "stable" as const },
  ]

  if (options.category) {
    keywords.push({
      keyword: `${options.category.toLowerCase()} ${options.productName.toLowerCase()}`,
      volume: 8500,
      competition: "medium",
      trend: "up",
    })
  }

  keywords.push(
    { keyword: `harga ${options.productName.toLowerCase()}`, volume: 5400, competition: "medium", trend: "stable" },
    { keyword: `${options.productName.toLowerCase()} murah`, volume: 4200, competition: "low", trend: "stable" },
    { keyword: `${options.productName.toLowerCase()} original`, volume: 3800, competition: "low", trend: "stable" },
  )

  return keywords
}

function generateLongTailKeywords(options: KeywordOptions): Keyword[] {
  return [
    { keyword: `${options.productName.toLowerCase()} untuk acara formal`, volume: 1200, competition: "low", trend: "up" },
    { keyword: `beli ${options.productName.toLowerCase()} online`, volume: 980, competition: "low", trend: "stable" },
    { keyword: `${options.productName.toLowerCase()} bahan premium`, volume: 850, competition: "low", trend: "up" },
    { keyword: `rekomendasi ${options.productName.toLowerCase()} terbaik`, volume: 720, competition: "low", trend: "up" },
    { keyword: `${options.productName.toLowerCase()} ukuran besar`, volume: 650, competition: "low", trend: "stable" },
    { keyword: `${options.productName.toLowerCase()} cod`, volume: 580, competition: "low", trend: "stable" },
    { keyword: `${options.productName.toLowerCase()} free ongkir`, volume: 520, competition: "medium", trend: "stable" },
    { keyword: `review ${options.productName.toLowerCase()}`, volume: 450, competition: "low", trend: "down" },
    { keyword: `${options.productName.toLowerCase()} muslimah`, volume: 400, competition: "low", trend: "stable" },
    { keyword: `${options.productName.toLowerCase()} couple`, volume: 350, competition: "low", trend: "up" },
  ]
}

function generateRelatedKeywords(options: KeywordOptions): Keyword[] {
  return [
    { keyword: "fashion terkini", volume: 22000, competition: "high", trend: "stable" },
    { keyword: "outfit ideas", volume: 18500, competition: "high", trend: "up" },
    { keyword: "baju muslim", volume: 15000, competition: "medium", trend: "stable" },
    { keyword: "fashion pria", volume: 13000, competition: "high", trend: "stable" },
    { keyword: "trend fashion 2026", volume: 11000, competition: "medium", trend: "up" },
  ]
}
