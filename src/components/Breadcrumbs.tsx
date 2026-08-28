'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { site } from '@/lib/site'

/**
 * Trilha de navegação.
 *
 * Renderiza em todas as rotas via layout, exceto a home — trilha de um
 * item só é ruído. Emite JSON-LD `BreadcrumbList` para o snippet do Google.
 *
 * Não precisa compensar `--header-h`: o `HeaderModern` já rende o próprio
 * espaçador da altura da barra fixa logo abaixo de si.
 */

const pathToLabel: Record<string, string> = {
  '/contato': 'Contato',
  '/nossosservicos': 'Serviços',
  '/empresas': 'Empresas e condomínios',
  '/quemsomos': 'Sobre a Raio',
  '/servicos.html': 'Serviços',
  '/desintupidora': 'Desentupidora',
  '/desentupidora-guarulhos-parque-continental.html':
    'Desentupidora em Guarulhos — Parque Continental',
}

/** Fallback legível quando a rota não está no mapa: "/limpa-fossa" → "Limpa fossa". */
function labelFromPath(pathname: string) {
  const slug = pathname
    .replace(/\.html$/, '')
    .split('/')
    .filter(Boolean)
    .pop()
  if (!slug) return 'Página'
  const words = decodeURIComponent(slug).replace(/[-_]+/g, ' ').trim()
  return words.charAt(0).toUpperCase() + words.slice(1)
}

export default function Breadcrumbs() {
  const pathname = usePathname()

  // Com `output: "export"` a home também é servida em /index.html — sem isso,
  // quem cai nessa URL vê uma trilha "Início › Index".
  if (!pathname || pathname === '/' || pathname === '/index.html') return null

  const crumbs = [
    { label: 'Início', href: '/' },
    { label: pathToLabel[pathname] ?? labelFromPath(pathname), href: pathname },
  ]

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: `${site.url}${crumb.href}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav aria-label="Trilha de navegação" className="border-b border-hairline bg-canvas">
        <div className="container py-3">
          <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-content-subtle">
            {crumbs.map((crumb, index) => {
              const isLast = index === crumbs.length - 1
              return (
                <li key={crumb.href} className="flex items-center gap-x-1.5">
                  {index > 0 && (
                    <ChevronRight
                      className="h-3.5 w-3.5 shrink-0 text-content-subtle"
                      aria-hidden
                    />
                  )}
                  {isLast ? (
                    <span aria-current="page" className="font-medium text-content">
                      {crumb.label}
                    </span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="rounded transition-colors duration-200 ease-out hover:text-content focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-raio-500"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      </nav>
    </>
  )
}
