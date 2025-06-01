import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '../components/providers'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abhay Gupta - Developer Portfolio',
  description: 'Personal portfolio of Abhay Gupta - Full Stack Developer',
  keywords: ['developer', 'portfolio', 'react', 'nextjs', 'typescript'],
  authors: [{ name: 'Abhay Gupta' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
            <Navbar />
            <main className="pt-20">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
