'use client'

import { motion } from 'motion/react'
import { ArrowRight, Sparkles, ShieldCheck, AlertTriangle, CheckCircle2 } from 'lucide-react'
import { BtnLink } from '@/components/ui/btn'
import { CircularScore } from '@/components/circular-score'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px]"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 0%, color-mix(in oklab, var(--primary) 14%, transparent) 0%, transparent 70%)',
        }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-muted-foreground shadow-sm"
          >
            <Sparkles className="size-4 text-primary" />
            AI-powered ingredient intelligence
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Know what you&apos;re really using.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            Upload any product label and TrustLens instantly analyzes ingredients, flags allergens
            and health risks, verifies marketing claims, and generates a clear Trust Report.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.19, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <BtnLink href="/signup" size="lg">
              Analyze a product
              <ArrowRight className="size-4" />
            </BtnLink>
            <BtnLink href="/dashboard" size="lg" variant="outline">
              View live demo
            </BtnLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-secondary" /> No credit card
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-secondary" /> Instant reports
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-secondary" /> Privacy-first
            </span>
          </motion.div>
        </div>

        <HeroCard />
      </div>
    </section>
  )
}

function HeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-md"
    >
      <div className="rounded-3xl border border-border bg-card p-6 shadow-xl shadow-primary/5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Trust Report
            </p>
            <h3 className="mt-1 text-lg font-semibold text-foreground">HydraGlow Serum</h3>
            <p className="text-sm text-muted-foreground">Luminé Skincare</p>
          </div>
          <CircularScore score={89} size={104} stroke={9} showLabel={false} />
        </div>

        <div className="mt-5 space-y-2.5">
          <Row icon={<ShieldCheck className="size-4 text-secondary" />} label="Safe ingredients" value="12 of 14" tone="ok" />
          <Row icon={<AlertTriangle className="size-4 text-warning" />} label="Allergen flagged" value="Fragrance" tone="warn" />
          <Row icon={<CheckCircle2 className="size-4 text-primary" />} label="Claims verified" value="2 of 3" tone="info" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="absolute -left-4 -bottom-5 hidden items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:flex"
      >
        <div className="flex size-9 items-center justify-center rounded-lg bg-secondary/10">
          <Sparkles className="size-4 text-secondary" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Pregnancy safety</p>
          <p className="text-sm font-semibold text-foreground">Safe to use</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

function Row({
  icon,
  label,
  value,
  tone,
}: {
  icon: React.ReactNode
  label: string
  value: string
  tone: 'ok' | 'warn' | 'info'
}) {
  const toneClass =
    tone === 'ok'
      ? 'text-secondary'
      : tone === 'warn'
        ? 'text-warning'
        : 'text-primary'
  return (
    <div className="flex items-center justify-between rounded-xl bg-muted/60 px-3 py-2.5">
      <span className="flex items-center gap-2 text-sm text-foreground">
        {icon}
        {label}
      </span>
      <span className={`text-sm font-semibold ${toneClass}`}>{value}</span>
    </div>
  )
}
