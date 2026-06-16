import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Cursor3D from "@/components/cursor-3d";
import SplashScreen from "@/components/splash-screen";
import RevealObserver from "@/components/reveal-observer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Teqfork | AI Automation Agency",
  description:
    "AI receptionists, calling agents, and booking systems for clinics, service businesses, and traders — built and running in 2 weeks.",
  icons: {
    icon: "/teqfork_logo.webp",
    apple: "/teqfork_logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-[#f5f5f5] overflow-x-hidden`}>
        <div className="w-full overflow-x-hidden">
          <div className="noise fixed inset-0 pointer-events-none z-[999]" />
          <Cursor3D />
          <RevealObserver />
          <SplashScreen>
            {children}
          </SplashScreen>
          <Analytics />
        </div>
        {/* Lightweight scroll reveal — no library needed */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            var io = new IntersectionObserver(function(entries){
              entries.forEach(function(e){ if(e.isIntersecting) e.target.classList.add('visible'); });
            }, { threshold: 0.1 });
            function observe(){
              document.querySelectorAll('.fade-up').forEach(function(el){ io.observe(el); });
            }
            if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',observe);
            else observe();
          })();
        ` }} />
      </body>
    </html>
  );
}
