"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { useState, useRef } from "react";

const team = [
  {
    image: "/founder.jpg",
    name: "Hammad Anwar",
    title: "Founder & CEO",
    linkedin: "https://www.linkedin.com/in/hammad-anwar-416220319/",
  },
  {
    image: "/faizan.jpeg",
    name: "Faizan Jameel",
    title: "Co-Founder & Head of Growth",
    linkedin: null,
  },
  {
    image: "/saram.jpeg",
    name: "Saram Chatha",
    title: "Head of Client Operations",
    linkedin: null,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden:   { opacity: 0, y: 30 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const MAX_TILT = 8;

function MemberCard({ member }: { member: typeof team[0] }) {
  const [imgError,   setImgError]   = useState(false);
  const [isHovered,  setIsHovered]  = useState(false);
  const [tilt,       setTilt]       = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    // Normalize cursor to -1..1 relative to card center
    const dx = (e.clientX - (rect.left + rect.width  / 2)) / (rect.width  / 2);
    const dy = (e.clientY - (rect.top  + rect.height / 2)) / (rect.height / 2);
    // rotateY: negative dx → right side comes toward viewer
    // rotateX: positive dy → bottom comes toward viewer
    setTilt({ x: -dx * MAX_TILT, y: dy * MAX_TILT });
  };

  const onMouseEnter = () => setIsHovered(true);

  const onMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div variants={cardVariants}>
      {/* 3D tilt wrapper */}
      <div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="glass rounded-2xl overflow-hidden"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transition: isHovered ? "transform 0.1s ease" : "transform 0.4s ease",
          willChange: "transform",
        }}
      >
        {/* ── Photo area ────────────────────────────────────────────── */}
        <div className="relative h-64 overflow-hidden">
          {/* Image — scales up on hover */}
          <div
            className="w-full h-full"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.4s ease",
            }}
          >
            {!imgError ? (
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                style={{ objectPosition: "50% 20%" }}
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-full bg-[#00F5FF]/20 flex items-center justify-center text-[#00F5FF] font-bold text-5xl">
                {member.name[0]}
              </div>
            )}
          </div>

          {/* Teal gradient overlay — fades in on hover */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#00F5FF20] to-transparent pointer-events-none"
            style={{ opacity: isHovered ? 1 : 0, transition: "opacity 0.35s ease" }}
          />
        </div>

        {/* ── Text content ──────────────────────────────────────────── */}
        <div className="p-6 flex flex-col items-center text-center gap-3 border-t border-white/5">
          <div>
            <h3 className="text-white font-semibold text-lg leading-tight">
              {member.name}
            </h3>
            <p className="text-[#00F5FF] text-sm mt-1">{member.title}</p>
          </div>

          {/* LinkedIn — bounce on hover, only shown when provided */}
          {member.linkedin && (
            <motion.a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-500 hover:text-[#00F5FF] transition-colors duration-200 text-xs"
              whileHover={{ y: [0, -5, 0, -3, 0] }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            >
              <Linkedin size={14} />
              LinkedIn
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-[#050505] section-reveal"
      data-reveal="true"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[rgba(0,245,255,0.08)] border border-[rgba(0,245,255,0.2)] text-[#00F5FF] text-xs font-semibold tracking-widest px-4 py-2 rounded-full mb-4">
            THE TEAM
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            The People Behind Teqfork
          </h2>
        </motion.div>

        {/* Staggered card grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {team.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </motion.div>

        {/* Supporting tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center text-gray-500 italic mt-10 text-sm"
        >
          Backed by a team of 6 engineers and strategists across AI, cloud, and full-stack development.
        </motion.p>

      </div>
    </section>
  );
}

export default AboutSection;
