'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { getPathWithLanguage } from '@/lib/i18n'

const quickLinks = [
  { href: '/', label_en: 'Home', label_te: 'హోమ్' },
  { href: '/chits', label_en: 'Our Chits', label_te: 'మా చిట్టీలు' },
  { href: '/gallery', label_en: 'Gallery', label_te: 'గ్యాలరీ' },
  { href: '/contact', label_en: 'Contact', label_te: 'సంప్రదించండి' },
]

export default function SiteFooter() {
  const { language } = useLanguage()

  const getLocalizedPath = (path: string) => getPathWithLanguage(path, language)

  return (
    <footer className="relative z-10 border-t border-slate-200/80 bg-gradient-to-b from-white/95 via-slate-50/95 to-sky-50/90 text-slate-800 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.9fr] lg:grid-cols-[1.35fr_0.95fr]">
          <div className="space-y-4">
            <Link href={getLocalizedPath('/')} className="inline-flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="Brindavan Chits Logo" className="h-10 w-auto max-w-[220px] object-contain" />
            </Link>
            <p className="max-w-xl text-sm leading-relaxed text-slate-600">
              {language === 'te'
                ? '2007 నుంచి కరీంనగర్ నుండి నమ్మకమైన చిట్టీ సేవలను అందిస్తున్నాము, ఇప్పుడు మరింత ఆధునికంగా మరియు కాంపాక్ట్ అనుభవంతో.'
                : 'Serving trusted chit fund services from Karimnagar since 2007, now with a more modern and compact experience.'}
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200/80 bg-white/70 p-5 shadow-sm shadow-slate-900/5">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#D9A441]">
              {language === 'te' ? 'త్వరిత లింకులు' : 'Quick Links'}
            </h3>
            <div className="grid gap-2 text-sm">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={getLocalizedPath(link.href)}
                  className="text-slate-600 transition-colors hover:text-[#0F2747]"
                >
                  {language === 'te' ? link.label_te : link.label_en}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200/80 pt-6">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-3 text-center sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-2">
            <span className="text-sm font-medium text-slate-600">
              © 2026 Brindavan Chits Karimnagar (India) Pvt. Ltd.
            </span>
            <span className="hidden text-slate-300 sm:inline">•</span>
            <a
              href="https://wa.me/919505009699"
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-wrap items-center justify-center gap-2 text-sm font-semibold text-[#0F2747] transition-colors hover:text-[#245C8E]"
            >
              <span>{language === 'te' ? 'Built by' : 'Built by'}</span>
              <Image src="/A-logo.png" alt="A-logo" width={24} height={24} className="h-6 w-6 rounded-full ring-1 ring-slate-200" />
              <span>AI Developer India</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
