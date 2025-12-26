import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { GlassCard } from './GlassCard';

interface NavigationProps {
  scrolled: boolean;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export function Navigation({ scrolled, isDarkMode, setIsDarkMode }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {scrolled ? (
            <GlassCard variant="flat" className="my-2">
              <div className="flex justify-between items-center py-4 px-4">
                <NavContent 
                  isDarkMode={isDarkMode}
                  navItems={navItems}
                  handleNavClick={handleNavClick}
                  setIsDarkMode={setIsDarkMode}
                  mobileMenuOpen={mobileMenuOpen}
                  setMobileMenuOpen={setMobileMenuOpen}
                />
              </div>
            </GlassCard>
          ) : (
            <div className="flex justify-between items-center py-4">
              <NavContent 
                isDarkMode={isDarkMode}
                navItems={navItems}
                handleNavClick={handleNavClick}
                setIsDarkMode={setIsDarkMode}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
              />
            </div>
          )}
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          className={`fixed inset-0 z-40 md:hidden backdrop-blur-xl ${
            isDarkMode ? 'bg-slate-900/95' : 'bg-white/95'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-2xl transition-colors ${
                  isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-cyan-600'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}

interface NavContentProps {
  isDarkMode: boolean;
  navItems: Array<{ label: string; href: string }>;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  setIsDarkMode: (value: boolean) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
}

function NavContent({ 
  isDarkMode, 
  navItems, 
  handleNavClick, 
  setIsDarkMode,
  mobileMenuOpen,
  setMobileMenuOpen
}: NavContentProps) {
  return (
    <>
      <motion.a
        href="#home"
        onClick={(e) => handleNavClick(e, '#home')}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group cursor-pointer"
      >
        <span className={`text-2xl font-bold bg-gradient-to-r ${
          isDarkMode 
            ? 'from-cyan-500 via-orange-500 to-fuchsia-500' 
            : 'from-cyan-500 via-orange-500 to-fuchsia-500'
        } bg-clip-text text-transparent`}>
          ASG
        </span>
        <motion.div 
          className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r ${
            isDarkMode 
              ? 'from-white/0 via-white/50 to-white/0' 
              : 'from-purple-500/0 via-purple-500 to-purple-500/0'
          }`}
          initial={{ width: 0 }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.3 }}
        />
      </motion.a>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item, index) => (
          <motion.a
            key={item.label}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className={`transition-colors relative group ${
              isDarkMode ? 'text-white/80 hover:text-white' : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            {item.label}
            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
              isDarkMode ? 'bg-white/80' : 'bg-gray-900'
            }`} />
          </motion.a>
        ))}
        
        {/* Dark Mode Toggle */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          onClick={() => setIsDarkMode(!isDarkMode)}
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.95 }}
          className={`p-2 rounded-full transition-all duration-300 ${
            isDarkMode 
              ? 'bg-white/10 hover:bg-white/20 text-white' 
              : 'bg-gray-200/80 hover:bg-gray-300/80 text-gray-900'
          }`}
          aria-label="Toggle theme"
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </motion.button>
      </div>

      {/* Mobile Menu Button and Dark Mode Toggle */}
      <div className="md:hidden flex items-center gap-3">
        <motion.button
          onClick={() => setIsDarkMode(!isDarkMode)}
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.95 }}
          className={`p-2 rounded-full transition-all duration-300 ${
            isDarkMode 
              ? 'bg-white/10 hover:bg-white/20 text-white' 
              : 'bg-gray-200/80 hover:bg-gray-300/80 text-gray-900'
          }`}
          aria-label="Toggle theme"
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </motion.button>
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
          className={`p-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>
    </>
  );
}