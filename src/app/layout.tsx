import type { Metadata } from "next";
import { Syne, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/language-context";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "InneraAI — Infraestrutura de IA para PMEs",
  description:
    "Instalamos o sistema nervoso de IA da tua empresa. AI Agents, automações e integrações para imobiliárias e clínicas.",
  keywords: ["AI Agency", "AI Agents", "automação", "imobiliária", "clínica", "Portugal"],
  openGraph: {
    title: "InneraAI — AI Infrastructure Agency",
    description: "We install the AI nervous system of your business.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${syne.variable} ${ibmPlexMono.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#0A0A0A] text-white selection:bg-[oklch(0.62_0.26_255_/_30%)] selection:text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}