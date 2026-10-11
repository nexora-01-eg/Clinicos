import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge conditional class names and resolve Tailwind conflicts.
 * The single utility every component in NEXORA ClinicOS uses for className composition.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
