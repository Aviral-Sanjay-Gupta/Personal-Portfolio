import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from '../../fallback/ImageWithFallback';
import { GlassCard } from './GlassCard';
import { GlowButton } from './GlowButton';
import { useTilt } from '../hooks/useTilt';

interface HeroProps {
  isDarkMode: boolean;
}

export function Hero({ isDarkMode }: HeroProps) {
  const profileTilt = useTilt({ maxTilt: 10, scale: 1.05, glare: true });

  const handleScrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl w-full">
        <div className="text-center">
          {/* Glass Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <GlassCard variant="elevated" noise className="inline-block p-8 sm:p-12 lg:p-16">
              {/* Profile Picture with 3D tilt */}
              <motion.div
                ref={profileTilt.ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-8 inline-block perspective-1000"
                onMouseMove={profileTilt.handleMouseMove}
                onMouseLeave={profileTilt.handleMouseLeave}
                style={{
                  rotateX: profileTilt.rotateX,
                  rotateY: profileTilt.rotateY,
                  scale: profileTilt.scale,
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className={`relative p-1 rounded-full ${isDarkMode ? 'bg-gradient-to-br from-cyan-500 via-orange-500 to-fuchsia-500' : 'bg-gradient-to-br from-cyan-400 via-orange-400 to-fuchsia-400'}`}>
                  <div className={`rounded-full overflow-hidden w-50 h-50 sm:w-60 sm:h-60 ${
                    isDarkMode ? 'bg-black/80' : 'bg-white/80'
                  } backdrop-blur-sm`}>
                    <ImageWithFallback
                      src="/PXL_20251206_131123663.jpg"
                      alt="Profile"
                      className="w-96 h-96 -mt-1 ml-3 scale-125 object-cover mx-auto my-auto rounded-full"
                    />
                  </div>
                  {/* Glare effect */}
                  <div 
                    className="absolute inset-0 rounded-full pointer-events-none transition-opacity duration-100"
                    style={profileTilt.glareStyle}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mb-4"
              >
                <span className={`inline-block px-4 py-2 backdrop-blur-sm rounded-full ${
                  isDarkMode 
                    ? 'bg-black/80 border border-white/20 text-white' 
                    : 'bg-cyan-100/60 border border-cyan-300/40 text-cyan-900'
                }`}>
                  👋 Welcome to my portfolio
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className={`text-5xl sm:text-6xl font-extrabold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
              >
                Hi, I'm <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDarkMode ? 'from-cyan-500 via-orange-500 to-fuchsia-500' : 'from-cyan-500 via-orange-500 to-fuchsia-500'}`}>Aviral Sanjay Gupta</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className={`mb-8 max-w-2xl mx-auto ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                A passionate Full Stack Developer crafting beautiful and functional web experiences.
                Specializing in AIML, graphic designing, modern web technologies, and user-centered design.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-4 justify-center mb-8"
              >
                <GlowButton
                  onClick={handleScrollToProjects}
                  variant="primary"
                  className="text-foreground hover:text-foreground"
                >
                  View My Work
                </GlowButton>
                <GlowButton
                  variant="secondary"
                  glow={false}
                  className="text-foreground hover:text-foreground"
                  asChild
                >
                  <a href="/Resume/Aviral_Gupta_CV.pdf" download="Aviral_Gupta_CV.pdf">
                    Download CV
                  </a>
                </GlowButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex gap-4 justify-center"
              >
                {[
                  { icon: Github, href: 'https://github.com/Aviral-Sanjay-Gupta', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/aviral-sanjay-gupta/', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:aviralgupta076@gmail.com', label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 backdrop-blur-sm rounded-full transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-black/80 hover:bg-black border border-white/10 text-white' 
                        : 'bg-gray-900/5 hover:bg-gray-900/10 border border-gray-900/10 text-gray-900'
                    }`}
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </GlassCard>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`inline-flex flex-col items-center gap-2 cursor-pointer ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
              onClick={handleScrollToAbout}
            >
              <span>Scroll to explore</span>
              <ArrowDown size={20} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}