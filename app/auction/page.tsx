'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import { getPathWithLanguage } from '@/lib/i18n'

const blurredHighlights = [
  { title: 'Live bidding', title_te: 'లైవ్ బిడ్డింగ్', desc: 'Real-time auction flow', desc_te: 'వాస్తవ సమయ వేలం ప్రవాహం' },
  { title: 'Member view', title_te: 'సభ్యుల వీక్షణ', desc: 'Attendance and member list', desc_te: 'హాజరు మరియు సభ్యుల జాబితా' },
  { title: 'Winner updates', title_te: 'విజేత అప్డేట్స్', desc: 'Instant result updates', desc_te: 'తక్షణ ఫలితాల అప్డేట్స్' },
]

export default function AuctionPage() {
  const { language, t } = useLanguage()
  const getLocalizedPath = (path: string) => getPathWithLanguage(path, language)

  return (
    <div className="w-full min-h-screen overflow-hidden">
      <Navigation />

      <section className="relative isolate px-6 pb-16 pt-28 sm:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/45 p-6 shadow-2xl sm:p-8 lg:p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-slate-950/95" />
            <div className="absolute inset-0 blur-3xl opacity-50">
              <div className="absolute left-[-6rem] top-10 h-80 w-80 rounded-full bg-amber-400/20" />
              <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-sky-400/15" />
              <div className="absolute bottom-[-8rem] left-1/3 h-80 w-80 rounded-full bg-indigo-400/10" />
            </div>

            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-6">
                <span className="inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-amber-200">
                  {language === 'te' ? 'త్వరలో అందుబాటులోకి' : 'Launching Soon'}
                </span>
                <div className="space-y-3">
                  <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                    {t.auction.title}
                  </h1>
                  <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                    {language === 'te'
                      ? 'లైవ్ వేలం పేజీను ప్రస్తుతం మేము రీడిజైన్ చేస్తున్నాము. పూర్తి అనుభవం త్వరలో కొత్త రూపంలో వస్తుంది.'
                      : 'We are redesigning the live auction experience right now. The full flow will return soon in a fresh new form.'}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={getLocalizedPath('/contact')}
                    className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-bold text-slate-950 transition-transform hover:scale-105"
                  >
                    {language === 'te' ? 'సంప్రదించండి' : 'Contact Us'}
                  </Link>
                  <Link
                    href={getLocalizedPath('/chits')}
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
                  >
                    {language === 'te' ? 'చిట్టీలు చూడండి' : 'View Chits'}
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-3xl">
                  <div className="absolute inset-0 rounded-[28px] bg-white/5 blur-2xl" />
                  <div className="relative space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                          {language === 'te' ? 'స్థితి' : 'Status'}
                        </p>
                        <p className="mt-2 text-3xl font-black text-white">
                          {language === 'te' ? 'Coming Soon' : 'Coming Soon'}
                        </p>
                      </div>
                      <div className="rounded-2xl bg-sky-400/10 px-4 py-2 text-sm font-bold text-sky-200">
                        {language === 'te' ? 'బ్లర్ మోడ్' : 'Blur Mode'}
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {blurredHighlights.map((item, index) => (
                        <div
                          key={index}
                          className="rounded-2xl border border-white/10 bg-slate-900/40 p-4 blur-[1.5px]"
                        >
                          <p className="text-sm font-bold text-white">
                            {language === 'te' ? item.title_te : item.title}
                          </p>
                          <p className="mt-2 text-xs leading-relaxed text-slate-300">
                            {language === 'te' ? item.desc_te : item.desc}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-center backdrop-blur-sm">
                      <p className="text-sm font-semibold text-amber-100">
                        {language === 'te'
                          ? 'అన్ని వివరాలు ప్రస్తుతం మసకబారిన ప్రివ్యూగా చూపించబడ్డాయి.'
                          : 'Everything is intentionally softened into a blurred preview for now.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 grid gap-4 lg:grid-cols-3">
              {[
                language === 'te' ? 'ఫోర్‌మన్ ఫ్లో' : 'Foreman flow',
                language === 'te' ? 'మొబైల్-రెడీ UI' : 'Mobile-ready UI',
                language === 'te' ? 'రియల్ టైమ్ అప్డేట్స్' : 'Real-time updates',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-slate-200 backdrop-blur-sm">
                  {item}
                </div>
              ))}
            </div>

            <div className="relative z-10 mt-8 rounded-3xl border border-white/10 bg-slate-950/60 p-5 backdrop-blur-xl">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-400">
                    {language === 'te' ? 'నిరీక్షించండి' : 'Please wait'}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {language === 'te'
                      ? 'కొత్త లైవ్ ఆక్షన్ అనుభవం త్వరలో రాబోతోంది.'
                      : 'A refreshed live auction experience is on the way.'}
                  </p>
                </div>
                <Link
                  href={getLocalizedPath('/contact')}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
                >
                  {t.contact.title}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
