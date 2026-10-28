import { Icon } from "./Icons";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const TEXT = "olha esse nego mano";

// Cada item acende no seu quarto do ciclo de 12s (ver .cap-step em globals.css).
const steps = [
  { t: "Digite o texto", d: "A legenda aparece no preview enquanto você escreve." },
  { t: "Escolha o estilo", d: "Barra branca com texto preto, ou Impact com contorno." },
  { t: "Posicione", d: "Topo, centro ou rodapé. A fonte se ajusta sozinha (Auto)." },
  { t: "Salve", d: "A legenda é gravada no arquivo final, em qualquer formato." },
];

/** Dois textos empilhados na mesma célula; um aparece e o outro some (cap-swap-*). */
function Swap({ a, b, ka, kb }: { a: string; b: string; ka: string; kb: string }) {
  return (
    <span className="grid">
      <span className={`${ka} [grid-area:1/1]`}>{a}</span>
      <span className={`${kb} [grid-area:1/1]`}>{b}</span>
    </span>
  );
}

function Select({ label, ring, children }: { label: string; ring?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-[11px] sm:text-xs">
      <span className="w-14 shrink-0 text-muted">{label}</span>
      <span className={`${ring ?? ""} flex flex-1 items-center justify-between rounded-md border border-border bg-canvas px-2.5 py-1.5 text-text`}>
        {children}
        <span className="text-muted">▾</span>
      </span>
    </div>
  );
}

export function CaptionDemo() {
  return (
    <section id="legendas" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Legendas"
          title={
            <>
              Legenda estilo meme, <span className="grad-text">ao vivo</span>
            </>
          }
          subtitle="Digite e veja aparecer no clipe na hora. O que você vê no preview é o que vai pro GIF."
        />

        <Reveal className="grid items-center gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <ol className="space-y-3">
            {steps.map((s, i) => (
              <li
                key={s.t}
                className="cap-anim"
                aria-label={`${i + 1}. ${s.t}`}
              >
                <div
                  className="cap-step flex items-start gap-3 rounded-2xl border p-4"
                  style={{ animationDelay: i ? `-${12 - i * 3}s` : undefined }}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface-3 text-sm font-bold text-text">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-text">{s.t}</p>
                    <p className="mt-0.5 text-sm text-muted">{s.d}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div
            className="cap-anim relative overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/50"
            role="img"
            aria-label="Demonstração: o texto da legenda é digitado, aparece no preview, muda de estilo e de posição e é salvo no GIF"
          >
            <div className="flex items-center gap-3 border-b border-border/70 bg-surface-2 px-4 py-2.5">
              <span className="flex gap-1.5">
                <i className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <i className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <i className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </span>
              <span className="truncate text-xs text-muted">regif — editar clipe antes de salvar</span>
            </div>

            <div className="grid gap-3 p-3 sm:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
              {/* preview */}
              <div className="relative flex aspect-[4/3] flex-col overflow-hidden rounded-xl bg-canvas sm:aspect-auto sm:min-h-[260px]">
                {/* estilo "Barra branca": faixa acima da imagem */}
                <div className="cap-bar shrink-0 overflow-hidden bg-white" style={{ maxHeight: "3rem" }}>
                  <p className="px-3 py-2 text-center text-[11px] font-extrabold uppercase text-black sm:text-sm">
                    <span className="cap-type inline-block whitespace-nowrap">{TEXT}</span>
                  </p>
                </div>

                <div className="relative flex-1 overflow-hidden">
                  <span className="absolute left-[14%] top-[26%] h-24 w-24 rounded-full bg-accent/60 blur-xl animate-blob" />
                  <span className="absolute right-[16%] top-[14%] h-20 w-20 rounded-full bg-sky/50 blur-xl animate-blob [animation-delay:-6s]" />
                  <span className="absolute bottom-[10%] left-[44%] h-28 w-28 rounded-full bg-cyan/40 blur-2xl animate-blob [animation-delay:-12s]" />

                  {/* estilo "Impact": texto com contorno sobre a imagem */}
                  <p className="cap-impact absolute inset-x-0 px-3 text-center text-sm font-black uppercase tracking-wide text-white [text-shadow:-2px_-2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000,2px_2px_0_#000] sm:text-xl">
                    {TEXT}
                  </p>

                  <span className="cap-badge absolute right-2 top-2 inline-flex items-center gap-1 rounded-full border border-green/40 bg-canvas/80 px-2.5 py-1 text-[10px] font-semibold text-green backdrop-blur sm:text-xs">
                    <Icon name="check" className="h-3 w-3" />
                    Legenda no GIF
                  </span>
                </div>
              </div>

              {/* painel "Legenda" */}
              <div className="flex flex-col gap-3 rounded-xl border border-border bg-surface-2/60 p-3">
                <p className="flex items-center gap-2 text-xs font-semibold text-accent-hi">
                  <Icon name="text" className="h-3.5 w-3.5" />
                  Legenda
                </p>

                <div className="cap-ring-field flex min-h-[2.1rem] items-center rounded-md border border-border bg-canvas px-2.5 text-[11px] text-text sm:text-xs">
                  <span className="relative inline-block whitespace-nowrap">
                    <span className="cap-type inline-block">{TEXT}</span>
                    <i className="cap-caret absolute inset-y-0 w-0.5 bg-accent" />
                  </span>
                </div>

                <Select label="Estilo" ring="cap-ring-style">
                  <Swap a="Barra branca" b="Impact (contorno)" ka="cap-swap-a" kb="cap-swap-b" />
                </Select>
                <Select label="Posição" ring="cap-ring-pos">
                  <Swap a="Topo" b="Rodapé" ka="cap-pos-a" kb="cap-pos-b" />
                </Select>
                <Select label="Fonte">
                  <span>Auto</span>
                </Select>

                <span className="cap-save mt-auto self-end rounded-lg bg-green px-3 py-1.5 text-xs font-semibold text-[#0b2010]">
                  Salvar GIF
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
