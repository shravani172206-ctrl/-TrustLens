'use client'

import Link from 'next/link'
import { ScanLine, Star, Bookmark, ShieldAlert, ArrowRight } from 'lucide-react'
import { PageHeader } from '@/components/app/page-header'
import { StatCard } from '@/components/app/stat-card'
import { TrendChart } from '@/components/app/trend-chart'
import { ReportRow } from '@/components/app/report-row'
import { Reveal } from '@/components/reveal'
import { BtnLink } from '@/components/ui/btn'
import { dashboardStats, categoryBreakdown, trustReports } from '@/lib/mock-data'

export default function DashboardPage() {
  const maxCategory = Math.max(...categoryBreakdown.map((c) => c.count))

  return (
    <div className="space-y-8">
      <PageHeader
        title="Welcome back, Sarah"
        description="Here's an overview of your product analysis activity."
        actions={
          <BtnLink href="/analyze">
            <ScanLine className="size-4" />
            Analyze Product
          </BtnLink>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Products Analyzed"
          value={dashboardStats.productsAnalyzed}
          icon={ScanLine}
          delta={12}
          tone="primary"
          delay={0}
        />
        <StatCard
          label="Average Trust Score"
          value={dashboardStats.averageTrustScore}
          suffix="%"
          icon={Star}
          delta={4}
          tone="secondary"
          delay={0.08}
        />
        <StatCard
          label="Reports Saved"
          value={dashboardStats.reportsSaved}
          icon={Bookmark}
          delta={8}
          tone="accent"
          delay={0.16}
        />
        <StatCard
          label="Allergens Flagged"
          value={dashboardStats.allergensFlagged}
          icon={ShieldAlert}
          delta={-3}
          tone="warning"
          delay={0.24}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <div className="h-full rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-foreground">
                  Trust Score Trend
                </h2>
                <p className="text-sm text-muted-foreground">
                  Average score over the last 6 months
                </p>
              </div>

              <span className="rounded-full bg-secondary/10 px-2.5 py-1 text-xs font-medium text-secondary">
                +9% vs Feb
              </span>
            </div>

            <div className="mt-6">
              <TrendChart />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full rounded-2xl border border-border bg-card p-6">
            <h2 className="font-semibold text-foreground">
              Categories Analyzed
            </h2>

            <p className="text-sm text-muted-foreground">
              Distribution by product type
            </p>

            <div className="mt-6 space-y-4">
              {categoryBreakdown.map((c) => (
                <div key={c.category}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground">{c.category}</span>

                    <span className="font-medium tabular-nums text-muted-foreground">
                      {c.count}
                    </span>
                  </div>

                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{
                        width: `${(c.count / maxCategory) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-foreground">
                Recent Activity
              </h2>

              <p className="text-sm text-muted-foreground">
                Your latest Trust Reports
              </p>
            </div>

            <Link
              href="/history"
              className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              View all
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="mt-4 space-y-1">
            {trustReports.map((r) => (
              <ReportRow key={r.id} report={r} />
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  )
}