"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { Card } from '@/components/ui/Card'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "Quanto tempo demora para o atendimento de emergência?",
    answer: "Nosso atendimento emergencial é 24h e chegamos ao local em até 1 hora após o chamado, dependendo da região. Priorizamos casos de urgência como vazamentos e entupimentos graves."
  },
  {
    question: "Quais regiões vocês atendem?",
    answer: "Atendemos Guarulhos e toda a região metropolitana de São Paulo, incluindo Cumbica, Vila Galvão, Parque Continental, Vila Augusta, Centro de Guarulhos e cidades próximas."
  },
  {
    question: "Vocês oferecem garantia nos serviços?",
    answer: "Sim! Oferecemos garantia de 90 dias em todos os nossos serviços de desentupimento e 6 meses na limpeza de caixa d'água. Nossa garantia cobre mão de obra e eficácia do serviço."
  },
  {
    question: "Como é feito o orçamento?",
    answer: "O orçamento é totalmente gratuito! Nosso técnico avalia o problema no local e apresenta um preço justo e transparente. Só iniciamos o serviço após sua aprovação."
  },
  {
    question: "Quais formas de pagamento vocês aceitam?",
    answer: "Aceitamos dinheiro, PIX, cartão de débito e crédito (até 12x), transferência bancária e boleto. Oferecemos facilidades de pagamento para melhor atender nossos clientes."
  },
  {
    question: "Vocês trabalham aos finais de semana e feriados?",
    answer: "Sim! Nosso atendimento é 24 horas por dia, 7 dias por semana, incluindo finais de semana e feriados. Entupimentos não escolhem hora para acontecer!"
  },
  {
    question: "O que está incluído no serviço de limpeza de caixa d'água?",
    answer: "Incluímos esvaziamento completo, limpeza com produtos específicos, desinfecção, teste de qualidade da água e relatório de limpeza. Todo processo segue normas da ANVISA."
  },
  {
    question: "Vocês emitem nota fiscal?",
    answer: "Sim, emitimos nota fiscal para todos os serviços prestados. Para empresas, oferecemos condições especiais e contratos de manutenção preventiva."
  }
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  // Structured data para FAQ
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      
      <section id="faq" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-sky-100 dark:bg-sky-900 rounded-full">
                <HelpCircle className="w-8 h-8 text-sky-600 dark:text-sky-400" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Esclarecemos as principais dúvidas sobre nossos serviços de desentupimento e limpeza
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card 
                  variant="bordered" 
                  hover 
                  className="overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    aria-expanded={openItems.includes(index)}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white pr-4">
                      {item.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-slate-500" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openItems.includes(index) && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-slate-200 dark:border-slate-700">
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed pt-4">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Não encontrou a resposta que procurava?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+5511980639525"
                className="inline-flex items-center px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors shadow-lg hover:shadow-xl"
              >
                📞 (11) 98063-9525
              </a>
              <a
                href="https://wa.me/5511980639525"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
              >
                💬 WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
} 