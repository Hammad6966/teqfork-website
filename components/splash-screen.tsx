"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// ─── Types & constants ─────────────────────────────────────────────────────────

type Phase = "s1" | "s1-exit" | "s2" | "s2-exit" | "done";

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1]; // Custom easing (note: not used in ease property)
const PANEL_DUR = 0.75;
const PANEL_DELAY = 0.1;

const BADGES = ["24/7 Active", "2-Week Build", "100% Automated"];

// Fixed positions — no Math.random() to avoid hydration mismatch
const DOTS = [
  { top: "12%", left: "7%",   dur: 2.3, delay: 0.0 },
  { top: "78%", left: "11%",  dur: 3.1, delay: 0.5 },
  { top: "34%", left: "91%",  dur: 2.7, delay: 0.2 },
  { top: "61%", left: "88%",  dur: 3.4, delay: 0.8 },
  { top: "88%", left: "55%",  dur: 2.1, delay: 0.3 },
  { top: "8%",  left: "67%",  dur: 3.6, delay: 0.6 },
  { top: "45%", left: "3%",   dur: 2.5, delay: 0.1 },
  { top: "22%", left: "82%",  dur: 3.0, delay: 0.9 },
  { top: "70%", left: "40%",  dur: 2.8, delay: 0.4 },
  { top: "50%", left: "93%",  dur: 3.3, delay: 0.7 },
];

// ─── Split-panel pair ─────────────────────────────────────────────────────────

/**
 * Two fixed half-screen panels that either sit at y=0 (covering the viewport)
 * or animate to y=±100% (sliding off-screen, revealing content beneath).
 *
 * `mode="hold"` → panels are static at y=0 (controlled via initial=false + animate)
 * `mode="exit"` → panels mount at y=0 and immediately animate off-screen
 */
function SplitPanels({
  mode,
  color = "#050d12",
  zIndex = 9998,
}: {
  mode: "hold" | "exit";
  color?: string;
  zIndex?: number;
}) {
  if (mode === "hold") {
    return (
      <>
        <motion.div
          className="fixed inset-x-0 top-0"
          style={{ height: "50vh", background: color, zIndex }}
          initial={false}
          animate={{ y: "0%" }}
        />
        <motion.div
          className="fixed inset-x-0 bottom-0"
          style={{ height: "50vh", background: color, zIndex }}
          initial={false}
          animate={{ y: "0%" }}
        />
      </>
    );
  }

  // mode === "exit": animate away as soon as panels mount
  const transition = { duration: PANEL_DUR, ease: EASE, delay: PANEL_DELAY };
  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0"
        style={{ height: "50vh", background: color, zIndex }}
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={transition}
      />
      <motion.div
        className="fixed inset-x-0 bottom-0"
        style={{ height: "50vh", background: color, zIndex }}
        initial={{ y: "0%" }}
        animate={{ y: "100%" }}
        transition={transition}
      />
    </>
  );
}

// ─── Stage 2 background (always rendered under Stage 1) ───────────────────────

function Stage2Background({ phase }: { phase: Phase }) {
  const isActive = phase === "s2" || phase === "s2-exit";

  return (
    <div
      className="fixed inset-0 overflow-hidden"
      style={{ background: "#050d12", zIndex: 9994 }}
      aria-hidden="true"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(0,245,255,0.1) 0%, transparent 65%)",
        }}
      />

      {/* Floating ambient dots */}
      {DOTS.map((dot, i) => (
        <div
          key={i}
          className="absolute w-[2px] h-[2px] rounded-full"
          style={{
            top: dot.top,
            left: dot.left,
            background: "#00F5FF",
            opacity: 0.4,
            animation: `splashDotFloat ${dot.dur}s ${dot.delay}s ease-in-out infinite alternate`,
          }}
        />
      ))}

      {/* Concentric pulse rings — positioned relative to viewport center */}
      <div className="absolute" style={{ top: "50%", left: "50%" }}>
        {[120, 200, 300].map((size, i) => (
          <div
            key={size}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              top: -size / 2,
              left: -size / 2,
              border: "1px solid rgba(0,245,255,0.15)",
              animation: `splashRingPulse 2.5s ${i * 0.3}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Center content — fades in when stage 2 is active */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        {/* Lightning bolt with CSS glow pulse */}
        <motion.div
          initial={false}
          animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="text-[56px] leading-none mb-6 select-none"
            style={{ animation: "splashGlowPulse 2s ease-in-out infinite" }}
          >
            ⚡
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl font-black tracking-tight text-white mb-3"
          initial={false}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          Automate Your Business
        </motion.h1>

        <motion.p
          className="text-base max-w-sm mb-8"
          style={{ color: "rgba(255,255,255,0.5)" }}
          initial={false}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 14 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          AI-powered systems that work while you sleep
        </motion.p>

        {/* Badge pills */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {BADGES.map((badge, i) => (
            <motion.span
              key={badge}
              className="bg-[#00F5FF10] border border-[#00F5FF30] text-[#00F5FF] text-xs px-3 py-1 rounded-full"
              initial={false}
              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 8 }}
              transition={{
                delay: 0.5 + i * 0.2,
                duration: 0.4,
              }}
            >
              {badge}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Root component ────────────────────────────────────────────────────────────

export default function SplashScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  // Start as "done" so SSR never renders the overlay (avoids hydration mismatch).
  const [phase, setPhase] = useState<Phase>("done");

  useEffect(() => {
    // Only show on fresh session visits
    if (sessionStorage.getItem("splash_shown")) return;
    sessionStorage.setItem("splash_shown", "1");

    // Lock scroll for duration of splash
    document.body.style.overflow = "hidden";

    setPhase("s1");

    //  t=0      Stage 1 static (logo + panels at y=0)
    //  t=1200   Stage 1 panels begin exit (0.75s + 0.1s delay = 0.85s total)
    //  t=2050   Stage 2 content fades in
    //  t=4050   Stage 2 exit panels mount and animate off
    //  t=4900   Everything done, scroll unlocked
    const t1 = setTimeout(() => setPhase("s1-exit"), 1200);
    const t2 = setTimeout(() => setPhase("s2"),       2050);
    const t3 = setTimeout(() => setPhase("s2-exit"),  4050);
    const t4 = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
    }, 4900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {/* ── Stage 2 background (lives under Stage 1 panels during reveal) ─ */}
      {phase !== "done" && <Stage2Background phase={phase} />}

      {/* ── Stage 1: Teqfork logo + static panels ─────────────────────── */}
      {(phase === "s1" || phase === "s1-exit") && (
        <>
          {/* Logo — fades out before panels fully open */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center pointer-events-none"
            style={{ zIndex: 9999 }}
            animate={{ opacity: phase === "s1-exit" ? 0 : 1 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/teqfork_logo.webp"
                alt="Teqfork"
                width={72}
                height={72}
                priority
                className="rounded-xl"
              />
              <span
                className="text-xl font-semibold tracking-widest uppercase"
                style={{
                  color: "#00F5FF",
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                Teqfork
              </span>
            </div>
          </motion.div>

          {/* Panels — hold at y=0 during "s1", animate out during "s1-exit" */}
          {phase === "s1" ? (
            <SplitPanels mode="hold" zIndex={9998} />
          ) : (
            <SplitPanels mode="exit" zIndex={9998} />
          )}
        </>
      )}

      {/* ── Stage 2 exit: panels mount and animate off immediately ─────── */}
      {phase === "s2-exit" && <SplitPanels mode="exit" zIndex={9998} />}

      {/* Always render children so SSR output is complete */}
      {children}
    </>
  );
}
