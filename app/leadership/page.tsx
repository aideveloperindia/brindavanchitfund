'use client'

import Navigation from '@/components/Navigation'
import { useLanguage } from '@/contexts/LanguageContext'

const leadership = [
  {
    name: "శ్రీ వావిలాల హనుమంత రెడ్డి గారు",
    name_en: "Sri Vavilala Hanumanth Reddy",
    role: "Chairman",
    role_te: "చైర్మన్",
  },
  {
    name: "పెంటా శ్రీనివాస్",
    name_en: "Penta Srinivas",
    role: "Managing Director",
    role_te: "మేనేజింగ్ డైరెక్టర్",
    years: "30 Years",
  },
  {
    name: "గాసిరెడ్డి జనార్ధన్ రెడ్డి",
    name_en: "Gasireddy Janardhan Reddy",
    role: "Director",
    role_te: "డైరెక్టర్",
  },
  {
    name: "కన్నా క్రిష్ణ",
    name_en: "Kanna Krishna",
    role: "Director",
    role_te: "డైరెక్టర్",
  },
  {
    name: "శ్రీనివాస్ రావు ఆది",
    name_en: "Srinivas Rao Adi",
    role: "Director",
    role_te: "డైరెక్టర్",
  },
  {
    name: "చంద్ర శేఖర్ చింత",
    name_en: "Chandra Shekar Chinta",
    role: "Director",
    role_te: "డైరెక్టర్",
  },
  {
    name: "చక్రవర్తుల వేంకటగోపాల చారి",
    name_en: "Chakravarthula Venugopala Chary",
    role: "Director",
    role_te: "డైరెక్టర్",
  },
  {
    name: "వీర రెడ్డి తడ",
    name_en: "Veera Reddy Thada",
    role: "Director",
    role_te: "డైరెక్టర్",
  },
  {
    name: "వాసవి తుమ్మల",
    name_en: "Vasavi Tummala",
    role: "Director",
    role_te: "డైరెక్టర్",
  },
] as const

const hiddenDirectorNames = new Set(['Vala Hanmanthareddy'])

export default function LeadershipPage() {
  const { language } = useLanguage()

  const chairman = leadership.find((person) => person.role === 'Chairman')
  const managingDirector = leadership.find(
    (person) => person.role === 'Managing Director'
  )
  const directors = leadership.filter(
    (person) => person.role === 'Director' && !hiddenDirectorNames.has(person.name_en)
  )

  return (
    <div className='min-h-screen w-full bg-transparent text-slate-900'>
      <Navigation />

      <section className='relative overflow-hidden px-6 pt-32 pb-16 text-white'>
        <div className='absolute inset-0 bg-gradient-to-br from-[#0F2747] via-[#173D66] to-[#245C8E]' />
        <div className='absolute inset-0 opacity-15'>
          <div className='absolute -right-24 top-0 h-80 w-80 rounded-full bg-white blur-3xl' />
          <div className='absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#D9A441] blur-3xl' />
        </div>
        <div className='relative z-10 mx-auto max-w-7xl text-center'>
          <h1 className='mb-6 text-5xl font-black animate-fade-in-up md:text-6xl lg:text-7xl'>
            {language === 'te' ? 'మా నాయకత్వం' : 'Our Leadership'}
          </h1>
          <p className='mx-auto max-w-3xl text-lg leading-8 text-white/90 md:text-xl'>
            {language === 'te'
              ? 'Brindavan చిట్టీలు నమ్మకంతో ముందుకు సాగడానికి అనుభవజ్ఞులైన బోర్డ్ ఆఫ్ డైరెక్టర్స్ పర్యవేక్షణలో పనిచేస్తున్నాయి'
              : 'Brindavan Chit Funds is guided by an experienced and dedicated board of directors who ensure trust and transparency.'}
          </p>
        </div>
      </section>

      <main className='px-6 py-14 md:py-16'>
        <div className='mx-auto max-w-7xl space-y-12'>
          {(chairman || managingDirector) ? (
            <section className='grid grid-cols-1 items-stretch gap-8 md:grid-cols-2'>
              {chairman ? (
                <div className='flex h-full flex-col gap-6'>
                  <h2 className='flex min-h-[3.5rem] items-center justify-center text-center text-2xl font-black text-white md:min-h-[4rem] md:text-3xl'>
                    {language === 'te' ? 'చైర్మన్' : 'Chairman'}
                  </h2>
                  <div className='premium-card flex min-h-[280px] flex-1 flex-col items-center justify-center border border-slate-200/80 bg-white/90 p-6 text-center backdrop-blur hover-lift md:p-8'>
                    <div className='mx-auto mb-5 flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0F2747] to-[#245C8E] shadow-2xl md:h-28 md:w-28'>
                      <span className='text-3xl font-black text-white md:text-4xl'>
                        {language === 'te' ? chairman.name[0] : chairman.name_en[0]}
                      </span>
                    </div>
                    <h3 className='mb-2 px-1 text-xl font-black leading-snug text-[#0F2747] md:text-2xl'>
                      {language === 'te' ? chairman.name : chairman.name_en}
                    </h3>
                    <p className='text-base font-bold text-[#D9A441] md:text-lg'>
                      {language === 'te' ? chairman.role_te : chairman.role}
                    </p>
                    {/* Spacer keeps tile height aligned with MD experience line */}
                    <div className='mt-4 min-h-[1.5rem]' aria-hidden />
                  </div>
                </div>
              ) : null}

              {managingDirector ? (
                <div className='flex h-full flex-col gap-6'>
                  <h2 className='flex min-h-[3.5rem] items-center justify-center text-center text-2xl font-black text-white md:min-h-[4rem] md:text-3xl'>
                    {language === 'te' ? 'మేనేజింగ్ డైరెక్టర్' : 'Managing Director'}
                  </h2>
                  <div className='premium-card flex min-h-[280px] flex-1 flex-col items-center justify-center border border-slate-200/80 bg-white/90 p-6 text-center backdrop-blur hover-lift md:p-8'>
                    <div className='mx-auto mb-5 flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#D9A441] to-[#B7791F] shadow-2xl md:h-28 md:w-28'>
                      <span className='text-3xl font-black text-white md:text-4xl'>
                        {language === 'te'
                          ? managingDirector.name[0]
                          : managingDirector.name_en[0]}
                      </span>
                    </div>
                    <h3 className='mb-2 px-1 text-xl font-black leading-snug text-[#0F2747] md:text-2xl'>
                      {language === 'te'
                        ? managingDirector.name
                        : managingDirector.name_en}
                    </h3>
                    <p className='text-base font-bold text-[#D9A441] md:text-lg'>
                      {language === 'te'
                        ? managingDirector.role_te
                        : managingDirector.role}
                    </p>
                    <div className='mt-4 min-h-[1.5rem] text-sm font-bold text-[#0F2747] md:text-base'>
                      {managingDirector.years} {language === 'te' ? 'అనుభవం' : 'Experience'}
                    </div>
                  </div>
                </div>
              ) : null}
            </section>
          ) : null}

          <section className='space-y-8'>
            <h2 className='text-center text-3xl font-black text-white md:text-4xl'>
              {language === 'te' ? 'డైరెక్టర్లు' : 'Board of Directors'}
            </h2>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {directors.map((person, index) => (
                <div
                  key={person.name_en}
                  className='premium-card group border border-slate-200/80 bg-white/90 p-6 text-center backdrop-blur hover-lift'
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <h3 className='mb-2 text-lg font-black text-[#0F2747] transition-colors group-hover:text-[#245C8E]'>
                    {language === 'te' ? person.name : person.name_en}
                  </h3>
                  <p className='font-bold text-[#D9A441]'>
                    {language === 'te' ? person.role_te : person.role}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}
