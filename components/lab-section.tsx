"use client";

import Link from "next/link";
import { Phone, Bot, Calendar, Layers } from "lucide-react";

const services = [
  {
    icon: Phone,
    title: "AI Receptionist Systems",
    description:
      "Never miss a lead again. Our AI receptionists answer calls, qualify prospects, and book appointments 24/7 — while you focus on the work.",
    link: "/services/ai-receptionist",
  },
  {
    icon: Bot,
    title: "AI Calling Agents",
    description:
      "Outbound and inbound AI calling agents that sound human, handle objections, and convert leads into booked appointments automatically.",
    link: "/services/ai-calling-agents",
  },
  {
    icon: Calendar,
    title: "AI Booking Automation",
    description:
      "End-to-end booking automation — from first contact to confirmed appointment. Integrated with your existing calendar and CRM tools.",
    link: "/services/ai-booking-automation",
  },
  {
    icon: Layers,
    title: "Custom AI Platforms",
    description:
      "Management systems, e-commerce platforms, and portals with AI agents built in — custom built for your exact workflow.",
    link: "/services/custom-ai-platforms",
  },
];

export function LabSection() {
  return (
    <section id="lab" className="relative py-24 md:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="fade-up flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[rgba(0,245,255,0.08)] border border-[rgba(0,245,255,0.2)] text-[#00F5FF] text-xs font-semibold tracking-widest px-4 py-2 rounded-full mb-4">
            WHAT WE BUILD
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">AI Systems That Replace Manual Work</h2>
          <p className="text-gray-400 max-w-xl text-lg">
            We build AI infrastructure that runs 24/7, handles your repetitive tasks, and pays for itself in the first month.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="fade-up card-3d"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <Link
                  href={service.link}
                  className="glass border border-white/5 hover:border-[rgba(0,245,255,0.25)] flex flex-col gap-5 p-8 rounded-2xl h-full group transition-colors duration-300 hover:bg-[rgba(0,245,255,0.03)] block"
                >
                  <div className="w-12 h-12 rounded-xl bg-[rgba(0,245,255,0.08)] border border-[rgba(0,245,255,0.15)] flex items-center justify-center group-hover:bg-[rgba(0,245,255,0.15)] transition-colors duration-300">
                    <Icon size={22} className="text-[#00F5FF]" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-white font-semibold text-lg leading-tight">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                  </div>
                  <div className="mt-auto text-[#00F5FF] text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more <span>→</span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default LabSection;
