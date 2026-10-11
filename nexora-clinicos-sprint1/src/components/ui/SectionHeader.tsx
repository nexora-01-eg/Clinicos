import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

export interface SectionHeaderProps {
  title: string
  description?: string
  action?: ReactNode
  className?: string
}

export function SectionHeader({ title, description, action, className }: SectionHeaderProps) {
  return (
    <div className={cn('flex items-center justify-between gap-4', className)}>
      <div>
        <h2 className="text-base font-semibold tracking-tight text-text">{title}</h2>
        {description && <p className="mt-0.5 text-sm text-text-subtle">{description}</p>}
      </div>
      {action}
    </div>
  )
}
