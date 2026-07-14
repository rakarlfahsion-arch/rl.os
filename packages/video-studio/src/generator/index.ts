export interface ProductVideoConfig {
  productId: string
  productName: string
  images: string[]
  style?: "cinematic" | "catalog" | "lifestyle" | "unboxing"
  duration?: number
  music?: string
  voiceover?: boolean
  watermark?: boolean
}

export interface GeneratedVideo {
  id: string
  productId: string
  url: string
  thumbnailUrl: string
  duration: number
  format: string
  status: "processing" | "ready" | "failed"
  createdAt: Date
}

const videos = new Map<string, GeneratedVideo>()

export async function generateProductVideo(config: ProductVideoConfig): Promise<GeneratedVideo> {
  const id = crypto.randomUUID()
  const video: GeneratedVideo = {
    id,
    productId: config.productId,
    url: "",
    thumbnailUrl: "",
    duration: config.duration || 30,
    format: "mp4",
    status: "processing",
    createdAt: new Date(),
  }

  videos.set(id, video)

  processVideoGeneration(id, config).catch(console.error)

  return video
}

async function processVideoGeneration(id: string, config: ProductVideoConfig) {
  const video = videos.get(id)
  if (!video) return

  try {
    // TODO: integrate with actual video generation API (e.g., Runway, Pika, or local)
    await new Promise((r) => setTimeout(r, 5000))

    video.status = "ready"
    video.url = `/generated/${id}/video.mp4`
    video.thumbnailUrl = `/generated/${id}/thumb.jpg`
    videos.set(id, video)
  } catch {
    video.status = "failed"
    videos.set(id, video)
  }
}

export function getGeneratedVideo(id: string): GeneratedVideo | undefined {
  return videos.get(id)
}

export function listGeneratedVideos(productId?: string): GeneratedVideo[] {
  const all = Array.from(videos.values())
  return productId ? all.filter((v) => v.productId === productId) : all
}
