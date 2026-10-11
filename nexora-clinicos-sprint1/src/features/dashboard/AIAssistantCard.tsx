import { Sparkles } from 'lucide-react'
import { Card, CardContent, Badge } from '@/components/ui'

export function AIAssistantCard() {
  return (
    <Card className="border-primary-100 bg-primary-50/40">
      <CardContent className="flex flex-col items-start gap-3">
        <div className="flex w-full items-center justify-between">
          <span className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-primary text-white">
            <Sparkles className="h-[18px] w-[18px]" />
          </span>
          <Badge variant="primary">Coming soon</Badge>
        </div>
        <div>
          <p className="text-sm font-semibold text-text">AI Assistant</p>
          <p className="mt-1 text-sm text-text-subtle">
            A clinical copilot for chart summaries, intake notes, and scheduling suggestions is on the
            roadmap for a future release.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
