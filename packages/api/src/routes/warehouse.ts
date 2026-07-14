import { Hono } from "hono"

export const warehouseRouter = new Hono()

warehouseRouter.get("/", (c) => c.json([]))
warehouseRouter.post("/", (c) => c.json({ message: "create warehouse" }))
warehouseRouter.get("/stock", (c) => c.json([]))
warehouseRouter.post("/stock/movement", (c) => c.json({ message: "stock movement" }))
