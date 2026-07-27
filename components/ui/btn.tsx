import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'danger'
type Size = 'sm' | 'md' | 'lg' | 'icon'

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all outline-none focus-visible:ring-3 focus-visible:ring-ring/40 disabled:opacity-50 disabled:pointer-events-none active:translate-y-px cursor-pointer [&_svg]:size-4 [&_svg]:shrink-0'

const variants: Record<Variant, string> = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-sm',
  outline: 'border border-border bg-card text-foreground hover:bg-muted',
  ghost: 'text-muted-foreground hover:bg-muted hover:text-foreground',
  white: 'bg-card text-primary hover:bg-card/90 shadow-sm',
  danger: 'bg-danger text-danger-foreground hover:bg-danger/90 shadow-sm',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3.5 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
  icon: 'size-10',
}

export function btnClass({
  variant = 'primary',
  size = 'md',
  className,
}: {
  variant?: Variant
  size?: Size
  className?: string
} = {}) {
  return cn(base, variants[variant], sizes[size], className)
}

export function Btn({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ComponentProps<'button'> & { variant?: Variant; size?: Size }) {
  return (
    <button className={btnClass({ variant, size, className })} {...props}>
      {children}
    </button>
  )
}

export function BtnLink({
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ComponentProps<typeof Link> & {
  href: string
  variant?: Variant
  size?: Size
  children: ReactNode
}) {
  return (
    <Link href={href} className={btnClass({ variant, size, className })} {...props}>
      {children}
    </Link>
  )
}
