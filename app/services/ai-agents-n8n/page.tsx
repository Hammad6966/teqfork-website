import { Bot, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AIAgentsN8nPage() {
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
          <Bot className="h-8 w-8" />
        </div>

        <div className="mb-6">
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="h-px w-8 bg-teal" />
            <span className="text-xs font-medium uppercase tracking-widest text-teal">
              AI Agents & n8n
            </span>
            <div className="h-px w-8 bg-teal" />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Autonomous Agent Workflows & n8n Integrations
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Building intelligent agents that work autonomously and integrate seamlessly with your existing systems.
          </p>
        </div>

        <div className="space-y-8">
          <div className="glass border-glow rounded-3xl p-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              AI Agents
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              We develop autonomous AI agents that can handle complex tasks independently, 
              make decisions, and interact with multiple systems. These agents learn from 
              interactions and improve their performance over time.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal" />
                <span>Conversational AI agents for customer support and engagement</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal" />
                <span>Task automation agents that handle multi-step workflows</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal" />
                <span>Data analysis agents that provide insights and recommendations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal" />
                <span>Integration with LLMs and custom model fine-tuning</span>
              </li>
            </ul>
          </div>

          <div className="glass border-glow rounded-3xl p-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              n8n Workflow Automation
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              We leverage n8n, the powerful workflow automation platform, to connect your 
              applications and services. Our n8n integrations enable seamless data flow 
              between systems, automate repetitive tasks, and create sophisticated workflows 
              that run reliably in the background.
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
