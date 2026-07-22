'use client'

import Navigation from '@/components/Navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import { branches } from '@/lib/branchData'

export default function BranchesPage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <Navigation />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F2747] via-[#245C8E] to-[#0F2747] px-6 pb-20 pt-32 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#D9A441] blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <h1 className="mb-6 animate-fade-in-up text-5xl font-black md:text-6xl lg:text-7xl">
            {language === 'te' ? 'మా శాఖలు' : 'Our Branches'}
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-white/90 md:text-2xl">
            {language === 'te'
              ? 'కరీంనగర్, జగిత్యాల, రామగుండం, మంచerial'
              : 'Karimnagar, Jagtial, Ramagundam, Mancherial'}
          </p>
        </div>
      </section>

      <div className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#0F2747] to-[#245C8E]">
                  <span className="text-3xl">📍</span>
                </div>
                <h3 className="mb-4 text-center text-xl font-bold text-[#0F2747]">
                  {language === 'te' ? branch.name_te : branch.name}
                </h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start">
                    <span className="mr-2 font-semibold">{language === 'te' ? 'చిరునామా:' : 'Address:'}</span>
                    <span>{language === 'te' ? branch.address_te : branch.address}</span>
                  </div>
                  {branch.phone && (
                    <div className="flex items-center">
                      <span className="mr-2 font-semibold">{language === 'te' ? 'ఫోన్:' : 'Phone:'}</span>
                      <a href={`tel:${branch.phone.replace(/-/g, '')}`} className="font-semibold text-[#0F2747] hover:text-[#245C8E]">
                        {branch.phone}
                      </a>
                    </div>
                  )}
                  <div className="flex items-center">
                    <span className="mr-2 font-semibold">{language === 'te' ? 'మొబైల్:' : 'Mobile:'}</span>
                    <a href={`tel:${branch.mobile}`} className="font-semibold text-[#0F2747] hover:text-[#245C8E]">
                      {branch.mobile}
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
