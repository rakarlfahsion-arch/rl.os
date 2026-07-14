import { Hono } from "hono"

export const productionRouter = new Hono()

productionRouter.get("/", (c) => c.json([]))
productionRouter.post("/", (c) => c.json({ message: "create production order" }))
productionRouter.put("/:id/stage", (c) => c.json({ message: "update stage" }))
