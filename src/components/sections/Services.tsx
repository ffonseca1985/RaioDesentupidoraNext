"use client"

import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { 
  Wrench, 
  Droplets, 
  Zap, 
  Clock, 
  Shield, 
  Truck,
  Home,
  Building,
  Factory,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Wrench,
    title: "Desentupimento de Esgoto",
    description: "Desentupimento completo de redes de esgoto residenciais, comerciais e industriais com equipamentos de alta pressão.",
    features: ["Equipamentos modernos", "Garantia do serviço", "Limpeza após o trabalho"]
  },
  {
    icon: Droplets,
    title: "Desentupimento de Pias",
    description: "Serviço especializado em desentupimento de pias de cozinha, banheiro e lavanderia com técnicas avançadas.",
    features: ["Sem quebra de pisos", "Materiais inclusos", "Atendimento rápido"]
  },
  {
    icon: Zap,
    title: "Desentupimento de Vaso Sanitário",
    description: "Desentupimento de vasos sanitários entupidos com soda cáustica, objetos ou papel em excesso.",
    features: ["Técnicas especializadas", "Sem danos ao vaso", "Higienização completa"]
  },
  {
    icon: Clock,
    title: "Limpeza de Caixa D'água",
    description: "Limpeza e desinfecção completa de caixas d'água e reservatórios seguindo normas sanitárias.",
    features: ["Certificado sanitário", "Produtos apropriados", "Laudo técnico"]
  },
  {
    icon: Shield,
    title: "Desentupimento de Ralos",
    description: "Desentupimento de ralos de banheiro, cozinha, área de serviço e garagem com máxima eficiência.",
    features: ["Diversos tipos de ralo", "Sem odores", "Prevenção de entupimentos"]
  },
  {
    icon: Truck,
    title: "Limpa Fossa",
    description: "Limpeza e esgotamento de fossas sépticas com caminhão limpa-fossa e equipamentos adequados.",
    features: ["Caminhão especializado", "Descarte ecológico", "Atendimento programado"]
  }
]

const serviceTypes = [
  {
    icon: Home,
    title: "Residencial",
    description: "Atendimento especializado para casas e apartamentos",
    features: ["Atendimento domiciliar", "Horário flexível", "Preços acessíveis"]
  },
  {
    icon: Building,
    title: "Comercial",
    description: "Soluções para empresas, lojas e escritórios",
    features: ["Atendimento corporativo", "Contratos mensais", "Equipe especializada"]
  },
  {
    icon: Factory,
    title: "Industrial",
    description: "Serviços de grande porte para indústrias",
    features: ["Equipamentos robustos", "Projetos customizados", "Manutenção preventiva"]
  }
]

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Oferecemos soluções completas em desentupimento com tecnologia de ponta, 
            garantia e atendimento 24 horas em toda a Grande São Paulo
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card variant="elevated" hover className="h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-sky-100 dark:bg-sky-900 rounded-lg">
                      <service.icon className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        {service.title}
                      </h3>
                      <p className="text-sky-600 dark:text-sky-400 font-medium">
                        Orçamento personalizado
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-slate-600 dark:text-slate-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full group">
                    Solicitar Orçamento
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Service Types */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Atendemos todos os segmentos
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="glass" className="text-center p-8">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-sky-100 dark:bg-sky-900 rounded-full">
                      <type.icon className="w-8 h-8 text-sky-600 dark:text-sky-400" />
                    </div>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {type.title}
                  </h4>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    {type.description}
                  </p>
                  
                  <div className="space-y-2">
                    {type.features.map((feature, i) => (
                      <div key={i} className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-slate-600 dark:text-slate-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Emergência? Atendemos 24h!
            </h3>
            <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
              Não espere o problema se agravar. Nossa equipe está pronta para 
              atender sua emergência a qualquer hora do dia ou da noite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="shadow-lg">
                <a href="tel:+5511980639525" className="flex items-center gap-2">
                  Ligar Agora: (11) 98063-9525
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-sky-600">
                <a href="https://wa.me/5511980639525" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 