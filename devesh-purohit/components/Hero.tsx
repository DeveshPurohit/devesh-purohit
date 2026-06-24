"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const socialLinks = [
  { icon: GitHubIcon, href: "https://github.com/devesh-purohit", label: "GitHub" },
  {
    icon: LinkedInIcon,
    href: "https://linkedin.com/in/devesh-purohit",
    label: "LinkedIn",
  },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient glow orbs — contained so they never cause horizontal overflow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[-100px] w-[400px] h-[400px] bg-violet-600 rounded-full blur-[130px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.06, 0.09, 0.06],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[10%] right-[-80px] w-[300px] h-[300px] bg-cyan-500 rounded-full blur-[110px]"
        />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-10 text-center"
      >
        {/* Available badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-7">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-[11px] font-medium tracking-wide whitespace-nowrap">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Available for new opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.div variants={itemVariants} className="mb-4">
          <p className="text-white/60 text-sm sm:text-base font-medium tracking-[0.22em] uppercase mb-2">
            Hi, I&apos;m
          </p>
          <h1 className="text-[3rem] xs:text-5xl sm:text-6xl md:text-[5.5rem] lg:text-[6.5rem] font-bold tracking-tight leading-[1.08]">
            <span className="gradient-text block">Devesh</span>
            <span className="text-white block">Purohit</span>
          </h1>
        </motion.div>

        {/* Role badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-5">
          <p className="text-white/65 text-xs sm:text-sm md:text-base font-medium tracking-[0.16em] uppercase text-center leading-relaxed">
            {personalInfo.role}
          </p>
        </motion.div>

        {/* Summary */}
        <motion.p
          variants={itemVariants}
          className="text-white/45 text-xs sm:text-sm md:text-base max-w-md mx-auto leading-relaxed mb-8 px-1"
        >
          {personalInfo.summary}
        </motion.p>

        {/* Metrics */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-8 max-w-sm sm:max-w-xl mx-auto"
        >
          {personalInfo.metrics.map((metric) => (
            <motion.div
              key={metric.label}
              whileHover={{ scale: 1.04, y: -2 }}
              className="p-4 rounded-2xl border border-white/6 bg-white/2.5 backdrop-blur-sm text-center cursor-default"
            >
              <p className="text-xl md:text-2xl font-bold gradient-text">
                {metric.value}
              </p>
              <p className="text-[10px] text-white/35 mt-1 leading-tight">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-row flex-wrap items-center justify-center gap-3 mb-8"
        >
          <motion.a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-violet-600 to-cyan-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-violet-600/20 hover:shadow-violet-600/40 transition-shadow duration-300 whitespace-nowrap"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Sparkles size={13} />
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-white/60 text-xs sm:text-sm font-medium hover:text-white hover:border-white/20 hover:bg-white/4 transition-all duration-300 whitespace-nowrap"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail size={13} />
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full border border-white/8 flex items-center justify-center text-white/35 hover:text-white hover:border-white/25 hover:bg-white/4 transition-all duration-300"
              whileHover={{ scale: 1.12, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={15} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
