import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/utils/cn'

interface DropdownContextValue {
  open: boolean
  setOpen: (open: boolean) => void
}
const DropdownContext = createContext<DropdownContextValue | null>(null)

export function Dropdown({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div ref={rootRef} className="relative inline-block">
        {children}
      </div>
    </DropdownContext.Provider>
  )
}

function useDropdown() {
  const ctx = useContext(DropdownContext)
  if (!ctx) throw new Error('Dropdown.Trigger/Menu must be used within <Dropdown>')
  return ctx
}

Dropdown.Trigger = function DropdownTrigger({ children }: { children: ReactNode }) {
  const { open, setOpen } = useDropdown()
  return (
    <div onClick={() => setOpen(!open)} className="cursor-pointer">
      {children}
    </div>
  )
}

Dropdown.Menu = function DropdownMenu({
  children,
  align = 'end',
  className,
}: {
  children: ReactNode
  align?: 'start' | 'end'
  className?: string
}) {
  const { open } = useDropdown()
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -6, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.98 }}
          transition={{ duration: 0.15, ease: [0.2, 0, 0, 1] }}
          className={cn(
            'absolute z-40 mt-2 min-w-[200px] rounded-[var(--radius-md)] border border-border bg-surface p-1.5',
            'shadow-[var(--shadow-soft-md)]',
            align === 'end' ? 'right-0' : 'left-0',
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

Dropdown.Item = function DropdownItem({
  children,
  onClick,
  danger,
  icon,
}: {
  children: ReactNode
  onClick?: () => void
  danger?: boolean
  icon?: ReactNode
}) {
  const { setOpen } = useDropdown()
  return (
    <button
      onClick={() => {
        onClick?.()
        setOpen(false)
      }}
      className={cn(
        'flex w-full items-center gap-2.5 rounded-[var(--radius-sm)] px-3 py-2 text-left text-sm transition-colors',
        danger ? 'text-danger hover:bg-danger-50' : 'text-text hover:bg-surface-sunken'
      )}
    >
      {icon}
      {children}
    </button>
  )
}
