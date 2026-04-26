"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/context/language-context";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function Process() {
  const { t } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="processo" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-16"
        >
          <span
            className="text-xs font-medium tracking-widest uppercase mb-4 block"
            style={{ color: "oklch(0.62 0.26 255)", letterSpacing: "0.15em" }}
          >
            {t.process.eyebrow}
          </span>
          <h2
            className="font-bold leading-tight mb-4"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "oklch(0.96 0.006 255)" }}
          >
            {t.process.headline}
          </h2>
          <p style={{ color: "oklch(0.60 0.025 255)", maxWidth: "500px", margin: "0 auto" }}>
            {t.process.sub}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div
            className="absolute left-[27px] top-8 bottom-8 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom, oklch(0.62 0.26 255 / 40%), oklch(0.55 0.28 290 / 20%), transparent)" }}
          />

          <div className="space-y-6">
            {t.process.steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.12, ease: EASE }}
                className="relative flex gap-6 md:gap-8 p-6 rounded-2xl group"
                style={{
                  background: "oklch(0.10 0.014 262 / 50%)",
                  border: "1px solid oklch(1 0 0 / 7%)",
                }}
              >
                {/* Hover state */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{ background: "radial-gradient(circle at 0% 50%, oklch(0.62 0.26 255 / 5%) 0%, transparent 60%)" }}
                />

                {/* Number */}
                <div className="relative flex-shrink-0">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center font-bold text-lg"
                    style={{
                      background: `linear-gradient(135deg, oklch(0.62 0.26 255 / ${15 - i * 2}%), oklch(0.55 0.28 290 / ${12 - i * 2}%))`,
                      border: "1px solid oklch(0.62 0.26 255 / 25%)",
                      color: "oklch(0.72 0.20 255)",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3
                    className="font-semibold mb-2 text-base"
                    style={{ color: "oklch(0.92 0.008 255)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "oklch(0.58 0.022 255)" }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
