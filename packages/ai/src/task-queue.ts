export interface Task {
  id: string
  type: string
  status: "queued" | "running" | "completed" | "failed"
  data: Record<string, unknown>
  result?: unknown
  error?: string
  createdAt: Date
  completedAt?: Date
}

const queue: Task[] = []

export function enqueue(type: string, data: Record<string, unknown>): Task {
  const task: Task = {
    id: crypto.randomUUID(),
    type,
    status: "queued",
    data,
    createdAt: new Date(),
  }
  queue.push(task)
  processQueue()
  return task
}

export function getQueue(): Task[] {
  return queue
}

export function getTask(id: string): Task | undefined {
  return queue.find((t) => t.id === id)
}

async function processQueue() {
  const task = queue.find((t) => t.status === "queued")
  if (!task) return

  task.status = "running"
  try {
    task.result = await executeTask(task)
    task.status = "completed"
  } catch (e) {
    task.error = e instanceof Error ? e.message : "Unknown error"
    task.status = "failed"
  }
  task.completedAt = new Date()
}

async function executeTask(task: Task): Promise<unknown> {
  switch (task.type) {
    case "sync-bigseller":
      return { message: "BigSeller sync completed" }
    case "sync-whatsapp":
      return { message: "WhatsApp sync completed" }
    case "generate-report":
      return { message: "Report generated" }
    default:
      return { message: `Task ${task.type} executed` }
  }
}
