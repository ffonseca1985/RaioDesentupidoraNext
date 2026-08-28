import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import { Button } from "@/components/ui/Button";
import { site, waMessages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato e orçamento",
  description:
    "Fale com a Raio Desentupidora. Atendimento 24h em Guarulhos e Grande São Paulo, por telefone ou WhatsApp. Orçamento sem custo, fechado antes de iniciar o serviço.",
  keywords: [
    "contato desentupidora guarulhos",
    "orçamento desentupimento",
    "desentupidora 24h telefone",
  ],
  alternates: { canonical: "/contato" },
  openGraph: {
    url: "/contato",
    title: "Contato e orçamento | Raio Desentupidora",
    description:
      "Atendimento 24h em Guarulhos e Grande São Paulo. Orçamento sem custo, fechado antes de iniciar.",
  },
};

export default function Contato() {
  return (
    <>
      <section className="bg-ink-950">
        <div className="container py-16 sm:py-20 lg:py-24">
          <span className="eyebrow enter text-raio-400">Contato</span>
          <h1 className="enter mt-4 text-display-md text-white max-w-measure">
            Fale com a equipe agora
          </h1>
          <p
            className="enter mt-5 text-lede text-white/70 max-w-measure"
            style={{ "--enter-delay": "90ms" } as React.CSSProperties}
          >
            Atendimento {site.hours}, em {site.city} e na {site.region}. Para
            emergência, ligar é o caminho mais rápido. Para orçamento programado,
            contrato de manutenção ou laudo técnico, use o WhatsApp ou o formulário.
          </p>
          <div
            className="enter mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ "--enter-delay": "160ms" } as React.CSSProperties}
          >
            <Button href={site.phone.tel} size="lg">
              Ligar {site.phone.display}
            </Button>
            <Button
              href={site.whatsapp.with(waMessages.orcamento)}
              external
              variant="onDark"
              size="lg"
            >
              WhatsApp
            </Button>
          </div>
          <p
            className="enter mt-6 text-sm text-white/55"
            style={{ "--enter-delay": "220ms" } as React.CSSProperties}
          >
            E-mail:{" "}
            <a
              href={`mailto:${site.email}`}
              className="underline decoration-white/30 underline-offset-4 hover:text-white"
            >
              {site.email}
            </a>
          </p>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
