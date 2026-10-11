import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LogoMark } from '@/components/common/LogoMark'

export function SplashScreen({ onFinished }: { onFinished: () => void }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1500)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence onExitComplete={onFinished}>
      {visible && (
        <motion.div
          key="splash"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary"
        >
          {/* Subtle medical-field backdrop: faint concentric rings, no gradient */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
            <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
            <div className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
            className="relative flex h-20 w-20 items-center justify-center rounded-[var(--radius-lg)] bg-white shadow-[var(--shadow-soft-lg)]"
          >
            <LogoMark size={44} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.2, 0, 0, 1] }}
            className="relative mt-5 text-center"
          >
            <p className="text-xl font-semibold tracking-tight text-white">
              NEXORA <span className="font-normal text-white/80">ClinicOS</span>
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-white/60">
              Smart Clinic Management
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="relative mt-9 flex items-center gap-1.5"
            role="status"
            aria-label="Loading"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-white/70"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
