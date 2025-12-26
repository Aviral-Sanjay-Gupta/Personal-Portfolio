import { motion } from 'framer-motion';
import { BrainCircuit, Code2, Palette, Sparkles, Wand2, Zap } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { ImageWithFallback } from '../../fallback/ImageWithFallback';

interface AboutProps {
  isDarkMode: boolean;
}

export function About({ isDarkMode }: AboutProps) {
  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Crafting code that\'s easy to upkeep and effortlessly expands, guided by industry gold standards',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful interfaces with attention to detail',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Building fast and optimized web applications',
    },
    {
      icon: BrainCircuit,
      title: 'AI-Powered Insights',
      description: 'Turning raw data into smart decisions with custom ML pipelines and real-time predictive dashboards',
    },
    {
      icon: Sparkles,
      title: 'Performance',
      description: 'Built on standards that won’t vanish next season',
    },
    {
      icon: Wand2,
      title: 'Graphic Designing',
      description: 'From Illustrator vectors to production CSS—no detail lost',
    },
  ];

  const stats = [
    { label: 'Experience (in months)', value: '6*' },
    { label: 'Projects Delivered', value: '6*' },
    { label: 'Certifications', value: '23*' },
    { label: 'CGPA', value: '7.66/10' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className={`text-4xl sm:text-5xl font-extrabold mb-4 pb-1 leading-tight bg-gradient-to-r ${
              isDarkMode 
                ? 'from-white via-gray-300 to-gray-500' 
                : 'from-white via-black to-white'
            } bg-clip-text text-transparent`}>
              About Me
            </h2>
            <div className={`w-24 h-1 mx-auto rounded-full ${
              isDarkMode ? 'bg-gradient-to-r from-cyan-500 via-orange-500 to-fuchsia-500' : 'bg-gradient-to-r from-cyan-400 via-orange-400 to-fuchsia-400'
            }`} />
          </motion.div>
          <motion.p 
            className={`max-w-2xl mx-auto ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Hey Folks, I'm currently working as an Associate Software Engineer at Verint, specializing in full-stack development with modern web technologies. 
            With a B.Tech in Computer Science with specialization Artificial Intelligence and Machine Learning from Manipal University Jaipur, I enjoy building scalable applications and solving complex problems with clean, maintainable code.
            I contribute across frontend and backend to deliver seamless end-to-end solutions.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard
                variant="default"
                className="h-full p-8 hover:-translate-y-1"
              >
                <motion.div 
                  className={`inline-flex items-center justify-center w-14 h-14 backdrop-blur-sm rounded-xl mb-4 bg-gradient-to-br ${
                    isDarkMode 
                      ? 'from-neutral-900 to-black border border-white/10' 
                      : 'from-cyan-400/30 to-emerald-400/30 border border-cyan-300/30'
                  }`}
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: 360 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                >
                  <feature.icon className={isDarkMode ? 'text-white' : 'text-gray-900'} size={24} />
                </motion.div>
                <motion.h3 
                  className={isDarkMode ? 'text-white mb-2' : 'text-gray-900 mb-2'}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className={isDarkMode ? 'text-white/70' : 'text-gray-700'}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {feature.description}
                </motion.p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Industry Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h3 className={`text-4xl sm:text-5xl font-extrabold mb-4 pb-2 leading-tight bg-gradient-to-r ${
              isDarkMode 
                ? 'from-white via-gray-300 to-gray-500' 
                : 'from-gray-300 via-black to-gray-300'
            } bg-clip-text text-transparent`}>
              Industry Experience
            </h3>
            <div className={`w-24 h-1 mx-auto rounded-full ${
              isDarkMode ? 'bg-gradient-to-r from-cyan-500 via-orange-500 to-fuchsia-500' : 'bg-gradient-to-r from-cyan-400 via-orange-400 to-fuchsia-400'
            }`} />
          </motion.div>
          
          <div className="space-y-8">
            {/* Verint Experience - Current */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <GlassCard 
                variant="elevated" 
                className="p-8 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group border-2 border-transparent"
              >
                {/* Animated accent line */}
                <motion.div 
                  className={`absolute left-0 top-0 bottom-0 w-1 rounded-r-full ${
                    isDarkMode 
                      ? 'bg-gradient-to-b from-cyan-400 via-orange-400 to-fuchsia-400' 
                      : 'bg-gradient-to-b from-cyan-400 via-orange-400 to-fuchsia-400'
                  }`}
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />

                <div className="ml-6 relative z-10">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-3">
                        {/* Company Logo Placeholder */}
                        <motion.div 
                          className={`w-14 h-14 rounded-xl flex items-center justify-center text-xl font-bold backdrop-blur-sm ${
                            isDarkMode 
                              ? 'bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-white' 
                              : 'bg-gradient-to-br from-cyan-100 to-emerald-100 border border-blue-500 text-blue-700'
                          }`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                        <ImageWithFallback
                          src="/Verint-Logo.png"
                          alt="Verint"
                          width={56}
                          height={56}
                          className="rounded-xl"
                        />
                        </motion.div>
                        <div className="flex-1">
                          <motion.h4 
                            className={`text-2xl font-bold mb-2 bg-gradient-to-r ${
                              isDarkMode 
                                ? 'from-cyan-300 via-orange-300 to-emerald-300' 
                                : 'from-gray-900 via-purple-700 to-pink-700'
                            } bg-clip-text text-transparent`}
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            Associate Software Engineer - Full Stack
                          </motion.h4>
                          <p className={`text-lg font-medium flex items-center gap-2 ${
                            isDarkMode ? 'text-white/90' : 'text-gray-800'
                          }`}>
                            <span className={`inline-block w-1.5 h-1.5 rounded-full ${
                              isDarkMode ? 'bg-cyan-400' : 'bg-purple-600'
                            }`} />
                            Verint CES India Pvt. Ltd.
                          </p>
                          <p className={`text-sm mt-1 ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
                            📍 Bangalore, India
                          </p>
                        </div>
                      </div>
                    </div>
                    <motion.div 
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold backdrop-blur-md shadow-lg ${
                        isDarkMode 
                          ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-white border-2 border-cyan-400/40' 
                          : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-2 border-purple-300'
                      }`}
                      whileHover={{ scale: 1.08, y: -2 }}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <motion.span 
                        className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      Aug 2024 - Present
                    </motion.div>
                  </div>
                  
                  <div className="space-y-4 mt-6">
                    {[
                      'Built a fidget-spinner e-commerce POC that loads, routes and checks out without module federation—pure Single-SPA.',
                      'Created a Verint UI-Shell admin-framework demo application as another POC, to showcase my frontend learning skills.',
                      'Delivered a Verint Global Architecture Confluence standard for Import Maps + SystemJS scopes enabling React 17/19 coexistence in Single-SPA, validated via a working PoC with visual runtime proof.',
                      'Finished an intensive React-TypeScript Udemy course ahead of cohort average, immediately applying patterns to both POCs.'
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                        className="flex items-start gap-3 group/item"
                      >
                        <motion.div 
                          className={`mt-2 w-2 h-2 rounded-full flex-shrink-0 shadow-lg ${
                            isDarkMode 
                              ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-cyan-400/50' 
                              : 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-purple-600/50'
                          }`}
                          whileHover={{ scale: 2 }}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                        />
                        <p className={`leading-relaxed text-base ${
                          isDarkMode ? 'text-white/80 group-hover/item:text-white' : 'text-gray-700 group-hover/item:text-gray-900'
                        } transition-colors duration-300`}>
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tech Stack Tags */}
                  <motion.div 
                    className="mt-6 pt-6 border-t border-white/10"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <p className={`text-sm font-semibold mb-3 ${
                      isDarkMode ? 'text-white/70' : 'text-gray-600'
                    }`}>
                      Tech Stack:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['React.js', 'TypeScript', 'Single-SPA', 'Micro-frontends', 'Node.js'].map((tech, index) => (
                        <motion.span
                          key={tech}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium backdrop-blur-sm ${
                            isDarkMode 
                              ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-400/30 hover:bg-cyan-500/20' 
                              : 'bg-purple-100 text-purple-700 border border-purple-300 hover:bg-purple-200'
                          } transition-all duration-300`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 + 0.5 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Internship Experience */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <GlassCard 
                variant="elevated" 
                className="p-8 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group border-2 border-transparent"
              >
                {/* Animated accent line */}
                <motion.div 
                  className={`absolute left-0 top-0 bottom-0 w-1 rounded-r-full ${
                    isDarkMode 
                      ? 'bg-gradient-to-b from-blue-400 via-cyan-400 to-teal-400' 
                      : 'bg-gradient-to-b from-blue-500 via-cyan-500 to-teal-500'
                  }`}
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />

                <div className="ml-6 relative z-10">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-3">
                        {/* Company Logo Placeholder */}
                        <motion.div 
                          className={`w-14 h-14 rounded-xl flex items-center justify-center text-xl font-bold backdrop-blur-sm ${
                            isDarkMode 
                              ? 'bg-gradient-to-br from-orange-500/20 to-fuchsia-500/20 border border-white' 
                              : 'bg-gradient-to-br from-blue-100 to-cyan-100 border border-black text-blue-700'
                          }`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                        <ImageWithFallback
                          src="/Unified-Mentor-Logo.png"
                          alt="Unified Mentor"
                          width={58}
                          height={56}
                          className="rounded-xl"
                        />
                        </motion.div>
                        <div className="flex-1">
                          <motion.h4 
                            className={`text-2xl font-bold mb-2 bg-gradient-to-r ${
                              isDarkMode 
                                ? 'from-orange-300 via-fuchsia-300 to-cyan-300' 
                                : 'from-gray-900 via-blue-700 to-cyan-700'
                            } bg-clip-text text-transparent`}
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            Data Science Intern
                          </motion.h4>
                          <p className={`text-lg font-medium flex items-center gap-2 ${
                            isDarkMode ? 'text-white/90' : 'text-gray-800'
                          }`}>
                            <span className={`inline-block w-1.5 h-1.5 rounded-full ${
                              isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                            }`} />
                            Unified Mentor Pvt. Ltd.
                          </p>
                          <p className={`text-sm mt-1 ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
                            🌐 Remote
                          </p>
                        </div>
                      </div>
                    </div>
                    <motion.div 
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold backdrop-blur-md shadow-lg ${
                        isDarkMode 
                          ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-white border-2 border-blue-400/40' 
                          : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-2 border-blue-300'
                      }`}
                      whileHover={{ scale: 1.08, y: -2 }}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      July 2024 - Sep 2024
                    </motion.div>
                  </div>
                  
                  <div className="space-y-4 mt-6">
                    {[
                      'Designed and implemented end-to-end ETL pipelines for Big Data processing using Python, SQL, and Pandas.',
                      'Performed end-to-end data wrangling, feature engineering and statistical tests to tighten BI workflows.',
                      'Built real-time visualizations and deployed ML models that automated KPI forecasting for ops teams.',
                      'Solved real-world briefs spanning Amazon sales forecasting, entertainer data analytics, and heart-disease diagnostic analysis.'
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                        className="flex items-start gap-3 group/item"
                      >
                        <motion.div 
                          className={`mt-2 w-2 h-2 rounded-full flex-shrink-0 shadow-lg ${
                            isDarkMode 
                              ? 'bg-gradient-to-r from-blue-400 to-cyan-400 shadow-blue-400/50' 
                              : 'bg-gradient-to-r from-blue-600 to-cyan-600 shadow-blue-600/50'
                          }`}
                          whileHover={{ scale: 2 }}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                        />
                        <p className={`leading-relaxed text-base ${
                          isDarkMode ? 'text-white/80 group-hover/item:text-white' : 'text-gray-700 group-hover/item:text-gray-900'
                        } transition-colors duration-300`}>
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tech Stack Tags */}
                  <motion.div 
                    className="mt-6 pt-6 border-t border-white/10"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <p className={`text-sm font-semibold mb-3 ${
                      isDarkMode ? 'text-white/70' : 'text-gray-600'
                    }`}>
                      Tech Stack:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'SQL', 'Pandas', 'Machine Learning', 'ETL', 'Power BI', 'Data Visualization'].map((tech, index) => (
                        <motion.span
                          key={tech}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium backdrop-blur-sm ${
                            isDarkMode 
                              ? 'bg-blue-500/10 text-blue-300 border border-blue-400/30 hover:bg-blue-500/20' 
                              : 'bg-blue-100 text-blue-700 border border-blue-300 hover:bg-blue-200'
                          } transition-all duration-300`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 + 0.6 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </motion.div>

        {/* My Journey Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <GlassCard variant="elevated" className="mt-16 p-8 -mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h3 className={`text-4xl sm:text-5xl font-extrabold mb-4 pb-2 leading-tight bg-gradient-to-r ${
                isDarkMode 
                  ? 'from-white via-gray-300 to-gray-500' 
                  : 'from-gray-300 via-black to-gray-300'
              } bg-clip-text text-transparent`}>
                My Journey
              </h3>
              <div className={`w-24 h-1 mx-auto rounded-full ${
                isDarkMode ? 'bg-gradient-to-r from-cyan-500 via-orange-500 to-fuchsia-500' : 'bg-gradient-to-r from-cyan-400 via-orange-400 to-fuchsia-400'
              }`} />
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <motion.p 
                  className={`mb-4 ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  From building computer-vision rescue systems at university to orchestrating production-grade micro-front-ends, my tech journey has always balanced deep-dive research with real products. At Manipal I trained CNNs that detect emergency vehicles, built UAV crack-detection pipelines with YOLO, and engineered Python/SQL ETL workflows that cleaned and served volumes of data to Power BI dashboards. That blend of AI, and data engineering gave me the confidence to jump straight into enterprise codebases the moment I joined Verint.
                </motion.p>
                <motion.p 
                  className={isDarkMode ? 'text-white/70' : 'text-gray-700'}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  During my first five months at Verint, I worked within the company’s microfrontend ecosystem, focusing on Single-SPA and React + TypeScript integrations. I delivered two functional proofs of concept: a fidget-spinner e-commerce experience built entirely with Single-SPA (without Module Federation) to demonstrate multiple independent React applications coexisting on a single page, and a custom UI Shell admin framework demo to explore scalable configuration and administration patterns for microfrontend-based platforms. I also authored and published a Verint Global Architecture (GA) Confluence standard for Import Maps + SystemJS scopes enabling React 17/19 coexistence in Single-SPA, validated through a working PoC with visual runtime evidence—capturing practical patterns teams can apply to build predictable, stable microfrontend integrations.
                </motion.p>
              </div>
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className={`backdrop-blur-sm rounded-xl p-4 ${
                      isDarkMode 
                        ? 'bg-white/[0.02] border border-white/[0.05]' 
                        : 'bg-white/40 border border-white/30'
                    }`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className={isDarkMode ? 'text-white/80' : 'text-gray-700'}>{stat.label}</span>
                      <motion.span 
                        className="text-purple-400"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                      >
                        {stat.value}
                      </motion.span>
                    </div>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-right pt-2"
                >
                  <span className={`text-xs italic ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>
                    * = still counting
                  </span>
                </motion.div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}