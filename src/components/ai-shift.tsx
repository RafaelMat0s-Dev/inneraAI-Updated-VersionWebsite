"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/context/language-context";
import { CheckCircle2, XCircle, Terminal, Quote } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function AiShift() {
  const { t } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* ========================================
          HEADER: Surgical & Clean
          ======================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center md:text-left mb-16 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest uppercase mb-4" style={{ color: "oklch(0.62 0.26 255)" }}>
            <Terminal size={12} />
            {t.shift.eyebrow}
          </span>
          <h2
            className="font-bold leading-[1.1] tracking-tight mb-6 max-w-3xl"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", color: "oklch(0.96 0.006 255)" }}
          >
            {t.shift.headline}
          </h2>
          <p className="text-lg font-medium max-w-2xl" style={{ color: "oklch(0.65 0.025 255)" }}>
            {t.shift.sub}
          </p>
        </motion.div>

        {/* ========================================
          THE 30/70 SPLIT LAYOUT
          ======================================== */}
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* LEFT: 30% - The Constricted Legacy Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="w-full lg:w-4/12 p-8 md:p-10 rounded-3xl border flex flex-col"
            style={{
              background: "oklch(0.08 0.01 260 / 30%)",
              borderColor: "oklch(1 1 1 / 5%)",
            }}
          >
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/5">
              <XCircle size={20} className="text-neutral-600" />
              <div>
                <span className="block font-mono text-[10px] font-bold tracking-widest text-neutral-500 uppercase">
                  Legacy System
                </span>
                <span className="font-semibold text-white/50 text-lg">
                  {t.shift.old_title}
                </span>
              </div>
            </div>
            
            <ul className="space-y-6 flex-1">
              {t.shift.old.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-4 text-sm font-medium text-neutral-500">
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: "oklch(1 1 1 / 10%)" }} />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT: 70% - The Expansive InneraAI Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="w-full lg:w-8/12 p-8 md:p-12 rounded-3xl relative overflow-hidden group flex flex-col"
            style={{
              background: "linear-gradient(145deg, oklch(0.12 0.015 262 / 80%), oklch(0.08 0.01 260 / 90%))",
              border: "1px solid oklch(0.62 0.26 255 / 20%)",
              boxShadow: "0 20px 40px oklch(0 0 0 / 40%), inset 0 1px 0 oklch(1 1 1 / 10%)",
            }}
          >
            {/* Elegant Background Glow */}
            <div 
              className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none transition-opacity duration-700 group-hover:opacity-50"
              style={{ background: "radial-gradient(ellipse at 80% 0%, oklch(0.62 0.26 255 / 20%), transparent 60%)" }}
            />

            <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b" style={{ borderColor: "oklch(0.62 0.26 255 / 15%)" }}>
              <div className="flex items-center gap-3 relative z-10">
                <CheckCircle2 size={24} style={{ color: "oklch(0.72 0.20 255)" }} />
                <div>
                  <span className="block font-mono text-[10px] font-bold tracking-widest uppercase" style={{ color: "oklch(0.72 0.20 255)" }}>
                    Active Deployment
                  </span>
                  <span className="font-bold text-xl md:text-2xl text-white tracking-tight">
                    {t.shift.new_title}
                  </span>
                </div>
              </div>
              
              {/* Premium Badge */}
              <div 
                className="font-mono text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full relative z-10"
                style={{ 
                  background: "oklch(0.62 0.26 255 / 10%)", 
                  color: "oklch(0.85 0.15 255)",
                  border: "1px solid oklch(0.62 0.26 255 / 30%)"
                }}
              >
                InneraAI Architecture
              </div>
            </div>

            <ul className="space-y-8 flex-1 relative z-10">
              {t.shift.new.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0" style={{ background: "oklch(0.62 0.26 255 / 15%)" }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "oklch(0.72 0.20 255)", boxShadow: "0 0 8px oklch(0.72 0.20 255)" }} />
                  </div>
                  <span className="text-lg md:text-xl font-medium text-white leading-relaxed tracking-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ========================================
          THE THESIS / QUOTE (Integrated & Sleek)
          ======================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
          className="mt-12 p-8 md:p-10 rounded-3xl flex flex-col md:flex-row items-center gap-8"
          style={{
            background: "oklch(0.08 0.01 260 / 40%)",
            border: "1px solid oklch(1 1 1 / 5%)",
          }}
        >
          <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "oklch(1 1 1 / 5%)" }}>
            <Quote size={20} className="text-neutral-500" />
          </div>
          <div>
            <span className="block font-mono text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: "oklch(0.55 0.025 255)" }}>
              The InneraAI Thesis
            </span>
            <p className="font-semibold leading-relaxed text-lg md:text-xl text-neutral-300">
              "{t.shift.quote}"
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}