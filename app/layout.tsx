import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Doral Spa — Luxury Wellness, Elevated | Abu Dhabi',
  description:
    'A refined wellness experience on Al Forsan Street, Khalifa City, Abu Dhabi. Open daily from 10:00 AM to 2:30 AM.',
  keywords: ['Doral Spa', 'Abu Dhabi spa', 'luxury wellness', 'Al Forsan', 'Khalifa City', 'massage', 'Moroccan bath'],
  openGraph: {
    title: 'Doral Spa — Luxury Wellness, Elevated',
    description: 'Doral Spa on Al Forsan Street, Khalifa City, Abu Dhabi. Open daily from 10:00 AM to 2:30 AM.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0f0c0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} bg-background`}>
      <body className="antialiased font-sans overflow-x-hidden">{children}</body>
    </html>
  )
}
