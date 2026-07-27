import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Logo } from '@/components/logo'
import { BtnLink } from '@/components/ui/btn'
import { Reveal } from '@/components/reveal'

export function CtaFooter() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <Reveal>
          <div className="overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center sm:px-14">
            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl">
              Start analyzing products with confidence
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-lg leading-relaxed text-primary-foreground/80">
              Join thousands of health-conscious users making smarter, safer choices every day.
            </p>
            <div className="mt-8 flex justify-center">
              <BtnLink href="/signup" size="lg" variant="white">
                Create free account
                <ArrowRight className="size-4" />
              </BtnLink>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6">
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <Logo />
            <p className="text-sm text-muted-foreground">
              AI-powered product transparency &amp; ingredient analysis.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#how" className="hover:text-foreground">How it works</a>
            <Link href="/login" className="hover:text-foreground">Log in</Link>
            <Link href="/signup" className="hover:text-foreground">Sign up</Link>
          </div>
        </div>
        <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} TrustLens. All rights reserved.
        </div>
      </footer>
    </>
  )
}
