import type { Metadata } from "next";
import { LoginBridge } from "./LoginBridge";

export const metadata: Metadata = {
  title: "Entrar no regif",
  robots: { index: false, follow: false },
};

// Página que o app desktop abre para o login com Google. O app passa a porta
// do servidor local e um `state`; aqui o Firebase Auth faz o login e a sessão
// volta para o app por POST em 127.0.0.1.
export default function LoginPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-canvas px-4 text-text">
      <LoginBridge />
    </main>
  );
}
