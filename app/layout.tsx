import type { Metadata } from 'next'
import { Inter, Jost } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })
const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-jost',
})

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
      className="!scroll-smooth overflow-x-hidden"
    >
      <body
        className={`${inter.className} ${jost.className} bg-gray-50 text-gray-950 tracking-wide max-w-[100vw] overflow-x-hidden flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex flex-col items-center gap-36 px-4 justify-center py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
