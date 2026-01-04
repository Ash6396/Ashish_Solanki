import React, { useRef } from "react";
import {
  Github,
  Code,
  Shield,
  Sparkles,
  ExternalLink
} from "lucide-react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

// Images
import chat from "./chatapplication.png";
import rbac from "./rbac-configurator.svg";
import trustify from "./trustify.svg";
import animeSite from "./anime-website.svg";
import foodOrdering from "./food-ordering.svg";

const ROTATION_RANGE = 20;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE / width - HALF_ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE / height - HALF_ROTATION_RANGE;

    const rX = (mouseY * -1);
    const rY = mouseX;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const allProjectsUrl = "https://github.com/Ash6396?tab=repositories";

  const projects = [
    {
      title: "Trustify",
      description:
        "Crowdfunding UI focused on trust and transparency: verify campaigns, donate securely, and track progress clearly.",
      techStack: ["React.js", "Tailwind CSS"],
      image: trustify,
      githubUrl: "",
      liveUrl: "https://trustify-orpin.vercel.app",
      category: "Crowdfunding",
      icon: Shield,
    },
    {
      title: "RBAC Configurator Tool",
      description:
        "Role-Based Access Control dashboard with authentication and permission-based access to keep users and roles organized.",
      techStack: ["Next.js", "TypeScript", "Supabase"],
      image: rbac,
      githubUrl: "",
      liveUrl: "",
      category: "Full Stack",
      icon: Code,
    },
    {
      title: "Anime Streaming Website (UI)",
      description:
        "Responsive streaming-style UI with search and browsing screens, built with reusable components and a clean layout.",
      techStack: ["React.js", "Tailwind CSS"],
      image: animeSite,
      githubUrl: "",
      liveUrl: "https://ani-xind.vercel.app/",
      category: "Frontend",
      icon: Sparkles,
    },
    {
      title: "Food Ordering Website",
      description:
        "Responsive food ordering UI with restaurant listings, menu screens, cart flow, and checkout-ready layouts.",
      techStack: ["React.js", "Tailwind CSS"],
      image: foodOrdering,
      githubUrl: "",
      liveUrl: "https://food-order-kappa-hazel.vercel.app",
      category: "Frontend",
      icon: Code,
    },
    {
      title: "AI Virtual Assistant",
      description:
        "Conversational assistant UI with message threads and a clean chat experience (API-ready).",
      techStack: ["React.js", "TypeScript"],
      image: chat,
      githubUrl: "",
      liveUrl: "",
      category: "AI",
      icon: Sparkles,
    },
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Work</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            A selection of projects that demonstrate my passion for building clean, user-centric web applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TiltCard className="h-full">
                  <div className="glass-card h-full rounded-2xl overflow-hidden group flex flex-col">
                    {/* Image Container */}
                    <div className="relative h-56 overflow-hidden">
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/60 transition-all duration-500 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-sm">
                        <a
                          href={project.liveUrl || project.githubUrl || "#"}
                          target="_blank"
                          rel="noreferrer"
                          className="px-6 py-3 bg-white text-black rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-all shadow-xl hover:scale-105"
                        >
                          View Project
                        </a>
                      </div>

                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute top-4 left-4 z-20 p-2.5 bg-black/50 backdrop-blur-md rounded-xl border border-white/10">
                        <Icon size={18} className="text-blue-400" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col pt-8">
                      {/* Floating Category Badge */}
                      <div className="absolute top-[13.5rem] right-6 px-4 py-1.5 bg-blue-600 shadow-lg shadow-blue-600/20 text-white text-xs font-bold uppercase tracking-wider rounded-full transform group-hover:-translate-y-2 transition-transform">
                        {project.category}
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white/5 border border-white/5 text-gray-300 text-xs rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                        <a
                          href={project.liveUrl}
                          className={`flex items-center gap-2 text-sm font-medium transition-colors ${project.liveUrl ? "text-white hover:text-blue-400" : "text-gray-600 cursor-not-allowed"}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span>Live Demo</span>
                          <ExternalLink size={14} />
                        </a>
                        <a
                          href={project.githubUrl}
                          className={`flex items-center gap-2 text-sm font-medium transition-colors ${project.githubUrl ? "text-gray-400 hover:text-white" : "text-gray-700 cursor-not-allowed"}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Github size={16} />
                          <span>Code</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <motion.a
            href={allProjectsUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="inline-flex items-center gap-3 rounded-full bg-blue-500 px-10 py-4 text-white font-semibold shadow-lg shadow-blue-500/20 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:ring-offset-0"
          >
            <Github size={20} />
            <span>View All Projects</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
