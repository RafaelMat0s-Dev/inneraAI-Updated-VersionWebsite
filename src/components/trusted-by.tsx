"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/context/language-context";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function TrustedBy() {
  const { t } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const tools = t.trusted_by.tools;
  const doubled = [...tools, ...tools];

  return (
    <section
      ref={ref}
      className="relative py-16 px-6 z-10 overflow-hidden"
      style={{ borderTop: "1px solid oklch(1 0 0 / 6%)", borderBottom: "1px solid oklch(1 0 0 / 6%)" }}
    >
      {/* Subtle section glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.62 0.26 255 / 4%) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-center font-mono text-[10px] font-bold tracking-widest uppercase mb-8"
          style={{ color: "oklch(0.50 0.025 255)" }}
        >
          {t.trusted_by.eyebrow}
        </motion.p>

        {/* Marquee container */}
        <div className="relative overflow-hidden">
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, oklch(0.07 0.012 260), transparent)" }}
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, oklch(0.07 0.012 260), transparent)" }}
          />

          <div className="marquee-track">
            {doubled.map((tool, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full shrink-0 transition-all duration-300 hover:scale-105"
                style={{
                  background: "oklch(0.10 0.014 262 / 60%)",
                  border: "1px solid oklch(1 0 0 / 8%)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Accent dot */}
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{
                    background: i % 3 === 0
                      ? "oklch(0.72 0.20 255)"
                      : i % 3 === 1
                      ? "oklch(0.65 0.24 290)"
                      : "oklch(0.70 0.22 155)",
                    boxShadow: `0 0 8px ${i % 3 === 0 ? "oklch(0.72 0.20 255)" : i % 3 === 1 ? "oklch(0.65 0.24 290)" : "oklch(0.70 0.22 155)"}`,
                  }}
                />
                <span
                  className="font-mono text-xs font-semibold tracking-wide whitespace-nowrap"
                  style={{ color: "oklch(0.70 0.020 255)" }}
                >
                  {tool}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
