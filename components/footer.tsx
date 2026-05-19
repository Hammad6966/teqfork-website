import Link from "next/link";
import { Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505] py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-white font-semibold text-sm">Teqfork</span>
          <span className="text-gray-600 text-xs">AI Automation Agency — Islamabad, Pakistan</span>
          <span className="text-gray-600 text-xs mt-1">© 2026 Teqfork. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#lab" className="text-gray-500 hover:text-white text-xs transition-colors">Services</a>
          <a href="#work" className="text-gray-500 hover:text-white text-xs transition-colors">Work</a>
          <a href="#contact" className="text-gray-500 hover:text-white text-xs transition-colors">Contact</a>
          <a
            href="https://www.linkedin.com/company/teqfork/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#00F5FF] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:hello@teqfork.tech"
            className="text-gray-500 hover:text-white text-xs transition-colors"
          >
            hello@teqfork.tech
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
