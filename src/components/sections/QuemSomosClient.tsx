"use client"

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { 
  Users, 
  Target, 
  Heart, 
  Phone, 
  MessageCircle,
  Shield,
  Award,
  Clock,
  CheckCircle
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Missão",
    description: "Prestar serviços de desentupimento de forma sustentável, ágil e eficiente, garantindo a satisfação total do cliente."
  },
  {
    icon: Users,
    title: "Visão",
    description: "Ser uma empresa de excelência, referência no mercado de desentupimento, comprometida com o bem-estar do cliente."
  },
  {
    icon: Heart,
    title: "Valores",
    description: "Exercer nossas atribuições com dedicação, ética, respeito e responsabilidade social."
  }
];

const achievements = [
  { icon: Users, number: "10.000+", label: "Clientes Atendidos" },
  { icon: Award, number: "15+", label: "Anos de Experiência" },
  { icon: Shield, number: "100%", label: "Garantia nos Serviços" },
  { icon: Clock, number: "24h", label: "Atendimento Disponível" }
];

export default function QuemSomosClient() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950">
        {/* Animated background */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px] animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-transparent to-blue-600/20"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-sky-500/20 rounded-full backdrop-blur-sm border border-white/20">
                <Users className="w-12 h-12 text-sky-300" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-lg">
              Quem Somos
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Mais de 15 anos de dedicação em serviços de desentupimento 
              com excelência e compromisso
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-xl hover:shadow-2xl">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+5511980639525">
                  (11) 98063-9525
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                <MessageCircle className="w-5 h-5 mr-2" />
                <a href="https://wa.me/5511980639525" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card variant="elevated" className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    Nossa História
                  </h2>
                </div>
                
                <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>
                    Fundada em 2009, a <strong>Raio Desentupidora</strong> começou como uma pequena empresa 
                    familiar em Guarulhos, com o objetivo de oferecer serviços de desentupimento de alta 
                    qualidade e atendimento emergencial 24 horas.
                  </p>
                  
                  <p>
                    Ao longo dos anos, expandimos nossos serviços e nossa equipe, sempre mantendo o 
                    compromisso com a excelência e a satisfação do cliente. Investimos constantemente 
                    em tecnologia de ponta e treinamento especializado.
                  </p>
                  
                  <p>
                    Hoje, somos uma das principais empresas de desentupimento da região, reconhecida 
                    pela nossa eficiência, profissionalismo e dedicação. Continuamos crescendo sem 
                    perder nossos valores fundamentais.
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Nosso Compromisso
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                  "Somos movidos pelo desafio de promover a cada dia serviços de qualidade e eficiência"
                </p>
              </div>

              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card variant="bordered" hover className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-sky-100 dark:bg-sky-900 rounded-lg flex items-center justify-center">
                        <value.icon className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                          {value.title}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Nossa Trajetória de Sucesso
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Números que comprovam nossa dedicação e compromisso com a excelência
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="elevated" hover className="text-center p-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-sky-100 dark:bg-sky-900 rounded-full">
                      <achievement.icon className="w-8 h-8 text-sky-600 dark:text-sky-400" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-sky-600 dark:text-sky-400 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-slate-600 dark:text-slate-300 font-medium">
                    {achievement.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Faça parte da nossa história!
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
              Entre em contato e descubra por que milhares de clientes confiam na Raio Desentupidora
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button size="lg" className="shadow-xl hover:shadow-2xl">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+5511980639525">
                  Ligar: (11) 98063-9525
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                <MessageCircle className="w-5 h-5 mr-2" />
                <a href="https://wa.me/5511980639525" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-slate-300">Atendimento 24h</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-slate-300">Garantia nos serviços</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-slate-300">Equipe especializada</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 