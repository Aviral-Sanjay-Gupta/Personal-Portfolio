import { useState, useEffect } from 'react';

export type Theme = 'light' | 'dark';

export interface UseThemeSwitchReturn {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
}

export function useThemeSwitch(defaultTheme: Theme = 'dark'): UseThemeSwitchReturn {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Check localStorage first
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme') as Theme | null;
      if (stored) return stored;
      
      // Check system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return defaultTheme;
  });

  useEffect(() => {
    const root = document.documentElement;
    
    // Add transition class for smooth theme switching
    root.style.setProperty('transition', 'background-color 300ms ease, color 300ms ease');
    
    // Update DOM
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Persist to localStorage
    localStorage.setItem('theme', theme);
    
    // Remove transition after animation completes
    const timeout = setTimeout(() => {
      root.style.removeProperty('transition');
    }, 300);
    
    return () => clearTimeout(timeout);
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return {
    theme,
    toggleTheme,
    setTheme,
    isDark: theme === 'dark',
  };
}