"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import type { Project } from "@/data/portfolio";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative group h-full"
    >
      <motion.div
        className="relative flex flex-col h-full p-6 rounded-2xl border border-white/[0.05] bg-white/[0.02] overflow-hidden card-glow"
        whileHover={{
          scale: 1.02,
          y: -5,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
      >
        {/* Gradient background wash on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-[0.055] transition-opacity duration-500`}
        />
        {/* Top gradient accent line */}
        <div
          className={`absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-70 transition-opacity duration-500`}
        />
        {/* Subtle corner glare */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

        <div className="relative z-10 flex flex-col h-full">
          {/* Header row */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <span
                className={`inline-block text-[10px] font-semibold tracking-widest uppercase text-white/25 mb-2`}
              >
                Project {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-white font-bold text-xl leading-tight">
                {project.title}
              </h3>
            </div>
            <motion.div
              animate={{ rotate: hovered ? 45 : 0, opacity: hovered ? 0.7 : 0.2 }}
              transition={{ duration: 0.25 }}
              className="text-white mt-1 shrink-0"
            >
              <ArrowUpRight size={18} />
            </motion.div>
          </div>

          {/* Description */}
          <p className="text-white/40 text-[13px] leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          {/* Highlights */}
          <ul className="space-y-1.5 mb-5">
            {project.highlights.map((h, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-[11px] text-white/30"
              >
                <span
                  className={`w-1 h-1 rounded-full bg-gradient-to-r ${project.gradient} shrink-0`}
                />
                {h}
              </li>
            ))}
          </ul>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-white/45"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 mt-auto pt-1 border-t border-white/[0.05]">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[11px] text-white/35 hover:text-white transition-colors duration-200"
                whileHover={{ x: 1 }}
                onClick={(e) => e.stopPropagation()}
              >
                <GitHubIcon size={12} />
                GitHub
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[11px] text-white/35 hover:text-white transition-colors duration-200"
                whileHover={{ x: 1 }}
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={12} />
                Live Demo
              </motion.a>
            )}
            {!project.github && !project.live && (
              <span className="text-[11px] text-white/20 italic">
                Private repository
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 relative">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400/80 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-white/35 mt-4 max-w-md mx-auto text-sm leading-relaxed">
            A selection of production-ready applications I&apos;ve shipped across
            diverse domains.
          </p>
        </motion.div>

        {/* Project grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
