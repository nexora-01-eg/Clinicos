import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, AlertCircle, AlertTriangle, Info, X } from 'lucide-react'
import { useToast } from '@/hooks/useToast'
import type { ToastVariant } from '@/contexts/ToastContext'
import { cn } from '@/utils/cn'

const ICONS: Record<ToastVariant, typeof CheckCircle2> = {
  success: CheckCircle2,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
}

const ACCENTS: Record<ToastVariant, string> = {
  success: 'text-secondary-600 bg-secondary-50',
  error: 'text-danger bg-danger-50',
  warning: 'text-[#8a5a10] bg-warning-50',
  info: 'text-primary-700 bg-primary-50',
}

export function ToastViewport() {
  const { toasts, dismissToast } = useToast()

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-[60] flex w-full max-w-sm flex-col gap-2 sm:bottom-6 sm:right-6">
      <AnimatePresence initial={false}>
        {toasts.map((toast) => {
          const Icon = ICONS[toast.variant]
          return (
            <motion.div
              key={toast.id}
              layout
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 24, scale: 0.96 }}
              transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
              className="pointer-events-auto flex items-start gap-3 rounded-[var(--radius-md)] border border-border bg-surface p-4 shadow-[var(--shadow-soft-lg)]"
            >
              <span className={cn('flex h-8 w-8 shrink-0 items-center justify-center rounded-full', ACCENTS[toast.variant])}>
                <Icon className="h-4 w-4" />
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-text">{toast.title}</p>
                {toast.description && <p className="mt-0.5 text-xs text-text-subtle">{toast.description}</p>}
              </div>
              <button
                onClick={() => dismissToast(toast.id)}
                aria-label="Dismiss notification"
                className="text-text-subtle hover:text-text"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}
