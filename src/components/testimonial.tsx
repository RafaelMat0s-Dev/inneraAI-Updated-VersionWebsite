"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/context/language-context";
import { ArrowRight, TrendingUp } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function Testimonial() {
  const { t } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const scrollToForm = () => {
    document.getElementById("qualificacao")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative py-32 px-6 z-10 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, oklch(0.55 0.28 290 / 5%) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="w-8 h-px" style={{ background: "oklch(0.55 0.28 290)" }} />
          <span
            className="font-mono text-[10px] font-bold tracking-widest uppercase"
            style={{ color: "oklch(0.55 0.28 290)" }}
          >
            {t.testimonial.eyebrow}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Quote ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE }}
          >
            {/* Large quote mark */}
            <div
              className="text-8xl font-serif leading-none mb-4 select-none"
              style={{ color: "oklch(0.62 0.26 255 / 25%)", lineHeight: 0.8 }}
              aria-hidden
            >
              &ldquo;
            </div>

            <blockquote
              className="font-semibold leading-relaxed mb-10"
              style={{
                fontSize: "clamp(1.2rem, 2.2vw, 1.55rem)",
                color: "oklch(0.88 0.008 255)",
              }}
            >
              {t.testimonial.quote}
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center gap-4">
              {/* Avatar placeholder */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0"
                style={{
                  background: "linear-gradient(135deg, oklch(0.62 0.26 255 / 30%), oklch(0.55 0.28 290 / 30%))",
                  border: "1px solid oklch(0.62 0.26 255 / 30%)",
                  color: "oklch(0.85 0.15 255)",
                }}
              >
                {t.testimonial.author.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-sm text-white">{t.testimonial.author}</div>
                <div className="text-xs" style={{ color: "oklch(0.55 0.025 255)" }}>{t.testimonial.role}</div>
              </div>
            </div>

            {/* CTA link */}
            <motion.button
              onClick={scrollToForm}
              whileHover={{ x: 4 }}
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold group"
              style={{ color: "oklch(0.72 0.20 255)" }}
            >
              {t.testimonial.cta}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* ── RIGHT: Metric visual card ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            className="relative"
          >
            {/* Main metric card */}
            <div
              className="relative p-10 rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(145deg, oklch(0.11 0.016 262 / 90%), oklch(0.08 0.012 260 / 95%))",
                border: "1px solid oklch(0.62 0.26 255 / 20%)",
                boxShadow: "0 24px 60px oklch(0 0 0 / 40%), inset 0 1px 0 oklch(1 1 1 / 8%)",
              }}
            >
              {/* Top glow */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, oklch(0.62 0.26 255 / 50%), transparent)" }}
              />
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-32 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 50% 0%, oklch(0.62 0.26 255 / 12%) 0%, transparent 70%)" }}
              />

              {/* Icon row */}
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div
                  className="p-2.5 rounded-xl"
                  style={{ background: "oklch(0.62 0.26 255 / 15%)", border: "1px solid oklch(0.62 0.26 255 / 25%)" }}
                >
                  <TrendingUp size={18} style={{ color: "oklch(0.72 0.20 255)" }} />
                </div>
                <span className="font-mono text-[10px] font-bold tracking-widest uppercase" style={{ color: "oklch(0.55 0.025 255)" }}>
                  Impact Report
                </span>
              </div>

              {/* Big metric */}
              <div className="relative z-10 mb-3">
                <div
                  className="font-bold tabular-nums leading-none mb-2"
                  style={{ fontSize: "clamp(4rem, 8vw, 6rem)", color: "oklch(0.72 0.20 255)" }}
                >
                  {t.testimonial.metric}
                </div>
                <div className="font-semibold text-xl text-white tracking-tight">{t.testimonial.metric_label}</div>
                <div className="text-xs mt-1" style={{ color: "oklch(0.50 0.020 255)" }}>{t.testimonial.metric_sub}</div>
              </div>

              {/* Abstract chart bars */}
              <div className="relative z-10 mt-8 flex items-end gap-1.5 h-14">
                {[30, 45, 38, 60, 52, 78, 65, 88, 72, 95, 85, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    animate={inView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.05, ease: EASE }}
                    className="flex-1 rounded-sm origin-bottom"
                    style={{
                      height: `${h}%`,
                      background: i >= 9
                        ? "oklch(0.72 0.20 255)"
                        : `oklch(0.62 0.26 255 / ${20 + i * 6}%)`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Decorative accent card behind */}
            <div
              className="absolute -bottom-4 -right-4 w-3/4 h-full rounded-3xl -z-10"
              style={{
                background: "oklch(0.07 0.010 260)",
                border: "1px solid oklch(0.55 0.28 290 / 15%)",
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
