"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface ChatMessage {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  status?: 'sending' | 'sent' | 'delivered' | 'read'
  type?: 'text' | 'image' | 'file'
  attachments?: string[]
}

interface ChatSettings {
  webhookUrl: string
  companyName: string
  welcomeMessage: string
  primaryColor: string
  accentColor: string
  autoResponses: Record<string, string>
  businessHours: {
    enabled: boolean
    start: string
    end: string
    timezone: string
  }
}

interface ChatContextType {
  messages: ChatMessage[]
  isConnected: boolean
  isTyping: boolean
  settings: ChatSettings
  userInfo: {
    name: string
    email: string
    phone: string
    sessionId: string
  }
  sendMessage: (text: string) => Promise<void>
  updateSettings: (settings: Partial<ChatSettings>) => void
  updateUserInfo: (info: Partial<ChatContextType['userInfo']>) => void
  clearChat: () => void
}

const ChatContext = createContext<ChatContextType | undefined>(undefined)

interface ChatProviderProps {
  children: ReactNode
  defaultSettings?: Partial<ChatSettings>
}

export function ChatProvider({ children, defaultSettings }: ChatProviderProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isConnected, setIsConnected] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [settings, setSettings] = useState<ChatSettings>({
    webhookUrl: process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || '',
    companyName: 'Raio Desentupidora',
    welcomeMessage: 'Olá! Como posso ajudar você hoje? 🚀',
    primaryColor: '#0284c7',
    accentColor: '#0369a1',
    autoResponses: {
      'oi': 'Olá! Como posso ajudar você?',
      'olá': 'Oi! Em que posso ser útil?',
      'emergência': 'Para emergências, ligue imediatamente: (11) 98063-9525',
      'preço': 'Nossos preços são competitivos. Fazemos orçamento gratuito!',
      'horário': 'Funcionamos 24h para emergências. Horário comercial: 8h às 18h'
    },
    businessHours: {
      enabled: true,
      start: '08:00',
      end: '18:00',
      timezone: 'America/Sao_Paulo'
    },
    ...defaultSettings
  })
  
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    sessionId: ''
  })

  // Inicializar sessão
  useEffect(() => {
    const sessionId = localStorage.getItem('chat-session-id') || generateSessionId()
    setUserInfo(prev => ({ ...prev, sessionId }))
    
    // Carregar mensagens salvas
    const savedMessages = localStorage.getItem('chat-messages')
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages)
        setMessages(parsed.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        })))
      } catch (error) {
        console.error('Error loading saved messages:', error)
      }
    } else {
      // Mensagem de boas-vindas
      setMessages([{
        id: '1',
        text: settings.welcomeMessage,
        sender: 'bot',
        timestamp: new Date(),
        status: 'read'
      }])
    }
    
    setIsConnected(true)
  }, [settings.welcomeMessage])

  // Salvar mensagens no localStorage
  useEffect(() => {
    if (messages.length > 1) { // Não salvar apenas a mensagem de boas-vindas
      localStorage.setItem('chat-messages', JSON.stringify(messages))
    }
  }, [messages])

  // Gerar session ID
  const generateSessionId = () => {
    const sessionId = `chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    localStorage.setItem('chat-session-id', sessionId)
    return sessionId
  }

  // Verificar horário comercial
  const isBusinessHours = () => {
    if (!settings.businessHours.enabled) return true
    
    const now = new Date()
    const start = new Date()
    const end = new Date()
    
    const [startHour, startMin] = settings.businessHours.start.split(':').map(Number)
    const [endHour, endMin] = settings.businessHours.end.split(':').map(Number)
    
    start.setHours(startHour, startMin, 0, 0)
    end.setHours(endHour, endMin, 0, 0)
    
    return now >= start && now <= end
  }

  // Enviar para webhook n8n
  const sendToWebhook = async (message: string): Promise<string> => {
    if (!settings.webhookUrl) {
      throw new Error('Webhook URL not configured')
    }

    try {
      const payload = {
        message,
        timestamp: new Date().toISOString(),
        userInfo,
        sessionId: userInfo.sessionId,
        source: 'website-chat',
        isBusinessHours: isBusinessHours(),
        metadata: {
          url: window.location.href,
          userAgent: navigator.userAgent,
          referrer: document.referrer
        }
      }

      const response = await fetch(settings.webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (response.ok) {
        const data = await response.json()
        return data.response || data.message || 'Mensagem recebida com sucesso!'
      } else {
        throw new Error(`HTTP ${response.status}`)
      }
    } catch (error) {
      console.error('Error sending to webhook:', error)
      throw error
    }
  }

  // Verificar respostas automáticas
  const getAutoResponse = (text: string): string | null => {
    const lowerText = text.toLowerCase()
    
    for (const [trigger, response] of Object.entries(settings.autoResponses)) {
      if (lowerText.includes(trigger.toLowerCase())) {
        return response
      }
    }
    
    return null
  }

  // Enviar mensagem
  const sendMessage = async (text: string) => {
    if (!text.trim()) return

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
      status: 'sending'
    }

    setMessages(prev => [...prev, userMessage])

    try {
      // Verificar resposta automática primeiro
      const autoResponse = getAutoResponse(text)
      
      let botResponseText: string
      
      if (autoResponse) {
        botResponseText = autoResponse
        // Atualizar status para enviado
        setMessages(prev => 
          prev.map(msg => 
            msg.id === userMessage.id 
              ? { ...msg, status: 'sent' }
              : msg
          )
        )
      } else {
        // Simular typing
        setIsTyping(true)
        
        try {
          // Enviar para webhook
          botResponseText = await sendToWebhook(text)
          
          // Atualizar status para enviado
          setMessages(prev => 
            prev.map(msg => 
              msg.id === userMessage.id 
                ? { ...msg, status: 'delivered' }
                : msg
            )
          )
        } catch (error) {
          botResponseText = isBusinessHours() 
            ? 'Desculpe, ocorreu um erro. Nossa equipe foi notificada. Para emergências, ligue (11) 98063-9525.'
            : 'Estamos fora do horário comercial. Deixe sua mensagem que responderemos em breve. Para emergências, ligue (11) 98063-9525.'
          
          // Marcar como erro
          setMessages(prev => 
            prev.map(msg => 
              msg.id === userMessage.id 
                ? { ...msg, status: 'sent' }
                : msg
            )
          )
        } finally {
          setIsTyping(false)
        }
      }

      // Adicionar resposta do bot
      setTimeout(() => {
        const botMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: botResponseText,
          sender: 'bot',
          timestamp: new Date(),
          status: 'read'
        }
        
        setMessages(prev => [...prev, botMessage])
      }, autoResponse ? 500 : 1000)

    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

  // Atualizar configurações
  const updateSettings = (newSettings: Partial<ChatSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }))
  }

  // Atualizar informações do usuário
  const updateUserInfo = (info: Partial<ChatContextType['userInfo']>) => {
    setUserInfo(prev => ({ ...prev, ...info }))
  }

  // Limpar chat
  const clearChat = () => {
    setMessages([{
      id: '1',
      text: settings.welcomeMessage,
      sender: 'bot',
      timestamp: new Date(),
      status: 'read'
    }])
    localStorage.removeItem('chat-messages')
  }

  const value: ChatContextType = {
    messages,
    isConnected,
    isTyping,
    settings,
    userInfo,
    sendMessage,
    updateSettings,
    updateUserInfo,
    clearChat
  }

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  )
}

export function useChat() {
  const context = useContext(ChatContext)
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider')
  }
  return context
} 