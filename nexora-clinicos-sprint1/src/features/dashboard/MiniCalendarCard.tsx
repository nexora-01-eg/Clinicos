import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui'
import { cn } from '@/utils/cn'

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

export function MiniCalendarCard() {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()
  const firstDayIndex = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const monthLabel = today.toLocaleDateString(undefined, { month: 'long', year: 'numeric' })

  const cells = [
    ...Array.from({ length: firstDayIndex }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]

  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Calendar</CardTitle>
          <CardDescription>{monthLabel}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-y-2 text-center">
          {WEEKDAYS.map((day, i) => (
            <span key={`${day}-${i}`} className="text-[11px] font-semibold text-text-subtle">
              {day}
            </span>
          ))}
          {cells.map((day, i) => (
            <span
              key={i}
              className={cn(
                'mx-auto flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium',
                day === today.getDate() ? 'bg-primary text-white' : day ? 'text-text hover:bg-surface-sunken' : ''
              )}
            >
              {day ?? ''}
            </span>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-text-subtle">
          Full scheduling arrives with the Appointments module.
        </p>
      </CardContent>
    </Card>
  )
}
