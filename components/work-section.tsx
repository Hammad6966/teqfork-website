"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "AI Management System",
    clientName: "Ch Umar",
    company: "Zainab Traders",
    tag: "AI Automation + Calling Agent",
    metric: "100% elimination of manual order tracking",
    flag: "🇵🇰",
    accent: "#00F5FF",
    link: "/case-studies/zainab-traders",
  },
  {
    title: "E-Commerce + SEO AI Agent",
    clientName: "Mehar Qasim",
    company: "Ibrahim Engineering Services",
    tag: "E-Commerce + AI SEO",
    metric: "Continuous organic traffic growth via AI SEO",
    flag: "🇵🇰",
    accent: "#F59E0B",
    link: "/case-studies/ibrahim-engineering",
  },
  {
    title: "College Portal & Mobile App",
    clientName: "Dr. Asad",
    company: "Govt Graduate College Civil Lines",
    tag: "Web Platform + Mobile App",
    metric: "Faculty, students & admin unified on one platform",
    flag: "🇵🇰",
    accent: "#7F77DD",
    link: "/case-studies/gov-college",
  },
  {
    title: "AI Dental Receptionist",
    clientName: "Confidential Client",
    company: "Dental Practice — USA",
    tag: "AI Receptionist + Booking",
    metric: "24/7 patient call handling & automated booking",
    flag: "🇺🇸",
    accent: "#00F5FF",
    link: "/case-studies/dental-usa",
  },
  {
    title: "AI Doctor Receptionist",
    clientName: "Confidential Client",
    company: "MBBS Physician — Multan",
    tag: "AI Calling Agent + Booking",
    metric: "Missed appointments reduced to near zero",
    flag: "🏥",
    accent: "#00F5FF",
    link: "/case-studies/doctor-multan",
  },
];

type CaseStudy = typeof caseStudies[0];

function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  return (
    <motion.div
      className="w-[320px] md:w-[380px] h-[280px] flex-shrink-0 rounded-2xl overflow-hidden relative cursor-pointer"
      style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)" }}
      initial="initial"
      whileHover="hovered"
      transition={{ duration: 0.2 }}
    >
      {/* Accent top bar */}
      <div className="h-[3px] w-full flex-shrink-0" style={{ background: cs.accent }} />

      <Link href={cs.link} className="flex flex-col h-[calc(100%-3px)] p-6">
        {/* Top row: tag badge + flag */}
        <div className="flex items-start justify-between mb-5">
          <span
            className="text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full"
            style={{
              color: cs.accent,
              background: `${cs.accent}18`,
              border: `1px solid ${cs.accent}35`,
            }}
          >
            {cs.tag}
          </span>
          <span className="text-xl leading-none">{cs.flag}</span>
        </div>

        {/* Client name + company */}
        <div className="flex-1">
          <h3 className="text-white font-bold text-xl leading-tight">{cs.clientName}</h3>
          <p className="text-gray-500 text-sm mt-1">{cs.company}</p>
        </div>

        {/* Result metric */}
        <p className="text-[#00F5FF] text-xs font-medium leading-relaxed mb-4 line-clamp-2">
          ↗ {cs.metric}
        </p>

        {/* Slide-in CTA */}
        <div className="overflow-hidden h-5">
          <motion.span
            className="flex items-center gap-1 text-[#00F5FF] text-sm font-semibold"
            variants={{
              initial: { x: -10, opacity: 0 },
              hovered: { x: 0, opacity: 1 },
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            View case study →
          </motion.span>
        </div>
      </Link>
    </motion.div>
  );
}

export function WorkSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const [dragLeft, setDragLeft] = useState(-1);

  // Recalculate drag constraint on mount and resize
  useEffect(() => {
    const update = () => {
      if (!containerRef.current || !trackRef.current) return;
      const gap = containerRef.current.offsetWidth;
      const track = trackRef.current.scrollWidth;
      setDragLeft(Math.min(-(track - gap), 0));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const scrollBy = (dir: "left" | "right") => {
    const step = 400;
    const next =
      dir === "left"
        ? Math.min(x.get() + step, 0)
        : Math.max(x.get() - step, dragLeft);
    animate(x, next, { type: "spring", stiffness: 300, damping: 30 });
  };

  const mobileScrollBy = (dir: "left" | "right") => {
    if (!mobileRef.current) return;
    // Use the visible container width to scroll properly
    const visibleWidth = mobileRef.current.clientWidth;
    const currentScroll = mobileRef.current.scrollLeft;
    const maxScroll = mobileRef.current.scrollWidth - mobileRef.current.clientWidth;
    
    // Scroll by visible width minus small overlap for continuity
    const scrollAmount = visibleWidth * 0.85;
    let nextScroll = dir === "left" 
      ? Math.max(0, currentScroll - scrollAmount)
      : Math.min(maxScroll, currentScroll + scrollAmount);
    
    mobileRef.current.scrollTo({ left: nextScroll, behavior: "smooth" });
  };

  return (
    <section
      id="work"
      className="relative py-24 md:py-32 bg-[#050505] section-reveal"
      data-reveal="true"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header row + arrow buttons */}
        <div className="flex items-end justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-3"
          >
            <div className="inline-flex items-center gap-2 bg-[rgba(0,245,255,0.08)] border border-[rgba(0,245,255,0.2)] text-[#00F5FF] text-xs font-semibold tracking-widest px-4 py-2 rounded-full w-fit">
              CASE STUDIES
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Real Clients. Real Results.</h2>
            <p className="text-gray-400 max-w-xl text-lg">Every system we build solves a real business problem.</p>
          </motion.div>

          {/* Arrow buttons — desktop */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0 pb-1">
            <button
              onClick={() => scrollBy("left")}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[rgba(0,245,255,0.4)] hover:bg-[rgba(0,245,255,0.06)] transition-all duration-200"
              aria-label="Scroll left"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => scrollBy("right")}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[rgba(0,245,255,0.4)] hover:bg-[rgba(0,245,255,0.06)] transition-all duration-200"
              aria-label="Scroll right"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* ── Desktop: Framer drag carousel ────────────────────────── */}
        <div ref={containerRef} className="hidden md:block overflow-hidden">
          <motion.div
            ref={trackRef}
            drag="x"
            dragConstraints={{ left: dragLeft, right: 0 }}
            dragElastic={0.08}
            dragMomentum={false}
            style={{ x, touchAction: "none" }}
            whileTap={{ cursor: "grabbing" }}
            className="flex gap-5 cursor-grab w-max"
          >
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.link} cs={cs} />
            ))}
          </motion.div>
        </div>

        {/* ── Mobile: native horizontal scroll ─────────────────────── */}
        <div className="md:hidden">
          <div
            ref={mobileRef}
            className="flex gap-4 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {caseStudies.map((cs) => (
              <div key={cs.link} className="snap-start">
                <CaseStudyCard cs={cs} />
              </div>
            ))}
          </div>

          {/* Arrow buttons — mobile */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <button
              onClick={() => mobileScrollBy("left")}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[rgba(0,245,255,0.4)] transition-all duration-200"
              aria-label="Scroll left"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => mobileScrollBy("right")}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[rgba(0,245,255,0.4)] transition-all duration-200"
              aria-label="Scroll right"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default WorkSection;
