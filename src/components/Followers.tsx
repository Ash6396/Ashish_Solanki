import React, { useEffect, useMemo, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "./firebase";
import { Linkedin, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface Follower {
  name: string;
  linkedin: string;
}

const Followers: React.FC = () => {
  const [followers, setFollowers] = useState<Follower[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const followerCount = useMemo(() => followers.length, [followers.length]);

  useEffect(() => {
    const followersRef = ref(db, "followers");
    const unsubscribe = onValue(
      followersRef,
      (snapshot) => {
        const list: Follower[] = [];
        snapshot.forEach((child) => {
          const data = child.val();
          list.push({
            name: data.name || "Anonymous",
            linkedin: data.linkedin || "",
          });
        });
        setFollowers(list);
        setError(null);
        setLoading(false);
      },
      (err) => {
        setFollowers([]);
        setLoading(false);
        setError(err?.message || "Could not load followers.");
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <section className="min-h-screen bg-background pt-28 pb-20 overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[-120px] right-[-120px] h-[520px] w-[520px] rounded-full bg-indigo-600/10 blur-[140px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between gap-4"
        >
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="font-semibold">Back to Home</span>
          </button>

          <div className="text-right">
            <div className="text-xs uppercase tracking-widest text-text-secondary">Realtime Database</div>
            <div className="text-sm font-medium text-text-secondary">
              Path: <span className="text-text-primary">followers</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-8"
        >
          <div className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[90px] -mr-16 -mt-16 pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 relative z-10">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white font-heading">Followers</h1>
                <p className="mt-2 text-text-secondary max-w-2xl">
                  People who connected with you from the Home page. New connections appear here in real time.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="glass px-4 py-3 rounded-2xl border border-white/10">
                  <div className="text-xs uppercase tracking-widest text-text-secondary">Total</div>
                  <div className="text-2xl font-extrabold text-white">{loading ? "—" : followerCount}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-8"
        >
          {loading ? (
            <div className="glass-card rounded-3xl p-6 md:p-8">
              <div className="h-5 w-40 bg-white/10 rounded" />
              <div className="mt-4 space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-16 rounded-2xl bg-white/5 border border-white/10" />
                ))}
              </div>
            </div>
          ) : error ? (
            <div className="glass-card rounded-3xl p-6 md:p-8">
              <div className="text-white font-semibold">Followers could not load</div>
              <div className="mt-2 text-sm text-text-secondary break-words">{error}</div>
              <div className="mt-4 text-sm text-text-secondary">
                If your Firebase Rules are strict, allow reads for testing or you will see <span className="text-white">PERMISSION_DENIED</span>.
              </div>
            </div>
          ) : followers.length === 0 ? (
            <div className="glass-card rounded-3xl p-6 md:p-8">
              <div className="text-white font-semibold">No followers yet</div>
              <div className="mt-2 text-sm text-text-secondary">
                Go to Home → click <span className="text-white">Let’s Connect</span> and submit your details.
              </div>
            </div>
          ) : (
            <div className="glass-card rounded-3xl p-4 md:p-6">
              <ul className="space-y-3">
                {followers.map((f, i) => (
                  <motion.li
                    key={`${f.name}-${i}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: Math.min(i * 0.03, 0.2) }}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <div className="min-w-0">
                      <div className="text-white font-semibold truncate">{f.name}</div>
                      <div className="text-xs text-text-secondary truncate">
                        {f.linkedin ? f.linkedin : "No LinkedIn provided"}
                      </div>
                    </div>

                    {f.linkedin && (
                      <a
                        href={f.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-blue-600/90 hover:bg-blue-600 text-white px-4 py-2 transition-colors"
                      >
                        <Linkedin size={18} />
                        <span className="hidden sm:inline">LinkedIn</span>
                      </a>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Followers;
