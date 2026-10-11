import { storageService, STORAGE_KEYS } from './storage.service'
import type { AuthSession, Doctor } from '@/types'

/**
 * There is no backend in V1. "Login" simply confirms a local doctor
 * profile and starts a session stored in localStorage. This keeps the
 * shape realistic so a future sync layer can slot in without changing
 * how the UI calls this service.
 */

const DEMO_DOCTOR: Doctor = {
  id: 'doc_local_001',
  fullName: 'Dr. Sarah Whitfield',
  clinicName: 'Whitfield Family Clinic',
  specialty: 'General Practice',
}

export const authService = {
  getSession(): AuthSession | null {
    return storageService.get<AuthSession>(STORAGE_KEYS.session)
  },

  login(input: { fullName?: string; clinicName?: string; rememberDevice: boolean }): AuthSession {
    const session: AuthSession = {
      doctor: {
        ...DEMO_DOCTOR,
        fullName: input.fullName?.trim() || DEMO_DOCTOR.fullName,
        clinicName: input.clinicName?.trim() || DEMO_DOCTOR.clinicName,
      },
      rememberDevice: input.rememberDevice,
      loggedInAt: new Date().toISOString(),
    }
    storageService.set(STORAGE_KEYS.session, session)
    return session
  },

  logout(): void {
    storageService.remove(STORAGE_KEYS.session)
  },
} as const
