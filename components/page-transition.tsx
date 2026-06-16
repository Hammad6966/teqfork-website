"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const EASE = [0.76, 0, 0.24, 1] as const;

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mark done after panels have fully exited (logo fade 0.4s + delay 0.3s + panel 0.8s = ~1.5s)
    const id = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(id);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <>
            {/* Logo — fades out before panels split */}
            <motion.div
              key="loader-logo"
              className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
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
                  style={{ color: "#00F5FF", fontFamily: "var(--font-geist-sans)" }}
                >
                  Teqfork
                </span>
              </div>
            </motion.div>

            {/* Top panel */}
            <motion.div
              key="loader-top"
              className="fixed inset-x-0 top-0 z-[9998] bg-black"
              style={{ height: "50vh" }}
              initial={{ y: 0 }}
              animate={{ y: "-100%" }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
            />

            {/* Bottom panel */}
            <motion.div
              key="loader-bottom"
              className="fixed inset-x-0 bottom-0 z-[9998] bg-black"
              style={{ height: "50vh" }}
              initial={{ y: 0 }}
              animate={{ y: "100%" }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
            />
          </>
        )}
      </AnimatePresence>

      {children}
    </>
  );
}
