"use client"

import { useState } from 'react'
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

import { Section, SectionHeading } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Badge, { LiveDot } from '@/components/ui/Badge'
import Reveal from '@/components/ui/Reveal'
import { site, waMessages } from '@/lib/site'
import { sendMessage } from '@/services/messageSevice'
import { cn } from '@/lib/utils'

/* Endereço da sede — não vive em site.ts porque só esta seção o usa. */
/* TODO: confirmar com o cliente */
const address = {
  street: 'Rua Nobel Almeida Kuke, 485',
  city: 'Guarulhos — SP',
  zip: 'CEP 07084-210',
}

type Field = 'name' | 'phone' | 'email' | 'message'
type Errors = Partial<Record<Field, string>>

interface FormState {
  name: string
  phone: string
  email: string
  property: string
  message: string
}

const emptyForm: FormState = {
  name: '',
  phone: '',
  email: '',
  property: '',
  message: '',
}

/** Máscara BR escrita à mão: react-input-mask depende de findDOMNode, removido no React 19. */
function maskPhone(value: string) {
  const d = value.replace(/\D/g, '').slice(0, 11)
  if (d.length === 0) return ''
  if (d.length <= 2) return `(${d}`
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

const digits = (value: string) => value.replace(/\D/g, '')

function validate(form: FormState): Errors {
  const errors: Errors = {}
  if (form.name.trim().length < 2) errors.name = 'Informe seu nome para sabermos com quem falamos.'
  if (digits(form.phone).length < 10) errors.phone = 'Informe um telefone com DDD, ex.: (11) 98063-9525.'
  if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
    errors.email = 'Esse e-mail parece incompleto.'
  if (form.message.trim().length < 5)
    errors.message = 'Descreva em uma frase o que está acontecendo.'
  return errors
}

/** Monta a primeira mensagem do WhatsApp já com o contexto do chamado. */
function buildWhatsAppMessage(form: FormState) {
  const lines = [
    'Olá! Solicito orçamento pelo site.',
    '',
    `Nome: ${form.name.trim()}`,
    `Telefone: ${form.phone.trim()}`,
  ]
  if (form.email.trim()) lines.push(`E-mail: ${form.email.trim()}`)
  if (form.property) lines.push(`Local: ${form.property}`)
  lines.push('', `Situação: ${form.message.trim()}`)
  return lines.join('\n')
}

const fieldIds: Record<Field, string> = {
  name: 'contato-nome',
  phone: 'contato-telefone',
  email: 'contato-email',
  message: 'contato-mensagem',
}

const controlBase =
  'w-full rounded-xl border bg-canvas px-3.5 text-base text-content ' +
  'placeholder:text-content-subtle transition-colors duration-200 ease-out'

const controlTone = (invalid: boolean) =>
  invalid
    ? 'border-emergency-500 hover:border-emergency-500'
    : 'border-hairline hover:border-ink-300 dark:hover:border-ink-700'

function FieldError({ id, children }: { id: string; children?: string }) {
  if (!children) return null
  return (
    <p id={id} className="mt-1.5 text-sm text-emergency-600 dark:text-emergency-400">
      {children}
    </p>
  )
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(emptyForm)
  const [errors, setErrors] = useState<Errors>({})
  const [attempted, setAttempted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const update = (field: keyof FormState, value: string) => {
    const next = { ...form, [field]: value }
    setForm(next)
    if (attempted) setErrors(validate(next))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const found = validate(form)
    setErrors(found)
    setAttempted(true)

    const firstInvalid = (Object.keys(found) as Field[])[0]
    if (firstInvalid) {
      document.getElementById(fieldIds[firstInvalid])?.focus()
      return
    }

    setIsSubmitting(true)

    /* Abre o WhatsApp ainda dentro do gesto do usuário — se esperarmos o await,
       o bloqueador de pop-up do Safari/iOS cancela a janela. */
    window.open(site.whatsapp.with(buildWhatsAppMessage(form)), '_blank', 'noopener,noreferrer')

    /* Registro paralelo pelo endpoint de e-mail que já existe (site estático,
       sem backend próprio). Falha aqui não bloqueia o lead: o WhatsApp já abriu. */
    try {
      await sendMessage({
        name: form.name.trim(),
        email: form.email.trim(),
        tel: form.phone.trim(),
        message: [form.property && `Local: ${form.property}`, form.message.trim()]
          .filter(Boolean)
          .join(' — '),
      })
    } catch {
      /* silencioso por design */
    }

    setIsSubmitting(false)
    setSubmitted(true)
  }

  const resetForm = () => {
    setForm(emptyForm)
    setErrors({})
    setAttempted(false)
    setSubmitted(false)
  }

  return (
    <Section id="contato" className="bg-surface">
      <SectionHeading
        eyebrow="Contato"
        title="Fale com quem vai atender"
        description="Emergência: ligue ou chame no WhatsApp — ninguém precisa preencher formulário com água subindo. Para orçamento programado, o formulário chega com o contexto já escrito."
      />

      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* ---------------- Rota 1: contato direto (urgência) ---------------- */}
        <Reveal className="order-first lg:order-last">
          <Card className="h-full border-transparent bg-ink-950 p-6 text-white sm:p-8">
            <Badge tone="onDark">
              <LiveDot />
              Atendimento agora
            </Badge>

            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
              Precisa de atendimento imediato
            </h3>
            <p className="mt-2 text-white/65">
              Fala direto com a operação. Sem formulário, sem espera de retorno.
            </p>

            <a
              href={site.phone.tel}
              className="mt-6 block rounded-xl border border-white/15 bg-white/[0.06] px-5 py-4 transition-colors duration-200 ease-out hover:bg-white/[0.12] focus-visible:ring-offset-ink-950"
            >
              <span className="text-xs uppercase tracking-[0.16em] text-white/50">Telefone</span>
              <span className="mt-1 block text-2xl font-semibold tracking-tight text-white nums">
                {site.phone.display}
              </span>
            </a>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Button href={site.phone.tel} variant="primary" size="lg" className="w-full">
                <Phone className="h-4 w-4" aria-hidden />
                Ligar agora
              </Button>
              <Button
                href={site.whatsapp.with(waMessages.emergencia)}
                external
                variant="onDark"
                size="lg"
                className="w-full"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                WhatsApp
              </Button>
            </div>

            <dl className="mt-8 space-y-4 border-t border-white/10 pt-6 text-sm">
              <div className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-raio-400" aria-hidden />
                <div>
                  <dt className="font-medium text-white">Horário</dt>
                  <dd className="text-white/60">{site.hours}</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-raio-400" aria-hidden />
                <div>
                  <dt className="font-medium text-white">E-mail</dt>
                  <dd>
                    <a
                      href={`mailto:${site.email}`}
                      className="inline-flex min-h-11 items-center break-all text-white/60 underline-offset-4 hover:text-white hover:underline focus-visible:ring-offset-ink-950"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-raio-400" aria-hidden />
                <div>
                  <dt className="font-medium text-white">Base operacional</dt>
                  {/* TODO: confirmar com o cliente */}
                  <dd className="text-white/60">
                    {address.street}
                    <br />
                    {address.city} · {address.zip}
                  </dd>
                </div>
              </div>
            </dl>
          </Card>
        </Reveal>

        {/* ---------------- Rota 2: formulário ---------------- */}
        <Reveal delay={1}>
          <Card variant="elevated" className="h-full p-6 sm:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-start justify-center py-6">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-raio-50 dark:bg-raio-950/60"
                  aria-hidden
                >
                  <CheckCircle2 className="h-6 w-6 text-raio-600 dark:text-raio-400" />
                </span>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-content">
                  Pedido registrado
                </h3>
                <p className="mt-3 max-w-measure-sm text-content-muted">
                  Abrimos o WhatsApp com seus dados já preenchidos. Se a janela não abriu,
                  use o botão abaixo ou ligue para {site.phone.display}.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button
                    href={site.whatsapp.with(buildWhatsAppMessage(form))}
                    external
                    variant="secondary"
                  >
                    Abrir WhatsApp
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Button>
                  <Button onClick={resetForm} variant="ghost" type="button">
                    Enviar outro pedido
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-semibold tracking-tight text-content">
                  Pedir orçamento
                </h3>
                <p className="mt-2 text-content-muted">
                  Três campos. O orçamento é sem custo e fechado antes de iniciar o serviço.
                </p>

                <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                  <div>
                    <label
                      htmlFor={fieldIds.name}
                      className="mb-1.5 block text-sm font-medium text-content"
                    >
                      Nome
                    </label>
                    <input
                      id={fieldIds.name}
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      autoComplete="name"
                      required
                      aria-invalid={errors.name ? true : undefined}
                      aria-describedby={errors.name ? `${fieldIds.name}-erro` : undefined}
                      className={cn(controlBase, controlTone(!!errors.name), 'h-11')}
                    />
                    <FieldError id={`${fieldIds.name}-erro`}>{errors.name}</FieldError>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor={fieldIds.phone}
                        className="mb-1.5 block text-sm font-medium text-content"
                      >
                        Telefone com WhatsApp
                      </label>
                      <input
                        id={fieldIds.phone}
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        value={form.phone}
                        onChange={(e) => update('phone', maskPhone(e.target.value))}
                        autoComplete="tel-national"
                        placeholder="(11) 90000-0000"
                        required
                        aria-invalid={errors.phone ? true : undefined}
                        aria-describedby={errors.phone ? `${fieldIds.phone}-erro` : undefined}
                        className={cn(controlBase, controlTone(!!errors.phone), 'h-11 nums')}
                      />
                      <FieldError id={`${fieldIds.phone}-erro`}>{errors.phone}</FieldError>
                    </div>

                    <div>
                      <label
                        htmlFor={fieldIds.email}
                        className="mb-1.5 block text-sm font-medium text-content"
                      >
                        E-mail{' '}
                        <span className="font-normal text-content-subtle">(opcional)</span>
                      </label>
                      <input
                        id={fieldIds.email}
                        name="email"
                        type="email"
                        inputMode="email"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        autoComplete="email"
                        placeholder="para receber o orçamento por escrito"
                        aria-invalid={errors.email ? true : undefined}
                        aria-describedby={errors.email ? `${fieldIds.email}-erro` : undefined}
                        className={cn(controlBase, controlTone(!!errors.email), 'h-11')}
                      />
                      <FieldError id={`${fieldIds.email}-erro`}>{errors.email}</FieldError>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contato-local"
                      className="mb-1.5 block text-sm font-medium text-content"
                    >
                      Tipo de imóvel{' '}
                      <span className="font-normal text-content-subtle">(opcional)</span>
                    </label>
                    <select
                      id="contato-local"
                      name="property"
                      value={form.property}
                      onChange={(e) => update('property', e.target.value)}
                      className={cn(controlBase, controlTone(false), 'h-11')}
                    >
                      <option value="">Não sei / prefiro explicar</option>
                      <option value="Residência">Residência</option>
                      <option value="Condomínio">Condomínio</option>
                      <option value="Empresa ou indústria">Empresa ou indústria</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor={fieldIds.message}
                      className="mb-1.5 block text-sm font-medium text-content"
                    >
                      O que está acontecendo
                    </label>
                    <textarea
                      id={fieldIds.message}
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      required
                      placeholder="Ex.: pia da cozinha entupida desde ontem, água voltando pelo ralo."
                      aria-invalid={errors.message ? true : undefined}
                      aria-describedby={
                        errors.message ? `${fieldIds.message}-erro` : 'contato-mensagem-dica'
                      }
                      className={cn(controlBase, controlTone(!!errors.message), 'min-h-[7rem] resize-y py-3')}
                    />
                    {errors.message ? (
                      <FieldError id={`${fieldIds.message}-erro`}>{errors.message}</FieldError>
                    ) : (
                      <p id="contato-mensagem-dica" className="mt-1.5 text-sm text-content-subtle">
                        Quanto mais específico, mais preciso é o orçamento.
                      </p>
                    )}
                  </div>

                  <Button type="submit" size="lg" isLoading={isSubmitting} className="w-full">
                    {isSubmitting ? 'Enviando…' : 'Enviar pedido pelo WhatsApp'}
                    {!isSubmitting && <ArrowRight className="h-4 w-4" aria-hidden />}
                  </Button>

                  <p className="text-sm text-content-subtle">
                    Ao enviar, abrimos uma conversa no WhatsApp com esses dados. Usamos seu
                    contato apenas para responder este pedido.
                  </p>
                </form>
              </>
            )}
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}
