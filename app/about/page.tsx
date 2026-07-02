'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AboutPage() {
  const { language } = useLanguage()
  return (
    <div className='w-full h-full bg-white text-gray-800'>
      <Navigation />

      {/* Premium Hero Section */}
      <section className='pt-32 pb-20 px-6 bg-gradient-to-br from-[#0F2747] via-[#245C8E] to-[#0F2747] text-white relative overflow-hidden'>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D9A441] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-black mb-6 animate-fade-in-up'>
            {language === 'te' ? 'బృందావన్ చిట్టీలు గురించి' : 'About Brindavan Chits'}
          </h1>
          <p className='text-xl md:text-2xl text-white/90 max-w-3xl mx-auto'>
            {language === 'te' 
              ? '2007లో స్థాపించబడిన Brindavan చిట్టీలు, ఇప్పటి వరకు 30,000+ కుటుంబాలకు సేవలందించింది'
              : 'Established in 2007, Brindavan Chits has served over 30,000 customers across Telangana'
            }
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className='py-20 px-6 bg-gradient-to-b from-white to-gray-50'>
        <div className="max-w-7xl mx-auto">
          <div className="premium-card p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className='text-4xl md:text-5xl font-black text-[#0F2747] mb-8'>
                  {language === 'te' ? 'మా కథ' : 'Our Story'}
                </h2>
                <p className='mb-6 leading-relaxed text-lg md:text-xl text-gray-700'>
                  {language === 'te' 
                    ? '2007లో స్థాపించబడిన Brindavan చిట్టీలు, ఇప్పటి వరకు 30,000+ కుటుంబాలకు సేవలందించింది.'
                    : 'Established in 2007, Brindavan Chits has served over 30,000 customers across Telangana.'
                  }
                </p>
                <p className='mb-6 leading-relaxed text-lg md:text-xl text-gray-700'>
                  {language === 'te' 
                    ? 'నమ్మకం, పారదర్శకత, సమయపాలన — ఇవే మా మూల విలువలు.'
                    : 'We run with the values of trust, transparency, and timely service.'
                  }
                </p>
                <p className='leading-relaxed text-lg md:text-xl text-gray-700'>
                  {language === 'te' 
                    ? 'ప్రతి కుటుంబానికి సురక్షితమైన చిట్టీలను అందించడం మా లక్ష్యం.'
                    : 'Our mission is to provide safe and systematic chit schemes for every household.'
                  }
                </p>
              </div>
              <div className="text-center">
                <div className="premium-card p-8 bg-gradient-to-br from-[#0F2747]/10 to-[#245C8E]/10">
                  <Image
                    src="/LOGO.png"
                    alt="Brindavan Chits Logo"
                    width={350}
                    height={350}
                    className="mx-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className='py-20 px-6 bg-gradient-to-b from-gray-50 to-white'>
        <div className="max-w-7xl mx-auto">
          <h2 className='text-4xl md:text-5xl font-black text-[#0F2747] mb-12 text-center'>
            {language === 'te' ? 'సంస్థ సమాచారం' : 'Company Information'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="premium-card p-8 bg-gradient-to-br from-slate-50 to-sky-100/50 border-2 border-sky-200">
              <h3 className="text-2xl font-black text-[#0F2747] mb-6">
                {language === 'te' ? 'నమోదు వివరాలు' : 'Registration Details'}
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="font-black text-gray-800 block mb-1">{language === 'te' ? 'సంస్థ పేరు:' : 'Company Name:'}</span>
                  <p className="text-gray-700 text-lg">Brindavan Chits Karimnagar (India) Pvt. Ltd.</p>
                </div>
                <div>
                  <span className="font-black text-gray-800 block mb-1">{language === 'te' ? 'స్థాపిత సంవత్సరం:' : 'Established:'}</span>
                  <p className="text-gray-700 text-lg font-bold">2007</p>
                </div>
                <div>
                  <span className="font-black text-gray-800 block mb-1">{language === 'te' ? 'నమోదు చిరునామా:' : 'Registration Address:'}</span>
                  <p className="text-gray-700 text-lg">7-2-616, Mankamma Thota, Karimnagar, Telangana, India - 505001</p>
                </div>
              </div>
            </div>
            
            <div className="premium-card p-8 bg-gradient-to-br from-blue-50 to-blue-100/50 border-2 border-blue-200">
              <h3 className="text-2xl font-black text-[#0F2747] mb-6">
                {language === 'te' ? 'మా సాధనలు' : 'Our Achievements'}
              </h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-3xl">🏆</span>
                  </div>
                  <div>
                    <p className="font-black text-gray-800 text-lg">30,000+ {language === 'te' ? 'సభ్యులు సేవలు' : 'Members Served'}</p>
                    <p className="text-sm text-gray-600">{language === 'te' ? 'స్థాపన నుండి' : 'Since inception'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-slate-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-3xl">👥</span>
                  </div>
                  <div>
                    <p className="font-black text-gray-800 text-lg">2,500+ {language === 'te' ? 'క్రియాశీల సభ్యులు' : 'Active Members'}</p>
                    <p className="text-sm text-gray-600">{language === 'te' ? 'ప్రస్తుత సంవత్సరం' : 'This year'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-3xl">⏰</span>
                  </div>
                  <div>
                    <p className="font-black text-gray-800 text-lg">17+ {language === 'te' ? 'సంవత్సరాల అనుభవం' : 'Years Experience'}</p>
                    <p className="text-sm text-gray-600">{language === 'te' ? 'నమ్మకమైన సేవ' : 'Trusted service'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-3xl">🏢</span>
                  </div>
                  <div>
                    <p className="font-black text-gray-800 text-lg">3 {language === 'te' ? 'శాఖలు' : 'Branch Locations'}</p>
                    <p className="text-sm text-gray-600">{language === 'te' ? 'తెలంగాణలో' : 'Across Telangana'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className='py-20 px-6 bg-white'>
        <div className="max-w-7xl mx-auto">
          <h2 className='text-4xl md:text-5xl font-black text-[#0F2747] mb-12 text-center'>
            {language === 'te' ? 'బోర్డు ఆఫ్ డైరెక్టర్లు' : 'Board of Directors'}
          </h2>
          
          <div className="premium-card p-8 mb-8">
            <p className="text-center text-lg text-gray-600 mb-8">
              {language === 'te' 
                ? 'మా బోర్డు ఆఫ్ డైరెక్టర్లు 17+ సంవత్సరాల అనుభవంతో నాయకత్వం చేస్తున్నారు'
                : 'Our Board of Directors provides leadership with 17+ years of experience'
              }
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="premium-card p-6 bg-gradient-to-br from-sky-100 to-slate-50 border-2 border-sky-300 hover-lift">
                <h3 className="text-xl font-black text-[#0F2747] mb-3">{language === 'te' ? 'చైర్మన్' : 'Chairman'}</h3>
                <p className="text-gray-800 font-bold text-lg">Vavilala Hanumantha Reddy</p>
                <p className="text-sm text-gray-600 mt-2">{language === 'te' ? 'అక్టోబర్ 2007 నుండి' : 'Since October 2007'}</p>
              </div>
              
              <div className="premium-card p-6 bg-gradient-to-br from-blue-100 to-blue-50 border-2 border-blue-300 hover-lift">
                <h3 className="text-xl font-black text-[#0F2747] mb-3">{language === 'te' ? 'మేనేజింగ్ డైరెక్టర్' : 'Managing Director'}</h3>
                <p className="text-gray-800 font-bold text-lg">Penta Srinivas</p>
                <p className="text-sm text-gray-600 mt-2">{language === 'te' ? 'డిసెంబర్ 2011 నుండి' : 'Since December 2011'}</p>
              </div>
              
              <div className="premium-card p-6 bg-gradient-to-br from-purple-100 to-purple-50 border-2 border-purple-300 hover-lift md:col-span-2 lg:col-span-1">
                <h3 className="text-xl font-black text-[#0F2747] mb-3">{language === 'te' ? 'డైరెక్టర్లు' : 'Directors'}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {language === 'te' 
                    ? '9 డైరెక్టర్లు - అక్టోబర్ 2007 మరియు డిసెంబర్ 2011 నుండి సేవలు అందిస్తున్నారు'
                    : '9 Directors - Serving since October 2007 and December 2011'
                  }
                </p>
                <Link 
                  href={language === 'te' ? '/leadership' : '/leadership'}
                  className="text-[#0F2747] font-bold hover:text-[#245C8E] transition-colors mt-3 inline-block"
                >
                  {language === 'te' ? 'పూర్తి జాబితా చూడండి →' : 'View Full List →'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className='py-20 px-6 bg-gradient-to-b from-gray-50 to-white'>
        <div className="max-w-7xl mx-auto">
          <h2 className='text-4xl md:text-5xl font-black text-[#0F2747] mb-12 text-center'>
            {language === 'te' ? 'మా లక్ష్యం & విలువలు' : 'Our Mission & Values'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="premium-card p-8 bg-gradient-to-br from-slate-50 to-sky-100/50 border-2 border-sky-200">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-2xl font-black text-[#0F2747] mb-4">{language === 'te' ? 'మా లక్ష్యం' : 'Our Mission'}</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {language === 'te' 
                  ? 'మా సభ్యులు తమ ఆర్థిక లక్ష్యాలను సాధించడంలో సహాయపడే పారదర్శకమైన, నమ్మకమైన మరియు సమర్థవంతమైన చిట్టీ ఫండ్ సేవలను అందించడం, అత్యధిక సమగ్రత మరియు కస్టమర్ సేవ ప్రమాణాలను నిర్వహిస్తూ.'
                  : 'To provide transparent, reliable, and efficient chit fund services that help our members achieve their financial goals while maintaining the highest standards of integrity and customer service.'
                }
              </p>
            </div>
            
            <div className="premium-card p-8 bg-gradient-to-br from-blue-50 to-blue-100/50 border-2 border-blue-200">
              <div className="text-5xl mb-6">💎</div>
              <h3 className="text-2xl font-black text-[#0F2747] mb-4">{language === 'te' ? 'మా విలువలు' : 'Our Values'}</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-cyan-600 mt-1">✓</span>
                  <span className="text-lg">{language === 'te' ? 'అన్ని కార్యకలాపాలలో పారదర్శకత' : 'Transparency in all operations'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-cyan-600 mt-1">✓</span>
                  <span className="text-lg">{language === 'te' ? 'నమ్మకం మరియు విశ్వసనీయత' : 'Trust and reliability'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-cyan-600 mt-1">✓</span>
                  <span className="text-lg">{language === 'te' ? 'కస్టమర్ సంతృప్తి' : 'Customer satisfaction'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-cyan-600 mt-1">✓</span>
                  <span className="text-lg">{language === 'te' ? 'నవీకరణ మరియు సాంకేతికత' : 'Innovation and technology'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Reliability */}
      <section className='py-20 px-6 bg-white'>
        <div className="max-w-7xl mx-auto">
          <div className="premium-card p-12 bg-gradient-to-br from-[#0F2747] to-[#245C8E] text-white text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Trusted & Reliable</h2>
            <h3 className="text-3xl font-black mb-6 text-[#D9A441]">17+ Years of Excellence</h3>
            <p className="text-xl text-sky-100 mb-8 max-w-3xl mx-auto">
              {language === 'te' 
                ? 'పారదర్శకత, సమగ్రత మరియు ఉత్తమత్వానికి నిబద్ధతతో మా సమాజానికి సేవలు అందిస్తున్నాము. మీ నమ్మకం మా పునాది!'
                : 'Serving our community with transparency, integrity, and commitment to excellence. Your trust is our foundation!'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href={language === 'te' ? '/schedules' : '/schedules'} 
                className='bg-white text-[#0F2747] px-10 py-4 rounded-full font-black hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 text-lg btn-premium'
              >
                {language === 'te' ? 'షెడ్యూల్‌లు చూడండి' : 'View Schedules'}
              </Link>
              <Link 
                href={language === 'te' ? '/contact' : '/contact'} 
                className='bg-[#D9A441] text-white px-10 py-4 rounded-full font-black hover:bg-[#B7791F] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 text-lg border-2 border-white btn-premium'
              >
                {language === 'te' ? 'సంప్రదించండి' : 'Contact Us'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
