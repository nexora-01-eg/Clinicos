import type { HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium',
  {
    variants: {
      variant: {
        neutral: 'bg-surface-sunken text-text-muted',
        primary: 'bg-primary-50 text-primary-700',
        secondary: 'bg-secondary-50 text-secondary-700',
        success: 'bg-success-50 text-secondary-700',
        warning: 'bg-warning-50 text-[#8a5a10]',
        danger: 'bg-danger-50 text-danger',
      },
    },
    defaultVariants: { variant: 'neutral' },
  }
)

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
  dot?: boolean
}

export function Badge({ className, variant, dot, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props}>
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />}
      {children}
    </span>
  )
}
