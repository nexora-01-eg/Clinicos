import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { DynamicIcon } from '@/components/common/DynamicIcon'
import { Card } from '@/components/ui'
import type { StatCardData } from '@/types'
import { cn } from '@/utils/cn'

const ACCENT_STYLES = {
  primary: 'bg-primary-50 text-primary',
  secondary: 'bg-secondary-50 text-secondary-700',
  warning: 'bg-warning-50 text-[#8a5a10]',
  danger: 'bg-danger-50 text-danger',
} as const

const TREND_ICON = { up: TrendingUp, down: TrendingDown, flat: Minus } as const
const TREND_COLOR = {
  up: 'text-secondary-700',
  down: 'text-danger',
  flat: 'text-text-subtle',
} as const

export function StatCard({ data, index = 0 }: { data: StatCardData; index?: number }) {
  const TrendIcon = data.delta ? TREND_ICON[data.delta.trend] : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05, ease: [0.2, 0, 0, 1] }}
    >
      <Card className="p-6 hover:shadow-[var(--shadow-soft-md)]">
        <div className="flex items-start justify-between">
          <span className={cn('flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)]', ACCENT_STYLES[data.accent])}>
            <DynamicIcon name={data.icon} className="h-[18px] w-[18px]" />
          </span>
        </div>
        <p className="mt-5 text-2xl font-semibold tracking-tight text-text">{data.value}</p>
        <p className="mt-1 text-sm text-text-subtle">{data.label}</p>
        {data.delta && TrendIcon && (
          <p className={cn('mt-3 flex items-center gap-1 text-xs font-medium', TREND_COLOR[data.delta.trend])}>
            <TrendIcon className="h-3.5 w-3.5" />
            {data.delta.value}
          </p>
        )}
      </Card>
    </motion.div>
  )
}
