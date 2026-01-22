"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.dataset.hover === "true"
      ) {
        setIsHovering(true);
      }
    };

    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleHoverStart);
    document.addEventListener("mouseout", handleHoverEnd);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseout", handleHoverEnd);
    };
  }, []);

  if (typeof window === "undefined") return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="pointer-events-none fixed z-[9999] mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.2s ease",
        }}
      >
        <div
          className="rounded-full bg-teal"
          style={{
            width: isHovering ? "8px" : "6px",
            height: isHovering ? "8px" : "6px",
            transition: "width 0.2s ease, height 0.2s ease",
          }}
        />
      </div>

      {/* Cursor ring */}
      <div
        className="pointer-events-none fixed z-[9998] rounded-full border-2 border-teal"
        style={{
          left: position.x,
          top: position.y,
          width: isHovering ? "60px" : "32px",
          height: isHovering ? "60px" : "32px",
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 0.6 : 0,
          transition:
            "width 0.3s cubic-bezier(0.16, 1, 0.3, 1), height 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease",
        }}
      />
    </>
  );
}

