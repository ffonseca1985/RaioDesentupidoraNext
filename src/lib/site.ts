/**
 * Single source of truth for contact data, positioning and proof claims.
 * Every screen imports from here — no phone number or promise is retyped.
 */

export const site = {
  name: "Raio Desentupidora",
  legalName: "Raio Desentupidora",
  tagline: "Desentupimento e saneamento predial 24h",
  city: "Guarulhos",
  region: "Grande São Paulo",

  phone: {
    raw: "+5511980639525",
    display: "(11) 98063-9525",
    tel: "tel:+5511980639525",
  },
  whatsapp: {
    raw: "5511980639525",
    url: "https://wa.me/5511980639525",
    /** Builds a pre-filled WhatsApp link so the first message already has context. */
    with: (message: string) =>
      `https://wa.me/5511980639525?text=${encodeURIComponent(message)}`,
  },
  email: "contato@raiodesentupidora.com.br",
  url: "https://www.raiodesentupidora.com.br",

  hours: "24 horas, todos os dias — inclusive feriados",

  /** Verified operational commitments. Keep this list honest: it is the trust layer. */
  commitments: [
    { label: "Atendimento", value: "24h", detail: "todos os dias, inclusive feriados" },
    /* TODO: confirmar com o cliente — se houver um tempo de resposta que a operação
       realmente sustenta, troque por ele. Um número inventado destrói a confiança
       na primeira vez que não for cumprido. */
    { label: "Deslocamento", value: "prioritário", detail: "a equipe mais próxima é acionada na hora" },
    { label: "Orçamento", value: "sem custo", detail: "fechado antes de iniciar" },
    { label: "Garantia", value: "por escrito", detail: "em todo serviço executado" },
  ],

  segments: {
    residencial: { label: "Residencial", href: "/#segmentos" },
    condominios: { label: "Condomínios", href: "/empresas#condominios" },
    empresas: { label: "Empresas e Indústria", href: "/empresas" },
  },
} as const

/** Pre-written WhatsApp openers, per entry point. */
export const waMessages = {
  emergencia: "Olá! Preciso de atendimento emergencial de desentupimento.",
  orcamento: "Olá! Gostaria de um orçamento para desentupimento.",
  corporativo:
    "Olá! Represento uma empresa/condomínio e gostaria de falar sobre contrato de manutenção preventiva.",
} as const
