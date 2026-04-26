"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/context/language-context";
import { ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function CtaBanner() {
  const { t } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const scrollToForm = () => {
    document.getElementById("qualificacao")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: EASE }}
          className="relative p-10 md:p-14 rounded-3xl text-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, oklch(0.62 0.26 255 / 8%), oklch(0.55 0.28 290 / 10%))",
            border: "1px solid oklch(0.62 0.26 255 / 25%)",
          }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 pointer-events-none rounded-3xl"
            style={{
              background: "radial-gradient(ellipse at 50% 0%, oklch(0.62 0.26 255 / 12%) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, oklch(0.62 0.26 255 / 60%), transparent)" }}
          />

          <div className="relative">
            <h2
              className="font-bold leading-tight mb-4"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "oklch(0.96 0.006 255)" }}
            >
              {t.cta_banner.headline}
            </h2>
            <p className="mb-8 leading-relaxed" style={{ color: "oklch(0.62 0.025 255)", maxWidth: "480px", margin: "0 auto 2rem" }}>
              {t.cta_banner.sub}
            </p>
            <button
              onClick={scrollToForm}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, oklch(0.62 0.26 255), oklch(0.55 0.28 290))",
                color: "oklch(0.96 0.006 255)",
                boxShadow: "0 0 40px oklch(0.62 0.26 255 / 40%), 0 4px 20px oklch(0 0 0 / 30%)",
              }}
            >
              {t.cta_banner.cta}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
