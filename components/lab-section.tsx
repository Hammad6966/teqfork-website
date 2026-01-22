import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Bot, BrainCircuit, Code, Laptop, Network } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "High-performance React/Next.js architectures.",
    Icon: Code,
    slug: "web-development",
  },
  {
    title: "App Development",
    description: "Cross-platform Flutter & Native solutions.",
    Icon: SmartphoneIcon,
    slug: "app-development",
  },
  {
    title: "Networking & Cloud",
    description: "Secure infrastructure design.",
    Icon: Network,
    slug: "networking-cloud",
  },
  {
    title: "AI Automation",
    description: "Workflow optimization.",
    Icon: BrainCircuit,
    slug: "ai-automation",
  },
  {
    title: "AI Agents & n8n",
    description: "Autonomous agent workflows and n8n integrations.",
    Icon: Bot,
    slug: "ai-agents-n8n",
  },
  {
    title: "Digital Solutions",
    description: "Custom software & consulting.",
    Icon: Laptop,
    slug: "digital-solutions",
  },
] as const;

function SmartphoneIcon(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M9 2h6a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M10.5 19.2h3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LabSection() {
  return (
    <section id="lab" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-teal/60" />
            <span className="text-xs font-semibold tracking-[0.22em] text-teal">
              OUR EXPERTISE
            </span>
            <span className="h-px flex-1 bg-teal/10" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Our Expertise
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Premium engineering across web, mobile, cloud, and intelligent
            automation—built to scale and designed to endure.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, Icon, slug }) => (
            <div
              key={title}
              data-hover="true"
              className="glass border-glow group rounded-3xl p-6 transition-all hover:-translate-y-0.5"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/10 text-teal ring-1 ring-teal/15">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold tracking-tight text-foreground">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-teal/25 via-teal/5 to-transparent opacity-70" />
              <Link
                href={`/services/${slug}`}
                data-hover="true"
                className="group/btn mt-4 inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-teal/80 transition-all hover:text-teal"
              >
                Learn more
                <ArrowUpRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

