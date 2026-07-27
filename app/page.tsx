import { Navbar } from '@/components/landing/navbar'
import { Hero } from '@/components/landing/hero'
import { Features } from '@/components/landing/features'
import { HowItWorks } from '@/components/landing/how-it-works'
import { CtaFooter } from '@/components/landing/footer'

export default function LandingPage() {
  return (
    <main className="min-h-dvh bg-background">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <CtaFooter />
    </main>
  )
}
