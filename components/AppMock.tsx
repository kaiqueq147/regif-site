import Image from "next/image";

/** Screenshot real do editor (public/app-editor.webp, e-mail anonimizado) + overlays animados em %. */
export function AppMock() {
  return (
    <div className="relative">
      {/* glow behind */}
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/25 via-sky/15 to-cyan/20 blur-3xl" />

      <div className="relative aspect-[1024/584] overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/50">
        <Image
          src="/app-editor.webp"
          alt="Editor do regif: preview do clipe, linha do tempo com seleção de trecho, recorte e legenda"
          fill
          priority
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover"
        />

        {/* área do preview: recorte que abre e fecha, escurecendo o que fica de fora */}
        <div className="absolute left-[13%] top-[8%] h-[72.3%] w-[73.3%] overflow-hidden" aria-hidden="true">
          <div className="mock-crop absolute rounded-sm border-2 border-dashed border-accent-hi shadow-[0_0_0_999px_rgb(0_0_0/0.5)]">
            <span className="absolute -left-1 -top-1 h-2 w-2 bg-accent-hi" />
            <span className="absolute -right-1 -top-1 h-2 w-2 bg-accent-hi" />
            <span className="absolute -bottom-1 -left-1 h-2 w-2 bg-accent-hi" />
            <span className="absolute -bottom-1 -right-1 h-2 w-2 bg-accent-hi" />
          </div>
        </div>

        {/* playhead varrendo os quadros da linha do tempo */}
        <div className="absolute inset-x-0 top-[82%] h-[9.5%]" aria-hidden="true">
          <span className="absolute top-0 h-full w-0.5 animate-playhead bg-white shadow-[0_0_8px] shadow-accent" />
        </div>

        {/* botão play pulsando */}
        <span
          className="mock-ring absolute left-[84.7%] top-[92%] h-[7%] w-[4%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent-hi"
          aria-hidden="true"
        />

        {/* brilho passando pela janela */}
        <span
          className="mock-shine pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* floating cards */}
      <div className="absolute -left-4 top-24 hidden animate-float rounded-xl border border-border bg-surface-2/90 px-3 py-2 shadow-xl backdrop-blur sm:block" aria-hidden="true">
        <p className="text-[10px] uppercase tracking-wide text-muted">Pronto em</p>
        <p className="text-sm font-semibold text-green">2 segundos</p>
      </div>
      <div className="absolute -right-4 bottom-16 hidden animate-float rounded-xl border border-border bg-surface-2/90 px-3 py-2 shadow-xl backdrop-blur [animation-delay:-3s] sm:block" aria-hidden="true">
        <p className="text-[10px] uppercase tracking-wide text-muted">Arquivo</p>
        <p className="text-sm font-semibold text-text">leve e fácil de enviar</p>
      </div>
    </div>
  );
}
