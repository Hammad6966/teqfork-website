"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Bot, Calendar, Cpu } from "lucide-react";

const services = [
  {
    icon: Phone,
    title: "AI Receptionist Systems",
    description:
      "Never miss a lead again. Our AI receptionists answer calls, qualify prospects, and book appointments 24/7 — while you focus on the work.",
    link: "/services/ai-receptionist",
    badge: "24/7",
  },
  {
    icon: Bot,
    title: "AI Calling Agents",
    description:
      "Outbound and inbound AI calling agents that sound human, handle objections, and convert leads into booked appointments automatically.",
    link: "/services/ai-calling-agents",
    badge: "AI-Powered",
  },
  {
    icon: Calendar,
    title: "AI Booking Automation",
    description:
      "End-to-end booking automation — from first contact to confirmed appointment. Integrated with your existing calendar and CRM tools.",
    link: "/services/ai-booking-automation",
    badge: "24/7",
  },
  {
    icon: Cpu,
    title: "Custom AI Platforms",
    description:
      "Management systems, e-commerce platforms, and portals with AI agents built in — custom built for your exact workflow.",
    link: "/services/custom-ai-platforms",
    badge: "AI-Powered",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  hovered: {
    y: -8,
    boxShadow: "0 20px 60px rgba(0,245,255,0.15)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const borderVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 0 },
  hovered: { scaleX: 1, transition: { duration: 0.3 } },
};

export function LabSection() {
  return (
    <section id="lab" className="relative py-24 md:py-32 bg-[#050505] section-reveal" data-reveal="true">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section header */}
        <div className="fade-up flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[rgba(0,245,255,0.08)] border border-[rgba(0,245,255,0.2)] text-[#00F5FF] text-xs font-semibold tracking-widest px-4 py-2 rounded-full mb-4">
            WHAT WE BUILD
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">AI Systems That Replace Manual Work</h2>
          <p className="text-gray-400 max-w-xl text-lg">
            We build AI infrastructure that runs 24/7, handles your repetitive tasks, and pays for itself in the first month.
          </p>
        </div>

        {/* 2×2 grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="relative card-shimmer glass border border-white/5 rounded-2xl overflow-hidden group"
                variants={cardVariants}
                whileHover="hovered"
              >
                {/* Animated bottom border */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#00F5FF] origin-left pointer-events-none z-10"
                  variants={borderVariants}
                />

                {/* Card content */}
                <Link
                  href={service.link}
                  className="relative z-[1] flex flex-col gap-6 p-8 min-h-[280px] h-full"
                >
                  {/* Top row: icon + badge */}
                  <div className="flex items-start justify-between">
                    <div className="bg-[#00F5FF15] rounded-full p-4 flex items-center justify-center">
                      <Icon size={48} className="text-[#00F5FF]" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest border border-[rgba(0,245,255,0.3)] text-[#00F5FF] px-3 py-1 rounded-full bg-[rgba(0,245,255,0.06)] mt-1">
                      {service.badge}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-3 flex-1">
                    <h3 className="text-white font-semibold text-xl leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Learn more */}
                  <div className="text-[#00F5FF] text-sm font-medium flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200">
                    Learn more <span>→</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

export default LabSection;
