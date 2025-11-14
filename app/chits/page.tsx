'use client'

import Navigation from '@/components/Navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import { getPathWithLanguage } from '@/lib/i18n'
import Link from 'next/link'
import { useState } from 'react'

const fullChitCatalog = [
  { id: "CHT-100K-20M-25", name_en: "Classic 1,00,000 Chit", name_te: "క్లాసిక్ 1,00,000 చిట్టి", amount: 100000, months: [20], members: 25, frequency: "monthly", status: "active" },
  { id: "CHT-200K-20M-25", name_en: "2,00,000 Chit - 20M", name_te: "2,00,000 చిట్టి - 20 నెలలు", amount: 200000, months: [20, 25], members: 25, frequency: "monthly", status: "active" },
  { id: "CHT-300K-30M-30", name_en: "3,00,000 Chit", name_te: "3,00,000 చిట్టి", amount: 300000, months: [30], members: 30, frequency: "monthly", status: "active" },
  { id: "CHT-500K-50M-50", name_en: "5,00,000 Chit", name_te: "5,00,000 చిట్టి", amount: 500000, months: [50], members: 50, frequency: "monthly", status: "active" },
  { id: "CHT-1M-50M-50", name_en: "10,00,000 Chit", name_te: "10,00,000 చిట్టి", amount: 1000000, months: [50], members: 50, frequency: "monthly", status: "active" },
  { id: "CHT-15L-50M-50", name_en: "15,00,000 Chit", name_te: "15,00,000 చిట్టి", amount: 1500000, months: [50], members: 50, frequency: "monthly", status: "upcoming" },
  { id: "CHT-20L-50M-50", name_en: "20,00,000 Chit", name_te: "20,00,000 చిట్టి", amount: 2000000, months: [50], members: 50, frequency: "monthly", status: "upcoming" },
  { id: "CHT-50K-10W-25", name_en: "50,000 Weekly Chit", name_te: "50,000 వారానికిఈ చిట్టి", amount: 50000, months: [10], members: 25, frequency: "weekly", status: "active" },
  { id: "CHT-SPECIAL-25M-25", name_en: "Special 2-Months/25 Members", name_te: "స్పెషల్ 25 నెలలు చిట్టి", amount: 250000, months: [25], members: 25, frequency: "monthly", status: "active" }
]

export default function ChitsPage() {
  const { language, t } = useLanguage()
  const [filters, setFilters] = useState({
    status: 'all',
    frequency: 'all',
    minAmount: '',
    maxAmount: ''
  })

  const getLocalizedPath = (path: string) => getPathWithLanguage(path, language)

  const filteredChits = fullChitCatalog.filter(chit => {
    if (filters.status !== 'all' && chit.status !== filters.status) return false
    if (filters.frequency !== 'all' && chit.frequency !== filters.frequency) return false
    if (filters.minAmount && chit.amount < parseInt(filters.minAmount)) return false
    if (filters.maxAmount && chit.amount > parseInt(filters.maxAmount)) return false
    return true
  })

  return (
    <div className='w-full min-h-screen bg-gradient-to-b from-gray-50 to-white'>
      <Navigation />
      
      {/* Premium Header */}
      <section className='pt-32 pb-16 px-6 bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] text-white relative overflow-hidden'>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C99B3B] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-black mb-6'>{t.chits.title}</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            {language === 'te' 
              ? 'మీ అవసరాలకు అనుగుణంగా వివిధ చిట్టీ పథకాలు'
              : 'Various chit schemes tailored to your needs'
            }
          </p>
        </div>
      </section>

      <div className='py-16 px-6'>
        <div className="max-w-7xl mx-auto">
          {/* Premium Filters */}
          <div className="premium-card p-8 mb-12">
            <h2 className="text-2xl font-black text-[#1B5E20] mb-6">
              {language === 'te' ? 'ఫిల్టర్ చిట్టీలు' : 'Filter Chits'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">{t.chits.filters.status}</label>
                <select
                  value={filters.status}
                  onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1B5E20] focus:border-[#1B5E20] transition-all font-semibold"
                >
                  <option value="all">{language === 'te' ? 'అన్నీ' : 'All'}</option>
                  <option value="active">{t.chits.status.active}</option>
                  <option value="upcoming">{t.chits.status.upcoming}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">{t.chits.filters.frequency}</label>
                <select
                  value={filters.frequency}
                  onChange={(e) => setFilters({ ...filters, frequency: e.target.value })}
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1B5E20] focus:border-[#1B5E20] transition-all font-semibold"
                >
                  <option value="all">{language === 'te' ? 'అన్నీ' : 'All'}</option>
                  <option value="monthly">{t.chits.frequency.monthly}</option>
                  <option value="weekly">{t.chits.frequency.weekly}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">{language === 'te' ? 'కనీస మొత్తం' : 'Min Amount'}</label>
                <input
                  type="number"
                  value={filters.minAmount}
                  onChange={(e) => setFilters({ ...filters, minAmount: e.target.value })}
                  placeholder={language === 'te' ? '₹' : '₹'}
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1B5E20] focus:border-[#1B5E20] transition-all font-semibold"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">{language === 'te' ? 'గరిష్ట మొత్తం' : 'Max Amount'}</label>
                <input
                  type="number"
                  value={filters.maxAmount}
                  onChange={(e) => setFilters({ ...filters, maxAmount: e.target.value })}
                  placeholder={language === 'te' ? '₹' : '₹'}
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1B5E20] focus:border-[#1B5E20] transition-all font-semibold"
                />
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600 font-semibold">
              {language === 'te' 
                ? `${filteredChits.length} చిట్టీలు కనుగొనబడ్డాయి`
                : `${filteredChits.length} chits found`
              }
            </p>
          </div>

          {/* Premium Chits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredChits.map((chit, index) => (
              <div
                key={chit.id}
                className="premium-card p-8 hover-lift group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-[#1B5E20] mb-3 group-hover:text-[#2E7D32] transition-colors">
                      {language === 'te' ? chit.name_te : chit.name_en}
                    </h3>
                    <p className="text-4xl font-black text-[#C99B3B] mb-2">
                      ₹{chit.amount.toLocaleString('en-IN')}
                    </p>
                  </div>
                  {chit.status === 'active' && (
                    <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-green-200 text-green-800 rounded-full text-xs font-black whitespace-nowrap shadow-md">
                      {t.chits.status.active}
                    </span>
                  )}
                  {chit.status === 'upcoming' && (
                    <span className="px-4 py-2 bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 rounded-full text-xs font-black whitespace-nowrap shadow-md">
                      {t.chits.status.upcoming}
                    </span>
                  )}
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b-2 border-gray-100">
                    <span className="font-bold text-gray-600">{language === 'te' ? 'కాల వ్యవధి' : 'Duration'}</span>
                    <span className="font-black text-gray-900 text-lg">{chit.months.join(', ')} {language === 'te' ? 'నెలలు' : 'Months'}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b-2 border-gray-100">
                    <span className="font-bold text-gray-600">{language === 'te' ? 'సభ్యులు' : 'Members'}</span>
                    <span className="font-black text-gray-900 text-lg">{chit.members}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-bold text-gray-600">{language === 'te' ? 'పౌనఃపున్యం' : 'Frequency'}</span>
                    <span className="font-black text-gray-900 text-lg">
                      {language === 'te' 
                        ? (chit.frequency === 'monthly' ? 'నెలవారీ' : 'వారానికి')
                        : (chit.frequency === 'monthly' ? 'Monthly' : 'Weekly')
                      }
                    </span>
                  </div>
                </div>

                <Link
                  href={getLocalizedPath('/contact')}
                  className="block w-full text-center bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] text-white py-4 rounded-xl hover:from-[#2E7D32] hover:to-[#1B5E20] transition-all duration-300 font-black text-lg shadow-lg hover:shadow-xl transform hover:scale-105 min-h-[56px] flex items-center justify-center"
                >
                  {t.chits.viewDetails}
                </Link>
              </div>
            ))}
          </div>

          {filteredChits.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">🔍</div>
              <p className="text-2xl font-bold text-gray-500 mb-4">
                {language === 'te' ? 'చిట్టీలు కనుగొనబడలేదు' : 'No chits found'}
              </p>
              <p className="text-gray-400">
                {language === 'te' 
                  ? 'దయచేసి వేరే ఫిల్టర్‌లను ప్రయత్నించండి'
                  : 'Please try different filters'
                }
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
