'use client'

import Navigation from '@/components/Navigation'
import { useLanguage } from '@/contexts/LanguageContext'

type ProfileSection = {
  title: string
  paragraphs: readonly string[]
  bullets?: readonly string[]
  conclusion?: string
}

type ProfileCopy = {
  eyebrow: string
  name: string
  intro: string
  sections: readonly ProfileSection[]
  messageLabel: string
  message: string
}

const leadership = [
  {
    name: "శ్రీ వావిలాల హనుమంత రెడ్డి గారు",
    name_en: "Sri Vavilala Hanumanth Reddy",
    role: "Chairman",
    role_te: "చైర్మన్",
    appointed: "October 2007",
    years: "17+ Years",
  },
  {
    name: "పెంటా శ్రీనివాస్",
    name_en: "Penta Srinivas",
    role: "Managing Director",
    role_te: "మేనేజింగ్ డైరెక్టర్",
    appointed: "December 2011",
    years: "13+ Years",
  },
  {
    name: "గాసిరెడ్డి జనార్ధన్ రెడ్డి",
    name_en: "Gasireddy Janardhan Reddy",
    role: "Director",
    role_te: "డైరెక్టర్",
    appointed: "October 2007",
    years: "17+ Years",
  },
  {
    name: "కన్నా క్రిష్ణ",
    name_en: "Kanna Krishna",
    role: "Director",
    role_te: "డైరెక్టర్",
    appointed: "December 2011",
    years: "13+ Years",
  },
  {
    name: "శ్రీనివాస్ రావు ఆది",
    name_en: "Srinivas Rao Adi",
    role: "Director",
    role_te: "డైరెక్టర్",
    appointed: "October 2007",
    years: "17+ Years",
  },
  {
    name: "చంద్ర శేఖర్ చింత",
    name_en: "Chandra Shekar Chinta",
    role: "Director",
    role_te: "డైరెక్టర్",
    appointed: "October 2007",
    years: "17+ Years",
  },
  {
    name: "చక్రవర్తుల వేంకటగోపాల చారి",
    name_en: "Chakravarthula Venugopala Chary",
    role: "Director",
    role_te: "డైరెక్టర్",
    appointed: "October 2007",
    years: "17+ Years",
  },
  {
    name: "వీర రెడ్డి తడ",
    name_en: "Veera Reddy Thada",
    role: "Director",
    role_te: "డైరెక్టర్",
    appointed: "October 2007",
    years: "17+ Years",
  },
  {
    name: "వాసవి తుమ్మల",
    name_en: "Vasavi Tummala",
    role: "Director",
    role_te: "డైరెక్టర్",
    appointed: "October 2007",
    years: "17+ Years",
  },
  {
    name: "దొంపాటి సురేందర్ రెడ్డి",
    name_en: "Donpati Surendar Reddy",
    role: "Director",
    role_te: "డైరెక్టర్",
    appointed: "October 2007",
    years: "17+ Years",
  },
] as const

const hiddenDirectorNames = new Set(['Vala Hanmanthareddy'])

const chairmanProfile: Record<'en' | 'te', ProfileCopy> = {
  en: {
    eyebrow: 'Our Chairman',
    name: 'Sri Vavilala Hanumanth Reddy',
    intro:
      'In an era where values, ethics, and integrity are gradually fading from public life, Sri Vavilala Hanumanth Reddy stands as a rare and inspiring leader who has consistently upheld honesty, transparency, and commitment as the guiding principles of his life. Respected for giving utmost importance to trust and keeping his word, he has earned a distinguished place in society through decades of dedicated public service, responsible leadership, and a strong social vision.',
    sections: [
      {
        title: 'Public Service & Administrative Experience',
        paragraphs: [
          'Sri Vavilala Hanumanth Reddy has served the people with distinction in several key positions, earning widespread trust and respect.',
          'Across all these roles, he demonstrated transparent governance, ethical leadership, and unwavering dedication to public welfare.',
        ],
        bullets: [
          'Director – Urban Bank',
          'Chairman – Primary Cooperative Society',
          'Director – Cooperative Bank',
          'Chairman & Corporator – Karimnagar Municipal Corporation',
        ],
      },
      {
        title: 'Leadership in Business',
        paragraphs: [
          'Alongside public service, he has successfully established and managed diverse business ventures, contributing to economic growth and employment generation.',
        ],
        bullets: [
          'Proprietor – City Cable Network',
          'Owner – Granite Quarry',
          'Distributor for multiple leading companies dealing in essential commodities',
        ],
      },
      {
        title: 'Social, Spiritual & Community Service',
        paragraphs: [
          'With a deep sense of social commitment and spiritual values, Sri Hanumanth Reddy has actively supported and led several community initiatives.',
        ],
        bullets: [
          'Founder & Chief Trustee – Anjaneya Swamy Temple',
          'Trustee – Vemulawada Devasthanam',
          'President – Reddy Welfare Association',
        ],
        conclusion:
          'Through these roles, he continues to serve society beyond business and politics, guided by faith, culture, and compassion.',
      },
      {
        title: 'Brindavan Chit Funds – A Symbol of Trust',
        paragraphs: [
          'Under the visionary leadership of Sri Vavilala Hanumanth Reddy, Brindavan Chit Funds, established in 2007, has successfully completed 18 years of steady growth and excellence.',
          'Built on the foundation of trust, ethical practices, and customer-centric service, the company has earned a strong reputation for:',
        ],
        bullets: [
          'High professional standards',
          'Secure and transparent financial practices',
          'Reliable and quality service to customers',
        ],
        conclusion:
          'Today, Brindavan Chit Funds stands as a trusted financial institution, progressing confidently with customer satisfaction as its core strength.',
      },
    ],
    messageLabel: 'Message',
    message:
      'True leadership is defined by values, integrity, and service to society. Sri Vavilala Hanumanth Reddy exemplifies this belief through his life and work.',
  },
  te: {
    eyebrow: 'మా చైర్మన్',
    name: 'శ్రీ వావిలాల హనుమంత రెడ్డి గారు',
    intro:
      'విలువలు, నీతి, నిజాయితీ అనే మాటలు నేటి రాజకీయ మరియు వ్యాపార ప్రపంచంలో అరుదుగా కనిపిస్తున్న ఈ తరుణంలో, వాటినే తన జీవిత ధ్యేయంగా మార్చుకొని ప్రజాసేవలో అప్రతిహతంగా ముందుకు సాగుతున్న విశిష్ట వ్యక్తి శ్రీ వావిలాల హనుమంత రెడ్డి గారు.',
    sections: [
      {
        title: 'ప్రజాసేవ & పరిపాలనా అనుభవం',
        paragraphs: [
          'శ్రీ హనుమంత రెడ్డి గారు వివిధ కీలక పదవుల్లో పనిచేస్తూ ప్రజల విశ్వాసాన్ని సంపాదించారు.',
          'ఈ పదవులన్నింటిలోనూ వారు పారదర్శకత, నిబద్ధత, ఇచ్చిన మాటకు విలువ అనే మూల సూత్రాలతో సేవలు అందించారు.',
        ],
        bullets: [
          'అర్బన్ బ్యాంక్ డైరెక్టర్',
          'ప్రాథమిక సహకార సంఘం చైర్మన్',
          'కో-ఆపరేటివ్ బ్యాంక్ డైరెక్టర్',
          'కరీంనగర్ మున్సిపల్ కార్పొరేటర్ & చైర్మన్',
        ],
      },
      {
        title: 'వ్యాపార రంగంలో నాయకత్వం',
        paragraphs: [
          'ప్రజాసేవతో పాటు వ్యాపార రంగంలో కూడా వారు తనదైన ముద్ర వేశారు.',
        ],
        bullets: [
          'సిటీ కేబుల్ ప్రొప్రైటర్',
          'గ్రానైట్ క్వారీ యజమాని',
          'నిత్యావసర వస్తువుల అనేక ప్రముఖ కంపెనీలకు డిస్ట్రిబ్యూటర్',
        ],
        conclusion:
          'విభిన్న రంగాల్లో వ్యాపారాలు నిర్వహిస్తూ, ఉపాధి అవకాశాలను కల్పిస్తూ సమాజ అభివృద్ధికి తోడ్పడుతున్నారు.',
      },
      {
        title: 'ఆధ్యాత్మిక & సామాజిక సేవలు',
        paragraphs: [
          'సామాజిక బాధ్యతను కర్తవ్యంగా భావించిన వారు అనేక సేవా కార్యక్రమాలకు అండగా నిలిచారు.',
        ],
        bullets: [
          'ఆంజనేయ స్వామి ఆలయ నిర్మాణం – ప్రధాన ధర్మకర్త',
          'వేములవాడ దేవస్థానం ధర్మకర్త',
          'రెడ్డి సంక్షేమ సంఘం అధ్యక్షుడు',
        ],
        conclusion:
          'ఆధ్యాత్మికతతో పాటు సమాజ సంక్షేమమే వారి జీవిత దార్శనికత.',
      },
      {
        title: 'బృందావన్ చిట్ ఫండ్స్ – విశ్వాసానికి ప్రతీక',
        paragraphs: [
          'శ్రీ వావిలాల హనుమంత రెడ్డి గారి దూరదృష్టి, మార్గదర్శకత్వంతో 2007లో స్థాపించబడిన బృందావన్ చిట్ ఫండ్స్ సంస్థ నేటికి 18 విజయవంతమైన సంవత్సరాలు పూర్తి చేసుకొని దినదినాభివృద్ధి చెందుతోంది.',
          'నాణ్యమైన సేవలు, కస్టమర్ నమ్మకం, నైతిక విలువలతో',
        ],
        bullets: [
          'ఉన్నత ప్రమాణాలతో',
          'భద్రతతో కూడిన పెట్టుబడి అవకాశాలతో',
          'ప్రజల విశ్వాసాన్ని మూలధనంగా',
        ],
        conclusion:
          'ముందుకు సాగుతున్న సంస్థగా బృందావన్ చిట్ ఫండ్స్ నిలిచింది.',
      },
    ],
    messageLabel: 'సందేశం',
    message:
      'విలువలతో కూడిన నాయకత్వమే శాశ్వత విజయం అనే సిద్ధాంతానికి ప్రత్యక్ష నిదర్శనం మా చైర్మన్ శ్రీ వావిలాల హనుమంత రెడ్డి గారు.',
  },
} as const

export default function LeadershipPage() {
  const { language } = useLanguage()
  const profile = chairmanProfile[language]

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
          <section className='premium-card overflow-hidden border border-slate-200/80 bg-white/85 backdrop-blur'>
            <div className='bg-gradient-to-br from-[#0F2747] via-[#1F4B78] to-[#245C8E] px-6 py-8 text-white md:px-10 md:py-10'>
              <p className='text-xs font-semibold uppercase tracking-[0.35em] text-[#D9A441]'>
                {profile.eyebrow}
              </p>
              <h2 className='mt-3 text-3xl font-black leading-tight md:text-4xl'>
                {profile.name}
              </h2>
              <p className='mt-5 max-w-5xl text-base leading-8 text-white/90 md:text-lg'>
                {profile.intro}
              </p>
            </div>

            <div className='grid gap-5 p-6 md:p-8 lg:grid-cols-2'>
              {profile.sections.map((section, index) => (
                <article
                  key={section.title}
                  className='h-full rounded-3xl border border-slate-200/80 bg-[#F8FAFD] p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg md:p-6'
                  style={{ animationDelay: `${index * 0.06}s` }}
                >
                  <div className='mb-4 flex items-start justify-between gap-4'>
                    <h3 className='text-xl font-black leading-tight text-[#0F2747]'>
                      {section.title}
                    </h3>
                    <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D9A441]/10 text-sm font-black text-[#D9A441]'>
                      0{index + 1}
                    </span>
                  </div>

                  <div className='space-y-3 text-sm leading-7 text-slate-700 md:text-[15px]'>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  {section.bullets?.length ? (
                    <ul className='mt-4 space-y-2'>
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className='flex items-start gap-3 text-sm leading-7 text-slate-700 md:text-[15px]'>
                          <span className='mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D9A441]' />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {section.conclusion ? (
                    <p className='mt-4 rounded-2xl bg-[#0F2747]/5 px-4 py-3 text-sm leading-7 text-slate-700 md:text-[15px]'>
                      {section.conclusion}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </section>

          <section className='premium-card overflow-hidden border border-slate-200/80 bg-white/85 backdrop-blur'>
            <div className='border-b border-slate-200/80 px-6 py-5 md:px-8'>
              <p className='text-xs font-semibold uppercase tracking-[0.3em] text-[#D9A441]'>
                {profile.messageLabel}
              </p>
              <p className='mt-4 text-base leading-8 text-slate-700 md:text-lg'>
                {profile.message}
              </p>
            </div>
          </section>

          {managingDirector ? (
            <section className='space-y-8'>
              <h2 className='text-center text-3xl font-black text-[#0F2747] md:text-4xl'>
                {language === 'te' ? 'మేనేజింగ్ డైరెక్టర్' : 'Managing Director'}
              </h2>
              <div className='mx-auto max-w-md'>
                <div className='premium-card border border-slate-200/80 bg-white/90 p-8 text-center backdrop-blur hover-lift'>
                  <div className='mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-[#D9A441] to-[#B7791F] shadow-2xl'>
                    <span className='text-4xl font-black text-white'>
                      {language === 'te'
                        ? managingDirector.name[0]
                        : managingDirector.name_en[0]}
                    </span>
                  </div>
                  <h3 className='mb-3 text-2xl font-black text-[#0F2747]'>
                    {language === 'te'
                      ? managingDirector.name
                      : managingDirector.name_en}
                  </h3>
                  <p className='mb-4 text-lg font-bold text-[#D9A441]'>
                    {language === 'te'
                      ? managingDirector.role_te
                      : managingDirector.role}
                  </p>
                  <div className='flex items-center justify-center gap-4 text-sm text-slate-600'>
                    <span className='font-semibold'>
                      {language === 'te' ? 'నియామకం:' : 'Appointed:'}
                    </span>
                    <span className='font-bold'>{managingDirector.appointed}</span>
                  </div>
                  <div className='mt-2 font-bold text-[#0F2747]'>
                    {managingDirector.years} {language === 'te' ? 'సేవ' : 'of Service'}
                  </div>
                </div>
              </div>
            </section>
          ) : null}

          <section className='space-y-8'>
            <h2 className='text-center text-3xl font-black text-[#0F2747] md:text-4xl'>
              {language === 'te' ? 'డైరెక్టర్లు' : 'Board of Directors'}
            </h2>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {directors.map((person, index) => (
                <div
                  key={person.name_en}
                  className='premium-card group border border-slate-200/80 bg-white/90 p-6 text-center backdrop-blur hover-lift'
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className='mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#0F2747] to-[#245C8E] shadow-lg transition-transform duration-300 group-hover:scale-110'>
                    <span className='text-4xl font-black text-white'>
                      {language === 'te' ? person.name[0] : person.name_en[0]}
                    </span>
                  </div>
                  <h3 className='mb-2 text-lg font-black text-[#0F2747] transition-colors group-hover:text-[#245C8E]'>
                    {language === 'te' ? person.name : person.name_en}
                  </h3>
                  <p className='mb-3 font-bold text-[#D9A441]'>
                    {language === 'te' ? person.role_te : person.role}
                  </p>
                  <div className='space-y-1 text-sm text-slate-600'>
                    <div>
                      <span className='font-semibold'>
                        {language === 'te' ? 'నియామకం: ' : 'Appointed: '}
                      </span>
                      <span className='font-bold'>{person.appointed}</span>
                    </div>
                    <div className='font-bold text-[#0F2747]'>
                      {person.years} {language === 'te' ? 'సేవ' : 'Service'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}
