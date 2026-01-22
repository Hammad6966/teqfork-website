import { ArrowLeft, Shield, Zap, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

export default function FinTechPlatformPage() {
  return (
    <div className="relative min-h-screen">
      <div className="mesh-gradient pointer-events-none absolute inset-0" />
      <div className="noise pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-4xl px-6 py-24 md:py-32">
        <Link
          href="/#work"
          data-hover="true"
          className="group mb-12 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Case Studies
        </Link>

        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-teal/80 ring-1 ring-teal/25 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-teal shadow-[0_0_12px_rgba(0,245,255,0.8)]" />
          <span>Flagship Architecture</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="h-px w-8 bg-teal" />
            <span className="text-xs font-medium uppercase tracking-widest text-teal">
              Case Study
            </span>
            <div className="h-px w-8 bg-teal" />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            FinTech Platform
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Secure banking infrastructure built for scale, compliance, and exceptional user experience.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="glass border-glow rounded-2xl p-4 text-center">
            <div className="mb-2 text-2xl font-bold text-teal">99.99%</div>
            <div className="text-xs text-muted-foreground">Uptime</div>
          </div>
          <div className="glass border-glow rounded-2xl p-4 text-center">
            <div className="mb-2 text-2xl font-bold text-teal">2M+</div>
            <div className="text-xs text-muted-foreground">Transactions/Day</div>
          </div>
          <div className="glass border-glow rounded-2xl p-4 text-center">
            <div className="mb-2 text-2xl font-bold text-teal">&lt;100ms</div>
            <div className="text-xs text-muted-foreground">Response Time</div>
          </div>
          <div className="glass border-glow rounded-2xl p-4 text-center">
            <div className="mb-2 text-2xl font-bold text-teal">SOC 2</div>
            <div className="text-xs text-muted-foreground">Compliant</div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div className="glass border-glow rounded-3xl p-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              Challenge
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              A leading financial institution needed to modernize their core banking platform 
              to handle millions of daily transactions while maintaining strict security and 
              regulatory compliance. The legacy system couldn't scale and was becoming a 
              bottleneck for growth.
            </p>
          </div>

          <div className="glass border-glow rounded-3xl p-8">
            <h2 className="mb-6 text-2xl font-semibold text-foreground">
              Solution
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Security Architecture</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Implemented end-to-end encryption, multi-factor authentication, and zero-trust 
                    network architecture. All data is encrypted at rest and in transit with 
                    industry-leading key management.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">High-Performance Infrastructure</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Built on microservices architecture with Kubernetes orchestration, enabling 
                    horizontal scaling and sub-100ms response times even during peak loads.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Compliance & Monitoring</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Real-time compliance monitoring, automated audit trails, and comprehensive 
                    logging ensure SOC 2 Type II compliance and regulatory adherence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass border-glow rounded-3xl p-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              Results
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              The platform now processes over 2 million transactions daily with 99.99% uptime. 
              Response times average under 100ms, and the system scales automatically to handle 
              traffic spikes. Security audits consistently pass with zero critical findings.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal" />
                <span>50% reduction in transaction processing time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal" />
                <span>Zero security incidents since launch</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal" />
                <span>Seamless handling of 10x traffic growth</span>
              </li>
            </ul>
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
              href="/#work"
              data-hover="true"
              className="inline-flex items-center justify-center rounded-[24px] border border-border bg-card/50 px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-teal/30"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
