'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import { getPathWithLanguage } from '@/lib/i18n'
import { useState } from 'react'

const contactInfo = {
  email: "info@brindavanchits.in",
  phone: "9705166110",
  address: "7-2-616 Mankamma Thota, Karimnagar - 505001"
}

export default function ContactPage() {
  const { language, t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    preferredTime: ''
  })

  const getLocalizedPath = (path: string) => getPathWithLanguage(path, language)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would submit to a backend
    alert(language === 'te' ? 'మెసేజ్ పంపబడింది!' : 'Message sent!')
    setFormData({ name: '', phone: '', message: '', preferredTime: '' })
  }

  return (
    <div className='w-full min-h-screen bg-gradient-to-b from-gray-50 to-white'>
      <Navigation />
      
      {/* Premium Header */}
      <section className='pt-32 pb-20 px-6 bg-gradient-to-br from-[#0F2747] via-[#245C8E] to-[#0F2747] text-white relative overflow-hidden'>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D9A441] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-black mb-6 animate-fade-in-up'>{t.contact.title}</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            {language === 'te' 
              ? 'మాకు సంప్రదించండి - మేము మీకు సహాయం చేయడానికి ఇక్కడ ఉన్నాము'
              : 'Get in Touch - We\'re Here to Help You'
            }
          </p>
        </div>
      </section>

      <div className='py-20 px-6'>
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="premium-card p-8 hover-lift">
              <h2 className="text-3xl font-black text-[#0F2747] mb-8">
                {language === 'te' ? 'సంప్రదింపు సమాచారం' : 'Contact Information'}
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0F2747] to-[#245C8E] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-3xl">📧</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-black text-gray-800 mb-2 text-lg">{language === 'te' ? 'ఇమెయిల్' : 'Email'}</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-[#0F2747] hover:text-[#245C8E] font-bold text-lg transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D9A441] to-[#B7791F] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-3xl">📞</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-black text-gray-800 mb-2 text-lg">{language === 'te' ? 'ఫోన్' : 'Phone'}</p>
                    <a href={`tel:${contactInfo.phone}`} className="text-[#0F2747] hover:text-[#245C8E] font-bold text-lg transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-3xl">📍</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-black text-gray-800 mb-2 text-lg">{language === 'te' ? 'చిరునామా' : 'Address'}</p>
                    <p className="text-gray-700 text-lg leading-relaxed">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="premium-card p-8 hover-lift">
              <h2 className="text-3xl font-black text-[#0F2747] mb-8">
                {language === 'te' ? 'మాకు సందేశం పంపండి' : 'Send Us a Message'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2747] focus:border-transparent min-h-[44px]"
                    placeholder={t.contact.form.name}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2747] focus:border-transparent min-h-[44px]"
                    placeholder={t.contact.form.phone}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2747] focus:border-transparent"
                    placeholder={t.contact.form.message}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.contact.form.preferredTime}
                  </label>
                  <input
                    type="text"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2747] focus:border-transparent min-h-[44px]"
                    placeholder={t.contact.form.preferredTime}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#0F2747] to-[#245C8E] hover:from-[#245C8E] hover:to-[#0F2747] text-white py-5 rounded-xl transition-all duration-300 font-black text-lg min-h-[56px] shadow-xl hover:shadow-2xl transform hover:scale-105 btn-premium"
                >
                  {t.contact.form.submit}
                </button>
              </form>
            </div>
          </div>

          <div className="premium-card p-10 bg-gradient-to-br from-[#0F2747] to-[#245C8E] text-white text-center">
            <h3 className="text-3xl font-black mb-4">
              {language === 'te' ? 'మీరు మాకు సంప్రదించవచ్చు' : 'You Can Reach Us'}
            </h3>
            <p className="text-white/95 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
              {language === 'te' 
                ? 'మా బ్రాంచ్‌లు మరియు కార్యాలయ గంటల గురించి మరింత సమాచారం కోసం బ్రాంచ్‌లు పేజీని చూడండి'
                : 'Visit our Branches page for more information about our branch locations and office hours'
              }
            </p>
            <Link
              href={getLocalizedPath('/branches')}
              className="inline-block bg-[#D9A441] hover:bg-[#B7791F] text-white px-10 py-4 rounded-full transition-all duration-300 font-black text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 btn-premium"
            >
              {t.nav.branches}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
