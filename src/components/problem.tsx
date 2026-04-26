"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/language-context";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function Problem() {
  const { t } = useLang();

  return (
    <section className="relative py-32 md:py-48 px-6 overflow-hidden z-10" id="problem">
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
        
        {/* ========================================
          LEFT: Pinned Narrative Context
          ======================================== */}
        <div className="lg:w-5/12">
          <div className="sticky top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <span className="flex items-center gap-3 text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: "oklch(0.62 0.26 255)" }}>
                <span className="w-8 h-px" style={{ background: "oklch(0.62 0.26 255)" }} />
                A Realidade Oculta
              </span>
              
              <h2 
                className="font-bold leading-[1.1] tracking-tight mb-6" 
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "oklch(0.96 0.006 255)" }}
              >
                {t.problem.headline}
              </h2>
              
              <p 
                className="text-lg leading-relaxed font-medium" 
                style={{ color: "oklch(0.65 0.025 255)", maxWidth: "400px" }}
              >
                {t.problem.sub}
              </p>
            </motion.div>
          </div>
        </div>

        {/* ========================================
          RIGHT: The Scrolling Story Beats
          ======================================== */}
        <div className="lg:w-7/12 flex flex-col gap-16 md:gap-32 relative">
          
          {/* Subtle connecting thread behind the items */}
          <div className="absolute left-[23px] top-12 bottom-12 w-px hidden md:block" style={{ background: "linear-gradient(to bottom, transparent, oklch(1 1 1 / 10%), transparent)" }} />

          {t.problem.items.map((item: any, i: number) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.8, ease: EASE }}
              className="relative flex gap-8 md:gap-12 group"
            >
              {/* Chapter / Phase Number */}
              <div className="hidden md:flex flex-col items-center relative z-10">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center font-mono text-sm font-semibold transition-colors duration-500"
                  style={{ 
                    background: "oklch(0.10 0.014 262 / 80%)", 
                    color: "oklch(0.62 0.26 255)",
                    border: "1px solid oklch(0.62 0.26 255 / 20%)",
                    backdropFilter: "blur(8px)"
                  }}
                >
                  0{i + 1}
                </div>
                {/* Active highlight segment on the thread */}
                <div className="w-px h-full mt-4 scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-700" style={{ background: "oklch(0.62 0.26 255 / 50%)" }} />
              </div>

              {/* Story Content Block */}
              <div className="flex-1 pt-2">
                {/* Mobile Number */}
                <span className="md:hidden font-mono text-xs font-semibold mb-3 block" style={{ color: "oklch(0.62 0.26 255)" }}>
                  0{i + 1}
                </span>
                
                <h3 
                  className="text-2xl md:text-3xl font-bold tracking-tight mb-4 transition-colors duration-300" 
                  style={{ color: "oklch(0.96 0.006 255)" }}
                >
                  {item.title}
                </h3>
                
                <p 
                  className="text-base md:text-lg leading-relaxed" 
                  style={{ color: "oklch(0.65 0.025 255)" }}
                >
                  {item.desc}
                </p>

                {/* Organic fading underline instead of harsh borders */}
                <div 
                  className="h-px w-full mt-10 opacity-30 transition-opacity duration-500 group-hover:opacity-100" 
                  style={{ background: "linear-gradient(90deg, oklch(0.62 0.26 255 / 40%), transparent)" }} 
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}