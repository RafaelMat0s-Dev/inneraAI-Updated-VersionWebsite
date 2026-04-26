"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/context/language-context";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function Authority() {
  const { t } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 px-6">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 50%, oklch(0.55 0.28 290 / 4%) 0%, transparent 70%)",
        }}
      />

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
            style={{ color: "oklch(0.55 0.28 290)", letterSpacing: "0.15em" }}
          >
            {t.authority.eyebrow}
          </span>
          <h2
            className="font-bold leading-tight mb-4"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "oklch(0.96 0.006 255)" }}
          >
            {t.authority.headline}
          </h2>
          <p style={{ color: "oklch(0.60 0.025 255)", maxWidth: "500px", margin: "0 auto" }}>
            {t.authority.sub}
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 gap-5">
          {t.authority.pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: EASE }}
              className="group relative p-7 rounded-2xl overflow-hidden"
              style={{
                background: "oklch(0.10 0.014 262 / 50%)",
                border: "1px solid oklch(1 0 0 / 7%)",
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(circle at 0% 100%, oklch(0.55 0.28 290 / 5%) 0%, transparent 60%)" }}
              />

              <div className="relative">
                <div
                  className="text-3xl font-bold mb-3 tabular-nums"
                  style={{ color: "oklch(0.62 0.26 255 / 30%)" }}
                >
                  0{i + 1}
                </div>
                <h3 className="font-semibold mb-3" style={{ color: "oklch(0.90 0.010 255)" }}>
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.58 0.022 255)" }}>
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
