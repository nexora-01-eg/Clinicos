import { type ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { cn } from '@/utils/cn'

export interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  description?: string
  children: ReactNode
  className?: string
}

export function Modal({ open, onClose, title, description, children, className }: ModalProps) {
  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            className="absolute inset-0 bg-[#0b1420]/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? 'modal-title' : undefined}
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
            className={cn(
              'relative z-10 w-full max-w-md rounded-[var(--radius-lg)] bg-surface p-6',
              'shadow-[var(--shadow-soft-lg)]',
              className
            )}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                {title && (
                  <h2 id="modal-title" className="text-lg font-semibold text-text">
                    {title}
                  </h2>
                )}
                {description && <p className="mt-1 text-sm text-text-subtle">{description}</p>}
              </div>
              <button
                onClick={onClose}
                aria-label="Close dialog"
                className="rounded-full p-1.5 text-text-subtle transition-colors hover:bg-surface-sunken hover:text-text"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  )
}
