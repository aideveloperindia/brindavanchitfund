import type { Metadata, Viewport } from 'next'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import SiteBackdrop from '@/components/SiteBackdrop'
import SiteFooter from '@/components/SiteFooter'

const siteUrl = 'https://brindavanchitfund.vercel.app'
const siteTitle = 'Brindavan Chits Karimnagar - Trusted Chit Fund Since 2007'
const siteDescription =
  'Brindavan Chits Karimnagar (India) Pvt. Ltd. - Serving 30,000+ members with transparent chit management. Established in 2007.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: 'chit fund, karimnagar, telangana, brindavan chits, chit schemes, investment',
  authors: [{ name: 'Brindavan Chits' }],
  icons: {
    icon: [{ url: '/logo.png', type: 'image/png' }],
    apple: [{ url: '/logo.png', type: 'image/png' }],
    shortcut: '/logo.png',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Brindavan Chits Karimnagar',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: '/logo.png',
        width: 1600,
        height: 900,
        alt: 'Brindavan Chits Karimnagar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/logo.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="relative min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 antialiased">
        <LanguageProvider>
          <SiteBackdrop />
          <div className="relative z-10 flex min-h-screen flex-col">
            <main className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
