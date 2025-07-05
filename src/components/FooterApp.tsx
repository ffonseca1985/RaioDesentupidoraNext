"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter,
  Wrench,
  Clock,
  CreditCard,
  Shield,
  Award,
  Star
} from "lucide-react"

const AppFooter: React.FC = () => {
  const currentYear = new Date().getFullYear()
  
  const quickLinks = [
    { href: "/", label: "Início" },
    { href: "/quemsomos", label: "Quem Somos" },
    { href: "/nossosservicos", label: "Nossos Serviços" },
    { href: "/contato", label: "Contato" }
  ]
  
  const services = [
    "Desentupimento de Esgoto",
    "Desentupimento de Pia",
    "Desentupimento de Vaso",
    "Limpeza de Caixa D'água",
    "Desentupimento de Ralo",
    "Limpa Fossa"
  ]
  
  const paymentMethods = [
    "Cartão de Crédito",
    "Cartão de Débito", 
    "Dinheiro",
    "Pix",
    "Parcelamos"
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Raio Desentupidora</h3>
                <p className="text-sm text-sky-400">Atendimento 24h</p>
              </div>
            </div>
            
            <p className="text-slate-300 leading-relaxed">
              Especializada em serviços de desentupimento com qualidade e eficiência. 
              Fazemos a diferença respeitando o consumidor e garantindo serviços de 
              qualidade com competência, ética e cordialidade.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm text-slate-300">4.9/5 avaliação</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-green-400" />
                <span className="text-sm text-slate-300">Certificado</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-sky-400">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-sky-400 rounded-full group-hover:w-2 transition-all duration-300"></div>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-sky-400">Serviços</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-slate-300 text-sm flex items-center gap-2">
                  <Wrench className="w-3 h-3 text-sky-400" />
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-sky-400">Contato</h4>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-sky-400 mt-0.5" />
                <div>
                  <p className="text-slate-300 font-medium">Telefones</p>
                  <a href="tel:+5511980639525" className="text-white hover:text-sky-400 transition-colors">
                    (11) 98063-9525
                  </a>
                  <br />
                  <a href="tel:+5511980399879" className="text-white hover:text-sky-400 transition-colors">
                    (11) 98039-9879
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-sky-400 mt-0.5" />
                <div>
                  <p className="text-slate-300 font-medium">Email</p>
                  <a href="mailto:contato@raiodesentupidora.com.br" className="text-white hover:text-sky-400 transition-colors">
                    contato@raiodesentupidora.com.br
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 mt-0.5" />
                <div>
                  <p className="text-slate-300 font-medium">Endereço</p>
                  <p className="text-white">
                    Rua Nobel Almeida Kuke, 485<br />
                    Guarulhos - SP, 07084-210
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-sky-400 mt-0.5" />
                <div>
                  <p className="text-slate-300 font-medium">Horário</p>
                  <p className="text-white">24 horas por dia</p>
                  <p className="text-sky-400 text-sm">Atendimento emergencial</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Payment Methods & Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-slate-700 dark:border-slate-600"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Payment Methods */}
            <div>
              <h4 className="text-lg font-semibold text-sky-400 mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Formas de Pagamento
              </h4>
              <div className="flex flex-wrap gap-2">
                {paymentMethods.map((method) => (
                  <span key={method} className="bg-slate-800 dark:bg-slate-700 px-3 py-1 rounded-full text-sm text-slate-300">
                    {method}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-sky-400 mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/raiodesentupidoradedetizadora/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/raiodesentupidora/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://wa.me/5511980639525" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-300"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-slate-700 dark:border-slate-600 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <p className="text-slate-400 text-sm">
                &copy; {currentYear} Raio Desentupidora. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-sm text-slate-400">Site Seguro</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span>Desenvolvido com</span>
              <span className="text-red-400">♥</span>
              <span>para melhor atendimento</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default AppFooter 