import { useMemo, useState, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { cn } from '../lib/utils';

// Import tech icons
import ReactIcon from '../assets/react.svg';
import TypeScriptIcon from '../assets/TypeScript.svg';
import ViteIcon from '../assets/Vite.js.svg';
import TailwindIcon from '../assets/Tailwind CSS.svg';
import PythonIcon from '../assets/Python.svg';
import NodeIcon from '../assets/Node.js.svg';
import JavaIcon from '../assets/Java.svg';
import VisualStudioIcon from '../assets/Visual Studio Code (VS Code).svg';
import HtmlIcon from '../assets/Html-5.svg';
import SingleSpa from '../assets/Single-Spa.svg';
import CssIcon from '../assets/CSS-3.svg';

export interface TechItem {
  name: string;
  icon: React.ComponentType<{ className?: string }> | string;
}

// Normalize whatever import you get into a React component that accepts className
function resolveIcon(imported: any) {
  // If import is a string — it's a URL path (default SVG loader behavior)
  if (typeof imported === 'string') {
    return (props: any) => <img src={imported} alt="" {...props} />;
  }

  // If it's an object with a default that is a string (some bundlers)
  if (imported && typeof imported.default === 'string') {
    return (props: any) => <img src={imported.default} alt="" {...props} />;
  }

  // If it's an object with a ReactComponent property (common svgr)
  if (imported && imported.ReactComponent) {
    return imported.ReactComponent;
  }

  // If the module default is a function/component (svgr configured to default export)
  if (imported && typeof imported.default === 'function') {
    return imported.default;
  }

  // If the module itself is a component
  if (typeof imported === 'function') {
    return imported;
  }

  // As a last fallback, render nothing
  return () => null;
}

const defaultTech: TechItem[] = [
  { name: 'React', icon: resolveIcon(ReactIcon) },
  { name: 'TypeScript', icon: resolveIcon(TypeScriptIcon) },
  { name: 'Single-SPA', icon: resolveIcon(SingleSpa) },
  { name: 'Vite', icon: resolveIcon(ViteIcon) },
  { name: 'Html-5', icon: resolveIcon(HtmlIcon) },
  { name: 'CSS-3', icon: resolveIcon(CssIcon) },
  { name: 'Tailwind CSS', icon: resolveIcon(TailwindIcon) },
  { name: 'Python', icon: resolveIcon(PythonIcon) },
  { name: 'Node.js', icon: resolveIcon(NodeIcon) },
  { name: 'Java', icon: resolveIcon(JavaIcon) },
  { name: 'Visual Studio Code (VS Code)', icon: resolveIcon(VisualStudioIcon) },
];

export interface TechMarqueeProps {
  tech?: TechItem[];
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

export function TechMarquee({
  tech = defaultTech,
  speed = 30,
  pauseOnHover = true,
  className
}: TechMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);
  const constraintsRef = useRef<HTMLDivElement>(null);

  // Duplicate items for seamless loop
  const duplicatedTech = [...tech, ...tech, ...tech];

  // Tooltip state
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const currentX = x.get() ?? 0;
  const keyFrames = useMemo(() => [0, -100 * tech.length], [tech.length]);

  return (
    <div
      className={cn('relative overflow-hidden py-8', className)}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => {
        if (pauseOnHover) setIsPaused(false);
        setHoveredIndex(null);
      }}
    >
      <motion.div
        ref={constraintsRef}
        className="flex gap-8"
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        style={{ x }}
        animate={{
          x: isPaused || isDragging ? currentX : keyFrames,
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
      >
        {duplicatedTech.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={`${item.name}-${index}`}
              className="group relative flex flex-col items-center gap-3 flex-shrink-0"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.1, y: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              {/* Icon container with glass effect */}
              <div className={cn(
                'relative flex h-16 w-16 items-center justify-center rounded-xl',
                'bg-[var(--glass-bg)] backdrop-blur-xl',
                'border border-[var(--glass-border)]',
                'shadow-[0_8px_32px_var(--glass-shadow)]',
                'transition-all duration-300',
                'group-hover:shadow-[0_12px_40px_var(--glass-shadow)]',
                'group-hover:border-[var(--glow-primary)]'
              )}>
                <Icon className="h-8 w-8 text-foreground transition-colors duration-300 group-hover:text-[var(--glow-primary)]" />

                {/* Glow effect on hover */}
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: 'radial-gradient(circle at center, var(--glow-primary) 0%, transparent 70%)',
                    filter: 'blur(12px)',
                  }}
                />
              </div>

              {/* Tooltip */}
              <motion.span
                className={cn(
                  'absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap',
                  'px-3 py-1 rounded-md text-xs',
                  'bg-[var(--glass-bg)] backdrop-blur-xl',
                  'border border-[var(--glass-border)]',
                  'shadow-[0_4px_16px_var(--glass-shadow)]',
                  'pointer-events-none'
                )}
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  y: hoveredIndex === index ? 0 : -10,
                }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
              </motion.span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
