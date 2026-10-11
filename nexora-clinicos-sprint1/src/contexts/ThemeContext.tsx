import { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { storageService, STORAGE_KEYS } from '@/services/storage.service'
import type { ThemeMode } from '@/types'

interface ThemeContextValue {
  mode: ThemeMode
  toggle: () => void
  setMode: (mode: ThemeMode) => void
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

function getInitialMode(): ThemeMode {
  const stored = storageService.get<ThemeMode>(STORAGE_KEYS.theme)
  if (stored) return stored
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>(getInitialMode)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', mode === 'dark')
    storageService.set(STORAGE_KEYS.theme, mode)
  }, [mode])

  const setMode = useCallback((next: ThemeMode) => setModeState(next), [])
  const toggle = useCallback(() => setModeState((m) => (m === 'light' ? 'dark' : 'light')), [])

  const value = useMemo(() => ({ mode, toggle, setMode }), [mode, toggle, setMode])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
