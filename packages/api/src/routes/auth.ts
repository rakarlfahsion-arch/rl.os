import { Hono } from "hono"

export const authRouter = new Hono()

authRouter.post("/login", (c) => c.json({ message: "login endpoint" }))
authRouter.post("/register", (c) => c.json({ message: "register endpoint" }))
authRouter.post("/logout", (c) => c.json({ message: "logout endpoint" }))
