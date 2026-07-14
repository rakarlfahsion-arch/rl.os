"use client"

import { useState } from "react"

export default function AIChatPage() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: "assistant", content: "Halo! Saya Hermes AI, asisten virtual R&L Fashion. Ada yang bisa saya bantu?" },
  ])
  const [input, setInput] = useState("")

  function handleSend() {
    if (!input.trim()) return
    setMessages((prev) => [...prev, { role: "user", content: input }, { role: "assistant", content: "Terima kasih atas pertanyaannya. Tim kami akan segera menghubungi Anda. Untuk informasi lebih lanjut, silakan hubungi kami via WhatsApp." }])
    setInput("")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">RL</div>
            <span className="font-semibold">R&L Fashion</span>
          </a>
          <span className="text-gray-300 mx-2">|</span>
          <span className="text-gray-600">AI Chat</span>
        </div>
      </header>

      <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 flex flex-col">
        <div className="flex-1 space-y-4 mb-4 overflow-y-auto">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-lg rounded-xl px-4 py-3 text-sm ${
                m.role === "user" ? "bg-blue-600 text-white" : "bg-white border border-gray-200 text-gray-800"
              }`}>
                {m.content}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
            placeholder="Type your message..."
          />
          <button onClick={handleSend} className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 text-sm">
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
