import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '../UI/button';
import { ImageWithFallback } from '../../fallback/ImageWithFallback';

interface ProjectsProps {
  isDarkMode: boolean;
}

export function Projects({ isDarkMode }: ProjectsProps) {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with payment integration, inventory management, and analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1680499661732-3cfae4690e1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzYyODc5NDQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Mobile Fitness App',
      description: 'A comprehensive fitness tracking application with workout plans, progress tracking, and social features.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYyODg2Njk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React Native', 'Firebase', 'TypeScript'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Project Management Tool',
      description: 'Collaborative project management platform with real-time updates, task tracking, and team communication.',
      image: 'https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjI4OTQyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Next.js', 'Tailwind CSS', 'PostgreSQL'],
      github: '#',
      demo: '#',
    },
    {
      title: 'AI Content Generator',
      description: 'An AI-powered content generation tool that helps users create engaging content for various platforms.',
      image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyODc1MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Python', 'React', 'OpenAI', 'FastAPI'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase projects, skills, and contact information with a modern UI.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW98ZW58MXx8fHwxNzYyODg3NjYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React','shadcn/ui', 'Tailwind CSS', 'Vite'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Chat Application',
      description: 'A real-time chat application with group messaging, emojis, and notifications.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0JTIwYXBwfGVufDF8fHx8MTc2Mjg4NzcwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Socket.io', 'React', 'Node.js'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-16 px-2 sm:px-4 lg:px-8 mt-0">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className={`text-4xl sm:text-5xl font-extrabold mb-4 pb-2 leading-tight bg-gradient-to-r ${
              isDarkMode 
                ? 'from-white via-gray-300 to-gray-500' 
                : 'from-gray-300 via-black to-gray-300'
            } bg-clip-text text-transparent`}>
              Featured Projects
            </h2>
            <div className={`w-24 h-1 mx-auto rounded-full ${
              isDarkMode ? 'bg-gradient-to-r from-cyan-500 via-orange-500 to-fuchsia-500' : 'bg-gradient-to-r from-cyan-400 via-orange-400 to-fuchsia-400'
            }`} />
          </motion.div>
          <motion.p 
            className={`max-w-xl mx-auto ${isDarkMode ? 'text-white/70' : 'text-gray-700'} text-base`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Here are some of my recent projects that showcase my skills and experience
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.04, rotate: 1, boxShadow: '0 8px 32px rgba(120, 72, 232, 0.15)' }}
              className={`group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-black via-neutral-900 to-black border-white/10' 
                  : 'bg-gradient-to-br from-white/90 via-purple-100/60 to-white/80 border-purple-200/40'
              }`}
              style={{ minHeight: '340px', maxWidth: '420px', margin: '0 auto' }}
            >
              <div className="relative overflow-hidden">
                <motion.div
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-95 rounded-t-xl"
                  />
                </motion.div>
                <div className={`absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                  isDarkMode ? 'from-black/80 to-transparent' : 'from-purple-200/60 to-transparent'
                }`} />
              </div>

              <div className="p-4">
                <motion.h3 
                  className={isDarkMode ? 'text-white mb-1 text-lg font-semibold' : 'text-gray-900 mb-1 text-lg font-semibold'}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className={`mb-3 ${isDarkMode ? 'text-white/70' : 'text-gray-700'} text-sm`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {project.description}
                </motion.p>

                <motion.div 
                  className="flex flex-wrap gap-2 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.4 + tagIndex * 0.05 }}
                      whileHover={{ scale: 1.15, backgroundColor: isDarkMode ? '#262626' : '#c4b5fd', color: isDarkMode ? '#fff' : '#6d28d9' }}
                      className={`px-2 py-0.5 rounded-full text-xs font-medium cursor-pointer transition-all duration-200 ${
                        isDarkMode 
                          ? 'bg-neutral-900/80 border border-white/10 text-gray-300 hover:bg-neutral-800' 
                          : 'bg-purple-100 border border-purple-300 text-purple-700 hover:bg-purple-200'
                      }`}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div 
                  className="flex gap-2 justify-end"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className={`rounded-full px-3 py-1 text-xs font-semibold shadow hover:scale-105 transition-all duration-200 ${
                      isDarkMode 
                        ? 'bg-neutral-900/80 hover:bg-neutral-800 border-white/10 text-white hover:text-gray-200' 
                        : 'bg-purple-100 hover:bg-purple-200 border-purple-300 text-purple-700 hover:text-purple-900'
                    }`}
                    asChild
                  >
                    <a href={project.github}>
                      <Github size={14} className="mr-1" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className={`rounded-full px-3 py-1 text-xs font-semibold shadow hover:scale-105 transition-all duration-200 ${
                      isDarkMode 
                        ? 'bg-neutral-900/80 hover:bg-neutral-800 border border-white/10 text-white hover:text-gray-200' 
                        : 'bg-purple-100 hover:bg-purple-200 border border-purple-300 text-purple-700 hover:text-purple-900'
                    }`}
                    asChild
                  >
                    <a href={project.demo}>
                      <ExternalLink size={14} className="mr-1" />
                      Live Demo
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}