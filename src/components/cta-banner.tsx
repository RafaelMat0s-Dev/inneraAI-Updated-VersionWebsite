"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/context/language-context";
import { ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function CtaBanner() {
  const { t } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const scrollToForm = () => {
    document.getElementById("qualificacao")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative py-32 px-6 z-10 overflow-hidden">
      {/* Bold gradient background panel — the "Let's Talk" accent section */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(140deg, oklch(0.14 0.04 258) 0%, oklch(0.12 0.036 280) 50%, oklch(0.10 0.03 295) 100%)",
        }}
      />
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      {/* Top-edge glow line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, oklch(0.62 0.26 255 / 60%) 50%, transparent 100%)" }}
      />
      {/* Bottom-edge glow line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, oklch(0.55 0.28 290 / 40%) 50%, transparent 100%)" }}
      />

      {/* Large ambient orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, oklch(0.62 0.26 255 / 15%) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">

          {/* Left: Text content */}
          <div className="flex-1">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: EASE }}
              className="inline-flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest uppercase mb-6"
              style={{ color: "oklch(0.65 0.20 255)" }}
            >
              <span
                className="w-6 h-px"
                style={{ background: "oklch(0.65 0.20 255)" }}
              />
              {t.cta_banner.eyebrow}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className="font-bold tracking-tight leading-[1.0] text-white mb-6"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
            >
              {t.cta_banner.headline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
              className="text-lg leading-relaxed max-w-lg"
              style={{ color: "oklch(0.65 0.025 255)" }}
            >
              {t.cta_banner.sub}
            </motion.p>
          </div>

          {/* Right: CTA button */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
            className="shrink-0"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToForm}
              className="group inline-flex items-center gap-4 px-10 py-5 rounded-2xl font-bold text-base text-white transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, oklch(0.62 0.26 255), oklch(0.55 0.28 290))",
                boxShadow: "0 0 60px oklch(0.62 0.26 255 / 40%), 0 8px 32px oklch(0 0 0 / 40%)",
              }}
            >
              {t.cta_banner.cta}
              <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
            </motion.button>

            {/* Subtext under button */}
            <p className="mt-4 text-xs text-center" style={{ color: "oklch(0.48 0.020 255)" }}>
              {t.hero.trust}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
