"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";

const caseStudies = [
  {
    title: "AI Management System — Zainab Traders",
    tag: "AI Automation + Calling Agent",
    description:
      "Built a complete AI-powered goods management system with dynamic pricing engine and an AI calling agent that handles bookings automatically. Eliminated manual order tracking entirely.",
    client: "Ch Umar, CEO — Zainab Traders",
    location: "Pakistan",
    link: "/case-studies/zainab-traders",
    size: "large",
    flag: "🇵🇰",
  },
  {
    title: "E-Commerce Platform + SEO AI Agent",
    tag: "E-Commerce + AI SEO",
    description:
      "Full e-commerce platform for engineering parts distribution with an AI SEO agent that continuously optimizes product listings and drives organic traffic.",
    client: "Mehar Qasim, CEO — Ibrahim Engineering Services",
    location: "Pakistan",
    link: "/case-studies/ibrahim-engineering",
    size: "medium",
    flag: "🇵🇰",
  },
  {
    title: "College Portal — Govt Graduate College Civil Lines",
    tag: "Web Platform + Mobile App",
    description:
      "Complete college website with courses management system and React Native student portal. Serves faculty, students, and administration from one platform.",
    client: "Dr. Asad, Assistant Professor",
    location: "Pakistan",
    link: "/case-studies/gov-college",
    size: "medium",
    flag: "🇵🇰",
  },
  {
    title: "AI Dental Receptionist — USA",
    tag: "AI Receptionist + Booking",
    description:
      "AI receptionist and automated booking system deployed for dental practices in the United States. Client details confidential.",
    client: "Confidential",
    location: "United States",
    link: "/case-studies/dental-usa",
    size: "small",
    flag: "🇺🇸",
  },
  {
    title: "AI Doctor Receptionist — Multan",
    tag: "AI Calling Agent + Booking",
    description:
      "AI receptionist, calling agent, and automated booking platform for an MBBS physician. Reduced missed appointments by handling all incoming patient communication.",
    client: "Confidential",
    location: "Pakistan",
    link: "/case-studies/doctor-multan",
    size: "small",
    flag: "🏥",
  },
];

export function WorkSection() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section id="work" className="relative py-24 md:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[rgba(0,245,255,0.08)] border border-[rgba(0,245,255,0.2)] text-[#00F5FF] text-xs font-semibold tracking-widest px-4 py-2 rounded-full mb-4">
            CASE STUDIES
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Real Clients. Real Results.</h2>
          <p className="text-gray-400 max-w-xl text-lg">Every system we build solves a real business problem.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" ref={ref}>
          {/* Large card — full width on its row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <Link href={caseStudies[0].link} className="glass glass-hover border-glow rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 group block card-3d" data-hover="true">
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-[#00F5FF] bg-[rgba(0,245,255,0.1)] px-3 py-1 rounded-full">{caseStudies[0].tag}</span>
                  <span className="text-sm text-gray-500">{caseStudies[0].flag} {caseStudies[0].location}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{caseStudies[0].title}</h3>
                <p className="text-gray-400 leading-relaxed max-w-2xl">{caseStudies[0].description}</p>
                <p className="text-gray-500 text-sm mt-auto">{caseStudies[0].client}</p>
                <span className="text-[#00F5FF] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">View case study →</span>
              </div>
            </Link>
          </motion.div>

          {/* Medium cards */}
          {caseStudies.slice(1, 3).map((cs, i) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link href={cs.link} className="glass glass-hover border-glow rounded-2xl p-6 md:p-8 flex flex-col gap-4 h-full group block card-3d" data-hover="true">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-[#00F5FF] bg-[rgba(0,245,255,0.1)] px-3 py-1 rounded-full">{cs.tag}</span>
                  <span className="text-sm text-gray-500">{cs.flag} {cs.location}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{cs.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{cs.description}</p>
                <p className="text-gray-500 text-sm mt-auto">{cs.client !== "Confidential" ? cs.client : ""}</p>
                <span className="text-[#00F5FF] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">View case study →</span>
              </Link>
            </motion.div>
          ))}

          {/* Small cards */}
          {caseStudies.slice(3).map((cs, i) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i + 2) * 0.1, duration: 0.5 }}
            >
              <Link href={cs.link} className="glass glass-hover border-glow rounded-2xl p-6 flex flex-col gap-3 h-full group block card-3d" data-hover="true">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-[#00F5FF] bg-[rgba(0,245,255,0.1)] px-3 py-1 rounded-full">{cs.tag}</span>
                  <span className="text-sm text-gray-500">{cs.flag} {cs.location}</span>
                </div>
                <h3 className="text-lg font-bold text-white">{cs.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{cs.description}</p>
                <span className="text-[#00F5FF] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity mt-auto">View case study →</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
