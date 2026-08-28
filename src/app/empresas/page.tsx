import type { Metadata } from 'next'
import EmpresasHero from '@/components/sections/EmpresasHero'
import EmpresasSegmentos from '@/components/sections/EmpresasSegmentos'
import EmpresasPreventiva from '@/components/sections/EmpresasPreventiva'
import EmpresasContrato from '@/components/sections/EmpresasContrato'
import EmpresasEscopo from '@/components/sections/EmpresasEscopo'
import EmpresasGovernanca from '@/components/sections/EmpresasGovernanca'
import EmpresasFAQ, { empresasFaq } from '@/components/sections/EmpresasFAQ'
import EmpresasCTA from '@/components/sections/EmpresasCTA'
import { site } from '@/lib/site'

const title = 'Contrato de manutenção preventiva para empresas e condomínios'
const description =
  'Saneamento predial contratado para condomínios, prédios comerciais, indústrias e food service na Grande São Paulo: hidrojateamento, videoinspeção, caixa de gordura e reservatório em periodicidade programada, com relatório técnico e nota fiscal.'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'contrato manutenção preventiva esgoto',
    'desentupimento para condomínios',
    'desentupidora para empresas',
    'limpeza de caixa de gordura industrial',
    'hidrojateamento predial',
    'videoinspeção de tubulação',
    'manutenção predial guarulhos',
    'desentupimento industrial são paulo',
  ],
  alternates: { canonical: '/empresas' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/empresas',
    siteName: site.name,
    title: `${title} | ${site.name}`,
    description,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: empresasFaq.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function EmpresasPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <EmpresasHero />
      <EmpresasSegmentos />
      <EmpresasPreventiva />
      <EmpresasContrato />
      <EmpresasEscopo />
      <EmpresasGovernanca />
      <EmpresasFAQ />
      <EmpresasCTA />
    </main>
  )
}
