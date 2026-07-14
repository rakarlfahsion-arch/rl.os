import { HermesAI } from "@rl/ai"

export interface HashtagOptions {
  productName: string
  category?: string
  platform?: "instagram" | "tiktok" | "youtube" | "all"
  count?: number
  trending?: boolean
}

export interface HashtagResult {
  hashtags: string[]
  trending: string[]
  category: string[]
  brand: string[]
}

export async function generateHashtags(
  hermes: HermesAI,
  options: HashtagOptions,
): Promise<HashtagResult> {
  const prompt = buildHashtagPrompt(options)
  const response = await hermes.chat(prompt)
  const content = response.choices?.[0]?.message?.content || ""
  const lines = content.split("\n").filter(Boolean)

  return {
    hashtags: lines.filter((l) => l.startsWith("#")),
    trending: getTrendingHashtags(options.category),
    category: getCategoryHashtags(options.category),
    brand: ["#RLFashion", "#RLAIOS", "#FashionAI"],
  }
}

function buildHashtagPrompt(options: HashtagOptions): string {
  return `Generate ${options.count || 15} hashtags untuk produk fashion berikut:

Nama Produk: ${options.productName}
Kategori: ${options.category || "-"}
Platform: ${options.platform || "all"}

Format: #hashtag per baris.
Pisahkan menjadi: trending hashtags, category hashtags, brand hashtags.`
}

function getTrendingHashtags(category?: string): string[] {
  const trending = [
    "#OOTD", "#FashionInspo", "#StyleGoals",
    "#FashionDaily", "#TrendingNow",
  ]
  if (category?.toLowerCase().includes("muslim")) {
    trending.push("#HijabFashion", "#ModestFashion")
  }
  if (category?.toLowerCase().includes("batik")) {
    trending.push("#BatikDay", "#BatikIndonesia")
  }
  return trending
}

function getCategoryHashtags(category?: string): string[] {
  const catMap: Record<string, string[]> = {
    baju: ["#Baju", "#Atasan", "#FashionWanita"],
    gamis: ["#Gamis", "#DressMuslimah", "#HijabDress"],
    batik: ["#Batik", "#BatikModern", "#BatikCouple"],
  }
  if (category && catMap[category.toLowerCase()]) return catMap[category.toLowerCase()]
  return ["#Fashion", "#FashionIndonesia", "#FashionMuslim"]
}
