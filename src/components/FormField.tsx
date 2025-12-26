import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';

interface BaseFieldProps {
  label: string;
  error?: string;
  success?: boolean;
}

type InputProps = BaseFieldProps & InputHTMLAttributes<HTMLInputElement> & {
  as?: 'input';
};

type TextareaProps = BaseFieldProps & TextareaHTMLAttributes<HTMLTextAreaElement> & {
  as: 'textarea';
};

type FormFieldProps = InputProps | TextareaProps;

const FormField = forwardRef<HTMLInputElement | HTMLTextAreaElement, FormFieldProps>(
  ({ label, error, success, className, as = 'input', ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setIsFocused(false);
      setHasValue(e.target.value.length > 0);
    };

    const isFloating = isFocused || hasValue;
    const Component = as === 'textarea' ? 'textarea' : 'input';

    return (
      <div className="relative">
        {/* Floating Label */}
        <motion.label
          htmlFor={props.id}
          className={cn(
            'absolute left-4 pointer-events-none transition-all duration-200',
            'text-muted-foreground',
            isFloating ? 'top-2 text-xs' : 'top-1/2 -translate-y-1/2 text-base',
            error && 'text-destructive',
            success && 'text-[var(--glow-success)]'
          )}
          animate={{
            y: isFloating ? 0 : 0,
            fontSize: isFloating ? '0.75rem' : '1rem',
          }}
          transition={{ duration: 0.2 }}
        >
          {label}
        </motion.label>

        {/* Input/Textarea */}
        <Component
          ref={ref as any}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={cn(
            'w-full rounded-lg backdrop-blur-sm transition-all duration-200',
            'bg-[var(--glass-bg)] border border-[var(--glass-border)]',
            'focus:outline-none focus:ring-2 focus:ring-offset-2',
            'disabled:cursor-not-allowed disabled:opacity-50',
            as === 'textarea' ? 'pt-7 pb-3 px-4 min-h-[120px] resize-none' : 'h-14 pt-6 pb-2 px-4',
            isFocused && 'border-primary/50 ring-primary/20',
            error && 'border-destructive ring-destructive/20',
            success && 'border-[var(--glow-success)] ring-[var(--glow-success)]/20',
            className
          )}
          {...(props as any)}
        />

        {/* Success/Error Icons */}
        <AnimatePresence>
          {(success || error) && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 10 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className={cn(
                'absolute right-4 top-1/2 -translate-y-1/2',
                as === 'textarea' && 'top-7'
              )}
            >
              {success && (
                <Check className="h-5 w-5 text-[var(--glow-success)]" />
              )}
              {error && (
                <AlertCircle className="h-5 w-5 text-destructive" />
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error Message with Shake */}
        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ 
                opacity: 1, 
                height: 'auto', 
                y: 0,
                x: [0, -10, 10, -10, 10, 0],
              }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ 
                x: { duration: 0.4, times: [0, 0.2, 0.4, 0.6, 0.8, 1] },
                default: { duration: 0.2 }
              }}
              className="mt-1.5 text-xs text-destructive px-1"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

FormField.displayName = 'FormField';

export { FormField };
