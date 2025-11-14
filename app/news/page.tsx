'use client'

import Navigation from '@/components/Navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import { getPathWithLanguage } from '@/lib/i18n'
import { newsItems } from '@/lib/newsData'

export default function NewsPage() {
  const { language, t } = useLanguage()

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    if (language === 'te') {
      return date.toLocaleDateString('te-IN', { year: 'numeric', month: 'long', day: 'numeric' })
    }
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <div className='w-full min-h-screen bg-gray-50'>
      <Navigation />
      
      <div className='pt-24 pb-16 px-6'>
        <div className="max-w-4xl mx-auto">
          <h1 className='text-4xl md:text-5xl font-bold text-[#1B5E20] mb-12 text-center'>{t.news.title}</h1>

          <div className="space-y-6">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 md:p-8 border border-gray-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="text-sm text-[#C99B3B] font-semibold mb-2">
                      {formatDate(item.date)}
                    </div>
                    <h2 className="text-2xl font-bold text-[#1B5E20] mb-3">
                      {language === 'te' ? item.title_te : item.title_en}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {language === 'te' ? item.summary_te : item.summary_en}
                    </p>
                  </div>
                </div>
                <button className="mt-4 text-[#1B5E20] font-semibold hover:text-[#2E7D32] transition-colors">
                  {t.news.readMore} →
                </button>
              </div>
            ))}
          </div>

          {newsItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {language === 'te' ? 'వార్తలు లేవు' : 'No news available'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

