'use client'

import { motion } from 'motion/react'
import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Baby,
  HeartPulse,
  ShieldAlert,
} from 'lucide-react'
import type { Claim, Ingredient, TrustReport } from '@/lib/mock-data'
import { riskStyles } from '@/lib/mock-data'
import { cn } from '@/lib/utils'

export function SectionCard({
  title,
  description,
  children,
  className,
}: {
  title: string
  description?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn('rounded-2xl border border-border bg-card p-6', className)}
    >
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
      <div className="mt-5">{children}</div>
    </motion.section>
  )
}

export function IngredientTable({ ingredients }: { ingredients: Ingredient[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <table className="w-full text-left text-sm">
        <thead className="bg-muted/60 text-xs uppercase tracking-wide text-muted-foreground">
          <tr>
            <th className="px-4 py-3 font-medium">Ingredient</th>
            <th className="hidden px-4 py-3 font-medium sm:table-cell">Purpose</th>
            <th className="px-4 py-3 font-medium">Risk</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {ingredients.map((ing) => {
            const style = riskStyles[ing.risk]
            return (
              <tr key={ing.name} className="align-top transition-colors hover:bg-muted/30">
                <td className="px-4 py-3">
                  <p className="font-medium text-foreground">{ing.name}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{ing.note}</p>
                </td>
                <td className="hidden px-4 py-3 text-muted-foreground sm:table-cell">{ing.purpose}</td>
                <td className="px-4 py-3">
                  <span
                    className={cn(
                      'inline-flex whitespace-nowrap rounded-full border px-2.5 py-1 text-xs font-medium',
                      style.className,
                    )}
                  >
                    {style.label}
                  </span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

const verdictConfig = {
  verified: { icon: CheckCircle2, className: 'text-success', bg: 'bg-success/10', label: 'Verified' },
  partial: { icon: AlertTriangle, className: 'text-warning', bg: 'bg-warning/10', label: 'Partially true' },
  misleading: { icon: XCircle, className: 'text-danger', bg: 'bg-danger/10', label: 'Misleading' },
}

export function ClaimsList({ claims }: { claims: Claim[] }) {
  return (
    <ul className="space-y-3">
      {claims.map((c) => {
        const cfg = verdictConfig[c.verdict]
        const Icon = cfg.icon
        return (
          <li key={c.claim} className="flex items-start gap-3 rounded-xl border border-border p-4">
            <span className={cn('mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg', cfg.bg)}>
              <Icon className={cn('size-4', cfg.className)} />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-medium text-foreground">&ldquo;{c.claim}&rdquo;</p>
                <span className={cn('rounded-full px-2 py-0.5 text-[11px] font-semibold', cfg.bg, cfg.className)}>
                  {cfg.label}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{c.detail}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

const safetyConfig = {
  safe: { label: 'Safe', className: 'text-success', bg: 'bg-success/10' },
  consult: { label: 'Consult a doctor', className: 'text-warning', bg: 'bg-warning/10' },
  avoid: { label: 'Avoid', className: 'text-danger', bg: 'bg-danger/10' },
}

export function SafetyFlags({ report }: { report: TrustReport }) {
  const items = [
    { icon: HeartPulse, title: 'Pregnancy', status: report.pregnancySafe },
    { icon: Baby, title: 'Children', status: report.childSafe },
  ]
  return (
    <div className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => {
          const cfg = safetyConfig[item.status]
          const Icon = item.icon
          return (
            <div key={item.title} className="flex items-center gap-3 rounded-xl border border-border p-4">
              <span className={cn('flex size-10 items-center justify-center rounded-lg', cfg.bg)}>
                <Icon className={cn('size-5', cfg.className)} />
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">{item.title}</p>
                <p className={cn('text-xs font-medium', cfg.className)}>{cfg.label}</p>
              </div>
            </div>
          )
        })}
      </div>

      {report.allergyWarnings.length > 0 && (
        <div className="rounded-xl border border-warning/30 bg-warning/5 p-4">
          <div className="flex items-center gap-2">
            <ShieldAlert className="size-4 text-warning" />
            <p className="text-sm font-semibold text-foreground">Allergy warnings</p>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {report.allergyWarnings.map((a) => (
              <span key={a} className="rounded-full border border-warning/30 bg-card px-3 py-1 text-xs font-medium text-foreground">
                {a}
              </span>
            ))}
          </div>
        </div>
      )}

      {report.healthRisks.length > 0 && (
        <ul className="space-y-2">
          {report.healthRisks.map((r) => (
            <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
              <AlertTriangle className="mt-0.5 size-4 shrink-0 text-warning" />
              {r}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
