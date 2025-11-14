'use client'

import Navigation from '@/components/Navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import { getPathWithLanguage } from '@/lib/i18n'

export default function QuotationPage() {
  const { language, t } = useLanguage()
  const getLocalizedPath = (path: string) => getPathWithLanguage(path, language)

  return (
    <div className='w-full min-h-screen bg-gray-50'>
      <Navigation />
      
      <div className='pt-24 pb-16 px-6'>
        <div className="max-w-6xl mx-auto">
          <h1 className='text-4xl md:text-5xl font-bold text-[#1B5E20] mb-8 text-center'>{t.quotation.title}</h1>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed text-center">
              {t.quotation.intro}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Standard Package */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 border-2 border-gray-200 hover:border-[#1B5E20] transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#1B5E20] mb-4">{t.quotation.plans.standard.name}</h3>
                  <div className="text-4xl font-bold text-[#C99B3B] mb-2">₹3,75,000</div>
                  <p className="text-gray-600 text-sm">{language === 'te' ? 'ఒక్కసారి చెల్లింపు' : 'One-time payment'}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {t.quotation.plans.standard.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-[#1B5E20] text-white py-3 rounded-lg hover:bg-[#2E7D32] transition-colors font-semibold min-h-[44px]">
                  {language === 'te' ? 'ఈ ప్యాకేజ్ ఎంచుకోండి' : 'Choose This Package'}
                </button>
              </div>

              {/* Premium Package */}
              <div className="bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] rounded-xl shadow-lg p-8 border-2 border-[#C99B3B] hover:border-[#B88A2F] transition-all duration-300 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-[#C99B3B] text-[#1B5E20] px-3 py-1 rounded-full text-xs font-bold">
                  {language === 'te' ? 'అత్యుత్తమ' : 'POPULAR'}
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-4">{t.quotation.plans.premium.name}</h3>
                  <div className="text-4xl font-bold text-[#C99B3B] mb-2">₹6,75,000</div>
                  <p className="text-green-100 text-sm">{language === 'te' ? 'ఒక్కసారి చెల్లింపు' : 'One-time payment'}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {t.quotation.plans.premium.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#C99B3B] mr-3 mt-1">✓</span>
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-[#C99B3B] text-white py-3 rounded-lg hover:bg-[#B88A2F] transition-colors font-semibold min-h-[44px]">
                  {language === 'te' ? 'ఈ ప్యాకేజ్ ఎంచుకోండి' : 'Choose This Package'}
                </button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                // In production, this would download the actual quotation PDF
                alert(language === 'te' ? 'క్వోటేషన్ డౌన్లోడ్ ప్రారంభమవుతుంది...' : 'Quotation download will start...')
              }}
              className="inline-block bg-[#1B5E20] hover:bg-[#2E7D32] text-white px-10 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg font-semibold min-h-[44px]"
            >
              {t.quotation.download}
            </a>
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-gray-700 text-center">
              {language === 'te' 
                ? 'కస్టమ్ ప్లాన్ కోసం దయచేసి మమ్మల్ని సంప్రదించండి'
                : 'Please contact us for custom plans'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
