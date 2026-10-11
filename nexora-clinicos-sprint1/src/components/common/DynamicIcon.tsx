import * as Icons from 'lucide-react'
import type { ComponentType } from 'react'
import type { LucideProps } from 'lucide-react'

export function DynamicIcon({ name, ...props }: { name: keyof typeof Icons } & LucideProps) {
  const Icon = Icons[name] as ComponentType<LucideProps>
  if (!Icon) return null
  return <Icon {...props} />
}
