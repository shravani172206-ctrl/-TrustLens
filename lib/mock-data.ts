export type RiskLevel = 'safe' | 'moderate' | 'caution' | 'high'

export type Ingredient = {
  name: string
  purpose: string
  risk: RiskLevel
  note: string
}

export type Claim = {
  claim: string
  verdict: 'verified' | 'partial' | 'misleading'
  detail: string
}

export type TrustReport = {
  id: string
  productName: string
  brand: string
  category: string
  image: string
  trustScore: number
  date: string
  summary: string
  reasons: string[]
  ingredients: Ingredient[]
  healthRisks: string[]
  allergyWarnings: string[]
  pregnancySafe: 'safe' | 'consult' | 'avoid'
  childSafe: 'safe' | 'consult' | 'avoid'
  claims: Claim[]
}

export const trustReports: TrustReport[] = [
  {
    id: 'rpt-001',
    productName: 'HydraGlow Vitamin C Serum',
    brand: 'Luminé Skincare',
    category: 'Skincare',
    image: '/vitamin-c-serum-bottle-skincare.png',
    trustScore: 89,
    date: '2026-07-18',
    summary:
      'A well-formulated brightening serum with clinically supported actives. Ingredients are largely safe with low irritation potential, though the added fragrance may not suit highly sensitive skin.',
    reasons: [
      'Clinically supported concentration of Vitamin C',
      'No harmful preservatives detected',
      'Suitable for sensitive skin with low allergy risk',
      'Marketing claims largely verified',
    ],
    ingredients: [
      { name: 'Ascorbic Acid (Vitamin C)', purpose: 'Antioxidant / brightening', risk: 'safe', note: 'Well-tolerated at this concentration.' },
      { name: 'Hyaluronic Acid', purpose: 'Hydration', risk: 'safe', note: 'Excellent moisture retention, non-irritating.' },
      { name: 'Ferulic Acid', purpose: 'Stabilizer / antioxidant', risk: 'safe', note: 'Boosts Vitamin C stability.' },
      { name: 'Phenoxyethanol', purpose: 'Preservative', risk: 'moderate', note: 'Generally safe below 1%.' },
      { name: 'Parfum (Fragrance)', purpose: 'Scent', risk: 'caution', note: 'Possible irritant for sensitive skin.' },
    ],
    healthRisks: ['Mild irritation possible with fragrance sensitivity'],
    allergyWarnings: ['Contains fragrance (Parfum)'],
    pregnancySafe: 'safe',
    childSafe: 'consult',
    claims: [
      { claim: 'Brightens skin in 2 weeks', verdict: 'verified', detail: 'Vitamin C concentration supports this claim.' },
      { claim: 'Dermatologist tested', verdict: 'partial', detail: 'Testing documented but small sample size.' },
      { claim: '100% natural', verdict: 'misleading', detail: 'Contains synthetic preservatives and fragrance.' },
    ],
  },
  {
    id: 'rpt-002',
    productName: 'ProteinMax Whey Isolate',
    brand: 'FuelWorks Nutrition',
    category: 'Supplements',
    image: '/whey-protein-supplement-tub.png',
    trustScore: 76,
    date: '2026-07-15',
    summary:
      'A solid protein isolate with good macros. Contains artificial sweeteners and a common allergen (milk). Suitable for most adults but not recommended during pregnancy without medical advice.',
    reasons: [
      'High-quality protein source',
      'Contains artificial sweeteners (sucralose)',
      'Milk-derived — allergen present',
      'Low added sugar',
    ],
    ingredients: [
      { name: 'Whey Protein Isolate', purpose: 'Protein source', risk: 'safe', note: 'High biological value protein.' },
      { name: 'Sucralose', purpose: 'Sweetener', risk: 'moderate', note: 'Artificial sweetener, debated long-term effects.' },
      { name: 'Soy Lecithin', purpose: 'Emulsifier', risk: 'moderate', note: 'Common allergen for some.' },
      { name: 'Natural Flavors', purpose: 'Flavoring', risk: 'moderate', note: 'Undisclosed composition.' },
    ],
    healthRisks: ['Digestive discomfort for lactose-sensitive users'],
    allergyWarnings: ['Contains milk', 'Contains soy'],
    pregnancySafe: 'consult',
    childSafe: 'avoid',
    claims: [
      { claim: '25g protein per scoop', verdict: 'verified', detail: 'Consistent with labeled macros.' },
      { claim: 'Zero sugar', verdict: 'partial', detail: 'Uses artificial sweeteners instead.' },
    ],
  },
  {
    id: 'rpt-003',
    productName: 'PureBaby Gentle Lotion',
    brand: 'PureBaby',
    category: 'Baby Products',
    image: '/baby-lotion-bottle-gentle.png',
    trustScore: 94,
    date: '2026-07-12',
    summary:
      'An excellent, minimal-ingredient baby lotion. Fragrance-free and free of common irritants. Safe for infants and highly suitable for sensitive skin.',
    reasons: [
      'Fragrance-free formulation',
      'No parabens or sulfates',
      'Pediatrician recommended actives',
      'Very low allergy risk',
    ],
    ingredients: [
      { name: 'Purified Water', purpose: 'Base', risk: 'safe', note: 'Inert solvent.' },
      { name: 'Shea Butter', purpose: 'Emollient', risk: 'safe', note: 'Deeply moisturizing, gentle.' },
      { name: 'Glycerin', purpose: 'Humectant', risk: 'safe', note: 'Draws moisture to skin.' },
      { name: 'Tocopherol (Vitamin E)', purpose: 'Antioxidant', risk: 'safe', note: 'Skin protective.' },
    ],
    healthRisks: [],
    allergyWarnings: ['Contains tree nut derivative (shea)'],
    pregnancySafe: 'safe',
    childSafe: 'safe',
    claims: [
      { claim: 'Hypoallergenic', verdict: 'verified', detail: 'Minimal ingredient list supports this.' },
      { claim: 'Pediatrician recommended', verdict: 'verified', detail: 'Formulation aligns with guidance.' },
    ],
  },
  {
    id: 'rpt-004',
    productName: 'EnergyBurst Sports Drink',
    brand: 'VoltAde',
    category: 'Beverages',
    image: '/sports-energy-drink-bottle.png',
    trustScore: 52,
    date: '2026-07-08',
    summary:
      'High sugar content and artificial dyes lower this product\u2019s trust score. Contains caffeine and colorants that are not recommended for children.',
    reasons: [
      'High added sugar content',
      'Artificial color (Red 40) detected',
      'Contains caffeine',
      'Some claims misleading',
    ],
    ingredients: [
      { name: 'High Fructose Corn Syrup', purpose: 'Sweetener', risk: 'high', note: 'Linked to metabolic concerns.' },
      { name: 'Citric Acid', purpose: 'Acidity regulator', risk: 'safe', note: 'Common, generally safe.' },
      { name: 'Red 40', purpose: 'Colorant', risk: 'caution', note: 'Artificial dye, hyperactivity concerns.' },
      { name: 'Caffeine', purpose: 'Stimulant', risk: 'moderate', note: 'Not suitable for children.' },
    ],
    healthRisks: ['High sugar intake', 'Caffeine sensitivity'],
    allergyWarnings: [],
    pregnancySafe: 'consult',
    childSafe: 'avoid',
    claims: [
      { claim: 'Boosts energy naturally', verdict: 'misleading', detail: 'Energy from sugar and caffeine, not natural.' },
      { claim: 'Electrolyte replenishment', verdict: 'partial', detail: 'Contains some electrolytes but low levels.' },
    ],
  },
]

export function getReport(id: string): TrustReport | undefined {
  return trustReports.find((r) => r.id === id)
}

export const dashboardStats = {
  productsAnalyzed: 128,
  averageTrustScore: 81,
  reportsSaved: 47,
  allergensFlagged: 19,
}

export const trustTrend = [
  { month: 'Feb', score: 72 },
  { month: 'Mar', score: 74 },
  { month: 'Apr', score: 78 },
  { month: 'May', score: 76 },
  { month: 'Jun', score: 83 },
  { month: 'Jul', score: 81 },
]

export const categoryBreakdown = [
  { category: 'Skincare', count: 42 },
  { category: 'Food', count: 31 },
  { category: 'Supplements', count: 24 },
  { category: 'Cosmetics', count: 18 },
  { category: 'Beverages', count: 13 },
]

export const pipelineSteps = [
  { key: 'upload', label: 'Upload Image', detail: 'Securely receiving product label' },
  { key: 'ocr', label: 'PaddleOCR', detail: 'Extracting text from label' },
  { key: 'recognition', label: 'Product Recognition', detail: 'Identifying product & brand' },
  { key: 'rag', label: 'RAG Retrieval', detail: 'Fetching ingredient knowledge' },
  { key: 'ollama', label: 'Ollama Analysis', detail: 'Llama 3.1 analyzing safety' },
  { key: 'report', label: 'Trust Report', detail: 'Generating your report' },
]

export function scoreColor(score: number): string {
  if (score >= 80) return 'var(--success)'
  if (score >= 60) return 'var(--warning)'
  return 'var(--danger)'
}

export function scoreLabel(score: number): string {
  if (score >= 80) return 'Highly Trusted'
  if (score >= 60) return 'Moderate'
  return 'Low Trust'
}

export const riskStyles: Record<RiskLevel, { label: string; className: string }> = {
  safe: { label: 'Safe', className: 'bg-success/10 text-success border-success/20' },
  moderate: { label: 'Moderate', className: 'bg-warning/10 text-warning border-warning/20' },
  caution: { label: 'Caution', className: 'bg-warning/15 text-warning border-warning/30' },
  high: { label: 'High Risk', className: 'bg-danger/10 text-danger border-danger/20' },
}
