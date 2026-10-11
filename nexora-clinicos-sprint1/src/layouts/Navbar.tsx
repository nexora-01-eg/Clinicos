import { Bell, Moon, Sun, LogOut, Settings, WifiOff } from 'lucide-react'
import { Breadcrumb } from '@/components/common/Breadcrumb'
import { Avatar, Badge, Dropdown } from '@/components/ui'
import { useAuth } from '@/hooks/useAuth'
import { useTheme } from '@/hooks/useTheme'
import { useOnlineStatus } from '@/hooks/useOnlineStatus'

export function Navbar({ breadcrumb = ['Workspace', 'Dashboard'] }: { breadcrumb?: string[] }) {
  const { session, logout } = useAuth()
  const { mode, toggle } = useTheme()
  const connectivity = useOnlineStatus()

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b border-border bg-surface/95 px-4 backdrop-blur sm:px-6 lg:px-8">
      <Breadcrumb items={breadcrumb} />

      <div className="flex items-center gap-2 sm:gap-3">
        {connectivity === 'offline' && (
          <Badge variant="warning" className="hidden sm:inline-flex">
            <WifiOff className="h-3 w-3" /> Offline
          </Badge>
        )}

        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] text-text-muted transition-colors hover:bg-surface-sunken hover:text-text"
        >
          {mode === 'light' ? <Moon className="h-[18px] w-[18px]" /> : <Sun className="h-[18px] w-[18px]" />}
        </button>

        <button
          aria-label="Notifications"
          className="relative flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] text-text-muted transition-colors hover:bg-surface-sunken hover:text-text"
        >
          <Bell className="h-[18px] w-[18px]" />
          <span className="absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-secondary" />
        </button>

        <Dropdown>
          <Dropdown.Trigger>
            <div className="flex items-center gap-2 rounded-[var(--radius-md)] py-1 pl-1 pr-2 transition-colors hover:bg-surface-sunken">
              <Avatar name={session?.doctor.fullName ?? 'Doctor'} size="sm" />
              <span className="hidden text-sm font-medium text-text sm:inline">
                {session?.doctor.fullName ?? 'Doctor'}
              </span>
            </div>
          </Dropdown.Trigger>
          <Dropdown.Menu>
            <div className="px-3 py-2">
              <p className="text-sm font-semibold text-text">{session?.doctor.fullName}</p>
              <p className="text-xs text-text-subtle">{session?.doctor.clinicName}</p>
            </div>
            <div className="my-1 h-px bg-border" />
            <Dropdown.Item icon={<Settings className="h-4 w-4" />}>Settings</Dropdown.Item>
            <Dropdown.Item icon={<LogOut className="h-4 w-4" />} danger onClick={logout}>
              Sign out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </header>
  )
}
