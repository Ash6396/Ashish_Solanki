"use client";
import React from "react";
import {
  Download,
  Briefcase,
  GraduationCap,
  Code,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
} from "lucide-react";
import { motion } from "framer-motion";

const Resume: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="resume"
      className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Animated background glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-purple-500 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Resume
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my professional journey, skills, and
            achievements. Download my resume or explore the interactive summary
            below.
          </p>
        </motion.div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Download size={20} />
            Download Resume
          </a>
        </motion.div>

        {/* Resume Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 p-8 lg:p-12 rounded-3xl shadow-xl"
        >
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail size={18} className="text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-600 dark:text-gray-300">
                      ashishss741@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone size={18} className="text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-600 dark:text-gray-300">
                      +91-6397061171
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin size={18} className="text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-600 dark:text-gray-300">
                      India
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin
                      size={18}
                      className="text-blue-600 dark:text-blue-400"
                    />
                    <a
                      href="https://linkedin.com/in/ashish-solanki-514941271"
                      target="_blank"
                      className="text-gray-600 dark:text-gray-300 hover:underline"
                    >
                      LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Github
                      size={18}
                      className="text-blue-600 dark:text-blue-400"
                    />
                    <a
                      href="https://github.com/Ash6396"
                      target="_blank"
                      className="text-gray-600 dark:text-gray-300 hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Professional Summary */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Professional Summary
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Frontend-focused Web Developer and BCA student with hands-on experience in building
                  responsive, scalable, and user-centric web applications using JavaScript, TypeScript,
                  React.js, and Next.js. Experienced in translating UI/UX designs into high-quality code,
                  optimizing frontend performance, creating reusable component architectures, and integrating
                  cloud backends/auth systems with Supabase and Firebase. Actively seeking Frontend or
                  Junior Full-Stack Developer roles.
                </p>

                {/* Quick Stats */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { staggerChildren: 0.15 },
                    },
                  }}
                  className="grid grid-cols-2 md:grid-cols-3 gap-4"
                >
                  {[
                    { value: "5+", label: "Projects Built", color: "blue" },
                    { value: "2026", label: "BCA Graduation", color: "green" },
                    { value: "JS/TS", label: "Core Languages", color: "orange" },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      className={`text-center p-4 bg-${stat.color}-50 dark:bg-${stat.color}-900/20 rounded-xl`}
                    >
                      <div
                        className={`text-2xl font-bold text-${stat.color}-600 dark:text-${stat.color}-400`}
                      >
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Quick Navigation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="mt-8 grid md:grid-cols-3 gap-4"
          >
            {[
              {
                id: "about",
                icon: <GraduationCap size={20} className="text-blue-600 dark:text-blue-400" />,
                label: "Education",
              },
              {
                id: "internships",
                icon: <Briefcase size={20} className="text-green-600 dark:text-green-400" />,
                label: "Experience",
              },
              {
                id: "projects",
                icon: <Code size={20} className="text-purple-600 dark:text-purple-400" />,
                label: "Projects",
              },
            ].map((item, i) => (
              <motion.button
                key={i}
                onClick={() => scrollToSection(item.id)}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center justify-center space-x-2 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
