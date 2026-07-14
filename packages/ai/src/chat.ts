export interface ChatSession {
  id: string
  userId: string
  title: string
  messages: ChatMessage[]
  createdAt: Date
}

export interface ChatMessage {
  role: "user" | "assistant" | "system"
  content: string
  metadata?: Record<string, unknown>
}

const sessions = new Map<string, ChatSession>()

export function createSession(userId: string, title: string): ChatSession {
  const session: ChatSession = {
    id: crypto.randomUUID(),
    userId,
    title,
    messages: [],
    createdAt: new Date(),
  }
  sessions.set(session.id, session)
  return session
}

export function getSession(id: string): ChatSession | undefined {
  return sessions.get(id)
}

export function addMessage(sessionId: string, message: ChatMessage) {
  const session = sessions.get(sessionId)
  if (session) {
    session.messages.push(message)
  }
}
