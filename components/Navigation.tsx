'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getPathWithLanguage } from '@/lib/i18n'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, t, setLanguage } = useLanguage()
  const pathname = usePathname()

  const getLocalizedPath = (path: string) => {
    return getPathWithLanguage(path, language)
  }

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href={getLocalizedPath('/')} className="flex items-center">
            <Image
              src="/LOGO.png"
              alt="Brindavan Chits Logo"
              width={60}
              height={60}
              className="mr-3"
            />
            <div>
              <h1 className="text-lg font-bold text-[#1B5E20]">Brindavan Chits</h1>
              <p className="text-xs text-gray-600">Karimnagar (India) Pvt. Ltd.</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href={getLocalizedPath('/')} className='text-gray-700 hover:text-[#1B5E20] transition-colors font-semibold text-base'>{t.nav.home}</Link>
            <Link href={getLocalizedPath('/chits')} className='text-gray-700 hover:text-[#1B5E20] transition-colors font-semibold text-base'>{t.nav.chits}</Link>
            <Link href={getLocalizedPath('/auction')} className='text-gray-700 hover:text-[#1B5E20] transition-colors font-semibold text-base'>{t.nav.auction}</Link>
            <Link href={getLocalizedPath('/vrm')} className='text-gray-700 hover:text-[#1B5E20] transition-colors font-semibold text-base'>{t.nav.vrm}</Link>
            <Link href={getLocalizedPath('/news')} className='text-gray-700 hover:text-[#1B5E20] transition-colors font-semibold text-base'>{t.nav.news}</Link>
            <Link href={getLocalizedPath('/leadership')} className='text-gray-700 hover:text-[#1B5E20] transition-colors font-semibold text-base'>{t.nav.leadership}</Link>
            
            {/* Language Toggle */}
            <button
              onClick={() => {
                const newLang = language === 'te' ? 'en' : 'te'
                setLanguage(newLang)
              }}
              className="px-4 py-2 rounded-full bg-[#1B5E20] text-white text-sm font-semibold hover:bg-[#2E7D32] transition-colors min-w-[70px] ml-2"
              aria-label="Toggle language"
            >
              {language === 'en' ? 'EN' : 'తెలుగు'}
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => {
                const newLang = language === 'te' ? 'en' : 'te'
                setLanguage(newLang)
              }}
              className="px-3 py-1.5 rounded-full bg-[#1B5E20] text-white text-xs font-medium"
            >
{language === 'en' ? 'EN' : 'తెలుగు'}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#1B5E20] focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link href={getLocalizedPath('/')} onClick={() => setIsMenuOpen(false)} className='block px-3 py-2 text-gray-700 hover:text-[#1B5E20] font-semibold'>{t.nav.home}</Link>
              <Link href={getLocalizedPath('/chits')} onClick={() => setIsMenuOpen(false)} className='block px-3 py-2 text-gray-700 hover:text-[#1B5E20] font-semibold'>{t.nav.chits}</Link>
              <Link href={getLocalizedPath('/auction')} onClick={() => setIsMenuOpen(false)} className='block px-3 py-2 text-gray-700 hover:text-[#1B5E20] font-semibold'>{t.nav.auction}</Link>
              <Link href={getLocalizedPath('/vrm')} onClick={() => setIsMenuOpen(false)} className='block px-3 py-2 text-gray-700 hover:text-[#1B5E20] font-semibold'>{t.nav.vrm}</Link>
              <Link href={getLocalizedPath('/news')} onClick={() => setIsMenuOpen(false)} className='block px-3 py-2 text-gray-700 hover:text-[#1B5E20] font-semibold'>{t.nav.news}</Link>
              <Link href={getLocalizedPath('/leadership')} onClick={() => setIsMenuOpen(false)} className='block px-3 py-2 text-gray-700 hover:text-[#1B5E20] font-semibold'>{t.nav.leadership}</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
