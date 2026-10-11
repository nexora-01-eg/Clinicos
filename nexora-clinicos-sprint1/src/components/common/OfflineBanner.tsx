import { WifiOff } from 'lucide-react'
import { useOnlineStatus } from '@/hooks/useOnlineStatus'
import { cn } from '@/utils/cn'

export function OfflineBanner({ className }: { className?: string }) {
  const status = useOnlineStatus()
  if (status === 'online') return null

  return (
    <div
      className={cn(
        'flex items-center justify-center gap-2 rounded-[var(--radius-md)] bg-warning-50 px-4 py-2.5 text-sm font-medium text-[#8a5a10]',
        className
      )}
      role="status"
    >
      <WifiOff className="h-4 w-4" />
      You're offline — NEXORA ClinicOS keeps working. Changes sync automatically once you're back online.
    </div>
  )
}
