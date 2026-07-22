'use client'

import { useEffect, useRef, useState } from 'react'
import Navigation from '@/components/Navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import {
  chitCategories,
  chitCategorySummary,
  formatRupee,
  getSchemesByCategory,
  type ChitCategory,
  type ChitScheme,
} from '@/lib/chitData'
import { branches, buildWhatsAppLink, type Branch } from '@/lib/branchData'

const categoryLabels: Record<ChitCategory, { en: string; te: string }> = {
  'Short Term': { en: 'Short Term Chits', te: 'చిన్న కాల చిట్టీలు' },
  'Thirty Term': { en: 'Thirty Term Chits', te: '30 నెలల చిట్టీలు' },
  'Forty Term': { en: 'Forty Term Chits', te: '40 నెలల చిట్టీలు' },
  'Long Term': { en: 'Long Term Chits', te: 'దీర్ఘకాల చిట్టీలు' },
}

function WhatsAppIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function buildChitEnquiryMessage(scheme: ChitScheme, branchName: string, language: 'en' | 'te'): string {
  if (language === 'te') {
    return `నమస్కారం! నేను Brindavan Chits వెబ్‌సైట్ నుండి సంప్రదిస్తున్నాను.

నాకు ఈ చిట్టీలో చేరాలని ఉంది:
• వర్గం: ${scheme.category}
• సిరీస్: ${scheme.series}
• చిట్టీ విలువ: ${formatRupee(scheme.chitValue)}
• సబ్‌స్క్రిప్షన్: ${formatRupee(scheme.subscription)} / నెల
• నెలలు: ${scheme.months}
• సభ్యులు: ${scheme.members}
• గరిష్ట బిడ్డింగ్: ${scheme.maxBidding}

శాఖ: ${branchName}

దయచేసి మరిన్ని వివరాలు మరియు చేరిక ప్రక్రియ తెలియజేయండి. ధన్యవాదాలు!`
  }

  return `Hello! I am contacting you from the Brindavan Chits website.

I am interested in joining this chit scheme:
• Category: ${scheme.category}
• Series: ${scheme.series}
• Chit Value: ${formatRupee(scheme.chitValue)}
• Subscription: ${formatRupee(scheme.subscription)} / month
• Months: ${scheme.months}
• Members: ${scheme.members}
• Max Bidding: ${scheme.maxBidding}

Branch: ${branchName}

Please share more details and the joining process. Thank you!`
}

function BranchWhatsAppButton({
  branch,
  scheme,
  language,
}: {
  branch: Branch
  scheme: ChitScheme
  language: 'en' | 'te'
}) {
  const [showTip, setShowTip] = useState(false)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const branchLabel = language === 'te' ? branch.name_te : branch.shortName
  const message = buildChitEnquiryMessage(scheme, branch.shortName, language)
  const href = buildWhatsAppLink(branch.mobile, message)

  useEffect(() => {
    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current)
    }
  }, [])

  const clearHideTimer = () => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current)
      hideTimer.current = null
    }
  }

  const revealTip = (autoHideMs?: number) => {
    clearHideTimer()
    setShowTip(true)
    if (autoHideMs) {
      hideTimer.current = setTimeout(() => setShowTip(false), autoHideMs)
    }
  }

  const hideTip = () => {
    clearHideTimer()
    setShowTip(false)
  }

  return (
    <div
      className="relative flex flex-col items-center gap-0.5 px-1 py-1"
      onMouseEnter={() => revealTip()}
      onMouseLeave={hideTip}
    >
      {showTip && (
        <div
          role="tooltip"
          className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#0F2747] px-2 py-1 text-[10px] font-semibold text-white shadow-lg"
        >
          {branchLabel}
          <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-[#0F2747]" />
        </div>
      )}

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`WhatsApp ${branch.shortName} about ${scheme.series}`}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm transition-transform hover:scale-110 hover:bg-[#1ebe57]"
      >
        <WhatsAppIcon className="h-4 w-4" />
      </a>

      <button
        type="button"
        className="text-xs font-black text-[#0F2747] underline decoration-dotted underline-offset-2"
        aria-label={branchLabel}
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          revealTip(2500)
        }}
        onTouchStart={(e) => {
          e.stopPropagation()
          revealTip(2500)
        }}
      >
        {branch.code}
      </button>
    </div>
  )
}

function BranchWhatsAppLinks({
  scheme,
  language,
}: {
  scheme: ChitScheme
  language: 'en' | 'te'
}) {
  return (
    <div className="flex items-end justify-center gap-1 sm:gap-2">
      {branches.map((branch) => (
        <BranchWhatsAppButton
          key={branch.code}
          branch={branch}
          scheme={scheme}
          language={language}
        />
      ))}
    </div>
  )
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
        <table className="w-full min-w-[920px] text-sm">
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
              <th className="px-4 py-3 text-center font-bold text-[#0F2747]">
                {language === 'te' ? 'WhatsApp' : 'Join via WhatsApp'}
                <div className="mt-1 text-[10px] font-semibold text-slate-500">
                  K · J · R · M
                </div>
              </th>
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
                <td className="px-3 py-2">
                  <BranchWhatsAppLinks scheme={scheme} language={language} />
                </td>
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
          <div className="premium-card p-5 text-sm text-slate-600">
            <p className="font-semibold text-[#0F2747]">
              {language === 'te'
                ? 'చిట్టీలో చేరడానికి మీ శాఖ WhatsApp ఐకాన్‌పై నొక్కండి:'
                : 'To join a chit, tap the WhatsApp icon for your branch:'}
            </p>
            <div className="mt-3 flex flex-wrap gap-4">
              {branches.map((branch) => (
                <span key={branch.code} className="inline-flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] text-white">
                    <WhatsAppIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-black text-[#0F2747]">{branch.code}</span>
                  <span>= {branch.shortName}</span>
                </span>
              ))}
            </div>
          </div>

          {chitCategories.map((category) => (
            <ChitTable key={category} category={category} language={language} />
          ))}

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
