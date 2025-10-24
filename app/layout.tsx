import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Brindavan Chits Karimnagar - Trusted Chit Fund Since 2007',
  description: 'Brindavan Chits Karimnagar (India) Pvt. Ltd. - Serving 30,000+ members with transparent chit management. Established in 2007.',
  keywords: 'chit fund, karimnagar, telangana, brindavan chits, chit schemes, investment',
  authors: [{ name: 'Brindavan Chits' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
