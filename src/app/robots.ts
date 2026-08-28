import { MetadataRoute } from 'next'
import { site } from '@/lib/site'

export const dynamic = 'force-static'

/**
 * Gera `/robots.txt` no build estático.
 *
 * Substitui o antigo `public/robots.txt`, que listava rotas já removidas e
 * `Allow:` redundantes. Com `output: "export"` esta é a única forma de manter
 * o robots.txt em sincronia com as rotas reais do app.
 *
 * As rotas internas também têm `robots: { index: false, follow: false }` na
 * própria página — o `Disallow` aqui é a segunda camada, não a única.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/seo-check', '/performance-dashboard', '/_next/'],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  }
}
