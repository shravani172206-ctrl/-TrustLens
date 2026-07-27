import Link from 'next/link'
import type { ReactNode } from 'react'
import { ShieldCheck, ScanText, Sparkles } from 'lucide-react'
import { Logo } from '@/components/logo'

export function AuthShell({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-dvh lg:grid-cols-2">
      <div className="flex flex-col justify-center px-4 py-10 sm:px-8">
        <div className="mx-auto w-full max-w-sm">
          <Link href="/" className="inline-block">
            <Logo />
          </Link>
          {children}
        </div>
      </div>

      <div className="relative hidden overflow-hidden bg-primary lg:block">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(80% 60% at 20% 20%, color-mix(in oklab, var(--accent) 45%, transparent) 0%, transparent 60%)',
          }}
        />
        <div className="relative flex h-full flex-col justify-between p-12 text-primary-foreground">
          <div className="flex items-center gap-2 text-sm font-medium text-primary-foreground/80">
            <Sparkles className="size-4" />
            AI-Powered Product Transparency
          </div>

          <div>
            <h2 className="text-balance text-3xl font-semibold leading-tight">
              Understand every ingredient before it touches your life.
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-primary-foreground/80">
              TrustLens turns confusing labels into clear, trustworthy reports so you can make
              healthier, safer choices with confidence.
            </p>

            <div className="mt-8 space-y-3">
              <Highlight icon={<ScanText className="size-4" />} text="Instant OCR label scanning" />
              <Highlight icon={<ShieldCheck className="size-4" />} text="Allergen & risk detection" />
              <Highlight icon={<Sparkles className="size-4" />} text="AI-generated Trust Score" />
            </div>
          </div>

          <p className="text-sm text-primary-foreground/70">
            Trusted by health-conscious consumers, parents, and professionals.
          </p>
        </div>
      </div>
    </div>
  )
}

function Highlight({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex size-8 items-center justify-center rounded-lg bg-primary-foreground/15">
        {icon}
      </span>
      <span className="text-sm text-primary-foreground/90">{text}</span>
    </div>
  )
}
