export const APP_NAME = "R&L AI OS"

export const ORDER_STATUS = {
  PENDING: "PENDING",
  PROCESSING: "PROCESSING",
  SHIPPING: "SHIPPING",
  COMPLETED: "COMPLETED",
  CANCELLED: "CANCELLED",
} as const

export const PRODUCTION_STAGES = [
  "CUTTING",
  "SEWING",
  "QC",
  "PACKING",
] as const

export const PAYMENT_STATUS = {
  UNPAID: "UNPAID",
  PARTIAL: "PARTIAL",
  PAID: "PAID",
  REFUNDED: "REFUNDED",
} as const
