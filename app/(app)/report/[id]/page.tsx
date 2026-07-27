'use client'

import { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { motion } from 'motion/react'
import { ArrowLeft, Download, Share2, Bookmark, CheckCircle2, Calendar } from 'lucide-react'
import { CircularScore } from '@/components/circular-score'
import { Btn } from '@/components/ui/btn'
import {
  SectionCard,
  IngredientTable,
  ClaimsList,
  SafetyFlags,
} from '@/components/report/report-sections'
import { getReport, scoreLabel } from '@/lib/mock-data'

export default function ReportPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const report = getReport(id)

  if (!report) notFound()

  return (
    <div className="mx-auto max-w-5xl">
      <Link
        href="/history"
        className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Back to reports
      </Link>

      {/* Hero card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-3xl border border-border bg-card"
      >
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="relative size-24 shrink-0 overflow-hidden rounded-2xl border border-border bg-muted">
              <Image src={report.image || '/placeholder.svg'} alt={report.productName} fill className="object-cover" sizes="96px" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                  {report.category}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="size-3" />
                  {new Date(report.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
              <h1 className="mt-2 text-2xl font-semibold tracking-tight text-foreground text-balance">
                {report.productName}
              </h1>
              <p className="text-sm text-muted-foreground">{report.brand}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Btn size="sm" variant="outline">
                  <Bookmark className="size-4" />
                  Save
                </Btn>
                <Btn size="sm" variant="outline">
                  <Share2 className="size-4" />
                  Share
                </Btn>
                <Btn size="sm" variant="outline">
                  <Download className="size-4" />
                  Export PDF
                </Btn>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <CircularScore score={report.trustScore} />
          </div>
        </div>

        <div className="border-t border-border bg-muted/40 px-6 py-5 sm:px-8">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-semibold text-foreground">
                AI Verdict: {scoreLabel(report.trustScore)}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{report.summary}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Key reasons */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <SectionCard title="Why this score" description="Key factors behind the trust rating">
          <ul className="space-y-3">
            {report.reasons.map((reason) => (
              <li key={reason} className="flex items-start gap-2.5 text-sm text-foreground">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                {reason}
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Safety & suitability" description="Who should take extra care">
          <SafetyFlags report={report} />
        </SectionCard>
      </div>

      {/* Ingredients */}
      <SectionCard
        title="Ingredient breakdown"
        description="Each ingredient analyzed for purpose and risk"
        className="mt-6"
      >
        <IngredientTable ingredients={report.ingredients} />
      </SectionCard>

      {/* Claims */}
      <SectionCard
        title="Marketing claim verification"
        description="How the product's claims hold up against evidence"
        className="mt-6"
      >
        <ClaimsList claims={report.claims} />
      </SectionCard>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        This report is generated by AI for informational purposes and is not a substitute for professional medical advice.
      </p>
    </div>
  )
}
