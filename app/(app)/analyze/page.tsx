'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { PageHeader } from '@/components/app/page-header'
import { Uploader } from '@/components/analyze/uploader'
import { Pipeline } from '@/components/analyze/pipeline'
import { trustReports } from '@/lib/mock-data'
import { Sparkles } from 'lucide-react'

export default function AnalyzePage() {
  const router = useRouter()
  const [phase, setPhase] = useState<'input' | 'processing'>('input')

  return (
    <div className="mx-auto max-w-5xl">
      <PageHeader
        eyebrow="New analysis"
        title="Analyze a product"
        description="Upload a label or packaging photo and let TrustLens extract, verify, and score every claim."
      />

      <AnimatePresence mode="wait">
        {phase === 'input' ? (
          <motion.div
            key="input"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            <Uploader onAnalyze={() => setPhase('processing')} />

            <div className="mt-6 flex items-start gap-3 rounded-xl border border-border bg-muted/40 p-4">
              <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" />
              <p className="text-xs leading-relaxed text-muted-foreground">
                TrustLens never guesses. Every score is traced back to a verifiable source in the
                knowledge base, and flagged ingredients link to the regulatory reasoning behind them.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="processing"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            <Pipeline onComplete={() => router.push(`/report/${trustReports[0].id}`)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
