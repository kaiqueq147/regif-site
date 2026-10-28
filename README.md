# regif — site

Landing page de vendas do **regif**, construída com **Next.js (App Router)**, **React 19**, **TypeScript** e **Tailwind CSS v4**.

## Rodar localmente

```bash
npm install      # já instalado pelo scaffold
npm run dev      # http://localhost:3000
```

## Scripts

| Comando         | O que faz                                  |
| --------------- | ------------------------------------------ |
| `npm run dev`   | Servidor de desenvolvimento com hot reload |
| `npm run build` | Build de produção                          |
| `npm run start` | Sobe o build de produção                   |
| `npm run lint`  | ESLint                                     |

## Estrutura

```
app/
  layout.tsx        # fonte Inter, metadata/SEO, <html>/<body>
  page.tsx          # monta as seções da landing
  globals.css       # tokens de design (@theme), keyframes e utilitários
  icon.svg          # favicon da marca (detectado pelo Next)
components/
  Nav.tsx           # navbar fixa + menu mobile (client)
  Hero.tsx          # headline + CTAs
  AppMock.tsx       # mock animado da janela do editor
  Stats.tsx         # números com count-up (client)
  Features.tsx      # grade de recursos
  HowItWorks.tsx    # 3 passos
  Formats.tsx       # formatos de saída
  Pricing.tsx       # planos Free / Pro / Studio
  Faq.tsx           # perguntas frequentes (<details>)
  DownloadCta.tsx   # chamada final de download
  Footer.tsx        # rodapé
  SectionHead.tsx   # cabeçalho reutilizável de seção
  Reveal.tsx        # animação de entrada no scroll (IntersectionObserver)
  Brand.tsx         # logo
  Icons.tsx         # ícones SVG inline
lib/
  content.ts        # TODO o conteúdo (textos, features, planos, FAQ) num só lugar
```

## Como manter

- **Textos, recursos, planos e FAQ:** edite apenas `lib/content.ts`. As seções renderizam a partir desses dados.
- **Cores e animações:** ajuste os tokens em `app/globals.css` no bloco `@theme` (ex.: `--color-accent`). As classes utilitárias (`bg-accent`, `text-muted`, etc.) seguem automaticamente.
- **Nova seção:** crie um componente em `components/` e adicione em `app/page.tsx`.

A paleta segue o app regif (azul `#6c8cff`, rosa `#f472b6`, ciano `#22d3ee`, verde `#39d353`).

## Deploy

Compatível com Vercel (zero config) ou qualquer host Node. Para exportação estática, rode `npm run build`.
