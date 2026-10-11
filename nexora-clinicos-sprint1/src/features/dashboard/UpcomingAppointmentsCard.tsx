import { CalendarDays } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Badge, EmptyState } from '@/components/ui'
import { UPCOMING_APPOINTMENTS } from '@/data/dashboard.mock'

const STATUS_VARIANT = { confirmed: 'success', pending: 'warning', cancelled: 'danger' } as const

export function UpcomingAppointmentsCard() {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Upcoming Appointments</CardTitle>
          <CardDescription>What's left on today's schedule</CardDescription>
        </div>
        <Badge variant="primary">{UPCOMING_APPOINTMENTS.length} today</Badge>
      </CardHeader>
      <CardContent>
        {UPCOMING_APPOINTMENTS.length === 0 ? (
          <EmptyState
            icon={<CalendarDays className="h-5 w-5" />}
            title="Nothing scheduled yet"
            description="Appointments booked for today will show up here."
          />
        ) : (
          <ul className="divide-y divide-border">
            {UPCOMING_APPOINTMENTS.map((appt) => (
              <li key={appt.id} className="flex items-center justify-between gap-4 py-3.5 first:pt-0 last:pb-0">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-text">{appt.patientName}</p>
                  <p className="truncate text-xs text-text-subtle">{appt.reason}</p>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <span className="text-xs font-medium text-text-muted">{appt.time}</span>
                  <Badge variant={STATUS_VARIANT[appt.status]}>{appt.status}</Badge>
                </div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}
