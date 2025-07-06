"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Copy, 
  ExternalLink, 
  MessageCircle, 
  Settings, 
  Zap,
  CheckCircle,
  AlertTriangle
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import ChatWidget from './ChatWidget'

export default function ChatDemo() {
  const [showDemo, setShowDemo] = useState(false)
  const [copiedCode, setCopiedCode] = useState('')

  const installationSteps = [
    {
      title: "1. Instalar Dependências",
      description: "Instale as dependências necessárias no seu projeto",
      code: `npm install framer-motion lucide-react clsx tailwind-merge`
    },
    {
      title: "2. Configurar Variáveis de Ambiente",
      description: "Configure a URL do webhook n8n no arquivo .env.local",
      code: `NEXT_PUBLIC_N8N_WEBHOOK_URL=https://seu-n8n.com/webhook/chat`
    },
    {
      title: "3. Adicionar o Provider",
      description: "Envolva sua aplicação com o ChatProvider",
      code: `import { ChatProvider } from '@/components/Chat/ChatProvider'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ChatProvider>
          {children}
          <ChatWidget />
        </ChatProvider>
      </body>
    </html>
  )
}`
    },
    {
      title: "4. Configurar Webhook n8n",
      description: "Configure o webhook no n8n para receber as mensagens",
      code: `// Payload recebido pelo webhook:
{
  "message": "Mensagem do usuário",
  "timestamp": "2024-01-01T10:00:00Z",
  "userInfo": {
    "name": "Nome do usuário",
    "email": "email@exemplo.com",
    "sessionId": "chat_123456789"
  },
  "source": "website-chat",
  "isBusinessHours": true
}`
    }
  ]

  const features = [
    {
      icon: MessageCircle,
      title: "Chat Responsivo",
      description: "Interface moderna e responsiva que funciona em todos os dispositivos"
    },
    {
      icon: Zap,
      title: "Integração n8n",
      description: "Conecta diretamente com seu workflow n8n via webhook"
    },
    {
      icon: Settings,
      title: "Configurável",
      description: "Personalize cores, mensagens e comportamentos facilmente"
    },
    {
      icon: CheckCircle,
      title: "Respostas Automáticas",
      description: "Configure respostas automáticas para perguntas frequentes"
    },
    {
      icon: AlertTriangle,
      title: "Horário Comercial",
      description: "Controle quando o chat está ativo automaticamente"
    },
    {
      icon: ExternalLink,
      title: "Analytics",
      description: "Monitore métricas e performance do chat"
    }
  ]

  const copyCode = (code: string, step: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(step)
    setTimeout(() => setCopiedCode(''), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <MessageCircle className="w-4 h-4" />
            Chat Widget com Integração n8n
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Chat Inteligente para
            <span className="text-blue-600 dark:text-blue-400"> Seu Site</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8"
          >
            Widget de chat moderno e responsivo que se integra perfeitamente com n8n. 
            Configure em minutos e comece a receber mensagens dos seus clientes.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={() => setShowDemo(!showDemo)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              {showDemo ? 'Ocultar Demo' : 'Ver Demo'}
            </Button>
            
            <Button
              variant="outline"
              onClick={() => window.open('/chat-admin', '_blank')}
              className="px-8 py-3 text-lg"
            >
              <Settings className="w-5 h-5 mr-2" />
              Painel Admin
            </Button>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                {feature.description}
              </p>
            </Card>
          ))}
        </motion.div>

        {/* Installation Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-8">
            Como Integrar
          </h2>
          
          <div className="space-y-6">
            {installationSteps.map((step, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {step.description}
                    </p>
                    
                    <div className="relative">
                      <pre className="bg-slate-900 dark:bg-slate-800 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>{step.code}</code>
                      </pre>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyCode(step.code, step.title)}
                        className="absolute top-2 right-2 text-slate-400 hover:text-white"
                      >
                        {copiedCode === step.title ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Demo Widget */}
        {showDemo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowDemo(false)}
          >
            <div
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Demonstração do Chat
                </h3>
                <Button
                  variant="ghost"
                  onClick={() => setShowDemo(false)}
                  className="text-slate-500 hover:text-slate-700"
                >
                  ✕
                </Button>
              </div>
              
              <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-6 mb-6">
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  O widget de chat aparece no canto inferior direito da tela. 
                  Clique no botão para abrir o chat e teste a funcionalidade.
                </p>
                
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border-2 border-dashed border-slate-300 dark:border-slate-600 min-h-[400px] relative">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-500">
                    <div className="text-center">
                      <MessageCircle className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p>Área de demonstração do chat</p>
                      <p className="text-sm mt-1">O widget aparece no canto inferior direito</p>
                    </div>
                  </div>
                  
                  {/* Demo Chat Widget */}
                  <div className="absolute bottom-4 right-4">
                    <ChatWidget 
                      webhookUrl=""
                      companyName="Demo Company"
                      welcomeMessage="Olá! Esta é uma demonstração do chat. Como posso ajudar?"
                    />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                    ✅ Recursos Incluídos
                  </h4>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• Interface responsiva</li>
                    <li>• Animações suaves</li>
                    <li>• Indicador de digitação</li>
                    <li>• Status de mensagem</li>
                    <li>• Respostas automáticas</li>
                    <li>• Integração n8n</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    🎨 Personalizável
                  </h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Cores customizáveis</li>
                    <li>• Mensagens personalizadas</li>
                    <li>• Posicionamento flexível</li>
                    <li>• Horário comercial</li>
                    <li>• Botões de ação rápida</li>
                    <li>• Upload de arquivos</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Pronto para Começar?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Implemente o chat em seu site em menos de 5 minutos
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.open('/chat-admin', '_blank')}
              className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-3 text-lg"
            >
              <Settings className="w-5 h-5 mr-2" />
              Configurar Agora
            </Button>
            
            <Button
              variant="outline"
              onClick={() => copyCode(
                'npm install framer-motion lucide-react clsx tailwind-merge',
                'install'
              )}
              className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg"
            >
              <Code className="w-5 h-5 mr-2" />
              {copiedCode === 'install' ? 'Copiado!' : 'Copiar Comando'}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 