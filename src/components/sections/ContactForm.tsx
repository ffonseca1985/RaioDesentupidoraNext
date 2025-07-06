"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Send
} from 'lucide-react'

interface FormData {
  name: string
  phone: string
  email: string
  service: string
  message: string
  urgency: 'normal' | 'urgent' | 'emergency'
}

const services = [
  'Desentupimento de Esgoto',
  'Desentupimento de Pia',
  'Desentupimento de Vaso Sanitário',
  'Limpeza de Caixa D\'água',
  'Desentupimento de Ralo',
  'Limpa Fossa',
  'Outros'
]

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
    urgency: 'normal'
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Create WhatsApp message
    const whatsappMessage = `
Olá! Gostaria de solicitar um orçamento:

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*Email:* ${formData.email}
*Serviço:* ${formData.service}
*Urgência:* ${formData.urgency === 'emergency' ? 'EMERGÊNCIA' : formData.urgency === 'urgent' ? 'Urgente' : 'Normal'}
*Mensagem:* ${formData.message}

Aguardo retorno!
    `.trim()
    
    const whatsappUrl = `https://wa.me/5511980639525?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
    
    setSubmitted(true)
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (submitted) {
    return (
      <section id="contato" className="py-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Card variant="elevated" className="p-12">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Mensagem Enviada!
              </h2>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                Você foi redirecionado para o WhatsApp. Nossa equipe responderá em breve!
              </p>
              
              <Button 
                onClick={() => setSubmitted(false)}
                variant="outline"
              >
                Enviar Nova Mensagem
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contato" className="py-12 sm:py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto mobile-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="mobile-heading font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
            Entre em Contato
          </h2>
          <p className="mobile-text text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Solicite seu orçamento gratuito e receba atendimento personalizado
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card variant="elevated" className="mobile-card">
              <CardHeader>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Solicite seu Orçamento
                </h3>
                <p className="mobile-text text-slate-600 dark:text-slate-300">
                  Preencha o formulário e entraremos em contato rapidamente
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="mobile-spacing no-zoom">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent dark:bg-slate-800 dark:text-white text-base touch-target"
                      placeholder="Seu nome completo"
                      autoComplete="name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent dark:bg-slate-800 dark:text-white text-base touch-target"
                        placeholder="(11) 99999-9999"
                        autoComplete="tel"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent dark:bg-slate-800 dark:text-white text-base touch-target"
                        placeholder="seu@email.com"
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Serviço Desejado *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent dark:bg-slate-800 dark:text-white"
                    >
                      <option value="">Selecione um serviço</option>
                      {services.map(service => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Urgência *
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { value: 'normal', label: 'Normal', color: 'bg-blue-50 border-blue-200 text-blue-700' },
                        { value: 'urgent', label: 'Urgente', color: 'bg-yellow-50 border-yellow-200 text-yellow-700' },
                        { value: 'emergency', label: 'Emergência', color: 'bg-red-50 border-red-200 text-red-700' }
                      ].map(option => (
                        <label key={option.value} className="cursor-pointer">
                          <input
                            type="radio"
                            name="urgency"
                            value={option.value}
                            checked={formData.urgency === option.value}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <div className={`p-3 border-2 rounded-lg text-center transition-all ${
                            formData.urgency === option.value 
                              ? option.color 
                              : 'border-slate-300 dark:border-slate-600 hover:border-sky-300'
                          }`}>
                            <span className="text-sm font-medium">{option.label}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent dark:bg-slate-800 dark:text-white resize-none"
                      placeholder="Descreva o problema ou serviço desejado..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    isLoading={isSubmitting}
                    className="w-full"
                    size="lg"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar pelo WhatsApp'}
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <Card variant="elevated">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-sky-100 dark:bg-sky-900 rounded-lg">
                    <Phone className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Telefone</h4>
                    <p className="text-slate-600 dark:text-slate-300">Atendimento 24 horas</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <a href="tel:+5511980639525" className="block text-sky-600 dark:text-sky-400 hover:underline">
                    (11) 98063-9525
                  </a>
                  <a href="tel:+5511980399879" className="block text-sky-600 dark:text-sky-400 hover:underline">
                    (11) 98039-9879
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">WhatsApp</h4>
                    <p className="text-slate-600 dark:text-slate-300">Resposta imediata</p>
                  </div>
                </div>
                <a 
                  href="https://wa.me/5511980639525" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 dark:text-green-400 hover:underline"
                >
                  Iniciar conversa
                </a>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Email</h4>
                    <p className="text-slate-600 dark:text-slate-300">Orçamentos e dúvidas</p>
                  </div>
                </div>
                <a 
                  href="mailto:contato@raiodesentupidora.com.br" 
                  className="text-purple-600 dark:text-purple-400 hover:underline"
                >
                  contato@raiodesentupidora.com.br
                </a>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-red-100 dark:bg-red-900 rounded-lg">
                    <MapPin className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Endereço</h4>
                    <p className="text-slate-600 dark:text-slate-300">Sede principal</p>
                  </div>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Rua Nobel Almeida Kuke, 485<br />
                  Guarulhos - SP, 07084-210
                </p>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                    <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Horário</h4>
                    <p className="text-slate-600 dark:text-slate-300">Funcionamento</p>
                  </div>
                </div>
                <div className="space-y-1 text-slate-700 dark:text-slate-300">
                  <p>24 horas por dia</p>
                  <p>7 dias por semana</p>
                  <p className="text-sm text-sky-600 dark:text-sky-400 font-medium">
                    Atendimento emergencial
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 