import { oldWay } from "@/lib/content";
import { Icon } from "./Icons";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Versus() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHead
          eyebrow="Por que regif"
          title={
            <>
              Pare de perder o <span className="grad-text">melhor momento</span>
            </>
          }
          subtitle="O momento acontece uma vez só. Quando você lembra de gravar, ele já passou."
        />

        <div className="grid gap-5 md:grid-cols-2">
          <Reveal className="rounded-2xl border border-border bg-surface/60 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">O jeito antigo</h3>
            <ul className="mt-5 space-y-3">
              {oldWay.map((t, i) => (
                <li key={t} className="flex items-start gap-3 text-sm text-muted">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-surface-3 text-[11px]">
                    {i + 1}
                  </span>
                  <span className="relative">
                    {t}
                    <i className="flow-strike absolute inset-x-0 top-1/2 h-px bg-muted/70" style={{ animationDelay: `${0.3 + i * 0.25}s` }} />
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-muted/80">≈ 10 minutos, e o clipe nem era tão bom.</p>
          </Reveal>

          <Reveal
            delay={120}
            className="relative overflow-hidden rounded-2xl border border-accent/50 bg-gradient-to-b from-accent/10 to-surface p-6 shadow-xl shadow-accent/10"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">Com o regif</h3>
            <div className="mt-5 flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface-3 text-lg font-extrabold shadow-[0_5px_0_#07080b]">
                F8
              </span>
              <p className="text-2xl font-extrabold tracking-tight">Aperte uma tecla.</p>
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              {["Já estava gravando por você", "Só os últimos segundos, sem lotar o disco", "Corte, legenda e GIF no mesmo lugar"].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <Icon name="check" className="h-4 w-4 shrink-0 text-green" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-accent-hi">≈ 10 segundos.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
