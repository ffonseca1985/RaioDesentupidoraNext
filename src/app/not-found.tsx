import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { site, waMessages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description:
    "O endereço acessado não existe no site da Raio Desentupidora. Atendimento 24h em Guarulhos e Grande São Paulo.",
  robots: { index: false, follow: true },
};

const saidas = [
  {
    href: "/nossosservicos",
    title: "Serviços",
    body: "Esgoto, pia, ralo, vaso, caixa de gordura, caixa d'água e limpa fossa.",
  },
  {
    href: "/empresas",
    title: "Condomínios e empresas",
    body: "Contrato de manutenção preventiva, laudo técnico e atendimento programado.",
  },
  {
    href: "/contato",
    title: "Contato",
    body: "Orçamento sem custo, fechado antes de iniciar o serviço.",
  },
];

export default function NotFound() {
  return (
    <section className="bg-ink-950">
      <div className="container flex min-h-[70vh] flex-col justify-center py-20 sm:py-24">
        <span className="eyebrow enter text-raio-400">Erro 404</span>
        <h1 className="enter mt-4 text-display-md text-white max-w-measure">
          Esta página não existe
        </h1>
        <p
          className="enter mt-5 text-lede text-white/70 max-w-measure"
          style={{ "--enter-delay": "90ms" } as React.CSSProperties}
        >
          O endereço pode ter mudado ou o link estar incorreto. Se o problema é
          urgente, ligar resolve mais rápido do que procurar no site: o atendimento
          é {site.hours}.
        </p>

        <div
          className="enter mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          style={{ "--enter-delay": "160ms" } as React.CSSProperties}
        >
          <Button href={site.phone.tel} size="lg">
            Ligar {site.phone.display}
          </Button>
          <Button
            href={site.whatsapp.with(waMessages.emergencia)}
            external
            variant="onDark"
            size="lg"
          >
            Chamar no WhatsApp
          </Button>
          <Button href="/" variant="onDarkGhost" size="lg">
            Voltar ao início
          </Button>
        </div>

        <nav
          aria-label="Páginas principais"
          className="enter mt-14 border-t border-white/10 pt-10"
          style={{ "--enter-delay": "220ms" } as React.CSSProperties}
        >
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {saidas.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group block h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-200 ease-out hover:border-white/25 hover:bg-white/[0.08]"
                >
                  <span className="text-base font-semibold text-white">
                    {item.title}
                  </span>
                  <span className="mt-2 block text-sm text-white/60">
                    {item.body}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
