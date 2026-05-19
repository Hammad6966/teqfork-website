"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

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

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  const [imgError, setImgError] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="glass glass-hover border-glow rounded-2xl p-8 flex flex-col gap-6 card-3d"
    >
      <span className="text-6xl text-[#00F5FF] leading-none font-serif select-none">&ldquo;</span>
      <p className="text-gray-300 leading-relaxed text-sm flex-1">{t.quote}</p>
      <div className="flex items-center gap-4 pt-4 border-t border-white/5">
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-[rgba(0,245,255,0.2)]">
          {!imgError ? (
            <Image
              src={t.photo}
              alt={t.name}
              fill
              className="object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full bg-[#00F5FF]/20 flex items-center justify-center text-[#00F5FF] font-bold text-lg">
              {t.name[0]}
            </div>
          )}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{t.name}</p>
          <p className="text-[#00F5FF]/80 text-xs mt-0.5">{t.title}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
