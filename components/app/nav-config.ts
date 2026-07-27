import {
  LayoutDashboard,
  ScanLine,
  Search,
  FileText,
  History,
  User,
  Settings,
  type LucideIcon,
} from 'lucide-react'

export type NavItem = {
  label: string
  href: string
  icon: LucideIcon
}

export const primaryNav: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Analyze Product', href: '/analyze', icon: ScanLine },
  { label: 'Search Product', href: '/search', icon: Search },
  { label: 'Report History', href: '/history', icon: History },
]

export const secondaryNav: NavItem[] = [
  { label: 'Profile', href: '/profile', icon: User },
  { label: 'Settings', href: '/settings', icon: Settings },
]

export const reportNav: NavItem = { label: 'AI Report', href: '/report/rpt-001', icon: FileText }
