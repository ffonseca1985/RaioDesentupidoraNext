import type { Metadata } from "next";
import Home from "../page";

/**
 * URL LEGADA — duplicata exata da home (`/`).
 *
 * "desintupidora" é a grafia errada de "desentupidora"; a rota existe para
 * capturar links e buscas com o erro de digitação. Renderiza a home e aponta
 * o canonical para `/`, consolidando todos os sinais na URL correta.
 *
 * Sem `noindex`: o canonical sozinho é o sinal correto para duplicata — a
 * combinação com `noindex` é contraditória e descarta a autoridade dos links.
 * O ideal é um 301 `/desintupidora → /` no host; `output: "export"` não
 * suporta `redirects()` no next.config.
 */
export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function Desintupidora() {
  return <Home />;
}
