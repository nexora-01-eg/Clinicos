/**
 * NEXORA ClinicOS — application-wide configuration.
 * Sprint 1 keeps this intentionally small. Later sprints (Patients,
 * Appointments, Inventory, Reports) will extend `features` rather than
 * introduce a second config source.
 */

export const APP_CONFIG = {
  name: 'NEXORA ClinicOS',
  shortName: 'ClinicOS',
  edition: 'V1 Free Edition',
  tagline: 'Smart Clinic Management System',
  themeColor: '#0F4C81',
  backgroundColor: '#F6F9FC',
} as const

export const FEATURE_FLAGS = {
  patients: false,
  appointments: false,
  inventory: false,
  reports: false,
  aiAssistant: false,
} as const

export type FeatureFlagKey = keyof typeof FEATURE_FLAGS
