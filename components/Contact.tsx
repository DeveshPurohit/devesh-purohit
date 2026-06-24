"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { personalInfo } from "@/data/portfolio";
import { Mail, Phone, ArrowUpRight, Sparkles, Send, CheckCircle } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

interface ContactLink {
  icon: React.FC<{ size?: number; className?: string }>;
  label: string;
  value: string;
  href: string;
  description: string;
  external?: boolean;
}

const contactLinks: ContactLink[] = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    description: "Shoot me an email anytime",
  },
  {
    icon: Phone,
    label: "Phone",
    value: `+91 ${personalInfo.phone}`,
    href: `tel:+91${personalInfo.phone}`,
    description: "Mon–Fri, 9am to 6pm IST",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/devesh-purohit-67266810a",
    href: personalInfo.linkedin,
    description: "Connect with me professionally",
    external: true,
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "github.com/DeveshPurohit",
    href: personalInfo.github,
    description: "Browse my open-source work",
    external: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const inputClass =
  "w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.05] transition-all duration-300";

export default function Contact() {
  const [state, handleSubmit] = useForm("meqbwpyd");
  const [formValues, setFormValues] = useState({ Name: "", email: "", message: "" });
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      setFormValues({ Name: "", email: "", message: "" });
      const t = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(t);
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-violet-900/10 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-violet-400/80 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-white/40 max-w-sm mx-auto text-sm leading-relaxed">
            Open to new opportunities, interesting projects, or just a good
            conversation.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* LEFT — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="space-y-5"
          >
            {/* CTA banner */}
            <div className="relative p-6 rounded-2xl border border-white/6 bg-white/2 overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-violet-600/8 via-transparent to-cyan-500/4" />
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-violet-500/50 to-transparent" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-violet-500/25 bg-violet-500/8 text-violet-300 text-[11px]">
                    <Sparkles size={10} />
                    Open to work
                  </span>
                </div>
                <p className="text-white font-bold text-xl mb-1">
                  Ready to build something amazing?
                </p>
                <p className="text-white/40 text-sm">
                  Whether it&apos;s a startup, freelance project, or full-time role — let&apos;s talk.
                </p>
              </div>
            </div>

            {/* Contact links */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="space-y-2.5"
            >
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    variants={itemVariants}
                    className="group flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/2 hover:border-violet-500/18 hover:bg-white/[0.035] transition-all duration-300"
                    whileHover={{ x: 3 }}
                  >
                    <div className="w-9 h-9 rounded-xl bg-violet-500/8 border border-violet-500/18 flex items-center justify-center text-violet-400 group-hover:bg-violet-500/15 group-hover:text-violet-300 transition-all duration-300 shrink-0">
                      <Icon size={15} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-white/30 text-[10px] uppercase tracking-wider mb-0.5">
                        {link.label}
                      </p>
                      <p className="text-white/75 text-xs font-medium truncate group-hover:text-white transition-colors">
                        {link.value}
                      </p>
                      <p className="text-white/20 text-[10px]">{link.description}</p>
                    </div>
                    <ArrowUpRight
                      size={12}
                      className="text-white/15 group-hover:text-white/45 transition-colors shrink-0"
                    />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* RIGHT — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="relative p-6 sm:p-8 rounded-2xl border border-white/6 bg-white/2 overflow-hidden"
          >
            {/* Decorative top line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-violet-500/40 to-transparent" />

            <div className="relative z-10">
              <p className="text-white font-semibold text-base mb-1">Send a message</p>
              <p className="text-white/35 text-xs mb-6">I&apos;ll get back to you within 24 hours.</p>

              <AnimatePresence mode="wait">
                {showSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center gap-3 py-16 text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center">
                      <CheckCircle size={26} className="text-emerald-400" />
                    </div>
                    <p className="text-white font-semibold text-base">Message sent!</p>
                    <p className="text-white/40 text-sm max-w-xs">
                      Thanks for reaching out. I&apos;ll reply to{" "}
                      <span className="text-violet-300">{formValues.email || "your email"}</span> soon.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {/* Name + Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] text-white/35 mb-1.5 tracking-wide uppercase">
                          Name
                        </label>
                        <input
                          id="Name"
                          name="Name"
                          type="text"
                          placeholder="Devesh Purohit"
                          required
                          className={inputClass}
                          value={formValues.Name}
                          onChange={(e) =>
                            setFormValues({ ...formValues, Name: e.target.value })
                          }
                        />
                        <ValidationError prefix="Name" field="Name" errors={state.errors} className="text-rose-400 text-[11px] mt-1" />
                      </div>
                      <div>
                        <label className="block text-[11px] text-white/35 mb-1.5 tracking-wide uppercase">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          required
                          className={inputClass}
                          value={formValues.email}
                          onChange={(e) =>
                            setFormValues({ ...formValues, email: e.target.value })
                          }
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-rose-400 text-[11px] mt-1" />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[11px] text-white/35 mb-1.5 tracking-wide uppercase">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Hi Devesh, I'd love to work with you on..."
                        required
                        className={`${inputClass} resize-none`}
                        value={formValues.message}
                        onChange={(e) =>
                          setFormValues({ ...formValues, message: e.target.value })
                        }
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-rose-400 text-[11px] mt-1" />
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-violet-600 to-cyan-500 text-white text-sm font-semibold shadow-lg shadow-violet-600/20 hover:shadow-violet-600/35 transition-shadow duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={state.submitting ? {} : { scale: 1.02, y: -1 }}
                      whileTap={state.submitting ? {} : { scale: 0.98 }}
                    >
                      {state.submitting ? (
                        <>
                          <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-white/20 text-xs">
            Designed &amp; built by{" "}
            <span className="gradient-text font-medium">Devesh Purohit</span>
            {" · "}
            {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
