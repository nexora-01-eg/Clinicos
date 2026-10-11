import type { NavItem } from '@/types'

/**
 * Only Dashboard is enabled in Sprint 1. The rest are declared now so the
 * navigation shell doesn't need to change shape when Patients,
 * Appointments, Inventory, and Reports land in later sprints — they simply
 * flip `disabled: false`.
 */
export const PRIMARY_NAV: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', href: '/', icon: 'LayoutDashboard' },
  { id: 'patients', label: 'Patients', href: '/patients', icon: 'Users', disabled: true },
  { id: 'appointments', label: 'Appointments', href: '/appointments', icon: 'CalendarDays', disabled: true },
  { id: 'inventory', label: 'Inventory', href: '/inventory', icon: 'Package', disabled: true },
  { id: 'reports', label: 'Reports', href: '/reports', icon: 'BarChart3', disabled: true },
]

export const SECONDARY_NAV: NavItem[] = [
  { id: 'settings', label: 'Settings', href: '/settings', icon: 'Settings', disabled: true },
]

/** Bottom nav on mobile shows a focused subset — never more than 5 items. */
export const MOBILE_NAV: NavItem[] = [
  { id: 'dashboard', label: 'Home', href: '/', icon: 'LayoutDashboard' },
  { id: 'patients', label: 'Patients', href: '/patients', icon: 'Users', disabled: true },
  { id: 'appointments', label: 'Schedule', href: '/appointments', icon: 'CalendarDays', disabled: true },
  { id: 'inventory', label: 'Inventory', href: '/inventory', icon: 'Package', disabled: true },
  { id: 'settings', label: 'Settings', href: '/settings', icon: 'Settings', disabled: true },
]
