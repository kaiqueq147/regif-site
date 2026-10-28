"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/content";

function useCountUp(target: number, run: boolean, duration = 1200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    if (target === 0) {
      setValue(0);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return value;
}

function StatItem({
  value,
  suffix,
  label,
  run,
}: {
  value: number;
  suffix?: string;
  label: string;
  run: boolean;
}) {
  const count = useCountUp(value, run);
  return (
    <div className="text-center">
      <div className="grad-text text-4xl font-extrabold tabular-nums sm:text-5xl">
        {count}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-muted">{label}</div>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-5 py-10">
      <div
        ref={ref}
        className="grid grid-cols-2 gap-8 rounded-2xl border border-border bg-surface/40 p-8 sm:grid-cols-4"
      >
        {stats.map((s) => (
          <StatItem key={s.label} {...s} run={run} />
        ))}
      </div>
    </section>
  );
}
