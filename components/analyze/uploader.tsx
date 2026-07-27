'use client'

import { useRef, useState } from 'react'
import { motion } from 'motion/react'
import { UploadCloud, ImageIcon, X, ScanLine } from 'lucide-react'
import { Btn } from '@/components/ui/btn'
import { TextField } from '@/components/ui/text-field'
import { cn } from '@/lib/utils'

export function Uploader({
  onAnalyze,
}: {
  onAnalyze: (data: { productName: string; fileName: string | null }) => void
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [dragging, setDragging] = useState(false)
  const [preview, setPreview] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string | null>(null)
  const [productName, setProductName] = useState('')

  function handleFile(file: File | undefined) {
    if (!file) return
    setFileName(file.name)
    if (file.type.startsWith('image/')) {
      setPreview(URL.createObjectURL(file))
    } else {
      setPreview(null)
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
      <div>
        <div
          role="button"
          tabIndex={0}
          onClick={() => inputRef.current?.click()}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && inputRef.current?.click()}
          onDragOver={(e) => {
            e.preventDefault()
            setDragging(true)
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => {
            e.preventDefault()
            setDragging(false)
            handleFile(e.dataTransfer.files?.[0])
          }}
          className={cn(
            'flex min-h-72 cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed p-8 text-center transition-colors',
            dragging ? 'border-primary bg-primary/5' : 'border-border bg-card hover:border-primary/50',
          )}
        >
          {preview ? (
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={preview || "/placeholder.svg"}
                alt="Uploaded product label preview"
                className="max-h-52 rounded-xl object-contain"
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setPreview(null)
                  setFileName(null)
                }}
                className="absolute -right-2 -top-2 flex size-7 items-center justify-center rounded-full bg-foreground text-background shadow"
                aria-label="Remove image"
              >
                <X className="size-4" />
              </button>
            </div>
          ) : (
            <>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary"
              >
                <UploadCloud className="size-8" />
              </motion.div>
              <div>
                <p className="text-base font-semibold text-foreground">
                  Drop a product label or packaging photo
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  PNG, JPG or PDF up to 10MB &mdash; or click to browse
                </p>
              </div>
            </>
          )}
          {fileName && (
            <div className="flex items-center gap-2 rounded-lg bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <ImageIcon className="size-3.5" />
              {fileName}
            </div>
          )}
          <input
            ref={inputRef}
            type="file"
            accept="image/*,application/pdf"
            className="hidden"
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6">
        <div>
          <h3 className="text-sm font-semibold text-foreground">Product details</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Add a name to tag this report. OCR fills in the rest.
          </p>
        </div>
        <TextField
          label="Product name"
          placeholder="e.g. Vitamin C Brightening Serum"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <TextField
          label="Category (optional)"
          placeholder="Skincare, Supplement, Food&hellip;"
        />
        <Btn
          className="mt-2 w-full"
          size="lg"
          disabled={!fileName && !productName}
          onClick={() => onAnalyze({ productName: productName || 'Untitled Product', fileName })}
        >
          <ScanLine className="size-4" />
          Analyze product
        </Btn>
        <p className="text-center text-[11px] text-muted-foreground">
          Powered by OCR + RAG + on-device LLM reasoning
        </p>
      </div>
    </div>
  )
}
