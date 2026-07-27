'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ScanText, Database, BrainCircuit, FileCheck2, Check, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export type PipelineStage = {
  id: string
  title: string
  detail: string
  icon: React.ElementType
}

const STAGES: PipelineStage[] = [
  {
    id: 'ocr',
    title: 'OCR Extraction',
    detail: 'PaddleOCR reading label text & ingredient list',
    icon: ScanText,
  },
  {
    id: 'rag',
    title: 'Knowledge Retrieval',
    detail: 'Matching ingredients against safety & regulatory database',
    icon: Database,
  },
  {
    id: 'llm',
    title: 'AI Reasoning',
    detail: 'LLM evaluating claims, risks & trust signals',
    icon: BrainCircuit,
  },
  {
    id: 'report',
    title: 'Report Generation',
    detail: 'Compiling your TrustLens report',
    icon: FileCheck2,
  },
]

export function Pipeline({ onComplete }: { onComplete: () => void }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (active >= STAGES.length) {
      const t = setTimeout(onComplete, 700)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setActive((a) => a + 1), 1500)
    return () => clearTimeout(t)
  }, [active, onComplete])

  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="relative flex size-3">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex size-3 rounded-full bg-primary" />
          </span>
          <p className="text-sm font-medium text-muted-foreground">
            Analyzing product&hellip; this usually takes a few seconds
          </p>
        </div>

        <ol className="flex flex-col gap-3">
          {STAGES.map((stage, i) => {
            const status = i < active ? 'done' : i === active ? 'running' : 'pending'
            const Icon = stage.icon
            return (
              <li
                key={stage.id}
                className={cn(
                  'flex items-center gap-4 rounded-xl border p-4 transition-colors',
                  status === 'running' && 'border-primary/40 bg-primary/5',
                  status === 'done' && 'border-emerald-500/30 bg-emerald-500/5',
                  status === 'pending' && 'border-border bg-muted/40 opacity-60',
                )}
              >
                <div
                  className={cn(
                    'flex size-10 shrink-0 items-center justify-center rounded-lg',
                    status === 'running' && 'bg-primary text-primary-foreground',
                    status === 'done' && 'bg-emerald-500 text-white',
                    status === 'pending' && 'bg-muted text-muted-foreground',
                  )}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {status === 'done' ? (
                      <motion.span
                        key="done"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                      >
                        <Check className="size-5" />
                      </motion.span>
                    ) : status === 'running' ? (
                      <motion.span key="run">
                        <Loader2 className="size-5 animate-spin" />
                      </motion.span>
                    ) : (
                      <motion.span key="pending">
                        <Icon className="size-5" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-foreground">{stage.title}</p>
                  <p className="truncate text-xs text-muted-foreground">{stage.detail}</p>
                </div>
                {status === 'running' && (
                  <motion.div
                    className="h-1 w-16 overflow-hidden rounded-full bg-primary/20"
                    aria-hidden
                  >
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </motion.div>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}
