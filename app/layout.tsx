import type { Metadata, Viewport } from 'next'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import VideoModal from '@/components/VideoModal'

export const metadata: Metadata = {
  title: 'Brindavan Chits Karimnagar - Trusted Chit Fund Since 2007',
  description: 'Brindavan Chits Karimnagar (India) Pvt. Ltd. - Serving 30,000+ members with transparent chit management. Established in 2007.',
  keywords: 'chit fund, karimnagar, telangana, brindavan chits, chit schemes, investment',
  authors: [{ name: 'Brindavan Chits' }],
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
    <html lang="te" style={{ overflow: 'hidden' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ overflow: 'hidden', margin: 0, padding: 0 }}>
        <LanguageProvider>
          <VideoModal />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
