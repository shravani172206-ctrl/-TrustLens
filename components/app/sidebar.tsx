'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogOut } from 'lucide-react'
import { Logo } from '@/components/logo'
import { primaryNav, secondaryNav, type NavItem } from '@/components/app/nav-config'
import { cn } from '@/lib/utils'

export function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === '/dashboard' ? pathname === href : pathname.startsWith(href)

  const NavLink = ({ item }: { item: NavItem }) => {
    const active = isActive(item.href)
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        className={cn(
          'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors',
          active
            ? 'bg-sidebar-accent text-sidebar-accent-foreground'
            : 'text-muted-foreground hover:bg-muted hover:text-foreground',
        )}
      >
        <item.icon className={cn('size-[18px]', active && 'text-sidebar-primary')} />
        {item.label}
      </Link>
    )
  }

  return (
    <div className="flex h-full flex-col bg-sidebar">
      <div className="flex h-16 items-center border-b border-sidebar-border px-5">
        <Link href="/" aria-label="TrustLens home">
          <Logo />
        </Link>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-3">
        <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground/70">
          Menu
        </p>
        {primaryNav.map((item) => (
          <NavLink key={item.href} item={item} />
        ))}

        <p className="px-3 pb-1 pt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground/70">
          Account
        </p>
        {secondaryNav.map((item) => (
          <NavLink key={item.href} item={item} />
        ))}
      </nav>

      <div className="border-t border-sidebar-border p-3">
        <div className="flex items-center gap-3 rounded-xl px-3 py-2.5">
          <div className="flex size-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
            SC
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-foreground">Sarah Chen</p>
            <p className="truncate text-xs text-muted-foreground">sarah@example.com</p>
          </div>
          <Link
            href="/"
            aria-label="Log out"
            className="text-muted-foreground transition-colors hover:text-danger"
          >
            <LogOut className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
