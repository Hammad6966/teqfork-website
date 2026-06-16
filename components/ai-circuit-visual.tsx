"use client";

import { motion } from "framer-motion";

// Center of the SVG canvas
const CX = 230;
const CY = 230;

// Pre-compute spoke endpoints — 8 directions, length 90 from center
const SPOKE_ANGLES = Array.from({ length: 8 }, (_, i) => (i * 45 * Math.PI) / 180);
const SPOKE_ENDS = SPOKE_ANGLES.map((a) => ({
  x: CX + 90 * Math.sin(a),
  y: CY - 90 * Math.cos(a),
}));

// Chip nodes at the 4 cardinal points of the r=140 circle
const CHIPS: { x: number; y: number; label: string }[] = [
  { x: CX,       y: CY - 140, label: "AI"  },
  { x: CX + 140, y: CY,       label: "ML"  },
  { x: CX,       y: CY + 140, label: "NLP" },
  { x: CX - 140, y: CY,       label: "API" },
];

// ── Floating stat card ────────────────────────────────────────────────────────
interface StatCardProps {
  label: string;
  value: string;
  greenDot?: boolean;
  positionStyle: React.CSSProperties;
  delay: number;
}

function StatCard({ label, value, greenDot, positionStyle, delay }: StatCardProps) {
  return (
    <motion.div
      className="absolute z-20"
      style={positionStyle}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        className="bg-[rgba(5,20,26,0.9)] border border-[rgba(0,245,255,0.2)] rounded-xl px-3 py-2 backdrop-blur-sm"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: delay * 0.4 }}
      >
        <p className="text-[9px] text-white/40 tracking-widest uppercase">{label}</p>
        <div className="flex items-center gap-1 mt-0.5">
          {greenDot && (
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
          )}
          <p className="text-[#00F5FF] font-bold text-sm leading-none">{value}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Main visual ───────────────────────────────────────────────────────────────
export function AiCircuitVisual() {
  return (
    <div className="relative w-[320px] h-[320px] md:w-[460px] md:h-[460px]">
      {/* Radial background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(0,245,255,0.06) 0%, transparent 65%)",
        }}
      />

      {/* ── Floating stat cards ───────────────────────────────────────── */}
      <StatCard
        label="Uptime"
        value="99.9%"
        greenDot
        positionStyle={{ top: 40, right: -20 }}
        delay={0.5}
      />
      <StatCard
        label="Calls Handled"
        value="2,400+ / mo"
        positionStyle={{ bottom: 50, left: -20 }}
        delay={0.7}
      />
      <StatCard
        label="Avg Build Time"
        value="2 Weeks"
        positionStyle={{ top: 80, left: -10 }}
        delay={0.9}
      />

      {/* ── SVG circuit ──────────────────────────────────────────────── */}
      <svg
        viewBox="0 0 460 460"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Static concentric rings */}
        <circle cx={CX} cy={CY} r={180} stroke="rgba(0,245,255,0.08)" strokeWidth={1} />
        <circle cx={CX} cy={CY} r={140} stroke="rgba(0,245,255,0.08)" strokeWidth={1} />
        <circle cx={CX} cy={CY} r={90}  stroke="rgba(0,245,255,0.08)" strokeWidth={1} />

        {/* ── Outer rotating group: spokes + spoke-end dots ─────────── */}
        <motion.g
          style={{ transformOrigin: `${CX}px ${CY}px` }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {SPOKE_ENDS.map((pt, i) => (
            <line
              key={`spoke-${i}`}
              x1={CX} y1={CY}
              x2={pt.x} y2={pt.y}
              stroke="rgba(0,245,255,0.15)"
              strokeWidth={1}
            />
          ))}
          {SPOKE_ENDS.map((pt, i) => (
            <circle
              key={`dot-${i}`}
              cx={pt.x} cy={pt.y}
              r={4}
              fill="#00F5FF"
              opacity={0.7}
            />
          ))}
        </motion.g>

        {/* ── Inner counter-rotating group: chip nodes ──────────────── */}
        <motion.g
          style={{ transformOrigin: `${CX}px ${CY}px` }}
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {CHIPS.map(({ x, y, label }) => (
            <g key={label}>
              <rect
                x={x - 16} y={y - 9}
                width={32} height={18}
                rx={4}
                fill="rgba(0,245,255,0.07)"
                stroke="rgba(0,245,255,0.3)"
                strokeWidth={0.8}
              />
              <text
                x={x} y={y}
                textAnchor="middle"
                dominantBaseline="central"
                fill="rgba(0,245,255,0.9)"
                fontSize={7}
                fontFamily="monospace"
                fontWeight="bold"
                letterSpacing="0.5"
              >
                {label}
              </text>
            </g>
          ))}
        </motion.g>

        {/* ── Center node ───────────────────────────────────────────── */}
        <circle
          cx={CX} cy={CY}
          r={36}
          fill="rgba(0,245,255,0.08)"
          stroke="rgba(0,245,255,0.4)"
          strokeWidth={1.2}
        />
        {/* Subtle inner pulse ring */}
        <circle
          cx={CX} cy={CY}
          r={28}
          fill="none"
          stroke="rgba(0,245,255,0.15)"
          strokeWidth={0.8}
          strokeDasharray="4 6"
        />
        {/* Lightning bolt ⚡ */}
        <text
          x={CX} y={CY}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={24}
          fill="#00F5FF"
        >
          ⚡
        </text>
      </svg>
    </div>
  );
}

export default AiCircuitVisual;
