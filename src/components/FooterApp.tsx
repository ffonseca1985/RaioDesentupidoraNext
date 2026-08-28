import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, Zap } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import { site, waMessages } from '@/lib/site'

/**
 * Rodapé institucional.
 *
 * Server component: nenhum estado, nenhum evento. A revelação usa o
 * primitivo `Reveal` (CSS puro) — o `motion whileInView` anterior deixava
 * o rodapé inteiro em `opacity: 0` até a hidratação.
 */

const servicos = [
  { label: 'Desentupimento de esgoto', href: '/nossosservicos' },
  { label: 'Desentupimento de pia e ralo', href: '/nossosservicos' },
  { label: 'Desentupimento de vaso sanitário', href: '/nossosservicos' },
  { label: "Limpeza de caixa d'água", href: '/nossosservicos' },
  { label: 'Limpa fossa e sumidouro', href: '/nossosservicos' },
  { label: 'Hidrojateamento e desobstrução de rede', href: '/nossosservicos' },
]

const segmentos = [
  { label: 'Residencial', href: site.segments.residencial.href },
  { label: 'Condomínios', href: site.segments.condominios.href },
  { label: 'Empresas e Indústria', href: site.segments.empresas.href },
]

const empresa = [
  { label: 'Início', href: '/' },
  { label: 'Sobre a Raio', href: '/quemsomos' },
  { label: 'Serviços', href: '/nossosservicos' },
  { label: 'Contato', href: '/contato' },
]

/** Bairros e cidades atendidos — texto indexável, relevante para busca local. */
const areaAtendimento =
  'Guarulhos, São Paulo (Zona Norte e Zona Leste), Arujá, Santa Isabel, Mairiporã e região. ' +
  'Parque Continental, Vila Galvão, Cumbica, Bonsucesso, Pimentas, Taboão, Jardim São Paulo, ' +
  'Vila Augusta, Jardim Bela Vista e demais bairros da Grande São Paulo.'

const linkClass =
  'inline-flex min-h-11 items-center text-sm text-white/70 transition-colors duration-200 ease-out ' +
  'hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-raio-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 rounded'

function ColumnTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={`text-sm font-semibold tracking-tight text-white ${className ?? ''}`}>
      {children}
    </h3>
  )
}

const AppFooter: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ink-950 text-white">
      <div className="container py-16 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Marca + posicionamento */}
          <Reveal className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.07]"
              >
                <Zap className="h-5 w-5 fill-raio-500 text-raio-500" />
              </span>
              <div className="leading-tight">
                <p className="text-base font-semibold tracking-tight text-white">{site.name}</p>
                <p className="text-xs text-white/60">{site.tagline}</p>
              </div>
            </div>

            <p className="mt-5 max-w-measure text-sm leading-relaxed text-white/70">
              Desentupimento e saneamento predial em {site.city} e {site.region}. Atendimento
              emergencial 24h, orçamento fechado antes de iniciar o serviço e garantia por escrito
              em toda execução.
            </p>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {site.commitments.map((item) => (
                <li key={item.label} className="text-sm text-white/70">
                  <span className="nums font-semibold text-white">{item.value}</span>{' '}
                  <span className="text-white/60">{item.label.toLowerCase()}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://www.facebook.com/raiodesentupidoradedetizadora/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da Raio Desentupidora"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] text-white/80 transition-colors duration-200 ease-out hover:bg-white/[0.12] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-raio-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
              >
                <Facebook className="h-[1.125rem] w-[1.125rem]" aria-hidden />
              </a>
              <a
                href="https://www.instagram.com/raiodesentupidora/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Raio Desentupidora"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] text-white/80 transition-colors duration-200 ease-out hover:bg-white/[0.12] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-raio-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
              >
                <Instagram className="h-[1.125rem] w-[1.125rem]" aria-hidden />
              </a>
            </div>
          </Reveal>

          {/* Serviços */}
          <Reveal delay={1} className="lg:col-span-2">
            <ColumnTitle>Serviços</ColumnTitle>
            <ul className="mt-4 space-y-1">
              {servicos.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Segmentos */}
          <Reveal delay={2} className="lg:col-span-2">
            <ColumnTitle>Segmentos</ColumnTitle>
            <ul className="mt-4 space-y-1">
              {segmentos.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <ColumnTitle className="mt-8">Empresa</ColumnTitle>
            <ul className="mt-4 space-y-1">
              {empresa.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Contato */}
          <Reveal delay={3} className="sm:col-span-2 lg:col-span-4">
            <ColumnTitle>Contato</ColumnTitle>
            <ul className="mt-4 space-y-4">
              <li className="flex gap-3">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-raio-400" aria-hidden />
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/50">Telefone</p>
                  <a
                    href={site.phone.tel}
                    className="nums text-base font-semibold text-white hover:text-raio-400"
                  >
                    {site.phone.display}
                  </a>
                </div>
              </li>

              <li className="flex gap-3">
                <MessageCircle className="mt-1 h-4 w-4 shrink-0 text-raio-400" aria-hidden />
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/50">WhatsApp</p>
                  <a
                    href={site.whatsapp.with(waMessages.orcamento)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white hover:text-raio-400"
                  >
                    Falar com um atendente
                  </a>
                </div>
              </li>

              <li className="flex gap-3">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-raio-400" aria-hidden />
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wide text-white/50">E-mail</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="block break-words text-sm font-medium text-white hover:text-raio-400"
                  >
                    {site.email}
                  </a>
                </div>
              </li>

              <li className="flex gap-3">
                <Clock className="mt-1 h-4 w-4 shrink-0 text-raio-400" aria-hidden />
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/50">Horário</p>
                  <p className="text-sm text-white/70">{site.hours}</p>
                </div>
              </li>

              <li className="flex gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-raio-400" aria-hidden />
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/50">Base operacional</p>
                  <address className="text-sm not-italic text-white/70">
                    Rua Nobel Almeida Kuke, 485
                    <br />
                    Guarulhos — SP, 07084-210
                  </address>
                  {/* TODO: confirmar endereço e razão social com o cliente */}
                </div>
              </li>
            </ul>
          </Reveal>
        </div>

        {/* Área de atuação — texto indexável para busca local */}
        <Reveal delay={4} className="mt-14 border-t border-white/10 pt-8">
          <h3 className="text-sm font-semibold tracking-tight text-white">Área de atuação</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/60">{areaAtendimento}</p>
        </Reveal>
      </div>

      {/* Linha final */}
      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-3 py-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {currentYear} {site.legalName}. Todos os direitos reservados.
            {/* TODO: confirmar CNPJ e razão social com o cliente */}
          </p>
          <p>
            {site.city} · {site.region} · Atendimento 24h
          </p>
        </div>
      </div>
    </footer>
  )
}

export default AppFooter
