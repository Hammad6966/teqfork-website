"use client";

import Image from "next/image";
import { useState } from "react";

export function AboutSection() {
  const [founderImageError, setFounderImageError] = useState(false);
  const [coFounderImageError, setCoFounderImageError] = useState(false);
  return (
    <section
      id="about"
      className="relative px-6 py-24 md:py-32 lg:px-16"
      aria-labelledby="about-heading"
    >
      {/* Background teal glow band */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at top, var(--teal-glow), transparent 55%), radial-gradient(circle at bottom, var(--teal-glow), transparent 55%)",
        }}
      />

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 text-center md:text-left">
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <span className="h-px w-10 bg-teal/60" />
            <span className="text-xs font-semibold tracking-[0.22em] text-teal">
              LEADERSHIP
            </span>
            <span className="h-px flex-1 bg-teal/10" />
          </div>
          <div>
            <h2
              id="about-heading"
              className="text-3xl font-bold tracking-tight text-foreground md:text-5xl"
            >
              People behind Teqfork
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              A focused leadership team combining architectural vision with
              engineering precision—ensuring every system we ship is both
              ambitious and reliable.
            </p>
          </div>
        </div>

        {/* Leadership cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Founder */}
          <article className="glass border-glow group relative overflow-hidden rounded-[32px] p-8 transition-all hover:border-teal/40 md:p-10">
            {/* Image section - centered */}
            <div className="mb-6 flex justify-center">
              <div className="relative h-28 w-28 overflow-hidden rounded-3xl bg-gradient-to-tr from-teal/40 via-teal/10 to-transparent shadow-[0_0_60px_rgba(0,245,255,0.3)] ring-2 ring-teal/20 transition-all group-hover:shadow-[0_0_80px_rgba(0,245,255,0.5)] group-hover:ring-teal/40 md:h-36 md:w-36">
                {!founderImageError ? (
                  <Image
                    src="/founder.jpg"
                    alt="Hammad Anwar"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: "center top" }}
                    onError={() => setFounderImageError(true)}
                  />
                ) : null}
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-4 text-center">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-teal/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-teal ring-1 ring-teal/25">
                  Founder
                </div>
                <h3 className="mb-2 mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  Hammad Anwar
                </h3>
                <p className="mb-6 text-base font-medium text-teal md:text-lg">
                  Software Engineer
                </p>
                <p className="mx-auto max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                  Founder and visionary architect behind Teqfork. With a passion for 
                  crafting elegant software solutions, Hammad leads our strategic direction 
                  and technical excellence. His expertise spans full-stack development, 
                  system architecture, and building scalable platforms that stand the test 
                  of time.
                </p>
              </div>
              <div className="flex justify-center pt-4">
                <a
                  href="https://www.linkedin.com/in/hammad-anwar-416220319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noreferrer"
                  data-hover="true"
                  className="glass-hover inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-6 py-2.5 text-sm font-medium text-teal transition-all hover:bg-teal/20 hover:border-teal/50"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </article>

          {/* Co-Founder */}
          <article className="glass border-glow group relative overflow-hidden rounded-[32px] p-8 transition-all hover:border-teal/40 md:p-10">
            {/* Image section - centered */}
            <div className="mb-6 flex justify-center">
              <div className="relative h-28 w-28 overflow-hidden rounded-3xl bg-gradient-to-tr from-teal/40 via-teal/10 to-transparent shadow-[0_0_60px_rgba(0,245,255,0.3)] ring-2 ring-teal/20 transition-all group-hover:shadow-[0_0_80px_rgba(0,245,255,0.5)] group-hover:ring-teal/40 md:h-36 md:w-36">
                {!coFounderImageError ? (
                  <Image
                    src="/co-founder.jpg"
                    alt="Dr. Ahsan Rasheed"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: "center 20%", objectFit: "cover", scale: "1.3" }}
                    onError={() => setCoFounderImageError(true)}
                  />
                ) : null}
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-4 text-center">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-teal/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-teal ring-1 ring-teal/25">
                  Co-Founder
                </div>
                <h3 className="mb-2 mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  Dr. Ahsan Rasheed
                </h3>
                <p className="mb-6 text-base font-medium text-teal md:text-lg">
                  Work Lead
                </p>
                <p className="mx-auto max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                  Co-founder and work lead driving operational excellence at Teqfork. 
                  With a strong background in engineering leadership, Dr. Rasheed ensures 
                  our projects are delivered with precision and reliability. He oversees 
                  execution, maintains high standards of code quality, and ensures our 
                  systems remain stable and performant under real-world conditions.
                </p>
              </div>
              <div className="flex justify-center pt-4">
                <a
                  href="https://www.linkedin.com/in/ahsan-rasheed-6b3342327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noreferrer"
                  data-hover="true"
                  className="glass-hover inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-6 py-2.5 text-sm font-medium text-teal transition-all hover:bg-teal/20 hover:border-teal/50"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

