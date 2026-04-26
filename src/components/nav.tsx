"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/context/language-context";

export function Nav() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("qualificacao")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5"
    >
      <nav
        className="flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500"
        style={{
          maxWidth: "900px",
          width: "calc(100% - 2rem)",
          background: scrolled
            ? "oklch(0.10 0.014 262 / 85%)"
            : "oklch(0.10 0.014 262 / 40%)",
          backdropFilter: "blur(20px)",
          border: "1px solid oklch(1 0 0 / 8%)",
          boxShadow: scrolled ? "0 8px 40px oklch(0 0 0 / 30%)" : "none",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, oklch(0.62 0.26 255), oklch(0.55 0.28 290))",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" stroke="white" strokeWidth="1.5" fill="none" />
              <circle cx="7" cy="7" r="2" fill="white" />
            </svg>
          </div>
          <span className="font-semibold text-sm tracking-tight" style={{ color: "oklch(0.96 0.006 255)" }}>
            InneraAI
          </span>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <div
            className="flex items-center rounded-lg overflow-hidden"
            style={{ border: "1px solid oklch(1 0 0 / 10%)", background: "oklch(1 0 0 / 5%)" }}
          >
            {(["pt", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className="px-3 py-1.5 text-xs font-medium transition-all duration-200"
                style={{
                  color: lang === l ? "oklch(0.96 0.006 255)" : "oklch(0.60 0.025 255)",
                  background: lang === l ? "oklch(0.62 0.26 255 / 20%)" : "transparent",
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={scrollToForm}
            className="px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, oklch(0.62 0.26 255), oklch(0.55 0.28 290))",
              color: "oklch(0.96 0.006 255)",
              boxShadow: "0 0 20px oklch(0.62 0.26 255 / 30%)",
            }}
          >
            {t.nav.cta}
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
