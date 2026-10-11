import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui'
import { DynamicIcon } from '@/components/common/DynamicIcon'
import { RECENT_ACTIVITY } from '@/data/dashboard.mock'

export function RecentActivityCard() {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>A live trace of what just happened</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ol className="space-y-5">
          {RECENT_ACTIVITY.map((item, i) => (
            <li key={item.id} className="flex gap-3.5">
              <div className="flex flex-col items-center">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary">
                  <DynamicIcon name={item.icon} className="h-4 w-4" />
                </span>
                {i < RECENT_ACTIVITY.length - 1 && <span className="mt-1 w-px flex-1 bg-border" />}
              </div>
              <div className="pb-1">
                <p className="text-sm font-medium text-text">{item.title}</p>
                <p className="text-xs text-text-subtle">{item.description}</p>
                <p className="mt-1 text-[11px] font-medium text-text-subtle/80">{item.timestamp}</p>
              </div>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}
