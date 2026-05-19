import Link from "next/link";
import { ArrowLeft, Phone, Clock, Users, Zap } from "lucide-react";

export const metadata = { title: "AI Receptionist Systems — Teqfork" };

export default function AIReceptionistPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <Link href="/#lab" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-12 transition-colors">
          <ArrowLeft size={16} /> Back to Services
        </Link>

        <div className="flex flex-col gap-4 mb-12">
          <div className="w-14 h-14 rounded-xl bg-[rgba(0,245,255,0.08)] border border-[rgba(0,245,255,0.15)] flex items-center justify-center">
            <Phone size={26} className="text-[#00F5FF]" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold">AI Receptionist Systems</h1>
          <p className="text-gray-400 text-xl">Never miss a lead again. 24/7 AI call handling for your business.</p>
        </div>

        <div className="flex flex-col gap-12">
          <section>
            <h2 className="text-2xl font-semibold text-[#00F5FF] mb-4">What It Is</h2>
            <p className="text-gray-300 leading-relaxed">An AI receptionist is a voice AI system that answers your business phone calls exactly like a human receptionist — but 24 hours a day, 7 days a week, with zero wait time. It qualifies callers, collects their information, answers common questions, and books appointments directly into your calendar.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#00F5FF] mb-6">How It Works</h2>
            <div className="flex flex-col gap-6">
              {[
                { step: "01", icon: Phone, title: "Customer Calls Your Number", desc: "The AI answers instantly — no hold music, no voicemail. It greets the caller with your business name and handles the conversation naturally." },
                { step: "02", icon: Users, title: "AI Qualifies & Collects Info", desc: "The AI asks the right questions, collects contact details, understands what the caller needs, and determines if they're a fit for your services." },
                { step: "03", icon: Clock, title: "Books Appointment Automatically", desc: "If the caller is ready to book, the AI checks your calendar and confirms the appointment in real time. No back-and-forth." },
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
              {["Dental & medical clinics", "Service businesses", "Law firms", "Real estate agents", "Repair shops", "Any business that takes bookings"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                  <Zap size={14} className="text-[#00F5FF] flex-shrink-0" /> {item}
                </div>
              ))}
            </div>
          </section>

          <div className="border-t border-white/5 pt-8">
            <p className="text-gray-400 mb-4">Ready to stop missing calls?</p>
            <a href="https://calendly.com/teqfork/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#00F5FF] text-black font-bold px-8 py-3.5 rounded-full hover:scale-105 transition-transform">
              Book a Free Audit →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
