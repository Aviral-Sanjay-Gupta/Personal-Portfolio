import { useState, useEffect } from "react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navbar";
import { ParticlesBackground } from "./components/ParticleBackground";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDarkMode
          ? "bg-black"
          : "bg-white"
      }`}
    >
      {/* Animated background gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse ${
            isDarkMode ? "bg-cyan-500/40" : "bg-cyan-400/30"
          }`}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse ${
            isDarkMode ? "bg-orange-500/40" : "bg-orange-400/30"
          }`}
          style={{ animationDelay: "1s" }}
        />
        <div
          className={`absolute top-1/2 right-1/3 w-72 h-72 rounded-full blur-3xl animate-pulse ${
            isDarkMode ? "bg-emerald-500/40" : "bg-emerald-400/30"
          }`}
          style={{ animationDelay: "2s" }}
        />
        <div
          className={`absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full blur-3xl animate-pulse ${
            isDarkMode ? "bg-fuchsia-500/40" : "bg-fuchsia-400/30"
          }`}
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Particles Background */}
      <div className="fixed inset-0 z-0">
        <ParticlesBackground isDarkMode={isDarkMode} />
      </div>

      <Navigation
        scrolled={scrolled}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      <main className="relative z-10">
        <Hero isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </main>

      {/* Footer */}
      <footer
        className={`relative z-10 py-8 text-center ${
          isDarkMode ? "text-white/60" : "text-gray-600"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <p>&copy; 2025 | Aviral Sanjay Gupta. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}