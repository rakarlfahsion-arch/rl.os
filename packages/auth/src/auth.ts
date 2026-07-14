import { createHash, randomBytes } from "node:crypto"

export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex")
  const hash = createHash("sha256").update(salt + password).digest("hex")
  return `${salt}:${hash}`
}

export function verifyPassword(password: string, hashed: string): boolean {
  const [salt, hash] = hashed.split(":")
  const verify = createHash("sha256").update(salt + password).digest("hex")
  return hash === verify
}

export function generateToken(): string {
  return randomBytes(32).toString("hex")
}
