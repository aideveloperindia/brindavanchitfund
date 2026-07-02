export interface NewsItem {
  id: string
  date: string
  title_te: string
  title_en: string
  summary_te: string
  summary_en: string
  category?: string
}

export const newsItems: NewsItem[] = [
  {
    id: "1",
    date: "2025-01-15",
    title_te: "కొత్త చిట్టీ పథకాలు ప్రారంభం - 2025",
    title_en: "New Chit Schemes Launched - 2025",
    summary_te: "₹15 లక్షలు మరియు ₹20 లక్షల చిట్టీ పథకాలు ఇప్పుడు అందుబాటులో ఉన్నాయి. మరింత సమాచారం కోసం సంప్రదించండి.",
    summary_en: "₹15 Lakhs and ₹20 Lakhs chit schemes are now available. Contact us for more information.",
    category: "New Schemes"
  },
  {
    id: "2",
    date: "2024-12-20",
    title_te: "ఆన్‌లైన్ లైవ్ వేలాల విజయవంత ప్రారంభం",
    title_en: "Successful Launch of Live Online Auctions",
    summary_te: "మనం ఆన్‌లైన్ వేలా వ్యవస్థను విజయవంతంగా ప్రారంభించాము. సభ్యులు ఇంటి నుండే వేలాలలో పాల్గొనవచ్చు.",
    summary_en: "We have successfully launched our online auction system. Members can now participate in auctions from the comfort of their homes.",
    category: "Technology"
  },
  {
    id: "3",
    date: "2024-11-10",
    title_te: "17వ వార్షికోత్సవం విజయవంతంగా నిర్వహించబడింది",
    title_en: "17th Annual Day Celebrated Successfully",
    summary_te: "బృందావన్ చిట్టీలు తన 17వ వార్షికోత్సవాన్ని గ్రాండ్‌గా నిర్వహించింది. అన్ని సభ్యులు మరియు ఉద్యోగులు పాల్గొన్నారు.",
    summary_en: "Brindavan Chits celebrated its 17th Annual Day with grandeur. All members and employees participated in the celebrations.",
    category: "Events"
  },
  {
    id: "5",
    date: "2024-09-18",
    title_te: "30,000+ సభ్యుల మైల్‌స్టోన్ చేరుకున్నాము",
    title_en: "Reached 30,000+ Members Milestone",
    summary_te: "బృందావన్ చిట్టీలు 30,000+ సభ్యుల మైల్‌స్టోన్‌ను చేరుకుంది. మీ నమ్మకానికి కృతజ్ఞతలు!",
    summary_en: "Brindavan Chits has reached the milestone of 30,000+ members. Thank you for your trust!",
    category: "Achievement"
  },
  {
    id: "6",
    date: "2024-08-25",
    title_te: "కొత్త వారానికి చిట్టీ పథకం ప్రారంభం",
    title_en: "New Weekly Chit Scheme Launched",
    summary_te: "₹50,000 వారానికి చిట్టీ పథకం ఇప్పుడు అందుబాటులో ఉంది. వారానికి చెల్లింపు సౌకర్యం.",
    summary_en: "₹50,000 weekly chit scheme is now available. Convenient weekly payment option.",
    category: "New Schemes"
  },
  {
    id: "7",
    date: "2024-07-12",
    title_te: "సభ్యుల సంతృప్తి సర్వే - 95% సంతృప్తి రేటు",
    title_en: "Member Satisfaction Survey - 95% Satisfaction Rate",
    summary_te: "మా సభ్యుల సంతృప్తి సర్వేలో 95% సంతృప్తి రేటు నమోదైంది. మీ అభిప్రాయాలు మాకు విలువైనవి.",
    summary_en: "Our member satisfaction survey showed 95% satisfaction rate. Your feedback is valuable to us.",
    category: "Achievement"
  },
  {
    id: "8",
    date: "2024-06-30",
    title_te: "అర్ధ సంవత్సర విజయాలు - 2024",
    title_en: "Mid-Year Achievements - 2024",
    summary_te: "2024 అర్ధ సంవత్సరంలో 2,500+ క్రియాశీల సభ్యులు మరియు ₹50 కోట్ల+ చిట్టీ వాల్యూమ్‌ను సాధించాము.",
    summary_en: "In the first half of 2024, we achieved 2,500+ active members and ₹50+ crores in chit volume.",
    category: "Achievement"
  }
]

export function getLatestNews(count: number = 2): NewsItem[] {
  return newsItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count)
}
