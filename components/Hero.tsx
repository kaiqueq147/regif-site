import Link from "next/link";
import { AppMock } from "./AppMock";
import { Icon } from "./Icons";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
      {/* background */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -top-32 left-1/4 -z-10 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-20 right-1/4 -z-10 h-80 w-80 rounded-full bg-sky/15 blur-[120px]" aria-hidden="true" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2/60 px-3 py-1 text-xs font-medium text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse-dot" />
            Grave sua tela sem travamento
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Nunca mais perca
            <br />
            <span className="grad-text">um momento</span>.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            O <strong className="text-text">regif</strong> fica gravando sua tela o tempo
            todo, sem atrapalhar. Aconteceu algo bom? Aperte <kbd>uma tecla</kbd> e
            transforme os últimos segundos num GIF pronto pra compartilhar — rapidinho e
            sem complicação.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#download"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-canvas transition-colors hover:bg-accent-hi"
            >
              <Icon name="download" className="h-[18px] w-[18px]" />
              Baixar para Windows
            </Link>
            <Link
              href="#como-funciona"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-2/50 px-6 py-3 text-sm font-semibold text-text transition-colors hover:bg-surface-2"
            >
              Ver como funciona
            </Link>
          </div>

          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {["Grátis para começar", "10 GIFs sem marca d'água", "Windows 10/11"].map((b) => (
              <li key={b} className="inline-flex items-center gap-1.5">
                <Icon name="check" className="h-4 w-4 text-green" />
                {b}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <AppMock />
        </Reveal>
      </div>
    </section>
  );
}
