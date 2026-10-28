import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Login Google com o domínio do regif: o handler do Firebase Auth é servido
  // por aqui (proxy), então a janela do Google mostra este domínio em vez de
  // regif-e1e30.firebaseapp.com. Ver authDomain em app/login/LoginBridge.tsx.
  async rewrites() {
    return [
      {
        source: "/__/auth/:path*",
        destination: "https://regif-e1e30.firebaseapp.com/__/auth/:path*",
      },
      {
        source: "/__/firebase/:path*",
        destination: "https://regif-e1e30.firebaseapp.com/__/firebase/:path*",
      },
    ];
  },
};

export default nextConfig;
