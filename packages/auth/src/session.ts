import { prisma } from "@rl/database"
import { generateToken } from "./auth"

export async function createSession(userId: string): Promise<string> {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  const session = await prisma.session.create({
    data: {
      userId,
      token: generateToken(),
      expiresAt,
    },
  })
  return session.token
}

export async function validateSession(token: string) {
  const session = await prisma.session.findUnique({
    where: { token },
    include: { user: true },
  })
  if (!session || session.expiresAt < new Date()) return null
  return session.user
}

export async function deleteSession(token: string) {
  await prisma.session.delete({ where: { token } })
}
