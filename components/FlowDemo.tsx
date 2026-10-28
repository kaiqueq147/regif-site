"use client";

import { useEffect, useRef, useState } from "react";
import { flowSteps } from "@/lib/content";
import { scenes } from "./FlowScenes";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

/** Demo animada do fluxo (4 passos). Avança sozinha; pausa no hover ou fora da tela. */
export function FlowDemo() {
  const [step, setStep] = useState(0);
  const [inView, setInView] = useState(false);
  const [hover, setHover] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    if (root.current) io.observe(root.current);
    return () => io.disconnect();
  }, []);

  const playing = inView && !hover;
  const Scene = scenes[step];

  const next = () => {
    // ponytail: com "reduzir movimento" o fim da animação não avança sozinho — só por clique.
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep((s) => (s + 1) % flowSteps.length);
    }
  };

  return (
    <section id="como-funciona" className="relative scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Como funciona"
          title={
            <>
              Do <span className="grad-text">“nossa!”</span> ao GIF em 4 passos
            </>
          }
          subtitle="Veja o regif em ação: sem gravar nada antes, sem editor pesado."
        />

        <Reveal>
          <div
            ref={root}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]"
          >
            <div role="tablist" aria-label="Passos" className="space-y-3">
              {flowSteps.map((s, i) => {
                const active = i === step;
                return (
                  <button
                    key={s.title}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setStep(i)}
                    className={`relative block w-full overflow-hidden rounded-2xl border p-5 text-left transition ${
                      active
                        ? "border-accent/50 bg-surface-2"
                        : "border-border bg-surface/60 hover:border-border hover:bg-surface-2/60"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                          active ? "bg-accent text-canvas" : "bg-surface-3 text-muted"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span className={`font-semibold ${active ? "text-text" : "text-muted"}`}>
                        {s.title}
                      </span>
                    </span>
                    {active && <p className="mt-3 pl-11 text-sm leading-relaxed text-muted">{s.desc}</p>}
                    {active && (
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-border">
                        <span
                          key={step}
                          className="flow-bar block h-full bg-accent"
                          style={{ animationPlayState: playing ? "running" : "paused" }}
                          onAnimationEnd={next}
                        />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div aria-live="off" className="[&_*]:[animation-play-state:var(--play)]" style={{ ["--play" as string]: playing ? "running" : "paused" }}>
              <Scene key={step} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
