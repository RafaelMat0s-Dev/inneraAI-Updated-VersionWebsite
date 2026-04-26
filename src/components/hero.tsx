"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/language-context";
import { ArrowRight, Clock, Users, BarChart3, CheckCircle2, Bot, Zap, Terminal } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.9, delay, ease: EASE },
});

export function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden z-10">
      
      {/* Card: Imobiliárias */}
      <motion.div
        animate={{ y: [-15, 15, -15], rotate: [0, 2, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-[20%] left-[5%] lg:left-[10%] flex flex-col gap-2 p-5 rounded-2xl pointer-events-none z-0 hidden md:flex w-64 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, oklch(0.07 0.012 260 / 40%), oklch(0.05 0.01 260 / 60%))",
          border: "1px solid oklch(0.62 0.26 255 / 30%)",
          backdropFilter: "blur(20px)",
        }}
      >
        <motion.div 
          animate={{ y: ["-100%", "300%"] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
          className="absolute inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-[oklch(0.72_0.20_255)] to-transparent shadow-[0_0_12px_oklch(0.72_0.20_255)] opacity-50"
        />
        <div className="flex items-center gap-3 mb-1 relative z-10">
          <div className="p-2.5 rounded-lg bg-[oklch(0.62_0.26_255_/_15%)]">
            <Zap size={18} className="text-[oklch(0.72_0.20_255)]" />
          </div>
          <div>
            <p className="font-mono text-[9px] font-bold tracking-widest text-[oklch(0.55_0.025_255)] uppercase">{t.hero.card_real_estate.label}</p>
            <p className="text-sm font-semibold text-white tracking-tight">{t.hero.card_real_estate.agent}</p>
          </div>
        </div>
        <div className="flex items-baseline gap-2 mt-1 relative z-10">
          <span className="font-mono text-3xl font-bold text-white">{t.hero.card_real_estate.metric}</span>
          <span className="font-mono text-[10px] text-emerald-400 font-medium uppercase tracking-wider">{t.hero.card_real_estate.sub}</span>
        </div>
      </motion.div>

      {/* Card: Clínicas */}
      <motion.div
        animate={{ y: [15, -15, 15], rotate: [0, -2, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[35%] right-[5%] lg:right-[10%] flex flex-col gap-2 p-5 rounded-2xl pointer-events-none z-0 hidden md:flex w-64 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, oklch(0.07 0.012 260 / 40%), oklch(0.05 0.01 260 / 60%))",
          border: "1px solid oklch(0.55 0.28 290 / 30%)",
          backdropFilter: "blur(20px)",
        }}
      >
         <motion.div 
          animate={{ y: ["-100%", "300%"] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear", delay: 1.5 }}
          className="absolute inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-[oklch(0.55_0.28_290)] to-transparent shadow-[0_0_12px_oklch(0.55_0.28_290)] opacity-50"
        />
         <div className="flex items-center gap-3 mb-1 relative z-10">
          <div className="p-2.5 rounded-lg bg-[oklch(0.55_0.28_290_/_15%)]">
            <Bot size={18} className="text-[oklch(0.55_0.28_290)]" />
          </div>
          <div>
            <p className="font-mono text-[9px] font-bold tracking-widest text-[oklch(0.55_0.025_255)] uppercase">{t.hero.card_clinics.label}</p>
            <p className="text-sm font-semibold text-white tracking-tight">{t.hero.card_clinics.agent}</p>
          </div>
        </div>
        <div className="flex items-baseline gap-2 mt-1 relative z-10">
          <span className="font-mono text-3xl font-bold text-white">{t.hero.card_clinics.metric}</span>
          <span className="font-mono text-[10px] text-emerald-400 font-medium uppercase tracking-wider">{t.hero.card_clinics.sub}</span>
        </div>
      </motion.div>

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Status Badge */}
        <motion.div {...fadeUp(0.1)} className="mb-8">
          <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-[#0A0A0A]/50 text-[oklch(0.85_0.15_255)] backdrop-blur-xl">
            <Terminal size={14} className="opacity-70" />
            <span className="font-mono text-[11px] font-semibold tracking-widest uppercase">{t.hero.status}</span>
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-2 h-2 rounded-full"
              style={{ background: "oklch(0.72 0.20 255)", boxShadow: "0 0 10px oklch(0.72 0.20 255)" }}
            />
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 className="font-bold leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
          <motion.span {...fadeUp(0.2)} className="block text-white">{t.hero.headline1}</motion.span>
          <motion.span {...fadeUp(0.3)} className="block relative inline-block mt-2" style={{ color: "oklch(0.72 0.20 255)" }}>
            {t.hero.headline2}
            <motion.div className="absolute inset-0 blur-[80px] -z-10" style={{ background: "oklch(0.62 0.26 255 / 40%)" }} />
          </motion.span>
          <motion.span {...fadeUp(0.4)} className="block text-white">{t.hero.headline3}</motion.span>
        </motion.h1>

        {/* Subline */}
        <motion.p {...fadeUp(0.5)} className="mt-8 leading-relaxed mx-auto font-medium" style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: "oklch(0.85 0.02 260)", maxWidth: "680px" }}>
          {t.hero.sub}
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.6)} className="mt-12 flex flex-col sm:flex-row gap-4 justify-center relative z-20">
        <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" })}
                  className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-sm text-white"
                  style={{ background: "linear-gradient(135deg, oklch(0.62 0.26 255), oklch(0.55 0.28 290))" }}
                >
                  <span className="relative z-10">{t.hero.cta_primary}</span>
                  <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            onClick={() => document.getElementById("processo")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-white border border-white/15 bg-white/5 backdrop-blur-xl"
          >
            {t.hero.cta_secondary}
          </motion.button>
        </motion.div>

        {/* Authority Grid */}
        <motion.div {...fadeUp(0.6)} className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl text-left relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="pt-8 px-4">
            <div className="flex items-center gap-2 text-emerald-400 mb-2">
              <Clock size={18} />
              <span className="font-mono font-bold tracking-widest text-[10px] uppercase">{t.hero.grid.autonomy.label}</span>
            </div>
            <h3 className="text-white font-semibold text-lg">{t.hero.grid.autonomy.title}</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">{t.hero.grid.autonomy.desc}</p>
          </div>

          <div className="pt-8 px-4">
            <div className="flex items-center gap-2 text-[oklch(0.72_0.20_255)] mb-2">
              <Users size={18} />
              <span className="font-mono font-bold tracking-widest text-[10px] uppercase">{t.hero.grid.decision.label}</span>
            </div>
            <h3 className="text-white font-semibold text-lg">{t.hero.grid.decision.title}</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">{t.hero.grid.decision.desc}</p>
          </div>

          <div className="pt-8 px-4">
            <div className="flex items-center gap-2 text-blue-400 mb-2">
              <BarChart3 size={18} />
              <span className="font-mono font-bold tracking-widest text-[10px] uppercase">{t.hero.grid.ecosystem.label}</span>
            </div>
            <h3 className="text-white font-semibold text-lg">{t.hero.grid.ecosystem.title}</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">{t.hero.grid.ecosystem.desc}</p>
          </div>
        </motion.div>

        {/* Trust signal */}
        <motion.div {...fadeUp(0.8)} className="mt-16 flex items-center justify-center gap-2">
          <CheckCircle2 size={14} className="text-emerald-500" />
          <span className="font-mono text-[10px] font-medium tracking-widest uppercase text-neutral-500">{t.hero.trust}</span>
        </motion.div>
      </div>
    </section>
  );
}