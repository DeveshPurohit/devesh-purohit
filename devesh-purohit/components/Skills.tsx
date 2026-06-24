"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Database,
  Wrench,
  Sparkles,
  Code2,
  type LucideProps,
} from "lucide-react";
import { skillCategories } from "@/data/portfolio";

type IconComponent = React.FC<LucideProps>;

const iconMap: Record<string, IconComponent> = {
  Layout,
  Server,
  Database,
  Wrench,
  Sparkles,
  Code2,
};

const categoryGradients = [
  "from-violet-500 to-purple-600",
  "from-cyan-500 to-blue-500",
  "from-emerald-500 to-teal-500",
  "from-orange-500 to-amber-500",
  "from-rose-500 to-pink-500",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 relative">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-violet-900/8 rounded-full blur-[110px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400/80 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        {/* Skill categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="space-y-4"
        >
          {skillCategories.map((category, catIndex) => {
            const Icon = iconMap[category.icon] ?? Code2;
            const gradient =
              categoryGradients[catIndex % categoryGradients.length];

            return (
              <motion.div
                key={category.category}
                variants={rowVariants}
                className="group p-5 rounded-2xl border border-white/[0.05] bg-white/[0.02] hover:border-white/[0.09] hover:bg-white/[0.03] transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-8 h-8 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg shrink-0`}
                  >
                    <Icon size={14} className="text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-sm">
                    {category.category}
                  </h3>
                  <span className="text-[10px] text-white/20 ml-auto">
                    {category.skills.length} skills
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: catIndex * 0.04 + skillIndex * 0.035,
                        duration: 0.35,
                        ease: "easeOut",
                      }}
                      whileHover={{ scale: 1.06, y: -1 }}
                      className="px-3 py-1.5 text-[12px] rounded-full border border-white/[0.07] bg-white/[0.025] text-white/55 hover:text-white/80 hover:border-white/[0.15] hover:bg-white/[0.05] transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
