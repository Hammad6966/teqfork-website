"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Shield } from "lucide-react";

const steps = [
  {
    number: "01",
    id: "build",
    title: "Build",
    subtitle: "Architecture & Development",
    description:
      "We craft robust, scalable systems from the ground up. Every line of code is written with intention, following best practices and industry standards.",
    icon: Code2,
    delay: 0,
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
    number: "02",
    id: "scale",
    title: "Scale",
    subtitle: "Infrastructure & Growth",
    description:
      "From startup to enterprise, we build systems that grow with you. Auto-scaling, load balancing, and distributed architectures are our specialty.",
    icon: Layers,
    delay: 0.2,
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
    number: "03",
    id: "secure",
    title: "Secure",
    subtitle: "Protection & Compliance",
    description:
      "Security isn't an afterthought — it's built into our DNA. End-to-end encryption, SOC2 compliance, and regular security audits keep your data safe.",
    icon: Shield,
    delay: 0.4,
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

function CodeBlock({ snippet, id }: { snippet: string; id: string }) {
  const lines = snippet.split("\n");
  return (
    <div className="glass rounded-xl p-4 mt-5 overflow-hidden">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <span className="ml-2 text-[10px] text-gray-600 font-mono">teqfork-{id}.ts</span>
      </div>

      {/* Use a div instead of pre>code to avoid invalid block-in-inline nesting */}
      <div className="overflow-x-auto font-mono">
        {lines.map((line, i) => {
          const isLast    = i === lines.length - 1;
          const isComment = line.trim().startsWith("//");
          const hasString = line.includes("'");

          return (
            <div key={i} className="flex items-center min-w-0">
              {/* Line number */}
              <span className="mr-3 w-5 text-right text-[10px] leading-5 text-gray-700 select-none flex-shrink-0">
                {i + 1}
              </span>

              {/* Code */}
              <span
                className={`text-[10px] leading-5 whitespace-pre ${
                  isComment
                    ? "text-gray-600"
                    : hasString
                    ? "text-[#00F5FF]"
                    : "text-gray-300"
                }`}
              >
                {line}
              </span>

              {/* Blinking cursor on last line only */}
              {isLast && (
                <span className="cursor-blink ml-0.5 text-[#00F5FF] text-[10px] leading-5 select-none">
                  ▋
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative py-24 md:py-32 bg-[#050505] section-reveal"
      data-reveal="true"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#00F5FF]" />
            <span className="text-xs font-medium uppercase tracking-widest text-[#00F5FF]">
              Our Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            <span className="text-gradient">How We Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl">
            A methodical approach to building AI systems that stand the test of time.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Animated vertical connecting line */}
          <motion.div
            className="absolute w-px"
            style={{
              left: "23px",
              top: "24px",
              bottom: 0,
              background: "linear-gradient(to bottom, #00F5FF 0%, rgba(0,245,255,0.3) 60%, transparent 100%)",
              transformOrigin: "top",
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />

          {/* Steps */}
          <div className="flex flex-col gap-16 md:gap-20">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="flex gap-8 md:gap-12 items-start">

                  {/* Left col: numbered circle */}
                  <div className="flex-shrink-0 relative z-10">
                    <div
                      className="w-12 h-12 rounded-full border border-[#00F5FF] bg-[#050505] flex items-center justify-center animate-pulse-ring"
                      style={{ animationDelay: `${step.delay}s` }}
                    >
                      <span className="text-[#00F5FF] text-sm font-bold font-mono">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Right col: card slides in from right */}
                  <motion.div
                    className="flex-1 min-w-0 pb-2"
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.6,
                      delay: step.delay,
                      ease: "easeInOut",
                    }}
                  >
                    {/* Icon + title */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-[rgba(0,245,255,0.08)] border border-[rgba(0,245,255,0.15)] flex items-center justify-center flex-shrink-0">
                        <Icon size={16} className="text-[#00F5FF]" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-2xl md:text-3xl leading-none">
                          {step.title}
                        </h3>
                        <p className="text-[#00F5FF] text-xs font-medium tracking-wide mt-0.5">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                      {step.description}
                    </p>

                    {/* Code block */}
                    <CodeBlock snippet={step.codeSnippet} id={step.id} />
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
