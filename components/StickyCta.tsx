"use client";

import { useEffect, useState } from "react";

/** Barra de download no rodapé (só mobile): aparece após rolar e some quando a seção #download está visível. */
export function StickyCta() {
  const [scrolled, setScrolled] = useState(false);
  const [atDownload, setAtDownload] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const el = document.getElementById("download");
    const io = new IntersectionObserver(([e]) => setAtDownload(e.isIntersecting));
    if (el) io.observe(el);
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  const show = scrolled && !atDownload;
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-canvas/90 p-3 backdrop-blur transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href="#download"
        className="block rounded-xl bg-accent py-3 text-center text-sm font-semibold text-canvas"
      >
        Baixar o regif grátis
      </a>
    </div>
  );
}
