'use client'

import Navigation from '@/components/Navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import {
  chitCategories,
  chitCategorySummary,
  formatRupee,
  getSchemesByCategory,
  type ChitCategory,
} from '@/lib/chitData'

const categoryLabels: Record<ChitCategory, { en: string; te: string }> = {
  'Short Term': { en: 'Short Term Chits', te: 'చిన్న కాల చిట్టీలు' },
  'Thirty Term': { en: 'Thirty Term Chits', te: '30 నెలల చిట్టీలు' },
  'Forty Term': { en: 'Forty Term Chits', te: '40 నెలల చిట్టీలు' },
  'Long Term': { en: 'Long Term Chits', te: 'దీర్ఘకాల చిట్టీలు' },
}

function ChitTable({
  category,
  language,
}: {
  category: ChitCategory
  language: 'en' | 'te'
}) {
  const schemes = getSchemesByCategory(category)
  const labels = categoryLabels[category]

  return (
    <div className="premium-card overflow-hidden p-0">
      <div className="border-b border-slate-200 bg-gradient-to-r from-[#0F2747] to-[#245C8E] px-6 py-4">
        <h2 className="text-xl font-black text-white md:text-2xl">
          {language === 'te' ? labels.te : labels.en}
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-sm">
          <thead className="bg-slate-100 text-left">
            <tr>
              <th className="px-4 py-3 font-bold text-[#0F2747]">{language === 'te' ? 'క్ర.సం.' : 'Sl. No.'}</th>
              <th className="px-4 py-3 font-bold text-[#0F2747]">{language === 'te' ? 'చిట్టీ విలువ' : 'Chit Value'}</th>
              <th className="px-4 py-3 font-bold text-[#0F2747]">{language === 'te' ? 'సిరీస్' : 'Series'}</th>
              <th className="px-4 py-3 font-bold text-[#0F2747]">{language === 'te' ? 'సబ్‌స్క్రిప్షన్' : 'Subscription'}</th>
              <th className="px-4 py-3 font-bold text-[#0F2747]">{language === 'te' ? 'నెలలు' : 'Months'}</th>
              <th className="px-4 py-3 font-bold text-[#0F2747]">{language === 'te' ? 'సభ్యులు' : 'Members'}</th>
              <th className="px-4 py-3 font-bold text-[#0F2747]">{language === 'te' ? 'గరిష్ట బిడ్డింగ్' : 'Max Bidding'}</th>
              <th className="px-4 py-3 font-bold text-[#0F2747]">{language === 'te' ? '1వ నెల' : '1st Month'}</th>
              <th className="px-4 py-3 font-bold text-[#0F2747]">{language === 'te' ? '2వ నెల' : '2nd Month'}</th>
            </tr>
          </thead>
          <tbody>
            {schemes.map((scheme) => (
              <tr key={`${category}-${scheme.series}`} className="border-t border-slate-200 hover:bg-slate-50">
                <td className="px-4 py-3 font-semibold">{scheme.slNo}</td>
                <td className="px-4 py-3 font-bold text-[#0F2747]">{formatRupee(scheme.chitValue)}</td>
                <td className="px-4 py-3 font-semibold">{scheme.series}</td>
                <td className="px-4 py-3">{formatRupee(scheme.subscription)}</td>
                <td className="px-4 py-3">{scheme.months}</td>
                <td className="px-4 py-3">{scheme.members}</td>
                <td className="px-4 py-3 font-semibold text-[#245C8E]">{scheme.maxBidding}</td>
                <td className="px-4 py-3">{formatRupee(scheme.firstMonth)}</td>
                <td className="px-4 py-3">{formatRupee(scheme.secondMonth)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function ChitsPage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-white">
      <Navigation />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F2747] to-[#245C8E] px-6 pb-16 pt-32 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#D9A441] blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Brindavan Chits Logo"
            className="mx-auto mb-6 h-16 w-auto max-w-[280px] object-contain brightness-0 invert"
          />
          <h1 className="mb-4 text-5xl font-black md:text-6xl lg:text-7xl">
            {language === 'te' ? 'మా చిట్టీలు' : 'Our Chit Schemes'}
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-white/90 md:text-xl">
            {language === 'te'
              ? 'M/S. BRINDAVAN CHITS KARIMNAGAR (INDIA) PVT. LTD. – ప్రస్తుత చిట్టీ షెడ్యూల్'
              : 'M/S. BRINDAVAN CHITS KARIMNAGAR (INDIA) PVT. LTD. – Current Schedule'}
          </p>
        </div>
      </section>

      <div className="px-6 py-16">
        <div className="mx-auto max-w-7xl space-y-12">
          {/* Chit Tables by Category */}
          {chitCategories.map((category) => (
            <ChitTable key={category} category={category} language={language} />
          ))}

          {/* Summary */}
          <div className="premium-card overflow-hidden p-0">
            <div className="border-b border-slate-200 bg-[#D9A441]/10 px-6 py-4">
              <h2 className="text-2xl font-black text-[#0F2747]">
                {language === 'te' ? 'సారాంశం' : 'Summary'}
              </h2>
            </div>
            <div className="overflow-x-auto p-6">
              <table className="w-full min-w-[480px] text-sm">
                <thead className="bg-slate-100 text-left">
                  <tr>
                    <th className="px-4 py-3 font-bold text-[#0F2747]">{language === 'te' ? 'వర్గం' : 'Category'}</th>
                    <th className="px-4 py-3 font-bold text-[#0F2747]">{language === 'te' ? 'నెలలు' : 'Months'}</th>
                    <th className="px-4 py-3 font-bold text-[#0F2747]">{language === 'te' ? 'కమిషన్' : 'Commission'}</th>
                    <th className="px-4 py-3 font-bold text-[#0F2747]">{language === 'te' ? 'పథకాలు' : 'Schemes'}</th>
                  </tr>
                </thead>
                <tbody>
                  {chitCategorySummary.map((row) => (
                    <tr key={row.category} className="border-t border-slate-200">
                      <td className="px-4 py-3 font-semibold">{row.category}</td>
                      <td className="px-4 py-3">{row.months}</td>
                      <td className="px-4 py-3">{row.commission}</td>
                      <td className="px-4 py-3 font-bold text-[#245C8E]">{row.count}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-[#0F2747] bg-slate-50 font-black">
                    <td className="px-4 py-3" colSpan={3}>
                      {language === 'te' ? 'మొత్తం చిట్టీ పథకాలు' : 'Total Chit Schemes'}
                    </td>
                    <td className="px-4 py-3 text-[#0F2747]">21</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
