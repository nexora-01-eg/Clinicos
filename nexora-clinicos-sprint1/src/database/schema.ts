/**
 * NEXORA ClinicOS — IndexedDB schema (PREPARE ONLY).
 *
 * Sprint 1 does not read or write to IndexedDB. This file only reserves the
 * database name, version, and object store layout so that the Patients,
 * Appointments, and Inventory modules can implement against a stable
 * contract in later sprints without renegotiating structure.
 */

export const DB_NAME = 'nexora-clinicos-db'
export const DB_VERSION = 1

export type StoreName = 'patients' | 'appointments' | 'inventory' | 'invoices' | 'settings'

export interface StoreDefinition {
  name: StoreName
  keyPath: string
  autoIncrement?: boolean
  indexes?: { name: string; keyPath: string; unique?: boolean }[]
}

/** Reserved object store definitions. Not yet created on-disk. */
export const STORE_DEFINITIONS: StoreDefinition[] = [
  {
    name: 'patients',
    keyPath: 'id',
    indexes: [
      { name: 'by_name', keyPath: 'fullName' },
      { name: 'by_phone', keyPath: 'phone' },
    ],
  },
  {
    name: 'appointments',
    keyPath: 'id',
    indexes: [
      { name: 'by_date', keyPath: 'date' },
      { name: 'by_patient', keyPath: 'patientId' },
    ],
  },
  {
    name: 'inventory',
    keyPath: 'id',
    indexes: [{ name: 'by_sku', keyPath: 'sku', unique: true }],
  },
  {
    name: 'invoices',
    keyPath: 'id',
    indexes: [{ name: 'by_patient', keyPath: 'patientId' }],
  },
  {
    name: 'settings',
    keyPath: 'key',
  },
]
