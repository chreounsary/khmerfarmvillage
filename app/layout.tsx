import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'ភូមិកសិករខ្មែរ - ផលិតផលខ្មែរ​ពិតប្រាកដ',
  description: 'រកមើលផលិតផលកសិកម្ម និងសិប្បកម្មប្រពៃណីខ្មែរពិតប្រាកដ។ ស្រស់ ធម្មជាតិ និងមានភាពធន់ពីកសិករក្នុងស្រុក។',
  keywords: 'ផលិតផលខ្មែរ, កសិកម្ម, ធម្មជាតិ, សិប្បកម្មប្រពៃណី, ភូមិ, ពិតប្រាកដ',
  authors: [{ name: 'ភូមិកសិករខ្មែរ' }],
  robots: 'index, follow',
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    title: 'ភូមិកសិករខ្មែរ - ផលិតផលខ្មែរ​ពិតប្រាកដ',
    description: 'រកមើលផលិតផលកសិកម្ម និងសិប្បកម្មប្រពៃណីខ្មែរពិតប្រាកដ។',
    type: 'website',
    locale: 'km_KH',
    siteName: 'ភូមិកសិករខ្មែរ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ភូមិកសិករខ្មែរ - ផលិតផលខ្មែរ​ពិតប្រាកដ',
    description: 'រកមើលផលិតផលកសិកម្ម និងសិប្បកម្មប្រពៃណីខ្មែរពិតប្រាកដ។',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-gray-50">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
