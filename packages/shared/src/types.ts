export type UserRole = "OWNER" | "ADMIN" | "MANAGER" | "STAFF"

export interface UserProfile {
  id: string
  email: string
  name: string | null
  role: UserRole
  avatarUrl: string | null
}

export interface PaginationParams {
  page?: number
  limit?: number
  sort?: string
  order?: "asc" | "desc"
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}
