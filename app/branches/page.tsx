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
      
      {/* Premium Header */}
      <section className='pt-32 pb-20 px-6 bg-gradient-to-br from-[#0F2747] via-[#245C8E] to-[#0F2747] text-white relative overflow-hidden'>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D9A441] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-black mb-6 animate-fade-in-up'>
            {language === 'te' ? 'మా శాఖలు' : 'Our Branches'}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            {language === 'te' 
              ? 'కరీంనగర్, జగిత్యాల, గోదావరిఖాని'
              : 'Karimnagar, Jagtial, Godavarikhani'
            }
          </p>
        </div>
      </section>

      <div className='py-20 px-6'>
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0F2747] to-[#245C8E] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📍</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F2747] mb-4 text-center">
                  {branch.name}
                </h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start">
                    <span className="mr-2 font-semibold">{language === 'te' ? 'చిరునామా:' : 'Address:'}</span>
                    <span>{branch.address}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 font-semibold">{language === 'te' ? 'ఫోన్:' : 'Phone:'}</span>
                    <a href={`tel:${branch.phone}`} className="text-[#0F2747] hover:text-[#245C8E] font-semibold">
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

