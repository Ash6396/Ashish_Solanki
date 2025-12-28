import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Context
import { ThemeProvider } from "./contexts/ThemeContext";

// Components (common)
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Internships from "./components/Internships";
import Achievements from "./components/Achievements";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Followers from "./components/Followers";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (!hash) return;

    const id = hash.startsWith("#") ? hash.slice(1) : hash;
    if (!id) return;

    let cancelled = false;
    let attempts = 0;

    const tryScroll = () => {
      if (cancelled) return;
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
      attempts += 1;
      if (attempts < 25) setTimeout(tryScroll, 50);
    };

    // Wait for route content to mount.
    setTimeout(tryScroll, 0);

    return () => {
      cancelled = true;
    };
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-primary transition-colors duration-300 overflow-x-hidden">
        <div className="bg-noise"></div>
        <Router>
          <ScrollToHash />
          <Navbar />

          <main className="overflow-x-hidden">
            <Routes>
              {/* Home Page (all sections like before) */}
              <Route
                path="/"
                element={
                  <div className="overflow-hidden">
                    <Hero />
                    <About />
                    <Projects />
                    <Internships />
                    <Achievements />
                    <Resume />
                    <Contact />
                  </div>
                }
              />

              {/* Followers Page */}
              <Route path="/followers" element={<Followers />} />
            </Routes>
          </main>

          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
