import React, { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Send,
  MessageSquare,
  UserPlus,
  X,
  ChevronDown
} from "lucide-react";
import { ref, set, push, onValue } from "firebase/database";
import { db } from "./firebase";
import { useNavigate } from "react-router-dom";
import fallbackProfile from "./profile-fallback.svg";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const BackgroundStars = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full opacity-20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: Math.random() * 4 + 1 + "px",
            height: Math.random() * 4 + 1 + "px",
          }}
        />
      ))}
    </div>
  );
};

const Hero: React.FC = () => {
  const [followers, setFollowers] = useState<number>(0);
  const [showForm, setShowForm] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [name, setName] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [message, setMessage] = useState<string>("");
  const [allMessages, setAllMessages] = useState<string[]>([]);
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  // ✅ Fetch follower count
  useEffect(() => {
    const followersRef = ref(db, "followers");
    return onValue(followersRef, (snapshot) => {
      if (snapshot.exists()) setFollowers(snapshot.size);
      else setFollowers(0);
    });
  }, []);

  // ✅ Handle Follow
  const handleFollow = async () => {
    if (!name && !linkedin) return;
    const followersRef = ref(db, "followers");
    const newFollowerRef = push(followersRef);

    await set(newFollowerRef, {
      name: name || "Anonymous",
      linkedin: linkedin || "",
      createdAt: Date.now(),
    });

    setShowForm(false);
    setName("");
    setLinkedin("");
  };

  // ✅ Real-time Messages
  useEffect(() => {
    const messagesRef = ref(db, "messages");
    return onValue(messagesRef, (snapshot) => {
      const msgs: string[] = [];
      snapshot.forEach((child) => {
        const data = child.val();
        if (data && data.text) msgs.push(data.text);
      });
      setAllMessages(msgs.reverse());
    });
  }, []);

  // ✅ Send Message
  const handleSend = async () => {
    if (!message.trim()) return;
    const messagesRef = ref(db, "messages");
    const newMsgRef = push(messagesRef);

    await set(newMsgRef, {
      text: message,
      createdAt: Date.now(),
    });

    setMessage("");
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden bg-background"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-background overflow-hidden -z-10">
        <motion.div style={{ y: y1, x: -50 }} className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <motion.div style={{ y: y2, x: 50 }} className="absolute bottom-[20%] right-[5%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <BackgroundStars />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                Available for work
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 font-heading leading-tight">
                I Build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 animate-gradient-x">
                  Digital Experiences
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Hi, I'm <span className="text-white font-medium">Ashish Solanki</span>.
              A Frontend Developer crafting responsive, accessible, and performant web applications with modern technologies.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl shadow-white/10 flex items-center justify-center gap-2"
              >
                View My Work
                <ArrowRight size={20} />
              </button>

              <div className="flex items-center gap-4">
                {[
                  { icon: Github, href: "https://github.com/Ash6396" },
                  { icon: Linkedin, href: "https://linkedin.com/in/ashish-solanki-514941271" },
                  { icon: Mail, href: "mailto:ashishss741@gmail.com" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 glass rounded-full text-gray-400 hover:text-white hover:scale-110 transition-all border border-white/5 hover:border-white/20"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-800 border-2 border-background flex items-center justify-center text-xs">
                    <span className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded-full"></span>
                  </div>
                ))}
              </div>
              <span className="cursor-pointer hover:text-blue-400 transition-colors" onClick={() => navigate("/followers")}>
                Joined by <span className="text-white font-bold">{followers}+</span> connections
              </span>
            </motion.div>
          </div>

          {/* Graphical/Image Content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Glowing rings */}
              <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-indigo-500/20 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-[-20px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full" />

              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 glass shadow-2xl z-10">
                <img
                  src="/profile.png"
                  alt="Ashish"
                  onError={(e) => { e.currentTarget.src = fallbackProfile; }}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-10 glass px-4 py-2 rounded-xl border border-white/10 z-20 flex items-center gap-2"
              >
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-white">Online</span>
              </motion.div>

              {/* Connect Badge */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-4 bottom-20 z-20"
              >
                <button
                  onClick={() => setShowForm(true)}
                  className="glass px-5 py-3 rounded-xl border border-white/10 flex items-center gap-2 hover:bg-white/10 transition-all cursor-pointer group"
                >
                  <UserPlus size={18} className="text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-white">Let's Connect</span>
                </button>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 hidden md:block"
        >
          <ChevronDown size={24} />
        </motion.div>
      </div>

      {/* Floating Message Input */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 w-[90%] max-w-md"
      >
        <div className="glass-card relative pl-4 pr-2 py-2 flex items-center gap-3 rounded-full border border-black/10 dark:border-white/10 shadow-2xl">
          <GlowingEffect
            disabled={false}
            proximity={90}
            spread={45}
            glow={true}
            inactiveZone={0.15}
            borderWidth={2}
          />
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 flex-1 text-sm font-medium"
          />
          <button
            onClick={handleSend}
            className="p-2.5 bg-blue-600 rounded-full text-white hover:bg-blue-500 transition-colors shadow-lg hover:shadow-blue-500/25"
          >
            <Send size={16} />
          </button>
          <div className="w-px h-6 bg-black/10 dark:bg-white/10"></div>
          <button
            onClick={() => setShowMessages(true)}
            className="p-2 text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <MessageSquare size={18} />
          </button>
        </div>
      </motion.div>

      {/* Message Drawer */}
      <AnimatePresence>
        {showMessages && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMessages(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full sm:w-96 bg-surface/95 backdrop-blur-xl border-l border-white/10 shadow-2xl z-50 flex flex-col"
            >
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
                <h3 className="font-bold text-white text-lg font-heading">Messages</h3>
                <button onClick={() => setShowMessages(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white">
                  <X size={20} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {allMessages.map((msg, i) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={i}
                    className="glass p-4 rounded-2xl rounded-tl-sm text-sm text-gray-200 border border-white/5 shadow-sm"
                  >
                    {msg}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Connection Form Modal */}
      <AnimatePresence>
        {showForm && (
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => setShowForm(false)}
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-surface border border-white/10 p-8 rounded-3xl shadow-2xl max-w-sm w-full relative z-10 glass-card"
            >
              <h3 className="text-2xl font-bold text-white mb-2">Let's Connect</h3>
              <p className="text-gray-400 text-sm mb-6">Join my professional network.</p>

              <div className="space-y-4">
                <div>
                  <label className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1 block">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-black/20 border border-white/10 px-4 py-3 rounded-xl text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1 block">LinkedIn</label>
                  <input
                    type="text"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                    className="w-full bg-black/20 border border-white/10 px-4 py-3 rounded-xl text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all font-medium"
                  />
                </div>
                <div className="flex gap-3 pt-4">
                  <button onClick={() => setShowForm(false)} className="flex-1 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition-colors font-medium">
                    Cancel
                  </button>
                  <button onClick={handleFollow} className="flex-1 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all font-bold">
                    Connect
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
