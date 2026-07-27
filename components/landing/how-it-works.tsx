import { Upload, ScanText, Boxes, Database, Cpu, FileCheck2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const steps = [
  { icon: Upload, title: 'Upload label', desc: 'Snap or drag a product label into TrustLens.' },
  { icon: ScanText, title: 'OCR extraction', desc: 'PaddleOCR extracts every ingredient accurately.' },
  { icon: Boxes, title: 'Recognition', desc: 'ML model identifies the product and brand.' },
  { icon: Database, title: 'RAG retrieval', desc: 'Ingredient knowledge is retrieved in context.' },
  { icon: Cpu, title: 'AI analysis', desc: 'Llama 3.1 assesses safety and health impact.' },
  { icon: FileCheck2, title: 'Trust Report', desc: 'A clear, shareable report is generated.' },
]

const useCases = [
  { emoji: 'Skincare', title: 'Cosmetics & skincare', desc: 'Check for irritants and verify clean-beauty claims.' },
  { emoji: 'Food', title: 'Food & beverages', desc: 'Spot added sugars, additives, and misleading labels.' },
  { emoji: 'Baby', title: 'Parents & baby care', desc: 'Confirm products are gentle and child-safe.' },
  { emoji: 'Fitness', title: 'Supplements & fitness', desc: 'Validate macros and screen for banned substances.' },
]

export function HowItWorks() {
  return (
    <>
      <section id="how" className="border-y border-border bg-card/50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">How it works</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              From label to Trust Report in seconds
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="relative h-full rounded-2xl border border-border bg-card p-6">
                  <span className="absolute right-5 top-5 text-sm font-semibold text-muted-foreground/50">
                    0{i + 1}
                  </span>
                  <div className="flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <s.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="usecases" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Use cases</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Built for everyday, informed decisions
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((u, i) => (
            <Reveal key={u.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                <span className="inline-flex rounded-lg bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                  {u.emoji}
                </span>
                <h3 className="mt-4 font-semibold text-foreground">{u.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{u.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
