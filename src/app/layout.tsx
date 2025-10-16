import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderModern from "@/components/HeaderModern";
import AppFooter from "@/components/FooterApp";
import GoogleTagManagerHeader from "@/components/GoogleAnalytics";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Breadcrumbs from "@/components/Breadcrumbs";
import WebVitals from "@/components/WebVitals";
import MobileOptimizations from "@/components/MobileOptimizations";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";
// Chat temporariamente desabilitado - para usar no futuro
// import { ChatProvider } from '@/components/Chat/ChatProvider'
// import ChatWidget from '@/components/Chat/ChatWidget'

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

// Default metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://www.raiodesentupidora.com.br'),
  title: {
    default: "Raio Desentupidora | Serviços 24h em Guarulhos e Região",
    template: "%s | Raio Desentupidora"
  },
  description: "⭐ Desentupidora 24h em Guarulhos ⭐ Atendimento emergencial, limpeza de caixa d'água, desentupimento de esgoto, pias e ralos. Orçamento GRÁTIS! ✅ Garantia nos serviços",
  keywords: [
    "desentupidora guarulhos",
    "desentupimento 24h",
    "desentupimento emergencial",
    "limpeza de caixa d'água",
    "desentupimento de esgoto",
    "desentupimento de pia",
    "desentupimento de ralo",
    "desentupidora parque continental",
    "desentupidora vila galvão",
    "desentupidora cumbica",
    "empresa desentupimento são paulo",
    "serviços hidráulicos",
    "desentupimento residencial",
    "desentupimento comercial",
    "desentupimento industrial"
  ],
  authors: [{ name: "Raio Desentupidora", url: "https://www.raiodesentupidora.com.br" }],
  creator: "Raio Desentupidora",
  publisher: "Raio Desentupidora",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
    url: 'https://www.raiodesentupidora.com.br',
    siteName: 'Raio Desentupidora',
    title: 'Raio Desentupidora | Serviços 24h em Guarulhos e Região',
    description: '⭐ Desentupidora 24h em Guarulhos ⭐ Atendimento emergencial com garantia. Orçamento GRÁTIS!',
    images: [
      {
        url: 'https://www.raiodesentupidora.com.br/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Raio Desentupidora - Serviços 24h em Guarulhos',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@raiodesentupidora',
    creator: '@raiodesentupidora',
    title: 'Raio Desentupidora | Serviços 24h em Guarulhos e Região',
    description: '⭐ Desentupidora 24h em Guarulhos ⭐ Atendimento emergencial com garantia. Orçamento GRÁTIS!',
    images: ['https://www.raiodesentupidora.com.br/twitter-image.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
  category: 'Serviços',
  classification: 'Desentupimento e Limpeza',
  other: {
    'msapplication-TileColor': '#0284c7',
    'theme-color': '#0284c7',
  },
};

// Enhanced JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.raiodesentupidora.com.br/#organization',
      name: 'Raio Desentupidora',
      alternateName: 'Raio Desentupidora 24h',
      url: 'https://www.raiodesentupidora.com.br',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.raiodesentupidora.com.br/logo.png',
        width: 500,
        height: 200
      },
      image: 'https://www.raiodesentupidora.com.br/og-image.jpg',
      description: 'Empresa especializada em serviços de desentupimento 24h, limpeza de caixa d\'água e serviços hidráulicos em Guarulhos e região.',
      foundingDate: '2009',
      numberOfEmployees: '10-15',
      slogan: 'Desentupimento rápido e eficiente 24h',
      sameAs: [
        'https://www.facebook.com/raiodesentupidoradedetizadora/',
        'https://www.instagram.com/raiodesentupidora/'
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+55-11-98063-9525',
          contactType: 'customer service',
          areaServed: ['BR', 'SP', 'Guarulhos'],
          availableLanguage: 'Portuguese',
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            opens: '00:00',
            closes: '23:59',
            dayOfWeek: [
              'Monday', 'Tuesday', 'Wednesday', 'Thursday', 
              'Friday', 'Saturday', 'Sunday'
            ]
          }
        },
        {
          '@type': 'ContactPoint',
          telephone: '+55-11-98039-9879',
          contactType: 'emergency',
          areaServed: ['BR', 'SP', 'Guarulhos'],
          availableLanguage: 'Portuguese'
        }
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rua Nobel de Almeida Kuke, 485',
        addressLocality: 'Guarulhos',
        addressRegion: 'SP',
        postalCode: '07084-210',
        addressCountry: 'BR'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -23.4538,
        longitude: -46.5297
      },
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: -23.4538,
          longitude: -46.5297
        },
        geoRadius: '30000'
      }
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.raiodesentupidora.com.br/#localbusiness',
      name: 'Raio Desentupidora',
      image: 'https://www.raiodesentupidora.com.br/og-image.jpg',
      telephone: '+55-11-98063-9525',
      email: 'contato@raiodesentupidora.com.br',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rua Nobel de Almeida Kuke, 485',
        addressLocality: 'Guarulhos',
        addressRegion: 'SP',
        postalCode: '07084-210',
        addressCountry: 'BR'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -23.4538,
        longitude: -46.5297
      },
      url: 'https://www.raiodesentupidora.com.br',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday', 'Tuesday', 'Wednesday', 'Thursday', 
          'Friday', 'Saturday', 'Sunday'
        ],
        opens: '00:00',
        closes: '23:59'
      },
      priceRange: '$$',
      currenciesAccepted: 'BRL',
      paymentAccepted: 'Dinheiro, PIX, Cartão de Crédito, Cartão de Débito',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Serviços de Desentupimento',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Desentupimento de Esgoto',
              description: 'Desentupimento de tubulações de esgoto residencial e comercial'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Limpeza de Caixa D\'água',
              description: 'Limpeza completa e desinfecção de caixas d\'água'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Desentupimento de Pia',
              description: 'Desentupimento de pias de cozinha e banheiro'
            }
          }
        ]
      }
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.raiodesentupidora.com.br/#website',
      url: 'https://www.raiodesentupidora.com.br',
      name: 'Raio Desentupidora',
      description: 'Site oficial da Raio Desentupidora - Serviços 24h em Guarulhos e região',
      publisher: {
        '@id': 'https://www.raiodesentupidora.com.br/#organization'
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://www.raiodesentupidora.com.br/search?q={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0284c7" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Google Tag Manager */}
        <GoogleTagManagerHeader />
        
        {/* Critical resource hints for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="//api.whatsapp.com" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/favicon.ico" as="image" type="image/x-icon" />
        <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" as="style" />
        
        {/* Icons and PWA */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Optimized external CSS loading */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer"
          media="all"
        />
        
        {/* JSON-LD Enhanced */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.raiodesentupidora.com.br/#organization",
                  "name": "Raio Desentupidora",
                  "url": "https://www.raiodesentupidora.com.br",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.raiodesentupidora.com.br/logo.png",
                    "width": 512,
                    "height": 512
                  },
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "telephone": "+55-11-98063-9525",
                      "contactType": "emergency",
                      "availableLanguage": "Portuguese",
                      "hoursAvailable": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": [
                          "Monday", "Tuesday", "Wednesday", "Thursday", 
                          "Friday", "Saturday", "Sunday"
                        ],
                        "opens": "00:00",
                        "closes": "23:59"
                      }
                    }
                  ],
                  "sameAs": [
                    "https://www.facebook.com/raiodesentupidora",
                    "https://www.instagram.com/raiodesentupidora"
                  ]
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.raiodesentupidora.com.br/#localbusiness",
                  "name": "Raio Desentupidora",
                  "description": "Empresa especializada em desentupimento 24h, limpeza de caixa d'água e serviços hidráulicos em Guarulhos e região metropolitana de São Paulo.",
                  "url": "https://www.raiodesentupidora.com.br",
                  "telephone": "+55-11-98063-9525",
                  "priceRange": "$$",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Guarulhos",
                    "addressRegion": "SP",
                    "addressCountry": "BR"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": -23.4538,
                    "longitude": -46.5333
                  },
                  "openingHours": "Mo-Su 00:00-23:59",
                  "serviceArea": {
                    "@type": "GeoCircle",
                    "geoMidpoint": {
                      "@type": "GeoCoordinates",
                      "latitude": -23.4538,
                      "longitude": -46.5333
                    },
                    "geoRadius": "50000"
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Serviços de Desentupimento",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Desentupimento de Esgoto",
                          "description": "Serviço de desentupimento de esgoto com equipamentos especializados"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Limpeza de Caixa d'Água",
                          "description": "Limpeza e higienização completa de caixa d'água"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Desentupimento de Pia",
                          "description": "Desentupimento de pias de cozinha e banheiro"
                        }
                      }
                    ]
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "127",
                    "bestRating": "5"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.raiodesentupidora.com.br/#website",
                  "url": "https://www.raiodesentupidora.com.br",
                  "name": "Raio Desentupidora",
                  "description": "Desentupidora 24h em Guarulhos e região metropolitana de São Paulo",
                  "publisher": {
                    "@id": "https://www.raiodesentupidora.com.br/#organization"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://www.raiodesentupidora.com.br/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                }
              ]
            })
          }}
        />
      </head>
      
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider>
          {/* Chat temporariamente desabilitado - para usar no futuro */}
          {/* <ChatProvider> */}
            <WebVitals />
            <MobileOptimizations />
            <PerformanceOptimizer />
            <HeaderModern />
            <Breadcrumbs />
            <main className="flex-grow">
              {children}
            </main>
            <AppFooter />
            {/* <ChatWidget /> */}
          {/* </ChatProvider> */}
        </ThemeProvider>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WCHWRQK"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      </body>
    </html>
  );
}