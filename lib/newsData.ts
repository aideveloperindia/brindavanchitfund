export interface NewsItem {
  id: string
  date: string
  title_te: string
  title_en: string
  summary_te: string
  summary_en: string
}

export const newsItems: NewsItem[] = [
  {
    id: "1",
    date: "2025-10-15",
    title_te: "బృందావన్-న్యూ బ్రాంచ్ ప్రారంభం",
    title_en: "Brindavan - New Branch Launched",
    summary_te: "కరీంనగర్ రీజనల్ బ్రాంచ్ కు కొత్త సేవలు ప్రారంభం",
    summary_en: "New services launched at Karimnagar regional branch"
  },
  {
    id: "2",
    date: "2025-09-01",
    title_te: "ఆన్‌లైన్ లైవ్ వేలాల మొదలు",
    title_en: "Live Online Auctions Launched",
    summary_te: "మనం మొదటి ఆన్‌లైన్ వేలాన్ని విజయవంతంగా నిర్వహించాము",
    summary_en: "First online auction conducted successfully"
  }
]

export function getLatestNews(count: number = 2): NewsItem[] {
  return newsItems.slice(0, count)
}

