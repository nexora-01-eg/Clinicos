import { forwardRef, useId, type InputHTMLAttributes } from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/utils/cn'

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    const generatedId = useId()
    const checkboxId = id ?? generatedId
    return (
      <label htmlFor={checkboxId} className="flex cursor-pointer items-center gap-2.5 select-none">
        <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
          <input
            ref={ref}
            id={checkboxId}
            type="checkbox"
            className={cn('peer h-5 w-5 appearance-none rounded-[6px] border border-border bg-surface checked:border-primary checked:bg-primary', className)}
            {...props}
          />
          <Check className="pointer-events-none absolute h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100" />
        </span>
        {label && <span className="text-sm text-text-muted">{label}</span>}
      </label>
    )
  }
)
Checkbox.displayName = 'Checkbox'
