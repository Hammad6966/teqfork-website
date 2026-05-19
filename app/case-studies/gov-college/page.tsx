import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = { title: "Govt Graduate College Portal — Teqfork" };

export default function GovCollegePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <Link href="/#work" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-12 transition-colors">
          <ArrowLeft size={16} /> Back to Work
        </Link>

        <div className="flex flex-col gap-4 mb-12">
          <span className="text-xs font-semibold text-[#00F5FF] bg-[rgba(0,245,255,0.1)] px-3 py-1 rounded-full w-fit">Web Platform + Mobile App</span>
          <h1 className="text-3xl md:text-5xl font-bold">College Portal — Govt Graduate College Civil Lines</h1>
          <p className="text-gray-400">Dr. Asad, Assistant Professor · 🇵🇰 Pakistan</p>
        </div>

        <div className="flex flex-col gap-12">
          <section>
            <h2 className="text-2xl font-semibold text-[#00F5FF] mb-4">The Challenge</h2>
            <p className="text-gray-300 leading-relaxed">Govt Graduate College Civil Lines had no digital infrastructure. Students had no way to access course information, schedules, or announcements online. Faculty had no centralized system for managing courses and student records. Administration was entirely paper-based.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#00F5FF] mb-4">What We Built</h2>
            <ul className="flex flex-col gap-3 text-gray-300">
              <li className="flex gap-3"><span className="text-[#00F5FF] mt-1">→</span><span><strong className="text-white">College Website:</strong> Modern, responsive website with department pages, faculty profiles, announcements, and admissions information.</span></li>
              <li className="flex gap-3"><span className="text-[#00F5FF] mt-1">→</span><span><strong className="text-white">Courses Management System:</strong> Faculty can manage courses, upload materials, post announcements, and track attendance from one dashboard.</span></li>
              <li className="flex gap-3"><span className="text-[#00F5FF] mt-1">→</span><span><strong className="text-white">React Native Student Portal:</strong> Mobile app for students to access their schedule, course materials, grades, and college announcements.</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#00F5FF] mb-4">The Results</h2>
            <ul className="flex flex-col gap-3 text-gray-300">
              <li className="flex gap-3"><span className="text-[#00F5FF]">✓</span> College now has a full digital presence</li>
              <li className="flex gap-3"><span className="text-[#00F5FF]">✓</span> Students and faculty actively using the platform</li>
              <li className="flex gap-3"><span className="text-[#00F5FF]">✓</span> Administration workload significantly reduced</li>
              <li className="flex gap-3"><span className="text-[#00F5FF]">✓</span> One platform serving faculty, students, and admin</li>
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
