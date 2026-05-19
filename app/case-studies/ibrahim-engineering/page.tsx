import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = { title: "Ibrahim Engineering E-Commerce — Teqfork" };

export default function IbrahimEngineeringPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <Link href="/#work" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-12 transition-colors">
          <ArrowLeft size={16} /> Back to Work
        </Link>

        <div className="flex flex-col gap-4 mb-12">
          <span className="text-xs font-semibold text-[#00F5FF] bg-[rgba(0,245,255,0.1)] px-3 py-1 rounded-full w-fit">E-Commerce + AI SEO</span>
          <h1 className="text-3xl md:text-5xl font-bold">E-Commerce Platform + SEO AI Agent</h1>
          <p className="text-gray-400">Mehar Qasim, CEO — Ibrahim Engineering Services · 🇵🇰 Pakistan</p>
        </div>

        <div className="flex flex-col gap-12">
          <section>
            <h2 className="text-2xl font-semibold text-[#00F5FF] mb-4">The Challenge</h2>
            <p className="text-gray-300 leading-relaxed">Ibrahim Engineering Services distributes engineering parts to businesses across Pakistan. They had no online presence and were relying entirely on word-of-mouth and direct sales calls. They needed an e-commerce platform that could handle their product catalog and automatically bring in new customers through organic search.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#00F5FF] mb-4">What We Built</h2>
            <ul className="flex flex-col gap-3 text-gray-300">
              <li className="flex gap-3"><span className="text-[#00F5FF] mt-1">→</span><span><strong className="text-white">Full E-Commerce Platform:</strong> Product catalog, ordering system, inventory management, and payment integration.</span></li>
              <li className="flex gap-3"><span className="text-[#00F5FF] mt-1">→</span><span><strong className="text-white">AI SEO Agent:</strong> Continuously analyzes search trends, rewrites product descriptions, generates meta tags, and builds internal linking — entirely automated.</span></li>
              <li className="flex gap-3"><span className="text-[#00F5FF] mt-1">→</span><span><strong className="text-white">Admin Dashboard:</strong> Order management, customer tracking, and SEO performance analytics.</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#00F5FF] mb-4">The Results</h2>
            <ul className="flex flex-col gap-3 text-gray-300">
              <li className="flex gap-3"><span className="text-[#00F5FF]">✓</span> Online storefront live and generating orders</li>
              <li className="flex gap-3"><span className="text-[#00F5FF]">✓</span> AI SEO agent running 24/7, no manual content work</li>
              <li className="flex gap-3"><span className="text-[#00F5FF]">✓</span> Organic traffic growing week over week</li>
              <li className="flex gap-3"><span className="text-[#00F5FF]">✓</span> New customer acquisition without ad spend</li>
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
