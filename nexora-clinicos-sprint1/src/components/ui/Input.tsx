import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/utils/cn'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hint?: string
  error?: string
  leadingIcon?: ReactNode
  trailingElement?: ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, hint, error, leadingIcon, trailingElement, id, ...props }, ref) => {
    const generatedId = useId()
    const inputId = id ?? generatedId

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-text">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {leadingIcon && (
            <span className="pointer-events-none absolute left-3.5 text-text-subtle">{leadingIcon}</span>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              'h-11 w-full rounded-[var(--radius-md)] border bg-surface px-3.5 text-sm text-text',
              'placeholder:text-text-subtle',
              'transition-colors duration-150',
              'border-border focus-visible:border-primary-300',
              error && 'border-danger focus-visible:border-danger',
              leadingIcon && 'pl-10',
              trailingElement && 'pr-11',
              className
            )}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
            {...props}
          />
          {trailingElement && <span className="absolute right-3.5">{trailingElement}</span>}
        </div>
        {error ? (
          <p id={`${inputId}-error`} className="text-xs font-medium text-danger">
            {error}
          </p>
        ) : hint ? (
          <p id={`${inputId}-hint`} className="text-xs text-text-subtle">
            {hint}
          </p>
        ) : null}
      </div>
    )
  }
)
Input.displayName = 'Input'
