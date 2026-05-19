import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = { title: "AI Dental Receptionist USA — Teqfork" };

export default function DentalUSAPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <Link href="/#work" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-12 transition-colors">
          <ArrowLeft size={16} /> Back to Work
        </Link>

        <div className="flex flex-col gap-4 mb-12">
          <span className="text-xs font-semibold text-[#00F5FF] bg-[rgba(0,245,255,0.1)] px-3 py-1 rounded-full w-fit">AI Receptionist + Booking</span>
          <h1 className="text-3xl md:text-5xl font-bold">AI Dental Receptionist — USA</h1>
          <p className="text-gray-400">🇺🇸 United States · Client details confidential</p>
        </div>

        <div className="flex flex-col gap-12">
          <section>
            <h2 className="text-2xl font-semibold text-[#00F5FF] mb-4">The Challenge</h2>
            <p className="text-gray-300 leading-relaxed">A dental practice in the United States was losing new patients due to missed calls and slow response times. Their front desk staff were overwhelmed with incoming booking requests, insurance queries, and appointment reminders — leaving little time for in-person patients. They needed an AI solution that could handle all incoming communication 24/7.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#00F5FF] mb-4">What We Built</h2>
            <ul className="flex flex-col gap-3 text-gray-300">
              <li className="flex gap-3"><span className="text-[#00F5FF] mt-1">→</span><span><strong className="text-white">AI Voice Receptionist:</strong> Answers all incoming calls, collects patient information, and answers common questions about services and availability.</span></li>
              <li className="flex gap-3"><span className="text-[#00F5FF] mt-1">→</span><span><strong className="text-white">Automated Booking System:</strong> Integrates directly with the practice calendar to confirm, reschedule, and cancel appointments without staff involvement.</span></li>
              <li className="flex gap-3"><span className="text-[#00F5FF] mt-1">→</span><span><strong className="text-white">Reminder System:</strong> Automated SMS and call reminders to reduce no-shows.</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#00F5FF] mb-4">The Results</h2>
            <ul className="flex flex-col gap-3 text-gray-300">
              <li className="flex gap-3"><span className="text-[#00F5FF]">✓</span> Zero missed calls — AI answers every time</li>
              <li className="flex gap-3"><span className="text-[#00F5FF]">✓</span> Booking handled 24/7 without front desk staff</li>
              <li className="flex gap-3"><span className="text-[#00F5FF]">✓</span> No-show rate reduced significantly</li>
              <li className="flex gap-3"><span className="text-[#00F5FF]">✓</span> Staff freed to focus entirely on in-person patients</li>
            </ul>
          </section>

          <div className="border-t border-white/5 pt-8">
            <p className="text-gray-400 mb-4">Want similar results for your practice?</p>
            <a href="https://calendly.com/teqfork/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#00F5FF] text-black font-bold px-8 py-3.5 rounded-full hover:scale-105 transition-transform">
              Book a Free Audit →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
