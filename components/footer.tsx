"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const footerLinks = [
  { label: "Services",     href: "#lab"          },
  { label: "Work",         href: "#work"         },
  { label: "Process",      href: "#process"      },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact",      href: "#contact"      },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050505] section-reveal" data-reveal="true">

      {/* ── Ambient blur blobs ──────────────────────────────────────────── */}
      <div
        className="absolute top-0 left-0 w-[300px] h-[200px] pointer-events-none"
        style={{ background: "rgba(0,245,255,0.04)", filter: "blur(60px)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[200px] h-[200px] pointer-events-none"
        style={{ background: "rgba(127,119,221,0.04)", filter: "blur(60px)" }}
        aria-hidden="true"
      />

      {/* ── 1. Top separator ────────────────────────────────────────────── */}
      <div
        className="h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(0,245,255,0.25), transparent)",
        }}
      />

      {/* ── 2. CTA card section ─────────────────────────────────────────── */}
      <div className="relative px-8 py-10">
        {/* Radial glow positioned above the card */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[640px] h-[260px] pointer-events-none"
          style={{
            top: -60,
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(0,245,255,0.12), transparent 70%)",
          }}
          aria-hidden="true"
        />

        <motion.div
          className="relative max-w-4xl mx-auto rounded-2xl px-8 py-12 md:px-16 md:py-16 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,245,255,0.05), rgba(127,119,221,0.04))",
            border: "1px solid rgba(0,245,255,0.15)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated dot + pill label */}
          <div className="inline-flex items-center gap-2 bg-[rgba(0,245,255,0.08)] border border-[rgba(0,245,255,0.2)] text-[#00F5FF] text-xs font-semibold tracking-widest px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00F5FF] animate-pulse" />
            GET STARTED
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Ready to{" "}
            <span className="text-[#00F5FF]">automate</span>
            <br className="hidden md:block" /> your business?
          </h2>

          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
            In 15 minutes we&apos;ll map exactly where you&apos;re losing time and money — and
            show you what we can automate. No pitch, no commitment.
          </p>

          <motion.a
            href="https://calendly.com/teqfork/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-cta-btn inline-flex items-center gap-2 bg-[#00F5FF] text-black font-bold px-8 py-4 rounded-full text-base hover:brightness-110 transition-[filter] duration-200"
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            Book Your Free AI Audit →
          </motion.a>
        </motion.div>
      </div>

      {/* ── 3. Big TEQFORK watermark ────────────────────────────────────── */}
      <div
        className="relative h-[110px] overflow-hidden pointer-events-none select-none"
        aria-hidden="true"
      >
        <div
          className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 whitespace-nowrap"
          style={{
            fontSize: 100,
            fontWeight: 900,
            letterSpacing: "-4px",
            background:
              "linear-gradient(180deg, rgba(0,245,255,0.06) 0%, rgba(0,245,255,0.02) 50%, transparent 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          TEQFORK
        </div>
      </div>

      {/* ── 4. Nav row — sits over TEQFORK via z-index + negative margin ── */}
      <div className="relative z-10 -mt-10 border-t border-[rgba(255,255,255,0.07)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-6 pb-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* LEFT: logo + tagline + copyright */}
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="text-white font-bold text-lg leading-none">
                Teq<span className="text-[#00F5FF]">fork</span>
              </span>
              <span
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                AI Automation Agency — Islamabad, Pakistan
              </span>
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 10 }}>
                © 2026 Teqfork. All rights reserved.
              </span>
            </div>

            {/* CENTER: nav links */}
            <nav className="flex flex-wrap items-center justify-center gap-0.5">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[rgba(255,255,255,0.5)] hover:text-white hover:bg-[rgba(255,255,255,0.05)] text-sm px-2.5 py-1.5 rounded-md transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* RIGHT: email pill + LinkedIn */}
            <div className="flex items-center gap-3">
              <a
                href="mailto:hello@teqfork.tech"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.5)] hover:border-[rgba(0,245,255,0.3)] hover:text-[rgba(0,245,255,0.8)] text-xs transition-all duration-200"
              >
                hello@teqfork.tech
              </a>

              <a
                href="https://www.linkedin.com/company/teqfork/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-[30px] h-[30px] rounded-lg border border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.5)] hover:border-[rgba(0,245,255,0.3)] hover:bg-[rgba(0,245,255,0.1)] hover:text-[#00F5FF] transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={13} />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ── 5. Bottom accent line ────────────────────────────────────────── */}
      <div
        className="footer-bottom-line h-[2px]"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(0,245,255,0.5) 50%, transparent)",
        }}
      />

    </footer>
  );
}

export default Footer;
