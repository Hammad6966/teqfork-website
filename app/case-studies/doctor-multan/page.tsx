import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = { title: "AI Doctor Receptionist Multan — Teqfork" };

export default function DoctorMultanPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <Link href="/#work" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-12 transition-colors">
          <ArrowLeft size={16} /> Back to Work
        </Link>

        <div className="flex flex-col gap-4 mb-12">
          <span className="text-xs font-semibold text-[#00F5FF] bg-[rgba(0,245,255,0.1)] px-3 py-1 rounded-full w-fit">AI Calling Agent + Booking</span>
          <h1 className="text-3xl md:text-5xl font-bold">AI Doctor Receptionist — Multan</h1>
          <p className="text-gray-400">🏥 Healthcare · Multan, Pakistan</p>
        </div>

        <div className="flex flex-col gap-12">
          <section>
            <h2 className="text-2xl font-semibold text-[#00F5FF] mb-4">The Challenge</h2>
            <p className="text-gray-300 leading-relaxed">An MBBS physician in Multan was managing patient communication manually — answering every call personally, managing an appointment book by hand, and losing patients who couldn&apos;t reach the clinic during off-hours. Missed appointments and administrative overhead were cutting into time that should have been spent on patient care.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#00F5FF] mb-4">What We Built</h2>
            <ul className="flex flex-col gap-3 text-gray-300">
              <li className="flex gap-3"><span className="text-[#00F5FF] mt-1">→</span><span><strong className="text-white">AI Voice Receptionist:</strong> Handles all incoming patient calls, answers questions about the doctor&apos;s availability and services, and collects patient information.</span></li>
              <li className="flex gap-3"><span className="text-[#00F5FF] mt-1">→</span><span><strong className="text-white">AI Calling Agent:</strong> Makes proactive outbound calls to confirm appointments, follow up on missed visits, and remind patients of upcoming consultations.</span></li>
              <li className="flex gap-3"><span className="text-[#00F5FF] mt-1">→</span><span><strong className="text-white">Booking Platform:</strong> Web-based booking system integrated with the doctor&apos;s calendar for seamless appointment management.</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#00F5FF] mb-4">The Results</h2>
            <ul className="flex flex-col gap-3 text-gray-300">
              <li className="flex gap-3"><span className="text-[#00F5FF]">✓</span> Missed appointments reduced significantly</li>
              <li className="flex gap-3"><span className="text-[#00F5FF]">✓</span> All patient communication handled by AI</li>
              <li className="flex gap-3"><span className="text-[#00F5FF]">✓</span> Doctor no longer managing calls manually</li>
              <li className="flex gap-3"><span className="text-[#00F5FF]">✓</span> Patients can book appointments 24/7</li>
            </ul>
          </section>

          <div className="border-t border-white/5 pt-8">
            <p className="text-gray-400 mb-4">Want similar results for your clinic?</p>
            <a href="https://calendly.com/teqfork/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#00F5FF] text-black font-bold px-8 py-3.5 rounded-full hover:scale-105 transition-transform">
              Book a Free Audit →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
