"use client";

import { useEffect } from "react";

/**
 * Attaches an IntersectionObserver to all elements with data-reveal="true".
 * When 15% of the element enters the viewport, adds the "visible" class,
 * which triggers the .section-reveal transition defined in globals.css.
 */
export default function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target); // fire once per element
          }
        });
      },
      { threshold: 0.15 }
    );

    const targets = document.querySelectorAll("[data-reveal='true']");
    targets.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
