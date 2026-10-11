import type { StatCardData, ActivityItem, AppointmentPreview } from '@/types'

export const DASHBOARD_STATS: StatCardData[] = [
  {
    id: 'today-patients',
    label: "Today's Patients",
    value: 18,
    delta: { value: '+4 vs yesterday', trend: 'up' },
    icon: 'Users',
    accent: 'primary',
  },
  {
    id: 'today-appointments',
    label: "Today's Appointments",
    value: 24,
    delta: { value: '6 remaining', trend: 'flat' },
    icon: 'CalendarClock',
    accent: 'secondary',
  },
  {
    id: 'new-patients',
    label: 'New Patients (7d)',
    value: 9,
    delta: { value: '+2 this week', trend: 'up' },
    icon: 'UserPlus',
    accent: 'primary',
  },
  {
    id: 'revenue',
    label: 'Revenue (Today)',
    value: '$3,240',
    delta: { value: '-3% vs avg', trend: 'down' },
    icon: 'Wallet',
    accent: 'warning',
  },
]

export const UPCOMING_APPOINTMENTS: AppointmentPreview[] = [
  { id: 'a1', patientName: 'Emily Carter', time: '9:30 AM', reason: 'Annual physical', status: 'confirmed' },
  { id: 'a2', patientName: 'Marcus Lee', time: '10:15 AM', reason: 'Follow-up · blood pressure', status: 'confirmed' },
  { id: 'a3', patientName: 'Priya Nair', time: '11:00 AM', reason: 'New patient intake', status: 'pending' },
  { id: 'a4', patientName: 'Daniel Osei', time: '1:30 PM', reason: 'Vaccination', status: 'confirmed' },
  { id: 'a5', patientName: 'Grace Kim', time: '2:45 PM', reason: 'Lab results review', status: 'cancelled' },
]

export const RECENT_ACTIVITY: ActivityItem[] = [
  {
    id: 'act1',
    title: 'Visit completed',
    description: 'Marcus Lee · routine follow-up closed out',
    timestamp: '12 min ago',
    icon: 'CheckCircle2',
  },
  {
    id: 'act2',
    title: 'New patient registered',
    description: 'Priya Nair added to the roster',
    timestamp: '48 min ago',
    icon: 'UserPlus',
  },
  {
    id: 'act3',
    title: 'Appointment rescheduled',
    description: 'Grace Kim moved from Tue to Thu',
    timestamp: '1 hr ago',
    icon: 'CalendarClock',
  },
  {
    id: 'act4',
    title: 'Invoice settled',
    description: '$180 payment recorded for Daniel Osei',
    timestamp: '2 hr ago',
    icon: 'Receipt',
  },
]

export const QUICK_ACTIONS = [
  { id: 'qa1', label: 'New Patient', icon: 'UserPlus' as const, disabled: true },
  { id: 'qa2', label: 'Book Appointment', icon: 'CalendarPlus' as const, disabled: true },
  { id: 'qa3', label: 'Record Payment', icon: 'Receipt' as const, disabled: true },
  { id: 'qa4', label: 'Add Inventory', icon: 'PackagePlus' as const, disabled: true },
]
