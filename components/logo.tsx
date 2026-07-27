import { ScanEye } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  showText = true,
  size = 'md',
}: {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
}) {
  const box = size === 'sm' ? 'size-8' : size === 'lg' ? 'size-11' : 'size-9'
  const icon = size === 'sm' ? 'size-4' : size === 'lg' ? 'size-6' : 'size-5'
  const text = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-lg'

  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <div
        className={cn(
          'flex items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm',
          box,
        )}
      >
        <ScanEye className={icon} strokeWidth={2.2} />
      </div>
      {showText && (
        <span className={cn('font-semibold tracking-tight text-foreground', text)}>
          Trust<span className="text-primary">Lens</span>
        </span>
      )}
    </div>
  )
}
