import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderModern from "@/components/HeaderModern";
import AppFooter from "@/components/FooterApp";
import GoogleTagManagerHeader from "@/components/GoogleAnalytics";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

// Default metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://www.raiodesentupidora.com.br'),
  title: {
    default: "Raio Desentupidora | Serviços 24h em Guarulhos e Região",
    template: "%s | Raio Desentupidora"
  },
  description: "Serviços de desentupimento 24h em Guarulhos e região. Atendimento emergencial, limpeza de caixa d'água, desentupimento de esgoto, pias e ralos.",
  keywords: [
    "desentupidora guarulhos",
    "desentupimento 24h",
    "limpeza de caixa d'água",
    "desentupimento de esgoto",
    "desentupimento emergencial",
    "desentupimento de pia",
    "desentupimento de ralo"
  ],
  authors: [{ name: "Raio Desentupidora" }],
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
    description: 'Serviços profissionais de desentupimento 24h. Atendimento emergencial em Guarulhos e região.',
    images: [
      {
        url: 'https://www.raiodesentupidora.com.br/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Raio Desentupidora',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raio Desentupidora | Serviços 24h em Guarulhos e Região',
    description: 'Serviços profissionais de desentupimento 24h. Atendimento emergencial em Guarulhos e região.',
    images: ['https://www.raiodesentupidora.com.br/twitter-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'Serviços',
};

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Raio Desentupidora',
  alternateName: 'Raio Desentupidora 24h',
  url: 'https://www.raiodesentupidora.com.br',
  logo: 'https://www.raiodesentupidora.com.br/logo.png',
  sameAs: [
    'https://www.facebook.com/raiodesentupidoradedetizadora/',
    'https://www.instagram.com/raiodesentupidora/'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55-11-98063-9525',
    contactType: 'customer service',
    areaServed: 'BR',
    availableLanguage: 'Portuguese'
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Nobel de Almeida Kuke, 485',
    addressLocality: 'Guarulhos',
    addressRegion: 'SP',
    postalCode: '07084-210',
    addressCountry: 'BR'
  }
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0284c7" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* External CSS */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
        <link 
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-WCHWRQK');
              `,
            }}
          />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11562746309"></script>
        <script
            dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-11562746309');
                `
            }}
        />
        
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider>
          <HeaderModern />
          <main className="flex-grow">
            {children}
          </main>
          <AppFooter />
        </ThemeProvider>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WCHWRQK"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* Main app */}
      </body>
    </html>
  );
}