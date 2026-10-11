/** Shared, cross-cutting types for Sprint 1. Feature-specific types
 *  (Patient, Appointment, InventoryItem...) will live inside their own
 *  feature folder once those modules are built. */

export interface Doctor {
  id: string
  fullName: string
  clinicName: string
  specialty?: string
  avatarUrl?: string
}

export interface AuthSession {
  doctor: Doctor
  rememberDevice: boolean
  loggedInAt: string
}

export type ThemeMode = 'light' | 'dark'

export interface NavItem {
  id: string
  label: string
  href: string
  icon: keyof typeof import('lucide-react')
  disabled?: boolean
  badge?: number
}

export interface StatCardData {
  id: string
  label: string
  value: string | number
  delta?: {
    value: string
    trend: 'up' | 'down' | 'flat'
  }
  icon: keyof typeof import('lucide-react')
  accent: 'primary' | 'secondary' | 'warning' | 'danger'
}

export interface ActivityItem {
  id: string
  title: string
  description: string
  timestamp: string
  icon: keyof typeof import('lucide-react')
}

export interface AppointmentPreview {
  id: string
  patientName: string
  time: string
  reason: string
  status: 'confirmed' | 'pending' | 'cancelled'
}

export type ConnectivityState = 'online' | 'offline'
