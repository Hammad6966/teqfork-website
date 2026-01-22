import { Code, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function WebDevelopmentPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background effects */}
      <div className="mesh-gradient pointer-events-none absolute inset-0" />
      <div className="noise pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-4xl px-6 py-24 md:py-32">
        {/* Back button */}
        <Link
          href="/#lab"
          data-hover="true"
          className="group mb-12 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Services
        </Link>

        {/* Icon */}
        <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-teal/10 text-teal ring-1 ring-teal/15">
          <Code className="h-8 w-8" />
        </div>

        {/* Header */}
        <div className="mb-6">
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="h-px w-8 bg-teal" />
            <span className="text-xs font-medium uppercase tracking-widest text-teal">
              Web Development
            </span>
            <div className="h-px w-8 bg-teal" />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            High-Performance React/Next.js Architectures
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Building scalable, performant web applications that deliver exceptional user experiences.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div className="glass border-glow rounded-3xl p-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              What We Build
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              We specialize in crafting modern web applications using React and Next.js, 
              focusing on performance, scalability, and maintainability. Our architectures 
              are designed to handle growth while maintaining optimal user experiences.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal" />
                <span>Server-side rendered (SSR) and static site generation (SSG) for optimal performance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal" />
                <span>Component-based architecture with reusable, maintainable code</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal" />
                <span>API route optimization and database integration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal" />
                <span>Progressive Web App (PWA) capabilities for mobile-like experiences</span>
              </li>
            </ul>
          </div>

          <div className="glass border-glow rounded-3xl p-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              Our Approach
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              We follow industry best practices, implementing TypeScript for type safety, 
              Tailwind CSS for rapid UI development, and modern build tools for optimal 
              performance. Every project is optimized for Core Web Vitals and accessibility standards.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/#contact"
              data-hover="true"
              className="group inline-flex items-center justify-center gap-2 rounded-[24px] bg-teal px-8 py-4 text-sm font-semibold text-background transition-all hover:shadow-[0_0_40px_rgba(0,245,255,0.3)]"
            >
              Start Your Project
            </Link>
            <Link
              href="/#lab"
              data-hover="true"
              className="inline-flex items-center justify-center rounded-[24px] border border-border bg-card/50 px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-teal/30"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
