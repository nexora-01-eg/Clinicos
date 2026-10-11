import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui'
import { DynamicIcon } from '@/components/common/DynamicIcon'
import { QUICK_ACTIONS } from '@/data/dashboard.mock'

export function QuickActionsCard() {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Unlocks as each module ships</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {QUICK_ACTIONS.map((action) => (
            <button
              key={action.id}
              disabled={action.disabled}
              className="flex flex-col items-start gap-3 rounded-[var(--radius-md)] border border-border p-4 text-left transition-colors disabled:cursor-not-allowed disabled:opacity-50 enabled:hover:bg-surface-sunken"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-primary-50 text-primary">
                <DynamicIcon name={action.icon} className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium text-text">{action.label}</span>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
