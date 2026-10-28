import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
};

export function SectionHead({ eyebrow, title, subtitle }: Props) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base text-muted">{subtitle}</p>}
    </Reveal>
  );
}
