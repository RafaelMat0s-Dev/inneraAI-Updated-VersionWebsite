"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/context/language-context";
import { BrainCircuit, Mic, Database, Workflow, CheckCircle2, Activity } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

// Explicit category mapping
const CATEGORY_MAP: Record<string, { icon: any, color: string, position: string }> = {
  "Bases de Dados & CRM": { icon: Database, color: "oklch(0.70 0.22 155)", position: "col-start-1 row-start-1 md:row-start-2" },
  "LLMs & Raciocínio": { icon: BrainCircuit, color: "oklch(0.62 0.26 255)", position: "col-start-1 md:col-start-2 row-start-2 md:row-start-1" },
  "Orquestração & Automação": { icon: Workflow, color: "oklch(0.72 0.18 195)", position: "col-start-1 md:col-start-2 row-start-3 md:row-start-3" },
  "Voice & AI Agents": { icon: Mic, color: "oklch(0.55 0.28 290)", position: "col-start-1 md:col-start-3 row-start-4 md:row-start-2" },
};

const defaultMapping = { icon: Database, color: "oklch(0.62 0.26 255)", position: "" };

export function Tools() {
  const { t } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* ========================================
          HEADER
          ======================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center md:text-left mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-12"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest uppercase mb-4" style={{ color: "oklch(0.62 0.26 255)" }}>
              <Activity size={12} />
              {t.tools.eyebrow}
            </span>
            <h2
              className="font-bold leading-[1.1] tracking-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", color: "oklch(0.96 0.006 255)" }}
            >
              {t.tools.headline}
            </h2>
            <p className="text-lg font-medium" style={{ color: "oklch(0.65 0.025 255)" }}>
              {t.tools.sub}
            </p>
          </div>
          
          <div className="hidden md:flex flex-col items-end gap-2 mb-2">
            <span className="font-mono text-[10px] font-bold tracking-widest text-neutral-500 uppercase">
              System Topology
            </span>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[oklch(0.62_0.26_255_/_10%)] border border-[oklch(0.62_0.26_255_/_20%)] text-[oklch(0.85_0.15_255)]">
               <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[oklch(0.62_0.26_255)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[oklch(0.62_0.26_255)]"></span>
              </span>
              <span className="font-mono text-xs font-bold tracking-widest uppercase">
                Active Routing
              </span>
            </div>
          </div>
        </motion.div>

        {/* ========================================
          THE ARCHITECTURE MAP
          ======================================== */}
        <div className="relative">
          
          {/* Animated SVG Data Flow Lines (Visible on Desktop) */}
          <div className="hidden md:block absolute inset-0 z-0 pointer-events-none">
            <svg className="w-full h-full" style={{ filter: "drop-shadow(0 0 8px rgba(167, 139, 250, 0.3))" }}>
              {/* Line: DB to Automation */}
              <motion.path
                d="M 20% 50% L 50% 80%"
                fill="none"
                stroke="oklch(1 1 1 / 15%)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <motion.path
                d="M 20% 50% L 50% 80%"
                fill="none"
                stroke="oklch(0.62 0.26 255)"
                strokeWidth="2"
                initial={{ strokeDasharray: "0 1000", strokeDashoffset: 0 }}
                animate={inView ? { strokeDasharray: "100 1000", strokeDashoffset: -1000 } : {}}
                transition={{ duration: 4, ease: "linear", repeat: Infinity }}
              />

              {/* Line: Automation to LLM */}
              <motion.path
                d="M 50% 80% L 50% 20%"
                fill="none"
                stroke="oklch(1 1 1 / 15%)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
               <motion.path
                d="M 50% 80% L 50% 20%"
                fill="none"
                stroke="oklch(0.72 0.18 195)"
                strokeWidth="2"
                initial={{ strokeDasharray: "0 1000", strokeDashoffset: 0 }}
                animate={inView ? { strokeDasharray: "100 1000", strokeDashoffset: -1000 } : {}}
                transition={{ duration: 3, ease: "linear", repeat: Infinity, delay: 0.5 }}
              />

              {/* Line: LLM to Action Agents */}
              <motion.path
                d="M 50% 20% L 80% 50%"
                fill="none"
                stroke="oklch(1 1 1 / 15%)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <motion.path
                d="M 50% 20% L 80% 50%"
                fill="none"
                stroke="oklch(0.55 0.28 290)"
                strokeWidth="2"
                initial={{ strokeDasharray: "0 1000", strokeDashoffset: 0 }}
                animate={inView ? { strokeDasharray: "100 1000", strokeDashoffset: -1000 } : {}}
                transition={{ duration: 4, ease: "linear", repeat: Infinity, delay: 1 }}
              />
            </svg>
          </div>

          {/* Grid Layout for Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 relative z-10 md:min-h-[600px]">
            {t.tools.categories.map((cat: any, i: number) => {
              const mappedData = CATEGORY_MAP[cat.label] || defaultMapping;
              const Icon = mappedData.icon;
              const hexColor = mappedData.color;
              const positionClass = mappedData.position;

              return (
                <motion.div
                  key={cat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: EASE }}
                  className={`p-6 rounded-[2rem] relative overflow-hidden group border transition-all duration-500 hover:-translate-y-1 bg-[#0A0A0A]/90 backdrop-blur-xl ${positionClass}`}
                  style={{
                    borderColor: "oklch(1 1 1 / 5%)",
                    boxShadow: "0 20px 40px oklch(0 0 0 / 20%)"
                  }}
                >
                  {/* Subtle Node Glow */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${hexColor} / 15%) 0%, transparent 70%)` }}
                  />

                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div 
                      className="p-2.5 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                      style={{ background: `${hexColor} / 15%`, color: hexColor }}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-white transition-colors">
                        {cat.label}
                      </h3>
                    </div>
                  </div>

                  {/* Tech Stack Connectors */}
                  <div className="flex flex-wrap gap-2.5 relative z-10">
                    {cat.items.map((tool: string, idx: number) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 hover:scale-105 cursor-default"
                        style={{
                          background: "oklch(1 1 1 / 3%)",
                          border: "1px solid oklch(1 1 1 / 8%)",
                          color: "oklch(0.85 0.02 260)",
                        }}
                      >
                        <span 
                          className="w-1 h-1 rounded-full" 
                          style={{ background: hexColor, boxShadow: `0 0 6px ${hexColor}` }}
                        />
                        {tool}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ========================================
          ENTERPRISE BANNER
          ======================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
          className="mt-16 flex items-center justify-center"
        >
          <div 
            className="flex flex-col md:flex-row items-center gap-4 px-6 md:px-8 py-4 rounded-2xl border backdrop-blur-md text-center md:text-left"
            style={{
              background: "oklch(0.08 0.01 260 / 40%)",
              borderColor: "oklch(1 1 1 / 10%)"
            }}
          >
            <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0" />
            <span className="text-sm font-medium text-neutral-300">
              {t.tools.banner}
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}