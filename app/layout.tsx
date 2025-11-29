import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const merriweather = Merriweather({ 
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jack The Electrician | Trusted Electrical Services in Shepperton',
  description: 'Professional electrical services for homes and businesses in Shepperton, England. Specializing in Home Electrical, Business Electrical, and EICR certifications. Licensed, experienced, and reliable.',
  keywords: ['electrical services shepperton', 'home electrical shepperton', 'business electrical shepperton', 'EICR shepperton', 'electrician shepperton'],
  authors: [{ name: 'Jack The Electrician' }],
  openGraph: {
    title: 'Jack The Electrician | Trusted Electrical Services in Shepperton',
    description: 'Professional electrical services for homes and businesses in Shepperton, England.',
    url: 'https://www.jacktheelectrician.com',
    siteName: 'Jack The Electrician',
    locale: 'en_GB',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${merriweather.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  )
}