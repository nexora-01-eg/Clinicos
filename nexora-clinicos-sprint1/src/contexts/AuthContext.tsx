import { createContext, useCallback, useMemo, useState, type ReactNode } from 'react'
import { authService } from '@/services/auth.service'
import type { AuthSession } from '@/types'

interface AuthContextValue {
  session: AuthSession | null
  isAuthenticated: boolean
  login: (input: { fullName?: string; clinicName?: string; rememberDevice: boolean }) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<AuthSession | null>(() => authService.getSession())

  const login = useCallback<AuthContextValue['login']>((input) => {
    const next = authService.login(input)
    setSession(next)
  }, [])

  const logout = useCallback(() => {
    authService.logout()
    setSession(null)
  }, [])

  const value = useMemo<AuthContextValue>(
    () => ({ session, isAuthenticated: Boolean(session), login, logout }),
    [session, login, logout]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
