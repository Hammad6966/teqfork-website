"use client";

import Image from "next/image";
import { useState } from "react";

export const teamMembers = [
  {
    id: 1,
    name: "Hammad Anwar",
    role: "Founder & Technical Lead",
    bio: "Leads strategic direction and system architecture, ensuring every client receives a high-performance digital solution.",
    imageUrl: "/founder.jpg",
    linkedinUrl: "https://www.linkedin.com/in/hammad-anwar-416220319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
  {
    id: 2,
    name: "Ahmad Suleman",
    role: "DevOps & Cloud Lead",
    bio: "Oversees strategic business initiatives and executive planning, bridging vision with execution. Crafting our identiity in cloud and solutions",
    imageUrl: "/co-founder.jpg",
    linkedinUrl: "https://www.linkedin.com/in/ahmad-s-812134316"
  },
  {
    id: 3,
    name: "Kaab Bhinder",
    role: "Senior Web Engineer",
    bio: "Specializes in high-performance React, Next.js sites, crafting our digital presence, one project at a time.",
    imageUrl: "/kaab.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/kaab-bhinder"
  },
  {
    id: 4,
    name: "M.AbuBakar",
    role: "Head of Sales",
    bio: "Your primary point of contact for new partnerships. Dedicated to finding the right digital fit for your business goals.",
    imageUrl: "/abubakar.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/muhammad-abu-bakar-b94904311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
  {
    id: 5,
    name: "Saram Chatha",
    role: "Head of Operations",
    bio: "Ensures projects are delivered on time and within scope, managing the bridge between client needs and development.",
    imageUrl: "/saram.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/saramchatha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
];

export function AboutSection() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
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
        <div className="mb-16 flex flex-col gap-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-teal/60" />
            <span className="text-xs font-semibold tracking-[0.22em] text-teal">
              EXPERTS
            </span>
            <span className="h-px flex-1 bg-teal/10" />
          </div>
          <div>
            <h2
              id="about-heading"
              className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            >
              Meet the Experts
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg leading-relaxed text-muted-foreground">
              A focused team of engineers and strategists dedicated to your growth.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <article
                key={member.id}
                className="glass border-glow group relative overflow-hidden rounded-[32px] p-8 transition-all hover:border-teal/40"
              >
                {/* Image */}
                <div className="mb-6 flex justify-center">
                  <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full bg-gradient-to-tr from-teal/40 via-teal/10 to-transparent shadow-[0_0_60px_rgba(0,245,255,0.3)] ring-2 ring-teal/20 transition-all group-hover:shadow-[0_0_80px_rgba(0,245,255,0.5)] group-hover:ring-teal/40 md:h-36 md:w-36">
                    {!imageErrors[member.id] ? (
                      <Image
                        src={member.imageUrl}
                        alt={member.name}
                        fill
                        className="object-cover object-[50%_30%] transition-transform duration-500 group-hover:scale-105"
                        onError={() => setImageErrors(prev => ({ ...prev, [member.id]: true }))}
                      />
                    ) : null}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-3">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-base font-medium text-teal">
                    {member.role}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>

                  {/* LinkedIn Icon */}
                  {member.linkedinUrl !== "#" && (
                    <div className="flex justify-center pt-4">
                      <a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                        data-hover="true"
                        className="glass-hover inline-flex items-center justify-center rounded-full border border-teal/30 bg-teal/10 w-10 h-10 text-teal transition-all hover:bg-teal/20 hover:border-teal/50"
                        aria-label={`Connect with ${member.name} on LinkedIn`}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

