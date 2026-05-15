'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '33442072262'

type Role = 'user' | 'bot'

type Message = {
  id: number
  role: Role
  text: string
  time: string
}

// Séparé de l'état React pour éviter le mismatch SSR (le composant est rendu avec ssr:false)
function getTime() {
  return new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
}

const FALLBACK =
  "Je rencontre une difficulté technique. Contactez-nous directement au +33 4 42 07 22 62."

export default function FloatingButtons() {
  const [chatOpen, setChatOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: 'bot',
      text: "Bonjour 👋 Je suis l'assistant GPE Énergies. Comment puis-je vous aider ?",
      time: getTime(),
    },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (chatOpen) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => inputRef.current?.focus(), 200)
    }
  }, [chatOpen])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`

  const send = async () => {
    const text = input.trim()
    if (!text || typing) return

    const userMsg: Message = { id: Date.now(), role: 'user', text, time: getTime() }
    const nextMessages = [...messages, userMsg]
    setMessages(nextMessages)
    setInput('')
    setTyping(true)

    // Construire l'historique au format OpenAI (bot → assistant)
    const history = nextMessages
      .filter((m) => m.role === 'user' || m.role === 'bot')
      .map((m) => ({ role: m.role === 'bot' ? 'assistant' : 'user', content: m.text }))

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      })

      const data = await res.json()
      const reply = res.ok ? (data.reply ?? FALLBACK) : (data.error ?? FALLBACK)

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: 'bot', text: reply, time: getTime() },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: 'bot', text: FALLBACK, time: getTime() },
      ])
    } finally {
      setTyping(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">

      {/* WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter via WhatsApp"
        className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg
                   hover:shadow-xl hover:scale-105 transition-all duration-200 animate-bounce-gentle"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.12.549 4.107 1.505 5.836L.057 23.5l5.835-1.53A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.812 9.812 0 01-5.007-1.368l-.359-.214-3.724.977.995-3.634-.234-.374A9.806 9.806 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182 17.43 2.182 21.818 6.57 21.818 12c0 5.43-4.388 9.818-9.818 9.818z" />
        </svg>
      </a>

      {/* Chat toggle */}
      <button
        onClick={() => setChatOpen((v) => !v)}
        aria-label={chatOpen ? "Fermer l'assistant" : "Ouvrir l'assistant"}
        className="w-14 h-14 rounded-full bg-[#2e5240] hover:bg-[#a3e635] text-white hover:text-[#1a2e22]
                   flex items-center justify-center shadow-lg hover:shadow-xl
                   transition-all duration-200 hover:-translate-y-0.5"
      >
        <AnimatePresence mode="wait" initial={false}>
          {chatOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </button>

      {/* Chat panel */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-[calc(100%+14px)] right-0 w-80 sm:w-[360px] bg-white
                       rounded-2xl shadow-2xl border border-neutral-100 flex flex-col overflow-hidden"
            style={{ maxHeight: 'min(520px, calc(100dvh - 130px))' }}
          >
            {/* Header */}
            <div className="bg-[#2e5240] px-4 py-3.5 flex items-center gap-3 flex-shrink-0">
              <div className="w-9 h-9 rounded-full bg-[#a3e635]/15 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-[#a3e635]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-white leading-none">Assistant GPE</div>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] animate-pulse" />
                  <span className="text-[11px] text-white/60">En ligne</span>
                </div>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="text-white/50 hover:text-white transition-colors p-1 rounded"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#f7f8f6]">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className="max-w-[82%]">
                    <div
                      className={`px-3.5 py-2.5 text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-[#2e5240] text-white rounded-2xl rounded-br-sm'
                          : 'bg-white text-neutral-700 rounded-2xl rounded-bl-sm shadow-sm border border-neutral-100'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <div
                      className={`text-[10px] text-neutral-400 mt-1 ${
                        msg.role === 'user' ? 'text-right' : 'text-left'
                      }`}
                    >
                      {msg.time}
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <div className="flex justify-start">
                  <div className="bg-white border border-neutral-100 shadow-sm rounded-2xl rounded-bl-sm px-4 py-3">
                    <div className="flex gap-1 items-center h-3">
                      {[0, 150, 300].map((delay) => (
                        <span
                          key={delay}
                          className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce"
                          style={{ animationDelay: `${delay}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-neutral-100 bg-white flex-shrink-0">
              <div className="flex gap-2 items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && send()}
                  placeholder="Votre message..."
                  maxLength={500}
                  className="flex-1 text-sm bg-neutral-50 border border-neutral-200 rounded-full px-4 py-2.5
                             outline-none focus:border-[#2e5240] focus:ring-2 focus:ring-[#2e5240]/10
                             transition-all placeholder:text-neutral-400"
                />
                <button
                  onClick={send}
                  disabled={!input.trim() || typing}
                  className="w-9 h-9 rounded-full bg-[#2e5240] hover:bg-[#a3e635] disabled:opacity-40
                             disabled:cursor-not-allowed flex items-center justify-center flex-shrink-0
                             transition-all duration-200 group"
                >
                  <svg
                    className="w-4 h-4 text-white group-hover:text-[#1a2e22] transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
