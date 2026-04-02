"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { WireframeSphere } from "./wireframe-sphere";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [logoError, setLogoError] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Mesh gradient background */}
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-700"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at ${20 + mousePos.x * 15}% ${40 + mousePos.y * 10}%, rgba(0, 245, 255, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at ${80 - mousePos.x * 10}% ${60 - mousePos.y * 10}%, rgba(0, 245, 255, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse 100% 100% at 50% 100%, rgba(0, 245, 255, 0.04) 0%, transparent 50%)
          `,
        }}
      />

      {/* Noise overlay */}
      <div className="noise pointer-events-none absolute inset-0" />

      {/* Navigation */}
      <nav className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-8 py-6 lg:px-16">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-teal/10 backdrop-blur-sm">
            {!logoError ? (
              <Image
                src="/teqfork_logo.webp"
                alt="Teqfork Logo"
                width={40}
                height={40}
                className="object-contain"
                onError={() => setLogoError(true)}
                priority
              />
            ) : (
              <span className="text-lg font-bold text-teal">T</span>
            )}
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Teqfork
          </span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#lab"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Work
          </a>
          <a
            href="#process"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Process
          </a>
          <a
            href="#contact"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </div>
        <a
          href="#contact"
          data-hover="true"
          className="border-glow rounded-[24px] border border-teal/30 bg-teal/10 px-6 py-2.5 text-sm font-medium text-teal backdrop-blur-sm transition-all hover:border-teal/50 hover:bg-teal/20 hover:shadow-[0_0_40px_rgba(0,245,255,0.18)]"
        >
          Start a Project
        </a>
      </nav>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/5 px-4 py-1.5 backdrop-blur-sm">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
          <span className="text-xs font-medium tracking-wide text-teal">
            PREMIUM SOFTWARE ENGINEERING
          </span>
        </div>

        <h1 className="mb-6 max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl lg:text-8xl">
          <span className="text-gradient">Architecting</span>
          <br />
          <span className="text-foreground">Digital Excellence</span>
        </h1>

        <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          We craft premium software solutions that scale. From concept to
          deployment, we architect systems that define the future.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#work"
            data-hover="true"
            className="group flex items-center gap-2 rounded-[24px] bg-teal px-8 py-4 text-sm font-semibold text-background transition-all hover:shadow-[0_0_40px_rgba(0,245,255,0.3)]"
          >
            Explore Our Work
            <ChevronDown className="h-4 w-4 rotate-[-90deg] transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#process"
            data-hover="true"
            className="rounded-[24px] border border-border bg-card/50 px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-teal/30 hover:bg-card"
          >
            View Process
          </a>
        </div>
      </div>

      {/* Floating 3D Sphere */}
      <div className="pointer-events-none absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-60 lg:translate-x-0 lg:translate-y-0">
        <WireframeSphere />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Scroll
          </span>
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-border p-1.5">
            <div className="h-2 w-1 animate-bounce rounded-full bg-teal" />
          </div>
        </div>
      </div>
    </section>
  );
}


