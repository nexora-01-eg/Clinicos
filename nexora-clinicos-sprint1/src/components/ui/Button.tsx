import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { cn } from '@/utils/cn'

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap',
    'font-medium select-none',
    'transition-all duration-150 ease-[var(--ease-standard)]',
    'disabled:pointer-events-none disabled:opacity-40',
    'active:scale-[0.98]',
  ].join(' '),
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white shadow-[var(--shadow-soft-sm)] hover:bg-primary-700 hover:shadow-[var(--shadow-soft-md)]',
        secondary: 'bg-secondary text-white shadow-[var(--shadow-soft-sm)] hover:bg-secondary-600 hover:shadow-[var(--shadow-soft-md)]',
        outline: 'border border-border bg-surface text-text hover:bg-surface-sunken',
        ghost: 'text-text-muted hover:bg-surface-sunken hover:text-text',
        danger: 'bg-danger text-white shadow-[var(--shadow-soft-sm)] hover:brightness-95',
      },
      size: {
        sm: 'h-9 px-3.5 text-sm rounded-[var(--radius-sm)]',
        md: 'h-11 px-5 text-sm rounded-[var(--radius-md)]',
        lg: 'h-13 px-7 text-base rounded-[var(--radius-lg)]',
        icon: 'h-11 w-11 rounded-[var(--radius-md)]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'
