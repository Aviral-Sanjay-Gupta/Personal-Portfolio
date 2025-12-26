import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../lib/utils';

export interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
  glow?: boolean;
  asChild?: boolean;
}

const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps & HTMLMotionProps<'button'>>(
  ({ className, variant = 'primary', glow = true, children, ...props }, ref) => {
    const glowColors = {
      primary: 'var(--glow-primary)',
      secondary: 'var(--glow-secondary)',
      accent: 'var(--glow-accent)',
      success: 'var(--glow-success)',
      warning: 'var(--glow-warning)',
      error: 'var(--glow-error)',
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className={cn(
          'relative inline-flex items-center justify-center',
          'px-6 py-3 rounded-lg',
          'font-medium transition-all duration-300',
          'bg-[var(--glass-bg)] backdrop-blur-xl',
          'border border-[var(--glass-border)]',
          'text-foreground hover:text-primary-foreground',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          className
        )}
        style={{
          boxShadow: glow 
            ? `0 0 20px -5px ${glowColors[variant]}, 0 4px 12px var(--glass-shadow)`
            : `0 4px 12px var(--glass-shadow)`,
        }}
        {...props}
      >
        {/* Glow effect on hover */}
        {glow && (
          <motion.span
            className="pointer-events-none absolute inset-0 rounded-lg"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              background: `radial-gradient(circle at center, ${glowColors[variant]}40 0%, transparent 70%)`,
            }}
            aria-hidden="true"
          />
        )}
        
        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </motion.button>
    );
  }
);

GlowButton.displayName = 'GlowButton';

export { GlowButton };
