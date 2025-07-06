"use client"

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MessageCircle, 
  X, 
  Send, 
  Minimize2, 
  Maximize2,
  User,
  Bot,
  Paperclip,
  Phone,
  Clock,
  CheckCheck
} from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  status?: 'sending' | 'sent' | 'delivered' | 'read'
  type?: 'text' | 'image' | 'file'
  attachments?: string[]
}

interface ChatWidgetProps {
  webhookUrl?: string
  companyName?: string
  welcomeMessage?: string
  position?: 'bottom-right' | 'bottom-left'
  primaryColor?: string
  accentColor?: string
  avatar?: string
}

export default function ChatWidget({
  webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || '',
  companyName = 'Raio Desentupidora',
  welcomeMessage = 'Olá! Como posso ajudar você hoje? 🚀',
  position = 'bottom-left',
  primaryColor = '#0284c7',
  accentColor = '#0369a1',
  avatar = '/logo-chat.png'
}: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: welcomeMessage,
      sender: 'bot',
      timestamp: new Date(),
      status: 'read'
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isLoading, setSending] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [showUserForm, setShowUserForm] = useState(false)
  
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const chatRef = useRef<HTMLDivElement>(null)

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus()
    }
  }, [isOpen, isMinimized])

  // Fechar chat ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Simular typing indicator
  const simulateTyping = () => {
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
    }, 1000 + Math.random() * 2000)
  }

  // Enviar mensagem para webhook n8n
  const sendToWebhook = async (message: string, userInfo?: any) => {
    if (!webhookUrl) {
      console.warn('Webhook URL not configured')
      return
    }

    try {
      const payload = {
        message,
        timestamp: new Date().toISOString(),
        userInfo: userInfo || null,
        sessionId: localStorage.getItem('chat-session-id') || generateSessionId(),
        source: 'website-chat'
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (response.ok) {
        const data = await response.json()
        return data
      }
    } catch (error) {
      console.error('Error sending to webhook:', error)
    }
  }

  // Gerar session ID
  const generateSessionId = () => {
    const sessionId = `chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    localStorage.setItem('chat-session-id', sessionId)
    return sessionId
  }

  // Enviar mensagem
  const sendMessage = async () => {
    if (!inputText.trim() || isLoading) return

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      sender: 'user',
      timestamp: new Date(),
      status: 'sending'
    }

    setMessages(prev => [...prev, newMessage])
    setInputText('')
    setSending(true)

    // Enviar para webhook
    const webhookResponse = await sendToWebhook(newMessage.text, userInfo)
    
    // Atualizar status da mensagem
    setMessages(prev => 
      prev.map(msg => 
        msg.id === newMessage.id 
          ? { ...msg, status: 'sent' }
          : msg
      )
    )

    // Simular resposta do bot
    simulateTyping()
    
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: webhookResponse?.response || 'Obrigado pela sua mensagem! Nossa equipe entrará em contato em breve. Para emergências, ligue (11) 98063-9525.',
        sender: 'bot',
        timestamp: new Date(),
        status: 'read'
      }
      
      setMessages(prev => [...prev, botResponse])
      setSending(false)
      
      // Incrementar contador se chat estiver minimizado
      if (isMinimized) {
        setUnreadCount(prev => prev + 1)
      }
    }, 2000)
  }

  // Enviar arquivo
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const newMessage: Message = {
      id: Date.now().toString(),
      text: `Arquivo enviado: ${file.name}`,
      sender: 'user',
      timestamp: new Date(),
      type: 'file',
      attachments: [file.name]
    }

    setMessages(prev => [...prev, newMessage])
  }

  // Abrir/fechar chat
  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setUnreadCount(0)
    }
  }

  // Minimizar/maximizar
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
    if (isMinimized) {
      setUnreadCount(0)
    }
  }

  // Posicionamento responsivo - garantindo espaço adequado entre os botões (2x mais espaço)
  const positionClasses = position === 'bottom-right' 
    ? 'bottom-6 right-6 md:bottom-6 md:right-44' // Desktop: espaço dobrado para WhatsApp à direita
    : 'bottom-6 left-6 md:bottom-6 md:right-44 md:left-auto' // Mobile: esquerda, Desktop: direita com espaço dobrado

  return (
    <div ref={chatRef} className={`fixed ${positionClasses} z-40 font-sans`}>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Button
              onClick={toggleChat}
              className="w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: primaryColor }}
            >
              <MessageCircle className="w-7 h-7 text-white" />
            </Button>
            
            {/* Badge de notificação */}
            {unreadCount > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold"
              >
                {unreadCount > 9 ? '9+' : unreadCount}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={`bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden ${
              isMinimized ? 'h-16' : 'h-[500px]'
            } w-80 sm:w-96`}
          >
            {/* Header */}
            <div 
              className="p-4 text-white flex items-center justify-between"
              style={{ backgroundColor: primaryColor }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{companyName}</h3>
                  <p className="text-xs text-white/80">
                    {isTyping ? 'Digitando...' : 'Online agora'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleMinimize}
                  className="text-white hover:bg-white/20 p-1"
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleChat}
                  className="text-white hover:bg-white/20 p-1"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Chat Content */}
            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 h-80">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-end gap-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        {/* Avatar */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                          message.sender === 'user' 
                            ? 'bg-gray-400' 
                            : 'bg-gradient-to-r from-sky-500 to-blue-600'
                        }`}>
                          {message.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                        </div>
                        
                        {/* Message Bubble */}
                        <div className={`rounded-2xl p-3 ${
                          message.sender === 'user'
                            ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white'
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white'
                        }`}>
                          <p className="text-sm">{message.text}</p>
                          
                          {/* Attachments */}
                          {message.attachments && (
                            <div className="mt-2 flex items-center gap-1 text-xs opacity-80">
                              <Paperclip className="w-3 h-3" />
                              {message.attachments[0]}
                            </div>
                          )}
                          
                          {/* Timestamp & Status */}
                          <div className={`flex items-center gap-1 mt-1 text-xs ${
                            message.sender === 'user' ? 'text-white/70' : 'text-slate-500'
                          }`}>
                            <Clock className="w-3 h-3" />
                            {message.timestamp.toLocaleTimeString('pt-BR', { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                            {message.sender === 'user' && (
                              <CheckCheck className={`w-3 h-3 ${
                                message.status === 'read' ? 'text-blue-200' : 'text-white/50'
                              }`} />
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-end gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl p-3">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Actions */}
                <div className="px-4 py-2 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const phoneMessage = "Gostaria de falar por telefone"
                        setInputText(phoneMessage)
                      }}
                      className="text-xs"
                    >
                      <Phone className="w-3 h-3 mr-1" />
                      Ligar
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const urgentMessage = "Tenho uma emergência de desentupimento"
                        setInputText(urgentMessage)
                      }}
                      className="text-xs"
                    >
                      🚨 Emergência
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const quoteMessage = "Gostaria de um orçamento"
                        setInputText(quoteMessage)
                      }}
                      className="text-xs"
                    >
                      💰 Orçamento
                    </Button>
                  </div>
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      className="hidden"
                      accept="image/*,.pdf,.doc,.docx"
                    />
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => fileInputRef.current?.click()}
                      className="p-2"
                    >
                      <Paperclip className="w-4 h-4" />
                    </Button>
                    
                    <div className="flex-1 relative">
                      <input
                        ref={inputRef}
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                        placeholder="Digite sua mensagem..."
                        className="w-full px-4 py-2 rounded-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                        disabled={isLoading}
                      />
                    </div>
                    
                    <Button
                      onClick={sendMessage}
                      disabled={!inputText.trim() || isLoading}
                      className="p-2 rounded-full"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <Send className="w-4 h-4 text-white" />
                    </Button>
                  </div>
                  
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 text-center">
                    Powered by n8n • Resposta em até 5 minutos
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 