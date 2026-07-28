'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowUpRight, Calendar } from 'lucide-react'

import { PageHeader } from '@/components/app/page-header'
import { ScoreBadge } from '@/components/score-badge'

import { getRecentReports } from '@/lib/report-service'
import { isAuthenticated } from '@/lib/auth-guard'

export default function HistoryPage() {
  const router = useRouter()

  const [reports, setReports] = useState<any[]>([])

  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace('/login')
      return
    }

    async function loadReports() {
      const data = await getRecentReports()
      setReports(data)
    }

    loadReports()
  }, [router])

  return (
    <div>
      <PageHeader
        title="Report History"
        description="View all your previously analyzed products."
      />

      {reports.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
          <p className="text-sm font-medium text-foreground">
            No reports available
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            Analyze your first product to see it here.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {reports.map((report) => (
            <Link
              key={report.id}
              href={`/report/${report.id}`}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-muted">
                <img
                  src={report.image || '/placeholder.svg'}
                  alt={report.productName}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex-1">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  {report.brand}
                </p>

                <h3 className="font-semibold text-foreground">
                  {report.productName}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {report.category}
                </p>

                <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="size-3" />
                  {report.date}
                </div>
              </div>

              <div className="flex flex-col items-end gap-3">
                <ScoreBadge score={report.trustScore} />

                <div className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  View Report
                  <ArrowUpRight className="size-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}