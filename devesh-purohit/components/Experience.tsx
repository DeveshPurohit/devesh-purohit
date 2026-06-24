"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const typeBadgeStyles: Record<string, string> = {
  "Full-time":
    "border-emerald-500/25 text-emerald-400 bg-emerald-500/[0.06]",
  Freelance: "border-amber-500/25 text-amber-400 bg-amber-500/[0.06]",
  Contract: "border-sky-500/25 text-sky-400 bg-sky-500/[0.06]",
};

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-violet-400/80 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Career Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Work{" "}
            <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="relative"
        >
          {/* Vertical line */}
          <div className="absolute left-[6px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-violet-500/60 via-cyan-500/30 to-transparent rounded-full" />

          <div className="space-y-8 pl-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative group"
              >
                {/* Dot on timeline */}
                <div className="absolute -left-[40px] top-6 flex items-center justify-center">
                  <motion.div
                    whileInView={{ scale: [0, 1.3, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.14 + 0.3, duration: 0.4 }}
                    className="w-3.5 h-3.5 rounded-full border-2 border-violet-500 bg-black group-hover:bg-violet-500 group-hover:shadow-[0_0_12px_rgba(124,58,237,0.6)] transition-all duration-400"
                  />
                </div>

                {/* Card */}
                <div className="relative p-6 rounded-2xl border border-white/[0.05] bg-white/[0.02] group-hover:border-violet-500/[0.15] group-hover:bg-white/[0.035] transition-all duration-500 card-glow overflow-hidden">
                  {/* Hover gradient wash */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600/[0.04] via-transparent to-cyan-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <Briefcase
                            size={13}
                            className="text-violet-400 shrink-0"
                          />
                          <h3 className="text-white font-semibold text-base">
                            {exp.role}
                          </h3>
                        </div>
                        <p className="text-violet-300/80 text-sm font-medium pl-5">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1 shrink-0 pl-5 sm:pl-0">
                        <span className="inline-flex items-center gap-1.5 text-[11px] text-white/35">
                          <Calendar size={10} />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[11px] text-white/25">
                          <MapPin size={10} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-[13px] text-white/45 leading-relaxed"
                        >
                          <span className="w-1 h-1 rounded-full bg-cyan-500/70 mt-[7px] shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <span
                      className={`inline-block text-[11px] px-2.5 py-1 rounded-full border ${
                        typeBadgeStyles[exp.type] ??
                        "border-white/10 text-white/40 bg-white/[0.04]"
                      }`}
                    >
                      {exp.type}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
