"use client";

import { useEffect, useRef, useState } from "react";
import { Code2, Layers, Shield } from "lucide-react";

const steps = [
  {
    id: "build",
    title: "Build",
    subtitle: "Architecture & Development",
    description:
      "We craft robust, scalable systems from the ground up. Every line of code is written with intention, following best practices and industry standards.",
    icon: Code2,
    codeSnippet: `// Initialize project structure
const app = createApplication({
  framework: 'next.js',
  database: 'postgresql',
  auth: 'enterprise-sso',
  monitoring: true
});

await app.scaffold();
await app.deploy('staging');`,
  },
  {
    id: "scale",
    title: "Scale",
    subtitle: "Infrastructure & Growth",
    description:
      "From startup to enterprise, we build systems that grow with you. Auto-scaling, load balancing, and distributed architectures are our specialty.",
    icon: Layers,
    codeSnippet: `// Scale infrastructure
await cluster.configure({
  minNodes: 3,
  maxNodes: 100,
  autoScale: {
    metric: 'cpu',
    threshold: 0.7
  }
});

loadBalancer.distribute('round-robin');`,
  },
  {
    id: "secure",
    title: "Secure",
    subtitle: "Protection & Compliance",
    description:
      "Security isn't an afterthought—it's built into our DNA. End-to-end encryption, SOC2 compliance, and regular security audits keep your data safe.",
    icon: Shield,
    codeSnippet: `// Security implementation
const security = new SecurityLayer({
  encryption: 'AES-256-GCM',
  certificates: 'auto-renew',
  compliance: ['SOC2', 'GDPR'],
  monitoring: 'real-time'
});

await security.audit();
console.log('All checks passed ✓');`,
  },
];

export function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [scrollProgress, setScrollProgress] = useState<number[]>([0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const newProgress = stepRefs.current.map((ref, index) => {
        if (!ref) return 0;
        const rect = ref.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Calculate progress based on element position
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const triggerPoint = viewportHeight * 0.6;

        if (elementTop > triggerPoint) return 0;
        if (elementTop < triggerPoint - elementHeight) return 1;

        const progress =
          (triggerPoint - elementTop) / elementHeight;
        return Math.min(Math.max(progress, 0), 1);
      });

      setScrollProgress(newProgress);

      // Find active step
      const activeStep = newProgress.findIndex(
        (p, i) => p > 0.3 && (i === newProgress.length - 1 || newProgress[i + 1] < 0.3)
      );
      setActiveIndex(activeStep);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative px-6 py-32 lg:px-16"
    >
      {/* Section header */}
      <div className="mx-auto mb-24 max-w-7xl">
        <div className="mb-4 inline-flex items-center gap-2">
          <div className="h-px w-8 bg-teal" />
          <span className="text-xs font-medium uppercase tracking-widest text-teal">
            Our Process
          </span>
        </div>
        <h2 className="mb-4 max-w-2xl text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          <span className="text-gradient">How We Work</span>
        </h2>
        <p className="max-w-xl text-lg text-muted-foreground">
          A methodical approach to building software that stands the test of
          time.
        </p>
      </div>

      {/* Timeline */}
      <div className="mx-auto max-w-7xl">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute bottom-0 left-0 top-0 w-px bg-border md:left-1/2 md:-translate-x-1/2" />

          {/* Progress line */}
          <div
            className="absolute left-0 top-0 w-px bg-gradient-to-b from-teal to-teal/20 transition-all duration-300 md:left-1/2 md:-translate-x-1/2"
            style={{
              height: `${Math.max(...scrollProgress) * 100}%`,
            }}
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const progress = scrollProgress[index];
            const isActive = activeIndex === index;

            return (
              <div
                key={step.id}
                ref={(el) => { stepRefs.current[index] = el; }}
                className="relative pb-24 last:pb-0"
              >
                <div
                  className={`grid gap-8 md:grid-cols-2 md:gap-16 ${
                    index % 2 === 0 ? "" : "md:direction-rtl"
                  }`}
                >
                  {/* Content side */}
                  <div
                    className={`${
                      index % 2 === 0
                        ? "md:pr-16 md:text-right"
                        : "md:col-start-2 md:pl-16"
                    }`}
                  >
                    <div
                      className="transition-all duration-700"
                      style={{
                        opacity: 0.3 + progress * 0.7,
                        transform: `translateY(${(1 - progress) * 20}px)`,
                      }}
                    >
                      <div
                        className={`mb-4 flex items-center gap-3 ${
                          index % 2 === 0 ? "md:justify-end" : ""
                        }`}
                      >
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500 ${
                            isActive
                              ? "bg-teal text-background"
                              : "bg-teal/10 text-teal"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                          Step {index + 1}
                        </span>
                      </div>

                      <h3 className="mb-2 text-3xl font-bold text-foreground lg:text-4xl">
                        {step.title}
                      </h3>
                      <p className="mb-4 text-sm font-medium text-teal">
                        {step.subtitle}
                      </p>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>

                  {/* Code snippet side */}
                  <div
                    className={`${
                      index % 2 === 0 ? "md:col-start-2 md:pl-16" : "md:pr-16"
                    }`}
                  >
                    <div
                      className="glass rounded-[24px] p-6 transition-all duration-700"
                      style={{
                        opacity: 0.2 + progress * 0.8,
                        transform: `translateX(${
                          index % 2 === 0 ? (1 - progress) * 30 : -(1 - progress) * 30
                        }px)`,
                      }}
                    >
                      <div className="mb-4 flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-500/60" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                        <div className="h-3 w-3 rounded-full bg-green-500/60" />
                        <span className="ml-2 text-xs text-muted-foreground">
                          teqfork-{step.id}.ts
                        </span>
                      </div>
                      <pre className="overflow-x-auto text-xs leading-relaxed">
                        <code>
                          {step.codeSnippet.split("\n").map((line, i) => (
                            <div
                              key={i}
                              className="transition-all duration-300"
                              style={{
                                opacity:
                                  progress > (i / step.codeSnippet.split("\n").length)
                                    ? 1
                                    : 0.3,
                                transform: `translateX(${
                                  progress > (i / step.codeSnippet.split("\n").length)
                                    ? 0
                                    : 10
                                }px)`,
                              }}
                            >
                              <span className="mr-4 select-none text-muted-foreground/40">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span
                                className={
                                  line.includes("//")
                                    ? "text-muted-foreground"
                                    : line.includes("'")
                                    ? "text-teal"
                                    : "text-foreground"
                                }
                              >
                                {line}
                              </span>
                            </div>
                          ))}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-0 -translate-x-1/2 transition-all duration-500 md:left-1/2 ${
                    isActive ? "scale-125" : "scale-100"
                  }`}
                >
                  <div
                    className={`flex h-4 w-4 items-center justify-center rounded-full border-2 transition-all duration-500 ${
                      progress > 0.3
                        ? "border-teal bg-teal"
                        : "border-border bg-background"
                    }`}
                  >
                    {progress > 0.3 && (
                      <div className="h-1.5 w-1.5 rounded-full bg-background" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
