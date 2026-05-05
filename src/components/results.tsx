"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/context/language-context";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function Results() {
  const { t } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const accentColors = [
    "oklch(0.72 0.20 255)",
    "oklch(0.65 0.24 290)",
    "oklch(0.70 0.22 155)",
    "oklch(0.75 0.18 195)",
  ];

  return (
    <section ref={ref} id="resultados" className="relative py-28 px-6 z-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-12 border-b border-white/5"
        >
          <div>
            <span
              className="block font-mono text-[10px] font-bold tracking-widest uppercase mb-4"
              style={{ color: "oklch(0.72 0.20 255)" }}
            >
              {t.results.eyebrow}
            </span>
            <h2
              className="font-bold leading-tight tracking-tight"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)", color: "oklch(0.96 0.006 255)" }}
            >
              {t.results.headline}
            </h2>
          </div>
          <p
            className="text-base leading-relaxed md:max-w-xs md:text-right"
            style={{ color: "oklch(0.60 0.025 255)" }}
          >
            {t.results.sub}
          </p>
        </motion.div>

        {/* Large metric cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {t.results.metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * i, ease: EASE }}
              className="relative p-7 lg:p-8 rounded-3xl overflow-hidden group"
              style={{
                background: "oklch(0.09 0.013 261 / 70%)",
                border: "1px solid oklch(1 0 0 / 7%)",
              }}
            >
              {/* Hover glow from top */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                style={{ background: `radial-gradient(ellipse at 50% 0%, color-mix(in oklch, ${accentColors[i]} 12%, transparent) 0%, transparent 65%)` }}
              />
              {/* Top border accent on hover */}
              <div
                className="absolute top-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${accentColors[i]}, transparent)` }}
              />

              <div className="relative z-10">
                {/* Large value */}
                <div
                  className="font-bold tabular-nums leading-none mb-4"
                  style={{
                    fontSize: "clamp(2.6rem, 5vw, 4rem)",
                    color: accentColors[i],
                    letterSpacing: "-0.02em",
                  }}
                >
                  {metric.value}
                </div>

                {/* Label */}
                <div
                  className="font-semibold text-sm leading-snug mb-2"
                  style={{ color: "oklch(0.88 0.008 255)" }}
                >
                  {metric.label}
                </div>

                {/* Description */}
                <div
                  className="text-xs leading-relaxed"
                  style={{ color: "oklch(0.50 0.018 255)" }}
                >
                  {metric.desc}
                </div>
              </div>

              {/* Corner index number */}
              <div
                className="absolute top-5 right-5 font-mono text-[10px] font-bold tabular-nums"
                style={{ color: "oklch(0.30 0.015 255)" }}
              >
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
