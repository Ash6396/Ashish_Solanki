import React from "react";
import {
  Calendar,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";

const Internships: React.FC = () => {
  const internships = [
    {
      company: "GDG On Campus, Sharda University",
      role: "Events & Operations Member",
      duration: "Dec 2024 - Present",
      location: "India",
      type: "Community Leader",
      companyUrl: "",
      description:
        "Contributing to the developer community by supporting workshops and tech sessions and helping drive student engagement.",
      achievements: [
        "Coordinated logistics for 5+ major technical workshops.",
        "Facilitated networking for 200+ student developers.",
        "Collaborated with industry speakers for campus sessions.",
      ],
      technologies: ["Event Management", "Public Speaking", "Community Building"],
    },
    {
      company: "HackAgra Chapter 1",
      role: "Hackathon Organizer",
      duration: "2025",
      location: "Agra, India",
      type: "Leadership",
      companyUrl: "",
      description:
        "Organizer for a large hackathon event, handling logistics, participant support, and mentor coordination.",
      achievements: [
        "Oversaw operations for 50+ participating teams.",
        "Structured judging criteria and mentor feedback loops.",
        "Ensured zero downtime during the 24-hour hackathon period.",
      ],
      technologies: ["Logistics", "Team Leadership", "Crisis Management"],
    },
  ];

  return (
    <section id="internships" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent mb-4 font-heading">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Community experience, leadership, and event operations.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-500 before:to-transparent">
          {internships.map((exp, index) => {
            return (
              <motion.div
                key={index}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-500 bg-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse-slow"></div>
                </div>

                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-xl border border-white/10 shadow-lg transition-all hover:scale-[1.02] hover:shadow-blue-500/10 hover:border-blue-500/30">
                  <div className="flex flex-col sm:flex-row justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-white text-lg">{exp.role}</h3>
                      <div className="text-blue-400 font-medium">{exp.company}</div>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-gray-500 mt-2 sm:mt-0">
                      <Calendar size={14} />
                      {exp.duration}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                  </div>

                  <div className="space-y-2 mb-4">
                    {exp.achievements.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <Award size={14} className="text-emerald-400 mt-1 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-white/5 border border-white/5 rounded text-xs text-gray-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Internships;
