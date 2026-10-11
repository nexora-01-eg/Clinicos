import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

export function PageContainer({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('mx-auto w-full max-w-[1400px] px-4 pb-24 pt-6 sm:px-6 lg:px-8 lg:pb-10', className)}>
      {children}
    </div>
  )
}
