import { MetadataRoute } from 'next'
import { site } from '@/lib/site'

export const dynamic = 'force-static'

/**
 * Só URLs canônicas entram aqui.
 *
 * Ficam de fora, de propósito:
 *  - `/servicos.html` e `/desintupidora` — duplicatas legadas mantidas acessíveis,
 *    mas com `alternates.canonical` apontando para a URL canônica. Sitemap não é
 *    lugar de URL canonicalizada para outra.
 *  - `/seo-check`, `/performance-dashboard` — ferramentas internas, `noindex`.
 *  - `/chat-demo`, `/chat-admin` — removidas do projeto.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url
  const lastModified = new Date()

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/nossosservicos`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/empresas`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/desentupidora-guarulhos-parque-continental.html`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/quemsomos`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
