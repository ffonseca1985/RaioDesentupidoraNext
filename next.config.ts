import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  poweredByHeader: false,

  images: {
    // Export estático: não há otimizador de imagem em runtime. Com
    // `unoptimized: true` todo o resto da config de imagem (deviceSizes,
    // imageSizes, formats, minimumCacheTTL, contentSecurityPolicy) é ignorado
    // pelo Next — era ruído. `domains` também estava deprecado no Next 15.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "d36p6ty9wanxdj.cloudfront.net" },
    ],
  },

  experimental: {
    // Reescreve os barrel imports destes pacotes para imports diretos,
    // habilitando tree-shaking real de ícones e de motion.
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  // Sem override de webpack de propósito.
  //
  // A config anterior forçava `splitChunks.cacheGroups.vendor` com
  // `test: /node_modules/` e `name: 'vendors'`, jogando TODO node_modules num
  // único chunk carregado em todas as rotas — era essa a origem dos ~257 kB de
  // JS compartilhado. O split padrão do Next 15 separa framework / libs
  // grandes / commons e permite que uma dependência usada em uma rota só
  // (framer-motion, por exemplo) fique num chunk daquela rota.
  //
  // Também havia `optimization.sideEffects = false` global, que afirma para o
  // webpack que NENHUM módulo do grafo tem efeito colateral. É uma mentira
  // perigosa: autoriza descartar imports de CSS e polyfills que existem só pelo
  // efeito. O Next já define `sideEffects` e `usedExports` corretamente por
  // pacote a partir do `package.json` de cada um.
};

export default nextConfig;
