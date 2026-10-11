import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

export interface EmptyStateProps {
  icon: ReactNode
  title: string
  description?: string
  action?: ReactNode
  className?: string
}

export function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center gap-3 px-6 py-12 text-center', className)}>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary">
        {icon}
      </div>
      <div className="space-y-1">
        <p className="text-sm font-semibold text-text">{title}</p>
        {description && <p className="max-w-xs text-sm text-text-subtle">{description}</p>}
      </div>
      {action}
    </div>
  )
}
