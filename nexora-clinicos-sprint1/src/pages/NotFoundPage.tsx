import { useNavigate } from 'react-router-dom'
import { Compass } from 'lucide-react'
import { Button, EmptyState } from '@/components/ui'

export function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-6">
      <EmptyState
        icon={<Compass className="h-6 w-6" />}
        title="This page isn't built yet"
        description="This part of NEXORA ClinicOS ships in an upcoming sprint."
        action={<Button onClick={() => navigate('/')}>Back to Dashboard</Button>}
      />
    </div>
  )
}
