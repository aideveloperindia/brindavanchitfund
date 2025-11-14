export type Language = 'te' | 'en'

export const defaultLanguage: Language = 'en'
export const supportedLanguages: Language[] = ['en', 'te']

export function getLanguageFromPath(pathname: string): Language {
  if (pathname.startsWith('/en')) return 'en'
  if (pathname.startsWith('/te')) return 'te'
  return defaultLanguage
}

export function getPathWithLanguage(pathname: string, lang: Language): string {
  // Remove existing language prefix if present
  let pathWithoutLang = pathname.replace(/^\/(te|en)/, '')
  // If path is empty after removing prefix, set to root
  if (!pathWithoutLang || pathWithoutLang === '') {
    pathWithoutLang = '/'
  }
  // Add language prefix
  if (pathWithoutLang === '/') {
    return lang === defaultLanguage ? '/te' : '/en'
  }
  return `/${lang}${pathWithoutLang}`
}

export function persistLanguage(lang: Language) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('preferred-language', lang)
    document.cookie = `language=${lang};path=/;max-age=31536000`
  }
}

export function getPersistedLanguage(): Language {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('preferred-language')
    if (stored && (stored === 'te' || stored === 'en')) {
      return stored as Language
    }
  }
  return defaultLanguage
}

