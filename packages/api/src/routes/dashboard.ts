import { Hono } from "hono"

export const dashboardRouter = new Hono()

dashboardRouter.get("/stats", (c) => c.json({ orders: 0, revenue: 0, products: 0, employees: 0 }))
dashboardRouter.get("/recent-orders", (c) => c.json([]))
dashboardRouter.get("/chart-data", (c) => c.json({ labels: [], datasets: [] }))
