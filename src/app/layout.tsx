import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { bootScript } from "@/lib/boot";
import { site } from "@/lib/site";
import HeaderModern from "@/components/HeaderModern";
import AppFooter from "@/components/FooterApp";
import MobileActionBar from "@/components/MobileActionBar";
import GoogleTagManagerHeader from "@/components/GoogleAnalytics";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Breadcrumbs from "@/components/Breadcrumbs";
import WebVitals from "@/components/WebVitals";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";

// Optimized font loading
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: false,
  fallback: ['ui-monospace', 'monospace'],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Raio Desentupidora | Desentupimento 24h em Guarulhos e Grande SP",
    template: "%s | Raio Desentupidora"
  },
  description:
    "Desentupidora 24h em Guarulhos e Grande São Paulo. Desentupimento de esgoto, pias, ralos e vasos, limpeza de caixa d'água e limpa fossa. Atendimento residencial e corporativo, orçamento fechado antes de iniciar e garantia por escrito.",
  applicationName: site.name,
  keywords: [
    "desentupidora guarulhos",
    "desentupimento 24h",
    "desentupimento emergencial",
    "desentupidora grande são paulo",
    "limpeza de caixa d'água",
    "desentupimento de esgoto",
    "desentupimento de pia",
    "desentupimento de ralo",
    "limpa fossa",
    "desentupidora para condomínio",
    "manutenção preventiva hidráulica",
    "desentupimento residencial",
    "desentupimento comercial",
    "desentupimento industrial",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  appleWebApp: {
    capable: true,
    title: site.name,
    statusBarStyle: 'default',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: site.url,
    siteName: site.name,
    title: "Raio Desentupidora | Desentupimento 24h em Guarulhos e Grande SP",
    description:
      "Atendimento 24h para emergências residenciais e contratos de manutenção para condomínios, empresas e indústria. Orçamento fechado antes de iniciar.",
    // TODO: confirmar com o cliente — não existe /og-image.jpg em public/.
    // Assim que a arte 1200x630 for entregue, adicionar `images` aqui e em `twitter`.
  },
  twitter: {
    card: 'summary_large_image',
    title: "Raio Desentupidora | Desentupimento 24h em Guarulhos e Grande SP",
    description:
      "Atendimento 24h para emergências residenciais e contratos de manutenção para condomínios, empresas e indústria.",
  },
  // TODO: confirmar com o cliente — inserir o código real do Google Search Console.
  // verification: { google: '<código real do Search Console>' },
  category: 'Serviços',
  classification: 'Desentupimento e saneamento predial',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0a1424' },
    { media: '(prefers-color-scheme: dark)', color: '#0a1424' },
  ],
};

/**
 * NAP (name / address / phone) do negócio.
 *
 * Telefone, e-mail, horário e URL vêm de `site.ts` — nunca redigitados.
 * O endereço não está em `site.ts` (não é usado na interface); fica local aqui.
 * TODO: confirmar com o cliente o endereço, as coordenadas e os perfis sociais
 * antes de publicar — NAP divergente prejudica o ranqueamento local.
 */
const address = {
  streetAddress: 'Rua Nobel de Almeida Kuke, 485',
  addressLocality: 'Guarulhos',
  addressRegion: 'SP',
  postalCode: '07084-210',
  addressCountry: 'BR',
} as const

const geo = { latitude: -23.4538, longitude: -46.5297 } as const

const socialProfiles = [
  'https://www.facebook.com/raiodesentupidoradedetizadora/',
  'https://www.instagram.com/raiodesentupidora/',
]

/** Catálogo de serviços — espelha `src/components/sections/Services.tsx`. */
const servicesOffered = [
  {
    name: 'Desentupimento de esgoto',
    description:
      'Desobstrução de redes de esgoto residenciais, comerciais e industriais com equipamento de alta pressão.',
  },
  {
    name: 'Desentupimento de pias',
    description: 'Pias de cozinha, banheiro e lavanderia, sem quebra de piso.',
  },
  {
    name: 'Desentupimento de vaso sanitário',
    description: 'Remoção de obstruções em vasos sanitários com higienização ao final.',
  },
  {
    name: "Limpeza de caixa d'água",
    description:
      "Limpeza e desinfecção de caixas d'água e reservatórios conforme normas sanitárias, com laudo técnico.",
  },
  {
    name: 'Desentupimento de ralos',
    description: 'Ralos de banheiro, cozinha, área de serviço e garagem.',
  },
  {
    name: 'Limpa fossa',
    description: 'Esgotamento de fossas sépticas com caminhão limpa-fossa e descarte ambientalmente correto.',
  },
]

const areaServed = [
  { '@type': 'City', name: 'Guarulhos', address: { '@type': 'PostalAddress', addressRegion: 'SP', addressCountry: 'BR' } },
  { '@type': 'City', name: 'São Paulo', address: { '@type': 'PostalAddress', addressRegion: 'SP', addressCountry: 'BR' } },
  { '@type': 'AdministrativeArea', name: site.region },
]

const openingHours = {
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  opens: '00:00',
  closes: '23:59',
}

/**
 * JSON-LD único do site.
 *
 * Removido deliberadamente: `aggregateRating` (4.9 / 127 avaliações), que não tinha
 * origem em nenhuma base de avaliações real. Review schema fabricado viola as
 * diretrizes de conteúdo estruturado do Google e é motivo de ação manual.
 * Se houver perfil real (Google Business Profile), a nota deve vir de lá.
 */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${site.url}/#organization`,
      name: site.name,
      legalName: site.legalName,
      url: site.url,
      logo: {
        '@type': 'ImageObject',
        url: `${site.url}/icon.svg`,
      },
      description: `${site.tagline} em ${site.city} e ${site.region}. Atendimento residencial, condominial, comercial e industrial.`,
      slogan: site.tagline,
      email: site.email,
      telephone: site.phone.raw,
      sameAs: socialProfiles,
      address: { '@type': 'PostalAddress', ...address },
      areaServed,
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: site.phone.raw,
          contactType: 'customer service',
          areaServed: 'BR',
          availableLanguage: 'Portuguese',
          hoursAvailable: openingHours,
        },
        {
          '@type': 'ContactPoint',
          telephone: site.phone.raw,
          contactType: 'emergency',
          areaServed: 'BR',
          availableLanguage: 'Portuguese',
          hoursAvailable: openingHours,
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${site.url}/#localbusiness`,
      name: site.name,
      parentOrganization: { '@id': `${site.url}/#organization` },
      url: site.url,
      description: `${site.tagline}. Atendimento ${site.hours}, em ${site.city} e ${site.region}.`,
      telephone: site.phone.raw,
      email: site.email,
      address: { '@type': 'PostalAddress', ...address },
      geo: { '@type': 'GeoCoordinates', ...geo },
      areaServed,
      openingHoursSpecification: [openingHours],
      priceRange: '$$',
      currenciesAccepted: 'BRL',
      paymentAccepted: 'Dinheiro, PIX, Cartão de Crédito, Cartão de Débito',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Serviços de desentupimento e saneamento predial',
        itemListElement: servicesOffered.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            description: service.description,
            areaServed,
            provider: { '@id': `${site.url}/#organization` },
          },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: 'pt-BR',
      description: `${site.tagline} em ${site.city} e ${site.region}.`,
      publisher: { '@id': `${site.url}/#organization` },
      // `SearchAction` removida: o site não tem busca interna, a ação era fictícia.
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Runs before first paint: resolves the theme (no flash) and boots the
            CSS scroll-reveal engine so content never waits on hydration. */}
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />

        {/* Google Tag Manager */}
        {/* Só o que é realmente contatado em runtime. As fontes são auto-hospedadas
            pelo next/font no build — preconnect para o Google seria handshake TLS à toa. */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider>
          <WebVitals />
          <PerformanceOptimizer />
          <HeaderModern />
          <Breadcrumbs />
          <main className="flex-grow">
            {children}
          </main>
          <AppFooter />
          <MobileActionBar />
        </ThemeProvider>

        <GoogleTagManagerHeader />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K5R9M4QD"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      </body>
    </html>
  );
}
