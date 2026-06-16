"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import AiCircuitVisual from "./ai-circuit-visual";

// ── Headline word-by-word animation ──────────────────────────────────────────
const HEADLINE = "We automate the busywork costing your business $5,000 a month";
const HEADLINE_WORDS = HEADLINE.split(" ");
const TEAL_START = HEADLINE_WORDS.length - 3; // "$5,000 a month"

const headlineContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const wordVariant = {
  hidden:  { opacity: 0, y: 30, skewX: -5 },
  visible: {
    opacity: 1,
    y: 0,
    skewX: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const navLinks = [
  { label: "Services", href: "#lab" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function HeroSection() {
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [scrolled,  setScrolled]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#050505] section-reveal w-full max-w-[100vw]" id="hero" data-reveal="true">
      {/* Animated mesh gradient */}
      <div
        className="absolute inset-0 pointer-events-none animate-mesh-move"
        style={{
          background: [
            "radial-gradient(ellipse at 20% 50%, #00F5FF15 0%, transparent 60%)",
            "radial-gradient(ellipse at 80% 20%, #7F77DD15 0%, transparent 60%)",
            "radial-gradient(ellipse at 50% 80%, #00F5FF08 0%, transparent 60%)",
          ].join(", "),
        }}
      />

      {/* Static dot grid — parallax layer */}
      <div
        className="absolute inset-0 pointer-events-none parallax-dots"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,245,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      {/* NAVBAR */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-[border-color] duration-300${
          scrolled ? " border-b border-white/10" : ""
        }`}
        animate={{
          backgroundColor: scrolled ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0)",
          backdropFilter:  scrolled ? "blur(12px)"      : "blur(0px)",
        }}
        transition={{ duration: 0.3 }}
      >
        <Link href="/" className="flex items-center gap-2">
          {!logoError ? (
            <Image
              src="/teqfork_logo.webp"
              alt="Teqfork"
              width={40}
              height={40}
              className="rounded-sm"
              priority
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="w-10 h-10 rounded-sm bg-[#00F5FF] flex items-center justify-center text-black font-bold text-lg">T</div>
          )}
          <span className="text-white font-semibold text-lg tracking-tight">Teqfork</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="relative text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200 pb-0.5"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              {link.label}
              <motion.span
                className="absolute -bottom-0.5 left-0 w-full h-px bg-[#00F5FF] origin-left"
                variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                transition={{ duration: 0.25 }}
              />
            </motion.a>
          ))}
        </div>

        <motion.a
          href="https://calendly.com/teqfork/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-[#00F5FF] text-black font-semibold px-5 py-2.5 rounded-full text-sm hover:brightness-110 transition-all duration-200"
          animate={{
            boxShadow: [
              "0 0 0 0px rgba(0,245,255,0.4)",
              "0 0 0 8px rgba(0,245,255,0)",
              "0 0 0 0px rgba(0,245,255,0)",
            ],
          }}
          transition={{ repeat: Infinity, duration: 2, delay: 3 }}
        >
          Book Free AI Audit
        </motion.a>

        <button className="md:hidden text-white p-2" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <Menu size={24} />
        </button>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-[#050505]/98 backdrop-blur-xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="text-white font-semibold text-lg">Teqfork</span>
              <button onClick={() => setMenuOpen(false)} className="text-white p-2" aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white text-3xl font-semibold hover:text-[#00F5FF] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://calendly.com/teqfork/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-[#00F5FF] text-black font-bold px-8 py-3 rounded-full text-lg"
                onClick={() => setMenuOpen(false)}
              >
                Book Free AI Audit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO CONTENT */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left — parallax text layer */}
          <div className="flex flex-col gap-6 parallax-text">
            <div className="hero-fade-1 inline-flex w-fit items-center gap-2 bg-[rgba(0,245,255,0.1)] border border-[rgba(0,245,255,0.3)] text-[#00F5FF] text-xs font-semibold tracking-widest px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#00F5FF] animate-pulse" />
              AI AUTOMATION AGENCY
            </div>

            {/* Floating tech-stack badges */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            >
              {[
                "GPT-4o",
                "Claude 3.5",
                "Twilio",
                "Make.com",
                "Vapi",
                "Calendly",
              ].map((label, i) => (
                <motion.div
                  key={label}
                  variants={{
                    hidden:   { opacity: 0, scale: 0.8 },
                    visible:  { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeInOut" } },
                  }}
                >
                  {/* Continuous float at a per-badge rate */}
                  <motion.span
                    className="glass border border-[#00F5FF33] text-gray-300 text-[13px] px-3 py-1 rounded-full inline-block select-none"
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      delay: i * 0.4,
                      ease: "easeInOut",
                    }}
                  >
                    {label}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>

            {/* Animated headline — word by word */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              variants={headlineContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {HEADLINE_WORDS.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariant}
                  style={{ display: "inline-block", marginRight: "0.25em" }}
                  className={i >= TEAL_START ? "text-[#00F5FF]" : "text-white"}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subheading — fades in as a whole */}
            <motion.p
              className="text-gray-400 text-lg leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              AI receptionists, calling agents, and booking systems for clinics, service businesses, and traders — built and running in 2 weeks.
            </motion.p>

            {/* CTA buttons — slide up individually */}
            <div className="flex flex-wrap gap-4 items-center">
              <motion.a
                href="https://calendly.com/teqfork/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#00F5FF] text-black font-bold px-7 py-3.5 rounded-full text-sm hover:brightness-110 transition-all duration-200 animate-pulse-slow"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.5, ease: "easeInOut" }}
              >
                Book Free AI Audit →
              </motion.a>
              <motion.a
                href="#work"
                className="inline-flex items-center gap-2 border border-[rgba(0,245,255,0.4)] text-[#00F5FF] font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-[rgba(0,245,255,0.08)] transition-colors duration-200"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5, ease: "easeInOut" }}
              >
                See Our Work
              </motion.a>
            </div>

            <div className="hero-fade-5 flex flex-wrap gap-8 pt-4 border-t border-white/5">
              {[
                { value: "5+", label: "AI Systems Built" },
                { value: "3", label: "Countries Served" },
                { value: "2-Week", label: "Delivery" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-[#00F5FF] text-2xl font-bold">{stat.value}</span>
                  <span className="text-gray-500 text-xs mt-0.5">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — AI circuit visual */}
          <div className="hidden md:flex items-center justify-center hero-fade-2 parallax-sphere overflow-hidden max-w-full" style={{ animationDelay: "0.3s" }}>
            <AiCircuitVisual />
          </div>
        </div>
      </div>

      {/* Ticker banner */}
      <div
        className="relative z-10 w-full overflow-hidden hero-fade-5"
        style={{
          borderTop: "1px solid #00F5FF22",
          borderBottom: "1px solid #00F5FF22",
          background: "rgba(0, 0, 0, 0.45)",
        }}
      >
        <div className="animate-marquee flex" style={{ width: "max-content" }}>
          {[0, 1].map((i) => (
            <span
              key={i}
              className="whitespace-nowrap py-3 px-6 text-[11px] font-semibold tracking-[0.18em] uppercase"
              style={{ color: "#00F5FF" }}
            >
              AI Receptionist&nbsp;&nbsp;·&nbsp;&nbsp;AI Calling Agents&nbsp;&nbsp;·&nbsp;&nbsp;Booking Automation&nbsp;&nbsp;·&nbsp;&nbsp;Custom Platforms&nbsp;&nbsp;·&nbsp;&nbsp;24/7 Automation&nbsp;&nbsp;·&nbsp;&nbsp;5+ Systems Built&nbsp;&nbsp;·&nbsp;&nbsp;2-Week Delivery&nbsp;&nbsp;·&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator — pure CSS */}
      <div className="relative z-10 flex justify-center pb-8 pt-6">
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-600 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#00F5FF]/30 to-transparent relative overflow-hidden">
            <div className="scroll-dot-anim" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
