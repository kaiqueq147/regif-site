import { features } from "@/lib/content";
import { Icon } from "./Icons";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Features() {
  return (
    <section id="recursos" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <SectionHead
        eyebrow="Recursos"
        title={
          <>
            Feito pra você <span className="grad-text">capturar e compartilhar</span>
          </>
        }
        subtitle="Do momento ao GIF pronto em segundos. Sem gravar antes, sem quebrar a cabeça com programa complicado."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <Reveal
            key={f.title}
            delay={(i % 4) * 80}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface/50 p-6 transition-colors hover:border-accent/50 hover:bg-surface"
          >
            <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-sky/10 text-accent transition-transform group-hover:scale-110">
              <Icon name={f.icon} className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold text-text">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
