import { downloadUrl } from "@/lib/content";
import { Icon } from "./Icons";
import { Reveal } from "./Reveal";

export function DownloadCta() {
  return (
    <section id="download" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:py-28">
      <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-16 text-center sm:px-16">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              "radial-gradient(60% 80% at 50% 0%, rgba(43,140,255,0.25), transparent 70%), radial-gradient(50% 60% at 80% 100%, rgba(19,227,255,0.18), transparent 70%)",
          }}
          aria-hidden="true"
        />
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          Baixe o regif e capture{" "}
          <span className="grad-text">o próximo grande momento</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted">
          Grátis para Windows. Entre com sua conta Google e crie seus primeiros 10 GIFs sem
          marca d&apos;água. Quer mais? O Premium custa R$9,99 por 30 dias.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={downloadUrl}
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-canvas transition-colors hover:bg-accent-hi"
          >
            <Icon name="windows" className="h-[18px] w-[18px]" />
            Baixar para Windows
          </a>
          <a
            href="#precos"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-2/50 px-6 py-3 text-sm font-semibold text-text transition-colors hover:bg-surface-2"
          >
            Ver planos
          </a>
        </div>

        <p className="mt-6 text-xs text-muted">
          Instalador único · ~230 MB · Windows 10/11 (64-bit)
        </p>
      </Reveal>
    </section>
  );
}
