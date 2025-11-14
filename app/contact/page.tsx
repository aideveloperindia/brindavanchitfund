'use client'

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
    <div className='w-full min-h-screen bg-gray-50'>
      <Navigation />
      
      <div className='pt-24 pb-16 px-6'>
        <div className="max-w-6xl mx-auto">
          <h1 className='text-4xl md:text-5xl font-bold text-[#1B5E20] mb-12 text-center'>{t.contact.title}</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#1B5E20] mb-6">
                {language === 'te' ? 'సంప్రదింపు సమాచారం' : 'Contact Information'}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#1B5E20] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">{language === 'te' ? 'ఇమెయిల్' : 'Email'}</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-[#1B5E20] hover:text-[#2E7D32]">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#1B5E20] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">{language === 'te' ? 'ఫోన్' : 'Phone'}</p>
                    <a href={`tel:${contactInfo.phone}`} className="text-[#1B5E20] hover:text-[#2E7D32]">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#1B5E20] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">{language === 'te' ? 'చిరునామా' : 'Address'}</p>
                    <p className="text-gray-600">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#1B5E20] mb-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B5E20] focus:border-transparent min-h-[44px]"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B5E20] focus:border-transparent min-h-[44px]"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B5E20] focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B5E20] focus:border-transparent min-h-[44px]"
                    placeholder={t.contact.form.preferredTime}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1B5E20] text-white py-4 rounded-lg hover:bg-[#2E7D32] transition-colors font-semibold text-lg min-h-[44px]"
                >
                  {t.contact.form.submit}
                </button>
              </form>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              {language === 'te' ? 'మీరు మాకు సంప్రదించవచ్చు' : 'You Can Reach Us'}
            </h3>
            <p className="text-green-100 mb-6">
              {language === 'te' 
                ? 'మా బ్రాంచ్‌లు మరియు కార్యాలయ గంటల గురించి మరింత సమాచారం కోసం బ్రాంచ్‌లు పేజీని చూడండి'
                : 'Visit our Branches page for more information about our branch locations and office hours'
              }
            </p>
            <a
              href={getLocalizedPath('/branches')}
              className="inline-block bg-[#C99B3B] hover:bg-[#B88A2F] text-white px-8 py-3 rounded-full transition-colors font-semibold"
            >
              {t.nav.branches}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
