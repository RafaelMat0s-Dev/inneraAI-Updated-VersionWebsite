"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/language-context";
import { Building2, Stethoscope, Euro, Activity, Layers } from "lucide-react";

// Curva de animação premium e agressiva
const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function Services() {
  const { t } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const [active, setActive] = useState<"real_estate" | "clinics">("real_estate");
  const current = active === "real_estate" ? t.services.real_estate : t.services.clinics;

  return (
    <section ref={ref} id="servicos" className="relative py-32 px-6 z-10">
      <div className="max-w-[1200px] mx-auto">
        
        {/* ========================================
          CABEÇALHO
          ======================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest uppercase mb-4" style={{ color: "oklch(0.62 0.26 255)" }}>
            <Layers size={14} />
            {t.services.eyebrow}
          </span>
          <h2
            className="font-bold leading-[1.1] tracking-tight mb-6 max-w-3xl"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)", color: "oklch(0.96 0.006 255)" }}
          >
            {t.services.headline}
          </h2>
          <p className="font-medium text-lg max-w-2xl" style={{ color: "oklch(0.65 0.025 255)" }}>
            {t.services.sub}
          </p>
        </motion.div>

        {/* ========================================
          SELETOR DE NICHO (Estilo Pill Premium)
          ======================================== */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1.5 rounded-full" style={{ background: "oklch(0.08 0.01 260 / 50%)", border: "1px solid oklch(1 1 1 / 5%)" }}>
            <button
              onClick={() => setActive("real_estate")}
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300"
              style={{
                background: active === "real_estate" ? "oklch(0.62 0.26 255 / 15%)" : "transparent",
                color: active === "real_estate" ? "oklch(0.85 0.15 255)" : "oklch(0.55 0.02 255)",
                border: active === "real_estate" ? "1px solid oklch(0.62 0.26 255 / 30%)" : "1px solid transparent",
              }}
            >
              <Building2 size={16} />
              Imobiliárias
            </button>
            <button
              onClick={() => setActive("clinics")}
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300"
              style={{
                background: active === "clinics" ? "oklch(0.55 0.28 290 / 15%)" : "transparent",
                color: active === "clinics" ? "oklch(0.80 0.18 290)" : "oklch(0.55 0.02 255)",
                border: active === "clinics" ? "1px solid oklch(0.55 0.28 290 / 30%)" : "1px solid transparent",
              }}
            >
              <Stethoscope size={16} />
              Clínicas & Saúde
            </button>
          </div>
        </motion.div>

        {/* ========================================
          A ARQUITETURA BENTO BOX
          ======================================== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            
            {/* COLUNA ESQUERDA: O Contexto e o Retorno (Span 5) */}
            <div 
              className="lg:col-span-5 flex flex-col justify-between p-8 md:p-12 rounded-[2rem] relative overflow-hidden group"
              style={{
                background: "oklch(0.08 0.01 260 / 60%)",
                border: "1px solid oklch(1 1 1 / 5%)",
              }}
            >
              {/* Brilho de Fundo Dinâmico */}
              <div 
                className="absolute top-0 right-0 w-[150%] h-[150%] -translate-y-1/2 translate-x-1/4 opacity-20 pointer-events-none transition-opacity duration-700 group-hover:opacity-40"
                style={{ 
                  background: active === "real_estate" 
                    ? "radial-gradient(circle, oklch(0.62 0.26 255 / 40%) 0%, transparent 60%)" 
                    : "radial-gradient(circle, oklch(0.55 0.28 290 / 40%) 0%, transparent 60%)" 
                }}
              />

              <div className="relative z-10 mb-12">
                <span className="inline-flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full" 
                  style={{ 
                    background: active === "real_estate" ? "oklch(0.62 0.26 255 / 10%)" : "oklch(0.55 0.28 290 / 10%)",
                    color: active === "real_estate" ? "oklch(0.85 0.15 255)" : "oklch(0.80 0.18 290)",
                    border: active === "real_estate" ? "1px solid oklch(0.62 0.26 255 / 20%)" : "1px solid oklch(0.55 0.28 290 / 20%)"
                  }}
                >
                  <Activity size={12} />
                  {current.badge}
                </span>
                
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                  {current.title}
                </h3>
                <p className="text-lg leading-relaxed text-neutral-400">
                  {current.desc}
                </p>
              </div>

              {/* Bloco de Impacto Financeiro (Core B2B Value) */}
              <div 
                className="relative z-10 p-6 rounded-2xl border backdrop-blur-md"
                style={{
                  background: "oklch(0.05 0.01 260 / 80%)",
                  borderColor: active === "real_estate" ? "oklch(0.62 0.26 255 / 30%)" : "oklch(0.55 0.28 290 / 30%)"
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg" style={{ background: active === "real_estate" ? "oklch(0.62 0.26 255 / 20%)" : "oklch(0.55 0.28 290 / 20%)" }}>
                    <Euro size={18} className={active === "real_estate" ? "text-[oklch(0.85_0.15_255)]" : "text-[oklch(0.80_0.18_290)]"} />
                  </div>
                  <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-white">
                    Projeção de Retorno
                  </span>
                </div>
                <p className="font-bold text-xl md:text-2xl tracking-tight text-white">
                  {current.roi}
                </p>
              </div>
            </div>

            {/* COLUNA DIREITA: A Grelha de Funcionalidades (Span 7) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {current.items.map((item: any, i: number) => (
                <div 
                  key={i} 
                  className="p-8 rounded-[2rem] flex flex-col group transition-all duration-500 hover:-translate-y-1"
                  style={{
                    background: "oklch(0.08 0.01 260 / 40%)",
                    border: "1px solid oklch(1 1 1 / 5%)",
                  }}
                >
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                      {item.icon}
                    </span>
                    <span className="font-mono text-[10px] font-bold tracking-widest text-neutral-600 uppercase">
                      Módulo 0{i + 1}
                    </span>
                  </div>
                  
                  <h4 className="font-bold text-xl text-white tracking-tight mb-3 group-hover:text-[oklch(0.96_0.006_255)] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-medium flex-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}