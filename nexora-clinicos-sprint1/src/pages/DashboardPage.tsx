import { motion } from 'framer-motion'
import { PageContainer, SectionHeader } from '@/components/ui'
import { StatCard } from '@/features/dashboard/StatCard'
import { UpcomingAppointmentsCard } from '@/features/dashboard/UpcomingAppointmentsCard'
import { RecentActivityCard } from '@/features/dashboard/RecentActivityCard'
import { QuickActionsCard } from '@/features/dashboard/QuickActionsCard'
import { MiniCalendarCard } from '@/features/dashboard/MiniCalendarCard'
import { PerformanceCard } from '@/features/dashboard/PerformanceCard'
import { AIAssistantCard } from '@/features/dashboard/AIAssistantCard'
import { DASHBOARD_STATS } from '@/data/dashboard.mock'
import { useAuth } from '@/hooks/useAuth'

export function DashboardPage() {
  const { session } = useAuth()
  const firstName = session?.doctor.fullName.split(' ').slice(-1)[0] ?? 'Doctor'
  const today = new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })

  return (
    <PageContainer>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <SectionHeader
          title={`Good to see you, Dr. ${firstName}`}
          description={today}
          className="mb-6"
        />
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {DASHBOARD_STATS.map((stat, i) => (
          <StatCard key={stat.id} data={stat} index={i} />
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-2">
          <UpcomingAppointmentsCard />
          <PerformanceCard />
        </div>
        <div className="space-y-6">
          <QuickActionsCard />
          <MiniCalendarCard />
          <AIAssistantCard />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1">
        <RecentActivityCard />
      </div>
    </PageContainer>
  )
}
