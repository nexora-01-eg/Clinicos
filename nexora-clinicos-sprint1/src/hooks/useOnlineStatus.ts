import { useEffect, useState } from 'react'
import type { ConnectivityState } from '@/types'

export function useOnlineStatus(): ConnectivityState {
  const [status, setStatus] = useState<ConnectivityState>(
    typeof navigator !== 'undefined' && navigator.onLine === false ? 'offline' : 'online'
  )

  useEffect(() => {
    const goOnline = () => setStatus('online')
    const goOffline = () => setStatus('offline')
    window.addEventListener('online', goOnline)
    window.addEventListener('offline', goOffline)
    return () => {
      window.removeEventListener('online', goOnline)
      window.removeEventListener('offline', goOffline)
    }
  }, [])

  return status
}
