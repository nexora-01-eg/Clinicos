import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Stethoscope, Building2, ShieldCheck, Activity, Users } from 'lucide-react'
import { LogoMark } from '@/components/common/LogoMark'
import { OfflineBanner } from '@/components/common/OfflineBanner'
import { Button, Input, Checkbox } from '@/components/ui'
import { useAuth } from '@/hooks/useAuth'
import { APP_CONFIG } from '@/config/app.config'

const HERO_POINTS = [
  { icon: Activity, text: 'Runs fully offline — your clinic never stops for a bad connection.' },
  { icon: ShieldCheck, text: 'All records stay on this device. Nothing leaves without you.' },
  { icon: Users, text: 'Built around how a real visit day actually flows.' },
]

export function LoginPage() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [fullName, setFullName] = useState('')
  const [clinicName, setClinicName] = useState('')
  const [rememberDevice, setRememberDevice] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setIsSubmitting(true)
    window.setTimeout(() => {
      login({ fullName, clinicName, rememberDevice })
      navigate('/', { replace: true })
    }, 500)
  }

  return (
    <div className="grid min-h-dvh grid-cols-1 lg:grid-cols-2">
      {/* Hero — desktop only, the characteristic thesis panel */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-primary p-12 text-white lg:flex">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full border border-white/10" />
          <div className="absolute -bottom-32 -right-16 h-[420px] w-[420px] rounded-full border border-white/10" />
        </div>

        <div className="relative flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-white">
            <LogoMark size={26} />
          </div>
          <span className="text-lg font-semibold tracking-tight">NEXORA ClinicOS</span>
        </div>

        <div className="relative max-w-md">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
            className="text-4xl font-semibold leading-tight tracking-tight"
          >
            Your clinic's day, organized before it begins.
          </motion.h1>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            {APP_CONFIG.tagline} — an offline-first operating system for the practice, not another
            dashboard to check.
          </p>

          <ul className="mt-9 space-y-4">
            {HERO_POINTS.map(({ icon: Icon, text }, i) => (
              <motion.li
                key={text}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08, ease: [0.2, 0, 0, 1] }}
                className="flex items-start gap-3 text-sm text-white/85"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                {text}
              </motion.li>
            ))}
          </ul>
        </div>

        <p className="relative text-xs text-white/50">{APP_CONFIG.edition} · Installed &amp; running locally</p>
      </div>

      {/* Form panel */}
      <div className="flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-16">
        <div className="mx-auto w-full max-w-sm">
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-primary-50">
              <LogoMark size={26} />
            </div>
            <span className="text-lg font-semibold tracking-tight text-text">NEXORA ClinicOS</span>
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-text">Welcome back, doctor</h2>
          <p className="mt-1.5 text-sm text-text-subtle">
            Sign in to open today's schedule. No internet required.
          </p>

          <OfflineBanner className="mt-5" />

          <form onSubmit={handleSubmit} className="mt-7 space-y-5">
            <Input
              label="Doctor name"
              placeholder="Dr. Sarah Whitfield"
              autoComplete="name"
              leadingIcon={<Stethoscope className="h-4 w-4" />}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <Input
              label="Clinic name"
              placeholder="Whitfield Family Clinic"
              autoComplete="organization"
              leadingIcon={<Building2 className="h-4 w-4" />}
              value={clinicName}
              onChange={(e) => setClinicName(e.target.value)}
            />

            <div className="flex items-center justify-between">
              <Checkbox
                label="Remember this device"
                checked={rememberDevice}
                onChange={(e) => setRememberDevice(e.target.checked)}
              />
            </div>

            <Button type="submit" size="lg" className="w-full" isLoading={isSubmitting}>
              {isSubmitting ? 'Signing in' : 'Sign in'}
            </Button>
          </form>

          <p className="mt-8 text-center text-xs text-text-subtle">
            {APP_CONFIG.name} {APP_CONFIG.edition} — all data stays on this device.
          </p>
        </div>
      </div>
    </div>
  )
}
