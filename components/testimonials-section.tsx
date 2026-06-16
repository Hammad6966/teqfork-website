"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Teqfork built us an AI management system that completely transformed how we track goods and pricing. The AI calling agent handles bookings while we focus on the business. Exceptional work.",
    photo: "/ch-umar.jpeg",
    name: "Ch Umar",
    title: "CEO, Zainab Traders",
  },
  {
    quote:
      "The e-commerce platform they built is exactly what we needed. The AI SEO agent keeps driving new customers to our store every week without any manual work from our side.",
    photo: "/mehar-qasim.jpeg",
    name: "Mehar Qasim",
    title: "CEO, Ibrahim Engineering Services",
  },
  {
    quote:
      "Our college now has a modern digital presence that students and faculty actually use. The courses portal and mobile app made administration significantly easier.",
    photo: "/dr-asad.jpeg",
    name: "Dr. Asad",
    title: "Assistant Professor, Govt Graduate College Civil Lines",
  },
];

const cardVariants = {
  enter:  { x: 100, opacity: 0 },
  center: { x: 0,   opacity: 1 },
  exit:   { x: -100, opacity: 0 },
};

function Avatar({ photo, name }: { photo: string; name: string }) {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-[rgba(0,245,255,0.3)]">
      {!imgError ? (
        <Image
          src={photo}
          alt={name}
          fill
          className="object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-full h-full bg-[#00F5FF]/20 flex items-center justify-center text-[#00F5FF] font-bold text-xl">
          {name[0]}
        </div>
      )}
    </div>
  );
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number>(0);

  // Auto-rotate every 3 s; pause while hovering
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(id);
  }, [paused]);

  const goTo  = (i: number) => setActiveIndex(i);
  const next  = () => setActiveIndex((i) => (i + 1) % testimonials.length);
  const prev  = () => setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) delta > 0 ? next() : prev();
  };

  const t = testimonials[activeIndex];

  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 bg-[#050505] section-reveal"
      data-reveal="true"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[rgba(0,245,255,0.08)] border border-[rgba(0,245,255,0.2)] text-[#00F5FF] text-xs font-semibold tracking-widest px-4 py-2 rounded-full mb-4">
            TESTIMONIALS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-gray-400 max-w-xl text-lg">Real results from real businesses</p>
        </motion.div>

        {/* Carousel — pause auto-rotation on hover, swipe on touch */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="max-w-2xl mx-auto"
            >
              {/* Card */}
              <div className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden">

                {/* Decorative background quote mark */}
                <span
                  className="absolute top-2 left-5 text-8xl font-bold text-[#00F5FF] leading-none select-none pointer-events-none"
                  style={{ opacity: 0.2 }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                {/* Quote text — padded so it clears the giant " */}
                <p className="relative z-10 text-gray-200 text-lg md:text-xl leading-relaxed mt-10 mb-8 font-light">
                  {t.quote}
                </p>

                {/* Author */}
                <div className="relative z-10 border-t border-white/5 pt-6 flex items-center gap-4">
                  <Avatar photo={t.photo} name={t.name} />
                  <div>
                    <p className="text-white font-semibold">{t.name}</p>
                    <p className="text-[#00F5FF]/80 text-sm mt-0.5">{t.title}</p>
                  </div>
                  {/* Paused indicator */}
                  {paused && (
                    <span className="ml-auto text-[10px] text-gray-600 tracking-widest uppercase">
                      paused
                    </span>
                  )}
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`View testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-8 bg-[#00F5FF]"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default TestimonialsSection;
