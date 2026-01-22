import { ArrowLeft, ShoppingCart, Globe, BarChart3, Users } from "lucide-react";
import Link from "next/link";

export default function EcommerceEcosystemPage() {
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

        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-teal/80 ring-1 ring-teal/25 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-teal shadow-[0_0_12px_rgba(0,245,255,0.8)]" />
          <span>Applied Systems</span>
        </div>

        <div className="mb-8">
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="h-px w-8 bg-teal" />
            <span className="text-xs font-medium uppercase tracking-widest text-teal">
              Case Study
            </span>
            <div className="h-px w-8 bg-teal" />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            E-commerce Ecosystem
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            High-scale retail solution handling millions of products, orders, and customers with seamless performance.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="glass border-glow rounded-2xl p-4 text-center">
            <div className="mb-2 text-2xl font-bold text-teal">10M+</div>
            <div className="text-xs text-muted-foreground">Products</div>
          </div>
          <div className="glass border-glow rounded-2xl p-4 text-center">
            <div className="mb-2 text-2xl font-bold text-teal">500K+</div>
            <div className="text-xs text-muted-foreground">Orders/Month</div>
          </div>
          <div className="glass border-glow rounded-2xl p-4 text-center">
            <div className="mb-2 text-2xl font-bold text-teal">99.9%</div>
            <div className="text-xs text-muted-foreground">Uptime</div>
          </div>
          <div className="glass border-glow rounded-2xl p-4 text-center">
            <div className="mb-2 text-2xl font-bold text-teal">50ms</div>
            <div className="text-xs text-muted-foreground">Page Load</div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="glass border-glow rounded-3xl p-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              Challenge
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              A global e-commerce platform needed to scale from handling thousands to millions of 
              daily transactions. The existing infrastructure couldn't handle Black Friday traffic 
              spikes, leading to crashes and lost revenue. They needed a solution that could scale 
              infinitely while maintaining fast page loads.
            </p>
          </div>

          <div className="glass border-glow rounded-3xl p-8">
            <h2 className="mb-6 text-2xl font-semibold text-foreground">
              Solution
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <ShoppingCart className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Microservices Architecture</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Redesigned the platform into independent microservices for catalog, cart, 
                    checkout, and inventory, enabling independent scaling and deployment.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Global CDN & Edge Computing</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Implemented edge caching and CDN distribution to serve content from locations 
                    closest to users, reducing latency to under 50ms globally.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Real-Time Analytics</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Built comprehensive analytics pipeline tracking user behavior, inventory levels, 
                    and sales performance in real-time for data-driven decision making.
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
              The platform now handles over 500,000 orders per month with 99.9% uptime, even during 
              peak shopping events. Page load times average 50ms, and the system automatically scales 
              to handle traffic spikes without manual intervention.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal" />
                <span>300% increase in peak traffic handling capacity</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal" />
                <span>Zero downtime during Black Friday sales events</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal" />
                <span>40% improvement in conversion rate due to faster page loads</span>
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
