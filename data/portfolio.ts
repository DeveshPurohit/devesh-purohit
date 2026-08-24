export interface PersonalInfo {
  name: string;
  role: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
  yearsOfExperience: number;
  metrics: { value: string; label: string }[];
}

export interface Experience {
  role: string;
  company: string;
  type: "Full-time" | "Freelance" | "Contract";
  period: string;
  location: string;
  points: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  highlights: string[];
  gradient: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Devesh Purohit",
  role: "Full Stack / Frontend Software Engineer",
  email: "purohitdev08@gmail.com",
  phone: "8209370677",
  linkedin: "https://www.linkedin.com/in/devesh-purohit-67266810a",
  github: "https://github.com/DeveshPurohit",
  summary:
    "Results-driven Software Engineer with 3+ years building scalable web applications using Next.js, React.js, TypeScript, and Node.js. Proven track record of improving page load speeds by 30%, increasing user engagement by 100%, and delivering production-ready features.",
  yearsOfExperience: 3,
  metrics: [
    { value: "3+", label: "Years Experience" },
    { value: "30%", label: "Faster Load Times" },
    { value: "100%", label: "User Engagement" },
    { value: "95+", label: "Lighthouse Score" },
  ],
};

export const experiences: Experience[] = [
  {
    role: "Frontend Developer",
    company: "CodersBrain",
    type: "Full-time",
    period: "Mar 2026 – Present",
    location: "Remote",
    points: [
      "Developed and maintained responsive, high-performance frontend interfaces using Next.js, TypeScript, and Tailwind CSS",
      "Collaborated with cross-functional teams to deliver new product features, improving user experience and engagement",
      "Conducted code reviews and enforced best practices for accessibility, performance, and maintainability",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Taskar",
    type: "Full-time",
    period: "Nov 2024 – Feb 2026",
    location: "On-site",
    points: [
      "Developed responsive UIs using Next.js 15, TypeScript, and Tailwind CSS, serving 10K+ monthly active users",
      "Implemented SSR and caching strategies, reducing page load time by 30% and improving Core Web Vitals scores",
      "Integrated RESTful APIs and secure payment gateways, improving conversion rates by 15%",
      "Built personalized recommendation engine using React hooks and Redux, increasing user engagement by 40%",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "buzzproof.io",
    type: "Full-time",
    period: "May 2023 – Oct 2024",
    location: "Remote",
    points: [
      "Built scalable web applications using Next.js, React.js, Strapi CMS, and PostgreSQL handling 5K+ concurrent users",
      "Reduced application loading time by 25% through code splitting, lazy loading, and performance optimization",
      "Increased average user session time from 30 to 90 seconds (100% improvement) with engaging UI features",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Sky Store",
    description:
      "Asset management system with secure authentication, drag-and-drop uploads, and real-time previews — achieving a 95+ Lighthouse score.",
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Appwrite"],
    github: "https://github.com/DeveshPurohit/sky-store",
    live: "https://skystore-gamma.vercel.app",
    highlights: [
      "95+ Lighthouse performance score",
      "Secure auth with drag-and-drop uploads",
      "Real-time preview with lazy loading",
    ],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Xoom",
    description:
      "Real-time video conferencing platform supporting 100+ participants with screen sharing, chat, and meeting recording.",
    tech: ["Next.js 14", "Clerk", "Stream SDK", "WebRTC", "TypeScript"],
    github: "https://github.com/DeveshPurohit/video_calling_app",
    live: "https://xoom-nine.vercel.app/",
    highlights: [
      "100+ concurrent participants support",
      "Screen sharing, chat, and recording",
      "Meeting scheduling with responsive design",
    ],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "OQART",
    description:
      "Full-featured e-commerce platform with a personalized recommendation engine, secure payment gateways, and role-based access control.",
    tech: [
      "Next.js 16",
      "React.js 19",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "React Query",
    ],
    live: "https://oqart.com",
    highlights: [
      "Full-featured e-commerce storefront",
      "Personalized recommendation engine",
      "Secure Stripe payment integration",
    ],
    gradient: "from-rose-500 to-pink-600",
  },
  {
    title: "Febstone",
    description:
      "Startup consulting and brand-building platform with a modern, high-performance frontend interface designed for conversion.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    live: "https://febstone.com",
    highlights: [
      "Startup consulting & brand building",
      "High-performance responsive interface",
      "Modern UI with smooth animations",
    ],
    gradient: "from-orange-500 to-amber-500",
  },
  {
    title: "Medinos",
    description:
      "Quick-commerce medicine delivery app with real-time inventory, seamless checkout, and an intuitive user experience built for speed.",
    tech: [
      "Next.js 15",
      "React.js 18",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "React Query",
    ],
    highlights: [
      "Quick-commerce medicine delivery platform",
      "Real-time inventory management system",
      "Seamless checkout and payment flow",
    ],
    gradient: "from-violet-500 to-indigo-600",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "Layout",
    skills: [
      "Next.js",
      "React.js",
      "Redux",
      "TanStack Query",
      "Tailwind CSS",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Framer Motion",
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    skills: ["Node.js", "Express.js", "Nest.js", "RESTful APIs", "Strapi CMS"],
  },
  {
    category: "Databases",
    icon: "Database",
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    category: "Tools & DevOps",
    icon: "Wrench",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Cursor AI",
      "Agile / Scrum",
      "AI-Driven Development",
    ],
  },
  {
    category: "Core Competencies",
    icon: "Sparkles",
    skills: [
      "Performance Optimization",
      "Core Web Vitals",
      "Accessibility (a11y)",
      "SSR / SSG",
      "Cross-browser Testing",
      "API Integration",
    ],
  },
];
