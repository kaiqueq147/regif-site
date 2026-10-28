import { faqs } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20 sm:py-28">
      <SectionHead
        eyebrow="FAQ"
        title={
          <>
            Perguntas <span className="grad-text">frequentes</span>
          </>
        }
      />

      <div className="space-y-3">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={(i % 3) * 70}>
            <details className="group rounded-2xl border border-border bg-surface/50 px-5 open:bg-surface">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-semibold text-text marker:hidden">
                {f.q}
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-border text-muted transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-muted">{f.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
