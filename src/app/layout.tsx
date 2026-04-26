import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/language-context";

// Plus Jakarta Sans: Extremely premium, high-legibility B2B font. 
// It has the geometric sharpness of a tech company but the readability of an editorial site.
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

// JetBrains Mono: The gold standard for actual developers. 
// Using this for your metrics, badges, and technical terms instantly builds subconscious authority.
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
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
    <html lang="pt" className={`${jakarta.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#0A0A0A] text-white selection:bg-[oklch(0.62_0.26_255_/_30%)] selection:text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}