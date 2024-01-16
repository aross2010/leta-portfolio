import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Leta Pham Portfolio',
  description:
    'Leta Pham is an aspiring Interior Designer based in San Jose, CA currently pursuing a BFA in Interior Design at San Jose State University.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="!scroll-smooth"
    >
      <body
        className={`${inter.className} font-leta  bg-gray-50 text-gray-950 overflow-x-hidden`}
      >
        <Navbar />
        <main className="flex flex-col items-center gap-36 px-4 justify-center my-12 tracking-wide overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
