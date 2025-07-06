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
  MapPin,
  HelpCircle
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
    href: "/#faq", 
    label: "FAQ", 
    icon: HelpCircle,
    description: "Perguntas frequentes"
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

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      const sectionId = href.substring(2) // Remove '/#'
      scrollToSection(sectionId)
    } else {
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 mobile-header safe-area-top ${
          isScrolled 
            ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-lg border-b border-slate-200/50 dark:border-slate-700/50' 
            : 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 touch-target">
                  <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
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
                  onClick={(e) => handleNavClick(link.href, e)}
                  className={`group relative px-4 py-2 rounded-lg transition-all duration-300 ${
                    pathname === link.href || (link.href === '/#faq' && pathname === '/')
                      ? 'bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <link.icon className="w-4 h-4" />
                    <span className="font-medium">{link.label}</span>
                  </div>
                  {(pathname === link.href || (link.href === '/#faq' && pathname === '/')) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500 rounded-full"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-2 lg:gap-3">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="w-10 h-10 p-0 touch-target"
                aria-label="Alternar tema"
              >
                {theme === 'light' ? (
                  <Moon className="w-4 h-4" />
                ) : (
                  <Sun className="w-4 h-4" />
                )}
              </Button>

              {/* Contact Actions */}
              <Button variant="outline" size="sm" className="hidden lg:flex mobile-button">
                <MessageCircle className="w-4 h-4 mr-2" />
                <a href="https://wa.me/5511980639525" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
              
              <Button size="sm" className="shadow-lg mobile-button animate-glow">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+5511980639525">
                  <span className="hidden lg:inline">(11) 98063-9525</span>
                  <span className="lg:hidden">Ligar</span>
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-1 sm:gap-2 lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="w-10 h-10 p-0 touch-target"
                aria-label="Alternar tema"
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
                className="w-10 h-10 p-0 touch-target"
                aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </motion.div>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-700/50 shadow-lg"
            >
              <div className="container mx-auto px-4 py-6 mobile-container">
                <div className="mobile-spacing">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={(e) => handleNavClick(link.href, e)}
                        className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 mobile-card touch-target ${
                          pathname === link.href || (link.href === '/#faq' && pathname === '/')
                            ? 'bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 shadow-sm'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 active:bg-slate-100 dark:active:bg-slate-700'
                        }`}
                      >
                        <div className={`p-2 rounded-lg ${
                          pathname === link.href
                            ? 'bg-sky-100 dark:bg-sky-800'
                            : 'bg-slate-100 dark:bg-slate-700'
                        }`}>
                          <link.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-base">{link.label}</div>
                          <div className="text-sm text-slate-500 dark:text-slate-400">
                            {link.description}
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="border-t border-slate-200 dark:border-slate-700 pt-6 space-y-3"
                  >
                    <Button 
                      variant="outline" 
                      className="w-full justify-start mobile-button h-14 text-base bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/30"
                    >
                      <MessageCircle className="w-5 h-5 mr-3 text-green-600 dark:text-green-400" />
                      <a href="https://wa.me/5511980639525" target="_blank" rel="noopener noreferrer" className="flex-1 text-left">
                        <div className="font-semibold text-green-700 dark:text-green-300">WhatsApp</div>
                        <div className="text-sm text-green-600 dark:text-green-400">Atendimento rápido</div>
                      </a>
                    </Button>
                    
                    <Button className="w-full justify-start mobile-button h-14 text-base bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 shadow-lg">
                      <Phone className="w-5 h-5 mr-3" />
                      <a href="tel:+5511980639525" className="flex-1 text-left">
                        <div className="font-semibold text-white">Ligar Agora</div>
                        <div className="text-sm text-sky-100">(11) 98063-9525</div>
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-16 sm:h-20"></div>
      
      {/* WhatsApp Floating Button */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 200 }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 safe-area-bottom safe-area-right"
      >
        <a
          href="https://wa.me/5511980639525"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 group touch-target"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-ping"></div>
          
          {/* Tooltip - Hidden on mobile */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 dark:bg-slate-800 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden sm:block">
            Fale no WhatsApp
            <div className="absolute top-1/2 -translate-y-1/2 left-full w-0 h-0 border-l-4 border-l-slate-900 dark:border-l-slate-800 border-y-4 border-y-transparent"></div>
          </div>
          
          {/* Mobile notification badge */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center sm:hidden">
            <span className="text-white text-xs font-bold">!</span>
          </div>
        </a>
      </motion.div>
    </>
  )
} 