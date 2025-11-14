'use client'

import Navigation from '@/components/Navigation'
import { useLanguage } from '@/contexts/LanguageContext'

const branches = [
  {
    name: "Head Office - Karimnagar",
    address: "7-2-616, Mankamma Thota, Karimnagar - 505001",
    phone: "0878-2269666"
  },
  {
    name: "Jagtial Branch",
    address: "NGO Building, Tahasil Chowrastha, Jagtial - 505327",
    phone: "08724-226966"
  },
  {
    name: "Godavarikhani / Ramagundam Branch",
    address: "FCI 'X' Road, Godavarikhani - 505209",
    phone: "08728-274166"
  }
]

export default function BranchesPage() {
  const { language, t } = useLanguage()

  return (
    <div className='w-full min-h-screen bg-gray-50'>
      <Navigation />
      
      <div className='pt-24 pb-16 px-6'>
        <div className="max-w-6xl mx-auto">
          <h1 className='text-4xl md:text-5xl font-bold text-[#1B5E20] mb-12 text-center'>{t.branches.title}</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📍</span>
                </div>
                <h3 className="text-xl font-bold text-[#1B5E20] mb-4 text-center">
                  {branch.name}
                </h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start">
                    <span className="mr-2 font-semibold">{language === 'te' ? 'చిరునామా:' : 'Address:'}</span>
                    <span>{branch.address}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 font-semibold">{language === 'te' ? 'ఫోన్:' : 'Phone:'}</span>
                    <a href={`tel:${branch.phone}`} className="text-[#1B5E20] hover:text-[#2E7D32] font-semibold">
                      {branch.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

