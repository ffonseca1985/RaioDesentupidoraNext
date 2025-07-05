"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, 
  X, 
  Phone, 
  MessageCircle, 
  Sun, 
  Moon, 
  ChevronDown,
  Home,
  Users,
  Wrench,
  Mail,
  MapPin
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useTheme } from '@/contexts/ThemeContext'

const navLinks = [
  { 
    href: "/", 
    label: "Início", 
    icon: Home,
    description: "Página inicial"
  },
  { 
    href: "/quemsomos", 
    label: "Sobre Nós", 
    icon: Users,
    description: "Nossa história e missão"
  },
  { 
    href: "/nossosservicos", 
    label: "Serviços", 
    icon: Wrench,
    description: "Todos os nossos serviços"
  },
  { 
    href: "/contato", 
    label: "Contato", 
    icon: Mail,
    description: "Fale conosco"
  }
]

export default function HeaderModern() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg' 
            : 'bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                  Raio Desentupidora
                </h1>
                <p className="text-xs text-sky-600 dark:text-sky-400 font-medium">
                  Atendimento 24h
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative px-4 py-2 rounded-lg transition-all duration-300 ${
                    pathname === link.href
                      ? 'bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <link.icon className="w-4 h-4" />
                    <span className="font-medium">{link.label}</span>
                  </div>
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500 rounded-full"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-3">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="w-10 h-10 p-0"
              >
                {theme === 'light' ? (
                  <Moon className="w-4 h-4" />
                ) : (
                  <Sun className="w-4 h-4" />
                )}
              </Button>

              {/* Contact Actions */}
              <Button variant="outline" size="sm" className="hidden lg:flex">
                <MessageCircle className="w-4 h-4 mr-2" />
                <a href="https://wa.me/5511980639525" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
              
              <Button size="sm" className="shadow-lg">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+5511980639525">
                  (11) 98063-9525
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="w-10 h-10 p-0"
              >
                {theme === 'light' ? (
                  <Moon className="w-4 h-4" />
                ) : (
                  <Sun className="w-4 h-4" />
                )}
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-10 h-10 p-0"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-700"
            >
              <div className="container mx-auto px-4 py-6">
                <div className="space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                        pathname === link.href
                          ? 'bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <link.icon className="w-5 h-5" />
                      <div>
                        <div className="font-medium">{link.label}</div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          {link.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                  
                  <div className="border-t border-slate-200 dark:border-slate-700 pt-4 space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      <a href="https://wa.me/5511980639525" target="_blank" rel="noopener noreferrer">
                        WhatsApp
                      </a>
                    </Button>
                    
                    <Button className="w-full justify-start">
                      <Phone className="w-4 h-4 mr-2" />
                      <a href="tel:+5511980639525">
                        Ligar: (11) 98063-9525
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-20"></div>
      
      {/* WhatsApp Floating Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <a
          href="https://wa.me/5511980639525"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
        >
          <MessageCircle className="w-7 h-7 text-white" />
          
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-ping"></div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Fale no WhatsApp
          </div>
        </a>
      </motion.div>
    </>
  )
} 