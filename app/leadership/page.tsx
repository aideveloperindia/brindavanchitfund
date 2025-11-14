'use client'

import Navigation from '@/components/Navigation'
import { useLanguage } from '@/contexts/LanguageContext'

const leadership = [
  { name: "వవిలాల హనుమంత రెడ్డి", name_en: "Vavilala Hanumantha Reddy", role: "Chairman", role_te: "చైర్మన్" },
  { name: "పెంటా శ్రీనివాస్", name_en: "Penta Srinivas", role: "Managing Director", role_te: "మేనేజింగ్ డైరెక్టర్" },
  { name: "గాసిరెడ్డి జనార్ధన్ రెడ్డి", name_en: "Gasireddy Janardhan Reddy", role: "Director", role_te: "డైరెక్టర్" },
  { name: "కన్నా క్రిష్ణ", name_en: "Kanna Krishna", role: "Director", role_te: "డైరెక్టర్" }
]

export default function LeadershipPage() {
  const { language, t } = useLanguage()

  return (
    <div className='w-full min-h-screen bg-gray-50'>
      <Navigation />
      
      <div className='pt-24 pb-16 px-6'>
        <div className="max-w-6xl mx-auto">
          <h1 className='text-4xl md:text-5xl font-bold text-[#1B5E20] mb-12 text-center'>{t.leadership.title}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {leadership.map((person, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-200 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl text-white font-bold">
                    {language === 'te' ? person.name[0] : person.name_en[0]}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1B5E20] mb-2">
                  {language === 'te' ? person.name : person.name_en}
                </h3>
                <p className="text-[#C99B3B] font-semibold">
                  {language === 'te' ? person.role_te : person.role}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 text-center">
            <p className="text-gray-600">
              {t.leadership.note}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

