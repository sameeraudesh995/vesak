import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vesak – Celebrating the Birth, Enlightenment & Passing of Lord Buddha',
  description:
    'Discover the timeless wisdom, compassion, and teachings of Lord Buddha. Celebrating Vesak — the most sacred day in the Buddhist calendar.',
  keywords: ['Vesak', 'Buddha', 'Buddhism', 'Dhamma', 'Enlightenment', 'Wesak', 'Buddha Purnima'],
  openGraph: {
    title: 'Vesak – Lord Buddha',
    description: 'Discover the timeless wisdom and teachings of Lord Buddha.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vesak – Lord Buddha',
    description: 'Discover the timeless wisdom and teachings of Lord Buddha.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
