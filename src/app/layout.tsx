import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AppProps } from 'next/app'
import { NextAuthProvider } from './_providers/NextAuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactElement
}) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}