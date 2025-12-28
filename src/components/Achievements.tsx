import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink, MapPin, Trophy, Star, Award } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

type AchievementItem =
  | {
    kind: "cert";
    title: string;
    subtitle: string;
    date?: string;
    summary: string;
    link?: string;
  }
  | {
    kind: "hack";
    title: string;
    subtitle: string;
    date: string;
    role: string;
    summary: string;
  };

const Achievements: React.FC = () => {
  const items: AchievementItem[] = [
    // Hackathons
    {
      kind: "hack",
      title: "HackAgra Chapter 1",
      subtitle: "National Level",
      date: "2025",
      role: "Organizer",
      summary: "Led the organization of a major hackathon event. Coordinated mentors, teams, and judging flow for a seamless experience.",
    },
    {
      kind: "hack",
      title: "AxisHackSprint",
      subtitle: "Kanpur, India",
      date: "Dec 2025",
      role: "Grand Finale Qualifier",
      summary: "Qualified for the Grand Finale at national level. Built a full-stack solution under tight 24-hour timelines.",
    },


    // Certifications
    {
      kind: "cert",
      title: "AWS Solutions Architecture",
      subtitle: "Forage Job Simulation",
      date: "2025",
      summary: "Practical experience in designing scalable, reliable, and cost-efficient cloud systems on AWS.",
    },
    {
      kind: "cert",
      title: "Prompt Engineering 101",
      subtitle: "Google Student Ambassador Program",
      date: "2025",
      summary: "Mastered the art of crafting effective AI prompts, iterative refinement, and large language model evaluation.",
    },
    {
      kind: "cert",
      title: "Full Stack Web Development",
      subtitle: "Career Compiler",
      date: "2024",
      summary: "Comprehensive bootcamp covering modern web development: React, Node.js, Databases, and Deployment pipelines.",
    },
    {
      kind: "cert",
      title: "React + TypeScript",
      subtitle: "Advanced Concepts",
      date: "2024",
      summary: "Deep dive into strong typing, component patterns, hooks, and performance optimization in React applications.",
    },
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium mb-6">
            <Star size={14} className="fill-purple-400" />
            <span>Excellence & Impact</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">
            Honors & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Achievements</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            A track record of continuous learning, community leadership, and competitive programming success.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -5 }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

              <div className="relative h-full glass-card bg-[#0f1016]/90 border border-white/5 p-8 rounded-3xl overflow-hidden flex flex-col">
                {/* Glowing Effect Component */}
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`
                            p-3 rounded-2xl border 
                            ${item.kind === 'hack'
                        ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                        : 'bg-blue-500/10 border-blue-500/20 text-blue-400'}
                        `}>
                      {item.kind === 'hack'
                        ? <Trophy size={24} />
                        : <Award size={24} />
                      }
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-gray-400 border border-white/5">
                      {item.date}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-4">
                      {item.kind === 'hack' && <MapPin size={14} />}
                      {item.kind === 'cert' && <BadgeCheck size={14} />}
                      {item.subtitle}
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className={`text-sm font-semibold ${item.kind === 'hack' ? 'text-purple-400' : 'text-blue-400'}`}>
                      {item.kind === 'hack' ? item.role : 'Certification'}
                    </span>

                    {item.kind === 'cert' && (
                      <div className="p-2 rounded-full bg-white/5 text-gray-400 group-hover:bg-white/10 group-hover:text-white transition-colors cursor-pointer">
                        <ExternalLink size={16} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
