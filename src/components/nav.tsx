"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/language-context";
import { Menu, X } from "lucide-react";

export function Nav() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const scrollToForm = () => {
    document.getElementById("qualificacao")?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5"
    >
      <nav
        className="flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-500"
        style={{
          maxWidth: "980px",
          width: "calc(100% - 2rem)",
          background: scrolled
            ? "oklch(0.10 0.014 262 / 90%)"
            : "oklch(0.10 0.014 262 / 50%)",
          backdropFilter: "blur(24px)",
          border: "1px solid oklch(1 0 0 / 8%)",
          boxShadow: scrolled ? "0 8px 40px oklch(0 0 0 / 30%)" : "none",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, oklch(0.62 0.26 255), oklch(0.55 0.28 290))" }}
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

        {/* Center nav links — desktop only */}
        <div className="hidden md:flex items-center gap-1">
          {t.nav.links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 hover:bg-white/8"
              style={{ color: "oklch(0.65 0.025 255)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "oklch(0.92 0.008 255)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "oklch(0.65 0.025 255)")}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right side — desktop */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
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

        {/* Mobile: language + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <div
            className="flex items-center rounded-lg overflow-hidden"
            style={{ border: "1px solid oklch(1 0 0 / 10%)", background: "oklch(1 0 0 / 5%)" }}
          >
            {(["pt", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className="px-2.5 py-1 text-[10px] font-medium transition-all duration-200"
                style={{
                  color: lang === l ? "oklch(0.96 0.006 255)" : "oklch(0.60 0.025 255)",
                  background: lang === l ? "oklch(0.62 0.26 255 / 20%)" : "transparent",
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2 rounded-lg border border-white/10 bg-white/5 text-white/70"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scaleY: 0.9 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -8, scaleY: 0.9 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[calc(100%+8px)] left-4 right-4 rounded-2xl overflow-hidden origin-top"
            style={{
              background: "oklch(0.10 0.014 262 / 95%)",
              backdropFilter: "blur(24px)",
              border: "1px solid oklch(1 0 0 / 8%)",
              maxWidth: "980px",
              margin: "0 auto",
            }}
          >
            <div className="p-4 flex flex-col gap-1">
              {t.nav.links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left px-4 py-3 rounded-xl text-sm font-semibold text-white/70 hover:text-white hover:bg-white/8 transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-2 pt-2 border-t border-white/8">
                <button
                  onClick={scrollToForm}
                  className="w-full px-4 py-3 text-sm font-semibold rounded-xl text-white transition-all duration-200"
                  style={{ background: "linear-gradient(135deg, oklch(0.62 0.26 255), oklch(0.55 0.28 290))" }}
                >
                  {t.nav.cta}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
