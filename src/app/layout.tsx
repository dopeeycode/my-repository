import type { Metadata } from 'next'
import { Plus_Jakarta_Sans as PlusJakarta } from 'next/font/google'
import './globals.css'

const plusJakartaFont = PlusJakarta({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | dopeey',
    default: 'dopeey',
  },
  description: 'Ola eu me chamo italo, este é meu portfolio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={plusJakartaFont.className}>
        <main className="antialiased w-full h-screen bg-brand-neutrais text-washed-blue-50">
          {children}
        </main>
      </body>
    </html>
  )
}
