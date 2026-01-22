import { ArrowLeft } from "lucide-react";
import Link from "next/link";

function SmartphoneIcon(props: React.SVGProps<SVGSVGElement>) {
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

export default function AppDevelopmentPage() {
  return (
    <div className="relative min-h-screen">
      <div className="mesh-gradient pointer-events-none absolute inset-0" />
      <div className="noise pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-4xl px-6 py-24 md:py-32">
        <Link
          href="/#lab"
          data-hover="true"
          className="group mb-12 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Services
        </Link>

        <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-teal/10 text-teal ring-1 ring-teal/15">
          <SmartphoneIcon className="h-8 w-8" />
        </div>

        <div className="mb-6">
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="h-px w-8 bg-teal" />
            <span className="text-xs font-medium uppercase tracking-widest text-teal">
              App Development
            </span>
            <div className="h-px w-8 bg-teal" />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Cross-Platform Flutter & Native Solutions
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Delivering native performance with cross-platform efficiency for iOS, Android, and beyond.
          </p>
        </div>

        <div className="space-y-8">
          <div className="glass border-glow rounded-3xl p-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              Mobile Excellence
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              We build mobile applications that feel native on every platform. Whether you need 
              a Flutter app for rapid cross-platform development or native iOS/Android solutions 
              for maximum performance, we deliver apps that users love.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal" />
                <span>Flutter development for iOS, Android, and web from a single codebase</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal" />
                <span>Native iOS (Swift) and Android (Kotlin) development for peak performance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal" />
                <span>App Store and Play Store optimization and deployment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal" />
                <span>Real-time features, push notifications, and offline capabilities</span>
              </li>
            </ul>
          </div>

          <div className="glass border-glow rounded-3xl p-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              Platform Strategy
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              We help you choose the right approach for your project. Flutter offers faster 
              development and code sharing, while native development provides unmatched performance 
              and platform-specific features. We guide you through the decision and execute flawlessly.
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
