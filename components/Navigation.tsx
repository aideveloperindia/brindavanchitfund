'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getPathWithLanguage } from '@/lib/i18n'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, t, setLanguage } = useLanguage()

  const getLocalizedPath = (path: string) => {
    return getPathWithLanguage(path, language)
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between gap-4">
          <Link href={getLocalizedPath('/')} className="flex h-11 shrink-0 items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.svg"
              alt="Brindavan Chits"
              className="h-11 w-auto max-w-[220px] object-contain object-left sm:max-w-[260px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">
            <Link href={getLocalizedPath('/')} className="text-sm font-medium text-slate-700 transition-colors hover:text-[#0F2747]">
              {t.nav.home}
            </Link>
            <Link href={getLocalizedPath('/chits')} className="text-sm font-medium text-slate-700 transition-colors hover:text-[#0F2747]">
              {t.nav.chits}
            </Link>
            <Link href={getLocalizedPath('/news')} className="text-sm font-medium text-slate-700 transition-colors hover:text-[#0F2747]">
              {t.nav.news}
            </Link>
            <Link href={getLocalizedPath('/leadership')} className="text-sm font-medium text-slate-700 transition-colors hover:text-[#0F2747]">
              {t.nav.leadership}
            </Link>
            <Link href={getLocalizedPath('/contact')} className="text-sm font-medium text-slate-700 transition-colors hover:text-[#0F2747]">
              {t.nav.contact}
            </Link>

            {/* Language Toggle */}
            <button
              onClick={() => {
                const newLang = language === 'te' ? 'en' : 'te'
                setLanguage(newLang)
              }}
              className="ml-1 min-w-[76px] rounded-full border border-amber-300/50 bg-amber-300 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-200"
              aria-label="Toggle language"
            >
              {language === 'en' ? 'EN' : 'తెలుగు'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => {
                const newLang = language === 'te' ? 'en' : 'te'
                setLanguage(newLang)
              }}
              className="rounded-full border border-amber-300/50 bg-amber-300 px-3 py-1.5 text-xs font-semibold text-slate-950"
            >
              {language === 'en' ? 'EN' : 'తెలుగు'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 transition-colors hover:text-[#0F2747] focus:outline-none"
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
            <div className="space-y-1 border-t border-slate-200 bg-white px-2 py-3 shadow-lg">
              <Link href={getLocalizedPath('/')} onClick={() => setIsMenuOpen(false)} className="block rounded-xl px-3 py-2 font-medium text-slate-700 hover:bg-slate-100 hover:text-[#0F2747]">{t.nav.home}</Link>
              <Link href={getLocalizedPath('/chits')} onClick={() => setIsMenuOpen(false)} className="block rounded-xl px-3 py-2 font-medium text-slate-700 hover:bg-slate-100 hover:text-[#0F2747]">{t.nav.chits}</Link>
              <Link href={getLocalizedPath('/news')} onClick={() => setIsMenuOpen(false)} className="block rounded-xl px-3 py-2 font-medium text-slate-700 hover:bg-slate-100 hover:text-[#0F2747]">{t.nav.news}</Link>
              <Link href={getLocalizedPath('/leadership')} onClick={() => setIsMenuOpen(false)} className="block rounded-xl px-3 py-2 font-medium text-slate-700 hover:bg-slate-100 hover:text-[#0F2747]">{t.nav.leadership}</Link>
              <Link href={getLocalizedPath('/contact')} onClick={() => setIsMenuOpen(false)} className="block rounded-xl px-3 py-2 font-medium text-slate-700 hover:bg-slate-100 hover:text-[#0F2747]">{t.nav.contact}</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
