"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const stats = [
  { value: 5,   suffix: "+", label: "AI Systems Built"     },
  { value: 3,   suffix: "",  label: "Countries Served"     },
  { value: 100, suffix: "%", label: "Client Retention"     },
  { value: 2,   suffix: "",  label: "Weeks Avg. Delivery"  },
];

/** Animates from 0 → target over `duration` ms using rAF + ease-out cubic. */
function useCountUp(target: number, duration: number, active: boolean): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let startTime: number | null = null;
    let frameId: number;

    const tick = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed  = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic: decelerates as it approaches the target
      const eased    = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(eased * target));

      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [active, target, duration]);

  return count;
}

function StatItem({
  value,
  suffix,
  label,
  active,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
  index: number;
}) {
  const count = useCountUp(value, 1500, active);

  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-2 flex-1 px-8 py-10"
      initial={{ opacity: 0, y: 16 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="text-5xl font-bold text-white tabular-nums leading-none">
        {count}
        <span className="text-[#00F5FF]">{suffix}</span>
      </span>
      <span className="text-gray-500 text-sm text-center tracking-wide mt-1">
        {label}
      </span>
    </motion.div>
  );
}

export function StatsBanner() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div
      ref={ref}
      className="w-full border-y border-[#00F5FF22] bg-gradient-to-r from-black via-[#00F5FF08] to-black section-reveal"
      data-reveal="true"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-[#ffffff15]">
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              active={inView}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatsBanner;
