"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Settings, 
  Save, 
  TestTube, 
  MessageSquare, 
  Clock, 
  Palette, 
  Webhook,
  Users,
  BarChart3,
  Download,
  Trash2,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { useChat } from './ChatProvider'

interface ChatStats {
  totalMessages: number
  totalSessions: number
  averageResponseTime: number
  satisfactionRate: number
  topQuestions: Array<{ question: string; count: number }>
}

export default function ChatAdmin() {
  const { settings, updateSettings, clearChat } = useChat()
  const [activeTab, setActiveTab] = useState('settings')
  const [isTestingWebhook, setIsTestingWebhook] = useState(false)
  const [testResult, setTestResult] = useState<{ success: boolean; message: string } | null>(null)
  const [stats, setStats] = useState<ChatStats>({
    totalMessages: 0,
    totalSessions: 0,
    averageResponseTime: 0,
    satisfactionRate: 0,
    topQuestions: []
  })

  const [formData, setFormData] = useState({
    webhookUrl: settings.webhookUrl,
    companyName: settings.companyName,
    welcomeMessage: settings.welcomeMessage,
    primaryColor: settings.primaryColor,
    accentColor: settings.accentColor,
    businessHours: settings.businessHours,
    autoResponses: settings.autoResponses
  })

  // Carregar estatísticas
  useEffect(() => {
    loadStats()
  }, [])

  const loadStats = () => {
    // Simular carregamento de estatísticas
    // Em produção, isso viria de uma API
    setStats({
      totalMessages: 1247,
      totalSessions: 89,
      averageResponseTime: 2.3,
      satisfactionRate: 94.5,
      topQuestions: [
        { question: 'Quanto custa o serviço?', count: 45 },
        { question: 'Vocês atendem emergência?', count: 38 },
        { question: 'Qual o horário de funcionamento?', count: 32 },
        { question: 'Fazem orçamento grátis?', count: 28 },
        { question: 'Atendem na minha região?', count: 25 }
      ]
    })
  }

  // Testar webhook
  const testWebhook = async () => {
    if (!formData.webhookUrl) {
      setTestResult({ success: false, message: 'URL do webhook é obrigatória' })
      return
    }

    setIsTestingWebhook(true)
    setTestResult(null)

    try {
      const testPayload = {
        message: 'Teste de integração do chat',
        timestamp: new Date().toISOString(),
        userInfo: { name: 'Teste', email: 'teste@exemplo.com' },
        sessionId: 'test-session',
        source: 'admin-test'
      }

      const response = await fetch(formData.webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testPayload)
      })

      if (response.ok) {
        setTestResult({ 
          success: true, 
          message: `Webhook testado com sucesso! Status: ${response.status}` 
        })
      } else {
        setTestResult({ 
          success: false, 
          message: `Erro no webhook: ${response.status} - ${response.statusText}` 
        })
      }
    } catch (error) {
      setTestResult({ 
        success: false, 
        message: `Erro de conexão: ${error instanceof Error ? error.message : 'Erro desconhecido'}` 
      })
    } finally {
      setIsTestingWebhook(false)
    }
  }

  // Salvar configurações
  const saveSettings = () => {
    updateSettings(formData)
    setTestResult({ success: true, message: 'Configurações salvas com sucesso!' })
  }

  // Adicionar resposta automática
  const addAutoResponse = () => {
    setFormData(prev => ({
      ...prev,
      autoResponses: {
        ...prev.autoResponses,
        '': ''
      }
    }))
  }

  // Remover resposta automática
  const removeAutoResponse = (trigger: string) => {
    const newResponses = { ...formData.autoResponses }
    delete newResponses[trigger]
    setFormData(prev => ({
      ...prev,
      autoResponses: newResponses
    }))
  }

  // Atualizar resposta automática
  const updateAutoResponse = (oldTrigger: string, newTrigger: string, response: string) => {
    const newResponses = { ...formData.autoResponses }
    if (oldTrigger !== newTrigger) {
      delete newResponses[oldTrigger]
    }
    newResponses[newTrigger] = response
    setFormData(prev => ({
      ...prev,
      autoResponses: newResponses
    }))
  }

  // Exportar dados
  const exportData = () => {
    const data = {
      settings: formData,
      stats,
      exportDate: new Date().toISOString()
    }
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `chat-config-${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const tabs = [
    { id: 'settings', label: 'Configurações', icon: Settings },
    { id: 'webhook', label: 'Webhook', icon: Webhook },
    { id: 'responses', label: 'Respostas Automáticas', icon: MessageSquare },
    { id: 'appearance', label: 'Aparência', icon: Palette },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 }
  ]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Administração do Chat
          </h1>
          <p className="text-slate-600 dark:text-slate-300">
            Configure e monitore seu chat integrado com n8n
          </p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-6 bg-slate-200 dark:bg-slate-800 p-1 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                activeTab === tab.id
                  ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Test Result Alert */}
        {testResult && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
              testResult.success 
                ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800'
                : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800'
            }`}
          >
            {testResult.success ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <AlertCircle className="w-5 h-5" />
            )}
            {testResult.message}
          </motion.div>
        )}

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === 'settings' && (
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Configurações Gerais</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome da Empresa</label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Mensagem de Boas-vindas</label>
                    <textarea
                      value={formData.welcomeMessage}
                      onChange={(e) => setFormData(prev => ({ ...prev, welcomeMessage: e.target.value }))}
                      rows={3}
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Horário de Início</label>
                      <input
                        type="time"
                        value={formData.businessHours.start}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          businessHours: { ...prev.businessHours, start: e.target.value }
                        }))}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Horário de Fim</label>
                      <input
                        type="time"
                        value={formData.businessHours.end}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          businessHours: { ...prev.businessHours, end: e.target.value }
                        }))}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {activeTab === 'webhook' && (
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Configuração do Webhook n8n</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">URL do Webhook</label>
                    <input
                      type="url"
                      value={formData.webhookUrl}
                      onChange={(e) => setFormData(prev => ({ ...prev, webhookUrl: e.target.value }))}
                      placeholder="https://seu-n8n.com/webhook/chat"
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                    />
                    <p className="text-sm text-slate-500 mt-1">
                      URL do webhook criado no n8n para receber as mensagens do chat
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button
                      onClick={testWebhook}
                      disabled={isTestingWebhook || !formData.webhookUrl}
                      className="flex items-center gap-2"
                    >
                      <TestTube className="w-4 h-4" />
                      {isTestingWebhook ? 'Testando...' : 'Testar Webhook'}
                    </Button>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Payload Enviado:</h3>
                    <pre className="text-sm text-slate-600 dark:text-slate-300 overflow-x-auto">
{`{
  "message": "Mensagem do usuário",
  "timestamp": "2024-01-01T10:00:00Z",
  "userInfo": {
    "name": "Nome do usuário",
    "email": "email@exemplo.com",
    "phone": "+5511999999999",
    "sessionId": "chat_123456789"
  },
  "source": "website-chat",
  "isBusinessHours": true,
  "metadata": {
    "url": "https://site.com/",
    "userAgent": "Mozilla/5.0...",
    "referrer": "https://google.com"
  }
}`}
                    </pre>
                  </div>
                </div>
              </Card>
            )}

            {activeTab === 'responses' && (
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Respostas Automáticas</h2>
                  <Button onClick={addAutoResponse} size="sm">
                    Adicionar Resposta
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {Object.entries(formData.autoResponses).map(([trigger, response], index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <div>
                        <label className="block text-xs font-medium mb-1">Gatilho</label>
                        <input
                          type="text"
                          value={trigger}
                          onChange={(e) => updateAutoResponse(trigger, e.target.value, response)}
                          placeholder="palavra-chave"
                          className="w-full px-2 py-1 text-sm border border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs font-medium mb-1">Resposta</label>
                        <input
                          type="text"
                          value={response}
                          onChange={(e) => updateAutoResponse(trigger, trigger, e.target.value)}
                          placeholder="Resposta automática"
                          className="w-full px-2 py-1 text-sm border border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                        />
                      </div>
                      
                      <div className="flex items-end">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeAutoResponse(trigger)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {activeTab === 'appearance' && (
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Aparência do Chat</h2>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Cor Primária</label>
                      <div className="flex gap-2">
                        <input
                          type="color"
                          value={formData.primaryColor}
                          onChange={(e) => setFormData(prev => ({ ...prev, primaryColor: e.target.value }))}
                          className="w-12 h-10 border border-slate-300 dark:border-slate-600 rounded"
                        />
                        <input
                          type="text"
                          value={formData.primaryColor}
                          onChange={(e) => setFormData(prev => ({ ...prev, primaryColor: e.target.value }))}
                          className="flex-1 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Cor de Destaque</label>
                      <div className="flex gap-2">
                        <input
                          type="color"
                          value={formData.accentColor}
                          onChange={(e) => setFormData(prev => ({ ...prev, accentColor: e.target.value }))}
                          className="w-12 h-10 border border-slate-300 dark:border-slate-600 rounded"
                        />
                        <input
                          type="text"
                          value={formData.accentColor}
                          onChange={(e) => setFormData(prev => ({ ...prev, accentColor: e.target.value }))}
                          className="flex-1 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h3 className="font-medium mb-2">Preview do Chat</h3>
                    <div 
                      className="w-64 h-40 rounded-lg p-3 text-white text-sm"
                      style={{ backgroundColor: formData.primaryColor }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                        <span className="font-medium">{formData.companyName}</span>
                      </div>
                      <div className="bg-white/10 rounded-lg p-2 text-xs">
                        {formData.welcomeMessage}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {activeTab === 'analytics' && (
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Analytics do Chat</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {stats.totalMessages}
                    </div>
                    <div className="text-sm text-blue-700 dark:text-blue-300">
                      Total de Mensagens
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {stats.totalSessions}
                    </div>
                    <div className="text-sm text-green-700 dark:text-green-300">
                      Sessões de Chat
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {stats.averageResponseTime}s
                    </div>
                    <div className="text-sm text-purple-700 dark:text-purple-300">
                      Tempo Médio de Resposta
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                      {stats.satisfactionRate}%
                    </div>
                    <div className="text-sm text-orange-700 dark:text-orange-300">
                      Taxa de Satisfação
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Perguntas Mais Frequentes</h3>
                  <div className="space-y-2">
                    {stats.topQuestions.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded">
                        <span className="text-sm">{item.question}</span>
                        <span className="text-sm font-medium text-slate-500">{item.count}x</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Actions */}
            <Card className="p-4">
              <h3 className="font-semibold mb-3">Ações</h3>
              <div className="space-y-2">
                <Button
                  onClick={saveSettings}
                  className="w-full flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  Salvar Configurações
                </Button>
                
                <Button
                  onClick={exportData}
                  variant="outline"
                  className="w-full flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Exportar Dados
                </Button>
                
                <Button
                  onClick={clearChat}
                  variant="outline"
                  className="w-full flex items-center gap-2 text-red-600 hover:text-red-800"
                >
                  <Trash2 className="w-4 h-4" />
                  Limpar Chat
                </Button>
              </div>
            </Card>

            {/* Status */}
            <Card className="p-4">
              <h3 className="font-semibold mb-3">Status do Sistema</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Webhook</span>
                  <div className={`w-3 h-3 rounded-full ${
                    formData.webhookUrl ? 'bg-green-500' : 'bg-red-500'
                  }`}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Chat Ativo</span>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Horário Comercial</span>
                  <div className={`w-3 h-3 rounded-full ${
                    formData.businessHours.enabled ? 'bg-green-500' : 'bg-gray-500'
                  }`}></div>
                </div>
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="p-4">
              <h3 className="font-semibold mb-3">Estatísticas Rápidas</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Mensagens Hoje</span>
                  <span className="font-medium">23</span>
                </div>
                <div className="flex justify-between">
                  <span>Sessões Ativas</span>
                  <span className="font-medium">5</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxa de Resposta</span>
                  <span className="font-medium">98%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 