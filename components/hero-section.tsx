"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import WireframeSphere from "./wireframe-sphere";

const navLinks = [
  { label: "Services", href: "#lab" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#050505]" id="hero">
      {/* Static mesh gradient — no JS mouse tracking */}
      <div className="absolute inset-0 pointer-events-none mesh-gradient" />

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
      <nav className="relative z-50 flex items-center justify-between px-6 md:px-12 py-5">
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
            <a key={link.label} href={link.href} className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="https://calendly.com/teqfork/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-[#00F5FF] text-black font-semibold px-5 py-2.5 rounded-full text-sm hover:brightness-110 transition-all duration-200"
        >
          Book Free AI Audit
        </a>

        <button className="md:hidden text-white p-2" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <Menu size={24} />
        </button>
      </nav>

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

            <h1 className="hero-fade-2 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gradient">
              We automate the busywork costing your business $5,000 a month
            </h1>

            <p className="hero-fade-3 text-gray-400 text-lg leading-relaxed max-w-xl">
              AI receptionists, calling agents, and booking systems for clinics, service businesses, and traders — built and running in 2 weeks.
            </p>

            <div className="hero-fade-4 flex flex-wrap gap-4 items-center">
              <a
                href="https://calendly.com/teqfork/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#00F5FF] text-black font-bold px-7 py-3.5 rounded-full text-sm hover:brightness-110 transition-all duration-200 animate-pulse-slow"
              >
                Book Free AI Audit →
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 border border-[rgba(0,245,255,0.4)] text-[#00F5FF] font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-[rgba(0,245,255,0.08)] transition-colors duration-200"
              >
                See Our Work
              </a>
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

          {/* Right — parallax sphere layer */}
          <div className="hidden md:flex items-center justify-center hero-fade-2 parallax-sphere" style={{ animationDelay: "0.3s" }}>
            <div className="float-anim">
              <WireframeSphere />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — pure CSS */}
      <div className="hero-fade-5 relative z-10 flex justify-center pb-8">
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
