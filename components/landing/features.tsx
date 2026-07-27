import {
  ScanText,
  Brain,
  ShieldAlert,
  Baby,
  HeartPulse,
  BadgeCheck,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const features = [
  {
    icon: ScanText,
    title: 'OCR label extraction',
    desc: 'PaddleOCR reads any ingredient label from a photo, even small print and curved packaging.',
  },
  {
    icon: Brain,
    title: 'RAG-powered analysis',
    desc: 'A retrieval-augmented knowledge base explains what each ingredient does and why it matters.',
  },
  {
    icon: ShieldAlert,
    title: 'Allergen & risk detection',
    desc: 'Automatically flags allergens, harmful preservatives, and ingredients to watch out for.',
  },
  {
    icon: HeartPulse,
    title: 'Health impact insights',
    desc: 'Understand the real health implications of a product before you buy or use it.',
  },
  {
    icon: Baby,
    title: 'Pregnancy & child safety',
    desc: 'Personalized safety guidance for sensitive groups including pregnancy and children.',
  },
  {
    icon: BadgeCheck,
    title: 'Marketing claim checks',
    desc: 'Verifies "natural", "hypoallergenic" and other claims against the actual ingredients.',
  },
]

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Features</p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Everything you need to trust a product
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          TrustLens combines OCR, machine learning, and large language models into one seamless
          analysis pipeline.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.06}>
            <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="size-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
