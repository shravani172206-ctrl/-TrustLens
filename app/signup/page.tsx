'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Mail, Lock, User, Loader2 } from 'lucide-react'
import { AuthShell } from '@/components/auth/auth-shell'
import { TextField } from '@/components/ui/text-field'
import { Btn } from '@/components/ui/btn'

export default function SignupPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => router.push('/dashboard'), 1000)
  }

  return (
    <AuthShell>
      <div className="mt-10">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">Create your account</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Start generating AI-powered Trust Reports in seconds.
        </p>
      </div>

      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <TextField label="Full name" placeholder="Sarah Chen" icon={<User />} required />
        <TextField label="Email" type="email" placeholder="sarah@example.com" icon={<Mail />} required />
        <TextField
          label="Password"
          type="password"
          placeholder="Create a password"
          icon={<Lock />}
          hint="At least 8 characters with a number and symbol."
          required
        />

        <label className="flex items-start gap-2 text-sm text-muted-foreground">
          <input type="checkbox" className="mt-0.5 size-4 rounded border-border accent-primary" required />
          <span>
            I agree to the{' '}
            <a href="#" className="font-medium text-primary hover:underline">Terms</a> and{' '}
            <a href="#" className="font-medium text-primary hover:underline">Privacy Policy</a>.
          </span>
        </label>

        <Btn type="submit" size="lg" className="w-full" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Creating account
            </>
          ) : (
            'Create account'
          )}
        </Btn>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account?{' '}
        <Link href="/login" className="font-medium text-primary hover:underline">
          Log in
        </Link>
      </p>
    </AuthShell>
  )
}
