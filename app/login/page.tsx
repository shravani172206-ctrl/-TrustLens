'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Mail, Lock, Loader2 } from 'lucide-react'
import { AuthShell } from '@/components/auth/auth-shell'
import { TextField } from '@/components/ui/text-field'
import { Btn } from '@/components/ui/btn'

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => router.push('/dashboard'), 900)
  }

  return (
    <AuthShell>
      <div className="mt-10">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">Welcome back</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Log in to continue analyzing products with TrustLens.
        </p>
      </div>

      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <TextField
          label="Email"
          type="email"
          placeholder="sarah@example.com"
          icon={<Mail />}
          defaultValue="sarah@example.com"
          required
        />
        <TextField
          label="Password"
          type="password"
          placeholder="Enter your password"
          icon={<Lock />}
          defaultValue="password"
          required
        />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-muted-foreground">
            <input type="checkbox" className="size-4 rounded border-border accent-primary" defaultChecked />
            Remember me
          </label>
          <a href="#" className="font-medium text-primary hover:underline">
            Forgot password?
          </a>
        </div>

        <Btn type="submit" size="lg" className="w-full" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Signing in
            </>
          ) : (
            'Log in'
          )}
        </Btn>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{' '}
        <Link href="/signup" className="font-medium text-primary hover:underline">
          Sign up
        </Link>
      </p>
    </AuthShell>
  )
}
