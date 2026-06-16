"use client";

// Lightweight pure-CSS animated dot grid — no heavy JS library
export default function ParticlesBackground() {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(0,245,255,0.12) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        animation: "dotgrid-drift 20s linear infinite",
      }}
    />
  );
}
