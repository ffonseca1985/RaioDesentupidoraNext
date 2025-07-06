"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href: string
}

const pathToLabel: Record<string, string> = {
  '/': 'Home',
  '/contato': 'Contato',
  '/nossosservicos': 'Nossos Serviços',
  '/quemsomos': 'Quem Somos',
  '/servicos.html': 'Serviços',
  '/desintupidora': 'Desentupidora',
  '/desentupidora-guarulhos-parque-continental.html': 'Desentupidora Guarulhos',
  '/#faq': 'Perguntas Frequentes'
}

export default function Breadcrumbs() {
  const pathname = usePathname()
  
  if (pathname === '/') {
    return null // Não mostrar breadcrumbs na home
  }

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' }
  ]

  // Adicionar página atual
  const currentLabel = pathToLabel[pathname] || 'Página'
  breadcrumbs.push({ label: currentLabel, href: pathname })

  // Structured data para breadcrumbs
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `https://www.raiodesentupidora.com.br${item.href}`
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav 
        aria-label="Breadcrumb"
        className="bg-slate-50 dark:bg-slate-800 py-3 px-4 border-b border-slate-200 dark:border-slate-700"
      >
        <div className="container mx-auto">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((item, index) => (
              <li key={item.href} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-slate-400 mx-2" />
                )}
                {index === 0 ? (
                  <Link 
                    href={item.href}
                    className="flex items-center text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                  >
                    <Home className="w-4 h-4 mr-1" />
                    {item.label}
                  </Link>
                ) : index === breadcrumbs.length - 1 ? (
                  <span className="text-slate-900 dark:text-slate-100 font-medium">
                    {item.label}
                  </span>
                ) : (
                  <Link 
                    href={item.href}
                    className="text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
} 