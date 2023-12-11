import type { Metadata } from 'next'
import { Space_Grotesk as SpaceGrotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = SpaceGrotesk({ subsets: ['latin'] })

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
      <body className={spaceGrotesk.className}>
        <main className="antialiased text-zinc-50">{children}</main>
      </body>
    </html>
  )
}
