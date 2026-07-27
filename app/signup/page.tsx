'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { User, Mail, Lock, Loader2 } from 'lucide-react'

import { signup } from '@/lib/auth'
import { AuthShell } from '@/components/auth/auth-shell'
import { TextField } from '@/components/ui/text-field'
import { Btn } from '@/components/ui/btn'

export default function SignupPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    try {
      // Uncomment when backend is ready
      // const response = await signup({ name, email, password })

      // Temporary frontend response
      alert("Account created successfully! Please log in.")

router.push("/login")
    } catch (error) {
      console.error(error)
      alert('Signup failed.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthShell>
      <div className="mt-10">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Create your account
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Start analyzing products with TrustLens.
        </p>
      </div>

      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <TextField
          label="Full Name"
          name="name"
          type="text"
          placeholder="John Doe"
          icon={<User />}
          required
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          placeholder="john@example.com"
          icon={<Mail />}
          required
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          placeholder="Create a password"
          icon={<Lock />}
          required
        />

        <Btn
          type="submit"
          size="lg"
          className="w-full"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Creating Account...
            </>
          ) : (
            'Sign Up'
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