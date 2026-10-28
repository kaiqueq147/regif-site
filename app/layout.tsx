import type { Metadata } from "next";
import { Exo_2, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Títulos (h1/h2): itálico largo e arredondado, na linha do "regif" da logo.
const exo = Exo_2({
  variable: "--font-exo",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://regif.app"),
  title: "regif — grave os melhores momentos da sua tela",
  description:
    "O regif fica gravando sua tela o tempo todo, sem atrapalhar. Aconteceu algo bom? Aperte uma tecla e transforme os últimos segundos num GIF pronto pra compartilhar.",
  keywords: [
    "gravar gif",
    "fazer gif da tela",
    "criar gif",
    "captura de tela",
    "gif de gameplay",
    "gravar tela",
    "gameplay",
  ],
  openGraph: {
    title: "regif — transforme a sua tela em GIF num toque",
    description:
      "Aconteceu algo bom? Aperte uma tecla e salve os últimos segundos como GIF pra mandar pros amigos. Simples, rápido e sem complicação.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${exo.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
