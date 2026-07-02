'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import { getPathWithLanguage } from '@/lib/i18n'
import { newsItems } from '@/lib/newsData'

export default function NewsPage() {
  const { language, t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    if (language === 'te') {
      return date.toLocaleDateString('te-IN', { year: 'numeric', month: 'long', day: 'numeric' })
    }
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  const categories = ['all', 'New Schemes', 'Technology', 'Events', 'Achievement']
  const categoryLabels: Record<string, { en: string; te: string }> = {
    'all': { en: 'All News', te: 'అన్ని వార్తలు' },
    'New Schemes': { en: 'New Schemes', te: 'కొత్త పథకాలు' },
    'Technology': { en: 'Technology', te: 'సాంకేతికత' },
    'Events': { en: 'Events', te: 'ఈవెంట్‌లు' },
    'Achievement': { en: 'Achievements', te: 'సాధనలు' }
  }

  const filteredNews = selectedCategory === 'all' 
    ? newsItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    : newsItems
        .filter(item => item.category === selectedCategory)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const getCategoryColor = (category?: string) => {
    switch (category) {
      case 'New Schemes': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'Technology': return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'Events': return 'bg-sky-100 text-sky-800 border-sky-200'
      case 'Achievement': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className='w-full min-h-screen bg-gradient-to-b from-gray-50 to-white'>
      <Navigation />
      
      {/* Premium Header */}
      <section className='pt-32 pb-20 px-6 bg-gradient-to-br from-[#0F2747] via-[#245C8E] to-[#0F2747] text-white relative overflow-hidden'>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D9A441] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-black mb-6 animate-fade-in-up'>{t.news.title}</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            {language === 'te' 
              ? 'బ్రిందావన్ చిట్టీల తాజా ప్రకటనలు, శాఖ వివరాలు, కొత్త చిట్టీల ప్రారంభాలు, ముఖ్యమైన నోటీసులు'
              : 'Latest announcements, branch updates, new chit launches, and important notices from Brindavan Chits'
            }
          </p>
        </div>
      </section>

      <div className='py-16 px-6'>
        <div className="max-w-6xl mx-auto">
          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap gap-4 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#0F2747] text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                }`}
              >
                {language === 'te' ? categoryLabels[cat].te : categoryLabels[cat].en}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="space-y-6">
            {filteredNews.map((item, index) => (
              <div
                key={item.id}
                className="premium-card p-8 hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-sm text-[#D9A441] font-bold">
                        {formatDate(item.date)}
                      </div>
                      {item.category && (
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getCategoryColor(item.category)}`}>
                          {item.category}
                        </span>
                      )}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-[#0F2747] mb-4 group-hover:text-[#245C8E] transition-colors">
                      {language === 'te' ? item.title_te : item.title_en}
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {language === 'te' ? item.summary_te : item.summary_en}
                    </p>
                    <button className="text-[#0F2747] font-bold hover:text-[#245C8E] transition-colors flex items-center gap-2 group-hover:gap-3 duration-300">
                      {t.news.readMore} 
                      <span className="text-xl">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">📰</div>
              <p className="text-2xl font-bold text-gray-500 mb-4">
                {language === 'te' ? 'వార్తలు కనుగొనబడలేదు' : 'No news found'}
              </p>
              <p className="text-gray-400">
                {language === 'te' 
                  ? 'దయచేసి వేరే వర్గాన్ని ప్రయత్నించండి'
                  : 'Please try a different category'
                }
              </p>
            </div>
          )}

          {/* Stats Section */}
          <div className="premium-card p-8 mt-16 bg-gradient-to-br from-[#0F2747] to-[#245C8E] text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-black mb-2">{newsItems.length}</div>
                <div className="text-xl font-semibold">{language === 'te' ? 'మొత్తం వార్తలు' : 'Total News'}</div>
              </div>
              <div>
                <div className="text-5xl font-black mb-2">{new Set(newsItems.map(n => n.category)).size}</div>
                <div className="text-xl font-semibold">{language === 'te' ? 'వర్గాలు' : 'Categories'}</div>
              </div>
              <div>
                <div className="text-5xl font-black mb-2">2025</div>
                <div className="text-xl font-semibold">{language === 'te' ? 'ప్రస్తుత సంవత్సరం' : 'Current Year'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

