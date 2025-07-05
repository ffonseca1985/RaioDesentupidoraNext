"use client"

import { motion } from 'framer-motion'
import { 
  Zap, 
  Shield, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Phone,
  MessageCircle,
  Star,
  Users,
  Award,
  TrendingUp
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import ServiceArea from '@/components/sections/ServiceArea'
import ContactForm from '@/components/sections/ContactForm'

const heroFeatures = [
  {
    icon: Clock,
    title: "Atendimento 24h",
    description: "Equipe disponível todos os dias, inclusive finais de semana e feriados"
  },
  {
    icon: Shield,
    title: "Garantia Total",
    description: "Todos os serviços com garantia por escrito e profissionais qualificados"
  },
  {
    icon: Zap,
    title: "Resposta Rápida",
    description: "Chegamos ao local em até 30 minutos após o contato"
  }
]

const whyChooseUs = [
  {
    icon: Users,
    title: "10.000+ Clientes",
    description: "Mais de 10 mil clientes atendidos com excelência"
  },
  {
    icon: Award,
    title: "15 Anos de Experiência",
    description: "Experiência consolidada no mercado de desentupimento"
  },
  {
    icon: TrendingUp,
    title: "99% de Satisfação",
    description: "Índice de satisfação comprovado pelos nossos clientes"
  }
]

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px] animate-pulse"></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-transparent to-blue-600/20"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg">
                Desentupidora em{' '}
                <span className="gradient-text bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                  São Paulo
                </span>
                <br />
                <span className="text-4xl md:text-6xl text-sky-300">
                  Atendimento 24 Horas
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Soluções profissionais em desentupimento com tecnologia de ponta, 
                garantia total e atendimento emergencial em toda a Grande São Paulo
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <Button size="lg" className="shadow-xl hover:shadow-2xl animate-glow">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+5511980639525">
                  Ligar Agora: (11) 98063-9525
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                <MessageCircle className="w-5 h-5 mr-2" />
                <a href="https://wa.me/5511980639525" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
              
              <Button variant="ghost" size="lg" className="text-white hover:bg-white/10" onClick={() => scrollToSection('contato')}>
                Orçamento Grátis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            {/* Hero Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {heroFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Card variant="glass" className="p-6 text-center hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-sky-500/20 rounded-full group-hover:bg-sky-500/30 transition-colors duration-300">
                        <feature.icon className="w-8 h-8 text-sky-300" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Por que escolher a Raio Desentupidora?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Somos referência em desentupimento na Grande São Paulo, 
              com tecnologia avançada e equipe especializada
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="elevated" hover className="text-center p-8 h-full">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-sky-100 dark:bg-sky-900 rounded-full">
                      <item.icon className="w-8 h-8 text-sky-600 dark:text-sky-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl p-12 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Tecnologia de Ponta
              </h3>
              <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
                Utilizamos equipamentos de última geração para garantir 
                eficiência máxima e resultados duradouros
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">Câmeras HD</div>
                  <div className="text-sky-100">Inspeção precisa</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">Hidrojato</div>
                  <div className="text-sky-100">Limpeza profunda</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">Rotocleaner</div>
                  <div className="text-sky-100">Desobstrução total</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Service Area Section */}
      <ServiceArea />

      {/* Contact Form Section */}
      <ContactForm />

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-shadow-lg">
              Não deixe o problema se agravar!
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
              Entre em contato agora mesmo e resolva seu problema de entupimento 
              com a melhor equipe da Grande São Paulo
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="shadow-xl hover:shadow-2xl animate-glow">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+5511980639525">
                  Emergência: (11) 98063-9525
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                <MessageCircle className="w-5 h-5 mr-2" />
                <a href="https://wa.me/5511980639525" target="_blank" rel="noopener noreferrer">
                  WhatsApp Direto
                </a>
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-400 mb-2">24h</div>
                <div className="text-slate-300">Atendimento</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-400 mb-2">30min</div>
                <div className="text-slate-300">Tempo Resposta</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-400 mb-2">100%</div>
                <div className="text-slate-300">Garantia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-400 mb-2">+10k</div>
                <div className="text-slate-300">Clientes</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
