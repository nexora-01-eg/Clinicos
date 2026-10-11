import { DB_NAME, DB_VERSION, STORE_DEFINITIONS } from './schema'

/**
 * getDatabase() lazily opens (and, on first run, provisions) the app's
 * IndexedDB database according to STORE_DEFINITIONS.
 *
 * Sprint 1 ships this as inert scaffolding — nothing in the current UI
 * calls it. It exists so future modules (Patients, Appointments,
 * Inventory) share one connection helper instead of each rolling their own.
 */
let dbPromise: Promise<IDBDatabase> | null = null

export function getDatabase(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise

  dbPromise = new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      reject(new Error('IndexedDB is not available in this environment.'))
      return
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION)

    request.onupgradeneeded = () => {
      const db = request.result
      for (const store of STORE_DEFINITIONS) {
        if (!db.objectStoreNames.contains(store.name)) {
          const objectStore = db.createObjectStore(store.name, {
            keyPath: store.keyPath,
            autoIncrement: store.autoIncrement ?? false,
          })
          store.indexes?.forEach((index) => {
            objectStore.createIndex(index.name, index.keyPath, { unique: index.unique ?? false })
          })
        }
      }
    }

    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })

  return dbPromise
}
