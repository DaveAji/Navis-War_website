

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import AOSComponent from '../src/hooks/useAOS'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Navis War',
  description: 'Your favorite metaverse',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AOSComponent />
        {children}
      </body>
    </html>
  )
}
