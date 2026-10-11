import { NavLink } from 'react-router-dom'
import { LogoMark } from '@/components/common/LogoMark'
import { DynamicIcon } from '@/components/common/DynamicIcon'
import { PRIMARY_NAV, SECONDARY_NAV } from '@/config/navigation'
import { APP_CONFIG } from '@/config/app.config'
import { cn } from '@/utils/cn'

export function Sidebar() {
  return (
    <aside className="hidden w-[264px] shrink-0 flex-col border-r border-border bg-surface lg:flex">
      <div className="flex items-center gap-2.5 px-6 py-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-primary-50">
          <LogoMark size={22} />
        </div>
        <div className="leading-tight">
          <p className="text-sm font-semibold tracking-tight text-text">{APP_CONFIG.name}</p>
          <p className="text-[11px] font-medium text-text-subtle">{APP_CONFIG.edition}</p>
        </div>
      </div>

      <nav className="flex-1 space-y-6 overflow-y-auto px-3 pb-6">
        <div className="space-y-1">
          <p className="px-3 text-[11px] font-semibold uppercase tracking-wider text-text-subtle">Workspace</p>
          {PRIMARY_NAV.map((item) => (
            <NavRow key={item.id} {...item} />
          ))}
        </div>

        <div className="space-y-1">
          <p className="px-3 text-[11px] font-semibold uppercase tracking-wider text-text-subtle">System</p>
          {SECONDARY_NAV.map((item) => (
            <NavRow key={item.id} {...item} />
          ))}
        </div>
      </nav>

      <div className="border-t border-border p-4">
        <div className="rounded-[var(--radius-md)] bg-surface-sunken p-4">
          <p className="text-xs font-semibold text-text">More modules, coming soon</p>
          <p className="mt-1 text-xs text-text-subtle">
            Patients, Appointments, Inventory, and Reports arrive in upcoming sprints.
          </p>
        </div>
      </div>
    </aside>
  )
}

function NavRow({ label, href, icon, disabled }: (typeof PRIMARY_NAV)[number]) {
  if (disabled) {
    return (
      <div
        className="flex cursor-not-allowed items-center justify-between rounded-[var(--radius-sm)] px-3 py-2.5 text-sm text-text-subtle/70"
        aria-disabled="true"
      >
        <span className="flex items-center gap-3">
          <DynamicIcon name={icon} className="h-[18px] w-[18px]" />
          {label}
        </span>
        <span className="rounded-full bg-surface-sunken px-2 py-0.5 text-[10px] font-medium text-text-subtle">
          Soon
        </span>
      </div>
    )
  }

  return (
    <NavLink
      to={href}
      end={href === '/'}
      className={({ isActive }) =>
        cn(
          'flex items-center gap-3 rounded-[var(--radius-sm)] px-3 py-2.5 text-sm font-medium transition-colors',
          isActive ? 'bg-primary-50 text-primary-700' : 'text-text-muted hover:bg-surface-sunken hover:text-text'
        )
      }
    >
      <DynamicIcon name={icon} className="h-[18px] w-[18px]" />
      {label}
    </NavLink>
  )
}
