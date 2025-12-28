import React from 'react';
import { Heart, Code, Coffee, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Ash6396', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/ashish-solanki-514941271', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:ashishss741@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#internships' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Ashish Solanki</h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Frontend-focused Web Developer and BCA student building responsive, user-centric web applications
              with JavaScript, TypeScript, React.js, and Next.js.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>and</span>
              <Code size={16} className="text-blue-400" />
              <span>fueled by</span>
              <Coffee size={16} className="text-yellow-600" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 group"
                  >
                    <Icon size={18} className="group-hover:scale-110 transition-transform duration-200" />
                    <span>{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Ashish Solanki. All rights reserved.
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105 group"
          >
            <span className="text-sm">Back to top</span>
            <div className="p-2 bg-gray-800 rounded-full group-hover:bg-gray-700 transition-colors duration-200">
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-200" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;