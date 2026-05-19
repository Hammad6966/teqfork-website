"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { useState } from "react";

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

function MemberCard({ member, index }: { member: typeof team[0]; index: number }) {
  const [imgError, setImgError] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="glass glass-hover border-glow rounded-2xl p-6 flex flex-col items-center text-center gap-4 group"
    >
      <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[rgba(0,245,255,0.2)] group-hover:border-[rgba(0,245,255,0.5)] transition-colors duration-300 group-hover:scale-105 transform">
        {!imgError ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
            style={{ objectPosition: "50% 30%" }}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-[#00F5FF]/20 flex items-center justify-center text-[#00F5FF] font-bold text-2xl">
            {member.name[0]}
          </div>
        )}
      </div>
      <div>
        <h3 className="text-white font-semibold text-lg">{member.name}</h3>
        <p className="text-[#00F5FF] text-sm mt-1">{member.title}</p>
      </div>
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-gray-500 hover:text-[#00F5FF] transition-colors text-xs"
          data-hover="true"
        >
          <Linkedin size={14} />
          LinkedIn
        </a>
      )}
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#050505]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
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
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The People Behind Teqfork</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
          {team.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center text-gray-500 italic mt-10 text-sm"
        >
          Backed by a team of 6 engineers and strategists across AI, cloud, and full-stack development.
        </motion.p>
      </div>
    </section>
  );
}

export default AboutSection;
