"use client"

import { Card, CardContent } from '@/components/ui/Card'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    location: "Guarulhos, SP",
    rating: 5,
    text: "Serviço excelente! Chegaram rapidamente e resolveram o problema do meu banheiro em poucos minutos. Equipe muito profissional e educada.",
    service: "Desentupimento de vaso sanitário"
  },
  {
    id: 2,
    name: "João Santos",
    location: "São Paulo, SP",
    rating: 5,
    text: "Atendimento 24h realmente funciona! Tive uma emergência de madrugada e eles vieram imediatamente. Preço justo e serviço de qualidade.",
    service: "Desentupimento de esgoto"
  },
  {
    id: 3,
    name: "Ana Oliveira",
    location: "Arujá, SP",
    rating: 5,
    text: "Já é a terceira vez que utilizo os serviços da Raio Desentupidora. Sempre pontuais, eficientes e com preços honestos. Recomendo!",
    service: "Limpeza de caixa d'água"
  },
  {
    id: 4,
    name: "Carlos Pereira",
    location: "Mairiporã, SP",
    rating: 5,
    text: "Problema complexo na rede de esgoto do prédio foi resolvido com máxima eficiência. Profissionais capacitados e equipamentos modernos.",
    service: "Desentupimento de rede coletiva"
  },
  {
    id: 5,
    name: "Fernanda Costa",
    location: "Caieiras, SP",
    rating: 5,
    text: "Atendimento impecável! Chegaram no horário marcado, explicaram o problema e resolveram rapidamente. Empresa de confiança!",
    service: "Desentupimento de pia"
  },
  {
    id: 6,
    name: "Roberto Lima",
    location: "Franco da Rocha, SP",
    rating: 5,
    text: "Excelente custo-benefício! Serviço rápido, eficiente e com garantia. A equipe é muito profissional e deixa tudo limpo após o trabalho.",
    service: "Desentupimento de ralo"
  }
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Mais de 10 mil clientes atendidos com excelência em toda a Grande São Paulo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card variant="elevated" hover className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <StarRating rating={testimonial.rating} />
                    <Quote className="w-6 h-6 text-sky-500 opacity-50" />
                  </div>
                  
                  <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                      {testimonial.location}
                    </p>
                    <p className="text-sm text-sky-600 dark:text-sky-400 font-medium">
                      {testimonial.service}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-sky-600 dark:text-sky-400 mb-2">10K+</div>
                <div className="text-slate-600 dark:text-slate-300">Clientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sky-600 dark:text-sky-400 mb-2">24h</div>
                <div className="text-slate-600 dark:text-slate-300">Atendimento</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sky-600 dark:text-sky-400 mb-2">5★</div>
                <div className="text-slate-600 dark:text-slate-300">Avaliação Média</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 