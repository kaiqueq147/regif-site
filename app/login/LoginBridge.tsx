"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { initializeApp, getApps } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  inMemoryPersistence,
  setPersistence,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Config pública do Firebase (a mesma que vai no app).
const firebaseConfig = {
  apiKey: "AIzaSyAGCoqS6HcagH84Y_9hfROqX-1yGW1o-nM",
  authDomain: "regif-e1e30.firebaseapp.com",
  projectId: "regif-e1e30",
};

type Params = { port: number; state: string };
type Phase = "ready" | "working" | "sent" | "invalid" | "error";

function readParams(): Params | null {
  const q = new URLSearchParams(window.location.search);
  const port = Number(q.get("port"));
  const state = q.get("state") || "";
  // Só porta local válida e state no formato que o app gera (token_urlsafe).
  if (!Number.isInteger(port) || port < 1024 || port > 65535) return null;
  if (!/^[A-Za-z0-9_-]{16,128}$/.test(state)) return null;
  return { port, state };
}

/** Devolve a sessão ao app: POST de formulário para 127.0.0.1 (não fica no histórico). */
function postToApp(p: Params, fields: Record<string, string>) {
  const form = document.createElement("form");
  form.method = "POST";
  form.action = `http://127.0.0.1:${p.port}/`;
  for (const [name, value] of Object.entries({ state: p.state, ...fields })) {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    form.appendChild(input);
  }
  document.body.appendChild(form);
  form.submit();
}

export function LoginBridge() {
  const [phase, setPhase] = useState<Phase>("ready");
  const [message, setMessage] = useState("");
  const params = useRef<Params | null>(null);

  useEffect(() => {
    params.current = readParams();
    if (!params.current) setPhase("invalid");
  }, []);

  async function login() {
    const p = params.current;
    if (!p) return;
    setPhase("working");
    setMessage("");
    try {
      const app = getApps()[0] ?? initializeApp(firebaseConfig);
      const auth = getAuth(app);
      // Nada fica salvo no navegador: a sessão é só do app.
      await setPersistence(auth, inMemoryPersistence);
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });
      const { user } = await signInWithPopup(auth, provider);
      const refreshToken = user.refreshToken;
      await signOut(auth);
      setPhase("sent");
      postToApp(p, { refresh_token: refreshToken });
    } catch (err) {
      const code = (err as { code?: string }).code || "";
      if (code === "auth/popup-closed-by-user" || code === "auth/cancelled-popup-request") {
        setPhase("ready");
        return;
      }
      console.error("login regif:", code, err);
      setPhase("error");
      setMessage(code === "auth/popup-blocked"
        ? "O navegador bloqueou a janela do Google. Libere pop-ups para este site e tente de novo."
        : "Não foi possível entrar no regif. Tente de novo.");
    }
  }

  return (
    <div className="w-full max-w-sm rounded-2xl border border-border bg-surface p-8 text-center shadow-2xl">
      <Image src="/logo.png" alt="regif" width={425} height={144} priority className="mx-auto mb-6 h-12 w-auto" />
      {phase === "invalid" ? (
        <>
          <h1 className="mb-2 text-xl font-bold">Abra pelo app</h1>
          <p className="text-sm text-muted">
            Esta página é aberta pelo regif quando você toca em “Entrar com Google”. Volte para o app e tente por lá.
          </p>
        </>
      ) : phase === "sent" ? (
        <>
          <h1 className="mb-2 text-xl font-bold">Conectando ao regif…</h1>
          <p className="text-sm text-muted">Só um instante.</p>
        </>
      ) : (
        <>
          <h1 className="mb-2 text-xl font-bold">Entrar no regif</h1>
          <p className="mb-6 text-sm text-muted">Use sua conta Google para liberar o app.</p>
          <button
            type="button"
            onClick={login}
            disabled={phase === "working"}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-4 py-3 font-semibold text-[#1f1f1f] transition hover:bg-[#f2f2f2] disabled:opacity-60"
          >
            <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
              <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
              <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
              <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
              <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
            </svg>
            {phase === "working" ? "Abrindo o Google…" : "Entrar com Google"}
          </button>
          {message && <p className="mt-4 text-sm text-[#ff8a8a]">{message}</p>}
        </>
      )}
    </div>
  );
}
