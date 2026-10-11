import type { HTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

export function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-[var(--radius-sm)] bg-surface-sunken', className)}
      {...props}
    />
  )
}

/** Preset shaped for a StatCard while its data resolves. */
export function StatCardSkeleton() {
  return (
    <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-6">
      <div className="flex items-start justify-between">
        <Skeleton className="h-9 w-9 rounded-[var(--radius-sm)]" />
        <Skeleton className="h-5 w-12 rounded-full" />
      </div>
      <Skeleton className="mt-5 h-7 w-20" />
      <Skeleton className="mt-2 h-4 w-28" />
    </div>
  )
}
