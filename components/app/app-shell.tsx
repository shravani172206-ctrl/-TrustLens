'use client'

import Link from 'next/link'
import { useState, type ReactNode } from 'react'
import { Menu, X, Bell, Search } from 'lucide-react'
import { SidebarContent } from '@/components/app/sidebar'
import { BtnLink } from '@/components/ui/btn'
import { cn } from '@/lib/utils'

export function AppShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-dvh bg-background">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-sidebar-border lg:block">
        <SidebarContent />
      </aside>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="absolute inset-y-0 left-0 w-64 border-r border-sidebar-border shadow-xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute -right-11 top-3 flex size-9 items-center justify-center rounded-lg bg-card text-foreground shadow"
              aria-label="Close menu"
            >
              <X className="size-5" />
            </button>
            <SidebarContent onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}

      <div className="lg:pl-64">
        <header className="glass sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-border px-4 sm:px-6">
          <button
            onClick={() => setOpen(true)}
            className="inline-flex size-9 items-center justify-center rounded-lg text-foreground lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </button>

          <Link
            href="/search"
            className={cn(
              'flex h-10 flex-1 items-center gap-2.5 rounded-xl border border-border bg-background px-3.5 text-sm text-muted-foreground transition-colors hover:border-ring/40 sm:max-w-sm',
            )}
          >
            <Search className="size-4" />
            Search products or ingredients...
          </Link>

          <div className="ml-auto flex items-center gap-2">
            <button
              className="relative inline-flex size-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Notifications"
            >
              <Bell className="size-5" />
              <span className="absolute right-2.5 top-2.5 size-2 rounded-full bg-danger" />
            </button>
            <BtnLink href="/analyze" size="sm" className="hidden sm:inline-flex">
              New Analysis
            </BtnLink>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">{children}</main>
      </div>
    </div>
  )
}
