import { Hono } from "hono"

export const productRouter = new Hono()

productRouter.get("/", (c) => c.json([]))
productRouter.get("/:id", (c) => c.json({}))
productRouter.post("/", (c) => c.json({ message: "create product" }))
productRouter.put("/:id", (c) => c.json({ message: "update product" }))
productRouter.delete("/:id", (c) => c.json({ message: "delete product" }))
