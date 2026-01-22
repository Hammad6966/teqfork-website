"use client";

import { ArrowUpRight, Mail, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="relative px-6 py-32 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="h-px w-8 bg-teal" />
            <span className="text-xs font-medium uppercase tracking-widest text-teal">
              Get in Touch
            </span>
            <div className="h-px w-8 bg-teal" />
          </div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            <span className="text-gradient">{"Let's Build Something"}</span>
            <br />
            <span className="text-foreground">Extraordinary</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Ready to transform your vision into reality? We&apos;d love to hear
            about your project.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-teal/30 bg-teal/10 px-6 py-3 backdrop-blur-sm">
            <span className="text-sm font-medium text-teal">Let&apos;s start:</span>
            <a
              href="mailto:teqfork@gmail.com"
              className="text-sm font-semibold text-foreground transition-colors hover:text-teal"
            >
              teqfork@gmail.com
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href="tel:+923196667336"
              className="text-sm font-semibold text-foreground transition-colors hover:text-teal"
            >
              +923196667336
            </a>
          </div>
        </div>

        {/* Contact grid */}
        <div className="grid gap-6 md:grid-cols-2 md:max-w-2xl md:mx-auto">
          {/* Email */}
          <a
            href="mailto:teqfork@gmail.com"
            data-hover="true"
            className="glass glass-hover border-glow group flex flex-col items-center rounded-[24px] p-8 text-center transition-all"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal/10 transition-all duration-300 group-hover:bg-teal/20">
              <Mail className="h-6 w-6 text-teal" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              Email Us
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              For project inquiries and partnerships
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-teal">
              teqfork@gmail.com
              <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
            </span>
          </a>

          {/* Phone */}
          <a
            href="tel:+923196667336"
            data-hover="true"
            className="glass glass-hover border-glow group flex flex-col items-center rounded-[24px] p-8 text-center transition-all"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal/10 transition-all duration-300 group-hover:bg-teal/20">
              <Phone className="h-6 w-6 text-teal" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              Call Us
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Speak directly with our team
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-teal">
              +923196667336
              <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
            </span>
          </a>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            data-hover="true"
            className="group inline-flex items-center gap-3 rounded-[24px] bg-teal px-10 py-5 text-base font-semibold text-background transition-all hover:shadow-[0_0_60px_rgba(0,245,255,0.4)]"
          >
            Start Your Project
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}

