import Link from "next/link";
import { ArrowLeft, Layers, Zap } from "lucide-react";

export const metadata = { title: "Custom AI Platforms — Teqfork" };

export default function CustomAIPlatformsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <Link href="/#lab" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-12 transition-colors">
          <ArrowLeft size={16} /> Back to Services
        </Link>

        <div className="flex flex-col gap-4 mb-12">
          <div className="w-14 h-14 rounded-xl bg-[rgba(0,245,255,0.08)] border border-[rgba(0,245,255,0.15)] flex items-center justify-center">
            <Layers size={26} className="text-[#00F5FF]" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold">Custom AI Platforms</h1>
          <p className="text-gray-400 text-xl">Management systems, platforms, and portals with AI built in.</p>
        </div>

        <div className="flex flex-col gap-12">
          <section>
            <h2 className="text-2xl font-semibold text-[#00F5FF] mb-4">What It Is</h2>
            <p className="text-gray-300 leading-relaxed">We build custom software platforms — management systems, e-commerce stores, portals, dashboards — with AI agents embedded into the core workflows. Not just a website with AI features bolted on, but systems where AI automates the actual business logic.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#00F5FF] mb-6">How It Works</h2>
            <div className="flex flex-col gap-6">
              {[
                { step: "01", title: "We Map Your Workflow", desc: "We spend time understanding exactly how your business operates — where manual work happens, where data flows, and where automation has the highest ROI." },
                { step: "02", title: "We Build the Platform", desc: "Custom-built using modern web and AI technologies. No off-the-shelf templates — everything designed for your specific workflow." },
                { step: "03", title: "AI Agents Run Inside It", desc: "AI agents embedded in the system handle the repetitive work automatically — pricing, communication, data processing, reporting." },
              ].map((s) => (
                <div key={s.step} className="flex gap-6 items-start glass rounded-xl p-6 border border-white/5">
                  <span className="text-3xl font-bold text-[rgba(0,245,255,0.2)] flex-shrink-0">{s.step}</span>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#00F5FF] mb-4">Who It&apos;s For</h2>
            <div className="grid grid-cols-2 gap-3">
              {["Trading and distribution", "E-commerce businesses", "Educational institutions", "Healthcare operators", "Professional services", "Any business with complex ops"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                  <Zap size={14} className="text-[#00F5FF] flex-shrink-0" /> {item}
                </div>
              ))}
            </div>
          </section>

          <div className="border-t border-white/5 pt-8">
            <a href="https://calendly.com/teqfork/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#00F5FF] text-black font-bold px-8 py-3.5 rounded-full hover:scale-105 transition-transform">
              Book a Free Audit →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
