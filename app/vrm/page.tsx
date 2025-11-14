'use client'

import Navigation from '@/components/Navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import { getPathWithLanguage } from '@/lib/i18n'
import Link from 'next/link'

export default function VRMPage() {
  const { language, t } = useLanguage()
  const getLocalizedPath = (path: string) => getPathWithLanguage(path, language)

  return (
    <div className='w-full min-h-screen bg-gray-50'>
      <Navigation />
      
      <div className='pt-24 pb-16 px-6'>
        <div className="max-w-4xl mx-auto">
          <h1 className='text-4xl md:text-5xl font-bold text-[#1B5E20] mb-8 text-center'>{t.vrm.title}</h1>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#1B5E20] mb-6 text-center">
              {t.vrm.headline}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {t.vrm.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200"
                >
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-800 font-medium text-lg">{feature}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href={getLocalizedPath('/contact')}
                className="inline-block bg-[#1B5E20] hover:bg-[#2E7D32] text-white px-10 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg font-semibold min-h-[44px]"
              >
                {t.vrm.cta}
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-center">
              {language === 'te' ? 'VRM సిస్టమ్ ప్రయోజనాలు' : 'VRM System Benefits'}
            </h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-center">
                <span className="mr-3">✓</span>
                <span>{language === 'te' ? 'ఫీల్డ్ కార్యకలాపాలను సమర్థవంతంగా నిర్వహించండి' : 'Efficiently manage field operations'}</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3">✓</span>
                <span>{language === 'te' ? 'వాస్తవ సమయంలో ట్రాకింగ్ మరియు రిపోర్టింగ్' : 'Real-time tracking and reporting'}</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3">✓</span>
                <span>{language === 'te' ? 'సురక్షితమైన డేటా నిల్వ మరియు విశ్లేషణ' : 'Secure data storage and analytics'}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

