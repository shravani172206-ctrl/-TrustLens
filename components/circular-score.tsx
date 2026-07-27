'use client'

import { motion } from 'motion/react'
import { scoreColor, scoreLabel } from '@/lib/mock-data'

export function CircularScore({
  score,
  size = 180,
  stroke = 14,
  showLabel = true,
}: {
  score: number
  size?: number
  stroke?: number
  showLabel?: boolean
}) {
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const color = scoreColor(score)
  const offset = circumference - (score / 100) * circumference

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--muted)"
          strokeWidth={stroke}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          className="font-semibold tabular-nums text-foreground"
          style={{ fontSize: size * 0.26 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {score}
        </motion.span>
        {showLabel && (
          <span
            className="font-medium"
            style={{ color, fontSize: size * 0.075 }}
          >
            {scoreLabel(score)}
          </span>
        )}
      </div>
    </div>
  )
}
