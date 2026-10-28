import { steps } from "@/lib/content";
import { Icon } from "./Icons";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="border-y border-border/60 bg-surface/30 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Como funciona"
          title={
            <>
              Três passos, <span className="grad-text">zero fricção</span>
            </>
          }
          subtitle="Deixe rodando e esqueça. Quando algo acontecer, o regif já gravou."
        />

        <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {steps.map((s, i) => (
            <div key={s.n} className="contents">
              <Reveal
                delay={i * 120}
                className="rounded-2xl border border-border bg-surface p-7"
              >
                <span className="grad-text text-3xl font-extrabold">{s.n}</span>
                <h3 className="mt-3 text-lg font-semibold text-text">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
              </Reveal>
              {i < steps.length - 1 && (
                <div className="hidden items-center justify-center text-border md:flex">
                  <Icon name="arrow" className="h-6 w-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
