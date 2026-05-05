"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/language-context";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

function AIRobot() {
  return (
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      className="relative w-full max-w-[360px] mx-auto select-none"
    >
      {/* Ambient glow behind robot */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, oklch(0.62 0.26 255 / 30%) 0%, oklch(0.55 0.28 290 / 18%) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <svg
        viewBox="0 0 400 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full relative z-10 drop-shadow-2xl"
      >
        <defs>
          <radialGradient id="visorGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.75 0.22 255)" stopOpacity="1" />
            <stop offset="100%" stopColor="oklch(0.50 0.28 290)" stopOpacity="0.8" />
          </radialGradient>
          <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="40%" stopColor="oklch(0.72 0.20 255)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="oklch(0.62 0.26 255)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="platformGrad" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="oklch(0.62 0.26 255)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="softGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* ── ANTENNAS ── */}
        <line x1="200" y1="28" x2="200" y2="82" stroke="oklch(0.75 0.18 195)" strokeWidth="2.5" />
        <circle cx="200" cy="22" r="10" fill="oklch(0.75 0.18 195)" filter="url(#glow)" />
        <circle cx="200" cy="22" r="5" fill="white" />
        <motion.circle
          cx="200" cy="22" r="16"
          fill="none"
          stroke="oklch(0.75 0.18 195)"
          strokeWidth="1"
          animate={{ opacity: [0.6, 0, 0.6], scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          style={{ transformOrigin: "200px 22px" }}
        />
        <line x1="155" y1="55" x2="172" y2="85" stroke="oklch(0.62 0.26 255)" strokeWidth="2" opacity="0.7" />
        <circle cx="148" cy="50" r="7" fill="oklch(0.62 0.26 255)" filter="url(#glow)" opacity="0.9" />
        <line x1="245" y1="55" x2="228" y2="85" stroke="oklch(0.55 0.28 290)" strokeWidth="2" opacity="0.7" />
        <circle cx="252" cy="50" r="7" fill="oklch(0.55 0.28 290)" filter="url(#glow)" opacity="0.9" />

        {/* ── HEAD ── */}
        <rect x="102" y="84" width="196" height="158" rx="38"
          fill="oklch(0.08 0.012 260)"
          stroke="oklch(0.62 0.26 255)"
          strokeWidth="1.5"
          strokeOpacity="0.45"
        />
        {/* Head inner gradient */}
        <rect x="102" y="84" width="196" height="158" rx="38" fill="url(#visorGrad)" opacity="0.05" />

        {/* Ear panels */}
        <rect x="78" y="108" width="28" height="72" rx="14"
          fill="oklch(0.10 0.014 262)"
          stroke="oklch(0.55 0.28 290)"
          strokeWidth="1" strokeOpacity="0.35"
        />
        <rect x="85" y="128" width="14" height="32" rx="7"
          fill="oklch(0.55 0.28 290)" fillOpacity="0.12"
          stroke="oklch(0.55 0.28 290)" strokeWidth="0.5" strokeOpacity="0.5"
        />
        <rect x="294" y="108" width="28" height="72" rx="14"
          fill="oklch(0.10 0.014 262)"
          stroke="oklch(0.62 0.26 255)"
          strokeWidth="1" strokeOpacity="0.35"
        />
        <rect x="301" y="128" width="14" height="32" rx="7"
          fill="oklch(0.62 0.26 255)" fillOpacity="0.12"
          stroke="oklch(0.62 0.26 255)" strokeWidth="0.5" strokeOpacity="0.5"
        />

        {/* VISOR */}
        <rect x="118" y="136" width="164" height="48" rx="24"
          fill="url(#visorGrad)" opacity="0.88" filter="url(#softGlow)"
        />
        <rect x="124" y="142" width="58" height="14" rx="7" fill="white" opacity="0.18" />
        {/* Eyes */}
        <circle cx="163" cy="160" r="11" fill="oklch(0.08 0.012 260)" opacity="0.85" />
        <circle cx="163" cy="160" r="5.5" fill="white" opacity="0.95" />
        <motion.circle
          cx="163" cy="160" r="3"
          fill="oklch(0.62 0.26 255)"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
        <circle cx="237" cy="160" r="11" fill="oklch(0.08 0.012 260)" opacity="0.85" />
        <circle cx="237" cy="160" r="5.5" fill="white" opacity="0.95" />
        <motion.circle
          cx="237" cy="160" r="3"
          fill="oklch(0.55 0.28 290)"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 3, delay: 0.5, ease: "easeInOut" }}
        />

        {/* Mouth bar */}
        <rect x="162" y="212" width="76" height="9" rx="4.5"
          fill="oklch(0.62 0.26 255)" fillOpacity="0.35"
        />
        <motion.rect
          x="168" y="214" width="64" height="5" rx="2.5"
          fill="oklch(0.72 0.20 255)"
          animate={{ width: [64, 40, 64] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          filter="url(#glow)"
        />

        {/* Head circuit lines */}
        <line x1="118" y1="106" x2="148" y2="106" stroke="oklch(0.62 0.26 255)" strokeWidth="1" opacity="0.2" />
        <line x1="252" y1="106" x2="282" y2="106" stroke="oklch(0.62 0.26 255)" strokeWidth="1" opacity="0.2" />

        {/* ── NECK ── */}
        <rect x="176" y="240" width="48" height="30" rx="9"
          fill="oklch(0.10 0.014 262)"
          stroke="oklch(0.62 0.26 255)" strokeWidth="1" strokeOpacity="0.3"
        />
        <circle cx="188" cy="255" r="3.5" fill="oklch(0.62 0.26 255)" fillOpacity="0.55" />
        <circle cx="200" cy="255" r="3.5" fill="oklch(0.75 0.18 195)" fillOpacity="0.55" />
        <circle cx="212" cy="255" r="3.5" fill="oklch(0.55 0.28 290)" fillOpacity="0.55" />

        {/* ── BODY ── */}
        <rect x="92" y="268" width="216" height="178" rx="30"
          fill="oklch(0.08 0.012 260)"
          stroke="oklch(0.62 0.26 255)" strokeWidth="1.5" strokeOpacity="0.35"
        />
        <rect x="92" y="268" width="216" height="178" rx="30" fill="url(#visorGrad)" opacity="0.04" />

        {/* CHEST CORE — concentric rings */}
        <circle cx="200" cy="352" r="52" fill="none" stroke="oklch(0.62 0.26 255)" strokeWidth="0.8" opacity="0.12" />
        <circle cx="200" cy="352" r="40" fill="none" stroke="oklch(0.62 0.26 255)" strokeWidth="0.8" opacity="0.22" />
        <circle cx="200" cy="352" r="28" fill="oklch(0.62 0.26 255)" fillOpacity="0.08" />
        <motion.circle
          cx="200" cy="352" r="28"
          fill="none"
          stroke="oklch(0.72 0.20 255)"
          strokeWidth="1.5"
          strokeDasharray="12 6"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          style={{ transformOrigin: "200px 352px" }}
        />
        <circle cx="200" cy="352" r="17" fill="url(#coreGrad)" filter="url(#softGlow)" />
        <circle cx="200" cy="352" r="9" fill="oklch(0.72 0.20 255)" filter="url(#glow)" />
        <circle cx="200" cy="352" r="4.5" fill="white" />

        {/* Body indicator dots — left cluster */}
        <circle cx="124" cy="285" r="4.5" fill="oklch(0.70 0.22 155)" filter="url(#glow)" opacity="0.9" />
        <circle cx="140" cy="285" r="4.5" fill="oklch(0.55 0.28 290)" filter="url(#glow)" opacity="0.75" />
        <circle cx="156" cy="285" r="4.5" fill="oklch(0.62 0.26 255)" filter="url(#glow)" opacity="0.9" />
        {/* Body indicator dots — right cluster */}
        <circle cx="276" cy="285" r="4.5" fill="oklch(0.62 0.26 255)" filter="url(#glow)" opacity="0.9" />
        <circle cx="260" cy="285" r="4.5" fill="oklch(0.55 0.28 290)" filter="url(#glow)" opacity="0.75" />
        <circle cx="244" cy="285" r="4.5" fill="oklch(0.70 0.22 155)" filter="url(#glow)" opacity="0.9" />

        {/* Body panel side lines */}
        <line x1="110" y1="310" x2="148" y2="310" stroke="oklch(0.62 0.26 255)" strokeWidth="1" opacity="0.2" />
        <line x1="252" y1="310" x2="290" y2="310" stroke="oklch(0.62 0.26 255)" strokeWidth="1" opacity="0.2" />
        <line x1="110" y1="400" x2="148" y2="400" stroke="oklch(0.62 0.26 255)" strokeWidth="1" opacity="0.2" />
        <line x1="252" y1="400" x2="290" y2="400" stroke="oklch(0.62 0.26 255)" strokeWidth="1" opacity="0.2" />

        {/* Body bottom vent */}
        <rect x="152" y="422" width="96" height="7" rx="3.5" fill="oklch(0.62 0.26 255)" fillOpacity="0.14" />
        <rect x="164" y="432" width="72" height="5" rx="2.5" fill="oklch(0.62 0.26 255)" fillOpacity="0.09" />

        {/* ── ARMS ── */}
        {/* Left arm */}
        <rect x="52" y="274" width="44" height="124" rx="20"
          fill="oklch(0.09 0.013 261)"
          stroke="oklch(0.55 0.28 290)" strokeWidth="1.5" strokeOpacity="0.3"
        />
        <rect x="60" y="295" width="28" height="46" rx="9"
          fill="oklch(0.55 0.28 290)" fillOpacity="0.10"
          stroke="oklch(0.55 0.28 290)" strokeWidth="0.5" strokeOpacity="0.35"
        />
        <circle cx="74" cy="318" r="8" fill="none" stroke="oklch(0.55 0.28 290)" strokeWidth="1" opacity="0.55" />
        <circle cx="74" cy="318" r="3.5" fill="oklch(0.55 0.28 290)" filter="url(#glow)" opacity="0.85" />

        {/* Right arm */}
        <rect x="304" y="274" width="44" height="124" rx="20"
          fill="oklch(0.09 0.013 261)"
          stroke="oklch(0.62 0.26 255)" strokeWidth="1.5" strokeOpacity="0.3"
        />
        <rect x="312" y="295" width="28" height="46" rx="9"
          fill="oklch(0.62 0.26 255)" fillOpacity="0.10"
          stroke="oklch(0.62 0.26 255)" strokeWidth="0.5" strokeOpacity="0.35"
        />
        <circle cx="326" cy="318" r="8" fill="none" stroke="oklch(0.62 0.26 255)" strokeWidth="1" opacity="0.55" />
        <circle cx="326" cy="318" r="3.5" fill="oklch(0.72 0.20 255)" filter="url(#glow)" opacity="0.85" />

        {/* ── BASE PLATFORM GLOW ── */}
        <ellipse cx="200" cy="510" rx="140" ry="10" fill="url(#platformGrad)" />
        <ellipse cx="200" cy="510" rx="90" ry="6" fill="oklch(0.62 0.26 255)" fillOpacity="0.15" />
        <ellipse cx="200" cy="510" rx="45" ry="3.5" fill="oklch(0.75 0.18 195)" fillOpacity="0.20" />
      </svg>
    </motion.div>
  );
}

type FloatingCardProps = {
  value: string;
  label: string;
  sub: string;
  delay?: number;
  color?: string;
  className?: string;
};

function FloatingCard({ value, label, sub, delay = 0, color = "oklch(0.72 0.20 255)", className = "" }: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.8 + delay, ease: EASE }}
      className={`absolute z-20 overflow-hidden ${className}`}
      style={{
        background: "oklch(0.08 0.012 260 / 85%)",
        backdropFilter: "blur(20px)",
        borderRadius: "1rem",
        padding: "1rem 1.25rem",
        minWidth: "148px",
        border: "1px solid",
        borderColor: `color-mix(in oklch, ${color} 30%, transparent)`,
      }}
    >
      {/* Scan line animation */}
      <motion.div
        className="absolute inset-x-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)`, opacity: 0.5 }}
        animate={{ top: ["-2px", "110%"] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "linear", delay }}
      />
      <div className="relative z-10">
        <div className="text-2xl font-bold leading-none mb-1.5 tabular-nums" style={{ color }}>
          {value}
        </div>
        <div className="text-xs font-semibold text-white/85 leading-tight">{label}</div>
        <div className="text-[10px] font-medium mt-0.5" style={{ color: "oklch(0.55 0.025 255)" }}>{sub}</div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center px-6 pt-24 pb-20 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── LEFT: Content ── */}
          <div className="flex flex-col items-start order-2 lg:order-1">

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mb-8"
            >
              <span
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-xl"
                style={{ background: "oklch(0.10 0.014 262 / 60%)" }}
              >
                <motion.span
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: "oklch(0.72 0.20 255)", boxShadow: "0 0 10px oklch(0.72 0.20 255)" }}
                />
                <span className="font-mono text-[11px] font-semibold tracking-widest uppercase" style={{ color: "oklch(0.85 0.15 255)" }}>
                  {t.hero.status}
                </span>
              </span>
            </motion.div>

            {/* Headline */}
            <div className="mb-7">
              <motion.h1
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.1, ease: EASE }}
                className="font-bold tracking-tight leading-[1.05]"
                style={{ fontSize: "clamp(3rem, 6.5vw, 5.5rem)" }}
              >
                <span className="block text-white">{t.hero.headline1}</span>
                <span
                  className="block relative"
                  style={{ color: "oklch(0.72 0.20 255)" }}
                >
                  {t.hero.headline2}
                  <motion.span
                    className="absolute inset-0 -z-10 blur-[70px]"
                    style={{ background: "oklch(0.62 0.26 255 / 30%)" }}
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  />
                </span>
              </motion.h1>
            </div>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
              className="text-lg leading-relaxed mb-10 max-w-[520px] font-medium"
              style={{ color: "oklch(0.72 0.02 260)" }}
            >
              {t.hero.sub}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById("qualificacao")?.scrollIntoView({ behavior: "smooth" })}
                className="group relative overflow-hidden inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm text-white"
                style={{ background: "linear-gradient(135deg, oklch(0.62 0.26 255), oklch(0.55 0.28 290))", boxShadow: "0 0 30px oklch(0.62 0.26 255 / 35%)" }}
              >
                <span className="relative z-10">{t.hero.cta_primary}</span>
                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById("processo")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-white border border-white/15 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-colors"
              >
                {t.hero.cta_secondary}
              </motion.button>
            </motion.div>

            {/* Trust pills row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65, ease: EASE }}
              className="flex flex-wrap gap-2.5"
            >
              {t.hero.metrics.map((m, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10"
                  style={{ background: "oklch(0.10 0.014 262 / 50%)" }}
                >
                  <CheckCircle2 size={11} style={{ color: "oklch(0.70 0.22 155)" }} />
                  <span className="font-mono text-[10px] font-semibold tracking-wider uppercase" style={{ color: "oklch(0.70 0.025 255)" }}>
                    {m.value} {m.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Robot + floating cards ── */}
          <div className="relative flex items-center justify-center min-h-[420px] lg:min-h-[560px] order-1 lg:order-2">

            {/* Robot */}
            <AIRobot />

            {/* Floating card: top-left */}
            <FloatingCard
              value={t.hero.metrics[0].value}
              label={t.hero.metrics[0].label}
              sub={t.hero.metrics[0].sub}
              color="oklch(0.72 0.20 255)"
              delay={0}
              className="top-4 -left-2 lg:top-8 lg:-left-6"
            />

            {/* Floating card: top-right */}
            <FloatingCard
              value={t.hero.metrics[1].value}
              label={t.hero.metrics[1].label}
              sub={t.hero.metrics[1].sub}
              color="oklch(0.65 0.24 290)"
              delay={0.15}
              className="top-20 -right-2 lg:top-24 lg:-right-6"
            />

            {/* Floating card: bottom-left */}
            <FloatingCard
              value={t.hero.metrics[2].value}
              label={t.hero.metrics[2].label}
              sub={t.hero.metrics[2].sub}
              color="oklch(0.70 0.22 155)"
              delay={0.3}
              className="bottom-10 -left-2 lg:bottom-16 lg:-left-6"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
