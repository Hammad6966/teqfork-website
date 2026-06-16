"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`AI Audit Request — ${form.business || form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nBusiness: ${form.business}\n\n${form.message}`
    );
    window.open(`mailto:hello@teqfork.tech?subject=${subject}&body=${body}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputClass =
    "w-full bg-[#0f0f0f] border border-white/10 text-white placeholder-gray-600 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#00F5FF]/50 focus:ring-1 focus:ring-[#00F5FF]/20 transition-colors duration-200";

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#050505] section-reveal" data-reveal="true">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex w-fit items-center gap-2 bg-[rgba(0,245,255,0.08)] border border-[rgba(0,245,255,0.2)] text-[#00F5FF] text-xs font-semibold tracking-widest px-4 py-2 rounded-full">
              GET IN TOUCH
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Start With a Free<br />AI Audit
            </h2>
            <p className="text-gray-400 text-base leading-relaxed max-w-md">
              In 15 minutes we&apos;ll map exactly where your business is losing time and money — and show you what we can automate.
            </p>

            <a
              href="https://calendly.com/teqfork/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#00F5FF] text-black font-bold px-8 py-4 rounded-full text-base hover:brightness-110 transition-all duration-200 animate-pulse-slow"
            >
              Book Your Free 15-Min Call →
            </a>

            <div className="flex flex-col gap-2.5">
              {["No pitch, no commitment", "Get a free automation roadmap", "Response within 24 hours"].map((point) => (
                <div key={point} className="flex items-center gap-2.5 text-gray-400 text-sm">
                  <span className="text-[#00F5FF] font-bold text-base leading-none">✓</span>
                  {point}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2.5 pt-5 border-t border-white/5">
              <a href="mailto:hello@teqfork.tech" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm">
                <Mail size={15} className="text-[#00F5FF]" />
                hello@teqfork.tech
              </a>
              <a href="https://www.linkedin.com/company/teqfork/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm">
                <Linkedin size={15} className="text-[#00F5FF]" />
                linkedin.com/company/teqfork
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative"
          >
            {/* Glow border wrapper */}
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-[rgba(0,245,255,0.25)] via-[rgba(0,245,255,0.05)] to-transparent">
              <div className="rounded-2xl bg-[#0a0a0a] p-8 flex flex-col gap-5">
                <div>
                  <h3 className="text-white font-semibold text-lg">Tell us about your business</h3>
                  <p className="text-gray-500 text-sm mt-1">We&apos;ll get back to you within 24 hours.</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-gray-400 text-xs font-medium">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-gray-400 text-xs font-medium">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-400 text-xs font-medium">Business / Company Name</label>
                    <input
                      type="text"
                      placeholder="Your Dental Clinic, Trading Company..."
                      value={form.business}
                      onChange={(e) => setForm({ ...form, business: e.target.value })}
                      className={inputClass}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-400 text-xs font-medium">What do you want to automate?</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="e.g. We get 50+ calls a day for bookings and miss half of them after hours..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#00F5FF] text-black font-bold py-3.5 rounded-xl text-sm hover:brightness-110 transition-all duration-200 mt-1"
                  >
                    {sent ? (
                      "✓ Opening email client..."
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>

                <p className="text-gray-600 text-xs text-center">
                  Prefer a call?{" "}
                  <a href="https://calendly.com/teqfork/30min" target="_blank" rel="noopener noreferrer" className="text-[#00F5FF] hover:underline">
                    Book directly on Calendly →
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;
