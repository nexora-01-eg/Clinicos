import { cn } from '@/utils/cn'

export interface LogoMarkProps {
  size?: number
  className?: string
  monochrome?: boolean
}

/**
 * Signature element for NEXORA ClinicOS: a heartbeat trace that resolves
 * into a medical cross at its peak — the one motif reused across the
 * splash screen, login hero, and sidebar so the brand reads as a single
 * considered idea rather than a generic clip-art cross.
 */
export function LogoMark({ size = 40, className, monochrome }: LogoMarkProps) {
  const primary = monochrome ? 'currentColor' : 'var(--color-primary)'
  const secondary = monochrome ? 'currentColor' : 'var(--color-secondary)'

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      role="img"
      aria-label="NEXORA ClinicOS"
    >
      <rect width="48" height="48" rx="14" fill={monochrome ? 'transparent' : 'var(--color-primary-50)'} />
      <path
        d="M6 26h6.5l3-8 5 18 4-24 3.5 14H42"
        stroke={primary}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="35" cy="26" r="3.2" fill={secondary} />
    </svg>
  )
}
