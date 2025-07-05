"use client"

import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { MapPin, Navigation, Clock, Phone } from 'lucide-react'

const cities = [
  'Guarulhos', 'São Paulo', 'Arujá', 'Mairiporã', 'Caieiras', 'Franco da Rocha',
  'Mogi das Cruzes', 'Suzano', 'Ferraz de Vasconcelos', 'Poá', 'Itaquaquecetuba',
  'Santa Isabel', 'Nazaré Paulista', 'Atibaia', 'Bom Jesus dos Perdões',
  'Igaratá', 'Piracaia', 'Joanópolis', 'Vargem', 'Tuiuti'
]

const regions = [
  {
    name: 'Zona Norte',
    cities: ['Guarulhos', 'Arujá', 'Mairiporã', 'Caieiras', 'Franco da Rocha'],
    description: 'Atendimento prioritário com equipes especializadas'
  },
  {
    name: 'Zona Leste',
    cities: ['Mogi das Cruzes', 'Suzano', 'Ferraz de Vasconcelos', 'Poá', 'Itaquaquecetuba'],
    description: 'Cobertura completa com resposta rápida'
  },
  {
    name: 'Grande São Paulo',
    cities: ['Santa Isabel', 'Nazaré Paulista', 'Atibaia', 'Bom Jesus dos Perdões'],
    description: 'Atendimento em toda a região metropolitana'
  }
]

export default function ServiceArea() {
  return (
    <section id="area-atuacao" className="py-20 bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Área de Atuação
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Atendemos toda a Grande São Paulo com equipes especializadas e 
            equipamentos modernos para resolver seu problema rapidamente
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card variant="elevated" className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-sky-100 dark:bg-sky-900 rounded-lg">
                    <MapPin className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Localização
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Cobertura em toda a região
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative bg-slate-100 dark:bg-slate-800 rounded-lg p-8 mb-6">
                  {/* Placeholder for map - in real implementation, use Google Maps or similar */}
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-sky-500 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      Sede Principal
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      Rua Nobel Almeida Kuke, 485<br />
                      Guarulhos - SP, 07084-210
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-sky-50 dark:bg-sky-900/20 rounded-lg">
                    <Navigation className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Raio de Atendimento</p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">50km da sede</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <Clock className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Tempo Médio</p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">30 minutos</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Cities List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card variant="elevated" className="h-full">
              <CardHeader>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Cidades Atendidas
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Atendimento 24h em todas as cidades listadas
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6">
                  {cities.map((city, index) => (
                    <motion.div
                      key={city}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="bg-slate-50 dark:bg-slate-800 px-3 py-2 rounded-lg text-center"
                    >
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {city}
                      </span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="p-4 bg-sky-50 dark:bg-sky-900/20 rounded-lg">
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                    <strong>Não encontrou sua cidade?</strong>
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Entre em contato conosco! Atendemos outras regiões mediante consulta.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Regions Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Regiões Especializadas
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="glass" hover className="p-6 text-center">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    {region.name}
                  </h4>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    {region.description}
                  </p>
                  
                  <div className="space-y-2">
                    {region.cities.map((city, i) => (
                      <div key={i} className="flex items-center justify-center gap-2">
                        <MapPin className="w-3 h-3 text-sky-500" />
                        <span className="text-sm text-slate-600 dark:text-slate-300">
                          {city}
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
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Card variant="elevated" className="bg-gradient-to-r from-sky-500 to-blue-600 text-white p-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Atendimento Rápido em Sua Região
            </h3>
            <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
              Equipes estrategicamente posicionadas para atender sua emergência 
              no menor tempo possível
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="shadow-lg">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+5511980639525">
                  Ligar Agora: (11) 98063-9525
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-sky-600">
                <MapPin className="w-5 h-5 mr-2" />
                Consultar Atendimento
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
} 