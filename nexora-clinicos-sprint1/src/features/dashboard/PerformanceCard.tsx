import { BarChart3 } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, EmptyState, Badge } from '@/components/ui'

export function PerformanceCard() {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Performance</CardTitle>
          <CardDescription>Visit volume and revenue trends</CardDescription>
        </div>
        <Badge variant="neutral">Reports · Soon</Badge>
      </CardHeader>
      <CardContent>
        <EmptyState
          icon={<BarChart3 className="h-5 w-5" />}
          title="Trend charts are on the way"
          description="Once the Reports module ships, this card will chart patient volume, revenue, and visit types over time."
        />
      </CardContent>
    </Card>
  )
}
