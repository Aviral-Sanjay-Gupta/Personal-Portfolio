import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { TechMarquee } from './TechMarquee';

interface SkillsProps {
  isDarkMode: boolean;
}

export function Skills({ isDarkMode }: SkillsProps) {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', proficiency: 'Advanced' },
        { name: 'TypeScript', proficiency: 'Advanced' },
        { name: 'Single-SPA', proficiency: 'Advanced' },
        { name: 'Tailwind CSS', proficiency: 'Advanced' },
        { name: 'HTML5 & CSS3', proficiency: 'Advanced' },
      ],
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', proficiency: 'Advanced' },
        { name: 'Python', proficiency: 'Advanced' },
        { name: 'Core Java', proficiency: 'Advanced' },
        { name: 'C', proficiency: 'Intermediate' },
        { name: 'SQL', proficiency: 'Advanced' },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', proficiency: 'Expert' },
        { name: 'Canva', proficiency: 'Expert' },
        { name: 'AWS', proficiency: 'Intermediate' },
        { name: 'Figma', proficiency: 'Intermediate' },
        { name: 'VS Code', proficiency: 'Expert' },
      ],
    },
  ];

  const getProficiencyDots = (proficiency: string) => {
    const levels = { 'Expert': 5, 'Advanced': 4, 'Intermediate': 3 };
    return levels[proficiency as keyof typeof levels] || 3;
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
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
            <h2 className={`text-4xl sm:text-5xl font-extrabold mb-4 -mt-14 pb-2 leading-tight bg-gradient-to-r ${
              isDarkMode 
                ? 'from-white via-gray-300 to-gray-500' 
                : 'from-gray-300 via-black to-gray-300'
            } bg-clip-text text-transparent`}>
              Skills & Expertise
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
            Technologies and tools I work with to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <TechMarquee speed={80} />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <GlassCard
                variant="default"
                className="h-full p-8 hover:-translate-y-1"
              >
                <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${
                  isDarkMode 
                    ? 'from-white to-gray-500' 
                    : 'from-black to-gray-400'
                } bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      className={`group p-4 rounded-lg transition-all duration-300 ${
                        isDarkMode 
                          ? 'bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05]' 
                          : 'bg-white/40 hover:bg-white/60 border border-white/30'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className={`font-medium ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {skill.name}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          skill.proficiency === 'Expert' 
                            ? isDarkMode 
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30' 
                              : 'bg-cyan-100 text-cyan-700 border border-cyan-300'
                            : skill.proficiency === 'Advanced'
                            ? isDarkMode
                              ? 'bg-orange-500/20 text-orange-300 border border-orange-400/30'
                              : 'bg-orange-100 text-orange-700 border border-orange-300'
                            : isDarkMode
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30'
                            : 'bg-emerald-100 text-emerald-700 border border-emerald-300'
                        }`}>
                          {skill.proficiency}
                        </span>
                      </div>
                      <div className="flex gap-1.5 mt-3">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                              i < getProficiencyDots(skill.proficiency)
                                ? isDarkMode
                                  ? 'bg-gradient-to-r from-cyan-400 to-fuchsia-400'
                                  : 'bg-gradient-to-r from-cyan-500 to-fuchsia-500'
                                : isDarkMode
                                ? 'bg-white/10'
                                : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}