import { Hono } from "hono"

export const orderRouter = new Hono()

orderRouter.get("/", (c) => c.json([]))
orderRouter.get("/:id", (c) => c.json({}))
orderRouter.post("/", (c) => c.json({ message: "create order" }))
orderRouter.put("/:id/status", (c) => c.json({ message: "update status" }))
