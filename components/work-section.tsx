import Link from "next/link";
import { ChevronRight } from "lucide-react";

const CASE_STUDIES = [
  {
    title: "FinTech Platform",
    subtitle: "Secure banking infrastructure.",
    size: "lg",
    slug: "fintech-platform",
  },
  {
    title: "AI Healthcare Agent",
    subtitle: "Patient triage automation.",
    size: "md",
    slug: "ai-healthcare-agent",
  },
  {
    title: "E-commerce Ecosystem",
    subtitle: "High-scale retail solution.",
    size: "md",
    slug: "ecommerce-ecosystem",
  },
] as const;

export function WorkSection() {
  return (
    <section id="work" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-teal/60" />
            <span className="text-xs font-semibold tracking-[0.22em] text-teal">
              OUR WORK
            </span>
            <span className="h-px flex-1 bg-teal/10" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Case Studies
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            A snapshot of the systems we architect—built for security, scale,
            and longevity across regulated and high-demand environments.
          </p>
        </div>

        {/* Bento / Masonry grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:auto-rows-[220px]">
          {CASE_STUDIES.map((caseStudy, index) => {
            const isLarge = caseStudy.size === "lg";
            const colSpan =
              index === 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-1";

            return (
              <Link
                key={caseStudy.title}
                href={`/case-studies/${caseStudy.slug}`}
                data-hover="true"
                className={`group relative block overflow-hidden rounded-3xl border-glow bg-charcoal/90 transition-all ${colSpan}`}
              >
                {/* Teal glow background */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-[-40%] bg-[radial-gradient(circle_at_top,_rgba(0,245,255,0.2),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(0,245,255,0.16),_transparent_55%)]" />
                </div>

                {/* Image placeholder */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-black" />
                  <div className="absolute inset-0 opacity-60 mix-blend-soft-light">
                    <div className="mesh-gradient h-full w-full" />
                  </div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,245,255,0.22),_transparent_60%)]" />
                </div>

                {/* Content */}
                <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-teal/80 ring-1 ring-teal/25 backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal shadow-[0_0_12px_rgba(0,245,255,0.8)]" />
                      <span>{isLarge ? "Flagship Architecture" : "Applied Systems"}</span>
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                      {caseStudy.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                      {caseStudy.subtitle}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between text-xs font-medium text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <span className="h-px w-6 bg-teal/60" />
                      <span className="tracking-[0.22em] text-[10px] uppercase">
                        View case study
                      </span>
                    </span>
                    <ChevronRight className="h-4 w-4 text-teal transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Lift + glow on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-teal/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:ring-teal/50 group-hover:shadow-[0_0_40px_rgba(0,245,255,0.28)]" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

