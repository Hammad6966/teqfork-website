import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = { title: "Zainab Traders AI System — Teqfork" };

export default function ZainabTradersPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <Link href="/#work" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-12 transition-colors">
          <ArrowLeft size={16} /> Back to Work
        </Link>

        <div className="flex flex-col gap-4 mb-12">
          <span className="text-xs font-semibold text-[#00F5FF] bg-[rgba(0,245,255,0.1)] px-3 py-1 rounded-full w-fit">AI Automation + Calling Agent</span>
          <h1 className="text-3xl md:text-5xl font-bold">AI Management System — Zainab Traders</h1>
          <p className="text-gray-400">Ch Umar, CEO — Zainab Traders · 🇵🇰 Pakistan</p>
        </div>

        <div className="flex flex-col gap-12">
          <section>
            <h2 className="text-2xl font-semibold text-[#00F5FF] mb-4">The Challenge</h2>
            <p className="text-gray-300 leading-relaxed">Zainab Traders was managing a complex goods distribution operation entirely through manual processes — spreadsheets, phone calls, and manual pricing updates. Orders were being missed, pricing was inconsistent, and the team was spending hours every day on tasks that could be automated. The business needed a system that could handle the operational complexity at scale.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#00F5FF] mb-4">What We Built</h2>
            <p className="text-gray-300 leading-relaxed mb-4">We built a complete AI-powered goods management system with three core components:</p>
            <ul className="flex flex-col gap-3 text-gray-300">
              <li className="flex gap-3"><span className="text-[#00F5FF] mt-1">→</span><span><strong className="text-white">Dynamic Pricing Engine:</strong> Automatically adjusts pricing based on inventory levels, demand patterns, and market conditions in real time.</span></li>
              <li className="flex gap-3"><span className="text-[#00F5FF] mt-1">→</span><span><strong className="text-white">AI Calling Agent:</strong> Handles all inbound and outbound booking calls autonomously — confirms orders, schedules deliveries, and follows up on pending transactions.</span></li>
              <li className="flex gap-3"><span className="text-[#00F5FF] mt-1">→</span><span><strong className="text-white">Management Dashboard:</strong> Real-time inventory tracking, order management, and analytics — all in one place.</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#00F5FF] mb-4">The Results</h2>
            <ul className="flex flex-col gap-3 text-gray-300">
              <li className="flex gap-3"><span className="text-[#00F5FF]">✓</span> Manual order tracking eliminated entirely</li>
              <li className="flex gap-3"><span className="text-[#00F5FF]">✓</span> AI calling agent handles bookings 24/7 without staff</li>
              <li className="flex gap-3"><span className="text-[#00F5FF]">✓</span> Pricing consistency across all products</li>
              <li className="flex gap-3"><span className="text-[#00F5FF]">✓</span> Delivered and running within 2 weeks</li>
            </ul>
          </section>

          <div className="border-t border-white/5 pt-8">
            <p className="text-gray-400 mb-4">Want similar results for your business?</p>
            <a href="https://calendly.com/teqfork/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#00F5FF] text-black font-bold px-8 py-3.5 rounded-full hover:scale-105 transition-transform">
              Book a Free Audit →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
