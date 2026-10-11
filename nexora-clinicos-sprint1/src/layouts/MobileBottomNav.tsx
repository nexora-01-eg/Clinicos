import { NavLink } from 'react-router-dom'
import { DynamicIcon } from '@/components/common/DynamicIcon'
import { MOBILE_NAV } from '@/config/navigation'
import { cn } from '@/utils/cn'

export function MobileBottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 flex items-stretch justify-around border-t border-border bg-surface pb-[env(safe-area-inset-bottom)] lg:hidden">
      {MOBILE_NAV.map((item) =>
        item.disabled ? (
          <div
            key={item.id}
            className="flex flex-1 flex-col items-center gap-1 py-2.5 text-text-subtle/50"
            aria-disabled="true"
          >
            <DynamicIcon name={item.icon} className="h-5 w-5" />
            <span className="text-[10px] font-medium">{item.label}</span>
          </div>
        ) : (
          <NavLink
            key={item.id}
            to={item.href}
            end={item.href === '/'}
            className={({ isActive }) =>
              cn(
                'flex flex-1 flex-col items-center gap-1 py-2.5 text-text-subtle transition-colors',
                isActive && 'text-primary'
              )
            }
          >
            <DynamicIcon name={item.icon} className="h-5 w-5" />
            <span className="text-[10px] font-medium">{item.label}</span>
          </NavLink>
        )
      )}
    </nav>
  )
}
