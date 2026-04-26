"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/context/language-context";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function Results() {
  const { t } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-16"
        >
          <span
            className="text-xs font-medium tracking-widest uppercase mb-4 block"
            style={{ color: "oklch(0.75 0.18 195)", letterSpacing: "0.15em" }}
          >
            {t.results.eyebrow}
          </span>
          <h2
            className="font-bold leading-tight mb-4"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "oklch(0.96 0.006 255)" }}
          >
            {t.results.headline}
          </h2>
          <p style={{ color: "oklch(0.60 0.025 255)" }}>{t.results.sub}</p>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.results.metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1, ease: EASE }}
              className="relative p-6 rounded-2xl text-center overflow-hidden group"
              style={{
                background: "oklch(0.10 0.014 262 / 60%)",
                border: "1px solid oklch(1 0 0 / 8%)",
              }}
            >
              {/* Top glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ background: "radial-gradient(circle at 50% 0%, oklch(0.62 0.26 255 / 8%) 0%, transparent 70%)" }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(90deg, transparent, oklch(0.62 0.26 255 / 60%), transparent)" }}
              />

              <div className="relative">
                <div
                  className="font-bold mb-2 tabular-nums"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 2.8rem)",
                    color: "oklch(0.62 0.26 255)",
                    lineHeight: 1,
                  }}
                >
                  {metric.value}
                </div>
                <div
                  className="font-medium text-sm mb-2 leading-tight"
                  style={{ color: "oklch(0.85 0.010 255)" }}
                >
                  {metric.label}
                </div>
                <div className="text-xs" style={{ color: "oklch(0.50 0.018 255)" }}>
                  {metric.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
