"use client";

import { useEffect, useRef } from "react";

export function GradientBackground() {
  const interactiveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    
    const updateMousePosition = (ev: MouseEvent) => {
      if (!interactiveRef.current) return;
      
      // Use requestAnimationFrame to ensure buttery smooth performance
      animationFrameId = requestAnimationFrame(() => {
        const { clientX, clientY } = ev;
        const x = Math.round((clientX / window.innerWidth) * 100);
        const y = Math.round((clientY / window.innerHeight) * 100);
        
        interactiveRef.current?.style.setProperty("--mouse-x", `${x}%`);
        interactiveRef.current?.style.setProperty("--mouse-y", `${y}%`);
      });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[oklch(0.07_0.012_260)]" aria-hidden>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slow-pan {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-10%, 10%) scale(1.1); }
        }
        @keyframes slow-pan-reverse {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10%, -10%) scale(1.1); }
        }
      `}} />

      {/* Grid pattern with slightly higher contrast */}
      <div className="absolute inset-0 grid-pattern opacity-70 mix-blend-overlay" />

      {/* Interactive Container for the mouse-following orb */}
      <div ref={interactiveRef} className="absolute inset-0 w-full h-full">
        
        {/* Core Interactive Orb — intensely follows the cursor */}
        <div
          className="absolute rounded-full blur-[100px] transition-transform duration-75 ease-out"
          style={{
            width: "60vw",
            height: "60vw",
            left: "var(--mouse-x, 50%)",
            top: "var(--mouse-y, 50%)",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, oklch(0.62 0.26 255 / 25%) 0%, transparent 60%)",
            mixBlendMode: "color-dodge",
          }}
        />
      </div>

      {/* Ambient Orb 1 — Deep violet, drifting */}
      <div
        className="absolute rounded-full blur-[120px]"
        style={{
          width: "80vw",
          height: "80vw",
          top: "-20%",
          right: "-10%",
          background: "radial-gradient(circle, oklch(0.55 0.28 290 / 20%) 0%, transparent 60%)",
          animation: "slow-pan 25s ease-in-out infinite",
          mixBlendMode: "screen",
        }}
      />

      {/* Ambient Orb 2 — Cyan anchor, drifting reverse */}
      <div
        className="absolute rounded-full blur-[100px]"
        style={{
          width: "70vw",
          height: "70vw",
          bottom: "-10%",
          left: "-10%",
          background: "radial-gradient(circle, oklch(0.75 0.18 195 / 15%) 0%, transparent 60%)",
          animation: "slow-pan-reverse 30s ease-in-out infinite",
          mixBlendMode: "screen",
        }}
      />

      {/* High-frequency Noise overlay for texture */}
      <div className="noise absolute inset-0 mix-blend-soft-light opacity-50" />

      {/* Bottom fade to ground the design */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64"
        style={{ background: "linear-gradient(to top, oklch(0.07 0.012 260) 10%, transparent)" }}
      />
    </div>
  );
}