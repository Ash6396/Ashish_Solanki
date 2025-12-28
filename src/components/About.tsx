import React from "react";
import {
  Code,
  Brain,
  Database,
  Laptop,
} from "lucide-react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const skills = [
    { name: "Frontend Development", icon: Code, level: 92, color: "from-blue-400 to-blue-600" },
    { name: "JavaScript / TypeScript", icon: Brain, level: 90, color: "from-indigo-400 to-indigo-600" },
    { name: "UI Engineering", icon: Database, level: 86, color: "from-purple-400 to-purple-600" },
    { name: "Backend Integration", icon: Laptop, level: 82, color: "from-emerald-400 to-emerald-600" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent mb-4 font-heading">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I build clean, modern web apps with strong UI/UX and maintainable code.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl border border-glass-border relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Ashish Solanki
                </h3>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    I enjoy turning ideas into real products—building user-friendly interfaces
                    and reliable features that solve real problems.
                  </p>
                  <p>
                    My main stack is <span className="text-blue-400 font-medium">React + TypeScript</span>
                    with Tailwind for UI and Firebase/Supabase when I need backend services.
                    I focus on clean, maintainable code and intuitive user experiences.
                  </p>
                  <p>
                    Outside of coding, I participate in hackathons and help organize community events.
                  </p>
                </div>
              </div>
            </div>

            {/* Education Micro-card */}
            <div className="glass-card p-6 rounded-xl border border-glass-border flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                <Brain size={24} />
              </div>
              <div>
                <h4 className="font-bold text-text-primary">BCA Student</h4>
                <p className="text-text-secondary text-sm">Anand Engineering College (2023 - 2026)</p>
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <div className="space-y-6">
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="glass-card p-4 rounded-xl border border-glass-border hover:border-glass-border/20 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${skill.color} bg-opacity-10 opacity-80`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <span className="font-medium text-text-primary">{skill.name}</span>
                    <span className="ml-auto text-sm font-bold text-text-secondary">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className={`h-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
