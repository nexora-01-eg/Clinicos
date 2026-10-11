import { useState } from 'react'
import { cn } from '@/utils/cn'

export interface AvatarProps {
  name: string
  src?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeMap = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-14 w-14 text-base',
} as const

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/)
  return parts
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join('')
}

export function Avatar({ name, src, size = 'md', className }: AvatarProps) {
  const [imgError, setImgError] = useState(false)

  if (src && !imgError) {
    return (
      <img
        src={src}
        alt={name}
        onError={() => setImgError(true)}
        className={cn('rounded-full object-cover', sizeMap[size], className)}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={name}
      className={cn(
        'flex items-center justify-center rounded-full bg-primary-100 font-semibold text-primary-700',
        sizeMap[size],
        className
      )}
    >
      {getInitials(name)}
    </div>
  )
}
