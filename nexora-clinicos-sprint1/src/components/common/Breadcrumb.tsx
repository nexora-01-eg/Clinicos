import { Fragment } from 'react'
import { ChevronRight } from 'lucide-react'

export function Breadcrumb({ items }: { items: string[] }) {
  return (
    <ol className="flex items-center gap-1.5 text-sm">
      {items.map((item, i) => (
        <Fragment key={item}>
          {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-text-subtle" />}
          <li className={i === items.length - 1 ? 'font-medium text-text' : 'text-text-subtle'}>{item}</li>
        </Fragment>
      ))}
    </ol>
  )
}
