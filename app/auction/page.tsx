'use client'

import Navigation from '@/components/Navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import { getPathWithLanguage } from '@/lib/i18n'
import Link from 'next/link'

export default function AuctionPage() {
  const { language, t } = useLanguage()
  const getLocalizedPath = (path: string) => getPathWithLanguage(path, language)

  return (
    <div className='w-full min-h-screen bg-gray-50'>
      <Navigation />
      
      <div className='pt-24 pb-16 px-6'>
        <div className="max-w-4xl mx-auto">
          <h1 className='text-4xl md:text-5xl font-bold text-[#1B5E20] mb-8 text-center'>{t.auction.title}</h1>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed text-center">
              {t.auction.intro}
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 mb-8 border border-blue-200">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🔨</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#1B5E20] mb-4 text-center">
                {language === 'te' ? 'ఆన్‌లైన్ వేలం సిస్టమ్' : 'Online Auction System'}
              </h3>
              <p className="text-gray-600 text-center mb-6">
                {language === 'te' 
                  ? 'ఫోర్మన్ లింక్ సృష్టించి, సభ్యులు ఆన్‌లైన్‌లో పాల్గొనవచ్చు'
                  : 'Foreman creates link, members can join online'
                }
              </p>
            </div>

            <div className="text-center">
              <Link
                href={getLocalizedPath('/contact')}
                className="inline-block bg-[#1B5E20] hover:bg-[#2E7D32] text-white px-10 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg font-semibold min-h-[44px]"
              >
                {t.auction.cta}
              </Link>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <p className="text-sm text-gray-700 text-center">
              {t.auction.note}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

