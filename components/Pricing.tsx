import Link from "next/link";
import { plans } from "@/lib/content";
import { Icon } from "./Icons";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Pricing() {
  return (
    <section
      id="precos"
      className="border-y border-border/60 bg-surface/30 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Preços"
          title={
            <>
              Simples e <span className="grad-text">honesto</span>
            </>
          }
          subtitle="Comece de graça. Faça upgrade quando quiser recursos avançados."
        />

        <div className="mx-auto grid max-w-3xl items-start gap-6 sm:grid-cols-2">
          {plans.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 100}
              className={`relative flex h-full flex-col rounded-2xl border p-7 ${
                p.featured
                  ? "border-accent/60 bg-gradient-to-b from-accent/10 to-transparent shadow-xl shadow-accent/10"
                  : "border-border bg-surface"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-canvas">
                  Mais popular
                </span>
              )}
              <h3 className="text-lg font-bold text-text">{p.name}</h3>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-lg font-medium text-muted">R$</span>
                <span className="text-4xl font-extrabold text-text">{p.price}</span>
                <span className="mb-1 text-sm text-muted">{p.per}</span>
              </div>
              <p className="mt-2 text-sm text-muted">{p.desc}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm text-text">
                    <Icon
                      name="check"
                      className="mt-0.5 h-4 w-4 shrink-0 text-green"
                    />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={p.href}
                className={`mt-7 rounded-xl px-4 py-2.5 text-center text-sm font-semibold transition-colors ${
                  p.featured
                    ? "bg-accent text-canvas hover:bg-accent-hi"
                    : "border border-border bg-surface-2/60 text-text hover:bg-surface-2"
                }`}
              >
                {p.cta}
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
