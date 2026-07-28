'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { Search as SearchIcon, ArrowUpRight } from 'lucide-react'

import { PageHeader } from '@/components/app/page-header'
import { ScoreBadge } from '@/components/score-badge'
import { cn } from '@/lib/utils'
import { searchProducts } from '@/lib/report-service'

export default function SearchPage() {
  const [products, setProducts] = useState<any[]>([])
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  useEffect(() => {
    async function loadProducts() {
      const data = await searchProducts()
      setProducts(data)
    }

    loadProducts()
  }, [])

  const categories = useMemo(
    () => Array.from(new Set(products.map((r) => r.category))),
    [products]
  )

  const results = useMemo(() => {
    return products.filter((r) => {
      const matchesQuery =
        !query ||
        r.productName.toLowerCase().includes(query.toLowerCase()) ||
        r.brand.toLowerCase().includes(query.toLowerCase())

      const matchesCategory =
        category === 'All' || r.category === category

      return matchesQuery && matchesCategory
    })
  }, [products, query, category])

  return (
    <div>
      <PageHeader
        title="Search products"
        description="Browse the shared library of analyzed products and their verified trust reports."
      />

      <div className="relative mb-5">
        <SearchIcon className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by product or brand..."
          className="h-12 w-full rounded-xl border border-input bg-card pl-11 pr-4 text-sm text-foreground shadow-sm outline-none transition-shadow placeholder:text-muted-foreground focus:border-ring focus:ring-4 focus:ring-ring/15"
        />
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {['All', ...categories].map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={cn(
              'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
              category === c
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border bg-card text-muted-foreground hover:text-foreground'
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {results.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
          <p className="text-sm font-medium text-foreground">
            No products found
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            Try a different search term or category filter.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={`/report/${r.id}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex size-14 items-center justify-center overflow-hidden rounded-xl bg-muted">
                    <img
                      src={r.image || '/placeholder.svg'}
                      alt={r.productName}
                      className="size-full object-cover"
                    />
                  </div>

                  <ScoreBadge score={r.trustScore} />
                </div>

                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {r.brand}
                </p>

                <h3 className="mt-0.5 text-sm font-semibold leading-snug text-foreground">
                  {r.productName}
                </h3>

                <div className="mt-auto flex items-center gap-1 pt-4 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  View report
                  <ArrowUpRight className="size-3.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}