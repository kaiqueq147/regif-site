import Link from "next/link";
import { Brand } from "./Brand";

const cols = [
  {
    title: "Produto",
    links: [
      { href: "#recursos", label: "Recursos" },
      { href: "#formatos", label: "Formatos" },
      { href: "#precos", label: "Preços" },
      { href: "#download", label: "Download" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { href: "#como-funciona", label: "Como funciona" },
      { href: "#faq", label: "FAQ" },
      { href: "#", label: "Changelog" },
      { href: "#", label: "Suporte" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Privacidade" },
      { href: "#", label: "Termos" },
      { href: "#", label: "Licença" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/60 bg-surface/30">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.5fr_2fr]">
        <div>
          <Brand />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Instant replay da sua tela. Capture, edite e compartilhe em segundos.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold text-text">{c.title}</h4>
              <ul className="mt-3 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted transition-colors hover:text-text"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-muted sm:flex-row">
          <span>
            © {new Date().getFullYear()} regif. Feito para quem não quer perder o momento.
          </span>
          <span>Feito com ♥ e Python</span>
        </div>
      </div>
    </footer>
  );
}
