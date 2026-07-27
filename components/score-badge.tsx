import { cn } from '@/lib/utils'

export function ScoreBadge({ score, className }: { score: number; className?: string }) {
  const tone =
    score >= 80
      ? 'bg-success/10 text-success'
      : score >= 60
        ? 'bg-warning/10 text-warning'
        : 'bg-danger/10 text-danger'
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold tabular-nums',
        tone,
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-current" />
      {score}
      <span className="opacity-70">/100</span>
    </span>
  )
}
