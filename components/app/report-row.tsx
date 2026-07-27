import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { ScoreBadge } from '@/components/score-badge'
import type { TrustReport } from '@/lib/mock-data'

export function ReportRow({ report }: { report: TrustReport }) {
  return (
    <Link
      href={`/report/${report.id}`}
      className="group flex items-center gap-4 rounded-xl border border-transparent p-3 transition-colors hover:border-border hover:bg-muted/50"
    >
      <div className="relative size-12 shrink-0 overflow-hidden rounded-lg border border-border bg-muted">
        <Image src={report.image || '/placeholder.svg'} alt={report.productName} fill className="object-cover" sizes="48px" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-foreground">{report.productName}</p>
        <p className="truncate text-xs text-muted-foreground">
          {report.brand} &middot; {report.category}
        </p>
      </div>
      <ScoreBadge score={report.trustScore} />
      <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
    </Link>
  )
}
