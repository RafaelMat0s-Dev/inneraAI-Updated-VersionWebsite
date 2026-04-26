"use client";

import { useLang } from "@/context/language-context";

export function Footer() {
  const { t } = useLang();

  const scrollTo = (id: string) => {
    if (!id) { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const sectionIds = ["", "servicos", "processo", "qualificacao"];

  return (
    <footer
      className="relative px-6 py-12"
      style={{ borderTop: "1px solid oklch(1 0 0 / 6%)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + tagline */}
        <div className="flex items-center gap-3">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, oklch(0.62 0.26 255), oklch(0.55 0.28 290))",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" stroke="white" strokeWidth="1.5" fill="none" />
              <circle cx="7" cy="7" r="2" fill="white" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-sm" style={{ color: "oklch(0.82 0.012 255)" }}>
              InneraAI
            </div>
            <div className="text-xs" style={{ color: "oklch(0.45 0.018 255)" }}>
              {t.footer.tagline}
            </div>
          </div>
        </div>

        {/* Nav links */}
        <nav className="flex items-center gap-6">
          {t.footer.links.map((link, i) => (
            <button
              key={link}
              onClick={() => scrollTo(sectionIds[i])}
              className="text-xs transition-colors duration-200"
              style={{ color: "oklch(0.50 0.018 255)" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "oklch(0.72 0.020 255)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "oklch(0.50 0.018 255)")}
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Copyright */}
        <div className="text-xs" style={{ color: "oklch(0.40 0.015 255)" }}>
          © {new Date().getFullYear()} InneraAI. {t.footer.legal}
        </div>
      </div>
    </footer>
  );
}
