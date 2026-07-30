'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import { getPathWithLanguage } from '@/lib/i18n'
import { useState, useEffect } from 'react'
import { branches } from '@/lib/branchData'

const chitCatalog = [
  { id: "CHT-100K-20M-25", name_en: "Classic 1,00,000 Chit", name_te: "క్లాసిక్ 1,00,000 చిట్టి", amount: 100000, months: [20], members: 25, frequency: "monthly", status: "active" },
  { id: "CHT-200K-20M-25", name_en: "2,00,000 Chit - 20M", name_te: "2,00,000 చిట్టి - 20 నెలలు", amount: 200000, months: [20, 25], members: 25, frequency: "monthly", status: "active" },
  { id: "CHT-300K-30M-30", name_en: "3,00,000 Chit", name_te: "3,00,000 చిట్టి", amount: 300000, months: [30], members: 30, frequency: "monthly", status: "active" },
]

export default function HomePage() {
  const { language, t } = useLanguage()
  const [animatedNumbers, setAnimatedNumbers] = useState({
    founded: 0,
    customers: 0,
    members: 0
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const animateNumber = (target: number, key: keyof typeof animatedNumbers, duration: number = 2000) => {
      const start = 0
      const increment = target / (duration / 50)
      let current = start
      
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setAnimatedNumbers(prev => ({ ...prev, [key]: target }))
          clearInterval(timer)
        } else {
          setAnimatedNumbers(prev => ({ ...prev, [key]: Math.floor(current) }))
        }
      }, 50)
    }

    setTimeout(() => animateNumber(2007, 'founded'), 500)
    setTimeout(() => animateNumber(30000, 'customers'), 800)
    setTimeout(() => animateNumber(2500, 'members'), 1100)
  }, [])

  const getLocalizedPath = (path: string) => getPathWithLanguage(path, language)

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Navigation />

      {/* Premium Cinematic Hero Section */}
      <section className="relative pt-24 pb-32 px-6 min-h-[95vh] flex flex-col justify-start items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F2747] via-[#245C8E] to-[#0F2747]">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#D9A441]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Content */}
        <div className={`max-w-7xl mx-auto relative z-10 text-center transition-all duration-1000 mt-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8 animate-fade-in">
            <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 mb-8">
              <span className="text-white text-sm font-semibold">
                {language === 'te' ? '2007 నుంచి నమ్మకం' : 'Trusted Since 2007'}
              </span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight text-white">
            <span className="block animate-clarify-delay-1">{language === 'te' ? '2007 నుంచి మీ' : 'Modern. Secure.'}</span>
            <span className="block mt-2 animate-clarify-delay-2">{language === 'te' ? 'నమ్మకానికి నిలువెత్తు' : 'Transparent.'}</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {t.home.hero.sub}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link 
              href={getLocalizedPath('/chits')} 
              className="group relative bg-[#D9A441] hover:bg-[#B7791F] text-white px-12 py-5 rounded-full transition-all duration-500 shadow-2xl hover:shadow-2xl transform hover:scale-105 text-lg font-bold min-h-[56px] flex items-center justify-center overflow-hidden btn-premium"
            >
              <span className="relative z-10">{t.home.hero.primaryCta}</span>
            </Link>
            <Link 
              href={getLocalizedPath('/gallery')} 
              className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-12 py-5 rounded-full transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:scale-105 text-lg font-bold min-h-[56px] flex items-center justify-center"
            >
              {t.home.hero.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Trust Strip with Animation */}
      <section className="py-16 px-6 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: animatedNumbers.founded, label: t.home.trust.founded, icon: '📅' },
              { value: `${animatedNumbers.customers.toLocaleString()}+`, label: t.home.trust.customers, icon: '👥' },
              { value: `${animatedNumbers.members.toLocaleString()}+`, label: t.home.trust.activeMembers, icon: '⭐' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center group premium-card p-8 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-black text-[#0F2747] mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-semibold text-sm md:text-base uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0F2747] mb-6">
              {language === 'te' ? 'మా సేవలు' : 'Our Services'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === 'te' ? 'మీకు అందుబాటులో ఉన్న ప్రత్యేక సేవలు' : 'Specialized services tailored for you'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                href: '/leadership',
                icon: '👥',
                title: language === 'te' ? 'నాయకత్వం' : 'Leadership',
                desc: language === 'te' ? 'మా అనుభవజ్ఞులైన బోర్డు' : 'Meet our experienced board of directors',
                gradient: 'from-blue-500 to-blue-600',
                bgGradient: 'from-blue-50 to-blue-100'
              },
              { 
                href: '/branches',
                icon: '🏢',
                title: t.branches.title,
                desc: language === 'te' ? 'మీకు సమీపంలోని శాఖలను కనుగొనండి' : 'Find your nearest branch locations',
                gradient: 'from-slate-500 to-sky-600',
                bgGradient: 'from-slate-50 to-sky-100'
              },
              { 
                href: '/chits',
                icon: '💰',
                title: t.home.services.chits.title,
                desc: t.home.services.chits.desc,
                gradient: 'from-slate-500 to-cyan-600',
                bgGradient: 'from-slate-50 to-sky-100'
              }
            ].map((service, index) => (
              <Link 
                key={index}
                href={getLocalizedPath(service.href)}
                className="group premium-card p-10 hover-lift"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <span className="text-4xl">{service.icon}</span>
                </div>
                <h3 className="text-2xl font-black text-[#0F2747] mb-4 text-center group-hover:text-[#245C8E] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center text-lg leading-relaxed">
                  {service.desc}
                </p>
                <div className="mt-6 text-center">
                  <span className="text-[#0F2747] font-bold group-hover:translate-x-2 inline-block transition-transform">
                    {language === 'te' ? 'మరింత తెలుసుకోండి →' : 'Learn More →'}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-sky-50 to-white px-6 py-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-sky-300 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#D9A441]/40 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <h2 className="mb-6 text-4xl font-black text-[#0F2747] md:text-5xl lg:text-6xl">
            {t.gallery.title}
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-600">
            {t.gallery.subtitle}
          </p>
          <Link
            href={getLocalizedPath('/gallery')}
            className="group inline-flex min-h-[56px] items-center gap-3 rounded-full bg-gradient-to-r from-[#0F2747] to-[#245C8E] px-8 py-4 text-lg font-black text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:from-[#245C8E] hover:to-[#0F2747]"
          >
            <span>{t.gallery.viewAll}</span>
            <span className="text-2xl transition-transform group-hover:translate-x-2">→</span>
          </Link>
        </div>
      </section>

      {/* Premium Featured Chits Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0F2747] mb-6">
              {t.home.featuredChits}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === 'te' ? 'ప్రత్యేకంగా ఎంచుకున్న చిట్టీ పథకాలు' : 'Specially curated chit schemes'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chitCatalog.map((chit, index) => (
              <div 
                key={chit.id}
                className="premium-card p-8 hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-[#0F2747] mb-3 group-hover:text-[#245C8E] transition-colors">
                      {language === 'te' ? chit.name_te : chit.name_en}
                    </h3>
                    <p className="text-4xl font-black text-[#D9A441] mb-2">
                      ₹{chit.amount.toLocaleString('en-IN')}
                    </p>
                  </div>
                  {chit.status === 'active' && (
                    <span className="px-4 py-2 bg-gradient-to-r from-sky-100 to-sky-200 text-sky-800 rounded-full text-xs font-bold shadow-md">
                      {language === 'te' ? 'సక్రియ' : 'Active'}
                    </span>
                  )}
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-semibold">{language === 'te' ? 'కాల వ్యవధి' : 'Duration'}</span>
                    <span className="font-black text-gray-900">{chit.months.join(', ')} {language === 'te' ? 'నెలలు' : 'Months'}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-semibold">{language === 'te' ? 'సభ్యులు' : 'Members'}</span>
                    <span className="font-black text-gray-900">{chit.members}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600 font-semibold">{language === 'te' ? 'పౌనఃపున్యం' : 'Frequency'}</span>
                    <span className="font-black text-gray-900">
                      {language === 'te' 
                        ? (chit.frequency === 'monthly' ? 'నెలవారీ' : 'వారానికి')
                        : (chit.frequency === 'monthly' ? 'Monthly' : 'Weekly')
                      }
                    </span>
                  </div>
                </div>

                <Link 
                  href={getLocalizedPath('/chits')}
                  className="block w-full text-center bg-gradient-to-r from-[#0F2747] to-[#245C8E] text-white py-4 rounded-xl hover:from-[#245C8E] hover:to-[#0F2747] transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 min-h-[56px] flex items-center justify-center"
                >
                  {t.chits.viewDetails}
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href={getLocalizedPath('/chits')}
              className="inline-block px-10 py-4 bg-white border-2 border-[#0F2747] text-[#0F2747] rounded-full hover:bg-[#0F2747] hover:text-white transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {language === 'te' ? 'అన్ని చిట్టీలు చూడండి →' : 'View All Chits →'}
            </Link>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0F2747] mb-6">
              {t.branches.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === 'te' 
                ? 'మా శాఖలు మరియు సంప్రదింపు సమాచారం'
                : 'Our branch locations and contact information'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="premium-card p-8 hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#0F2747] to-[#245C8E] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <span className="text-4xl">📍</span>
                </div>
                <h3 className="text-xl font-black text-[#0F2747] mb-6 text-center group-hover:text-[#245C8E] transition-colors">
                  {language === 'te' ? branch.name_te : branch.name}
                </h3>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-start">
                    <span className="mr-3 font-bold text-gray-700 shrink-0">{language === 'te' ? 'చిరునామా:' : 'Address:'}</span>
                    <span className="text-sm leading-relaxed">{language === 'te' ? branch.address_te : branch.address}</span>
                  </div>
                  {branch.phone && (
                    <div className="flex items-center">
                      <span className="mr-3 font-bold text-gray-700">{language === 'te' ? 'ఫోన్:' : 'Phone:'}</span>
                      <a href={`tel:${branch.phone.replace(/-/g, '')}`} className="text-[#0F2747] hover:text-[#245C8E] font-bold transition-colors">
                        {branch.phone}
                      </a>
                    </div>
                  )}
                  <div className="flex items-center">
                    <span className="mr-3 font-bold text-gray-700">{language === 'te' ? 'మొబైల్:' : 'Mobile:'}</span>
                    <a href={`tel:${branch.mobile}`} className="text-[#0F2747] hover:text-[#245C8E] font-bold transition-colors">
                      {branch.mobile}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
