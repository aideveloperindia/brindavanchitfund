export type ChitCategory = 'Short Term' | 'Thirty Term' | 'Forty Term' | 'Long Term'

export interface ChitScheme {
  slNo: number
  chitValue: number
  series: string
  subscription: number
  months: number
  members: number
  maxBidding: string
  firstMonth: number
  secondMonth: number
  category: ChitCategory
}

export const chitSchemes: ChitScheme[] = [
  // Short Term Chits (25 months, 30% commission)
  { slNo: 1, chitValue: 100000, series: 'ST B', subscription: 4000, months: 25, members: 25, maxBidding: '30%', firstMonth: 4100, secondMonth: 3000, category: 'Short Term' },
  { slNo: 2, chitValue: 200000, series: 'ST D', subscription: 8000, months: 25, members: 25, maxBidding: '30%', firstMonth: 8200, secondMonth: 6000, category: 'Short Term' },
  { slNo: 3, chitValue: 500000, series: 'ST F', subscription: 20000, months: 25, members: 25, maxBidding: '30%', firstMonth: 20300, secondMonth: 15000, category: 'Short Term' },
  { slNo: 4, chitValue: 2500000, series: 'ST Z', subscription: 100000, months: 25, members: 25, maxBidding: '30%', firstMonth: 100300, secondMonth: 75000, category: 'Short Term' },
  // Thirty Term Chits (30 months, 30% commission)
  { slNo: 1, chitValue: 3000000, series: 'TT Z', subscription: 100000, months: 30, members: 30, maxBidding: '30%', firstMonth: 100300, secondMonth: 75000, category: 'Thirty Term' },
  { slNo: 2, chitValue: 300000, series: 'TT C', subscription: 10000, months: 30, members: 30, maxBidding: '30%', firstMonth: 10200, secondMonth: 7000, category: 'Thirty Term' },
  // Forty Term Chits (40 months, 35% commission)
  { slNo: 1, chitValue: 100000, series: 'FT B', subscription: 2500, months: 40, members: 40, maxBidding: '35%', firstMonth: 2600, secondMonth: 1750, category: 'Forty Term' },
  { slNo: 2, chitValue: 200000, series: 'FT C', subscription: 5000, months: 40, members: 40, maxBidding: '35%', firstMonth: 5200, secondMonth: 3500, category: 'Forty Term' },
  { slNo: 3, chitValue: 300000, series: 'FT D', subscription: 7500, months: 40, members: 40, maxBidding: '35%', firstMonth: 7700, secondMonth: 5250, category: 'Forty Term' },
  { slNo: 4, chitValue: 500000, series: 'FT F', subscription: 12500, months: 40, members: 40, maxBidding: '35%', firstMonth: 12800, secondMonth: 8750, category: 'Forty Term' },
  { slNo: 5, chitValue: 1000000, series: 'FT G', subscription: 25000, months: 40, members: 40, maxBidding: '35%', firstMonth: 25300, secondMonth: 17500, category: 'Forty Term' },
  { slNo: 6, chitValue: 4000000, series: 'FT Z', subscription: 100000, months: 40, members: 40, maxBidding: '35%', firstMonth: 100300, secondMonth: 70000, category: 'Forty Term' },
  { slNo: 7, chitValue: 8000000, series: 'FT V', subscription: 200000, months: 40, members: 40, maxBidding: '35%', firstMonth: 200300, secondMonth: 140000, category: 'Forty Term' },
  // Long Term Chits (50 months, 40% commission)
  { slNo: 1, chitValue: 250000, series: 'LT F', subscription: 5000, months: 50, members: 50, maxBidding: '40%', firstMonth: 5200, secondMonth: 3250, category: 'Long Term' },
  { slNo: 2, chitValue: 300000, series: 'LT G', subscription: 6000, months: 50, members: 50, maxBidding: '40%', firstMonth: 6200, secondMonth: 3900, category: 'Long Term' },
  { slNo: 3, chitValue: 500000, series: 'LT M', subscription: 10000, months: 50, members: 50, maxBidding: '40%', firstMonth: 10300, secondMonth: 6500, category: 'Long Term' },
  { slNo: 4, chitValue: 1000000, series: 'LT J', subscription: 20000, months: 50, members: 50, maxBidding: '40%', firstMonth: 20300, secondMonth: 13000, category: 'Long Term' },
  { slNo: 5, chitValue: 1500000, series: 'LT X', subscription: 30000, months: 50, members: 50, maxBidding: '40%', firstMonth: 30300, secondMonth: 19500, category: 'Long Term' },
  { slNo: 6, chitValue: 2000000, series: 'LT T', subscription: 40000, months: 50, members: 50, maxBidding: '40%', firstMonth: 40300, secondMonth: 26000, category: 'Long Term' },
  { slNo: 7, chitValue: 2500000, series: 'LT Z', subscription: 50000, months: 50, members: 50, maxBidding: '40%', firstMonth: 50300, secondMonth: 32500, category: 'Long Term' },
  { slNo: 8, chitValue: 5000000, series: 'LT V', subscription: 100000, months: 50, members: 50, maxBidding: '40%', firstMonth: 100300, secondMonth: 65000, category: 'Long Term' },
]

export const chitCategorySummary = [
  { category: 'Short Term' as ChitCategory, months: 25, commission: '30%', count: 4 },
  { category: 'Thirty Term' as ChitCategory, months: 30, commission: '30%', count: 2 },
  { category: 'Forty Term' as ChitCategory, months: 40, commission: '35%', count: 7 },
  { category: 'Long Term' as ChitCategory, months: 50, commission: '40%', count: 8 },
]

export const chitCategories: ChitCategory[] = ['Short Term', 'Thirty Term', 'Forty Term', 'Long Term']

export function formatRupee(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`
}

export function getSchemesByCategory(category: ChitCategory): ChitScheme[] {
  return chitSchemes.filter((scheme) => scheme.category === category)
}
