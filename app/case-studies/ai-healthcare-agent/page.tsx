import { ArrowLeft, Brain, Clock, Heart, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function AIHealthcareAgentPage() {
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
            AI Healthcare Agent
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Patient triage automation that reduces wait times and improves care quality through intelligent decision-making.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="glass border-glow rounded-2xl p-4 text-center">
            <div className="mb-2 text-2xl font-bold text-teal">75%</div>
            <div className="text-xs text-muted-foreground">Faster Triage</div>
          </div>
          <div className="glass border-glow rounded-2xl p-4 text-center">
            <div className="mb-2 text-2xl font-bold text-teal">95%</div>
            <div className="text-xs text-muted-foreground">Accuracy</div>
          </div>
          <div className="glass border-glow rounded-2xl p-4 text-center">
            <div className="mb-2 text-2xl font-bold text-teal">24/7</div>
            <div className="text-xs text-muted-foreground">Availability</div>
          </div>
          <div className="glass border-glow rounded-2xl p-4 text-center">
            <div className="mb-2 text-2xl font-bold text-teal">HIPAA</div>
            <div className="text-xs text-muted-foreground">Compliant</div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="glass border-glow rounded-3xl p-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              Challenge
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              A major hospital network struggled with patient triage bottlenecks, leading to 
              long wait times and delayed care. Manual triage processes were inconsistent and 
              couldn't scale with patient volume, especially during peak hours.
            </p>
          </div>

          <div className="glass border-glow rounded-3xl p-8">
            <h2 className="mb-6 text-2xl font-semibold text-foreground">
              Solution
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <Brain className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">AI-Powered Triage</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Developed an intelligent agent that analyzes patient symptoms, medical history, 
                    and risk factors to provide accurate triage recommendations in seconds.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Real-Time Processing</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Natural language processing enables patients to describe symptoms conversationally, 
                    while the agent extracts key information and prioritizes cases based on urgency.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <Heart className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Healthcare Integration</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Seamlessly integrates with existing EHR systems, ensuring continuity of care 
                    and maintaining HIPAA compliance throughout all interactions.
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
              The AI healthcare agent reduced triage time by 75% while maintaining 95% accuracy 
              in urgency assessment. Patients receive immediate attention, and healthcare staff 
              can focus on critical cases. The system operates 24/7, handling thousands of 
              patient interactions daily.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal" />
                <span>Average triage time reduced from 15 minutes to 4 minutes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal" />
                <span>Zero HIPAA violations with comprehensive audit trails</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal" />
                <span>Improved patient satisfaction scores by 40%</span>
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
