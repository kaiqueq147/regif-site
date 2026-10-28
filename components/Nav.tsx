"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Brand } from "./Brand";
import { nav } from "@/lib/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-canvas/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Brand />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {nav.links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-text"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="#precos"
            className="text-sm font-medium text-muted transition-colors hover:text-text"
          >
            Entrar
          </Link>
          <Link
            href="#download"
            className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-canvas transition-colors hover:bg-accent-hi"
          >
            Baixar grátis
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 rounded-full bg-text transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-text transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-text transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-border/60 bg-canvas/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
          {nav.links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2.5 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-text"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#download"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-xl bg-accent px-4 py-2.5 text-center text-sm font-semibold text-canvas"
          >
            Baixar grátis
          </Link>
        </nav>
      </div>
    </header>
  );
}
