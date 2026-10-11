import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { SplashScreen } from '@/components/common/SplashScreen'
import { AppLayout } from '@/layouts/AppLayout'
import { ProtectedRoute } from '@/app/ProtectedRoute'
import { LoginPage } from '@/pages/LoginPage'
import { DashboardPage } from '@/pages/DashboardPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

export function App() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <>
      {showSplash && <SplashScreen onFinished={() => setShowSplash(false)} />}
      {!showSplash && (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={<DashboardPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}
    </>
  )
}
