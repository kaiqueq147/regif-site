import { formats } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Formats() {
  return (
    <section id="formatos" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <SectionHead
        eyebrow="Formatos"
        title={
          <>
            Um clipe, <span className="grad-text">cinco saídas</span>
          </>
        }
        subtitle="Escolha o formato ideal para cada destino — redes sociais, chat, Discord ou portfólio."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {formats.map((f, i) => (
          <Reveal
            key={f.tag}
            delay={(i % 5) * 70}
            className="rounded-2xl border border-border bg-surface/50 p-5 text-center transition-colors hover:border-accent/50"
          >
            <span className="grad-text text-2xl font-extrabold">{f.tag}</span>
            <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
