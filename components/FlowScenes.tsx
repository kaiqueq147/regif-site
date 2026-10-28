import type { ReactNode } from "react";
import { Icon } from "./Icons";

/* Cenas da demo "como funciona". Só markup: a coreografia está nas classes
   `.flow-*` de globals.css. O pai remonta a cena (key) a cada passo. */

const d = (s: number) => ({ animationDelay: `${s}s` });

function Shell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/50">
      <div className="flex items-center gap-3 border-b border-border/70 bg-surface-2 px-4 py-2.5">
        <span className="flex gap-1.5">
          <i className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <i className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <i className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span className="truncate text-xs text-muted">{title}</span>
      </div>
      <div className="relative flex aspect-[16/11] flex-col gap-3 p-4">{children}</div>
    </div>
  );
}

/** Miniaturas de quadros (cada uma com um tom diferente). */
function Frames({ count, from = 0 }: { count: number; from?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="h-full w-11 shrink-0 rounded-[5px] border border-white/10"
          style={{
            background: `linear-gradient(135deg, hsl(${200 + ((from + i) * 17) % 140} 70% 45%), hsl(${
              260 + ((from + i) * 11) % 90
            } 60% 30%))`,
          }}
        />
      ))}
    </>
  );
}

/** "Tela" com blobs em movimento, igual ao mock do hero. */
function Screen({ children, className = "" }: { children?: ReactNode; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-xl bg-canvas ${className}`}>
      <span className="absolute left-[14%] top-[26%] h-20 w-20 rounded-full bg-accent/60 blur-xl animate-blob" />
      <span className="absolute right-[16%] top-[14%] h-16 w-16 rounded-full bg-sky/50 blur-xl animate-blob [animation-delay:-6s]" />
      <span className="absolute bottom-[10%] left-[44%] h-24 w-24 rounded-full bg-cyan/40 blur-2xl animate-blob [animation-delay:-12s]" />
      {children}
    </div>
  );
}

/* 1 ─ Gravando em segundo plano ─────────────────────────────────────────── */
export function SceneRecord() {
  return (
    <Shell title="Sua tela — o regif trabalha em segundo plano">
      <Screen className="h-[52%]">
        <span className="absolute right-2 top-2 inline-flex items-center gap-1.5 rounded-md bg-black/50 px-2 py-1 text-[10px] font-semibold text-red-400">
          <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse-dot" />
          GRAVANDO
        </span>
        <span className="absolute left-2 top-2 rounded-md bg-black/50 px-2 py-1 text-[10px] text-white/80">
          Você jogando normalmente
        </span>
      </Screen>

      <div className="flow-in" style={d(0.2)}>
        <div className="mb-1.5 flex items-center justify-between text-[11px] text-muted">
          <span>Memória do regif · buffer circular</span>
          <span className="inline-flex items-center gap-1 text-green">
            agora <Icon name="arrow" className="h-3 w-3 rotate-180" />
          </span>
        </div>
        <div className="relative h-12 overflow-hidden rounded-lg border border-border bg-canvas/80 p-1">
          <div className="flow-track flex h-full w-max gap-1">
            <Frames count={16} />
            <Frames count={16} />
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 flex w-20 items-center bg-gradient-to-r from-canvas via-canvas/80 to-transparent pl-2 text-[10px] font-medium text-red-300/80">
            descartado
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-green shadow-[0_0_10px] shadow-green" />
        </div>
        <p className="mt-2 text-[11px] leading-relaxed text-muted">
          Quadro novo entra, o mais antigo sai. Nada é gravado em disco até você salvar.
        </p>
      </div>
    </Shell>
  );
}

/* 2 ─ Aperte a tecla ────────────────────────────────────────────────────── */
export function SceneHotkey() {
  return (
    <Shell title="Atalho global — funciona até dentro do jogo">
      <div className="relative flex h-[46%] items-center justify-center">
        <span className="flow-ripple absolute h-24 w-24 rounded-full border-2 border-accent" />
        <span className="flow-ripple absolute h-24 w-24 rounded-full border border-sky" style={d(1.15)} />
        <div className="flow-keycap relative flex h-20 w-24 items-center justify-center rounded-2xl border border-border bg-gradient-to-b from-surface-3 to-surface-2 text-3xl font-extrabold text-text">
          F8
        </div>
        <span
          className="flow-pop absolute right-2 top-2 inline-flex items-center gap-1.5 rounded-full border border-green/40 bg-green/10 px-3 py-1 text-xs font-semibold text-green"
          style={d(1.9)}
        >
          <Icon name="check" className="h-3.5 w-3.5" />
          Clipe capturado
        </span>
      </div>

      <div>
        <div className="mb-1.5 text-[11px] text-muted">Buffer na memória</div>
        <div className="relative h-12 overflow-hidden rounded-lg border border-border bg-canvas/80 p-1">
          <div className="flex h-full w-max gap-1">
            <Frames count={22} from={3} />
          </div>
          {/* últimos segundos selecionados (cresce da direita pra esquerda) */}
          <div
            className="flow-bracket absolute inset-y-0 right-0 rounded-md border-2 border-green bg-green/15"
            style={{ ["--w" as string]: "56%" }}
          />
        </div>
        <div className="mt-2 flex items-center justify-between text-[11px]">
          <span className="text-muted">Só os últimos segundos entram no clipe</span>
          <span className="flow-in font-medium text-green" style={d(2.4)}>
            Abrindo o editor…
          </span>
        </div>
      </div>

      {/* o clipe "sobe" pro editor */}
      <div className="flow-fly pointer-events-none absolute bottom-12 right-8 flex h-10 w-24 gap-0.5 rounded-md border-2 border-green bg-canvas p-0.5">
        <Frames count={2} from={9} />
      </div>
    </Shell>
  );
}

/* 3 ─ Ajuste no editor ──────────────────────────────────────────────────── */
export function SceneEdit() {
  const tools = [
    { label: "Aparar", delay: 0.5 },
    { label: "Recorte", delay: 2.2 },
    { label: "Legenda", delay: 4.3 },
  ];
  return (
    <Shell title="regif — editar clipe antes de salvar">
      <Screen className="h-[50%]">
        {/* legenda estilo meme digitando */}
        <div className="absolute inset-x-0 top-0 bg-white px-3 py-1.5 text-center text-[11px] font-extrabold uppercase text-black">
          <span className="flow-type inline-block overflow-hidden whitespace-nowrap align-bottom">
            olha esse nego mano
          </span>
        </div>
        {/* recorte: a área fora escurece */}
        <div className="flow-crop absolute rounded-sm border-2 border-dashed border-accent shadow-[0_0_0_999px_rgb(0_0_0/0.55)]">
          <span className="absolute -left-1 -top-1 h-2 w-2 bg-accent" />
          <span className="absolute -right-1 -top-1 h-2 w-2 bg-accent" />
          <span className="absolute -bottom-1 -left-1 h-2 w-2 bg-accent" />
          <span className="absolute -bottom-1 -right-1 h-2 w-2 bg-accent" />
        </div>
      </Screen>

      {/* timeline com alças de aparar */}
      <div className="relative h-11 overflow-hidden rounded-lg border border-border bg-canvas/80 p-1">
        <div className="flex h-full w-max gap-1 opacity-70">
          <Frames count={22} from={5} />
        </div>
        <div className="absolute inset-y-0 left-0 right-0">
          <span className="flow-trim-l absolute inset-y-0 flex w-1.5 items-center rounded-sm bg-green" />
          <span className="flow-trim-r absolute inset-y-0 flex w-1.5 items-center rounded-sm bg-green" />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {tools.map((t) => (
          <span
            key={t.label}
            className="flow-chip rounded-lg border px-2.5 py-1 text-xs"
            style={d(t.delay)}
          >
            {t.label}
          </span>
        ))}
        <span className="ml-auto rounded-lg bg-green px-3 py-1 text-xs font-semibold text-[#0b2010]">
          Salvar GIF
        </span>
      </div>
    </Shell>
  );
}

/* 4 ─ Salve e compartilhe ───────────────────────────────────────────────── */
export function SceneExport() {
  return (
    <Shell title="Exportando — leve e pronto pra enviar">
      <div>
        <div className="mb-1.5 flex items-center justify-between text-[11px] text-muted">
          <span>Gerando o arquivo…</span>
          <span className="flow-pct font-semibold text-text tabular-nums" />
        </div>
        <div className="h-2.5 overflow-hidden rounded-full bg-surface-3">
          <div className="flow-export h-full rounded-full bg-gradient-to-r from-accent via-sky to-cyan" />
        </div>
      </div>

      <div className="flow-pop flex flex-wrap gap-2" style={d(2.8)}>
        {["GIF", "WebP", "MP4", "WebM", "APNG"].map((f, i) => (
          <span
            key={f}
            className={`rounded-lg border px-2.5 py-1 text-xs font-semibold ${
              i === 0
                ? "border-green/50 bg-green/10 text-green"
                : "border-border bg-surface-2 text-muted"
            }`}
          >
            {f}
          </span>
        ))}
      </div>

      {/* conversa recebendo o clipe */}
      <div className="flow-in mt-auto flex items-end gap-3 rounded-xl border border-border bg-canvas/70 p-3" style={d(3.6)}>
        <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-lg bg-canvas">
          <span className="absolute left-3 top-4 h-10 w-10 rounded-full bg-accent/70 blur-lg animate-blob" />
          <span className="absolute right-3 top-2 h-8 w-8 rounded-full bg-sky/60 blur-lg animate-blob [animation-delay:-6s]" />
          <span className="absolute inset-x-0 bottom-1 bg-black/45 text-center text-[8px] font-extrabold uppercase text-white">
            olha esse nego mano
          </span>
        </div>
        <div className="space-y-1.5 pb-1">
          <p className="inline-block rounded-2xl rounded-bl-sm bg-accent px-3 py-1.5 text-xs font-medium text-canvas">
            olha isso kkkkk
          </p>
          <p className="flex items-center gap-1 text-[11px] text-green">
            <Icon name="check" className="h-3 w-3" /> Salvo no seu PC · pronto pra mandar
          </p>
        </div>
      </div>
    </Shell>
  );
}

export const scenes = [SceneRecord, SceneHotkey, SceneEdit, SceneExport];
