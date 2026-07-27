'use client'

import { motion } from 'motion/react'
import { trustTrend } from '@/lib/mock-data'

export function TrendChart() {
  const w = 520
  const h = 200
  const pad = 24
  const values = trustTrend.map((d) => d.score)
  const min = Math.min(...values) - 6
  const max = Math.max(...values) + 6
  const stepX = (w - pad * 2) / (trustTrend.length - 1)

  const points = trustTrend.map((d, i) => {
    const x = pad + i * stepX
    const y = h - pad - ((d.score - min) / (max - min)) * (h - pad * 2)
    return { x, y, ...d }
  })

  const line = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')
  const area = `${line} L ${points[points.length - 1].x} ${h - pad} L ${points[0].x} ${h - pad} Z`

  return (
    <div className="w-full">
      <svg viewBox={`0 0 ${w} ${h}`} className="h-auto w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[0, 0.5, 1].map((t) => (
          <line
            key={t}
            x1={pad}
            x2={w - pad}
            y1={pad + t * (h - pad * 2)}
            y2={pad + t * (h - pad * 2)}
            stroke="var(--border)"
            strokeDasharray="4 4"
          />
        ))}

        <motion.path
          d={area}
          fill="url(#trendFill)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
        <motion.path
          d={line}
          fill="none"
          stroke="var(--primary)"
          strokeWidth={2.5}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />

        {points.map((p, i) => (
          <motion.circle
            key={p.month}
            cx={p.x}
            cy={p.y}
            r={4}
            fill="var(--card)"
            stroke="var(--primary)"
            strokeWidth={2.5}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 + i * 0.08 }}
          />
        ))}
      </svg>

      <div className="mt-2 flex justify-between px-5 text-xs text-muted-foreground">
        {trustTrend.map((d) => (
          <span key={d.month}>{d.month}</span>
        ))}
      </div>
    </div>
  )
}
