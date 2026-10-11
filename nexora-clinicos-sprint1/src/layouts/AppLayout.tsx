import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Navbar } from './Navbar'
import { MobileBottomNav } from './MobileBottomNav'
import { ToastViewport } from '@/components/ui/Toast'

export function AppLayout() {
  return (
    <div className="flex min-h-dvh bg-background">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
      <MobileBottomNav />
      <ToastViewport />
    </div>
  )
}
