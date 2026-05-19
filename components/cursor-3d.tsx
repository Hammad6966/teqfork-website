"use client";

import { useEffect } from "react";

/**
 * Updates two CSS custom properties on <html> with every mouse move:
 *   --cx  →  -0.5 … +0.5  (left → right)
 *   --cy  →  -0.5 … +0.5  (top  → bottom)
 *
 * CSS rules then use these vars to drive transforms with zero React re-renders.
 * requestAnimationFrame keeps it capped at 60 fps.
 */
export default function Cursor3D() {
  useEffect(() => {
    const root = document.documentElement;
    let rafId: number | null = null;
    let mx = 0, my = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX / window.innerWidth  - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          root.style.setProperty("--cx", mx.toFixed(4));
          root.style.setProperty("--cy", my.toFixed(4));
          rafId = null;
        });
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
