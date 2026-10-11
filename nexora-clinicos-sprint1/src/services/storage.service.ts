/**
 * Typed wrapper around window.localStorage.
 * Used today for auth session + theme preference. Keys are namespaced so
 * future modules can add their own without collisions.
 */

const NAMESPACE = 'nexora'

const key = (name: string) => `${NAMESPACE}:${name}`

export const storageService = {
  get<T>(name: string): T | null {
    try {
      const raw = window.localStorage.getItem(key(name))
      return raw ? (JSON.parse(raw) as T) : null
    } catch {
      return null
    }
  },

  set<T>(name: string, value: T): void {
    try {
      window.localStorage.setItem(key(name), JSON.stringify(value))
    } catch {
      // Storage may be unavailable (private mode, quota exceeded). Fail silently;
      // the app should never crash because a preference couldn't persist.
    }
  },

  remove(name: string): void {
    try {
      window.localStorage.removeItem(key(name))
    } catch {
      /* noop */
    }
  },
} as const

export const STORAGE_KEYS = {
  session: 'auth-session',
  theme: 'theme-mode',
  rememberDevice: 'remember-device',
} as const
